import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import ContactForm_Routes from './routes/ContactForm_route.js'; // Corrected import statement

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.use("/api/contact", ContactForm_Routes);

// Basic route
app.get('/', (req, res) => {
  res.send('SPENDRO BACKEND API 55');
});

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is connected!' });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});