import React from 'react';
import { Typography, Link, Divider, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#1b77bb',
    color: '#FFFFFF',
    padding: theme.spacing(4),
    textAlign: 'center',
  },
  divider: {
    backgroundColor: '#FFFFFF',
    margin: '20px auto',
    width: '100%',
  },
  icon: {
    marginRight: theme.spacing(1),
    verticalAlign: 'middle',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column', // Align items in column layout
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      
      <Divider className={classes.divider} />
      <Grid container spacing={3} justifyContent="center">
        {/* Phone */}
        <Grid item xs={6} sm={2} className={classes.contactItem}>
          <PhoneIcon className={classes.icon} />
          <Typography variant="body1">
            +923320002230
          </Typography>
        </Grid>
        {/* Facebook */}
        
        {/* Email */}
        <Grid item xs={6} sm={2} className={classes.contactItem}>
          <EmailIcon className={classes.icon} />
          <Typography variant="body1">
            <Link href="mailto:info@sfalitravels.com" color="inherit">info@sfalitravels.com</Link>
          </Typography>
        </Grid><Grid item xs={6} sm={2} className={classes.contactItem}>
          <FacebookIcon className={classes.icon} />
          <Typography variant="body1">
            <Link href="https://www.facebook.com/profile.php?id=100086504282600&mibextid=kFxxJD" target="_blank" rel="noopener noreferrer" color="inherit">Facebook</Link>
          </Typography>
        </Grid>
        {/* Instagram */}
        <Grid item xs={6} sm={2} className={classes.contactItem}>
          <InstagramIcon className={classes.icon} />
          <Typography variant="body1">
            <Link href="https://www.instagram.com/sfalitravelservices?igsh=d3dxNWtlMTB0N3hj&utm_source=qr" target="_blank" rel="noopener noreferrer" color="inherit">Instagram</Link>
          </Typography>
        </Grid>
        {/* LinkedIn */}
        <Grid item xs={6} sm={2} className={classes.contactItem}>
          <LinkedInIcon className={classes.icon} />
          <Typography variant="body1">
            <Link href="https://www.linkedin.com/company/sf-ali-travel-services/" target="_blank" rel="noopener noreferrer" color="inherit">LinkedIn</Link>
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
