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
              const exist = await ArticleServices.isArticleExist(article);
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
              const exist = await ArticleServices.isArticleExist(article);
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

fetchRssData_tuoitre: async(req, res) => {
    try {
      await Utils.connectDB();
      const {url, category, source, author} = req.body;
      
      // Sử dụng fetch với headers để lấy RSS
      const headers = getRandomHeaders('https://tuoitre.vn/');
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
          const exist = await ArticleServices.isArticleExist(article);
          return { article, exist };
        })
      );

      // Lọc ra bài mới
      const newArticles = checkResults
        .filter(item => !item.exist)
        .map(item => item.article);

      console.log(`Tìm thấy ${newArticles.length} bài viết mới trên Tuổi Trẻ.`);

      // Lấy chi tiết từng bài viết với delay và retry logic
      // Xử lý ngược từ cuối lên đầu để ưu tiên tin mới
      let successCount = 0;
      let skipCount = 0;
      
      for (let i = newArticles.length - 1; i >= 0; i--) {
        const article = newArticles[i];
        const currentIndex = newArticles.length - i;
        try {
          console.log(`📖 Processing article ${currentIndex}/${newArticles.length}: ${article.title}`);
          
          // Random delay giữa các requests
          await randomDelay(2000, 5000);
          
          const fullArticle = await RssCrawl.detailTuoiTre(article);
          
          // Kiểm tra xem có lấy được chi tiết không
          if (fullArticle && fullArticle.content && fullArticle.content_html) {
            // Chỉ lưu khi lấy chi tiết thành công
            const savedArticle = await ArticleServices.saveArticleItem(fullArticle);
            successCount++;
            console.log(`✅ Saved article ${currentIndex}/${newArticles.length} - ID: ${savedArticle._id}`);
          } else {
            // Bỏ qua bài này nếu không lấy được chi tiết
            skipCount++;
            console.log(`⏭️ Skipped article ${currentIndex}/${newArticles.length} - No detail content: ${article.title}`);
          }
          
        } catch (err) {
          skipCount++;
          console.error(`❌ Error processing article ${currentIndex}: ${article.title}`, err.message);
          console.log(`⏭️ Skipping and continue with next article...`);
          // Continue với bài tiếp theo thay vì dừng
          continue;
        }
      }

      console.log(`🎉 Hoàn tất crawl Tuổi Trẻ: ✅ ${successCount} saved, ⏭️ ${skipCount} skipped`);
      return res.json({
        status: 200,
        message: 'Hoàn tất crawl Tuổi Trẻ',
        total_new_articles: newArticles.length,
        successful_saves: successCount,
        skipped_articles: skipCount
      });

    } catch (error) {
      console.error("🔥 Lỗi khi lấy dữ liệu RSS Tuổi Trẻ:", error);
      return res.status(500).json({ 
        error: 'Lỗi khi crawl dữ liệu Tuổi Trẻ',
        details: error.message 
      });
    }
},
detailTuoiTre: async(item) => {
  try {
    console.log(`🔍 Fetching detail for: ${item.title}`);
    
    // Sử dụng fetchWithRetry thay vì axios.get trực tiếp
    const response = await fetchWithRetry(item.url, 3, 2000);
    let html = response.data;
    
    if (!html || html.trim().length === 0) {
      console.warn(`⚠️ Empty HTML response for: ${item.url}`);
      return null;
    }
    
    // Chỉ xóa script để ngăn dynamic content - giữ nguyên HTML structure
    html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    
    const $ = load(html);

    // Lấy thông tin cơ bản từ Tuổi Trẻ structure
    const title = $('h1.detail-title').text().trim() || 
                  $('h1.article-title').text().trim() ||
                  $('.title-1').text().trim() ||
                  $('h1').first().text().trim() ||
                  item.title;

    const published_date = $('.date-time').text().trim() || 
                          $('.detail-time').text().trim() ||
                          $('.publish-date').text().trim() ||
                          item.published_date;

    const description = $('.detail-sapo').text().trim() || 
                       $('.sapo').text().trim() ||
                       $('.article-sapo').text().trim() ||
                       item.description;

    // Lấy ảnh chính
    let image = item.image;
    
    // Thử lấy từ meta og:image trước
    const ogImage = $('meta[property="og:image"]').attr('content');
    if (ogImage) {
      image = ogImage;
    } else {
      // Lấy từ detail-img-avatar hoặc figure đầu tiên
      const headerImage = $('.detail-img-avatar img').attr('src') ||
                         $('.detail-img img').attr('src') ||
                         $('figure img').first().attr('src') ||
                         $('.article-image img').attr('src') ||
                         $('img').first().attr('src');
      
      if (headerImage) {
        // Xử lý URL tương đối
        if (headerImage.startsWith('//')) {
          image = 'https:' + headerImage;
        } else if (headerImage.startsWith('/')) {
          image = 'https://tuoitre.vn' + headerImage;
        } else {
          image = headerImage;
        }
      }
    }

    // Lấy nội dung chính - Tuổi Trẻ sử dụng div#main-detail-body
    let $entry = $('#main-detail-body').clone();
    
    if ($entry.length === 0) {
      $entry = $('.detail-content').clone();
    }
    
    if ($entry.length === 0) {
      $entry = $('.article-content').clone();
    }
    
    if ($entry.length === 0) {
      $entry = $('.content-detail').clone();
    }
    
    if ($entry.length === 0) {
      console.warn('⚠️ Không tìm thấy nội dung chính cho:', item.url);
      return null;
    }

    // Xóa div có class VCSortableInPreviewMode và tất cả nội dung bên trong
    $entry.find('div.VCSortableInPreviewMode').remove();

    // Xóa div chứa các link "Đọc tiếp" và "Về trang Chủ đề"
    $entry.find('div').each((_, el) => {
      const $div = $(el);
      const links = $div.find('a').toArray();
      if (links.length === 2 && 
          $(links[0]).text().trim() === 'Đọc tiếp' && 
          $(links[1]).text().trim() === 'Về trang Chủ đề') {
        $div.remove();
      }
    });

    // Xóa các phần không cần thiết
    $entry.find('.detail-ads').remove(); // Xóa quảng cáo
    $entry.find('.related-news').remove(); // Xóa tin liên quan
    $entry.find('.detail-social').remove(); // Xóa social buttons
    $entry.find('.detail-author').remove(); // Xóa thông tin tác giả
    $entry.find('.detail-tags').remove(); // Xóa tags
    $entry.find('.comment-section').remove(); // Xóa phần bình luận
    $entry.find('.zalo-share-button').remove(); // Xóa nút chia sẻ Zalo
    $entry.find('.fb-like').remove(); // Xóa Facebook like
    $entry.find('script').remove(); // Xóa script
    $entry.find('style').remove(); // Xóa style
    $entry.find('.ads').remove(); // Xóa các banner quảng cáo khác
    $entry.find('[id*="ads"]').remove(); // Xóa element có id chứa "ads"
    $entry.find('[class*="ads"]').remove(); // Xóa element có class chứa "ads"

    // Xử lý hình ảnh trong nội dung
    $entry.find('img').each((_, el) => {
      const $img = $(el);
      let imgSrc = $img.attr('src') || 
                  $img.attr('data-src') || 
                  $img.attr('data-original') ||
                  $img.attr('data-lazy');
      
      if (imgSrc) {
        // Xử lý URL tương đối
        if (imgSrc.startsWith('//')) {
          imgSrc = 'https:' + imgSrc;
        } else if (imgSrc.startsWith('/')) {
          imgSrc = 'https://tuoitre.vn' + imgSrc;
        }
        
        $img.attr('src', imgSrc);
        $img.attr('style', 'max-width: 100%; height: auto; display: block; margin: 10px auto;');
        $img.removeAttr('data-src data-original data-srcset data-lazy loading class');
      } else {
        console.warn('⚠️ Không tìm thấy src cho img, đã xóa');
        $img.remove();
      }
    });

    // Xử lý figure và figcaption
    $entry.find('figure').each((_, el) => {
      const $figure = $(el);
      
      // Xóa các element không cần thiết trong figure
      $figure.find('.fig-caption-credit').remove();
      $figure.find('.action_thumb').remove();
      $figure.find('meta').remove();
      
      const $img = $figure.find('img');
      if ($img.length === 0 || !$img.attr('src')) {
        $figure.remove();
        return;
      }
      
      $figure.attr('style', 'margin: 20px 0; text-align: center;');
      
      const $caption = $figure.find('figcaption, .fig-caption');
      if ($caption.length > 0) {
        $caption.attr('style', 'font-style: italic; color: #666; margin-top: 8px; font-size: 14px;');
      }
    });

    // Xử lý table nếu có
    $entry.find('table').each((_, el) => {
      const $table = $(el);
      $table.attr('style', 'width: 100%; border-collapse: collapse; margin: 15px 0;');
      $table.find('td, th').attr('style', 'border: 1px solid #ddd; padding: 8px; text-align: left;');
      $table.find('th').attr('style', 'border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f2f2f2; font-weight: bold;');
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
        'figcaption', 'blockquote', 'table', 'thead', 'tbody', 'tr', 'td', 'th'
      ],
      allowedAttributes: {
        a: ['href', 'target', 'rel'],
        img: ['src', 'alt', 'style', 'title'],
        figure: ['style'],
        figcaption: ['style'],
        p: ['style'],
        div: ['style'],
        span: ['style'],
        table: ['style'],
        td: ['style'],
        th: ['style'],
        tr: ['style']
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
          'display': [/^(block|inline|inline-block)$/],
          'border': [/^[\d\s\w#%.-]+$/],
          'border-collapse': [/^collapse$/],
          'background-color': [/^#([0-9a-f]{3}|[0-9a-f]{6})$/i, /^rgb\(\d+,\s*\d+,\s*\d+\)$/]
        }
      },
      transformTags: {
        'div': function(tagName, attribs) {
          // Chuyển div thành p nếu không có class hoặc class rỗng
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

fetchRssData_thanhnien: async(req, res) => {
    try {
      await Utils.connectDB();
      const {url, category, source, author} = req.body;
      
      // Sử dụng fetch với headers để lấy RSS
      const headers = getRandomHeaders('https://thanhnien.vn/');
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

        // Extract title and remove CDATA
        const titleRaw = item.title?.[0] || '';
        const titleMatch = titleRaw.match(/<!\[CDATA\[(.*?)\]\]>/s);
        const title = titleMatch ? titleMatch[1].trim() : titleRaw;

        return {
          title: title,
          url: item.link?.[0] || '',
          description: description,
          image: imageUrl,
          published_date: item.pubDate?.[0] || '',
          category: category,
          source: source,
          author: author
        };
      });

      // THÊM: Giới hạn chỉ lấy 20 bài mới nhất
      const limitedArticles = articles.slice(0, 20);
      console.log(`📰 Tổng số bài: ${articles.length}, Lấy ${limitedArticles.length} bài mới nhất`);

      // Kiểm tra bài viết đã tồn tại chưa
      const checkResults = await Promise.all(
        limitedArticles.map(async (article) => {
          const exist = await ArticleServices.isArticleExist(article);
          return { article, exist };
        })
      );

      // Lọc ra bài mới
      const newArticles = checkResults
        .filter(item => !item.exist)
        .map(item => item.article);

      console.log(`Tìm thấy ${newArticles.length} bài viết mới trên Thanh Niên.`);

      // Lấy chi tiết từng bài viết với delay và retry logic
      // Xử lý ngược từ cuối lên đầu để ưu tiên tin mới
      let successCount = 0;
      let skipCount = 0;
      
      for (let i = newArticles.length - 1; i >= 0; i--) {
        const article = newArticles[i];
        const currentIndex = newArticles.length - i;
        try {
          console.log(`📖 Processing article ${currentIndex}/${newArticles.length}: ${article.title}`);
          
          // Random delay giữa các requests
          await randomDelay(2000, 5000);
          
          const fullArticle = await RssCrawl.detailThanhNien(article);
          
          // Kiểm tra xem có lấy được chi tiết không
          if (fullArticle && fullArticle.content && fullArticle.content_html) {
            // Chỉ lưu khi lấy chi tiết thành công
            const savedArticle = await ArticleServices.saveArticleItem(fullArticle);
            successCount++;
            console.log(`✅ Saved article ${currentIndex}/${newArticles.length} - ID: ${savedArticle._id}`);
          } else {
            // Bỏ qua bài này nếu không lấy được chi tiết
            skipCount++;
            console.log(`⏭️ Skipped article ${currentIndex}/${newArticles.length} - No detail content: ${article.title}`);
          }
          
        } catch (err) {
          skipCount++;
          console.error(`❌ Error processing article ${currentIndex}: ${article.title}`, err.message);
          console.log(`⏭️ Skipping and continue with next article...`);
          // Continue với bài tiếp theo thay vì dừng
          continue;
        }
      }

      console.log(`🎉 Hoàn tất crawl Thanh Niên: ✅ ${successCount} saved, ⏭️ ${skipCount} skipped`);
      return res.json({
        status: 200,
        message: 'Hoàn tất crawl Thanh Niên',
        total_articles: articles.length,
        processed_articles: limitedArticles.length,
        new_articles: newArticles.length,
        successful_saves: successCount,
        skipped_articles: skipCount
      });

    } catch (error) {
      console.error("🔥 Lỗi khi lấy dữ liệu RSS Thanh Niên:", error);
      return res.status(500).json({ 
        error: 'Lỗi khi crawl dữ liệu Thanh Niên',
        details: error.message 
      });
    }
},

detailThanhNien: async(item) => {
  try {
    console.log(`🔍 Fetching detail for: ${item.title}`);
    
    // Sử dụng fetchWithRetry thay vì axios.get trực tiếp
    const response = await fetchWithRetry(item.url, 3, 2000);
    let html = response.data;
    
    if (!html || html.trim().length === 0) {
      console.warn(`⚠️ Empty HTML response for: ${item.url}`);
      return null;
    }
    
    // Xóa script để ngăn dynamic content
    html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    
    const $ = load(html);

    // Lấy thông tin cơ bản từ Thanh Niên structure
    const title = $('h1.detail-title').text().trim() || 
                  $('h1[data-role="title"]').text().trim() ||
                  $('h1').first().text().trim() ||
                  item.title;

    const published_date = $('.detail-time [data-role="publishdate"]').text().trim() || 
                          $('.detail-time').text().trim() ||
                          item.published_date;

    const description = $('h2.detail-sapo[data-role="sapo"]').text().trim() || 
                       $('.detail-sapo').text().trim() ||
                       item.description;

    // Lấy ảnh chính
    let image = item.image;
    
    // Thử lấy từ meta og:image trước
    const ogImage = $('meta[property="og:image"]').attr('content');
    if (ogImage) {
      image = ogImage;
    } else {
      // Lấy từ detail-content hoặc ảnh đầu tiên
      const headerImage = $('.detail-content figure img').first().attr('src') ||
                         $('.detail-content img').first().attr('src') ||
                         $('img').first().attr('src');
      
      if (headerImage) {
        // Xử lý URL tương đối
        if (headerImage.startsWith('//')) {
          image = 'https:' + headerImage;
        } else if (headerImage.startsWith('/')) {
          image = 'https://thanhnien.vn' + headerImage;
        } else {
          image = headerImage;
        }
      }
    }

    // Lấy nội dung chính - Thanh Niên sử dụng .detail-content[data-role="content"]
    let $entry = $('.detail-content[data-role="content"]').clone();
    
    if ($entry.length === 0) {
      $entry = $('.detail-cmain .detail-content').clone();
    }
    
    if ($entry.length === 0) {
      $entry = $('.afcbc-body').clone();
    }
    
    if ($entry.length === 0) {
      console.warn('⚠️ Không tìm thấy nội dung chính cho:', item.url);
      return null;
    }

    // Xóa div có class VCSortableInPreviewMode và tất cả nội dung bên trong
    $entry.find('div.VCSortableInPreviewMode').remove();

    // Xóa các phần không cần thiết
    $entry.find('.detail-ads').remove(); // Xóa quảng cáo
    $entry.find('.related-news').remove(); // Xóa tin liên quan
    $entry.find('.detail-social').remove(); // Xóa social buttons
    $entry.find('.detail-author').remove(); // Xóa thông tin tác giả
    $entry.find('.detail-tags').remove(); // Xóa tags
    $entry.find('.detail__related').remove(); // Xóa tin liên quan
    $entry.find('.box-comment').remove(); // Xóa phần bình luận
    $entry.find('.zalo-share-button').remove(); // Xóa nút chia sẻ Zalo
    $entry.find('.fb-like').remove(); // Xóa Facebook like
    $entry.find('script').remove(); // Xóa script
    $entry.find('style').remove(); // Xóa style
    $entry.find('.ads').remove(); // Xóa các banner quảng cáo khác
    $entry.find('[id*="ads"]').remove(); // Xóa element có id chứa "ads"
    $entry.find('[class*="ads"]').remove(); // Xóa element có class chứa "ads"
    $entry.find('[id*="zone-"]').remove(); // Xóa zone ads của Thanh Niên
    $entry.find('[data-type="_mgwidget"]').remove(); // Xóa widget ads
    $entry.find('iframe').remove(); // Xóa iframe ads
    $entry.find('video[title="Advertisement"]').remove(); // Xóa video quảng cáo

    // Xử lý hình ảnh trong nội dung
    $entry.find('img').each((_, el) => {
      const $img = $(el);
      let imgSrc = $img.attr('src') || 
                  $img.attr('data-src') || 
                  $img.attr('data-original') ||
                  $img.attr('data-lazy');
      
      if (imgSrc) {
        // Xử lý URL tương đối
        if (imgSrc.startsWith('//')) {
          imgSrc = 'https:' + imgSrc;
        } else if (imgSrc.startsWith('/')) {
          imgSrc = 'https://thanhnien.vn' + imgSrc;
        }
        
        $img.attr('src', imgSrc);
        $img.attr('style', 'max-width: 100%; height: auto; display: block; margin: 10px auto;');
        $img.removeAttr('data-src data-original data-srcset data-lazy loading class id width height');
      } else {
        console.warn('⚠️ Không tìm thấy src cho img, đã xóa');
        $img.remove();
      }
    });

    // Xử lý figure và figcaption - Thanh Niên dùng class PhotoCMS_Caption
    $entry.find('figure').each((_, el) => {
      const $figure = $(el);
      
      // Xóa các element không cần thiết trong figure
      $figure.find('.PhotoCMS_Author').remove();
      $figure.find('.action_thumb').remove();
      $figure.find('meta').remove();
      
      const $img = $figure.find('img');
      if ($img.length === 0 || !$img.attr('src')) {
        $figure.remove();
        return;
      }
      
      $figure.attr('style', 'margin: 20px 0; text-align: center;');
      
      const $caption = $figure.find('figcaption, .PhotoCMS_Caption');
      if ($caption.length > 0) {
        $caption.attr('style', 'font-style: italic; color: #666; margin-top: 8px; font-size: 14px;');
      }
    });

    // Xử lý table nếu có
    $entry.find('table').each((_, el) => {
      const $table = $(el);
      $table.attr('style', 'width: 100%; border-collapse: collapse; margin: 15px 0;');
      $table.find('td, th').attr('style', 'border: 1px solid #ddd; padding: 8px; text-align: left;');
      $table.find('th').attr('style', 'border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f2f2f2; font-weight: bold;');
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
        'figcaption', 'blockquote', 'table', 'thead', 'tbody', 'tr', 'td', 'th'
      ],
      allowedAttributes: {
        a: ['href', 'target', 'rel'],
        img: ['src', 'alt', 'style', 'title'],
        figure: ['style'],
        figcaption: ['style'],
        p: ['style'],
        div: ['style'],
        span: ['style'],
        table: ['style'],
        td: ['style'],
        th: ['style'],
        tr: ['style']
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
          'display': [/^(block|inline|inline-block)$/],
          'border': [/^[\d\s\w#%.-]+$/],
          'border-collapse': [/^collapse$/],
          'background-color': [/^#([0-9a-f]{3}|[0-9a-f]{6})$/i, /^rgb\(\d+,\s*\d+,\s*\d+\)$/]
        }
      },
      transformTags: {
        'div': function(tagName, attribs) {
          // Chuyển div thành p nếu không có class hoặc class rỗng
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

fetchRssData_luatvietnam: async(req, res) => {
    try {
      await Utils.connectDB();
      const {url, category, source, author} = req.body;
      
      // Sử dụng fetch với headers để lấy RSS
      const headers = getRandomHeaders('https://luatvietnam.vn/');
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

        // Extract image URL from description HTML hoặc media:thumbnail
        let imageUrl = '';
        
        // Thử lấy từ media:thumbnail trước
        if (item['media:thumbnail'] && item['media:thumbnail'][0] && item['media:thumbnail'][0].$.url) {
          imageUrl = item['media:thumbnail'][0].$.url;
        } else {
          // Nếu không có, extract từ description
          const imgMatch = description.match(/<img[^>]+src="([^"]+)"/);
          imageUrl = imgMatch ? imgMatch[1] : '';
        }

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
          const exist = await ArticleServices.isArticleExist(article);
          return { article, exist };
        })
      );

      // Lọc ra bài mới
      const newArticles = checkResults
        .filter(item => !item.exist)
        .map(item => item.article);

      console.log(`Tìm thấy ${newArticles.length} bài viết mới trên Luật Việt Nam.`);

      // Lấy chi tiết từng bài viết với delay và retry logic
      // Xử lý ngược từ cuối lên đầu để ưu tiên tin mới
      let successCount = 0;
      let skipCount = 0;
      
      for (let i = newArticles.length - 1; i >= 0; i--) {
        const article = newArticles[i];
        const currentIndex = newArticles.length - i;
        try {
          console.log(`📖 Processing article ${currentIndex}/${newArticles.length}: ${article.title}`);
          
          // Random delay giữa các requests
          await randomDelay(2000, 5000);
          
          const fullArticle = await RssCrawl.detailLuatVietnam(article);
          
          // Kiểm tra xem có lấy được chi tiết không
          if (fullArticle && fullArticle.content && fullArticle.content_html) {
            // Chỉ lưu khi lấy chi tiết thành công
            const savedArticle = await ArticleServices.saveArticleItem(fullArticle);
            successCount++;
            console.log(`✅ Saved article ${currentIndex}/${newArticles.length} - ID: ${savedArticle._id}`);
          } else {
            // Bỏ qua bài này nếu không lấy được chi tiết
            skipCount++;
            console.log(`⏭️ Skipped article ${currentIndex}/${newArticles.length} - No detail content: ${article.title}`);
          }
          
        } catch (err) {
          skipCount++;
          console.error(`❌ Error processing article ${currentIndex}: ${article.title}`, err.message);
          console.log(`⏭️ Skipping and continue with next article...`);
          // Continue với bài tiếp theo thay vì dừng
          continue;
        }
      }

      console.log(`🎉 Hoàn tất crawl Luật Việt Nam: ✅ ${successCount} saved, ⏭️ ${skipCount} skipped`);
      return res.json({
        status: 200,
        message: 'Hoàn tất crawl Luật Việt Nam',
        total_new_articles: newArticles.length,
        successful_saves: successCount,
        skipped_articles: skipCount
      });

    } catch (error) {
      console.error("🔥 Lỗi khi lấy dữ liệu RSS Luật Việt Nam:", error);
      return res.status(500).json({ 
        error: 'Lỗi khi crawl dữ liệu Luật Việt Nam',
        details: error.message 
      });
    }
},

detailLuatVietnam: async(item) => {
  try {
    console.log(`🔍 Fetching detail for: ${item.title}`);
    
    // Sử dụng fetchWithRetry thay vì axios.get trực tiếp
    const response = await fetchWithRetry(item.url, 3, 2000);
    let html = response.data;
    
    if (!html || html.trim().length === 0) {
      console.warn(`⚠️ Empty HTML response for: ${item.url}`);
      return null;
    }
    
    // Xóa script để ngăn dynamic content
    html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    
    const $ = load(html);

    // Lấy thông tin cơ bản từ LuatVietnam structure
    const title = $('h1.the-article-title').text().trim() || 
                  $('.the-article-header h1').text().trim() ||
                  $('h1').first().text().trim() ||
                  item.title;

    const published_date = $('.date-publish span').text().trim() + ' ' + $('.date-publish time').text().trim() || 
                          $('.the-article-meta .date-publish').text().trim() ||
                          item.published_date;

    // Lấy sapo/description từ phần đầu của article-body
    const description = $('.the-article-body > div:first-child strong').text().trim() ||
                       $('.the-article-body > div:first-child').text().trim() ||
                       item.description;

    // Lấy ảnh chính
    let image = item.image;
    
    // Thử lấy từ meta og:image trước
    const ogImage = $('meta[property="og:image"]').attr('content');
    if (ogImage) {
      image = ogImage;
    } else {
      // Lấy từ article content hoặc ảnh đầu tiên
      const headerImage = $('.the-article-body figure img').first().attr('src') ||
                         $('.the-article-body img').first().attr('data-src') ||
                         $('.the-article-body img').first().attr('src') ||
                         $('img').first().attr('src');
      
      if (headerImage) {
        // Xử lý URL tương đối
        if (headerImage.startsWith('//')) {
          image = 'https:' + headerImage;
        } else if (headerImage.startsWith('/')) {
          image = 'https://luatvietnam.vn' + headerImage;
        } else {
          image = headerImage;
        }
      }
    }

    // Lấy nội dung chính - LuatVietnam sử dụng #article-content hoặc .the-article-body
    let $entry = $('#article-content .the-article-body .entry').clone();
    
    if ($entry.length === 0) {
      $entry = $('#newsIndex').clone();
    }
    
    if ($entry.length === 0) {
      $entry = $('.the-article-body [itemprop="articleBody"]').clone();
    }
    
    if ($entry.length === 0) {
      console.warn('⚠️ Không tìm thấy nội dung chính cho:', item.url);
      return null;
    }

    // Xóa các phần không cần thiết
    $entry.find('#Articles-DocIndexes').remove(); // Xóa mục lục
    $entry.find('.table-of-contents').remove(); // Xóa mục lục
    $entry.find('.section-lvn').remove(); // Xóa quảng cáo section
    $entry.find('.advHolder').remove(); // Xóa quảng cáo
    $entry.find('.google-ads').remove(); // Xóa Google ads
    $entry.find('.section-hotline').remove(); // Xóa hotline
    $entry.find('.section-related').remove(); // Xóa tin liên quan
    $entry.find('.section-rating').remove(); // Xóa rating
    $entry.find('script').remove(); // Xóa script
    $entry.find('style').remove(); // Xóa style
    $entry.find('iframe').remove(); // Xóa iframe
    $entry.find('[id*="ureka"]').remove(); // Xóa ureka player
    $entry.find('[id*="div-gpt"]').remove(); // Xóa Google Publisher Tag
    $entry.find('[data-id]').remove(); // Xóa các element có data-id (thường là ads)

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
          imgSrc = 'https://luatvietnam.vn' + imgSrc;
        }
        
        // Xử lý lazy load - loại bỏ gif placeholder
        if (imgSrc.includes('data:image/gif')) {
          const dataSrc = $img.attr('data-src');
          if (dataSrc) {
            if (dataSrc.startsWith('//')) {
              imgSrc = 'https:' + dataSrc;
            } else if (dataSrc.startsWith('/')) {
              imgSrc = 'https://luatvietnam.vn' + dataSrc;
            } else {
              imgSrc = dataSrc;
            }
          }
        }
        
        $img.attr('src', imgSrc);
        $img.attr('style', 'max-width: 100%; height: auto; display: block; margin: 10px auto;');
        $img.removeAttr('data-src data-original data-srcset loading class id width height');
      } else {
        console.warn('⚠️ Không tìm thấy src cho img, đã xóa');
        $img.remove();
      }
    });

    // Xử lý figure và figcaption
    $entry.find('figure').each((_, el) => {
      const $figure = $(el);
      
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

    // Xử lý blockquote
    $entry.find('blockquote').each((_, el) => {
      const $quote = $(el);
      $quote.attr('style', 'border-left: 4px solid #ddd; padding-left: 16px; margin: 16px 0; font-style: italic;');
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
        'figcaption', 'blockquote', 'table', 'thead', 'tbody', 'tr', 'td', 'th'
      ],
      allowedAttributes: {
        a: ['href', 'target', 'rel', 'title'],
        img: ['src', 'alt', 'style', 'title'],
        figure: ['style'],
        figcaption: ['style'],
        p: ['style', 'dir'],
        div: ['style', 'dir'],
        span: ['style'],
        blockquote: ['style'],
        h2: ['id', 'dir'],
        h3: ['id', 'dir'],
        h4: ['id', 'dir'],
        ul: ['class'],
        li: ['aria-level', 'dir']
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
          'padding-left': [/^[\d\w%.-]+$/],
          'max-width': [/^100%$/],
          'width': [/^100%$/],
          'height': [/^auto$/],
          'display': [/^(block|inline|inline-block)$/],
          'border-left': [/^[\d\s\w#%.-]+$/]
        }
      },
      transformTags: {
        'div': function(tagName, attribs) {
          // Chuyển div thành p nếu không có class hoặc class rỗng
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
}
}

export default RssCrawl;