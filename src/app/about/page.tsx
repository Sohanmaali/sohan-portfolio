'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { 
  FiArrowRight, 
  FiMapPin, 
  FiAward, 
  FiBriefcase, 
  FiUsers, 
  FiGithub, 
  FiTwitter, 
  FiLinkedin,
  FiCode,
  FiServer,
  FiTool
} from 'react-icons/fi';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import Link from 'next/link';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const AboutPage = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const stats = [
    { value: '5+', label: 'Years Experience', icon: <FiBriefcase className="w-6 h-6" /> },
    { value: '50+', label: 'Projects Completed', icon: <FiCode className="w-6 h-6" /> },
    { value: '30+', label: 'Happy Clients', icon: <FiUsers className="w-6 h-6" /> },
    { value: '10+', label: 'Awards Won', icon: <FiAward className="w-6 h-6" /> },
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com', icon: <FiGithub className="w-5 h-5" /> },
    { name: 'Twitter', url: 'https://twitter.com', icon: <FiTwitter className="w-5 h-5" /> },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: <FiLinkedin className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate={controls}
              variants={stagger}
              className="space-y-2"
            >
              <motion.div variants={fadeInUp}>
                <span className="inline-block px-4 py-2 text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mb-4">
                  About Me
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  Hi, I'm <span className="text-blue-600 dark:text-blue-400">Sohan</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  A passionate Full Stack Developer with expertise in modern web technologies and a love for creating exceptional digital experiences.
                </p>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="grid grid-cols-2 gap-4"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
                    whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                        {stat.icon}
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
                <Link 
                  href="/contact" 
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                >
                  Contact Me
                </Link>
                <Link 
                  href="/projects" 
                  className="px-6 py-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg font-medium transition-colors"
                >
                  View My Work
                </Link>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-center space-x-4 pt-4">
                <span className="text-gray-500 dark:text-gray-400">Follow me:</span>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <Link 
                      key={index} 
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              ref={ref}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={controls}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1]
                  }
                }
              }}
              className="relative"
            >
              <div className="relative z-10 w-full max-w-md mx-auto">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/profile-placeholder.svg"
                    alt="Sohan - Full Stack Developer"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                      <FiMapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Based in</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Indore, India</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-100 dark:bg-blue-900/20 rounded-full -z-10 animate-float" />
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-purple-100 dark:bg-purple-900/20 rounded-full -z-10 animate-float animation-delay-2000" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div 
            initial="hidden"
            animate={controls}
            variants={stagger}
            className="space-y-12"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                My Story
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8" />
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Hello! I'm Sohan, a passionate Full Stack Developer with over 5 years of experience in creating exceptional digital experiences. My journey in web development started when I built my first website, and I've been hooked ever since.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                I specialize in building modern, responsive, and user-centric web applications using cutting-edge technologies. My approach combines clean code, performance optimization, and attention to detail to deliver high-quality solutions that exceed expectations.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community through blog posts and tutorials.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="pt-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                My Technical Expertise
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  'Frontend Development (React, Next.js, TypeScript)',
                  'Backend Development (Node.js, Express, Python)',
                  'Database Design & Optimization',
                  'RESTful & GraphQL APIs',
                  'Cloud & DevOps (AWS, Docker, CI/CD)',
                  'UI/UX Design & Implementation'
                ].map((skill, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                    </div>
                    <p className="ml-3 text-gray-700 dark:text-gray-300">{skill}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="pt-8">
              <Link 
                href="/services" 
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
              >
                Explore My Services
                <FiArrowRight className="ml-2" />
              </Link>
            </motion.div>

            <div className="space-y-12">
              <motion.div variants={fadeInUp}>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <FiCode className="mr-3 text-blue-500" />
                  Frontend Technologies
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {[
                    { name: 'React', icon: '⚛️' },
                    { name: 'Next.js', icon: '▲' },
                    { name: 'TypeScript', icon: 'TS' },
                    { name: 'JavaScript', icon: 'JS' },
                    { name: 'Tailwind CSS', icon: '🎨' },
                    { name: 'Redux', icon: '🔄' },
                    { name: 'GraphQL', icon: '📊' },
                    { name: 'React Native', icon: '📱' },
                  ].map((tech, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <span className="text-2xl">{tech.icon}</span>
                      <span className="font-medium text-gray-700 dark:text-gray-200">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <FiServer className="mr-3 text-purple-500" />
                  Backend Technologies
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {[
                    { name: 'Node.js', icon: '🟢' },
                    { name: 'Express', icon: '🚀' },
                    { name: 'Python', icon: '🐍' },
                    { name: 'Django', icon: 'D' },
                    { name: 'MongoDB', icon: '🍃' },
                    { name: 'PostgreSQL', icon: '🐘' },
                    { name: 'Firebase', icon: '🔥' },
                    { name: 'REST APIs', icon: '🌐' },
                  ].map((tech, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <span className="text-2xl">{tech.icon}</span>
                      <span className="font-medium text-gray-700 dark:text-gray-200">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <FiTool className="mr-3 text-green-500" />
                  Tools & Others
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {[
                    { name: 'Git & GitHub', icon: '🐙' },
                    { name: 'Docker', icon: '🐳' },
                    { name: 'AWS', icon: '☁️' },
                    { name: 'CI/CD', icon: '🔄' },
                    { name: 'Figma', icon: '✏️' },
                    { name: 'Jest', icon: '✅' },
                    { name: 'Webpack', icon: '📦' },
                    { name: 'Linux', icon: '🐧' },
                  ].map((tech, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <span className="text-2xl">{tech.icon}</span>
                      <span className="font-medium text-gray-700 dark:text-gray-200">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div 
              variants={fadeInUp}
              className="mt-16 text-center"
            >
              <Link 
                href="/" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
              >
                <FiArrowRight className="mr-2 transform rotate-180" />
                Back to Home
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
