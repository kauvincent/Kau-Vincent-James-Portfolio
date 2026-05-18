import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-[rgba(255,255,255,0.05)] relative z-10 bg-deep-purple/80 backdrop-blur">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex flex-col items-center md:items-start">
          <p className="text-white/40 text-xs font-mono tracking-widest uppercase mb-1">
            Designed & Developed by
          </p>
          <p className="text-white font-medium tracking-wide">
            Kau Vincent James
          </p>
        </div>

        <motion.a 
          href="#hero"
          className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:border-bright-yellow hover:text-bright-yellow transition-colors relative group"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white group-hover:bg-bright-yellow mb-1 transition-colors"></span>
        </motion.a>

        <div className="text-white/40 text-xs font-mono tracking-widest uppercase flex gap-4">
          <a href="#" className="hover:text-bright-yellow transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-bright-yellow transition-colors">Twitter</a>
          <a href="#" className="hover:text-bright-yellow transition-colors">GitHub</a>
        </div>

      </div>
    </footer>
  );
}
