import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, TextField, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#1b77bb', // Blue background
    minHeight: '100vh', // Ensure the background covers the full height
    display: 'flex',
    alignItems: 'center', // Center vertically
    justifyContent: 'center', // Center horizontally
    padding: theme.spacing(2),
  },
  formContainer: {
    backgroundColor: '#FFFFFF', // White form background
    padding: theme.spacing(4),
    borderRadius: 16,
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    width: '100%', // Make it responsive
    maxWidth: 500, // Set a max width for the form
  },
  title: {
    color: '#1b77bb',
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
    textAlign: 'center',
  },
  field: {
    marginBottom: theme.spacing(2),
  },
  submitButton: {
    backgroundColor: '#1b77bb',
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#155a8a',
    },
  },
  result: {
    textAlign: 'center',
    marginTop: theme.spacing(2),
  },
}));

const RequestQuote = () => {
  const classes = useStyles();
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Append your access key
    formData.append("access_key", "a8425f3d-bc4d-4006-b63b-f8f57c9bbd20");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset(); // Reset form fields
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setResult("An error occurred. Please try again.");
    }
  };

  return (
    <div className={classes.root}>
      <Container className={classes.formContainer}>
        <Typography variant="h4" className={classes.title}>
          Contact Us
        </Typography>
        <form onSubmit={onSubmit}>
          <TextField
            name="name"
            className={classes.field}
            fullWidth
            label="Name"
            required
          />
          <TextField
            name="email"
            className={classes.field}
            fullWidth
            label="Email"
            type="email"
            required
          />
          <TextField
            name="number"
            className={classes.field}
            fullWidth
            label="Phone Number"
            required
          />
          <TextField
            name="message"
            className={classes.field}
            fullWidth
            label="Message"
            multiline
            rows={4}
            required
          />
          <Button type="submit" variant="contained" className={classes.submitButton}>
            Submit
          </Button>
        </form>
        {result && <Typography className={classes.result}>{result}</Typography>}
      </Container>
    </div>
  );
};

export default RequestQuote;
