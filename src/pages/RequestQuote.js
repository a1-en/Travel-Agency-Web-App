import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled Container for the entire form
const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: '#FFFFFF', // White form background
  padding: theme.spacing(4),
  borderRadius: 16,
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
  width: '70%', // Make it responsive
  maxWidth: 500, // Set a max width for the form
}));

// Styles for the title
const TitleTypography = styled(Typography)(({ theme }) => ({
  color: '#1b77bb',
  fontWeight: 'bold',
  marginBottom: theme.spacing(2),
  textAlign: 'center',
}));

// Styles for the submit button
const SubmitButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#1b77bb',
  color: '#FFFFFF',
  '&:hover': {
    backgroundColor: '#155a8a',
  },
}));

const RequestQuote = () => {
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
    <StyledContainer>
      <TitleTypography variant="h4">
        Contact Us
      </TitleTypography>
      <form onSubmit={onSubmit}>
        <TextField
          name="name"
          fullWidth
          label="Name"
          required
          sx={{ mb: 2 }} // Use the sx prop for margin bottom
        />
        <TextField
          name="email"
          fullWidth
          label="Email"
          type="email"
          required
          sx={{ mb: 2 }} // Use the sx prop for margin bottom
        />
        <TextField
          name="number"
          fullWidth
          label="Phone Number"
          required
          sx={{ mb: 2 }} // Use the sx prop for margin bottom
        />
        <TextField
          name="message"
          fullWidth
          label="Message"
          multiline
          rows={4}
          required
          sx={{ mb: 2 }} // Use the sx prop for margin bottom
        />
        <SubmitButton type="submit" variant="contained" fullWidth>
          Submit
        </SubmitButton>
      </form>
      {result && <Typography textAlign="center" sx={{ mt: 2 }}>{result}</Typography>}
    </StyledContainer>
  );
};

export default RequestQuote;
