'use client';

import { motion } from 'framer-motion';
import { useAnimation } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { useMotionValue } from 'framer-motion';
import { useTransform } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiGithub, FiExternalLink, FiCode, FiLayers, FiSmartphone, FiBriefcase, FiAward, FiUsers, FiSettings, FiMail, FiMapPin, FiTool, FiServer, FiDatabase } from 'react-icons/fi';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// Bubble component for the cursor effect
interface BubbleProps {
  x: number;
  y: number;
  size: number;
  delay: number;
}

const Bubble = ({ x, y, size, delay }: BubbleProps) => {
  // Generate random gradient colors
  const getRandomGradient = () => {
    const gradients = [
      'linear-gradient(135deg, rgba(96, 165, 250, 0.2), rgba(79, 70, 229, 0.2))',
      'linear-gradient(135deg, rgba(192, 132, 252, 0.2), rgba(168, 85, 247, 0.2))',
      'linear-gradient(135deg, rgba(244, 114, 182, 0.2), rgba(236, 72, 153, 0.2))',
      'linear-gradient(135deg, rgba(103, 232, 249, 0.2), rgba(34, 211, 238, 0.2))',
    ];
    return gradients[Math.floor(Math.random() * gradients.length)];
  };
  
  return (
    <motion.div
      className="absolute rounded-full backdrop-blur-sm"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background: getRandomGradient(),
        left: 0,
        top: 0,
        x: x - size / 2, // Center the bubble
        y: y - size / 2, // Center the bubble
        willChange: 'transform, opacity',
      }}
      initial={{ scale: 0.2, opacity: 0 }}
      animate={{ 
        scale: [0.2, 0.8, 0],
        opacity: [0.4, 0.7, 0],
      }}
      transition={{
        duration: 0.4 + Math.random() * 0.3, // Much faster animation
        delay: delay,
        ease: 'easeOut',
      }}
    />
  );
};



// Project data
const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with payment integration and admin dashboard.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: '#',
    demo: '#',
    image: '/project1.jpg'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates.',
    tags: ['Next.js', 'Firebase', 'Tailwind CSS'],
    github: '#',
    demo: '#',
    image: '/project2.jpg'
  },
];

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

