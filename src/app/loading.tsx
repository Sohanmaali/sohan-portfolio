'use client';

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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div
        className="flex flex-col items-center p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-xl w-full max-w-md mx-4"
      >
        <div
          className="relative w-32 h-32 mb-6"
        >
          <div
            className="absolute inset-0 border-4 border-gray-200 dark:border-gray-700 rounded-full"
          />
          <div
            className="absolute inset-0 border-4 border-t-blue-500 border-r-blue-400 border-b-blue-600 border-l-blue-400 rounded-full"
          />
          <div
            className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-blue-500"
          >
            {Math.round(progress)}%
          </div>
        </div>

        <p
          key={currentMessage}
          className="text-lg text-gray-600 dark:text-gray-300 font-medium text-center mb-6 h-8"
        >
          {currentMessage}
        </p>

        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
          <div
            className="bg-gradient-to-r from-blue-500 to-blue-600 h-2.5 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
