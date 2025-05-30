import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { SectionId } from '../../types';
import MatrixRain from '../UI/MatrixRain';

const HeroSection: React.FC = () => {
  return (
    <section 
      id={SectionId.Home}
      className="min-h-screen relative flex items-center pt-16"
    >
      {/* Matrix Rain Background */}
      <MatrixRain />
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-neon-cyan mb-4 font-mono">Hello, my name is</p>
          </motion.div>
          
          <motion.h1 
            className="heading-xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Siddhardha Roy
          </motion.h1>
          
          <motion.div
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-semibold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <TypeAnimation
              sequence={[
                'Full-Stack Developer',
                1000,
                'Data Analytics Enthusiast',
                1000,
                'UI/UX Designer',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="gradient-text"
            />
          </motion.div>
          
          <motion.p
            className="text-gray-400 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            I build scalable web applications and insightful data-driven solutions. Currently a pre-final year Computer Science student with a passion for creating impactful digital experiences.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
          </motion.div>
          
          <motion.div
            className="flex items-center gap-5 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <a 
              href="https://github.com/siddhu9876" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-cyan transition-colors"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a 
              href="https://linkedin.com/in/siddhardha-roy" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-cyan transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a 
              href="mailto:mogilicharlasiddhardharoy@gmail.com" 
              className="text-gray-400 hover:text-neon-cyan transition-colors"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </motion.div>
        </div>
      </div>
      
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-neon-cyan transition-colors"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
        aria-label="Scroll down"
      >
        <ChevronDown size={24} />
      </motion.a>
    </section>
  );
};

export default HeroSection;