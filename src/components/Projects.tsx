
import React, { useState, useRef, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  const projects = [
    {
      title: "MNIST Neural Network Acceleration on GPU (CUDA)",
      description: "Developed a GPU-accelerated neural network for MNIST digit classification using CUDA in C/C++. Optimized matrix operations to achieve significant speedup compared to CPU-based implementations. Integrated CUDA kernels for efficient inference, reducing runtime for large datasets.",
      technologies: ["CUDA", "C/C++", "Neural Networks", "GPU Computing", "Machine Learning"],
      links: {
        github: "https://github.com/fahadahmad9/HPC_Project",
        external: "#"
      }
    },
    {
      title: "Lost & Found System",
      description: "Built a full-stack web application to track lost items on campus. Implemented user authentication and notifications using Node.js, React.js, and MongoDB. Designed a responsive React frontend and a RESTful Node.js backend for seamless user experience.",
      technologies: ["Node.js", "React.js", "MongoDB", "Express.js", "REST API"],
      links: {
        github: "https://github.com/m-umer-mustafa/lost-and-found",
        external: "#"
      }
    },
    {
      title: "Gym Manager System",
      description: "Developed a comprehensive gym management application using C#, .NET framework, and MySQL database. Implemented features for membership tracking, class scheduling, and payment processing. Designed a user-friendly interface for both staff and clients.",
      technologies: ["C#", ".NET", "MySQL", "Windows Forms", "Database Design"],
      links: {
        github: "#",
        external: "#"
      }
    },
    {
      title: "AI-Driven Car Racing System",
      description: "Developed an AI-driven car racing controller using Python within the TORCS framework. Processed telemetry data for track awareness and real-time decision-making. Optimized performance metrics such as speed, obstacle avoidance, and track-following.",
      technologies: ["Python", "TORCS Framework", "AI/ML", "Computer Vision", "Real-time Systems"],
      links: {
        github: "#",
        external: "#"
      }
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = projectRefs.current.findIndex(ref => ref === entry.target);
            if (index !== -1) {
              setActiveProject(index);
            }
          }
        });
      },
      { threshold: 0.95 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full mx-auto lg:ml-80">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold portfolio-heading">
              <span className="text-portfolio-accent font-mono text-base sm:text-lg md:text-xl mr-2 sm:mr-4">02.</span>
              Some Things I've Built
            </h2>
            <div className="w-32 h-px bg-portfolio-border"></div>
          </div>

          {/* Projects List */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div 
                key={index}
                ref={(el) => projectRefs.current[index] = el}
                className={`transition-all duration-500 ease-out ${
                  activeProject === index 
                    ? 'project-card-active' 
                    : 'project-card-inactive'
                }`}
              >
                <div className="portfolio-card group cursor-pointer">
                  <div className="space-y-6">
                    <div>
                      <p className="text-portfolio-accent font-mono text-sm mb-2">
                        Featured Project
                      </p>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold portfolio-heading mb-4 group-hover:text-portfolio-accent transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>

                    <p className="portfolio-text text-base sm:text-lg leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="outline"
                          className="border-portfolio-border text-portfolio-text-muted font-mono text-xs hover:border-portfolio-accent hover:text-portfolio-accent transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex space-x-4 pt-4">
                      {project.links.github != "#" && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-portfolio-text-muted hover:text-portfolio-accent transition-all duration-300 hover:scale-110"
                          aria-label="GitHub Repository"
                        >
                          <Github className="w-6 h-6" />
                        </a>
                      )}

                      {project.links.external !== "#" && (
                        <a
                          href={project.links.external}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-portfolio-text-muted hover:text-portfolio-accent transition-all duration-300 hover:scale-110"
                          aria-label="External Link"
                        >
                          <ExternalLink className="w-6 h-6" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More Projects CTA */}
          <div className="text-center pt-16">
            <a
              href="https://github.com/m-umer-mustafa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-portfolio-accent hover:text-portfolio-accent-dim font-mono border border-portfolio-accent hover:border-portfolio-accent-dim px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              <span>View More Projects</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
