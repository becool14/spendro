import { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5001/api/contact/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setResponseMessage(data.message);
    } catch (error) {
      console.error('Error submitting form:', error);
      setResponseMessage('There was an error submitting the form.');
    }
  };

  return (
    <Box className={styles.form_container}>
      <Box className={styles.form_box}>
        <Typography variant="h4" className={styles.form_title}>
          Contact Us
        </Typography>
        <Typography variant="body1" className={styles.form_subtitle}>
          Fill out the form below and we&apos;ll get back to you as soon as possible.
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} mb={5}>
            <Grid size={4}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                variant="outlined"
                className={styles.form_field}
              />
            </Grid>
            <Grid size={8}>
              <TextField
                fullWidth
                label="E-mail"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                variant="outlined"
                className={styles.form_field}
              />
            </Grid>
          </Grid>
          <Box mb={5}>
            <TextField
              fullWidth
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              variant="outlined"
              multiline
              rows={6}
              className={styles.form_field}
            />
          </Box>
          <Button type="submit" className={styles.submit_button} variant="contained">
            Submit
          </Button>
        </form>
        {responseMessage && (
          <Typography variant="body2" className={styles.response_message}>
            {responseMessage}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default ContactForm;
