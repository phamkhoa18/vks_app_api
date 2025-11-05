import express from 'express';
import UsersController from '../controllers/UserController.js';

const router = express.Router();

// Auth routes
router.post('/register', UsersController.add);
router.post('/login', UsersController.login);

// User routes
router.get('/', UsersController.getAll);
router.get('/:id', UsersController.getById);

// ✅ Update profile (cho user tự update)
router.put('/:id', UsersController.updateProfile);

// Delete user
router.delete('/:id', UsersController.delete);

export default router;