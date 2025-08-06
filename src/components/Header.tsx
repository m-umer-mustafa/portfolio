
import React, { useState, useEffect } from 'react';
import ThemeSwitch from './ThemeSwitch';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1 ${
      isScrolled ? 'header-blur translate-y-0' : 'translate-y-0'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="animate-float">
            <h1 className="text-2xl font-bold portfolio-heading">
              <span className="text-portfolio-accent">M</span>uhammad <span className="text-portfolio-accent">O</span>mer
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {['About', 'Experience', 'Projects', 'Contact'].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-portfolio-text-muted hover:text-portfolio-accent transition-all duration-300 font-mono text-sm relative group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10">{`0${index + 1}.`} {item}</span>
                <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-portfolio-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </a>
            ))}
          </nav>

          <div className="flex items-center">
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
