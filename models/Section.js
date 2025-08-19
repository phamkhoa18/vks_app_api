// models/Section.js
import mongoose from 'mongoose';

const SectionSchema = new mongoose.Schema({
  title: { type: String, required: true }, // "Bản tin pháp luật 14:30 - 16/08/2025"
  slug: { type: String, required: true, unique: true },
  description: { type: String },
  summary: {type: String},
  topics: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Topic' }],
  sectionTime: { type: Date, default: Date.now }, // Thời gian tạo section
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Section', SectionSchema);