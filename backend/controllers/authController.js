import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/User.js';

// Реєстрація користувача
export const registerUser = async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    // Перевірка, чи вже існує користувач
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Створення нового користувача
    const newUser = new User({
      fullName,
      email,
      password
    });

    // Збереження користувача в базі
    await newUser.save();

    // Генерація JWT токену
    const token = jwt.sign(
      { userId: newUser._id },  // Payload токену
      process.env.JWT_SECRET,   // Ваш секретний ключ
      { expiresIn: '1h' }       // Термін дії токену
    );

    // Надсилання токену на фронтенд
    res.status(201).json({
      message: 'User registered successfully',
      token,  // Токен
      user: {
        id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
