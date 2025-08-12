import express from 'express';
import CategoriesController from '../controllers/CategoryController.js';

const router = express.Router();

// Router (đường dẫn)
router.post('/', CategoriesController.add);
router.get('/', CategoriesController.getAll);
router.get('/:id', CategoriesController.getById);
router.put('/:id', CategoriesController.update);
router.delete('/:id', CategoriesController.delete);

export default router;