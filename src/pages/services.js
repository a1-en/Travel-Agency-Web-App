import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Card, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#301934',
    padding: theme.spacing(8, 0), // Add padding top and bottom
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    height: '100%',
    transition: 'transform 0.3s ease-in-out', // Add transition effect
    '&:hover': {
      transform: 'scale(1.05)', // Scale up on hover
    },
  },
  icon: {
    fontSize: 64,
    color: '#301934',
  },
  title: {
    color: '#301934',
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
  },
  description: {
    color: '#333333',
  }, servicesHeading: {
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: theme.spacing(4), // Add bottom margin
  },
}));

const Services = () => {
  const classes = useStyles();

  const services = [
    {
      title: 'UI/UX Design',
      description: 'We craft intuitive and visually appealing user interfaces to enhance user experience.',
      icon: '🎨',
    },
    {
      title: 'Web Development',
      description: 'We develop high-quality websites with modern technologies and responsive designs.',
      icon: '🌐',
    },
    {
      title: 'Mobile App Development',
      description: 'We build native and cross-platform mobile applications tailored to your needs.',
      icon: '📱',
    },
  ];

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">   <Typography variant="h4" className={classes.servicesHeading} gutterBottom>
          Services
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography variant="h5" className={classes.title} gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" className={classes.description} gutterBottom>
                    {service.description}
                  </Typography>
                  <Typography variant="h3" align="center" className={classes.icon}>
                    {service.icon}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Services;
