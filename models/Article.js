// models/Article.js
import mongoose from 'mongoose';

const ArticleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  originalTitle: { type: String, required: true },
  slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
  description: { type: String },
  originalUrl: { type: String },
  content: { type: String },
  htmlcontent: { type: String },
  summary: { type: String },
  aiSummary: [{ type: String }],
  source: { type: String },
  author: { type: String },
  language: { type: String, default: 'vi' },
  categories: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  image: { type: String },
  publishDate: { type: Date , default: Date.now},
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' , default: null},
  isUsedInTopic: { type: Boolean, default: false }
});

const Article = mongoose.model('Article', ArticleSchema);
export default Article;