import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    // Example: You can log the form data or send it to a backend server
    console.log('Form submitted!');
  };

  return (
    <Container>
      <Typography variant="h3" gutterBottom>Contact Me</Typography>
      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          type="email"
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="message"
          label="Message"
          name="message"
          multiline
          rows={4}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: '1em' }}
        >
          Send
        </Button>
      </form>
    </Container>
  );
};

export default Contact;
