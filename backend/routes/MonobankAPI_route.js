import express from 'express';
import { getClientInfo } from '../controllers/monobankAPI_controller.js';

const router = express.Router();

router.get('/balance', getClientInfo);
router.get('/client_info', getClientInfo);

export default router;