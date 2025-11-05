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
          const exist = await ArticleServices.isArticleExist(article);
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
          const exist = await ArticleServices.isArticleExist(article);
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
  },

  scrapeNhanChinh: async(req, res) => {
    try {
      await Utils.connectDB();
      const {url, category, source, author} = req.body;
      const response = await axios.get(url);
      const html = response.data;
      const $ = load(html);

      const articles = [];

      // Scrape articles từ danh sách
      $('.col-card-news-horizontal').each((_, element) => {
        const el = $(element);
        const titleLink = el.find('.card-news-horizontal h3 a');
        const title = titleLink.text().trim();
        const articleUrl = titleLink.attr('href') || '';
        const image = el.find('.card-news-horizontal .image img').attr('src') || undefined;
        const description = el.find('.desc').text().trim() || undefined;

        if (title && articleUrl) {
          // Đảm bảo URL đầy đủ
          const fullUrl = articleUrl.startsWith('http') ? articleUrl : `https://nhanchinh.vn${articleUrl}`;
          
          articles.push({ 
            title, 
            url: fullUrl, 
            image: image ? (image.startsWith('http') ? image : `https://nhanchinh.vn${image}`) : undefined, 
            description, 
            published_date: undefined,
            category, 
            source, 
            author 
          });
        }
      });

      // Kiểm tra bài viết đã có trong DB
      const checkResults = await Promise.all(
        articles.map(async (article) => {
          const exist = await ArticleServices.isArticleExist(article);
          return { article, exist };
        })
      );

      // Lọc ra bài chưa có
      const newArticles = checkResults.filter(item => !item.exist).map(item => item.article);

      console.log(`Tìm thấy ${newArticles.length} bài viết chưa có trong DB.`);

      // Lấy chi tiết từng bài viết và lưu vào DB
      for (const article of newArticles) {
        try {
          const fullArticle = await Crawl.scrapeNhanChinhArticleContent(article);
          if (fullArticle) {
            const savedArticle = await ArticleServices.saveArticleItem(fullArticle);
            console.log('Lưu bài viết thành công với ID:', savedArticle._id);
          }
        } catch (err) {
          console.error(`Lỗi lấy hoặc lưu bài viết ${article.title}:`, err.message);
        }
      }

      return res.json({
        status: 200,
        message: 'Hoàn tất crawl NhanChinh.vn',
        total_new_articles: newArticles.length,
      });

    } catch (error) {
      console.error('Lỗi khi crawl:', error.message);
      return res.status(500).json({ error: 'Lỗi khi crawl dữ liệu' });
    }
  },

  scrapeNhanChinhArticleContent: async(item) => {
  try {
    const response = await axios.get(item.url, { timeout: 15000 });
    const html = response.data;
    const $ = load(html);

    // Lấy tiêu đề từ trang chi tiết
    const title = $('.news-detail .title-detail').text().trim() || item.title;

    // Lấy mô tả
    let description = item.description;
    if (!description) {
      description = $('meta[name="description"]').attr('content') || '';
    }

    // Lấy ngày đăng
    let published_date = $('.news-detail .author .date .year').text().trim();
    if (published_date) {
      published_date = published_date.replace(/.*(\d{2}\/\d{2}\/\d{4}).*/, '$1');
    }

    // Lấy ảnh chính
    let image = item.image;
    if (!image) {
      const firstImg = $('.content-news img').first().attr('src');
      if (firstImg) {
        image = firstImg.startsWith('http') ? firstImg : `https://nhanchinh.vn${firstImg}`;
      }
    }

    // Lấy nội dung
    const contentContainer = $('.content-news');
    let contentParts = [];

    if (contentContainer.length) {
      contentContainer.children('p').each((i, el) => {
        const $el = $(el);
        const text = $el.text().trim();
        
        // Loại bỏ các đoạn chứa thông tin liên hệ
        const isContactInfo = text.includes('Văn phòng Luật sư Nhân Chính') ||
                             text.includes('Liên hệ luật sư:') ||
                             text.includes('0936683699') ||
                             text.includes('0983951338') ||
                             text.includes('Luatsunhanchinh@gmail.com') ||
                             text.includes('Email:');
        
        if (text && text !== '&nbsp;' && !isContactInfo) {
          contentParts.push(text);
        }
      });
    }

    // Lấy HTML và làm sạch
    const rawHtml = contentContainer.html() || '';
    
    // Làm sạch HTML - loại bỏ thông tin liên hệ trước khi xử lý
    const cleanedHtml = Crawl.removeContactInfoFromHtml(rawHtml);
    const contentHtml = Crawl.cleanNhanChinhContentHtml(cleanedHtml);

    // Hàm lấy text sạch
    function getCleanText(html) {
      const $ = load(html);
      $('img, table, div, span, figure').remove();
      let text = $.root().text();
      text = text.replace(/\s+/g, ' ').trim();
      return text;
    }

    const content_clean = getCleanText(cleanedHtml);
    const content_ai_summary = await Utils.ai_summary(description + ' ' + content_clean);

    const fullArticle = {
      title,
      description,
      url: item.url,
      image: '',
      published_date,
      category: item.category,
      source: item.source,
      author: item.author,
      content: contentParts.join('\n\n'),
      content_html: contentHtml,
      content_clean: content_clean,
      summary_array: content_ai_summary.summaryArray,
      summary: content_ai_summary.summary
    };

    return fullArticle;
  } catch (error) {
    console.error(`Lỗi lấy nội dung bài viết chi tiết: ${error.message}`);
    return null;
  }
},

