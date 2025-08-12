// rss.js
import fetch from 'node-fetch';
import axios from 'axios';
import { load } from 'cheerio';
import sanitize from 'sanitize-html';
import { parseStringPromise } from 'xml2js';
import ArticleServices from './services/ArticleService.js';
import Utils from './services/Utils.js';

async function fetchRssData(data) {
  try {
    const response = await fetch(data.url);
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
        category: data.category,
        source: data.source,
        author: data.author
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
        const fullArticle = await detailPhapLy(article);
        const savedArticle = await ArticleServices.saveArticleItem(fullArticle);
        console.log('Lưu bài viết thành công với ID:', savedArticle._id);
      } catch (err) {
        console.error(`Lỗi lấy hoặc lưu bài viết ${article.title}:`, err.message);
      }
    }

    console.log('Hoàn tất crawl và lưu dữ liệu.');
    

  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu RSS:", error);
    return [];
  }
}

async function detailPhapLy(item) {
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
}

const object = {
  url: 'https://congly.vn/rss/phap-dinh',
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
await fetchRssData(object);
// detailPhapLy(object)


import mongoose from 'mongoose';
import Article from './models/Article.js'; // Đường dẫn model Article của bạn

async function deleteArticlesByCategory() {
  try {
    await Utils.connectDB();  // Đợi kết nối DB xong mới chạy tiếp
    const categoryId = new mongoose.Types.ObjectId('6899655ec44355386b430892');
    const result = await Article.deleteMany({ categories: categoryId });
    console.log(`Đã xóa ${result.deletedCount} bài viết.`);
  } catch (error) {
    console.error('Lỗi khi xóa bài viết:', error);
  }
}

// deleteArticlesByCategory();
