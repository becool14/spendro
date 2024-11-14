// ContactForm_Controller.js
import {sendToTelegramBot } from './telegrambot_controller.js';

const submitContactForm = (req, res) => {
  const { name, email, message } = req.body;

  // Create the form data object
  const formData = { name, email, message };

  // Send data to Telegram bot
  sendToTelegramBot(formData);

  // Respond with a success message
  res.status(200).json({ message: 'Your message has been submitted successfully.' });
};

export { submitContactForm };
