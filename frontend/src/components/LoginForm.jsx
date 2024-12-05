import { Box, TextField, Button, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import styles from './LoginForm.module.css';

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

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

    try {
      const response = await fetch('http://localhost:5001/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token); 
        navigate('/main'); 
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again later.');
      console.error('Login error:', error);
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
          Log in
        </Typography>
        <form onSubmit={handleSubmit}>
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
            value={formData.password}
            onChange={handleChange}
            required
            variant="outlined"
            fullWidth
            sx={{ marginBottom: '1.5rem' }}
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
          <Button
            type="submit"
            sx={{ padding: '0.75rem', marginBottom: '1rem' }}
            className={styles.submit_button}
            variant="contained"
            fullWidth
          >
            Log in
          </Button>
        </form>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: 2,
          }}
        >
          <Typography>Don't you have an account?</Typography>
          <Link to="/signup">
            <Typography className={styles.signup_link}>Sign up</Typography>
          </Link>
        </Box>
      </Box>
    </div>
  );
}

export default LoginForm;
