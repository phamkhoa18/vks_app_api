import Article from "../models/Article.js";
import Utils from "./Utils.js";

const ArticleServices = {
isArticleExist: async (item) => {
  try {
    // Kiểm tra input validation
    if (!item || typeof item !== 'object') {
      return false;
    }

    const { title, url } = item;

    // Kiểm tra ít nhất một trong hai field phải có
    if (!title && !url) {
      return false;
    }

    // Normalize dữ liệu
    const normalizedTitle = title ? title.toString().trim() : null;
    const normalizedUrl = url ? url.toString().trim() : null;

    // Kiểm tra sau khi normalize có còn valid không
    if (!normalizedTitle && !normalizedUrl) {
      return false;
    }

    // Build query với $or để check duplicate bằng title HOẶC url
    const orConditions = [];
    
    if (normalizedTitle) {
      orConditions.push({ originalTitle: normalizedTitle });
    }
    
    if (normalizedUrl) {
      orConditions.push({ originalUrl: normalizedUrl });
    }

    // Nếu không có condition nào thì return false
    if (orConditions.length === 0) {
      return false;
    }

    // Query với $or - nếu tìm thấy bài viết có CÙNG title HOẶC CÙNG url thì coi là duplicate
    const query = orConditions.length === 1 ? orConditions[0] : { $or: orConditions };

    // Query database với error handling
    const article = await Article.findOne(query)
      .exec();

    // Log để debug (có thể remove sau)
    if (article) {
      console.log('Found duplicate article:', {
        _id: article._id,
        originalTitle: article.originalTitle,
        originalUrl: article.originalUrl,
        searchTitle: normalizedTitle,
        searchUrl: normalizedUrl
      });
    }

    // Trả về boolean
    return !!article;
    
  } catch (error) {
    // Log error để debug
    console.error('Error in isArticleExist:', error);
    
    // Trả về false thay vì throw error để không break application flow
    return false;
  }
},

  saveArticleItem: async (articleData) => {
    const article = new Article({
      title: articleData.title,
      originalTitle: articleData.title,
      image: articleData.image ,
      description: articleData.description,
      originalUrl: articleData.url,
      categories: articleData.category,
      source: articleData.source,
      content: articleData.content,
      htmlcontent: articleData.content_html,
      publishDate: new Date(),
      author: articleData.author || 'admin',
      slug: Utils.generateSlug(articleData.title),
      aiSummary: articleData.summary_array,
      summary: articleData.summary
    });
    return await article.save();
  }
}

export default ArticleServices;