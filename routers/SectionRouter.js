// routes/sections.js
import express from 'express';
import SectionsController from '../controllers/SectionController.js';

const router = express.Router();

// Generate section từ articles (với summary tự động)
router.post('/generate', SectionsController.validateGenerateSection, SectionsController.generateSection);

// NEW: Summary endpoints
router.post('/:id/generate-summary', SectionsController.generateSummary); // Tạo summary cho section hiện có
router.get('/:id/summary', SectionsController.getSummaryOnly); // Lấy chỉ summary (dành cho audio/reading)

// CRUD operations
router.get('/', SectionsController.getAll); // Main API với page/limit (bao gồm summary)
router.get('/:id', SectionsController.getById); // Bao gồm summary và stats
router.get('/slug/:slug', SectionsController.getBySlug); // Bao gồm summary
router.post('/', SectionsController.add); // Tạo section thủ công (có thể thêm summary)
router.put('/:id', SectionsController.update); // Cập nhật section (bao gồm summary)
router.patch('/:id/topics', SectionsController.addTopics);
router.delete('/:id', SectionsController.delete);

export default router;