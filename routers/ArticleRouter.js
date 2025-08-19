// routes/articles.js - Updated with search routes
import express from 'express';
import ArticlesController from '../controllers/ArticleController.js';

const router = express.Router();

// ✅ NEW: Search routes (phải đặt TRƯỚC route /:id)
router.get('/search', ArticlesController.search);
router.get('/suggestions', ArticlesController.getSuggestions);

// Existing routes
router.post('/', ArticlesController.add);
router.get('/', ArticlesController.validateGetAllQuery, ArticlesController.getAll);
router.get('/:id', ArticlesController.getById);
router.put('/:id', ArticlesController.update);
router.delete('/:id', ArticlesController.delete);

export default router;