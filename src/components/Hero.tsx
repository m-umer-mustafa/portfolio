
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center pt-10 pl-10">
      <div className="max-w-6xl w-full ml-80">
        <div className="space-y-6">
          {/* Greeting */}
          <div className="space-y-2">
            <p className="text-portfolio-accent font-mono text-lg animate-fade-in">
              Hi, my name is
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-portfolio-text animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Muhammad Omer
            </h1>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-portfolio-text-muted animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Mustafa
            </h1>
          </div>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-portfolio-text-muted max-w-3xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Computer Science Graduate & Software Developer
          </h2>

          {/* Bio */}
          <div className="space-y-6 max-w-5xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="portfolio-text text-xl leading-relaxed">
              I'm a passionate software developer with expertise in <span className="text-portfolio-accent">AI/ML</span>, 
              <span className="text-portfolio-accent"> web development</span>, and <span className="text-portfolio-accent">system optimization</span>. 
              I specialize in building efficient solutions using modern technologies like CUDA, React, Python, and C++.
            </p>
            <p className="portfolio-text text-lg">
              Currently focused on <span className="text-portfolio-accent">machine learning projects</span>, 
              <span className="text-portfolio-accent"> neural networks</span>, and high-performance computing applications 
              that solve real-world problems.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 pt-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <Button 
              variant="outline" 
              size="lg"
              className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-portfolio-bg font-mono px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
            <Button 
              variant="ghost" 
              size="lg"
              className="text-portfolio-text-muted hover:text-portfolio-accent hover:text-portfolio-bg font-mono px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
              onClick={() => window.open('/resume/resume.pdf', '_blank')}
            >
              View Resume
              <ExternalLink className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
