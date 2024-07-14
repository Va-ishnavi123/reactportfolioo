import React from 'react';
import { Container, Typography } from '@mui/material';

const About = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>About Me</Typography>
      <Typography variant="body1" paragraph>
        Hi, I'm Vaishnavi Gupta, a passionate web developer with a strong foundation in computer science and extensive hands-on experience in web development.
      </Typography>
      <Typography variant="body1" paragraph>
        I am currently pursuing a Bachelor's degree in Computer Science and Engineering at the Institute of Engineering and Technology, Devi Ahilya Vishwavidyalaya. I have developed various projects, including a Spotify Clone and an E-commerce website.
      </Typography>
      <Typography variant="body1" paragraph>
        My skills include React, JavaScript, HTML, CSS, and more. I am a proactive learner and an effective communicator, ready to contribute to your innovative projects.
      </Typography>
    </Container>
  );
};

export default About;
