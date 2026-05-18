import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, TerminalSquare } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        scrolled ? 'glass-panel py-3 shadow-[0_4px_30px_rgba(0,0,0,0.1)]' : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between">
        
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-full border-2 border-bright-yellow overflow-hidden glow-yellow flex shrink-0">
            {/* Replace this src with your actual image path */}
            <img 
              src="https://api.dicebear.com/7.x/initials/svg?seed=KVJ&backgroundColor=5A189A&textColor=FFD60A" 
              alt="Kau Vincent James" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-bold text-xl tracking-wider text-white">
            KVJ<span className="text-bright-yellow">.</span>
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-white hover:text-bright-yellow text-sm font-medium tracking-wide transition-colors duration-200"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: navLinks.length * 0.1 }}
            className="px-5 py-2 text-sm font-bold border border-bright-yellow text-bright-yellow rounded hover:bg-bright-yellow hover:text-deep-purple transition-all duration-300 glow-yellow-hover"
          >
            Hire Me
          </motion.a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white hover:text-bright-yellow transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel border-t border-t-[rgba(255,255,255,0.1)] absolute top-full left-0 w-full overflow-hidden"
          >
            <div className="flex flex-col py-4 px-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white hover:text-bright-yellow py-2 text-lg font-medium border-b border-b-[rgba(255,255,255,0.05)]"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
