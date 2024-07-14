import React from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';

const Contact = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>Contact Me</Typography>
      
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" gutterBottom>Contact Information</Typography>
          <Typography variant="body1">You can reach me at: vaishnavi@example.com</Typography>
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" gutterBottom>Contact Form</Typography>
          <form noValidate autoComplete="off">
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
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
