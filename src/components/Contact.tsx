import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto lg:ml-80">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <p className="text-portfolio-accent font-mono text-lg">
              <span className="mr-4">04.</span>What's Next?
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold portfolio-heading">
              Get In Touch
            </h2>
            <div className="w-32 h-px bg-portfolio-border mx-auto"></div>
          </div>

          {/* Contact Content */}
          <div className="text-center space-y-8">
            <div className="max-w-2xl mx-auto space-y-6">
              <p className="portfolio-text text-base sm:text-lg">
                I'm currently looking for new opportunities in software development, 
                machine learning, and AI. Whether you have a question, want to collaborate 
                on a project, or just want to say hi, I'll try my best to get back to you!
              </p>
              <p className="portfolio-text text-sm sm:text-base">
                I'm particularly interested in roles involving CUDA programming, 
                machine learning research, and full-stack development.
              </p>
            </div>

            {/* Primary CTA */}
            <div className="pt-8">
              <Button 
                size="lg"
                className="bg-transparent border-2 border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-portfolio-bg font-mono px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg glow-effect"
                onClick={() => window.open('mailto:muhammadomermustafa@gmail.com', '_blank')}
              >
                Say Hello
              </Button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 pt-16">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-portfolio-bg-light border border-portfolio-border rounded-full flex items-center justify-center mx-auto group-hover:border-portfolio-accent transition-colors duration-300">
                <Mail className="w-6 h-6 text-portfolio-accent" />
              </div>
              <div>
                <h3 className="font-semibold portfolio-heading mb-2">Email</h3>
                <a 
                  href="mailto:muhammadomermustafa@gmail.com"
                  className="portfolio-text hover:text-portfolio-accent transition-colors duration-300"
                >
                  muhammadomermustafa@gmail.com
                </a>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-portfolio-bg-light border border-portfolio-border rounded-full flex items-center justify-center mx-auto">
                <Phone className="w-6 h-6 text-portfolio-accent" />
              </div>
              <div>
                <h3 className="font-semibold portfolio-heading mb-2">Phone</h3>
                <a 
                  href="tel:+923022388940"
                  className="portfolio-text hover:text-portfolio-accent transition-colors duration-300"
                >
                  +92 302 238 89 40
                </a>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-portfolio-bg-light border border-portfolio-border rounded-full flex items-center justify-center mx-auto">
                <MapPin className="w-6 h-6 text-portfolio-accent" />
              </div>
              <div>
                <h3 className="font-semibold portfolio-heading mb-2">Location</h3>
                <p className="portfolio-text">
                  Islamabad, Pakistan
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="pt-16">
            <div className="flex justify-center space-x-4 sm:space-x-8">
              {[
                { 
                  icon: Github, 
                  href: "https://github.com/m-umer-mustafa",
                  label: "GitHub"
                },
                { 
                  icon: Linkedin, 
                  href: "www.linkedin.com/in/muhammad-omer-mustafa-935150265",
                  label: "LinkedIn"
                },
                { 
                  icon: Instagram, 
                  href: "https://www.instagram.com/m_umer_mustafa/",
                  label: "Instagram"
                },
                { 
                  icon: MessageCircle, 
                  href: "https://wa.me/923022388940",
                  label: "WhatsApp"
                }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-portfolio-bg-light border border-portfolio-border rounded-full flex items-center justify-center text-portfolio-text-muted hover:text-portfolio-accent hover:border-portfolio-accent hover:scale-110 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="text-center pt-16 border-t border-portfolio-border">
            <p className="portfolio-text font-mono text-sm">
              Built with React, TypeScript & Tailwind CSS
            </p>
            <p className="portfolio-text font-mono text-sm mt-2">
              © 2025 Muhammad Omer Mustafa
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
