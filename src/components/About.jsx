import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const highlights = [
    { icon: <Code2 size={24} />, title: 'Frontend', text: 'React.js & Tailwind CSS' },
    { icon: <Server size={24} />, title: 'Backend', text: 'Node.js & Express.js' },
    { icon: <Database size={24} />, title: 'Database', text: 'PostgreSQL & REST APIs' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-sans tracking-tight mb-4 flex items-center gap-4">
            <span className="text-bright-yellow text-2xl font-mono">01.</span> About Me
          </h2>
          <div className="h-px w-full max-w-sm bg-gradient-to-r from-bright-yellow/50 to-transparent"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="prose prose-invert max-w-none font-light text-white/80 leading-relaxed text-lg space-y-6">
              <p>
                Hello! I am <strong className="text-white font-medium">Kau Vincent James</strong>, a passionate software developer deeply invested in crafting robust, scalable full-stack applications.
              </p>
              <p>
                My journey began with a curiosity for how complex systems operate under the hood. Today, I specialize in the modern web stack, architecting solutions that balance clean typography, intuitive user experiences, and highly performant backend infrastructures.
              </p>
              <p>
                Whether it's integrating university timetables with calendars or building dynamic student portals, I thrive on solving real-world problems. I believe that powerful software should feel effortless, pairing strong engineering with modern, futuristic design.
              </p>
            </div>
            
            <div className="mt-10 mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-bright-yellow rounded-full glow-yellow animate-pulse"></div>
              <span className="text-sm font-mono text-bright-yellow uppercase tracking-widest">Core Stack Focus</span>
            </div>
          </motion.div>

          <motion.div 
            className="w-full lg:w-1/2 grid flex-col gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {highlights.map((item, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="glass-panel p-6 rounded-xl border border-white/10 hover:border-bright-yellow/50 transition-colors group flex items-start gap-4"
              >
                <div className="p-3 rounded-lg bg-white/5 text-white group-hover:text-deep-purple group-hover:bg-bright-yellow group-hover:shadow-[0_0_15px_rgba(255,214,10,0.5)] transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 tracking-wide">{item.title}</h3>
                  <p className="text-white/60 font-light text-sm">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
