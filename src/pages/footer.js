import React from 'react';
import { Typography, Link, Divider, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#301934',
    color: '#FFFFFF',
    padding: theme.spacing(4),
    textAlign: 'center',
  },
  divider: {
    backgroundColor: '#FFFFFF',
    margin: '20px auto',
    width: '80%',
  },
  icon: {
    marginRight: theme.spacing(1),
    verticalAlign: 'middle',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="h6" gutterBottom>
        Contact
      </Typography>
      <Divider className={classes.divider} />
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={4} className={classes.contactItem}>
          <PhoneIcon className={classes.icon} />
          <Typography variant="body1">
            +923343788557
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} className={classes.contactItem}>
          <EmailIcon className={classes.icon} />
          <Typography variant="body1">
            <Link href="mailto:techalone2@gmail.com" color="inherit">techalone2@gmail.com</Link>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} className={classes.contactItem}>
          <LinkedInIcon className={classes.icon} />
          <Typography variant="body1">
            <Link href="https://www.linkedin.com/in/imran-abbasi-30bb7b198" target="_blank" rel="noopener noreferrer" color="inherit">Imran Abbasi</Link>
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
