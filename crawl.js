import axios from 'axios';
import { load } from 'cheerio';
import ArticleServices from './services/ArticleService.js';
import Utils from './services/Utils.js';


const object = {
  url: 'https://kiemsat.vn/kiem-sat-24h',
  category: '6899650ac44355386b43088c' ,
  source: 'https://kiemsat.vn',
  author: 'kiemsat'
}

const object_2 = {
  url: 'https://kiemsat.vn/chung-toi-la-kiem-sat-vien',
  category: '6899650ac44355386b43088c' ,
  source: 'https://kiemsat.vn',
  author: 'kiemsat'
}

const object_3 = {
  url: 'https://kiemsat.vn/luat-cuoc-song',
  category: '6899650ac44355386b43088c' ,
  source: 'https://kiemsat.vn',
  author: 'kiemsat'
}

const object_4 = {
  url: 'https://baovephapluat.vn/kiem-sat-24h/ban-tin-kiem-sat',
  category: '6899650ac44355386b43088c' ,
  source: 'https://baovephapluat.vn',
  author: 'baovephapluat'
}



const Crawl = {
  scrapeKiemSat: async(req,res) => {
    try {
      await Utils.connectDB();  // Đợi kết nối DB xong mới chạy tiếp
      const {url, category, source, author} = req.body ;
      const response = await axios.get(url);
      const html = response.data;
      const $ = load(html);

      const articles = [];

      $('.loadmore-list .loadmore-item').each((_, element) => {
        const el = $(element);
        const title = el.find('h3 a.title').text().trim();
        const url = el.find('h3 a.title').attr('href') || '';
        const image = el.find('.khungAnh img').attr('src') || undefined;
        const description = el.find('.desc').text().trim() || undefined;
        const published_date = el.find('.time').text().trim() || undefined;

        articles.push({ title, url, image, description, published_date, category, source, author });
      });

      // Kiểm tra bài viết đã có trong DB
      const checkResults = await Promise.all(
        articles.map(async (article) => {
          const exist = await ArticleServices.isArticleExist(article.title);
          return { article, exist };
        })
      );

    

      // Lọc ra bài chưa có
      const newArticles = checkResults.filter(item => !item.exist).map(item => item.article);

      console.log(`Tìm thấy ${newArticles.length} bài viết chưa có trong DB.`);

      // Lấy chi tiết từng bài viết, sau đó lưu vào DB
      for (const article of newArticles) {
        try {
          const fullArticle = await Crawl.scrapeKiemSatArticleContent(article);
          const savedArticle = await ArticleServices.saveArticleItem(fullArticle);
          console.log('Lưu bài viết thành công với ID:', savedArticle._id);
        } catch (err) {
          console.error(`Lỗi lấy hoặc lưu bài viết ${article.title}:`, err.message);
        }
      }

      return res.json({
        status: 200,
        message: 'Hoàn tất crawl Kiểm sát viên',
        total_new_articles: newArticles.length,
      });

      } catch (error) {
        return res.status(500).json({ error: 'Lỗi khi crawl dữ liệu' });
      }
  },

  scrapeKiemSatArticleContent: async(item) => {
    try {
      const response = await axios.get(item.url, { timeout: 10000 });
      const html = response.data;
      const $ = load(html);

      // Lấy text thuần như trước
      const contentParts = [];
      $('.noidung > p, .noidung > table.imageBox').each((i, el) => {
        if ($(el).is('p') && !$(el).hasClass('PCaption')) {
          const text = $(el).text().trim();
          if (text) contentParts.push(text);
        } else if ($(el).is('table.imageBox')) {
          const caption = $(el).find('p.PCaption').text().trim();
          const image = $(el).find('img').attr('src');
          if (caption) contentParts.push(caption);
          if (image) contentParts.push(`[Image: ${image}]`);
        }
      });

      // Lấy nguyên đoạn html phần nội dung chi tiết, ví dụ phần trong class .noidung
      const rawHtml  = $('.noidung').html() || '';
      const contentHtml = Crawl.cleanContentHtml(rawHtml) ;

      // **Hàm mới để lấy text sạch liền mạch, xóa hết thẻ html, ảnh, khoảng trắng thừa**
      function getCleanText(html) {
        const $ = load(html);
        // Xóa hết thẻ <img>, <table>, <div>, <span>... chỉ giữ text
        $('img, table, div, span, figure').remove();
        // Lấy toàn bộ text bên trong
        let text = $.root().text();
        // Thay nhiều dấu xuống dòng, tab, space thành 1 space, trim đầu cuối
        text = text.replace(/\s+/g, ' ').trim();
        return text;
      }

      const content_clean = getCleanText(rawHtml);
      const content_ai_summary = await Utils.ai_summary(item.description + content_clean) ;

      const fullArticle = {
        title: $('.big_tit h1').text().trim() || item.title,
        description: $('.mota h2').text().replace('(kiemsat.vn)', '').trim() || item.description,
        url: item.url,
        image: item.image,
        published_date: item.published_date,
        category: item.category,
        source: item.source, 
        author : item.author,
        content: contentParts.join('\n\n'),
        content_html: contentHtml ,
        content_clean: content_clean,
        summary_array : content_ai_summary.summaryArray,
        summary: content_ai_summary.summary  
      };

      return fullArticle;
    } catch (error) {
      throw new Error(`Lỗi lấy nội dung bài viết chi tiết: ${error.message}`);
    }
  },

  cleanContentHtml: (html) => {
    const $ = load(html);

    $('table.imageBox').each((i, table) => {
      const $table = $(table);
      const $img = $table.find('img').first();
      const $caption = $table.find('p.PCaption').first();

      const $div = $('<div></div>').css({
        'text-align': 'center',
        'margin': '20px 0'
      });

      if ($img.length) {
        $img.attr('style', 'max-width:100%; height:auto;');
        $div.append($img.clone());
      }
      if ($caption.length) {
        $div.append($caption.clone());
      }

      $table.replaceWith($div);
    });

    // Lấy chỉ phần bên trong body, không có thẻ <html> và <body>
    return $('body').html() || $.root().html();
  },

  scrapeBaoVePhapLuat:async (req, res) => {
    try {
      await Utils.connectDB(); // Kết nối DB
      const {url, category, source, author} = req.body ;
      const response = await axios.get(url);
      const html = response.data;
      const $ = load(html);

      const articles = [];

      $('.pcontent3.contentCategory').each((_, element) => {
        const el = $(element);
        const title = el.find('a[title] .h3cate').text().trim() 
          || el.find('.h3cate').text().trim();
        const url = el.find('a[title]').attr('href') || '';
        const image = el.find('img').attr('src') || undefined;
        const description = el.find('.pctent').text().trim() || undefined;
        const published_date = undefined; // Trang này không có thời gian trong list, sẽ lấy ở trang chi tiết

        if (title && url) {
          articles.push({ title, url, image, description, published_date, category, source, author });
        }
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

      // Lấy chi tiết và lưu
      for (const article of newArticles.reverse()) {
        try {
          
          // const savedArticle = await ArticleServices.saveArticleItem(fullArticle);
          const fullArticle = await Crawl.scrapeBaoVePhapLuatDetail(article);
          const savedArticle = await ArticleServices.saveArticleItem(fullArticle);
          console.log('Lưu bài viết thành công với ID:', savedArticle._id);
          console.log(article);
        } catch (err) {
          console.error(`Lỗi khi xử lý bài ${article.title}:`, err.message);
          return res.status(500).json({ error: 'Lỗi khi crawl dữ liệu' });
        }
      }

      return res.json({
        status: 200,
        message: 'Hoàn tất crawl Báo Bảo vệ Pháp luật',
        total_new_articles: newArticles.length,
      });
    } catch (error) {
      console.error('Lỗi khi crawl:', error.message);
      return res.status(500).json({ error: 'Lỗi khi crawl dữ liệu' });
    }
  },

  scrapeBaoVePhapLuatDetail:async (item) => {
  try {
    const { data: html } = await axios.get(item.url, { timeout: 10000 });
    const $ = load(html);

    const container = $("#dnn_NewsView_Main_ctl00_viewhinone");

    // Tiêu đề
    const title = container.find("h1.post-title").text().trim() || '';

    // Ngày đăng
    let dateText = container.find(".lbPublishedDate").text().trim() || '';
    dateText = dateText.replace(/\(GMT\+7\)/, "").trim();

    // Tóm tắt
    const summary = container.find(".post-summary h2").text().trim() || '';

    // Làm sạch nội dung HTML
    const contentNode = container.find(".post-content .noidung").clone();

    // Xóa các thẻ không cần thiết
    contentNode.find('script, style, iframe, object, embed, input, form, button').remove();
    contentNode.find('[id], [class]').removeAttr('id').removeAttr('class'); // Xóa id và class
    contentNode.find('[style]').removeAttr('style'); // Xóa inline style
    contentNode.find('a[onclick], img[onclick]').removeAttr('onclick'); // Xóa sự kiện onclick
    contentNode.find('a').each((i, el) => {
      const href = $(el).attr('href');
      if (!href || href.startsWith('javascript:')) $(el).replaceWith($(el).text()); // Xóa link không hợp lệ
    });

    // Tạo mảng để lưu nội dung text và vị trí ảnh
    const contentParts = [];
    const imageUrls = [];

    // Xử lý nội dung và ảnh
    contentNode.children().each((i, el) => {
      const $el = $(el);
      if ($el.is('p') && $el.text().trim()) {
        contentParts.push($el.text().trim());
      } else if ($el.is('table')) {
        const $img = $el.find("tr:nth-child(2) img").first();
        const $caption = $el.find("tr:nth-child(3) td").first();
        
        if ($caption.length && $caption.text().trim()) {
          contentParts.push($caption.text().trim());
        }
        if ($img.length && $img.attr('src')) {
          const src = $img.attr('src');
          contentParts.push(`[Image: ${src}]`);
          imageUrls.push(src);

          // Thay thế table bằng div trong HTML
          const $div = $('<div></div>').css({
            'text-align': 'center',
            'margin': '20px 0'
          });
          $img.attr('style', 'max-width: 100%; height: auto; display: block; margin: 0 auto;');
          $img.attr('alt', $caption.text().trim() || title);
          $div.append($img.clone());
          if ($caption.length && $caption.text().trim()) {
            const $captionP = $('<p></p>').text($caption.text().trim()).css({
              'font-style': 'italic',
              'color': '#666',
              'margin-top': '0.5rem'
            });
            $div.append($captionP);
          }
          $el.replaceWith($div);
        } else {
          $el.remove();
        }
      }
    });

    // Chuẩn hóa các thẻ HTML
    contentNode.find('p, div').each((i, el) => {
      const $el = $(el);
      if (!$el.text().trim() && !$el.find('img, figure').length) {
        $el.remove(); // Xóa thẻ rỗng
      }
    });

    // Xóa các thuộc tính không cần thiết của img
    contentNode.find('img').each((i, el) => {
      const $img = $(el);
      $img.removeAttr('width height style class id'); // Xóa thuộc tính không cần thiết
      $img.attr('style', 'max-width: 100%; height: auto; display: block; margin: 0 auto;');
      if (!$img.attr('alt')) $img.attr('alt', title); // Thêm alt mặc định
    });

    // HTML đã làm sạch
    let contentHtml = contentNode.html()?.trim() || '';
    // Loại bỏ \n' +, \n, và khoảng trắng thừa
    contentHtml = contentHtml
      .replace(/\\n' \+/g, '') // Xóa \n' +
      .replace(/\\n/g, '') // Xóa \n
      .replace(/\s*\n\s*/g, '') // Xóa các dòng trống
      .replace(/\s{2,}/g, ' ') // Xóa khoảng trắng thừa
      .trim();

    // Nội dung text liền mạch
    const contentText = contentParts.join(' ').replace(/\s{2,}/g, ' ').trim() || '';

    // Ảnh trong bài
    const images = imageUrls;

    // **Hàm mới để lấy text sạch liền mạch, xóa hết thẻ html, ảnh, khoảng trắng thừa**
    function getCleanText(html) {
      const $ = load(html);
      // Xóa hết thẻ <img>, <table>, <div>, <span>... chỉ giữ text
      $('img, table, div, span, figure').remove();
      // Lấy toàn bộ text bên trong
      let text = $.root().text();
      // Thay nhiều dấu xuống dòng, tab, space thành 1 space, trim đầu cuối
      text = text.replace(/\s+/g, ' ').trim();
      return text;
    }

    const content_clean = getCleanText(contentHtml);
    const content_ai_summary = await Utils.ai_summary(item.description + content_clean) ;

    const fullArticle = {
      title: item.title,
      description: summary,
      url: item.url,
      image: images[0],
      published_date: item.published_date,
      category: item.category,
      source: item.source, 
      author : item.author,
      content: contentText,
      content_html: contentHtml ,
      content_clean: content_clean,
      summary_array : content_ai_summary.summaryArray,
      summary: content_ai_summary.summary  
    };

    return fullArticle;
  } catch (err) {
    console.error("Lỗi khi crawl detail:", err.message);
    return null;
  }
  }
}

export default Crawl;