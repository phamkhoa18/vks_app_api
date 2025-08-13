// rss.js - RSS Crawler đã được chuẩn hóa 100%
import fetch from 'node-fetch';
import axios from 'axios';
import { load } from 'cheerio';
import sanitize from 'sanitize-html';
import { parseStringPromise } from 'xml2js';
import ArticleServices from './services/ArticleService.js';
import Utils from './services/Utils.js';

// Cấu hình headers để tránh bị block
const getRandomHeaders = (refererUrl = 'https://vnexpress.net/') => {
  const userAgents = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  ];

  return {
    'User-Agent': userAgents[Math.floor(Math.random() * userAgents.length)],
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Accept-Language': 'vi-VN,vi;q=0.9,en-US;q=0.8,en;q=0.7',
    'Accept-Encoding': 'gzip, deflate, br',
    'Cache-Control': 'max-age=0',
    'Sec-Ch-Ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
    'Sec-Ch-Ua-Mobile': '?0',
    'Sec-Ch-Ua-Platform': '"Windows"',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'none',
    'Sec-Fetch-User': '?1',
    'Upgrade-Insecure-Requests': '1',
    'Referer': refererUrl,
    'Connection': 'keep-alive'
  };
};

// Hàm delay random
const randomDelay = (min = 1000, max = 3000) => {
  const delay = Math.floor(Math.random() * (max - min + 1)) + min;
  return new Promise(resolve => setTimeout(resolve, delay));
};

