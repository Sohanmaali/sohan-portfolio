'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const AnimatedBackground = () => {
  const controls = useAnimation();

  useEffect(() => {
    const animateBackground = async () => {
      while (true) {
        await controls.start({
          backgroundPosition: ['0% 0%', '100% 100%'],
          transition: { duration: 30, ease: 'linear', repeat: Infinity, repeatType: 'loop' }
        });
      }
    };
    animateBackground();
  }, [controls]);

  // Generate random particles
  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    size: Math.random() * 5 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(45deg, #6366f1, #8b5cf6, #d946ef, #ec4899, #f59e0b, #84cc16, #10b981, #06b6d4, #3b82f6)',
          backgroundSize: '400% 400%',
          opacity: 0.15,
        }}
        animate={controls}
      />

      {/* Animated grid */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-20 dark:opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-blue-400 dark:bg-purple-400"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: 0.3,
              filter: 'blur(1px)',
            }}
            animate={{
              y: ['0%', '100vh'],
              x: ['0%', `${Math.random() * 100}%`],
              opacity: [0.1, 0.8, 0.1],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Animated noise texture */}
      <motion.div 
        className="absolute inset-0 opacity-5 dark:opacity-[0.02]"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
