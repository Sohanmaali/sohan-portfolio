'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// Add global styles directly to the document head
const addGlobalStyles = () => {
  if (typeof document === 'undefined') return;
  
  const styleId = 'custom-cursor-styles';
  
  // Don't add styles if they're already added
  if (document.getElementById(styleId)) return;
  
  const style = document.createElement('style');
  style.id = styleId;
  style.textContent = `
    * {
      cursor: none !important;
    }
    
    html, body {
      cursor: none !important;
    }
  `;
  
  document.head.appendChild(style);
};

export default function MouseDragAnimation() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth the mouse movement
  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(mouseX, smoothOptions);
  const smoothY = useSpring(mouseY, smoothOptions);

  // Track mouse position
  const handleMouseMove = (e: MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  // Handle hover states
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  // Handle click effect
  const handleMouseDown = () => {
    // Click effect handled in the style prop
  };

  useEffect(() => {
    // Add global styles
    addGlobalStyles();
    
    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );

    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      // Cleanup
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  // Only render on client-side to avoid hydration issues
  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <motion.div
      ref={cursorRef}
      style={{
        position: 'fixed',
        width: '20px',
        height: '20px',
        backgroundColor: isHovering ? 'rgba(59, 130, 246, 0.5)' : 'white',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'difference',
        transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
        transition: 'transform 0.2s ease-out, background-color 0.2s',
        left: smoothX,
        top: smoothY,
      }}
      aria-hidden="true"
    />
  );
}
