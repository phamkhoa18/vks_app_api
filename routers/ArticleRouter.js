import express from 'express';
import ArticlesController from '../controllers/ArticleController.js';

const router = express.Router();

// Router (đường dẫn)
router.post('/', ArticlesController.add);
router.get('/', ArticlesController.getAll);
router.get('/:id', ArticlesController.getById);
router.put('/:id', ArticlesController.update);
router.delete('/:id', ArticlesController.delete);

export default router;