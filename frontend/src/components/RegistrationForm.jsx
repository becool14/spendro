import { Box, TextField, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

import styles from './LoginForm.module.css';

function RegistrationForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [verificationCode, setVerificationCode] = useState('');
  const [userId, setUserId] = useState(null);
  const [isVerificationStep, setIsVerificationStep] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (isVerificationStep) {
      setVerificationCode(value); 
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (!isVerificationStep) {
      if (formData.password !== formData.confirmPassword) {
        setErrorMessage('Passwords do not match');
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        setErrorMessage('Invalid email address');
        return;
      }

      try {
        const response = await fetch('http://localhost:5001/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fullName: formData.name,
            email: formData.email,
            password: formData.password,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          setSuccessMessage('Registration successful! Enter the verification code sent to your email.');
          setUserId(data.userId); 
          setIsVerificationStep(true); 
        } else {
          const errorData = await response.json();
          setErrorMessage(errorData.message || 'Registration failed');
        }
      } catch (error) {
        setErrorMessage('An error occurred. Please try again later.');
        console.error(error);
      }
    } else {
      try {
        const response = await fetch('http://localhost:5001/api/auth/verify-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            userId,
            code: verificationCode,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          localStorage.setItem('token', data.token);
          setSuccessMessage('Email verified successfully! Redirecting to main page...');
          setTimeout(() => navigate('/main'), 2000);
        } else {
          const errorData = await response.json();
          setErrorMessage(errorData.message || 'Verification failed');
        }
      } catch (error) {
        setErrorMessage('An error occurred during verification. Please try again later.');
        console.error(error);
      }
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
          {isVerificationStep ? 'Verify Email' : 'Sign up'}
        </Typography>
        <form onSubmit={handleSubmit}>
          {!isVerificationStep ? (
            <>
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
            </>
          ) : (
            <TextField
              color="purple"
              label="Verification Code"
              name="verificationCode"
              value={verificationCode}
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
          )}
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
            {isVerificationStep ? 'Verify Code' : 'Sign up'}
          </Button>
        </form>
        {!isVerificationStep && (
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
        )}
      </Box>
    </div>
  );
}

export default RegistrationForm;
