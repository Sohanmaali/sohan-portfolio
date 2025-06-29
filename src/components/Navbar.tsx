'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiHome, FiUser, FiFileText, FiCode, FiGithub, FiMail, FiBriefcase, FiBook } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';

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
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${scrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent backdrop-blur-sm py-3'
          }`}
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo with animation */}
            <div>
              <Link href="/" className="flex-shrink-0 flex items-center group">
                <div
                  className="relative"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl overflow-hidden">
                    <span
                      className="block"
                    >
                      <img src="/assets/images/sohan.jpg" alt="" />
                    </span>
                  </div>
                  <div
                    className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"
                  />
                </div>
                <span
                  className={`ml-3 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ${scrolled ? 'text-lg' : 'text-xl'
                    } transition-all duration-300`}
                >
                  Sohan Maali.
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium flex flex-col items-center group transition-all duration-200 ${isActive(link.path)
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                >
                  <div className="flex items-center">
                    <span
                      className="mr-2"
                    >
                      {link.icon}
                    </span>
                    <span>{link.name}</span>
                  </div>
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 origin-left ${isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                  />
                </Link>
              ))}
              <div
                className="ml-10 pl-10"
              >
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <div
                className="mr-4"
              >
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </ nav>

      {/* Mobile Horizontal Scroll Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/90 dark:bg-gray-900/95 backdrop-blur-lg border-t border-gray-200/70 dark:border-gray-700/70 shadow-xl md:hidden">
        <div className="relative">
          {/* Gradient overlays for better scroll indication */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>

          <div className="flex items-center py-3 overflow-x-auto scrollbar-hide px-4 space-x-2">
            {navLinks.map((link) => (
              <div
                className="flex-shrink-0"
              >
                <Link
                  href={link.path}
                  className={`flex flex-col items-center justify-center px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 whitespace-nowrap ${isActive(link.path)
                    ? 'text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-md scale-105'
                    : 'text-gray-700 dark:text-gray-300 bg-gray-100/80 dark:bg-gray-800/80 hover:bg-gray-200/80 dark:hover:bg-gray-700/80'
                    }`}
                >
                  <span className="text-lg">{link.icon}</span>
                  <span className="text-xs mt-1">{link.name}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
