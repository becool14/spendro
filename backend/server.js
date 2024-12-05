import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import ContactForm_Routes from './routes/ContactForm_route.js'; // Corrected import statement
import MonoBankAPI_route from './routes/MonobankAPI_route.js';
import ContactForm_Routes from './routes/ContactForm_route.js';
import authRoutes from './routes/User_Route.js'; // Імпорт маршруту для користувачів
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;
const mongoURI = process.env.MONGO_URI || 'mongodb://mongo:27017/spendro';

mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

app.use(cors());
app.use(express.json());

// Підключення маршрутів
app.use("/api/contact", ContactForm_Routes);
app.use("/api/Client", MonoBankAPI_route);
app.use('/api/auth', authRoutes);

// Basic route
app.get('/', (req, res) => {
  res.send('SPENDRO BACKEND API');
});

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is connected!' });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
