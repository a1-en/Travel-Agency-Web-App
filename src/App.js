// App.js
import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Skills from './pages/skills';
import Experience from './pages/experience';
import Projects from './pages/projects';
import HeroSection from './pages/hero';
import Footer from './pages/footer';
import Services from './pages/services';
function App() {
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
   const servicesRef = useRef(null);
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
        onServicesClick= {() => scrollToSection(servicesRef) } 
      />
      <div ref={heroRef}><HeroSection /></div>
      <div ref={projectsRef}><Projects /></div>
      <div ref={experienceRef}><Experience /></div>
      <div ref={skillsRef}><Skills /></div>
      <div ref={servicesRef}><Services /></div>

      <Footer />
    </div>
  );
}

export default App;