// Hàm retry với exponential backoff
const fetchWithRetry = async (url, maxRetries = 3, baseDelay = 1000) => {
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const headers = getRandomHeaders();
      const config = {
        headers,
        timeout: 30000, // 30 seconds timeout
        maxRedirects: 5,
        validateStatus: function (status) {
          return status >= 200 && status < 500; // Resolve only if the status code is less than 500
        }
      };

      console.log(`Attempt ${attempt + 1}/${maxRetries} for URL: ${url}`);
      
      const response = await axios.get(url, config);
      
      if (response.status === 406) {
        throw new Error(`HTTP 406: Not Acceptable`);
      }
      
      if (response.status !== 200) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return response;
    } catch (error) {
      console.error(`Attempt ${attempt + 1} failed:`, error.message);
      
      if (attempt === maxRetries - 1) {
        throw error; // Throw on final attempt
      }
      
      // Exponential backoff với jitter
      const delay = baseDelay * Math.pow(2, attempt) + Math.random() * 1000;
      console.log(`Waiting ${Math.round(delay)}ms before retry...`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
};

const RssCrawl = {
    fetchRssData_congly: async(req, res) => {
        try {
          await Utils.connectDB();
          const {url, category, source, author} = req.body;
          
          // Sử dụng fetch với headers để lấy RSS
          const headers = getRandomHeaders('https://congly.vn/');
          const response = await fetch(url, { 
            headers: {
              'User-Agent': headers['User-Agent'],
              'Accept': 'application/rss+xml, application/xml, text/xml',
              'Accept-Language': 'vi-VN,vi;q=0.9,en;q=0.8'
            }
          });
          
          if (!response.ok) {
            throw new Error(`Lỗi HTTP khi lấy RSS! trạng thái: ${response.status}`);
          }
          
          const text = await response.text();
          
          // Parse XML using xml2js
          const result = await parseStringPromise(text, { trim: true });

          // Extract items from the parsed XML
          const items = result.rss.channel[0].item || [];
          const articles = items.map(item => {
            // Extract description and remove CDATA
            const descriptionRaw = item.description?.[0] || '';
            const descriptionMatch = descriptionRaw.match(/<!\[CDATA\[(.*?)\]\]>/s);
            const description = descriptionMatch ? descriptionMatch[1].trim() : descriptionRaw;

            // Extract image URL from description HTML
            const imgMatch = description.match(/<img[^>]+src="([^"]+)"/);
            const imageUrl = imgMatch ? imgMatch[1] : '';

            return {
              title: item.title?.[0] || '',
              url: item.link?.[0] || '',
              description: description,
              image: imageUrl,
              published_date: item.pubDate?.[0] || '',
              category: category,
              source: source,
              author: author
            };
          });

          // Kiểm tra bài viết đã tồn tại chưa
          const checkResults = await Promise.all(
            articles.map(async (article) => {
              const exist = await ArticleServices.isArticleExist(article.title);
              return { article, exist };
            })
          );

          // Lọc ra bài mới
          const newArticles = checkResults
            .filter(item => !item.exist)
            .map(item => item.article);

          console.log(`Tìm thấy ${newArticles.length} bài viết mới trên Công lý.`);

          // Lấy chi tiết từng bài viết với delay và retry logic
          let successCount = 0;
          let skipCount = 0;
          
          for (let i = 0; i < newArticles.length; i++) {
            const article = newArticles[i];
            try {
              console.log(`📖 Processing article ${i + 1}/${newArticles.length}: ${article.title}`);
              
              // Random delay giữa các requests
              await randomDelay(2000, 5000);
              
              const fullArticle = await RssCrawl.detailCongLy(article);
              
              // Kiểm tra xem có lấy được chi tiết không
              if (fullArticle && fullArticle.content && fullArticle.content_html) {
                // Chỉ lưu khi lấy chi tiết thành công
                const savedArticle = await ArticleServices.saveArticleItem(fullArticle);
                successCount++;
                console.log(`✅ Saved article ${i + 1}/${newArticles.length} - ID: ${savedArticle._id}`);
              } else {
                // Bỏ qua bài này nếu không lấy được chi tiết
                skipCount++;
                console.log(`⏭️ Skipped article ${i + 1}/${newArticles.length} - No detail content: ${article.title}`);
              }
              
            } catch (err) {
              skipCount++;
              console.error(`❌ Error processing article ${i + 1}: ${article.title}`, err.message);
              console.log(`⏭️ Skipping and continue with next article...`);
              // Continue với bài tiếp theo thay vì dừng
              continue;
            }
          }

          console.log(`🎉 Hoàn tất crawl Công lý: ✅ ${successCount} saved, ⏭️ ${skipCount} skipped`);
          return res.json({
            status: 200,
            message: 'Hoàn tất crawl Công lý',
            total_new_articles: newArticles.length,
            successful_saves: successCount,
            skipped_articles: skipCount
          });

        } catch (error) {
          console.error("🔥 Lỗi khi lấy dữ liệu RSS Công lý:", error);
          return res.status(500).json({ 
            error: 'Lỗi khi crawl dữ liệu Công lý',
            details: error.message 
          });
        }
    },

    detailCongLy: async(item) => {
      try {
        console.log(`🔍 Fetching detail for: ${item.title}`);
        
        // Sử dụng fetchWithRetry thay vì axios.get trực tiếp
        const response = await fetchWithRetry(item.url, 3, 2000);
        const html = response.data;
        
        if (!html || html.trim().length === 0) {
          console.warn(`⚠️ Empty HTML response for: ${item.url}`);
          return null;
        }
        
        const $ = load(html);

        // Lấy thông tin cơ bản từ Công lý structure
        const title = $('.sc-longform-header-title').text().trim() || 
                      $('h1.title').text().trim() ||
                      $('.article-title').text().trim() ||
                      $('h1').first().text().trim() ||
                      item.title;

        const published_date = $('.sc-longform-header-date').text().trim() || 
                              $('.date').text().trim() ||
                              $('.publish-date').text().trim() ||
                              item.published_date;

        const description = $('.sc-longform-header-sapo').text().trim() || 
                           $('.article-sapo').text().trim() ||
                           $('.description').text().trim() ||
                           item.description;

        // Lấy ảnh chính
        let image = item.image;
        
        // Thử lấy từ meta og:image trước
        const ogImage = $('meta[property="og:image"]').attr('content');
        if (ogImage) {
          image = ogImage;
        } else {
          // Lấy từ sc-longform-header-media hoặc figure đầu tiên
          const headerImage = $('.sc-longform-header-media img').attr('src') ||
                             $('figure img').first().attr('src') ||
                             $('.article-image img').attr('src') ||
                             $('img').first().attr('src');
          
          if (headerImage) {
            // Xử lý URL tương đối
            if (headerImage.startsWith('//')) {
              image = 'https:' + headerImage;
            } else if (headerImage.startsWith('/')) {
              image = 'https://congly.vn' + headerImage;
            } else {
              image = headerImage;
            }
          }
        }

        // Lấy nội dung chính - Công lý có thể sử dụng nhiều selector khác nhau
        let $entry = $('.entry.entry-no-padding').clone();
        
        if ($entry.length === 0) {
          $entry = $('.article-content').clone();
        }
        
        if ($entry.length === 0) {
          $entry = $('.content-detail').clone();
        }
        
        if ($entry.length === 0) {
          $entry = $('.post-content').clone();
        }
        
        if ($entry.length === 0) {
          console.warn('⚠️ Không tìm thấy nội dung chính cho:', item.url);
          return null;
        }

        // Xóa các phần không cần thiết
        $entry.find('.sc-longform-header').remove(); // Xóa header
        $entry.find('.related-articles').remove(); // Xóa bài liên quan
        $entry.find('.advertisement').remove(); // Xóa quảng cáo
        $entry.find('.social-share').remove(); // Xóa nút share
        $entry.find('.tags').remove(); // Xóa tags
        $entry.find('.author-info').remove(); // Xóa thông tin tác giả
        $entry.find('.comment-section').remove(); // Xóa phần bình luận
        $entry.find('script').remove(); // Xóa script
        $entry.find('style').remove(); // Xóa style

        // Xử lý hình ảnh trong nội dung
        $entry.find('img').each((_, el) => {
          const $img = $(el);
          let imgSrc = $img.attr('src') || 
                      $img.attr('data-src') || 
                      $img.attr('data-original');
          
          if (imgSrc) {
            // Xử lý URL tương đối
            if (imgSrc.startsWith('//')) {
              imgSrc = 'https:' + imgSrc;
            } else if (imgSrc.startsWith('/')) {
              imgSrc = 'https://congly.vn' + imgSrc;
            }
            
            $img.attr('src', imgSrc);
            $img.attr('style', 'max-width: 100%; height: auto; display: block; margin: 10px auto;');
            $img.removeAttr('data-src data-original data-srcset loading class');
          } else {
            console.warn('⚠️ Không tìm thấy src cho img, đã xóa');
            $img.remove();
          }
        });

        // Xử lý figure và figcaption
        $entry.find('figure').each((_, el) => {
          const $figure = $(el);
          
          // Xóa các element không cần thiết trong figure
          $figure.find('.action_thumb').remove();
          $figure.find('meta').remove();
          
          const $img = $figure.find('img');
          if ($img.length === 0 || !$img.attr('src')) {
            $figure.remove();
            return;
          }
          
          $figure.attr('style', 'margin: 20px 0; text-align: center;');
          
          const $caption = $figure.find('figcaption');
          if ($caption.length > 0) {
            $caption.attr('style', 'font-style: italic; color: #666; margin-top: 8px; font-size: 14px;');
          }
        });

        // Xử lý links
        $entry.find('a').each((_, el) => {
          const $link = $(el);
          $link.attr('target', '_blank');
          $link.attr('rel', 'noopener noreferrer');
        });

        // Sanitize HTML với config mở rộng
        let raw_clean_html = sanitize($entry.html() || '', {
          allowedTags: [
            'p', 'b', 'i', 'em', 'strong', 'a', 'ul', 'ol', 'li', 'br', 'div',
            'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'img', 'figure', 
            'figcaption', 'blockquote'
          ],
          allowedAttributes: {
            a: ['href', 'target', 'rel'],
            img: ['src', 'alt', 'style', 'title'],
            figure: ['style'],
            figcaption: ['style'],
            p: ['style'],
            div: ['style'],
            span: ['style']
          },
          allowedStyles: {
            '*': {
              'color': [/^#([0-9a-f]{3}|[0-9a-f]{6})$/i, /^rgb\(\d+,\s*\d+,\s*\d+\)$/],
              'font-size': [/^\d+(?:px|em|rem|%)$/],
              'font-style': [/^italic$/],
              'font-weight': [/^(bold|normal|\d+)$/],
              'text-align': [/^(left|right|center|justify)$/],
              'margin': [/^[\d\s\w%.-]+$/],
              'margin-top': [/^[\d\w%.-]+$/],
              'margin-bottom': [/^[\d\w%.-]+$/],
              'padding': [/^[\d\s\w%.-]+$/],
              'max-width': [/^100%$/],
              'width': [/^100%$/],
              'height': [/^auto$/],
              'display': [/^(block|inline|inline-block)$/]
            }
          },
          transformTags: {
            'div': function(tagName, attribs) {
              if (!attribs.class || attribs.class.trim() === '') {
                return {
                  tagName: 'p',
                  attribs: attribs
                };
              }
              return {
                tagName: tagName,
                attribs: attribs
              };
            }
          },
          exclusiveFilter: function(frame) {
            return frame.tag === 'p' && !frame.text.trim();
          },
          textFilter: function(text) {
            return text.replace(/\n+/g, ' ').replace(/\s+/g, ' ').trim();
          }
        });

        // Lấy text thuần không có HTML
        const content = $entry.text()
          .replace(/\s+/g, ' ')
          .replace(/\n+/g, ' ')
          .trim();

        // Kiểm tra content có đủ dài không (tối thiểu 100 ký tự)
        if (!content || content.length < 100) {
          console.warn(`⚠️ Content quá ngắn hoặc rỗng cho: ${item.url}`);
          return null;
        }

        // Tạo AI summary
        let content_ai_summary = null;
        try {
          if (typeof Utils !== 'undefined' && Utils.ai_summary) {
            content_ai_summary = await Utils.ai_summary(description + ' ' + content);
          }
        } catch (aiError) {
          console.warn('⚠️ Không thể tạo AI summary:', aiError.message);
        }

        const fullArticle = {
          title,
          url: item.url,
          image,
          description,
          published_date: published_date || null,
          content,
          content_html: raw_clean_html, 
          category: item.category,
          summary_array: content_ai_summary?.summaryArray || [],
          summary: content_ai_summary?.summary || description,
          source: item.source,
          author: item.author,
        };

        console.log(`✅ Successfully processed: ${title}`);
        return fullArticle;

      } catch (error) {
        console.error(`❌ Lỗi khi lấy chi tiết bài viết ${item.title}:`, error.message);
        console.error('🔗 URL:', item.url);
        
        // Log chi tiết hơn để debug
        if (error.response) {
          console.error(`📊 Response status: ${error.response.status}`);
          console.error(`📋 Response headers:`, error.response.headers);
        }
        
        return null;
      }
    },

    fetchRssData_vnexpress: async(req, res) => {
        try {
          await Utils.connectDB();
          const {url, category, source, author} = req.body;
          
          // Sử dụng fetch với headers để lấy RSS
          const headers = getRandomHeaders('https://vnexpress.net/');
          const response = await fetch(url, { 
            headers: {
              'User-Agent': headers['User-Agent'],
              'Accept': 'application/rss+xml, application/xml, text/xml',
              'Accept-Language': 'vi-VN,vi;q=0.9,en;q=0.8'
            }
          });
          
          if (!response.ok) {
            throw new Error(`Lỗi HTTP khi lấy RSS! trạng thái: ${response.status}`);
          }
          
          const text = await response.text();
          
          // Parse XML using xml2js
          const result = await parseStringPromise(text, { trim: true });

          // Extract items from the parsed XML
          const items = result.rss.channel[0].item || [];
          const articles = items.map(item => {
            const descriptionRaw = item.description?.[0] || '';
            const descriptionMatch = descriptionRaw.match(/<!\[CDATA\[(.*?)\]\]>/s);
            const description = descriptionMatch ? descriptionMatch[1].trim() : descriptionRaw;

            const imgMatch = description.match(/<img[^>]+src="([^"]+)"/);
            const imageUrl = imgMatch ? imgMatch[1] : '';

            return {
              title: item.title?.[0] || '',
              url: item.link?.[0] || '',
              description: description,
              image: imageUrl,
              published_date: item.pubDate?.[0] || '',
              category: category,
              source: source,
              author: author
            };
          });

          // Kiểm tra bài viết đã tồn tại chưa
          const checkResults = await Promise.all(
            articles.map(async (article) => {
              const exist = await ArticleServices.isArticleExist(article.title);
              return { article, exist };
            })
          );

          // Lọc ra bài mới
          const newArticles = checkResults
            .filter(item => !item.exist)
            .map(item => item.article);

          console.log(`Tìm thấy ${newArticles.length} bài viết mới trên VnExpress.`);

          // Lấy chi tiết từng bài viết với delay
          let successCount = 0;
          let skipCount = 0;
          
          for (let i = 0; i < newArticles.length; i++) {
            const article = newArticles[i];
            try {
              console.log(`📖 Processing article ${i + 1}/${newArticles.length}: ${article.title}`);
              
              // Random delay giữa các requests
              await randomDelay(2000, 5000);
              
              const fullArticle = await RssCrawl.detailVnExpress(article);
              
              // Kiểm tra xem có lấy được chi tiết không
              if (fullArticle && fullArticle.content && fullArticle.content_html) {
                // Chỉ lưu khi lấy chi tiết thành công
                const savedArticle = await ArticleServices.saveArticleItem(fullArticle);
                successCount++;
                console.log(`✅ Saved article ${i + 1}/${newArticles.length} - ID: ${savedArticle._id}`);
              } else {
                // Bỏ qua bài này nếu không lấy được chi tiết
                skipCount++;
                console.log(`⏭️ Skipped article ${i + 1}/${newArticles.length} - No detail content: ${article.title}`);
              }
              
            } catch (err) {
              skipCount++;
              console.error(`❌ Error processing article ${i + 1}: ${article.title}`, err.message);
              console.log(`⏭️ Skipping and continue with next article...`);
              // Continue với bài tiếp theo thay vì dừng
              continue;
            }
          }

          console.log(`🎉 Hoàn tất crawl VnExpress: ✅ ${successCount} saved, ⏭️ ${skipCount} skipped`);
          return res.json({
            status: 200,
            message: 'Hoàn tất crawl Vnexpress',
            total_new_articles: newArticles.length,
            successful_saves: successCount,
            skipped_articles: skipCount
          });

        } catch (error) {
          console.error("🔥 Lỗi khi lấy dữ liệu RSS VnExpress:", error);
          return res.status(500).json({ 
            error: 'Lỗi khi crawl dữ liệu VnExpress',
            details: error.message 
          });
        }
      },

      detailVnExpress: async(item) => {
        try {
          console.log(`🔍 Fetching detail for: ${item.title}`);
          
          // Sử dụng fetchWithRetry thay vì axios.get trực tiếp
          const response = await fetchWithRetry(item.url, 3, 2000);
          const html = response.data;
          
          if (!html || html.trim().length === 0) {
            console.warn(`⚠️ Empty HTML response for: ${item.url}`);
            return null; // Trả về null thay vì object rỗng
          }
          
          const $ = load(html);

          // Lấy title từ h1.title-detail hoặc fallback về item.title
          const title = $('h1.title-detail').text().trim() || 
                        $('.title-detail').text().trim() || 
                        item.title;

          // Lấy description từ p.description
          const description = $('p.description').text().trim() || 
                            $('.description').first().text().trim() || 
                            item.description;

          // Lấy thời gian xuất bản từ .date
          let published_date = $('.date').text().trim() || item.published_date;
          
          // Parse date nếu có định dạng "Thứ tư, 13/8/2025, 13:42 (GMT+7)"
          if (published_date && published_date.includes('/')) {
            try {
              const dateMatch = published_date.match(/(\d{1,2}\/\d{1,2}\/\d{4})/);
              if (dateMatch) {
                const [day, month, year] = dateMatch[1].split('/');
                published_date = new Date(year, month - 1, day).toISOString();
              }
            } catch (dateError) {
              console.warn('⚠️ Không thể parse date:', published_date);
              published_date = item.published_date;
            }
          }

          // Lấy ảnh chính - VnExpress có nhiều source khác nhau
          let image = item.image;
          
          // Thử lấy từ meta og:image trước
          const ogImage = $('meta[property="og:image"]').attr('content');
          if (ogImage) {
            image = ogImage;
          } else {
            // Tìm figure đầu tiên có ảnh
            const $firstFigure = $('figure').first();
            if ($firstFigure.length > 0) {
              const figureImg = $firstFigure.find('img').attr('src') ||
                              $firstFigure.find('img').attr('data-src') ||
                              $firstFigure.find('source').attr('srcset')?.split(' ')[0] ||
                              $firstFigure.find('source').attr('data-srcset')?.split(' ')[0];
              
              if (figureImg) {
                image = figureImg;
              }
            }
            
            // Nếu vẫn không có, thử tìm từ meta itemprop
            if (!image || image === item.image) {
              const metaImg = $('meta[itemprop="url"]').attr('content') ||
                            $('meta[itemprop="image"]').attr('content');
              if (metaImg) {
                image = metaImg;
              }
            }
          }

          // Lấy tác giả
          let author = item.author;

          // Lấy nội dung chính từ article.fck_detail
          const $article = $('article.fck_detail').clone();
          
          if ($article.length === 0) {
            console.warn('⚠️ Không tìm thấy nội dung chính cho:', item.url);
            return null; // Trả về null thay vì object thiếu content
          }

          // Xóa các phần không cần thiết
          $article.find('.width_common.box-tinlienquanv2').remove();
          $article.find('#sis_outstream_container').remove();
          $article.find('.box_brief_info').remove();
          $article.find('span[id="article-end"]').remove();
          $article.find('p[style*="text-align:right"]').last().remove();

          // Xử lý hình ảnh trong nội dung
          $article.find('img').each((_, el) => {
            const $img = $(el);
            let imgSrc = null;
            
            imgSrc = $img.attr('src') ||
                    $img.attr('data-src') ||
                    $img.attr('data-original');
            
            if (!imgSrc) {
              const $figure = $img.closest('figure');
              if ($figure.length > 0) {
                const metaUrl = $figure.find('meta[itemprop="url"]').attr('content');
                if (metaUrl) {
                  imgSrc = metaUrl;
                } else {
                  const $picture = $img.closest('picture') || $figure.find('picture');
                  if ($picture.length > 0) {
                    const sourceUrl = $picture.find('source').attr('srcset')?.split(' ')[0] ||
                                    $picture.find('source').attr('data-srcset')?.split(' ')[0] ||
                                    $picture.find('img').attr('src') ||
                                    $picture.find('img').attr('data-src');
                    if (sourceUrl) {
                      imgSrc = sourceUrl;
                    }
                  }
                }
              }
            }
            
            if (imgSrc) {
              if (imgSrc.startsWith('//')) {
                imgSrc = 'https:' + imgSrc;
              } else if (imgSrc.startsWith('/')) {
                imgSrc = 'https://vnexpress.net' + imgSrc;
              }
              
              $img.attr('src', imgSrc);
              $img.attr('style', 'max-width: 100%; height: auto; display: block; margin: 10px auto;');
              $img.removeAttr('data-src data-original data-srcset data-ll-status intrinsicsize loading lazied class');
            } else {
              console.warn('⚠️ Không tìm thấy src cho img, đã xóa:', $img.attr('alt') || 'no alt');
              $img.remove();
            }
          });

          // Xử lý figure và figcaption
          $article.find('figure').each((_, el) => {
            const $figure = $(el);
            
            $figure.find('.action_thumb').remove();
            $figure.find('meta').remove();
            $figure.find('.fig-picture').removeClass('el_valid');
            
            const $img = $figure.find('img');
            const $picture = $figure.find('picture');
            
            if ($picture.length > 0) {
              const $source = $picture.find('source').first();
              const $pictureImg = $picture.find('img').first();
              
              let imgUrl = null;
              
              if ($source.length > 0) {
                const srcset = $source.attr('srcset') || $source.attr('data-srcset');
                if (srcset) {
                  imgUrl = srcset.split(',')[0].trim().split(' ')[0];
                }
              }
              
              if (!imgUrl && $pictureImg.length > 0) {
                imgUrl = $pictureImg.attr('src') || $pictureImg.attr('data-src');
              }
              
              if (imgUrl) {
                const newImg = $('<img>');
                newImg.attr('src', imgUrl);
                newImg.attr('alt', $pictureImg.attr('alt') || '');
                newImg.attr('style', 'max-width: 100%; height: auto; display: block; margin: 10px auto;');
                
                $picture.replaceWith(newImg);
              } else {
                $picture.remove();
              }
            }
            
            const $finalImg = $figure.find('img');
            if ($finalImg.length === 0 || !$finalImg.attr('src')) {
              $figure.remove();
              return;
            }
            
            $figure.attr('style', 'margin: 20px 0; text-align: center;');
            
            const $caption = $figure.find('figcaption p.Image, figcaption');
            if ($caption.length > 0) {
              $caption.attr('style', 'font-style: italic; color: #666; margin-top: 8px; font-size: 14px;');
            }
          });

          // Xử lý links
          $article.find('a').each((_, el) => {
            const $link = $(el);
            $link.attr('target', '_blank');
            $link.attr('rel', 'noopener noreferrer');
          });

          // Làm sạch HTML bằng sanitize-html
          let raw_clean_html = sanitize($article.html() || '', {
            allowedTags: [
              'p', 'b', 'i', 'em', 'strong', 'a', 'ul', 'ol', 'li', 'br', 'div',
              'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'img', 'figure', 
              'figcaption', 'blockquote'
            ],
            allowedAttributes: {
              a: ['href', 'target', 'rel'],
              img: ['src', 'alt', 'style', 'title'],
              figure: ['style'],
              figcaption: ['style'],
              p: ['style'],
              div: ['style'],
              span: ['style']
            },
            allowedStyles: {
              '*': {
                'color': [/^#([0-9a-f]{3}|[0-9a-f]{6})$/i, /^rgb\(\d+,\s*\d+,\s*\d+\)$/],
                'font-size': [/^\d+(?:px|em|rem|%)$/],
                'font-style': [/^italic$/],
                'font-weight': [/^(bold|normal|\d+)$/],
                'text-align': [/^(left|right|center|justify)$/],
                'margin': [/^[\d\s\w%.-]+$/],
                'margin-top': [/^[\d\w%.-]+$/],
                'margin-bottom': [/^[\d\w%.-]+$/],
                'padding': [/^[\d\s\w%.-]+$/],
                'max-width': [/^100%$/],
                'width': [/^100%$/],
                'height': [/^auto$/],
                'display': [/^(block|inline|inline-block)$/]
              }
            },
            transformTags: {
              'div': function(tagName, attribs) {
                if (!attribs.class || attribs.class.trim() === '') {
                  return {
                    tagName: 'p',
                    attribs: attribs
                  };
                }
                return {
                  tagName: tagName,
                  attribs: attribs
                };
              }
            },
            exclusiveFilter: function(frame) {
              return frame.tag === 'p' && !frame.text.trim();
            },
            textFilter: function(text) {
              return text.replace(/\n+/g, ' ').replace(/\s+/g, ' ').trim();
            }
          });

          // Lấy text thuần không có HTML
          const content = $article.text()
            .replace(/\s+/g, ' ')
            .replace(/\n+/g, ' ')
            .trim();

          // Kiểm tra content có đủ dài không (tối thiểu 100 ký tự)
          if (!content || content.length < 100) {
            console.warn(`⚠️ Content quá ngắn hoặc rỗng cho: ${item.url}`);
            return null; // Trả về null nếu content quá ngắn
          }

          // Tạo AI summary (nếu có Utils.ai_summary)
          let content_ai_summary = null;
          try {
            if (typeof Utils !== 'undefined' && Utils.ai_summary) {
              content_ai_summary = await Utils.ai_summary(description + ' ' + content);
            }
          } catch (aiError) {
            console.warn('⚠️ Không thể tạo AI summary:', aiError.message);
          }

          // Tạo object kết quả
          const fullArticle = {
            title,
            url: item.url,
            image,
            description,
            published_date,
            content,
            content_html: raw_clean_html,
            category: item.category || 'Pháp luật',
            summary_array: content_ai_summary?.summaryArray || [],
            summary: content_ai_summary?.summary || description,
            source: item.source || 'VnExpress',
            author: author || 'VnExpress'
          };

          console.log(`✅ Successfully processed: ${title}`);
          return fullArticle;

        } catch (error) {
          console.error(`❌ Lỗi khi lấy chi tiết bài viết ${item.title}:`, error.message);
          console.error('🔗 URL:', item.url);
          
          // Log chi tiết hơn để debug
          if (error.response) {
            console.error(`📊 Response status: ${error.response.status}`);
            console.error(`📋 Response headers:`, error.response.headers);
          }
          
          // Trả về null thay vì object lỗi
          return null;
        }
      }
}

export default RssCrawl;