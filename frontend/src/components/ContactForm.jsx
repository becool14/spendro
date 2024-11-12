import {useState} from 'react';
import { TextField, Button, Typography, Box, Grid } from '@mui/material';
import './ContactForm.css';

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
    e.preventDefault(); // Prevent the default form submission

    try {
      // Send a POST request to the backend server
      const response = await fetch('http://localhost:5000/api/backend/models/contactmessage.model', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Send the form data as JSON
      });
      
      // Check if the response is successful
      if (response.ok) {
        const data = await response.json(); // Parse the JSON response
        setResponseMessage(data.message); // Display success message
      } else {
        throw new Error('Failed to submit the form');
      }
    } catch (error) {
      // Handle errors
      setResponseMessage('There was an error submitting the form.');
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Box className="form-container">
      <Box className="form-box">
        <Typography variant="h4" className="form-title">
          Contact Us
        </Typography>
        <Typography variant="body1" className="form-subtitle">
            Fill out the form below and we'll get back to you as soon as possible.
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} mb={5}>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                variant="filled"
                className="form-field"
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                fullWidth
                label="E-mail"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                variant="filled"
                className="form-field"
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
              className="form-field"
            />
          </Box>
          <Button type="submit" className="submit-button" variant="contained">
            Submit
          </Button>
        </form>
        {responseMessage && (
          <Typography variant="body2" className="response-message">
            {responseMessage}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default ContactForm;
