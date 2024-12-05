import get from 'node-fetch'
import dotenv from 'dotenv';
dotenv.config();


const getClientInfo = async (req, res) => {
    const MONOBANK_API_BASE = 'https://api.monobank.ua';
    const token = process.env.MONOBANK_TOKEN
    try{
        const response = await fetch(`${MONOBANK_API_BASE}/personal/client-info`, {
            method: 'GET',
            headers: {
                'X-Token': token,
            },
        });

        if (!response.ok) {
            throw new Error(`Api Error: ${response.statusText}`);
        }

       const clientInfo = await response.json();

       res.status(200).json(clientInfo)
    }

    catch (error) {
        console.error(error.massage);
        res.status(500).json({ error: 'Error with monobank API'})
    }

}

export { getClientInfo };