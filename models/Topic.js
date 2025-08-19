// models/Topic.js
import mongoose from 'mongoose';

const TopicSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  articles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Article' }],
  section: { type: mongoose.Schema.Types.ObjectId, ref: 'Section' }, // Thêm dòng này
  createdAt: { type: Date, default: Date.now },
  isActive: { type: Boolean, default: true }
});

export default mongoose.model('Topic', TopicSchema);