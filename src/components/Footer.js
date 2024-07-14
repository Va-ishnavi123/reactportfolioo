import React from 'react';
import { Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ padding: '1em 0', backgroundColor: '#f5f5f5', marginTop: 'auto' }}>
      <Container maxWidth="sm">
        <Typography variant="body1">© 2024 Vaishnavi Gupta</Typography>
      </Container>
    </footer>
  );
};

export default Footer;
