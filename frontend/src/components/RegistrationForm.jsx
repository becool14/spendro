import { Box, TextField, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

import styles from './LoginForm.module.css';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');
  
    // Перевірка збігу паролів
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }
  
    // Перевірка формату email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage('Invalid email address');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:5001/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
        setSuccessMessage('Registration successful!');
        localStorage.setItem('token', data.token); // Збереження токена
        console.log('JWT Token:', data.token);
        setSuccessMessage('Registration successful!');
        setTimeout(() => useNavigate('/Dashboard'), 2000); // Використовуйте useNavigate
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Registration failed');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again later.');
      console.error(error);
    }
  };
  

  return (
    <div>
      <Box className={styles.right_content}>
        <Link to="/">
          <ArrowBackIcon sx={{ color: '#301269', fontSize: 35 }} />
        </Link>
        <Typography
          sx={{
            color: 'black',
            textAlign: 'left',
            fontSize: 30,
            fontWeight: 'bold',
            marginTop: 2,
            marginBottom: 2,
          }}
        >
          Sign up
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            color="purple"
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            variant="outlined"
            sx={{ marginBottom: '1.5rem' }}
            fullWidth
            className={styles.form_field}
            InputLabelProps={{
              style: { color: 'black' },
            }}
          />
          <TextField
            color="purple"
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            variant="outlined"
            sx={{ marginBottom: '1.5rem' }}
            fullWidth
            className={styles.form_field}
            InputLabelProps={{
              style: { color: 'black' },
            }}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            sx={{ marginBottom: '1.5rem' }}
            value={formData.password}
            onChange={handleChange}
            required
            variant="outlined"
            fullWidth
            className={styles.form_field}
            InputLabelProps={{
              style: { color: 'black' },
            }}
          />
          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            sx={{ marginBottom: '1.5rem' }}
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            variant="outlined"
            fullWidth
            className={styles.form_field}
            InputLabelProps={{
              style: { color: 'black' },
            }}
          />
          {errorMessage && (
            <Typography color="error" sx={{ marginBottom: '1rem' }}>
              {errorMessage}
            </Typography>
          )}
          {successMessage && (
            <Typography color="primary" sx={{ marginBottom: '1rem' }}>
              {successMessage}
            </Typography>
          )}
          <Button
            type="submit"
            sx={{ padding: '0.75rem', marginBottom: '1rem' }}
            className={styles.submit_button}
            variant="contained"
            fullWidth
          >
            Sign up
          </Button>
        </form>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: 2,
          }}
        >
          <Typography>Already have an account?</Typography>
          <Link to="/login">
            <Typography className={styles.signup_link}>Log in</Typography>
          </Link>
        </Box>
      </Box>
    </div>
  );
}

export default RegistrationForm;
