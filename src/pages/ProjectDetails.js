// // import React from 'react';
// // import { Container, Typography } from '@mui/material';
// // import projects from '../components/Projects'; // Adjust path based on your file structure

// // const ProjectDetails = ({ match }) => {
// //   const projectId = match.params.id;
// //   const project = projects.find(proj => proj.id === parseInt(projectId));

// //   if (!project) {
// //     return (
// //       <Container>
// //         <Typography variant="h3" gutterBottom>Project Not Found</Typography>
// //       </Container>
// //     );
// //   }

// //   return (
// //     <Container>
// //       <Typography variant="h3" gutterBottom>{project.title}</Typography>
// //       <Typography variant="body1">{project.description}</Typography>
// //       {/* Additional project details */}
// //     </Container>
// //   );
// // };

// // export default ProjectDetails;
// // import React from 'react';
// // import { useParams } from 'react-router-dom';
// // import { Container, Typography } from '@mui/material';

// // const projects = [
// //   {
// //     id: 1,
// //     title: 'Spotify Clone',
// //     description: 'A clone of the popular music streaming app. Built using React and Spotify API.',
// //     imageUrl: 'https://github.com/Va-ishnavi123/Spotify-Clone/raw/main/screenshot.png',
// //     link: 'https://vercel.com/vaishnavi-guptas-projects-1b4b635e/spotify-clone'
// //   },
// //   {
// //     id: 2,
// //     title: 'E-commerce Project',
// //     description: 'A fully functional e-commerce website. Built using React, Node.js, and MongoDB.',
// //     imageUrl: 'https://github.com/Va-ishnavi123/E-commerce-Project/raw/main/screenshot.png',
// //     link: 'https://github.com/Va-ishnavi123/E-commerce-Project'
// //   },
// //   // Add more projects as needed
// // ];

// // const ProjectDetails = () => {
// //   const { id } = useParams();
// //   const project = projects.find(p => p.id.toString() === id);

// //   if (!project) {
// //     return <Typography variant="h5">Project not found</Typography>;
// //   }

// //   return (
// //     <Container>
// //       <Typography variant="h3" gutterBottom>{project.title}</Typography>
// //       <img src={project.imageUrl} alt={project.title} style={{ maxWidth: '100%', height: 'auto' }} />
// //       <Typography variant="body1" paragraph>{project.description}</Typography>
// //       <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
// //     </Container>
// //   );
// // };

// // export default ProjectDetails;
// // import React from 'react';
// // import React from 'react';
// import { useParams } from 'react-router-dom';
// import { Container, Typography, Button, Card, CardContent, CardMedia, Grid } from '@mui/material';
//  import projects from '../components/Projects'; // Adjust path based on your file structure

// const ProjectDetails = () => {
//   const { id } = useParams();
//   const project = projects.find(p => p.id.toString() === id);

//   if (!project) {
//     return <Typography variant="h5">Project not found</Typography>;
//   }

//   return (
//     <Container>
//       <Typography variant="h3" gutterBottom>{project.title}</Typography>
//       <Grid container spacing={4}>
//         <Grid item xs={12} sm={6} md={4}>
//           <Card>
//             <CardMedia
//               component="img"
//               alt={project.title}
//               height="140"
//               image={project.imageUrl}
//             />
//             <CardContent>
//               <Typography variant="h5" component="div">{project.title}</Typography>
//               <Typography variant="body2" color="text.secondary">{project.description}</Typography>
//             </CardContent>
//             {project.link && (
//               <Button size="small" href={project.link} target="_blank" rel="noopener noreferrer">View Project</Button>
//             )}
//           </Card>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default ProjectDetails;
// import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Button, Card, CardContent, CardMedia, Grid } from '@mui/material';
import projects from '../components/projects'; // Adjust path based on your file structure

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id.toString() === id);

  if (!project) {
    return <Typography variant="h5">Project not found</Typography>;
  }

  return (
    <Container>
      <Typography variant="h3" gutterBottom>{project.title}</Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
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
            <Button size="small" href={project.link} target="_blank" rel="noopener noreferrer">
              {project.link ? 'View Deployment' : 'Learn More'}
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProjectDetails;
