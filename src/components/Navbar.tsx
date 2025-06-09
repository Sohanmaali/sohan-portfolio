'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FiHome, FiUser, FiFileText, FiCode, FiGithub, FiMail, FiSun, FiMoon, FiBriefcase, FiBook } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';
import MobileMenu from './MobileMenu';

const navLinks = [
  { name: 'Home', path: '/', icon: <FiHome className="text-lg" /> },
  { name: 'About', path: '/about', icon: <FiUser className="text-lg" /> },
  { name: 'Resume', path: '/resume', icon: <FiFileText className="text-lg" /> },
  { name: 'Services', path: '/services', icon: <FiBriefcase className="text-lg" /> },
  { name: 'Resources', path: '/resources', icon: <FiBook className="text-lg" /> },

  
  { name: 'Projects', path: '/projects', icon: <FiCode className="text-lg" /> },
  { name: 'Code', path: '/code', icon: <FiGithub className="text-lg" /> },
  { name: 'Contact', path: '/contact', icon: <FiMail className="text-lg" /> },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  if (!isMounted) return null;

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent backdrop-blur-sm py-3'
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with animation */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="flex-shrink-0 flex items-center group">
              <motion.div 
                className="relative"
                animate={scrolled ? { scale: 0.8 } : { scale: 1 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl overflow-hidden">
                  <motion.span
                    initial={{ y: 0 }}
                    animate={{ y: 0 }}
                    className="block"
                  >
                    <img src="/assets/images/sohan.jpg" alt="" />
                  </motion.span>
                </div>
                <motion.div 
                  className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1.2 }}
                />
              </motion.div>
              <motion.span 
                className={`ml-3 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ${
                  scrolled ? 'text-lg' : 'text-xl'
                } transition-all duration-300`}
              >
                Sohan Maali.
              </motion.span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium flex flex-col items-center group transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                <div className="flex items-center">
                  <motion.span 
                    className="mr-2"
                    whileHover={{ scale: 1.1 }}
                  >
                    {link.icon}
                  </motion.span>
                  <span>{link.name}</span>
                </div>
                <motion.span 
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 origin-left ${
                    isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                  initial={false}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              </Link>
            ))}
            <motion.div 
              className="ml-10 pl-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ThemeToggle />
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.div 
              className="mr-4"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ThemeToggle />
            </motion.div>
            <MobileMenu navLinks={navLinks} pathname={pathname} />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
