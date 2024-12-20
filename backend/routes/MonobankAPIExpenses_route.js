import express from 'express';
import { getPayments } from '../controllers/monobankAPI_expenses.js';

const router = express.Router();

router.get('/expenses', getPayments)
router.get('/monthlybalance', getPayments)

export default router;