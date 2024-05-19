import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Drawer, List, ListItem, ListItemText, Divider, useMediaQuery } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';

const Navbar = ({ onHeroClick, onProjectsClick, onExperienceClick, onSkillsClick, onServicesClick }) => {
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
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: '#301934' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ mr: 'auto' }}>
            <a href="/" style={{ textDecoration: 'none', color: 'inherit' }} onClick={onHeroClick}>
              Imran Abbasi <CodeIcon />
            </a>
          </Typography>
          {isSmallScreen ? (
            <Button onClick={toggleDrawer(true)}>
              Menu
            </Button>
          ) : (
            // Large Screen Toolbar with Buttons
<Toolbar sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Button color="inherit" sx={buttonStyle} onClick={onExperienceClick}>Experience</Button>
              <Button color="inherit" sx={buttonStyle} onClick={onSkillsClick}>Skills</Button>
              <Button color="inherit" sx={buttonStyle} onClick={onProjectsClick}>Projects</Button>
              <Button color="inherit" sx={buttonStyle} onClick={onHeroClick}>Home</Button>
              <Button color="inherit" sx={buttonStyle} onClick={onServicesClick}>Services</Button>
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
    textDecorationColor: '#6A0DAD',
    textDecorationThickness: '0.3em',
  },
};

export default Navbar;
