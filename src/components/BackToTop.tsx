'use client';

import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          className="fixed bottom-20 right-6 md:bottom-6 z-50 w-12 h-12 rounded-full bg-blue-600 text-white shadow-lg shadow-blue-500/50 hover:bg-blue-700 transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <span>
            <FaArrowUp className="w-5 h-5" />
          </span>
        </button>
      )}
    </>
  );
}
