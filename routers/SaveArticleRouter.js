import express from 'express';
import SavedArticlesController from '../controllers/SavedArticleController.js';

const router = express.Router();

// ✅ ĐẶT CÁC ROUTES CỤ THỂ TRƯỚC CÁC ROUTES DYNAMIC
// Route để check xem article có được save chưa
router.get('/check/:userId/:articleId', SavedArticlesController.checkSaved);

// Routes cho user-specific operations
router.get('/user/:userId/count', SavedArticlesController.getCountByUser);
router.get('/user/:userId', SavedArticlesController.getByUserId);

// Route để remove saved article bằng userId và articleId
router.delete('/user/:userId/article/:articleId', SavedArticlesController.removeByUserAndArticle);

// Routes chung
router.post('/', SavedArticlesController.save);
router.get('/', SavedArticlesController.getAll);
router.get('/:id', SavedArticlesController.getById);
router.delete('/:id', SavedArticlesController.remove);

export default router;