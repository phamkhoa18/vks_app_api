import mongoose from 'mongoose';

const SavedArticleSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  articleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Article' },
  savedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('SavedArticle', SavedArticleSchema);
