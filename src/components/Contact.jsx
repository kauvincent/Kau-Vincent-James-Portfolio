import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Send, Loader2, CheckCircle, XCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.message);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        <motion.div 
          className="mb-16 flex flex-col items-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-sans tracking-tight mb-4 flex items-center justify-center gap-4">
            <span className="text-bright-yellow text-2xl font-mono">05.</span> Get In Touch
          </h2>
          <div className="h-px w-24 bg-bright-yellow/50 mb-6"></div>
          <p className="text-white/60 font-light max-w-lg text-center leading-relaxed">
            I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
          
          <motion.div 
            className="w-full md:w-1/3 flex flex-col gap-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-bright-yellow group-hover:bg-bright-yellow/10 transition-all">
                <Mail size={20} className="text-white group-hover:text-bright-yellow" />
              </div>
              <div>
                <p className="text-sm font-mono text-bright-yellow mb-1">Email</p>
                <p className="text-white font-medium">vicentkawo@gmail.com</p>
              </div>
            </div>

            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer w-max">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-bright-yellow group-hover:bg-bright-yellow/10 transition-all">
                <Github size={20} className="text-white group-hover:text-bright-yellow" />
              </div>
              <div>
                <p className="text-sm font-mono text-bright-yellow mb-1">GitHub</p>
                <p className="text-white font-medium">github.com/kauvincent</p>
              </div>
            </a>
          </motion.div>

          <motion.form 
            className="w-full md:w-2/3 glass-panel p-8 rounded-2xl flex flex-col gap-6 relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-mono text-white/50 uppercase tracking-widest pl-1">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-white text-deep-purple font-medium p-4 border border-deep-purple/20 outline-none rounded focus:border-bright-yellow focus:ring-2 focus:ring-bright-yellow/50 transition-all disabled:opacity-50"
                  placeholder="John Doe"
                  required
                  disabled={status === 'loading'}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-mono text-white/50 uppercase tracking-widest pl-1">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white text-deep-purple font-medium p-4 border border-deep-purple/20 outline-none rounded focus:border-bright-yellow focus:ring-2 focus:ring-bright-yellow/50 transition-all disabled:opacity-50"
                  placeholder="john@example.com"
                  required
                  disabled={status === 'loading'}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-mono text-white/50 uppercase tracking-widest pl-1">Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="bg-white text-deep-purple font-medium p-4 border border-deep-purple/20 outline-none rounded focus:border-bright-yellow focus:ring-2 focus:ring-bright-yellow/50 transition-all resize-none disabled:opacity-50"
                placeholder="Hello Kau, I'd like to discuss a project..."
                required
                disabled={status === 'loading'}
              ></textarea>
            </div>
            
            {status === 'error' && (
              <div className="flex items-center gap-2 text-red-400 text-sm font-medium bg-red-400/10 p-3 rounded">
                <XCircle size={18} /> {errorMessage}
              </div>
            )}

            {status === 'success' && (
              <div className="flex items-center gap-2 text-white text-sm font-medium bg-green-400/10 p-3 rounded">
                <CheckCircle size={18} /> Message sent successfully!
              </div>
            )}
            
            <button 
              type="submit" 
              disabled={status === 'loading' || status === 'success'}
              className="mt-2 flex items-center justify-center gap-2 bg-bright-yellow text-deep-purple py-4 font-bold text-sm tracking-widest uppercase hover:bg-white transition-all glow-yellow w-full sm:w-auto self-end px-10 disabled:opacity-70 disabled:hover:bg-bright-yellow"
            >
              {status === 'loading' ? (
                <>Sending... <Loader2 size={16} className="animate-spin" /></>
              ) : status === 'success' ? (
                <>Sent <CheckCircle size={16} /></>
              ) : (
                <>Send Message <Send size={16} /></>
              )}
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
}
