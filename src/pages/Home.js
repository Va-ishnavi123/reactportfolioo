import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import projects from '../components/projects'; // Adjust path based on your file structure

const Home = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>Welcome to My Portfolio</Typography>
      <Typography variant="h5" gutterBottom>Projects</Typography>
      <Grid container spacing={4}>
        {projects.map(project => (
          <Grid item key={project.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt={project.title}
                height="140"
                image={project.imageUrl}
              />
              <CardContent>
                <Typography variant="h5" component="div">{project.title}</Typography>
                <Typography variant="body2" color="text.secondary">{project.description}</Typography>
              </CardContent>
              <Button size="small" component={Link} to={`/projects/${project.id}`}>Learn More</Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;


