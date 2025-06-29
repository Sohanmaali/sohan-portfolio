'use client';

import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHome, FaUser, FaCode, FaBriefcase, FaFileAlt, FaInstagram } from 'react-icons/fa';

import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/sohanmaali',
      icon: <FaGithub className="w-5 h-5" />
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/sohanmaali1',
      icon: <FaLinkedin className="w-5 h-5" />
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/sohanmaali7',
      icon: <FaTwitter className="w-5 h-5" />
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/sohan.maali',
      icon: <FaInstagram className="w-5 h-5" />
    },
    {
      name: 'Email',
      url: 'mailto:sohanmaali4@gmail.com',
      icon: <FaEnvelope className="w-5 h-5" />
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '/', icon: <FaHome className="mr-2" /> },
    { name: 'About', href: '#about', icon: <FaUser className="mr-2" /> },
    { name: 'Projects', href: '#projects', icon: <FaCode className="mr-2" /> },
    { name: 'Experience', href: '#experience', icon: <FaBriefcase className="mr-2" /> },
    { name: 'Resume', href: '/resume', icon: <FaFileAlt className="mr-2" /> },
  ];

  return (
    <> <footer className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-t border-gray-200 dark:border-gray-800 mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* About Me */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">About Me</h3>
            <div className="flex items-start space-x-4">
              <div className="relative flex-shrink-0 w-16 h-16">
                <div className="absolute inset-0 rounded-full overflow-hidden border-[3px] border-white/20 dark:border-gray-700/50 shadow-md">
                  <img
                    src="/assets/images/sohan.jpg"
                    alt="Profile Picture"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                    style={{ aspectRatio: '1/1' }}
                  // placeholder="blur"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-blue-500 dark:bg-blue-400 border-2 border-white dark:border-gray-800">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white dark:bg-gray-800"></div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Passionate developer creating beautiful and functional web experiences. Let's build something amazing together!
              </p>
            </div>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                  title={link.name}
                  aria-label={link.name}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Get In Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaEnvelope className="mt-1 mr-3 text-blue-500" />
                <div>
                  <span className="block text-sm text-gray-600 dark:text-gray-300">Email</span>
                  <Link href="mailto:sohanmaali4@gmail.com" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                    sohanmaali4@gmail.com
                  </Link>
                </div>
              </li>
              <li className="flex items-start">
                <FaGithub className="mt-1 mr-3 text-blue-500" />
                <div>
                  <span className="block text-sm text-gray-600 dark:text-gray-300">GitHub</span>
                  <Link
                    href="https://github.com/sohanmaali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    github.com/sohanmaali
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
              © {currentYear} Sohan Maali. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              ❤️
            </p>
          </div>
        </div>
      </div>
    </footer></>
  );
};

export default Footer;
