import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled components
const Root = styled('div')(({ theme }) => ({
  backgroundColor: '#f5f5f5',
  padding: theme.spacing(8, 0),
}));

const ReviewsContainer = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(4),
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
}));

const ReviewCard = styled('div')(({ theme }) => ({
  width: '300px', // Fixed width for each review card
  height: '250px', // Fixed height for each review card
  margin: '10px', // Spacing between cards
  backgroundColor: '#FFFFFF', // Background color for reviews
  borderRadius: '16px', // Rounded corners
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', // Shadow for depth
  overflow: 'hidden', // Ensure content stays within bounds
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: theme.spacing(2),
  transition: 'transform 0.3s ease', // Smooth scaling transition
  '&:hover': {
    transform: 'scale(1.05)', // Scale effect on hover
  },
}));

const ReviewerName = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  color: '#1b77bb', // Brand color for reviewer names
}));

const ReviewText = styled(Typography)(({ theme }) => ({
  color: '#333333',
  marginTop: theme.spacing(1),
  textAlign: 'justify', // Align text for better readability
}));

const Testimonials = () => {
  // Dummy testimonials data
  const testimonials = [
    {
      id: 1,
      name: 'Alice Johnson',
      review: 'Great service! I had an amazing experience traveling with them. Highly recommend!',
    },
    {
      id: 2,
      name: 'Bob Smith',
      review: 'Fantastic support and very helpful staff. I will definitely use their services again!',
    },
    {
      id: 3,
      name: 'Charlie Brown',
      review: 'The trip was well organized, and everything went smoothly. I loved every moment of it!',
    },
    {
      id: 4,
      name: 'Diana Prince',
      review: 'Excellent travel packages at great prices. I couldn’t ask for more!',
    },
    {
      id: 5,
      name: 'Ethan Hunt',
      review: 'A wonderful experience from start to finish. I will recommend to my friends!',
    },
  ];

  return (
    <Root>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom>
          Testimonials
        </Typography>
        <ReviewsContainer>
          <Grid container spacing={2} justifyContent="center">
            {testimonials.map((testimonial) => (
              <Grid item key={testimonial.id}>
                <ReviewCard>
                  <ReviewerName variant="h6">{testimonial.name}</ReviewerName>
                  <ReviewText variant="body2">
                    {testimonial.review}
                  </ReviewText>
                </ReviewCard>
              </Grid>
            ))}
          </Grid>
        </ReviewsContainer>
      </Container>
    </Root>
  );
};

export default Testimonials;
