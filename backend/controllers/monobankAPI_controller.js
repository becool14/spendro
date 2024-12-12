import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();
   // Время жизни кэша (1 минута)

let cachedClientInfo = null;  // Переменная для хранения кэша
let cacheTimestamp = 0;       // Время последнего обновления кэша (в миллисекундах)
const CACHE_TTL = 60000;   

const getClientInfo = async (req, res) => {
    const MONOBANK_API_BASE = 'https://api.monobank.ua';
    const token = process.env.MONOBANK_TOKEN;
    
   

    try {
        const currentTime = Date.now();

        if (cachedClientInfo && (currentTime - cacheTimestamp < CACHE_TTL)) {
            console.log('Serving from cache');
        } else {
            console.log('Fetching from Monobank API');
            const response = await fetch(`${MONOBANK_API_BASE}/personal/client-info`, {
                method: 'GET',
                headers: {
                    'X-Token': token,
                },
            });

            if (!response.ok) {
                throw new Error(`API Error: ${response.statusText}`);
            }

            const data = await response.json(); // Получаем данные из API

            cachedClientInfo = {
                name: data.name,
                accounts: data.accounts.map(account => ({
                    accountId: account.id,
                    balance: account.balance / 100,
                    currency: account.currencyCode,
                    pan: account.maskedPan,
                })),
            };
            cacheTimestamp = currentTime; // Обновляем метку времени
        }

        if (req.path === '/balance') {
            const totalBalance = cachedClientInfo.accounts.reduce((sum, account) => sum + account.balance, 0);
            return res.status(200).json({ balance: totalBalance });
        }

        if(req.path === '/client_info'){
            return res.status(200).json({
                accounts: cachedClientInfo.accounts
            });
        }

        res.status(200).json({
            name: cachedClientInfo.name,
            accounts: cachedClientInfo.accounts,
        });
    } catch (error) {
        console.error(error.message); // Исправлено: message вместо massage
        res.status(500).json({ error: 'Error with Monobank API' });
    }
};

export {getClientInfo};
