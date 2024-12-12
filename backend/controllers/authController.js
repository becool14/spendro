import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import User from '../models/User.js';
import nodemailer from 'nodemailer';

export const registerUser = async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    if (!fullName || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const verificationCode = crypto.randomInt(100000, 999999).toString();
    const verificationExpires = Date.now() + 10 * 60 * 1000; // 10 хвилин

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
      verificationCode,
      verificationExpires
    });

    await newUser.save();

    // Надсилання коду
    await sendVerificationEmail(email, verificationCode);

    res.status(201).json({
      message: 'User registered successfully. Verification code sent to email.',
      userId: newUser._id // Повертаємо ID користувача для подальшої верифікації
    });
  } catch (error) {
    console.error('Error during user registration:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '18h' }
    );

    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email
      }
    });
  } catch (error) {
    console.error('Error during user login:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
export const verifyEmail = async (req, res) => {
  const { userId, code } = req.body;

  try {
    if (!userId || !code) {
      return res.status(400).json({ message: 'User ID and code are required' });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (user.verificationCode === code && user.verificationExpires > Date.now()) {
      // Верифікація успішна
      user.isVerified = true;
      user.verificationCode = null;
      user.verificationExpires = null;

      await user.save();

      // Створення JWT токена
      const token = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET,
        { expiresIn: '18h' } // Термін дії токена
      );

      res.status(200).json({
        message: 'Email verified successfully',
        token,
        user: {
          id: user._id,
          fullName: user.fullName,
          email: user.email,
        },
      });
    } else {
      res.status(400).json({ message: 'Invalid or expired verification code' });
    }
  } catch (error) {
    console.error('Error during email verification:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS  
  }
});

export const sendVerificationEmail = async (email, code) => {
  const mailOptions = {
    from: process.env.EMAIL_USER, 
    to: email, 
    subject: 'Email Verification', 
    text: `Your verification code is: ${code}` 
  };

  await transporter.sendMail(mailOptions);
};

