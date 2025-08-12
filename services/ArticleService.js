import Article from "../models/Article.js";
import Utils from "./Utils.js";

const ArticleServices = {
  isArticleExist: async (title) => {
    const article = await Article.findOne({ originalTitle: title }).exec();
    return !!article;
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