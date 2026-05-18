import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';
import ParticleBackground from './components/ParticleBackground';

export default function App() {
  return (
    <div className="relative min-h-screen bg-deep-purple text-white selection:bg-bright-yellow selection:text-deep-purple">
      <ParticleBackground />
      <CursorGlow />
      <div className="relative z-10 font-sans">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
