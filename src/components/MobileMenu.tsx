'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiMail, FiGithub } from 'react-icons/fi';

interface NavLink {
  name: string;
  path: string;
  icon: React.ReactNode;
}

interface MobileMenuProps {
  navLinks: NavLink[];
  pathname: string;
}

const menuVariants = {
  closed: { 
    opacity: 0,
    y: '-20px',
    display: 'none',
    transition: {
      duration: 0.2,
      when: "afterChildren"
    }
  },
  open: { 
    opacity: 1,
    y: '0',
    display: 'block',
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.1,
      staggerDirection: 1
    }
  }
};

const itemVariants = {
  closed: { opacity: 0, y: -10 },
  open: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.3 
    }
  }
};

export default function MobileMenu({ navLinks, pathname }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Toggle menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when clicking outside or pressing Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current && 
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside as EventListener);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside as EventListener);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  // Handle body scroll when menu is open
  useEffect(() => {
    setIsMounted(true);
    
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  if (!isMounted) return null;

  return (
    <div className="md:hidden relative z-50">
      <motion.button
        ref={buttonRef}
        onClick={toggleMenu}
        className="p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? (
          <FiX className="w-6 h-6" />
        ) : (
          <FiMenu className="w-6 h-6" />
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-x-0 top-20 bg-white dark:bg-gray-900 z-50 shadow-lg border-t border-gray-200 dark:border-gray-700"
            style={{ height: 'calc(100vh - 5rem)' }}
          >
            <div className="container mx-auto px-4 py-6">
              <motion.ul className="space-y-2">
                {navLinks.map((link) => (
                  <motion.li 
                    key={link.path}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    <Link
                      href={link.path}
                      className={`flex items-center px-4 py-1 rounded-lg text-lg ${
                        isActive(link.path)
                          ? 'text-blue-600 dark:text-blue-400 font-medium'
                          : 'text-gray-700 dark:text-gray-300'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="mr-3">
                        {link.icon}
                      </span>
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div 
                className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800"
                variants={itemVariants}
              >
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  Let's connect and build something amazing together!
                </p>
                <div className="flex space-x-3">
                  <Link
                    href="mailto:sohanmaali4@gmail.com"
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiMail className="mr-2" />
                    Email Me
                  </Link>
                  <Link
                    href="https://github.com/sohanmaali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiGithub className="mr-2" />
                    GitHub
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