const cardVariants = {
  offscreen: {
    y: 100,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [bubbles, setBubbles] = useState<Array<{x: number, y: number, size: number, id: number}>>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const profileRef = useRef<HTMLDivElement>(null);
  const bubbleId = useRef(0);
  
  // Throttle mouse move events for better performance
  useEffect(() => {
    let lastTime = 0;
    const throttleDelay = 30; // milliseconds
    
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime < throttleDelay) return;
      lastTime = now;
      
      // Create 2-3 smaller bubbles at once for a trail effect
      const bubbleCount = 2 + Math.floor(Math.random() * 2);
      const newBubbles: Array<{x: number, y: number, size: number, id: number}> = [];
      
      for (let i = 0; i < bubbleCount; i++) {
        const offsetX = (Math.random() - 0.5) * 20;
        const offsetY = (Math.random() - 0.5) * 20;
        
        newBubbles.push({
          x: e.clientX + offsetX,
          y: e.clientY + offsetY,
          size: 4 + Math.random() * 8, // Smaller bubbles (4-12px)
          id: bubbleId.current++,
        });
      }
      
      setBubbles(prev => [...prev.slice(-15), ...newBubbles]); // Keep more bubbles for better trail
      
      // Remove bubbles after animation
      newBubbles.forEach(bubble => {
        setTimeout(() => {
          setBubbles(prev => prev.filter(b => b.id !== bubble.id));
        }, 800); // Shorter lifetime
      });
      
      // Update mouse position for profile image tilt
      if (profileRef.current) {
        const rect = profileRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePosition({ x, y });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    setMounted(true);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="pt-16 overflow-x-hidden relative">
      {/* Bubble cursor effect */}
      
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-4rem)] py-12 md:py-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Column - Text Content */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
            >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mb-4">
                Full Stack Developer
              </span>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            >
              Hi, I'm <span className="text-blue-500">Sohan</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8"
            >
              I craft <span className="font-semibold text-blue-600 dark:text-blue-400">exceptional</span> digital experiences through code and creativity.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap justify-center md:justify-start gap-4 mb-12 md:mb-0"
            >
              <Link 
                href="/projects" 
                className="group flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                View My Work
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/contact" 
                className="px-6 py-3.5 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-300 transform hover:-translate-y-1"
              >
                Contact Me
              </Link>
            </motion.div>
            
            {/* Tech Stack */}
            <motion.div 
              variants={fadeInUp}
              className="mt-8 flex flex-wrap justify-center md:justify-start gap-3"
            >
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind'].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1.5 text-sm bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-full text-gray-700 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
            </motion.div>
            
            {/* Right Column - Profile Image */}
            <motion.div 
              ref={profileRef}
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 order-1 lg:order-2 mx-auto cursor-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 dark:from-blue-500/10 dark:to-purple-600/10 rounded-full blur-2xl -z-10"></div>
              
              {/* Profile image container with mouse parallax effect */}
              <motion.div 
                className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  rotateX: mousePosition.y * 10,
                  rotateY: mousePosition.x * 10,
                }}
                transition={{ 
                  type: 'spring',
                  stiffness: 100,
                  damping: 15,
                  mass: 0.5,
                }}
              >
                <span className="text-7xl font-bold text-gray-400 dark:text-gray-600">
                  {/* {Array.from('SO')[0]} */}
                  {/* Sohan */}
                  <img src="/assets/images/sohan.jpg" alt="" />
                </span>
              </motion.div>
              
              {/* Experience badge */}
              <motion.div 
                className="absolute -bottom-2 -left-2 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
                initial={{ opacity: 0, y: 20, x: -10 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <FiCode className="text-blue-600 dark:text-blue-400 text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">2+</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Years Experience</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Projects badge */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
                initial={{ opacity: 0, y: -20, x: 10 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <FiLayers className="text-purple-600 dark:text-purple-400 text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">8+</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Projects Done</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 dark:opacity-5 animate-blob"></div>
          <div className="absolute top-1/2 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 dark:opacity-5 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 dark:opacity-5 animate-blob animation-delay-4000"></div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right_#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom_#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right_#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom_#1f1f1f_1px,transparent_1px)] bg-[size:24px_24px] opacity-10 dark:opacity-5"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <div className="text-center mb-16">
              <motion.span 
                variants={fadeInUp}
                className="inline-block px-4 py-2 text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mb-4"
              >
                About Me
              </motion.span>
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
              >
                Crafting Digital Experiences
              </motion.h2>
              <motion.div 
                variants={fadeInUp}
                className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInUp} className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Who I Am</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Hello! I'm Sohan Maali, a passionate Full Stack Developer with 2+ years of experience in creating exceptional digital experiences. 
                  I specialize in building modern, responsive, and user-centric web applications using cutting-edge technologies.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  My journey in web development started when I built my first website. Since then, I've had the privilege of working with 
                  startups and established companies, helping them bring their ideas to life through clean, efficient, and scalable code.
                </p>
                <div className="pt-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">My Approach</h4>
                  <div className="space-y-3">
                    {[
                      'User-centered design thinking',
                      'Clean, maintainable code',
                      'Performance optimization',
                      'Responsive & accessible interfaces',
                      'Agile development'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                        <span className="text-gray-600 dark:text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="space-y-6"
              >
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    My Technical Expertise
                  </h3>
                  <div className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-300">
                      With over 5 years of experience in full-stack development, I specialize in creating high-performance web applications using modern JavaScript frameworks and cloud technologies.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 flex items-center">
                          <FiCode className="mr-2 text-blue-500" />
                          Frontend
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          React, Next.js, TypeScript, Redux, Tailwind CSS, Responsive Design, Web Performance
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 flex items-center">
                          <FiServer className="mr-2 text-purple-500" />
                          Backend
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Node.js, Express, RESTful APIs, GraphQL, Microservices, Authentication, Caching
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 flex items-center">
                          <FiDatabase className="mr-2 text-green-500" />
                          Database
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          MongoDB, PostgreSQL, Firebase, Redis, ORMs, Database Design, Optimization
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 flex items-center">
                          <FiTool className="mr-2 text-yellow-500" />
                          DevOps & Tools
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Docker, AWS, CI/CD, Git, Testing, Webpack, Vite, Agile/Scrum
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-2">
                    <Link 
                      href="/about" 
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-medium"
                    >
                      Explore Full Technical Stack
                      <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div 
              variants={fadeInUp}
              className="mt-16 text-center"
            >
              <Link 
                href="/resume" 
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
              >
                View My Resume
                <FiArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

{/* Projects Section */}
      <section id="projects" className="pb-10 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
            >
              Featured Projects
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div 
                  key={project.title}
                  variants={fadeInUp}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                    {/* Project image would go here */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      Project Image
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <Link 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <FiGithub className="w-5 h-5" />
                      </Link>
                      <Link 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center"
                      >
                        <FiExternalLink className="w-4 h-4 mr-1" />
                        Live Demo
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div 
              variants={fadeInUp}
              className="text-center mt-12"
            >
              <Link 
                href="/projects" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
              >
                View All Projects
                <FiArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-gray-700 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Have a project in mind?
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            >
              I'm currently available for freelance work. Let's build something amazing together!
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 transition-colors duration-200"
              >
                Get In Touch
                <FiArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 
