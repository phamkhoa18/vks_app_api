import mongoose from 'mongoose';

const FeedbackSchema = new mongoose.Schema({
  articleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Article' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  feedbackType: { type: String, enum: ['positive', 'negative'], required: true },
  comment: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feedback', FeedbackSchema);
