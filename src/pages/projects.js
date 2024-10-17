import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import image from '../../src/images/222.PNG';
import image2 from '../../src/images/shoestore.PNG';

const useStyles = styled((theme) => ({
  root: {
    backgroundColor: '#1b77bb',
    padding: theme.spacing(4),
    width: '100%',
  },
  card: {
    maxWidth: 450,
    height: 220, // Fixed height for the card
    margin: 'auto',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    backgroundColor: '#f5f5f5',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    backgroundSize: 'cover', // Set background size to cover the entire card
    backgroundPosition: 'center', // Center the background image
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    cursor: 'pointer', // Indicate that the card is clickable
    transition: 'transform 0.2s ease-in-out', // Add transition for hover effect
    '&:hover': {
      transform: 'scale(1.05)', // Scale up the card slightly on hover
    },
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: theme.spacing(3),
    color: '#FFFFFF',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  projectTitle: {
    marginBottom: theme.spacing(1),
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center', // Center align the project title
  },
  projectDescription: {
    color: '#1b77bb',
  },
  cardContent: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
}));

const Projects = () => {
  const classes = useStyles();

  const projects = [
    {
      title: 'Eventum',
      description: '',
      image: image,
      link: 'https://example.com/eventum', // Example link
    },
    {
      title: 'Shoe Store',
      description: '',
      image: image2,
      link: 'https://example.com/shoestore', // Example link
    },
    {
      title: 'Project 3',
      description: 'Description of project 3 goes here.',
      link: 'https://example.com/project3', // Example link
    },
    {
      title: 'Project 4',
      description: 'Description of project 4 goes here.',
      link: 'https://example.com/project4', // Example link
    },
  ];

  const handleCardClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom className={classes.title}>
        Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Typography variant="h5" component="h2" className={classes.projectTitle}>
              {project.title}
            </Typography>
            <Card
              className={classes.card}
              style={{ backgroundImage: `url(${project.image})` }}
              onClick={() => handleCardClick(project.link)}
            >
              <CardContent className={classes.cardContent}>
                <Typography variant="body2" component="p" className={classes.projectDescription}>
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid> 
    </div>
  );
};

export default Projects;
