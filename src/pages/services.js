import React from 'react';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled components
const RootContainer = styled('div')(({ theme }) => ({
  backgroundColor: '#1b77bb',
  padding: theme.spacing(8, 0), // Add padding top and bottom
}));

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  borderRadius: 16,
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
  height: '100%',
  transition: 'transform 0.3s ease-in-out', // Add transition effect
  '&:hover': {
    transform: 'scale(1.05)', // Scale up on hover
  },
}));

const TitleTypography = styled(Typography)(({ theme }) => ({
  color: '#1b77bb',
  fontWeight: 'bold',
  marginBottom: theme.spacing(2),
}));

const DescriptionTypography = styled(Typography)(({ theme }) => ({
  color: '#333333',
}));

const ServicesHeading = styled(Typography)(({ theme }) => ({
  color: '#FFFFFF',
  textAlign: 'center',
  marginBottom: theme.spacing(4), // Add bottom margin
}));

const IconTypography = styled(Typography)(({ theme }) => ({
  fontSize: 64,
  color: '#1b77bb',
}));

const Services = () => {
  const services = [
    {
      title: 'Airline Tickets',
      description: 'We provide affordable airline tickets to various destinations around the globe.',
      icon: '✈️',
    },
    {
      title: 'Umrah Packages',
      description: 'We offer comprehensive Umrah packages to ensure a comfortable pilgrimage experience.',
      icon: '🕋',
    },
    {
      title: 'Tour and Holidays',
      description: 'We plan and organize memorable tours and holiday packages for you and your family.',
      icon: '🌴',
    },
    {
      title: 'Visa Services',
      description: 'We assist with visa applications and ensure a smooth and hassle-free process.',
      icon: '🛂',
    },
    {
      title: 'Hotel Reservation',
      description: 'We offer hotel reservation services to ensure comfortable and affordable stays.',
      icon: '🏨',
    },
    {
      title: 'Transport Services',
      description: 'We provide reliable and efficient transport services to meet your travel needs.',
      icon: '🚗',
    },
  ];

  return (
    <RootContainer>
      <Container maxWidth="lg">
        <ServicesHeading variant="h4" gutterBottom>
          Services
        </ServicesHeading>
        <Grid container spacing={4} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <StyledCard>
                <CardContent>
                  <TitleTypography variant="h5" gutterBottom>
                    {service.title}
                  </TitleTypography>
                  <DescriptionTypography variant="body1" gutterBottom>
                    {service.description}
                  </DescriptionTypography>
                  <IconTypography align="center">
                    {service.icon}
                  </IconTypography>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </RootContainer>
  );
};

export default Services;
