import express from 'express';
import { submitContactForm } from '../controllers/ContactForm_Controller.js';
const router = express.Router();

router.post('/submit', submitContactForm);

export default router;