// Hàm helper để loại bỏ thông tin liên hệ từ HTML
removeContactInfoFromHtml: (html) => {
  if (!html) return '';
  
  const $ = load(html);
  
  // Loại bỏ các thẻ p chứa thông tin liên hệ
  $('p').each((i, el) => {
    const $el = $(el);
    const text = $el.text().trim();
    
    const isContactInfo = text.includes('Văn phòng Luật sư Nhân Chính') ||
                         text.includes('Liên hệ luật sự:') ||
                         text.includes('Liên hệ luật sư:') ||
                         text.includes('0936683699') ||
                         text.includes('0983951338') ||
                         text.includes('Luatsunhanchinh@gmail.com') ||
                         text.includes('Email:') ||
                         /Email:\s*Luatsunhanchinh@gmail\.com/i.test(text);
    
    if (isContactInfo) {
      $el.remove();
    }
  });
  
  // Loại bỏ các thẻ strong chứa thông tin liên hệ
  $('strong').each((i, el) => {
    const $el = $(el);
    const text = $el.text().trim();
    
    if (text.includes('Văn phòng Luật sư Nhân Chính') ||
        text.includes('Liên hệ luật sư:') ||
        text.includes('Email:')) {
      // Xóa cả thẻ p chứa strong này
      $el.closest('p').remove();
    }
  });
  
  return $.html();
},

