import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, FileText, Github as GitHub, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionId } from '../../types';
import { useTheme } from '../../context/ThemeContext';

const navLinks = [
  { name: 'Home', href: `#${SectionId.Home}` },
  { name: 'About', href: `#${SectionId.About}` },
  { name: 'Skills', href: `#${SectionId.Skills}` },
  { name: 'Projects', href: `#${SectionId.Projects}` },
  { name: 'Contact', href: `#${SectionId.Contact}` },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-dark-400/90 backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold gradient-text">
          SR<span className="text-neon-cyan">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className="text-gray-300 hover:text-neon-cyan transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-dark-300 transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <Sun size={20} className="text-neon-yellow" />
              ) : (
                <Moon size={20} className="text-primary-400" />
              )}
            </button>
            
            <a 
              href="src/components/cv4.pdf" 
              className="btn-neon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText size={18} />
              Resume
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-dark-300 transition-colors"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <Sun size={20} className="text-neon-yellow" />
            ) : (
              <Moon size={20} className="text-primary-400" />
            )}
          </button>
          
          <button
            onClick={toggleMenu}
            className="p-2 rounded-full hover:bg-dark-300 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className="text-neon-cyan" />
            ) : (
              <Menu size={24} className="text-neon-cyan" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-dark-400 border-t border-gray-800"
        >
          <div className="container-custom py-4">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="block py-2 text-gray-300 hover:text-neon-cyan transition-colors"
                    onClick={toggleMenu}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t border-gray-700 mt-2">
                <a 
                  href="/resume.pdf" 
                  className="btn-neon w-full justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText size={18} />
                  Resume
                </a>
              </li>
            </ul>
            
            <div className="flex items-center gap-4 mt-6">
              <a 
                href="https://github.com/siddhu9876" 
                className="p-2 rounded-full hover:bg-dark-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHub size={22} className="text-gray-300 hover:text-neon-cyan" />
              </a>
              <a 
                href="https://linkedin.com/in/siddhardha-roy" 
                className="p-2 rounded-full hover:bg-dark-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={22} className="text-gray-300 hover:text-neon-cyan" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;