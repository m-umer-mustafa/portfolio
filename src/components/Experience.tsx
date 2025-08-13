
import React from 'react';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const education = [
    {
      period: "2022 - 2026",
      title: "Bachelor of Science in Computer Science",
      institution: "FAST NUCES Islamabad",
      description: "Currently pursuing a comprehensive Computer Science degree with focus on software engineering, algorithms, and machine learning.",
      gpa: "6 Semesters Completed",
      highlights: [
        "Strong foundation in programming and software development",
        "Advanced coursework in AI/ML and data structures",
        "Hands-on experience with modern development frameworks"
      ]
    },
    {
      period: "2019 - 2021", 
      title: "Fundamentals of Science in Pre-Engineering",
      institution: "Punjab Group of Colleges, Gujranwala",
      description: "Completed pre-engineering studies with excellent academic performance.",
      highlights: [
        "Strong mathematical and analytical foundation",
        "Physics and chemistry fundamentals",
        "Problem-solving and critical thinking skills"
      ]
    }
  ];

  const technicalSkills = {
    "Programming Languages": ["C/C++", "Python", "Java", "MASM 32-bit Assembly", "C#"],
    "Frameworks & Libraries": ["CUDA Toolkit", "Node.js", "React.js", "SFM", "Express.js"],
    "Tools & Technologies": ["Git", "Visual Studio", "Code::Blocks"],
    "Game Development": ["Collision Detection", "Particle Systems", "Behavior Design"],
    "Databases": ["MySQL", "MongoDB"],
    "Specializations": ["AI/ML & Computer Vision", "Deep Learning", "Image Processing", "High-Performance Computing"]
  };

  const interests = [
    "AI/ML & Computer Vision: Deep learning for image recognition, object detection, and semantic segmentation",
    "Image Processing: Techniques for image enhancement, feature extraction, and pattern recognition", 
    "High-Performance Computing: Leveraging CUDA and parallel computing for scalable AI solutions"
  ];

  return (
    <section id="experience" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full mx-auto lg:ml-80">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold portfolio-heading">
              <span className="text-portfolio-accent font-mono text-base sm:text-lg md:text-xl mr-2 sm:mr-4">01.</span>
              Education & Experience
            </h2>
            <div className="w-32 h-px bg-portfolio-border"></div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-12">
            <h3 className="text-2xl font-bold portfolio-heading mb-8">Education</h3>
            <div className="space-y-12">
              {education.map((edu, index) => (
                <div key={index} className="portfolio-card group">
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold portfolio-heading group-hover:text-portfolio-accent transition-colors duration-300">
                          {edu.title}
                        </h4>
                        <p className="text-portfolio-accent font-mono text-xs sm:text-sm">
                          {edu.institution}
                        </p>
                      </div>
                      <div className="text-portfolio-text-muted font-mono text-xs sm:text-sm mt-2 sm:mt-0">
                        {edu.period}
                      </div>
                    </div>
                    
                    <p className="portfolio-text">
                      {edu.description}
                    </p>
                    
                    <div className="text-portfolio-accent font-mono text-sm">
                      {edu.gpa}
                    </div>
                    
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start space-x-2 portfolio-text">
                          <span className="text-portfolio-accent mt-2">▹</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold portfolio-heading">Technical Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {Object.entries(technicalSkills).map(([category, skills]) => (
                <div key={category} className="space-y-4">
                  <h4 className="text-lg font-semibold text-portfolio-accent font-mono">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge 
                        key={skill}
                        variant="outline"
                        className="border-portfolio-border text-portfolio-text-muted hover:border-portfolio-accent hover:text-portfolio-accent transition-colors duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold portfolio-heading">Research Interests</h3>
            <div className="space-y-4">
              {interests.map((interest, index) => (
                <div key={index} className="flex items-start space-x-2 portfolio-text">
                  <span className="text-portfolio-accent mt-2">▹</span>
                  <span>{interest}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
