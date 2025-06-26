'use client';

import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const loadingMessages = [
  'Preparing your experience...',
  'Almost there...',
  'Just a moment longer...',
  'Loading awesome content...',
  'Final touches...'
];

export default function Loading() {
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(loadingMessages[0]);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 15;
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 500);

    const messageInterval = setInterval(() => {
      setCurrentMessage(
        loadingMessages[Math.floor(Math.random() * loadingMessages.length)]
      );
    }, 2000);

    return () => {
      clearInterval(interval);
      clearInterval(messageInterval);
    };
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      controls.start({
        scale: [1, 1.05, 1],
        transition: { duration: 0.5 }
      });
    }
  }, [progress, controls]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <motion.div 
        className="flex flex-col items-center p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-xl w-full max-w-md mx-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="relative w-32 h-32 mb-6"
          animate={controls}
        >
          <motion.div 
            className="absolute inset-0 border-4 border-gray-200 dark:border-gray-700 rounded-full"
          />
          <motion.div 
            className="absolute inset-0 border-4 border-t-blue-500 border-r-blue-400 border-b-blue-600 border-l-blue-400 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
          <motion.div 
            className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-blue-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {Math.round(progress)}%
          </motion.div>
        </motion.div>
        
        <AnimatePresence mode="wait">
          <motion.p 
            key={currentMessage}
            className="text-lg text-gray-600 dark:text-gray-300 font-medium text-center mb-6 h-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {currentMessage}
          </motion.p>
        </AnimatePresence>

        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
          <motion.div 
            className="bg-gradient-to-r from-blue-500 to-blue-600 h-2.5 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
    </div>
  );
}