// Hàm làm sạch HTML cho Nhân Chính
cleanNhanChinhContentHtml: (html) => {
  if (!html) return '';
  
  const $ = load(html);

  // Xử lý bảng ảnh
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

  // Xóa các thẻ và thuộc tính không cần thiết
  $('script, style, iframe, object, embed, input, form, button').remove();
  $('[id], [class]').removeAttr('id').removeAttr('class');
  $('[onclick], [onload]').removeAttr('onclick').removeAttr('onload');
  
  // Xử lý link không hợp lệ
  $('a').each((i, el) => {
    const href = $(el).attr('href');
    if (!href || href.startsWith('javascript:')) {
      $(el).replaceWith($(el).text());
    }
  });

  // Chuẩn hóa img
  $('img').each((i, el) => {
    const $img = $(el);
    $img.removeAttr('width height class id onclick');
    $img.attr('style', 'max-width: 100%; height: auto; display: block; margin: 0 auto;');
    if (!$img.attr('alt')) {
      $img.attr('alt', 'Hình ảnh bài viết');
    }
  });

  // Xóa các thẻ rỗng
  $('p, div').each((i, el) => {
    const $el = $(el);
    if (!$el.text().trim() && !$el.find('img, figure').length) {
      $el.remove();
    }
  });

  // Loại bỏ thông tin liên hệ một lần nữa (double-check)
  $('p').each((i, el) => {
    const $el = $(el);
    const text = $el.text().trim();
    
    if (text.includes('Văn phòng Luật sư Nhân Chính') ||
        text.includes('Liên hệ luật sư:') ||
        text.includes('0936683699') ||
        text.includes('0983951338') ||
        text.includes('Luatsunhanchinh@gmail.com')) {
      $el.remove();
    }
  });

  // Lấy HTML đã làm sạch
  let contentHtml = $('body').html() || $.root().html() || '';
  
  // Loại bỏ \n, khoảng trắng thừa
  contentHtml = contentHtml
    .replace(/\\n' \+/g, '')
    .replace(/\\n/g, '')
    .replace(/\s*\n\s*/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim();

  return contentHtml;
},


scrapeXayDungChinhSach: async (req, res) => {
  try {
    await Utils.connectDB(); // Kết nối DB
    const { url, category, source, author } = req.body;
    const response = await axios.get(url);
    const html = response.data;
    const $ = load(html);

    const articles = [];

    // Scrape từ các box-category-item trong trang chủ
    $('.box-category-item').each((_, element) => {
      const el = $(element);
      
      // Lấy tiêu đề và URL
      const titleLink = el.find('.box-category-link-title');
      const title = titleLink.text().trim();
      const articleUrl = titleLink.attr('href') || '';
      
      // Lấy ảnh đại diện
      const image = el.find('.box-category-avatar').attr('src') || undefined;
      
      // Lấy mô tả/sapo
      const description = el.find('.box-category-sapo').text().trim() || undefined;
      
      // Lấy thời gian đăng từ title attribute
      let published_date = undefined;
      const timeElement = el.find('.time-ago');
      if (timeElement.length) {
        const timeTitle = timeElement.attr('title');
        if (timeTitle) {
          // Chuyển đổi từ format "08/21/2025 03:03:00 PM" sang định dạng chuẩn
          published_date = timeTitle;
        }
      }

      if (title && articleUrl) {
        // Tạo URL đầy đủ nếu cần
        const fullUrl = articleUrl.startsWith('http') ? articleUrl : 
                       `https://xaydungchinhsach.chinhphu.vn${articleUrl}`;
        
        articles.push({ 
          title, 
          url: fullUrl, 
          image, 
          description, 
          published_date, 
          category, 
          source, 
          author 
        });
      }
    });

    // Scrape thêm từ timeline_list nếu có
    $('.timeline_list .box-category-item').each((_, element) => {
      const el = $(element);
      
      const titleLink = el.find('.box-category-link-title');
      const title = titleLink.text().trim();
      const articleUrl = titleLink.attr('href') || '';
      
      const image = el.find('.box-category-avatar').attr('src') || undefined;
      const description = el.find('.box-category-sapo').text().trim() || undefined;
      
      let published_date = undefined;
      const timeElement = el.find('.time-ago');
      if (timeElement.length) {
        const timeTitle = timeElement.attr('title');
        if (timeTitle) {
          published_date = timeTitle;
        }
      }

      if (title && articleUrl) {
        const fullUrl = articleUrl.startsWith('http') ? articleUrl : 
                       `https://xaydungchinhsach.chinhphu.vn${articleUrl}`;
        
        // Kiểm tra trùng lặp trước khi thêm
        const isDuplicate = articles.some(article => article.url === fullUrl);
        if (!isDuplicate) {
          articles.push({ 
            title, 
            url: fullUrl, 
            image, 
            description, 
            published_date, 
            category, 
            source, 
            author 
          });
        }
      }
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

    console.log(`Tìm thấy ${newArticles.length} bài viết mới trên Xây dựng Chính sách.`);

    // Lấy chi tiết và lưu
    for (const article of newArticles.reverse()) {
      try {
        const fullArticle = await Crawl.scrapeXayDungChinhSachDetail(article);
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
      message: 'Hoàn tất crawl Xây dựng Chính sách',
      total_new_articles: newArticles.length,
    });
  } catch (error) {
    console.error('Lỗi khi crawl:', error.message);
    return res.status(500).json({ error: 'Lỗi khi crawl dữ liệu' });
  }
},

// Hàm scrape chi tiết bài viết
scrapeXayDungChinhSachDetail: async (item) => {
  try {
    const { data: html } = await axios.get(item.url, { timeout: 10000 });
    const $ = load(html);

    const container = $(".detail-main");

    // Tiêu đề
    const title = container.find("h1.title").text().trim() || item.title;

    // Ngày đăng
    let dateText = container.find(".days").text().trim() || item.published_date || '';
    
    // Tóm tắt
    const summary = container.find(".detail-sapo").text().trim() || item.description || '';

    // Làm sạch nội dung HTML
    const contentNode = container.find(".detail-content").clone();

    // Xóa các thẻ không cần thiết
    contentNode.find('script, style, iframe, object, embed, input, form, button').remove();
    
    // Xóa phần related news/bài viết liên quan
    contentNode.find('.VCSortableInPreviewMode[type="RelatedNewsBox"]').remove();
    contentNode.find('.kbwscwl-relatedbox').remove();
    contentNode.find('.kbwscwlr-list').remove();
    contentNode.find('[relatednewsboxtype]').remove();
    
    // Xóa các thuộc tính không cần thiết
    contentNode.find('[id], [class]').removeAttr('id').removeAttr('class');
    contentNode.find('[style]').removeAttr('style');
    contentNode.find('a[onclick], img[onclick]').removeAttr('onclick');
    contentNode.find('a').each((i, el) => {
      const href = $(el).attr('href');
      if (!href || href.startsWith('javascript:')) $(el).replaceWith($(el).text());
    });

    // Tạo mảng để lưu nội dung text và vị trí ảnh
    const contentParts = [];
    const imageUrls = [];

    // Xử lý nội dung và ảnh
    contentNode.find('p, h1, h2, h3, h4, h5, h6').each((i, el) => {
      const $el = $(el);
      if ($el.text().trim()) {
        contentParts.push($el.text().trim());
      }
    });

    // Xử lý ảnh
    contentNode.find('img').each((i, el) => {
      const $img = $(el);
      const src = $img.attr('src');
      if (src) {
        const fullSrc = src.startsWith('http') ? src : `https://xaydungchinhsach.chinhphu.vn${src}`;
        imageUrls.push(fullSrc);
        contentParts.push(`[Image: ${fullSrc}]`);
        
        // Chuẩn hóa ảnh
        $img.attr('style', 'max-width: 100%; height: auto; display: block; margin: 0 auto;');
        $img.attr('alt', $img.attr('alt') || title);
        $img.attr('src', fullSrc);
      }
    });

    // Chuẩn hóa các thẻ HTML
    contentNode.find('p, div').each((i, el) => {
      const $el = $(el);
      if (!$el.text().trim() && !$el.find('img, figure').length) {
        $el.remove();
      }
    });

    // HTML đã làm sạch
    let contentHtml = contentNode.html()?.trim() || '';
    contentHtml = contentHtml
      .replace(/\\n' \+/g, '')
      .replace(/\\n/g, '')
      .replace(/\s*\n\s*/g, '')
      .replace(/\s{2,}/g, ' ')
      .trim();

    // Nội dung text liền mạch
    const contentText = contentParts.join(' ').replace(/\s{2,}/g, ' ').trim() || '';

    // Ảnh trong bài
    const images = imageUrls;

    // Hàm lấy text sạch liền mạch
    function getCleanText(html) {
      const $ = load(html);
      $('img, table, div, span, figure').remove();
      let text = $.root().text();
      text = text.replace(/\s+/g, ' ').trim();
      return text;
    }

    const content_clean = getCleanText(contentHtml);
    const content_ai_summary = await Utils.ai_summary(item.description + content_clean);

    const fullArticle = {
      title: title,
      description: summary,
      url: item.url,
      image: images[0] || item.image,
      published_date: dateText,
      category: item.category,
      source: item.source,
      author: item.author,
      content: contentText,
      content_html: contentHtml,
      content_clean: content_clean,
      summary_array: content_ai_summary.summaryArray,
      summary: content_ai_summary.summary
    };

    return fullArticle;
  } catch (err) {
    console.error("Lỗi khi crawl detail:", err.message);
    return null;
  }
},

scrapeVKSDakLak: async(req, res) => {
  try {
    await Utils.connectDB();  
    const {url, category, source, author} = req.body;
    console.log(req.body);
    
    const response = await axios.get(url);
    const html = response.data;
    const $ = load(html);

    const articles = [];

    // Lấy articles từ cấu trúc .categoryList .article-item
    $('.categoryList .article-item').each((_, element) => {
      const el = $(element);
      
      // Lấy title và url từ thẻ h4 > a
      const titleEl = el.find('h4 a').first();
      const title = titleEl.text().trim();
      const articleUrl = titleEl.attr('href') || '';
      
      // Xử lý URL - nếu là relative path thì thêm domain
      let fullUrl = articleUrl;
      if (articleUrl.startsWith('/')) {
        fullUrl = 'https://vksdaklak.gov.vn' + articleUrl;
      }
      
      // Lấy image từ thẻ a.img > img
      const image = el.find('a.img img').attr('src') || undefined;
      let fullImageUrl = image;
      if (image && image.startsWith('/')) {
        fullImageUrl = 'https://vksdaklak.gov.vn' + image;
      }
      
      // Lấy description từ .text-justify
      const description = el.find('.text-justify').text().trim() || undefined;
      
      // Lấy published_date từ span trong h4
      const published_date = el.find('h4 span').text().trim().replace(/[()]/g, '') || undefined;

      // Chỉ thêm vào nếu có title và url
      if (title && articleUrl) {
        articles.push({ 
          title, 
          url: fullUrl, 
          image: fullImageUrl, 
          description, 
          published_date, 
          category, 
          source, 
          author 
        });
      }
    });

    console.log(`Tìm thấy ${articles.length} bài viết từ VKS Đắk Lắk.`);

    // Kiểm tra bài viết đã có trong DB
    const checkResults = await Promise.all(
      articles.map(async (article) => {
        const exist = await ArticleServices.isArticleExist(article);
        return { article, exist };
      })
    );

    // Lọc ra bài chưa có
    const newArticles = checkResults.filter(item => !item.exist).map(item => item.article);

    console.log(`Tìm thấy ${newArticles.length} bài viết chưa có trong DB.`);

    // Lấy chi tiết từng bài viết, sau đó lưu vào DB
    for (const article of newArticles.reverse()) {
      try {
        const fullArticle = await Crawl.scrapeVKSDakLakArticleContent(article);
        const savedArticle = await ArticleServices.saveArticleItem(fullArticle);
        console.log('Lưu bài viết thành công với ID:', savedArticle._id);
      } catch (err) {
        console.error(`Lỗi lấy hoặc lưu bài viết ${article.title}:`, err.message);
      }
    }

    return res.json({
      status: 200,
      message: 'Hoàn tất crawl VKS Đắk Lắk',
      total_new_articles: newArticles.length,
    });

  } catch (error) {
    console.error('Lỗi khi crawl VKS Đắk Lắk:', error.message);
    return res.status(500).json({ error: 'Lỗi khi crawl dữ liệu VKS Đắk Lắk' });
  }
},

scrapeVKSDakLakArticleContent: async(item) => {
  try {
    const response = await axios.get(item.url, { timeout: 10000 });
    const html = response.data;
    const $ = load(html);

    // Lấy content từ .article-content
    const contentParts = [];
    $('.article-content p, .article-content img').each((i, el) => {
      if ($(el).is('p')) {
        const text = $(el).text().trim();
        if (text && !$(el).find('.AuthorName').length) { // Bỏ qua tên tác giả
          contentParts.push(text);
        }
      } else if ($(el).is('img')) {
        const imgSrc = $(el).attr('src');
        if (imgSrc) {
          let fullImgUrl = imgSrc;
          if (imgSrc.startsWith('/')) {
            fullImgUrl = 'https://vksdaklak.gov.vn' + imgSrc;
          }
          contentParts.push(`[Image: ${fullImgUrl}]`);
        }
      }
    });

    // Lấy nguyên đoạn html phần nội dung chi tiết
    const rawHtml = $('.article-content').html() || '';
    const contentHtml = Crawl.cleanVKSDakLakContentHtml(rawHtml);

    // Hàm lấy text sạch liền mạch
    function getCleanText(html) {
      const $ = load(html);
      // Xóa các thẻ không cần thiết nhưng giữ lại text
      $('.AuthorName, .binh-chon, script, style').remove();
      // Lấy toàn bộ text bên trong
      let text = $.root().text();
      // Thay nhiều dấu xuống dòng, tab, space thành 1 space, trim đầu cuối
      text = text.replace(/\s+/g, ' ').trim();
      return text;
    }

    const content_clean = getCleanText(rawHtml);
    const content_ai_summary = await Utils.ai_summary(item.description + content_clean);

    // Lấy title từ h1.heading-title hoặc từ item
    const detailTitle = $('.heading-title').text().trim() || item.title;
    
    const fullArticle = {
      title: detailTitle,
      description: item.description,
      url: item.url,
      image: item.image,
      published_date: item.published_date,
      category: item.category,
      source: item.source,
      author: item.author,
      content: contentParts.join('\n\n'),
      content_html: contentHtml,
      content_clean: content_clean,
      summary_array: content_ai_summary.summaryArray,
      summary: content_ai_summary.summary
    };

    return fullArticle;
  } catch (error) {
    throw new Error(`Lỗi lấy nội dung bài viết VKS Đắk Lắk: ${error.message}`);
  }
},

cleanVKSDakLakContentHtml: (html) => {
  const $ = load(html);

  // Xóa title và description để tránh trùng lặp
  $('.heading-title').remove(); // Xóa h1 title
  $('p').first().remove(); // Xóa đoạn description đầu tiên (thường là đoạn có <strong>)

  // Xử lý images - thêm style responsive
  $('img').each((i, img) => {
    const $img = $(img);
    
    // Convert relative URL thành absolute URL
    let src = $img.attr('src');
    if (src && src.startsWith('/')) {
      $img.attr('src', 'https://vksdaklak.gov.vn' + src);
    }
    
    $img.attr('style', 'max-width:100%; height:auto; display:block; margin: 10px auto;');
  });

  // Xử lý các đoạn văn
  $('p').each((i, p) => {
    const $p = $(p);
    if ($p.css('text-align') === 'center') {
      $p.css('margin', '15px 0');
    }
  });

  // Xóa các thẻ không cần thiết
  $('.binh-chon, script, style').remove();

  // Xử lý author name
  $('.AuthorName').css({
    'text-align': 'right',
    'font-weight': 'bold',
    'margin-top': '20px'
  });

  // Lấy chỉ phần bên trong body
  return $('body').html() || $.root().html();
},

// Scraper cho VKS Đà Nẵng
scrapeVKSDaNang: async(req, res) => {
  try {
    await Utils.connectDB();  
    const {url, category, source, author} = req.body;
    console.log(req.body);
    
    const response = await axios.get(url);
    const html = response.data;
    const $ = load(html);

    const articles = [];

    // Lấy articles từ cấu trúc .viewcatpage-item
    $('.viewcatpage-item').each((_, element) => {
      const el = $(element);
      
      // Lấy title và url từ thẻ h2 > a
      const titleEl = el.find('h2 a').first();
      const title = titleEl.text().trim();
      const articleUrl = titleEl.attr('href') || '';
      
      // Xử lý URL - nếu là relative path thì thêm domain
      let fullUrl = articleUrl;
      if (articleUrl.startsWith('/')) {
        fullUrl = 'https://vksdanang.gov.vn' + articleUrl;
      }
      
      // Lấy image từ thẻ a > img đầu tiên
      const image = el.find('a img').first().attr('src') || undefined;
      let fullImageUrl = image;
      if (image && image.startsWith('/')) {
        fullImageUrl = 'https://vksdanang.gov.vn' + image;
      }
      
      // Lấy description từ thẻ p cuối cùng
      const description = el.find('p').last().text().trim() || undefined;
      
      // Lấy published_date từ span.publtime
      const publishedDateEl = el.find('span.publtime');
      let published_date = undefined;
      if (publishedDateEl.length > 0) {
        // Lấy text và loại bỏ icon fa-clock-o
        published_date = publishedDateEl.text().replace(/\s*\s*/g, '').trim() || undefined;
      }

      // Chỉ thêm vào nếu có title và url
      if (title && articleUrl) {
        articles.push({ 
          title, 
          url: fullUrl, 
          image: fullImageUrl, 
          description, 
          published_date, 
          category, 
          source, 
          author 
        });
      }
    });

    console.log(`Tìm thấy ${articles.length} bài viết từ VKS Đà Nẵng.`);

    // Kiểm tra bài viết đã có trong DB
    const checkResults = await Promise.all(
      articles.map(async (article) => {
        const exist = await ArticleServices.isArticleExist(article);
        return { article, exist };
      })
    );

    // Lọc ra bài chưa có
    const newArticles = checkResults.filter(item => !item.exist).map(item => item.article);

    console.log(`Tìm thấy ${newArticles.length} bài viết chưa có trong DB.`);

    // Lấy chi tiết từng bài viết, sau đó lưu vào DB
    for (const article of newArticles.reverse()) {
      try {
        const fullArticle = await Crawl.scrapeVKSDaNangArticleContent(article);
        const savedArticle = await ArticleServices.saveArticleItem(fullArticle);
        console.log('Lưu bài viết thành công với ID:', savedArticle._id);
      } catch (err) {
        console.error(`Lỗi lấy hoặc lưu bài viết ${article.title}:`, err.message);
      }
    }

    return res.json({
      status: 200,
      message: 'Hoàn tất crawl VKS Đà Nẵng',
      total_new_articles: newArticles.length,
    });

  } catch (error) {
    console.error('Lỗi khi crawl VKS Đà Nẵng:', error.message);
    return res.status(500).json({ error: 'Lỗi khi crawl dữ liệu VKS Đà Nẵng' });
  }
},

scrapeVKSDaNangArticleContent: async(item) => {
  try {
    const response = await axios.get(item.url, { timeout: 10000 });
    const html = response.data;
    const $ = load(html);

    // Lấy content từ #news-bodyhtml
    const contentParts = [];
    $('#news-bodyhtml p, #news-bodyhtml img').each((i, el) => {
      if ($(el).is('p')) {
        const text = $(el).text().trim();
        // Bỏ qua các thẻ p chỉ chứa thông tin tác giả/nguồn
        if (text && !text.startsWith('Tin:') && !text.startsWith('Ảnh:') && !$(el).find('strong').text().startsWith('Tin:')) {
          contentParts.push(text);
        }
      } else if ($(el).is('img')) {
        const imgSrc = $(el).attr('src');
        if (imgSrc) {
          let fullImgUrl = imgSrc;
          if (imgSrc.startsWith('/')) {
            fullImgUrl = 'https://vksdanang.gov.vn' + imgSrc;
          }
          contentParts.push(`[Image: ${fullImgUrl}]`);
        }
      }
    });

    // Lấy nguyên đoạn html phần nội dung chi tiết
    const rawHtml = $('#news-bodyhtml').html() || '';
    const contentHtml = Crawl.cleanVKSDaNangContentHtml(rawHtml);

    // Hàm lấy text sạch liền mạch
    function getCleanText(html) {
      const $ = load(html);
      // Xóa các thẻ không cần thiết nhưng giữ lại text
      $('script, style').remove();
      // Lấy toàn bộ text bên trong
      let text = $.root().text();
      // Thay nhiều dấu xuống dòng, tab, space thành 1 space, trim đầu cuối
      text = text.replace(/\s+/g, ' ').trim();
      return text;
    }

    const content_clean = getCleanText(rawHtml);
    const content_ai_summary = await Utils.ai_summary(item.description + content_clean);

    // Lấy title từ h1.post-title hoặc từ item
    const detailTitle = $('.post-title').text().trim() || item.title;
    
    // Lấy thời gian publish chi tiết từ span.post-time
    let detailPublishedDate = item.published_date;
    const postTimeEl = $('.post-time');
    if (postTimeEl.length > 0) {
      detailPublishedDate = postTimeEl.text().replace(/\s*\s*/g, '').trim() || item.published_date;
    }
    
    const fullArticle = {
      title: detailTitle,
      description: item.description,
      url: item.url,
      image: item.image,
      published_date: detailPublishedDate,
      category: item.category,
      source: item.source,
      author: item.author,
      content: contentParts.join('\n\n'),
      content_html: contentHtml,
      content_clean: content_clean,
      summary_array: content_ai_summary.summaryArray,
      summary: content_ai_summary.summary
    };

    return fullArticle;
  } catch (error) {
    throw new Error(`Lỗi lấy nội dung bài viết VKS Đà Nẵng: ${error.message}`);
  }
},

cleanVKSDaNangContentHtml: (html) => {
  const $ = load(html);

  // Xóa title và description để tránh trùng lặp
  $('.post-title').remove(); // Xóa h1 title
  $('.hometext').remove(); // Xóa phần description

  // Xử lý images - thêm style responsive
  $('img').each((i, img) => {
    const $img = $(img);
    
    // Convert relative URL thành absolute URL
    let src = $img.attr('src');
    if (src && src.startsWith('/')) {
      $img.attr('src', 'https://vksdanang.gov.vn' + src);
    }
    
    $img.attr('style', 'max-width:100%; height:auto; display:block; margin: 10px auto;');
  });

  // Xử lý các đoạn văn
  $('p').each((i, p) => {
    const $p = $(p);
    const text = $p.text().trim();
    
    // Xóa các đoạn chứa thông tin tác giả/nguồn
    if (text.startsWith('Tin:') || text.startsWith('Ảnh:') || $p.find('strong').text().startsWith('Tin:')) {
      $p.remove();
      return;
    }
    
    // Xử lý italic cho các caption ảnh
    if (text.startsWith('Hình ảnh') || text.startsWith('Một số hình ảnh')) {
      $p.css({
        'font-style': 'italic',
        'text-align': 'center',
        'margin': '10px 0'
      });
    }
  });

  // Xóa các thẻ không cần thiết
  $('script, style, .rating, hr').remove();

  // Lấy chỉ phần bên trong body
  return $('body').html() || $.root().html();
},

// Scraper cho Tạp chí Tòa án nhân dân
scrapeTapChiToaAn: async(req, res) => {
  try {
    await Utils.connectDB();  
    const {url, category, source, author} = req.body;
    console.log(req.body);
    
    const response = await axios.get(url);
    const html = response.data;
    const $ = load(html);

    const articles = [];

    // Lấy articles từ cấu trúc .d-md-flex.post-entry-2.small-img
    $('.d-md-flex.post-entry-2.small-img').each((_, element) => {
      const el = $(element);
      
      // Lấy title và url từ thẻ h3 > a
      const titleEl = el.find('h3 a').first();
      const title = titleEl.text().trim();
      const articleUrl = titleEl.attr('href') || '';
      
      // URL đã là absolute URL, không cần xử lý
      const fullUrl = articleUrl;
      
      // Lấy image từ thẻ a.thumbnail > img
      const image = el.find('a.thumbnail img').first().attr('src') || undefined;
      
      // Lấy description từ thẻ p (đoạn văn bản mô tả)
      const description = el.find('> div > p').first().text().trim() || undefined;
      
      // Chỉ thêm vào nếu có title và url
      if (title && articleUrl) {
        articles.push({ 
          title, 
          url: fullUrl, 
          image, 
          description, 
          published_date: undefined, // Sẽ lấy trong trang chi tiết
          category, 
          source, 
          author: author
        });
      }
    });

    console.log(`Tìm thấy ${articles.length} bài viết từ Tạp chí Tòa án nhân dân.`);

    // Kiểm tra bài viết đã có trong DB
    const checkResults = await Promise.all(
      articles.map(async (article) => {
        const exist = await ArticleServices.isArticleExist(article);
        return { article, exist };
      })
    );

    // Lọc ra bài chưa có
    const newArticles = checkResults.filter(item => !item.exist).map(item => item.article);

    console.log(`Tìm thấy ${newArticles.length} bài viết chưa có trong DB.`);

    // Lấy chi tiết từng bài viết, sau đó lưu vào DB
    for (const article of newArticles.reverse()) {
      try {
        const fullArticle = await Crawl.scrapeTapChiToaAnArticleContent(article);
        const savedArticle = await ArticleServices.saveArticleItem(fullArticle);
        console.log('Lưu bài viết thành công với ID:', savedArticle._id);
      } catch (err) {
        console.error(`Lỗi lấy hoặc lưu bài viết ${article.title}:`, err.message);
      }
    }

    return res.json({
      status: 200,
      message: 'Hoàn tất crawl Tạp chí Tòa án nhân dân',
      total_new_articles: newArticles.length,
    });

  } catch (error) {
    console.error('Lỗi khi crawl Tạp chí Tòa án nhân dân:', error.message);
    return res.status(500).json({ error: 'Lỗi khi crawl dữ liệu Tạp chí Tòa án nhân dân' });
  }
},

scrapeTapChiToaAnArticleContent: async(item) => {
  try {
    const response = await axios.get(item.url, { timeout: 10000 });
    const html = response.data;
    const $ = load(html);

    // Lấy description từ h5.short-desc trong trang chi tiết
    const detailDescription = $('h5.short-desc strong').text().trim() || 
                             $('h5.short-desc').text().trim() || 
                             item.description;

    // Lấy content từ .my-4.post-entry
    const contentParts = [];
    $('.my-4.post-entry p, .my-4.post-entry img').each((i, el) => {
      if ($(el).is('p')) {
        const text = $(el).text().trim();
        if (text) {
          contentParts.push(text);
        }
      } else if ($(el).is('img')) {
        const imgSrc = $(el).attr('src');
        if (imgSrc) {
          contentParts.push(`[Image: ${imgSrc}]`);
        }
      }
    });

    // Lấy nguyên đoạn html phần nội dung chi tiết
    const rawHtml = $('.my-4.post-entry').html() || '';
    const contentHtml = Crawl.cleanTapChiToaAnContentHtml(rawHtml);

    // Hàm lấy text sạch liền mạch
    function getCleanText(html) {
      const $ = load(html);
      $('script, style').remove();
      let text = $.root().text();
      text = text.replace(/\s+/g, ' ').trim();
      return text;
    }

    const content_clean = getCleanText(rawHtml);
    const content_ai_summary = await Utils.ai_summary(item.description + content_clean);

    // Lấy title từ h1.mb-2.mt-3
    const detailTitle = $('.single-post h1.mb-2.mt-3').text().trim() || item.title;
    
    // Lấy thời gian publish từ .post-meta span
    let detailPublishedDate = item.published_date;
    const postTimeEl = $('.post-meta span');
    if (postTimeEl.length > 0) {
      detailPublishedDate = postTimeEl.first().text().trim() || item.published_date;
    }
    
    const fullArticle = {
      title: detailTitle,
      description: detailDescription,
      url: item.url,
      image: item.image,
      published_date: detailPublishedDate,
      category: item.category,
      source: item.source,
      author: item.author,
      content: contentParts.join('\n\n'),
      content_html: contentHtml,
      content_clean: content_clean,
      summary_array: content_ai_summary.summaryArray,
      summary: content_ai_summary.summary
    };

    return fullArticle;
  } catch (error) {
    throw new Error(`Lỗi lấy nội dung bài viết Tạp chí Tòa án nhân dân: ${error.message}`);
  }
},

cleanTapChiToaAnContentHtml: (html) => {
  const $ = load(html);

  // Xử lý images - thêm style responsive
  $('img').each((i, img) => {
    const $img = $(img);
    $img.attr('style', 'max-width:100%; height:auto; display:block; margin: 10px auto;');
  });

  // Xử lý các đoạn văn
  $('p').each((i, p) => {
    const $p = $(p);
    const text = $p.text().trim();
    
    // Xử lý italic cho các caption hoặc chú thích
    if (text.startsWith('[') || $p.find('strong').length > 0) {
      $p.css({
        'font-style': 'italic',
        'margin': '10px 0'
      });
    }
  });

  // Xóa các thẻ không cần thiết
  $('script, style, .rating, hr').remove();

  return $('body').html() || $.root().html();
},



}

export default Crawl;