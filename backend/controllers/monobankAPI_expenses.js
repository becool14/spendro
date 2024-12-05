import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();
   // Время жизни кэша (1 минута)

let cachedPayments = null;  // Переменная для хранения кэша
let cacheTimestamp = 0;       // Время последнего обновления кэша (в миллисекундах)
const CACHE_TTL = 3600000;   

const getPayments = async (req, res) => {
    const MONOBANK_API_BASE = 'https://api.monobank.ua';
    const token = process.env.MONOBANK_TOKEN;

    try {
        const currentTime = Date.now();
        const TimeNow = Math.floor(Date.now() / 1000);
        const oneMonthAgo = TimeNow - 30 * 24 * 60 * 60; // 30 дней назад в Unix-формате

        if (cachedPayments && (currentTime - cacheTimestamp < CACHE_TTL)) {
            console.log('Serving from cache');
        } else {
            console.log('Fetching from Monobank API');
            const response = await fetch(`${MONOBANK_API_BASE}/personal/statement/${0}/${1733093999}/${1733439599}`, {
                method: 'GET',
                headers: {
                    'X-Token': token,
                },
            });

            if (!response.ok) {
                throw new Error(`API Error: ${response.statusText}`);
            }

            const data = await response.json(); // Получаем данные о транзакциях
            cachedPayments = data.map(payments => ({
                date: payments.time,
                amount: payments.amount / 100,  // Сумма в валюте (Monobank API возвращает в копейках)
                mcc: payments.mcc,
                description: payments.description,
                comment: payments.comment
            }));

            // Сохраняем транзакции в кэш, если нужно
            cacheTimestamp = currentTime; // Обновляем метку времени
        }
        if(req.path == '/expenses'){
            const expenses = cachedPayments.filter(transaction => transaction.amount < 0);
            const totalExpenses = expenses.reduce((sum, payment) => sum + Math.abs(payment.amount), 0);
            return res.status(200).json({ expenses: totalExpenses });
        }


        res.status(200).json({ payments: cachedPayments });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Error fetching payments from Monobank API' });
    }
};
export {getPayments};