'use client';

import { motion } from 'framer-motion';
import { FiCode, FiServer, FiTool, FiDatabase, FiLayers, FiSmartphone, FiShield, FiArrowRight } from 'react-icons/fi';
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

const services = [
  {
    icon: <FiCode className="w-8 h-8 text-blue-500" />,
    title: 'Web Development',
    description: 'Crafting responsive, high-performance web applications using modern technologies. Specializing in React, Next.js, and TypeScript to deliver fast, SEO-friendly, and scalable solutions that drive engagement and conversions.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'Framer Motion'],
    features: [
      'Custom web application development',
      'Progressive Web Apps (PWA)',
      'Single Page Applications (SPA)',
      'Server-side rendering (SSR)',
      'API integration'
    ]
  },
  {
    icon: <FiServer className="w-8 h-8 text-purple-500" />,
    title: 'Backend Development',
    description: 'Building robust, secure, and scalable server-side applications. Expertise in designing RESTful APIs, microservices architecture, and real-time applications with WebSockets.',
    tags: ['Node.js', 'Express', 'NestJS', 'REST APIs', 'GraphQL', 'WebSockets'],
    features: [
      'Custom API development',
      'Microservices architecture',
      'Authentication & authorization',
      'Payment gateway integration',
      'Third-party API integration'
    ]
  },
  {
    icon: <FiSmartphone className="w-8 h-8 text-green-500" />,
    title: 'Mobile Development',
    description: 'Creating cross-platform mobile applications with React Native that provide native-like performance. From concept to deployment, I ensure smooth user experiences across iOS and Android platforms.',
    tags: ['React Native', 'Expo', 'iOS', 'Android', 'Redux', 'Firebase'],
    features: [
      'Cross-platform mobile apps',
      'Offline-first applications',
      'Push notifications',
      'In-app purchases',
      'App store deployment'
    ]
  },
  {
    icon: <FiDatabase className="w-8 h-8 text-yellow-500" />,
    title: 'Database Design & Optimization',
    description: 'Expert database architecture design and optimization for both SQL and NoSQL databases. Ensuring data integrity, security, and performance at scale.',
    tags: ['MongoDB', 'PostgreSQL', 'Firebase', 'Redis', 'MySQL', 'Prisma'],
    features: [
      'Database design & modeling',
      'Query optimization',
      'Data migration',
      'Backup & recovery',
      'Performance tuning'
    ]
  },
  {
    icon: <FiLayers className="w-8 h-8 text-pink-500" />,
    title: 'Full-Stack Solutions',
    description: 'End-to-end development services from concept to deployment. Seamless integration between frontend and backend systems with a focus on performance and user experience.',
    tags: ['MERN Stack', 'Next.js', 'GraphQL', 'Microservices', 'Docker', 'AWS'],
    features: [
      'Complete project lifecycle',
      'System architecture design',
      'Third-party service integration',
      'Testing & quality assurance',
      'Deployment & maintenance'
    ]
  },
  {
    icon: <FiTool className="w-8 h-8 text-indigo-500" />,
    title: 'DevOps & Cloud Services',
    description: 'Implementing CI/CD pipelines, containerization, and cloud infrastructure to ensure your applications are scalable, secure, and highly available.',
    tags: ['Docker', 'AWS', 'CI/CD', 'GitHub Actions', 'Kubernetes', 'Nginx'],
    features: [
      'CI/CD pipeline setup',
      'Container orchestration',
      'Cloud infrastructure',
      'Auto-scaling solutions',
      'Monitoring & logging'
    ]
  },
  {
    icon: <FiShield className="w-8 h-8 text-red-500" />,
    title: 'Security & Performance',
    description: 'Comprehensive security audits, performance optimization, and implementation of best practices to protect and enhance your applications.',
    tags: ['OWASP', 'Lighthouse', 'Web Vitals', 'JWT', 'OAuth', 'Helmet'],
    features: [
      'Security vulnerability assessment',
      'Performance optimization',
      'Code review & analysis',
      'GDPR & compliance',
      'Penetration testing'
    ]
  },
  {
    icon: <FiCode className="w-8 h-8 text-teal-500" />,
    title: 'Code Review & Mentoring',
    description: 'Expert code reviews, technical guidance, and team mentoring to maintain high development standards and foster growth within your team.',
    tags: ['Code Review', 'Best Practices', 'Mentoring', 'Documentation', 'Pair Programming', 'Tech Talks'],
    features: [
      'Code quality assessment',
      'Technical documentation',
      'Team training sessions',
      'Architecture guidance',
      'Best practices implementation'
    ]
  },
  {
    icon: <FiLayers className="w-8 h-8 text-orange-500" />,
    title: 'UI/UX Design',
    description: 'Creating intuitive and visually appealing user interfaces that enhance user experience and drive engagement.',
    tags: ['Figma', 'Adobe XD', 'User Research', 'Prototyping', 'UI/UX', 'Responsive Design'],
    features: [
      'User research & analysis',
      'Wireframing & prototyping',
      'UI/UX design',
      'Design systems',
      'Usability testing'
    ]
  },
  {
    icon: <FiServer className="w-8 h-8 text-cyan-500" />,
    title: 'API Development & Integration',
    description: 'Building robust and well-documented APIs with comprehensive integration support for various platforms and services.',
    tags: ['REST', 'GraphQL', 'Webhooks', 'OAuth', 'Swagger', 'Postman'],
    features: [
      'Custom API development',
      'Third-party API integration',
      'API documentation',
      'Authentication setup',
      'Rate limiting & throttling'
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <div className="text-center mb-16">
              <motion.span 
                variants={fadeInUp}
                className="inline-block px-4 py-2 text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mb-4"
              >
                What I Offer
              </motion.span>
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
              >
                My Services
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              >
                Comprehensive web development services to bring your ideas to life with cutting-edge technologies and best practices.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-900/50 overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"></div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 mr-4 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors duration-300">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {service.description}
                    </p>
                    
                    {service.features && (
                      <div className="mt-4 mb-4">
                        <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">KEY FEATURES:</h4>
                        <ul className="space-y-1.5">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <svg className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      {service.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-2.5 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors duration-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-end">
                      <Link 
                        href="/contact" 
                        className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 group"
                      >
                        Get started
                        <FiArrowRight className="ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            
          </motion.div>

          {/* Process Section - Redesigned */}
          <div className=" py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.6 }
                  }
                }}
                className="text-center mb-16"
              >
                <motion.span 
                  className="inline-block px-4 py-2 text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mb-4"
                >
                  My Process
                </motion.span>
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
                >
                  How I Work
                </motion.h2>
                <motion.p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                  A transparent and collaborative approach to bringing your ideas to life
                </motion.p>
              </motion.div>

              <div className="relative">
                {/* Horizontal timeline line */}
                <div className="hidden lg:block absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform -translate-y-1/2 z-0"></div>
                
                {/* Process Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
                  {[
                    {
                      step: '1',
                      title: 'Discovery',
                      description: 'In-depth consultation to understand your business goals and requirements.',
                      icon: (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                      ),
                      color: 'from-blue-500 to-blue-600',
                      delay: 0.1
                    },
                    {
                      step: '2',
                      title: 'Strategy',
                      description: 'Creating a comprehensive plan and roadmap for your project.',
                      icon: (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                        </svg>
                      ),
                      color: 'from-purple-500 to-purple-600',
                      delay: 0.2
                    },
                    {
                      step: '3',
                      title: 'Design & Build',
                      description: 'Transforming ideas into beautiful, functional digital products.',
                      icon: (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                      ),
                      color: 'from-pink-500 to-pink-600',
                      delay: 0.3
                    },
                    {
                      step: '4',
                      title: 'Testing',
                      description: 'Rigorous testing to ensure quality and performance standards.',
                      icon: (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      ),
                      color: 'from-yellow-500 to-yellow-600',
                      delay: 0.4
                    },
                    {
                      step: '5',
                      title: 'Launch & Beyond',
                      description: 'Deployment and ongoing support for continued success.',
                      icon: (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      ),
                      color: 'from-green-500 to-green-600',
                      delay: 0.5
                    }
                  ].map((step, index) => (
                    <motion.div
                      key={step.step}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: step.delay }}
                      className="group"
                    >
                      <div className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                        {/* Step Number */}
                        <div className={`absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-r ${step.color} text-white flex items-center justify-center text-lg font-bold shadow-lg`}>
                          {step.step}
                        </div>
                        
                        {/* Icon */}
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} text-white flex items-center justify-center text-2xl mb-4 mx-auto group-hover:rotate-6 transition-transform duration-300`}>
                          {step.icon}
                        </div>
                        
                        {/* Content */}
                        <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-center flex-grow">
                          {step.description}
                        </p>
                        
                        {/* Connector for mobile */}
                        <div className="lg:hidden flex justify-center mt-4">
                          <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                          </svg>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Me Section */}
          <div className=" py-8 rounded-3xl overflow-hidden relative">
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
              <div className="absolute -bottom-20 left-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
            </div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <motion.span 
                  variants={fadeInUp}
                  className="inline-block px-4 py-2 text-sm font-medium bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 rounded-full mb-4 shadow-sm"
                >
                  Why Choose Me
                </motion.span>
                <motion.h2 
                  variants={fadeInUp}
                  className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
                >
                  What Makes Me Different
                </motion.h2>
                <motion.p 
                  variants={fadeInUp}
                  className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300"
                >
                  I combine technical expertise with a passion for creating exceptional digital experiences that drive results.
                </motion.p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: (
                      <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    ),
                    title: 'Lightning Fast',
                    description: 'Optimized code and modern architecture ensure your applications load quickly and run smoothly.',
                    stat: '100%',
                    statLabel: 'Performance Focused'
                  },
                  {
                    icon: (
                      <svg className="w-10 h-10 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                      </svg>
                    ),
                    title: 'Secure by Design',
                    description: 'Built-in security measures and best practices to protect your data and users.',
                    stat: '24/7',
                    statLabel: 'Security Monitoring'
                  },
                  {
                    icon: (
                      <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                    ),
                    title: 'Reliable Support',
                    description: 'Dedicated support and maintenance to ensure your project\'s long-term success.',
                    stat: '99.9%',
                    statLabel: 'Uptime Guarantee'
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    variants={fadeInUp}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                      {item.description}
                    </p>
                    <div className="text-center">
                      <span className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                        {item.stat}
                      </span>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {item.statLabel}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-16 grid md:grid-cols-3 gap-8">
                {[
                  {
                    number: '8+',
                    label: 'Projects Completed',
                    description: 'Delivered successful projects to clients worldwide'
                  },
                  {
                    number: '98%',
                    label: 'Client Satisfaction',
                    description: 'Consistently high ratings from happy clients'
                  },
                  {
                    number: '2+',
                    label: 'Years Experience',
                    description: 'Building cutting-edge digital solutions'
                  }
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    variants={fadeInUp}
                    transition={{ delay: 0.3 + (index * 0.1) }}
                    className="text-center card bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                  >
                    <div className="text-5xl  font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {stat.label}
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400">
                      {stat.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <motion.div 
              variants={fadeInUp}
              className="mt-8 text-center"
            >
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
              >
                Get In Touch
                <FiArrowRight className="ml-2" />
              </Link>
            </motion.div>
        </div>
      </section>
    </div>
  );
}

// Add custom animation for the blob effect
const styles = `
  @keyframes blob {
    0% {
      transform: translate(0px, 0px) scale(1);
    }
    33% {
      transform: translate(30px, -50px) scale(1.1);
    }
    66% {
      transform: translate(-20px, 20px) scale(0.9);
    }
    100% {
      transform: translate(0px, 0px) scale(1);
    }
  }
  .animate-blob {
    animation: blob 7s infinite;
  }
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  .animation-delay-4000 {
    animation-delay: 4s;
  }
`;

// Add styles to the head
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}
