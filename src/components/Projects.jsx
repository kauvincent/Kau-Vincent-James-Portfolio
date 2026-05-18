import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Makerere Timetable Calendar System',
      description: 'A comprehensive system synchronizing university timetables with Google Calendar through .ics feeds. Features a secure admin board for timeline management.',
      tags: ['React.js', 'Node.js', 'PostgreSQL', 'Express.js'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Student Portal System',
      description: 'A secure, scalable web portal empowering students to manage grades, schedules, registrations, and communications seamlessly.',
      tags: ['React', 'Tailwind CSS', 'REST APIs'],
      github: '#',
      demo: '#'
    },
    {
      title: 'AI Automation Projects',
      description: 'Implementations of intelligent automations bridging diverse APIs and streamlining manual data workflows using latest tech suites.',
      tags: ['Node.js', 'AI APIs', 'Python', 'Webhooks'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'This futuristic, premium personal portfolio showcasing projects through glassmorphism, precise animations, and strict design constraints.',
      tags: ['React', 'Framer Motion', 'Tailwind CSS'],
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        <motion.div 
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-sans tracking-tight mb-4 flex items-center gap-4">
              <span className="text-bright-yellow text-2xl font-mono">02.</span> Projects
            </h2>
            <div className="h-px w-full max-w-sm bg-gradient-to-r from-bright-yellow/50 to-transparent"></div>
          </div>
          <p className="text-white/60 font-light max-w-md text-sm leading-relaxed">
            A curated selection of recent work. Ranging from complex synchronization integrations to scalable university systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative h-full flex flex-col"
            >
              {/* Card Container */}
              <div className="glass-panel p-8 rounded-2xl h-full border border-white/10 group-hover:border-bright-yellow/50 transition-all duration-500 relative overflow-hidden">
                
                {/* Background Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-bright-yellow/0 to-bright-yellow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-bright-yellow transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/70 font-light text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="text-xs font-mono px-2 py-1 bg-white/5 border border-white/10 rounded text-bright-yellow/90">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    <a href={project.github} className="flex items-center gap-2 text-sm font-semibold hover:text-bright-yellow transition-colors">
                      <Github size={18} /> GitHub
                    </a>
                    <a href={project.demo} className="flex items-center gap-2 text-sm font-semibold hover:text-bright-yellow transition-colors">
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
