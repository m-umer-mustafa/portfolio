import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('about');

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed left-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      <ul className="space-y-6">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "group flex items-center space-x-4 transition-all duration-300",
                activeSection === item.id ? "text-portfolio-accent" : "text-portfolio-text-muted hover:text-portfolio-accent"
              )}
            >
              <div className={cn(
                "h-px transition-all duration-300",
                activeSection === item.id 
                  ? "w-16 bg-portfolio-accent" 
                  : "w-8 bg-portfolio-text-muted group-hover:w-16 group-hover:bg-portfolio-accent"
              )} />
              <span className="text-sm font-mono uppercase tracking-wider">
                {item.label}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;