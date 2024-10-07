// App.js
import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Experience from './pages/experience';
import HeroSection from './pages/hero';
import Footer from './pages/footer'; import Testimonials from './pages/testimonial';
import Services from './pages/services'; import RequestQuote from './pages/RequestQuote';
function App() {
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
   const servicesRef = useRef(null);   const testimonialRef = useRef(null);
   const Footerref = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div> 
      <Navbar
        onHeroClick={() => scrollToSection(heroRef)}
        onProjectsClick={() => scrollToSection(projectsRef)}
        onExperienceClick={() => scrollToSection(experienceRef)}
        onSkillsClick={() => scrollToSection(skillsRef)}  
        onServicesClick= {() => scrollToSection(servicesRef) }         onTestimonialClick= {() => scrollToSection(testimonialRef) } 
        onFooterClick= {() => scrollToSection(Footerref) }  
      />
      <div ref={heroRef}><HeroSection /></div>
      <div ref={servicesRef}><Services /></div>  
      <div ref={testimonialRef}><Testimonials /></div><div  ref={Footerref}> <RequestQuote /> </div> 
      <div ref={Footerref}><Footer /></div> 

    </div>
  );
}

export default App;
