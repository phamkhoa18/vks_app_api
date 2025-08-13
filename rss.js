// rss.js
import fetch from 'node-fetch';
import axios from 'axios';
import { load } from 'cheerio';
import sanitize from 'sanitize-html';
import { parseStringPromise } from 'xml2js';
import ArticleServices from './services/ArticleService.js';
import Utils from './services/Utils.js';

const object = {
  url: 'https://vnexpress.net/rss/phap-luat.rss',
  category: '6899655ec44355386b430892' ,
  source: 'https://congly.vn',
  author: 'congly'
}


// const object = {
//   url: 'https://congly.vn/37-bi-cao-hau-toa-vi-tham-gia-duong-day-lua-dao-xuyen-quoc-gia-488508.html',
//   category: '6899655ec44355386b430892' ,
//   source: 'https://congly.vn',
//   author: 'congly'
// }

// Example usage
// await fetchRssData2(object);
// detailPhapLy(object)


// deleteArticlesByCategory();


const object25 = {
  url: 'https://vnexpress.net/rss/phap-luat.rss',
  category: '6899655ec44355386b430892' ,
  source: 'https://vnexpress.net',
  author: 'vnexpress'
}



const RssCrawl = {
    fetchRssData_congly: async(req,res) => {
        try {
          await Utils.connectDB();  // Đợi kết nối DB xong mới chạy tiếp
          const {url, category, source, author} = req.body ;
          const response = await fetch(url);
          await Utils.connectDB();  // Đợi kết nối DB xong mới chạy tiếp
          if (!response.ok) {
            throw new Error(`Lỗi HTTP! trạng thái: ${response.status}`);
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

            // Extract image URL from description
            const imgMatch = description.match(/<img src="([^"]+)"/);
            const imageUrl = imgMatch ? imgMatch[1] : '';
              // title, url, image, description, published_date, category, source, author
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

          console.log(`Tìm thấy ${newArticles.length} bài viết mới trên Bảo vệ Pháp luật.`);

          // Lấy chi tiết từng bài viết, sau đó lưu vào DB
          for (const article of newArticles.reverse()) {
            try {
              const fullArticle = await RssCrawl.detailPhapLy(article);
              const savedArticle = await ArticleServices.saveArticleItem(fullArticle);
              console.log('Lưu bài viết thành công với ID:', savedArticle._id);
            } catch (err) {
              console.error(`Lỗi lấy hoặc lưu bài viết ${article.title}:`, err.message);
            }
          }

          console.log('Hoàn tất crawl và lưu dữ liệu.');
          return res.json({
            status: 200,
            message: 'Hoàn tất crawl Công lý',
            total_new_articles: newArticles.length,
          });

        } catch (error) {
          console.error("Lỗi khi lấy dữ liệu RSS:", error);
          return res.status(500).json({ error: 'Lỗi khi crawl dữ liệu' });
        }
    } ,

    detailPhapLy: async(item) => {
      try {
        const response = await axios.get(item.url);
        const html = response.data;
        const $ = load(html);

        // Lấy thông tin cơ bản
        const title = $('.sc-longform-header-title').text().trim() || item.title;
        const published_date = $('.sc-longform-header-date').text().trim() || item.published_date;
        const description = $('.sc-longform-header-sapo').text().trim() || item.description;
        const image =
          $('.sc-longform-header-media img').attr('src') ||
          $('figure img').attr('src') ||
          item.image;

        // Lấy nội dung HTML gốc
        const $entry = $('.entry.entry-no-padding').clone();
        $entry.find('.sc-longform-header').remove(); // Xóa header

        // Thêm style cho img
        $entry.find('img').each((_, el) => {
          $(el).attr('style', 'max-width: 100%; height: auto;');
        });

        // Sanitize HTML
        let raw_clean_html = sanitize($entry.html() || '', {
          allowedTags: [
            'p', 'b', 'i', 'em', 'strong', 'a', 'ul', 'ol', 'li', 'br', 'div',
            'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'img'
          ],
          allowedAttributes: {
            a: ['href'],
            img: ['src', 'alt', 'style'],
          },
          allowedStyles: {
            '*': {
              color: [/^#([0-9a-f]{3}|[0-9a-f]{6})$/i],
              'font-size': [/^\d+(?:px|em|rem)$/],
              'max-width': [/^100%$/],
              height: [/^auto$/],
            },
          },
          transformTags: {
            div: 'p', // convert div thành p
          },
          exclusiveFilter(frame) {
            return frame.tag === 'p' && !frame.text.trim(); // remove p trống
          },
          textFilter(text) {
            return text.replace(/\n/g, '').replace(/\s+/g, ' ').trim();
          },
        });

        // Text thuần (không HTML)
        const content = $entry.text().trim() || item.content;
        const content_ai_summary = await Utils.ai_summary(item.description + content) ;

        const fullArticle = {
          title,
          url: item.url,
          image,
          description,
          published_date: null,
          content,
          content_html: raw_clean_html, 
          category: item.category,
          summary_array: content_ai_summary.summaryArray ,
          summary: content_ai_summary.summary ,
          source: item.source,
          author: item.author,
        };
        return fullArticle;

      } catch (error) {
        console.error(`Lỗi khi lấy chi tiết bài viết ${item.title}:`, error.message);
        return item;
      }
    },

    fetchRssData_vnexpress: async(req,res) => {
      try {
        await Utils.connectDB();  // Đợi kết nối DB xong mới chạy tiếp
        const {url, category, source, author} = req.body ;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Lỗi HTTP! trạng thái: ${response.status}`);
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

          // Extract image URL from description
          const imgMatch = description.match(/<img src="([^"]+)"/);
          const imageUrl = imgMatch ? imgMatch[1] : '';
            // title, url, image, description, published_date, category, source, author
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

        console.log(`Tìm thấy ${newArticles.length} bài viết mới trên Bảo vệ Pháp luật.`);

        // Lấy chi tiết từng bài viết, sau đó lưu vào DB
        for (const article of newArticles.reverse()) {
          try {
            const fullArticle = await RssCrawl.detailVnExpress(article);
            const savedArticle = await ArticleServices.saveArticleItem(fullArticle);
            console.log('Lưu bài viết thành công với ID:', savedArticle._id);
          } catch (err) {
            console.error(`Lỗi lấy hoặc lưu bài viết ${article.title}:`, err.message);
          }
        }

        console.log('Hoàn tất crawl và lưu dữ liệu.');
        return res.json({
            status: 200,
            message: 'Hoàn tất crawl Vnexpress',
            total_new_articles: newArticles.length,
          });

        } catch (error) {
          console.error("Lỗi khi lấy dữ liệu RSS:", error);
          return res.status(500).json({ error: 'Lỗi khi crawl dữ liệu' });
        }
    },

    detailVnExpress:async(item) => {
      try {
        const response = await axios.get(item.url);
        const html = response.data;
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
            // Extract date part (13/8/2025)
            const dateMatch = published_date.match(/(\d{1,2}\/\d{1,2}\/\d{4})/);
            if (dateMatch) {
              const [day, month, year] = dateMatch[1].split('/');
              published_date = new Date(year, month - 1, day).toISOString();
            }
          } catch (dateError) {
            console.warn('Không thể parse date:', published_date);
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
            // Thử các source khác nhau trong figure
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

        // Lấy tác giả từ cuối bài (thường ở <p> cuối cùng với style text-align:right)
        let author = item.author;

        // Lấy nội dung chính từ article.fck_detail
        const $article = $('article.fck_detail').clone();
        
        if ($article.length === 0) {
          console.warn('Không tìm thấy nội dung chính cho:', item.url);
          return item;
        }

        // Xóa các phần không cần thiết
        $article.find('.width_common.box-tinlienquanv2').remove(); // Tin liên quan
        $article.find('#sis_outstream_container').remove(); // Quảng cáo
        $article.find('.box_brief_info').remove(); // Thông tin thêm (có thể giữ lại nếu cần)
        $article.find('span[id="article-end"]').remove(); // Marker kết thúc bài
        
        // Xóa tác giả ở cuối bài (đã lấy rồi)
        $article.find('p[style*="text-align:right"]').last().remove();

        // Xử lý hình ảnh trong nội dung
        $article.find('img').each((_, el) => {
          const $img = $(el);
          let imgSrc = null;
          
          // Thử các source khác nhau theo thứ tự ưu tiên
          imgSrc = $img.attr('src') ||
                  $img.attr('data-src') ||
                  $img.attr('data-original');
          
          // Nếu vẫn không có src, thử tìm từ parent figure
          if (!imgSrc) {
            const $figure = $img.closest('figure');
            if ($figure.length > 0) {
              // Tìm từ meta trong figure
              const metaUrl = $figure.find('meta[itemprop="url"]').attr('content');
              if (metaUrl) {
                imgSrc = metaUrl;
              } else {
                // Tìm từ source/picture
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
          
          // Nếu có src thì set lại và thêm style
          if (imgSrc) {
            // Đảm bảo URL đầy đủ
            if (imgSrc.startsWith('//')) {
              imgSrc = 'https:' + imgSrc;
            } else if (imgSrc.startsWith('/')) {
              imgSrc = 'https://vnexpress.net' + imgSrc;
            }
            
            $img.attr('src', imgSrc);
            $img.attr('style', 'max-width: 100%; height: auto; display: block; margin: 10px auto;');
            
            // Xóa các attribute không cần thiết
            $img.removeAttr('data-src data-original data-srcset data-ll-status intrinsicsize loading lazied class');
          } else {
            // Nếu không tìm thấy src nào, xóa img này
            console.warn('Không tìm thấy src cho img, đã xóa:', $img.attr('alt') || 'no alt');
            $img.remove();
          }
        });

        // Xử lý figure và figcaption
        $article.find('figure').each((_, el) => {
          const $figure = $(el);
          
          // Xóa các thành phần không cần thiết trước
          $figure.find('.action_thumb').remove();
          $figure.find('meta').remove();
          $figure.find('.fig-picture').removeClass('el_valid');
          
          // Kiểm tra xem figure có ảnh hợp lệ không
          const $img = $figure.find('img');
          const $picture = $figure.find('picture');
          
          // Nếu có picture, xử lý riêng
          if ($picture.length > 0) {
            // Lấy ảnh từ picture/source
            const $source = $picture.find('source').first();
            const $pictureImg = $picture.find('img').first();
            
            let imgUrl = null;
            
            // Thử lấy từ source srcset
            if ($source.length > 0) {
              const srcset = $source.attr('srcset') || $source.attr('data-srcset');
              if (srcset) {
                imgUrl = srcset.split(',')[0].trim().split(' ')[0];
              }
            }
            
            // Nếu không có, thử từ img trong picture
            if (!imgUrl && $pictureImg.length > 0) {
              imgUrl = $pictureImg.attr('src') || $pictureImg.attr('data-src');
            }
            
            if (imgUrl) {
              // Tạo img mới thay thế picture
              const newImg = $('<img>');
              newImg.attr('src', imgUrl);
              newImg.attr('alt', $pictureImg.attr('alt') || '');
              newImg.attr('style', 'max-width: 100%; height: auto; display: block; margin: 10px auto;');
              
              $picture.replaceWith(newImg);
            } else {
              $picture.remove();
            }
          }
          
          // Kiểm tra lại sau khi xử lý
          const $finalImg = $figure.find('img');
          if ($finalImg.length === 0 || !$finalImg.attr('src')) {
            // Nếu figure không có ảnh hợp lệ, xóa luôn
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
              // Chuyển div thành p nếu không có class đặc biệt
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
            // Loại bỏ các thẻ p trống
            return frame.tag === 'p' && !frame.text.trim();
          },
          textFilter: function(text) {
            // Làm sạch text
            return text.replace(/\n+/g, ' ').replace(/\s+/g, ' ').trim();
          }
        });

        // Lấy text thuần không có HTML
        const content = $article.text()
          .replace(/\s+/g, ' ')
          .replace(/\n+/g, ' ')
          .trim() || item.content;

        // Tạo AI summary (nếu có Utils.ai_summary)
        let content_ai_summary = null;
        try {
          if (typeof Utils !== 'undefined' && Utils.ai_summary) {
            content_ai_summary = await Utils.ai_summary(description + ' ' + content);
          }
        } catch (aiError) {
          console.warn('Không thể tạo AI summary:', aiError.message);
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

        return fullArticle;

      } catch (error) {
        console.error(`Lỗi khi lấy chi tiết bài viết ${item.title}:`, error.message);
        console.error('URL:', item.url);
        console.error('Stack:', error.stack);
        
        // Trả về item gốc nếu có lỗi
        return {
          ...item,
          content: item.content || '',
          content_html: item.content_html || '',
          summary_array: [],
          summary: item.description || ''
        };
      }
    }
}


export default RssCrawl ;