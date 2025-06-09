'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const radius = 22; // Radius of the circle
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollProgress / 100) * circumference;

  useEffect(() => {
    const handleScroll = () => {
      // Toggle visibility
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Calculate scroll progress
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed bottom-28 right-8 z-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <div className="relative w-16 h-16 flex items-center justify-center">
            {/* Progress circle */}
            <div className="absolute w-full h-full">
              <svg 
                className="w-full h-full transform -rotate-90" 
                viewBox="0 0 50 50"
                aria-hidden="true"
              >
                <circle
                  className="text-gray-200 dark:text-gray-700"
                  strokeWidth="4"
                  stroke="currentColor"
                  fill="transparent"
                  r="20"
                  cx="25"
                  cy="25"
                />
                <circle
                  className="text-blue-500 dark:text-blue-400"
                  strokeWidth="4"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="20"
                  cx="25"
                  cy="25"
                />
              </svg>
            </div>
            
            {/* Button */}
            <motion.button
              ref={buttonRef}
              className="group relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 flex items-center justify-center"
              onClick={scrollToTop}
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
              whileTap={{ 
                scale: 0.95,
                transition: { duration: 0.1 }
              }}
              aria-label="Back to top"
              initial={false}
            >
              <motion.span 
                className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-hidden="true"
              />
              <motion.span 
                className="relative z-10 flex items-center justify-center w-full h-full"
                whileHover={{ y: -2 }}
                whileTap={{ y: 1 }}
              >
                <FaArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
              </motion.span>
              {/* Animated ring on hover */}
              <motion.span 
                className="absolute inset-0 rounded-full border-2 border-blue-400 opacity-0 group-hover:opacity-100"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={isVisible ? { scale: 1.2, opacity: 0 } : {}}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
                aria-hidden="true"
              />
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
