import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

const sendToTelegramBot = async (formData) => {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = "-" + process.env.TELEGRAM_CHAT_ID;
  const message = `New Contact Form Submission:\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error sending message to Telegram: ${response.statusText} - ${errorData.description}`);
    }
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
  }
};

export { sendToTelegramBot };