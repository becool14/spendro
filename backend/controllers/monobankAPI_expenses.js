import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

// Время жизни кэша (1 минута)
let cachedPayments = null;  // Переменная для хранения кэша
let cacheTimestamp = 0;       // Время последнего обновления кэша (в миллисекундах)
const CACHE_TTL = 60000;    // Время жизни кэша в миллисекундах

const getPayments = async (req, res) => {
    const MONOBANK_API_BASE = 'https://api.monobank.ua';
    const token = process.env.MONOBANK_TOKEN;

    try {
        const currentTime = Date.now();
        const TimeNow = Math.floor(Date.now() / 1000);
        const oneMonthAgo = TimeNow - 2500000; // 30 дней назад в Unix-формате

        // Проверяем, нужно ли обновить кэш (если время жизни кэша истекло)
        if (currentTime - cacheTimestamp >= CACHE_TTL) {
            console.log('Cache expired, refreshing data');
            cachedPayments = null; // Очищаем старые данные
        }

        // Если кэш уже существует, используем его
        if (cachedPayments) {
            console.log('Serving from cache');
        } else {
            console.log('Fetching from Monobank API');
            const response = await fetch(`${MONOBANK_API_BASE}/personal/statement/${0}/${oneMonthAgo}/${TimeNow}`, {
                method: 'GET',
                headers: {
                    'X-Token': token,
                },
            });

            if (!response.ok) {
                throw new Error(`API Error: ${response.statusText}`);
            }

            const data = await response.json(); // Получаем данные о транзакциях

            // Обновляем кэш с новыми данными
            cachedPayments = data
                .filter(payment => payment.time >= oneMonthAgo && payment.time <= TimeNow)
                .map(payment => ({
                    date: payment.time,
                    amount: payment.amount / 100,
                    mcc: payment.mcc,
                    description: payment.description,
                    comment: payment.comment,
                }));

            // Сохраняем обновленный кэш
            cacheTimestamp = currentTime; // Обновляем метку времени
        }

        if (req.path == '/expenses') {
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

export { getPayments };
