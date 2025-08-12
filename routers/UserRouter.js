import express from 'express';
import UsersController from '../controllers/UserController.js';

const router = express.Router();

// Router (đường dẫn)
router.post('/register', UsersController.add);
router.post('/login', UsersController.login);
router.get('/', UsersController.getAll);
router.get('/:id', UsersController.getById);
router.put('/:id', UsersController.update);
router.delete('/:id', UsersController.delete);

export default router;