import React, { useEffect } from 'react';
import Layout from './components/Layout/Layout';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import TimelineSection from './components/sections/TimelineSection';
import ContactSection from './components/sections/ContactSection';
import ScrollToTop from './components/UI/ScrollToTop';

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'Siddhardha Roy | Developer Portfolio';
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Siddhardha Roy Mogilicharla - Full-Stack Developer & Data Analytics Enthusiast'
      );
    }
  }, []);

  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <TimelineSection />
      <ProjectsSection />
      <ContactSection />
      <ScrollToTop />
    </Layout>
  );
}

export default App;