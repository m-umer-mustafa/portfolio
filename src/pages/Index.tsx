
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

const Index = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative bg-portfolio-bg min-h-screen">
      <Header />
      <Navigation />
      
      <main className="relative">
        <Hero />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* Background decoration */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-portfolio-accent/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-portfolio-accent/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  );
};

export default Index;
