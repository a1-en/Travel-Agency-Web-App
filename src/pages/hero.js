import React from 'react';
import { Button, useMediaQuery, useTheme } from '@mui/material';
import imran from '../../src/images/imran.jpg';
import resume from '../../src/images/resume.pdf';
import whatsapp from '../../src/images/123.png'; // Import the WhatsApp logo
import './HeroSection.css'; // Import the CSS file

const HeroSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleResumeDownload = () => {
    window.open(resume);
  };

  const handleWhatsAppContact = () => {
    // Constructing the WhatsApp API link
    const phoneNumber = '+32012112412';
    const message = encodeURIComponent(' I am interested in your services.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    // Opening the WhatsApp chat window
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div style={{ 
      position: 'relative', 
      padding: '50px',
      backgroundImage: 'url("https://example.com/path-to-your-background-image.jpg")', // Replace with your background image URL
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      {/* WhatsApp Logo and Number */}
      <a 
        href="https://wa.me/+9254244" 
        target="_blank" 
        rel="noopener noreferrer"
        className="whatsapp-logo"
      >
        <img src={whatsapp} alt="WhatsApp" style={{ width: '48px', height: '48px', marginRight: '10px' }} /> {/* Made larger */}
      </a>

      <div style={{
        display: 'flex',
        flexDirection: isSmallScreen ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <div style={{
          flex: 1,
          paddingRight: isSmallScreen ? '0' : '50px',
          paddingBottom: isSmallScreen ? '20px' : '0',
          textAlign: isSmallScreen ? 'center' : 'left'
        }}>
          <div style={{ padding: '50px', textAlign: 'center', animation: 'fadeIn 1s ease-in' }}>
            <h1>Welcome to Travel n Tour</h1>
            <p>
            Embark on unforgettable journeys with us! Whether you're dreaming of exploring the picturesque landscapes of our Northern Pakistan, experiencing the vibrant cultures of international countries, or fulfilling your spiritual aspirations with our personalized Umrah and Hajj packages, we've got you covered. Join us on this adventure as we curate tailor-made travel experiences, designed to create lasting memories and enrich your life. Subscribe now to stay updated on our latest travel offerings, insider tips, and exclusive deals. Let's make your travel dreams a reality!            </p>
          
          </div>
        </div>
        <div style={{
          flex: 1,
          textAlign: isSmallScreen ? 'center' : 'right'
        }}>
          {/* Replace with your live Umrah video */}
          <iframe 
            title="Live Umrah Video"
            width={isSmallScreen ? '300' : '600'}
            height={isSmallScreen ? '200' : '300'}
            src="https://www.youtube.com/embed/_vFA07M0rw4?modestbranding=1&rel=0&controls=0&showinfo=0"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
