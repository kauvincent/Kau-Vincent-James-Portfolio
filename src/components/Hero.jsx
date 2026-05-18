import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10 flex flex-col md:flex-row items-center justify-between">
        
        {/* Text Content */}
        <div className="w-full md:w-3/5 text-left md:pr-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-bright-yellow font-mono tracking-wider mb-4 border border-bright-yellow/30 inline-block px-3 py-1 rounded-full text-xs box-border">
              Hello World, I am
            </p>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4 tracking-tighter"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Kau Vincent <br />
            <span className="text-bright-yellow">James.</span>
          </motion.h1>
          
          <motion.h2
            className="text-xl md:text-2xl font-light text-white/80 mb-8 border-l-2 border-bright-yellow pl-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Full-Stack Developer <span className="text-bright-yellow mx-2">•</span> System Designer <span className="text-bright-yellow mx-2">•</span> Problem Solver
          </motion.h2>

          <motion.p
            className="max-w-xl text-base md:text-lg text-white/70 mb-10 leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            I architect and develop scalable, high-performance web applications and enterprise systems. Turning complex problems into elegant, modern digital experiences.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="#projects" className="group flex items-center gap-2 bg-bright-yellow text-deep-purple px-8 py-4 font-bold text-sm tracking-widest uppercase hover:bg-white transition-all glow-yellow">
              View Projects 
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="flex items-center gap-2 border border-[rgba(255,255,255,0.3)] bg-transparent text-white px-8 py-4 font-bold text-sm tracking-widest uppercase hover:border-bright-yellow hover:text-bright-yellow transition-colors">
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Abstract Geometric Graphic Right */}
        <motion.div 
          className="w-full md:w-2/5 mt-16 md:mt-0 flex justify-center relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Central hexagon logic with framed styling */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
            {/* Outline rings */}
            <motion.div 
              className="absolute inset-0 border border-bright-yellow/40 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute inset-4 border border-white/20 rounded-full border-t-bright-yellow"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute inset-8 border border-white/10 rounded-full border-l-white"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Core Box */}
            <div className="relative w-32 h-32 glass-panel flex flex-col items-center justify-center overflow-hidden glow-yellow rotate-45">
               <div className="w-16 h-1 bg-bright-yellow mb-2 mt-4 -rotate-45 block"></div>
               <div className="w-8 h-1 bg-white mb-2 ml-8 -rotate-45 block"></div>
               <div className="w-12 h-1 bg-bright-yellow mr-4 -rotate-45 block"></div>
            </div>
            
            {/* Orbiting element */}
            <motion.div 
              className="absolute top-0 w-full h-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-4 h-4 rounded-full bg-bright-yellow absolute top-0 left-1/2 -ml-2 glow-yellow"></div>
            </motion.div>
          </div>
        </motion.div>

      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-[10px] tracking-widest uppercase text-white/50">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} className="text-bright-yellow" />
        </motion.div>
      </motion.div>
    </section>
  );
}
