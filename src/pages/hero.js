import React from 'react';
import { Button, useMediaQuery, useTheme } from '@mui/material';
import imran from '../../src/images/imran.jpg';
import resume from '../../src/images/resume.pdf';

const HeroSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleResumeDownload = () => {
    window.open(resume);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: isSmallScreen ? 'column' : 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '50px'
    }}>
      <div style={{
        flex: 1,
        paddingRight: isSmallScreen ? '0' : '50px',
        paddingBottom: isSmallScreen ? '20px' : '0',
        textAlign: isSmallScreen ? 'center' : 'left'
      }}>
        <h1>Full Stack Developer</h1>
        <p>
          Passionate Full Stack Developer with a strong foundation in front-end technologies. Seeking
          opportunities to contribute my skills and creativity to dynamic projects, while continuously
          expanding my knowledge in Web development. Open to collaborative environments that foster
          learning and growth.
        </p>
        <Button variant="contained" color="primary" onClick={handleResumeDownload}>Resume</Button>
      </div>
      <div style={{
        flex: 1,
        textAlign: isSmallScreen ? 'center' : 'right'
      }}>
        <img src={imran} alt="Web Developer" style={{
          width: isSmallScreen ? '300px' : '400px',
          height: isSmallScreen ? '300px' : '400px',
          borderRadius: '50%'
        }} />
      </div>
    </div>
  );
};

export default HeroSection;
