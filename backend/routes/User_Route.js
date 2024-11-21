import express from 'express';
import { registerUser } from '../controllers/authController.js';

const router = express.Router();

// Реєстрація користувача
router.post('/register', registerUser);

export default router;
