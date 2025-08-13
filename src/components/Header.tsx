
import React, { useState, useEffect } from 'react';
import ThemeSwitch from './ThemeSwitch';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'header-blur translate-y-0' : 'translate-y-0'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="animate-float">
            <h1 className="text-xl sm:text-2xl font-bold portfolio-heading">
              <span className="text-portfolio-accent">M</span>uhammad <span className="text-portfolio-accent">O</span>mer
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['About', 'Experience', 'Projects', 'Contact'].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-portfolio-text-muted hover:text-portfolio-accent transition-all duration-300 font-mono text-sm relative group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10">{`0${index + 1}.`} {item}</span>
                <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-portfolio-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeSwitch />
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-portfolio-text-muted hover:text-portfolio-accent transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 header-blur border-t border-portfolio-border">
          <nav className="px-4 py-6 space-y-4">
            {['About', 'Experience', 'Projects', 'Contact'].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left text-portfolio-text-muted hover:text-portfolio-accent transition-all duration-300 font-mono text-sm py-2"
              >
                <span>{`0${index + 1}.`} {item}</span>
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
