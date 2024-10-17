import React from 'react';
import { Typography, Link, Divider, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

// Styled components
const FooterContainer = styled('footer')(({ theme }) => ({
  backgroundColor: '#1b77bb',
  color: '#FFFFFF',
  padding: theme.spacing(4),
  textAlign: 'center',
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  margin: '20px auto',
  width: '100%',
}));

const Icon = styled('span')(({ theme }) => ({
  marginRight: theme.spacing(1),
  verticalAlign: 'middle',
}));

const ContactItem = styled(Grid)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column', // Align items in column layout
}));

const Footer = () => {
  return (
    <FooterContainer>
      <StyledDivider />
      <Grid container spacing={3} justifyContent="center">
        {/* Phone */}
        <ContactItem item xs={6} sm={2}>
          <PhoneIcon />
          <Typography variant="body1">+1234567890</Typography> {/* Dummy Phone Number */}
        </ContactItem>
        
        {/* Email */}
        <ContactItem item xs={6} sm={2}>
          <EmailIcon />
          <Typography variant="body1">
            <Link href="mailto:dummyemail@example.com" color="inherit">dummyemail@example.com</Link> {/* Dummy Email */}
          </Typography>
        </ContactItem>

        {/* Facebook */}
        <ContactItem item xs={6} sm={2}>
          <FacebookIcon />
          <Typography variant="body1">
            <Link href="#" target="_blank" rel="noopener noreferrer" color="inherit">Facebook</Link> {/* Dummy Facebook Link */}
          </Typography>
        </ContactItem>
        
        {/* Instagram */}
        <ContactItem item xs={6} sm={2}>
          <InstagramIcon />
          <Typography variant="body1">
            <Link href="#" target="_blank" rel="noopener noreferrer" color="inherit">Instagram</Link> {/* Dummy Instagram Link */}
          </Typography>
        </ContactItem>
        
        {/* LinkedIn */}
        <ContactItem item xs={6} sm={2}>
          <LinkedInIcon />
          <Typography variant="body1">
            <Link href="#" target="_blank" rel="noopener noreferrer" color="inherit">LinkedIn</Link> {/* Dummy LinkedIn Link */}
          </Typography>
        </ContactItem>
      </Grid>
    </FooterContainer>
  );
};

export default Footer;
