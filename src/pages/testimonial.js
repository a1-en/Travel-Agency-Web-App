import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#f5f5f5',
    padding: theme.spacing(8, 0),
  },
  reviewsContainer: {
    marginTop: theme.spacing(4),
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  reviewCard: {
    width: '300px', // Set a fixed width for each review card
    height: '250px', // Set a fixed height for each review card
    margin: '10px', // Spacing between cards
    backgroundColor: '#FFFFFF', // Background color for reviews
    borderRadius: '16px', // Rounded corners
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', // Shadow for depth
    overflow: 'hidden', // Ensure content stays within bounds
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
  },
}));

const Testimonials = () => {
  const classes = useStyles();

  useEffect(() => {
    // Load the SociableKit Google Reviews widget script
    const script = document.createElement('script');
    script.src = 'https://widgets.sociablekit.com/google-reviews/widget.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom>
          Testimonials
        </Typography>
        <div className={classes.reviewsContainer}>
          {/* Embed Google Reviews using SociableKIT */}
          <div className='sk-ww-google-reviews' data-embed-id='25472118'></div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
