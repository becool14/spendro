import { Box, TextField, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import styles from './LoginForm.module.css';

function LoginForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <Box className={styles.right_content}>
        <Link to="/">
          <ArrowBackIcon sx={{ color: '#301269', fontSize: 35 }} />
        </Link>
        <Typography sx={{ color: 'black', textAlign: 'left', fontSize: 30, fontWeight: 'bold', marginTop: 2, marginBottom: 2}}>
          Log in
        </Typography>
        <TextField
          color="purple"
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          variant="outlined"
          sx={{marginBottom: '1.5rem' , 
          }} // додав відступ після поля
          fullWidth
          className={styles.form_field}
          InputLabelProps={{
            style: { color: 'black'},
          }}
        />
        

        <TextField
          label="Password"
          name="password"
          sx={{ marginBottom: '1.5rem' }} // додав відступ після поля
          value={formData.message}
          onChange={handleChange}
          required
          variant="outlined"
          fullWidth
          className={styles.form_field}
          InputLabelProps={{
            style: { color: 'black' },
          }}
        />
        <Button type="submit"  sx={{ padding: '0.75rem', marginBottom: '1rem' }} className={styles.submit_button} variant="contained" fullWidth>
          Log in
        </Button>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
          <Typography>Don't you have an account?</Typography>
          <Link to="/">
            <Typography className={styles.signup_link}>Sign up</Typography>
          </Link>
        </Box>
      </Box>
    </div>
  );
}

export default LoginForm;
