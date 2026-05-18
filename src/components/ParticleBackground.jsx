import React, { useEffect, useState } from 'react';

export default function ParticleBackground() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () => {
      const isMobile = window.innerWidth < 768;
      const count = isMobile ? 15 : 30; // Fewer particles on mobile for performance
      
      const newParticles = Array.from({ length: count }).map((_, i) => ({
        id: i,
        top: Math.random() * 100 + '%',
        left: Math.random() * 100 + '%',
        size: Math.random() * 3 + 1 + 'px',
        delay: Math.random() * 5 + 's',
        duration: Math.random() * 10 + 15 + 's',
        opacity: Math.random() * 0.4 + 0.1,
      }));
      setParticles(newParticles);
    };
    
    generateParticles();
    window.addEventListener('resize', generateParticles);
    return () => window.removeEventListener('resize', generateParticles);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-bright-yellow"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animation: `float ${p.duration} ease-in-out ${p.delay} infinite alternate`,
          }}
        />
      ))}
      <style>{`
        @keyframes float {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translateY(-50px) scale(1.5) translateX(30px); opacity: 0.8; box-shadow: 0 0 10px rgba(255, 214, 10, 0.5); }
          100% { transform: translate(0, -100px) scale(1); }
        }
      `}</style>
    </div>
  );
}
