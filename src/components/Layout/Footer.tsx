import React from 'react';
import { Heart, Github as GitHub, Linkedin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-400 py-12 border-t border-gray-800">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Info */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold gradient-text mb-3">
              SR<span className="text-neon-cyan">.</span>
            </h2>
            <p className="text-gray-400 mb-4">
              Full-Stack Developer & Data Analytics Enthusiast based in Hyderabad, India.
            </p>
            <div className="flex items-center gap-3 mt-auto">
              <a 
                href="https://github.com/siddhu9876" 
                className="text-gray-400 hover:text-neon-cyan transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GitHub size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/siddhardha-roy" 
                className="text-gray-400 hover:text-neon-cyan transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-neon-cyan transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-neon-cyan transition-colors">About</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-neon-cyan transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-neon-cyan transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-neon-cyan transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary-400" />
                <a 
                  href="mailto:mogilicharlasiddhardharoy@gmail.com" 
                  className="text-gray-400 hover:text-neon-cyan transition-colors"
                >
                  mogilicharlasiddhardharoy@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary-400" />
                <a 
                  href="tel:+919182408621" 
                  className="text-gray-400 hover:text-neon-cyan transition-colors"
                >
                  +91 9182408621
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Siddhardha Roy. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart size={14} className="text-red-500 mx-1" /> in Hyderabad, India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;