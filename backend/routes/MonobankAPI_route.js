import express from 'express';
import { getClientInfo } from '../controllers/monobankAPI_controller.js';

const router = express.Router();

router.get('/', getClientInfo); 

export default router;