import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Calendar, GraduationCap } from 'lucide-react';
import { SectionId } from '../../types';
import SectionHeading from '../UI/SectionHeading';

const AboutSection: React.FC = () => {
  return (
    <section 
      id={SectionId.About}
      className="section-padding bg-dark-400 relative"
    >
      {/* Background effect */}
      <div className="absolute top-0 right-0 w-1/3 h-full">
        <div className="absolute inset-0 bg-gradient-to-l from-primary-900/20 to-transparent" />
      </div>
      
      <div className="container-custom relative z-10">
        <SectionHeading 
          title="About Me"
          subtitle="Learn a bit more about my background, education and interests."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            className="overflow-hidden rounded-xl relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-square lg:aspect-auto lg:h-[480px] w-full relative">
              <img
                src="src/components/myphoto1.jpg"
                alt="Siddhardha Roy Mogilicharla"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay with geometric pattern */}
              <div className="absolute inset-0 bg-dark-500/40 mix-blend-multiply" />
              
              {/* Border effect */}
              <div className="absolute -inset-[10px] border-2 border-primary-500 rounded-xl -z-10 translate-y-4 translate-x-4" />
            </div>
          </motion.div>
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="heading-sm mb-4">
              Full-Stack Developer <span className="text-neon-cyan">&</span> Data Analytics Enthusiast
            </h3>
            
            <p className="text-gray-300 mb-6">
              I'm a pre-final year Computer Science student with a passion for building innovative web applications and deriving insights from data. My technical journey started with web development and expanded into data analytics, allowing me to create solutions that are both user-friendly and data-driven.
            </p>
            
            <p className="text-gray-300 mb-8">
              In addition to my technical skills, I'm enthusiastic about UI/UX design principles and creating engaging user experiences. When I'm not coding, you can find me playing cricket or exploring new technologies.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-neon-cyan" />
                <span className="text-gray-300">Maisammaguda, Hyderabad</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-neon-cyan" />
                <a 
                  href="mailto:mogilicharlasiddhardharoy@gmail.com" 
                  className="text-gray-300 hover:text-neon-cyan transition-colors"
                >
                  Email Me
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-neon-cyan" />
                <a 
                  href="tel:+919182408621" 
                  className="text-gray-300 hover:text-neon-cyan transition-colors"
                >
                  +91 9182408621
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <GraduationCap size={18} className="text-neon-cyan" />
                <span className="text-gray-300">Malla Reddy University</span>
              </div>
            </div>
            
            <a 
              href="src/components/cv4.pdf" 
              className="btn-primary inline-flex"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;