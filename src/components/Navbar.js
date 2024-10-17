import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  useMediaQuery,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';  // Import the Menu icon

const Navbar = ({ onHeroClick, onProjectsClick, onExperienceClick, onSkillsClick, onServicesClick, onTestimonialClick, onFooterClick }) => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpenDrawer(open);
  };

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button onClick={onExperienceClick}>
          <ListItemText primary="Experience" />
        </ListItem>
        <ListItem button onClick={onSkillsClick}>
          <ListItemText primary="Skills" />
        </ListItem>
        <ListItem button onClick={onProjectsClick}>
          <ListItemText primary="Projects" />
        </ListItem>
        <ListItem button onClick={onHeroClick}>
          <ListItemText primary="Home" />
        </ListItem>  
        <ListItem button onClick={onServicesClick}>
          <ListItemText primary="Services" />
        </ListItem>
        <ListItem button onClick={onTestimonialClick}>
          <ListItemText primary="Testimonials" />
        </ListItem>   
        <ListItem button onClick={onFooterClick}>
          <ListItemText primary="RequestQuote" />
        </ListItem>     
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: '#1b77bb' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ mr: 'auto' }}>
            <a href="/" style={{ textDecoration: 'none', color: 'inherit' }} onClick={onHeroClick}>
              Travel n tour
            </a>
          </Typography>
          {isSmallScreen ? (
            <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon /> {/* Menu Icon */}
            </IconButton>
          ) : (
            <Toolbar sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Button color="inherit" sx={buttonStyle} onClick={onHeroClick}>Home</Button>
              <Button color="inherit" sx={buttonStyle} onClick={onServicesClick}>Services</Button>
              <Button color="inherit" sx={buttonStyle} onClick={onTestimonialClick}>Testimonials</Button>
              <Button color="inherit" sx={buttonStyle} onClick={onFooterClick}>Contact us</Button>
            </Toolbar>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={isSmallScreen && openDrawer}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </div>
  );
};

const buttonStyle = {
  '&:hover': {
    textDecoration: 'underline',
    textDecorationColor: '#black',
    textDecorationThickness: '0.3em',
  },
};

export default Navbar;
