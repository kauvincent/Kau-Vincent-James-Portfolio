import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React.js', 'Tailwind CSS', 'Framer Motion', 'HTML5 & CSS3', 'JavaScript (ES6+)']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'Server Logic']
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'Database Design', 'Data Modeling']
    },
    {
      title: 'Tools & UI/UX',
      skills: ['Git & GitHub', 'Figma', 'Responsive Design', 'Problem Solving']
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        <motion.div 
          className="mb-16 text-center flex flex-col items-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-sans tracking-tight mb-4 flex items-center justify-center gap-4">
            <span className="text-bright-yellow text-2xl font-mono">03.</span> Core Skills
          </h2>
          <div className="h-px w-24 bg-bright-yellow/50"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel p-6 rounded-xl border border-[rgba(255,255,255,0.05)] hover:-translate-y-2 hover:border-bright-yellow transition-all duration-300"
            >
              <h3 className="text-lg font-bold mb-4 border-b border-white/10 pb-2 text-bright-yellow tracking-wider">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, j) => (
                  <motion.li 
                    key={j}
                    whileHover={{ x: 5, color: '#FFD60A' }}
                    className="flex items-center gap-2 text-white/80 text-sm font-light cursor-default transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30 block"></span>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
