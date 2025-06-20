'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaMobile, FaLaptopCode, FaBriefcase } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiTailwindcss, SiTypescript, SiFirebase } from 'react-icons/si';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform with user authentication, product catalog, shopping cart, and payment integration.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com/yourusername/ecommerce-platform',
    demo: 'https://ecommerce-demo.yourdomain.com',
    image: '/images/ecommerce.jpg',
    icons: [
      { icon: <SiReact className="text-blue-500" />, label: 'React' },
      { icon: <SiNodedotjs className="text-green-500" />, label: 'Node.js' },
      { icon: <SiMongodb className="text-green-600" />, label: 'MongoDB' },
    ]
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, task assignments, and progress tracking.',
    tags: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com/yourusername/task-management',
    demo: 'https://tasks.yourdomain.com',
    image: '/images/task-app.jpg',
    icons: [
      { icon: <SiNextdotjs className="text-black dark:text-white" />, label: 'Next.js' },
      { icon: <SiTypescript className="text-blue-600" />, label: 'TypeScript' },
      { icon: <SiFirebase className="text-yellow-500" />, label: 'Firebase' },
    ]
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing projects, skills, and experience with a clean, modern design.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/yourusername/portfolio',
    demo: 'https://yourportfolio.com',
    image: '/images/portfolio.jpg',
    icons: [
      { icon: <SiReact className="text-blue-500" />, label: 'React' },
      { icon: <SiTailwindcss className="text-cyan-400" />, label: 'Tailwind CSS' },
    ]
  },
  {
    id: 4,
    title: 'Recipe Finder App',
    description: 'A mobile-first application to discover and save recipes with filtering by ingredients and dietary restrictions.',
    tags: ['React Native', 'Redux', 'Spoonacular API'],
    github: 'https://github.com/yourusername/recipe-finder',
    demo: 'https://play.google.com/store/apps/recipe-finder',
    image: '/images/recipe-app.jpg',
    icons: [
      { icon: <FaMobile className="text-blue-400" />, label: 'React Native' },
      { icon: <FaServer className="text-purple-500" />, label: 'Redux' },
    ]
  },
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-48 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <FaLaptopCode className="w-16 h-16 text-gray-300 dark:text-gray-600" />
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.icons.map((icon, index) => (
            <span 
              key={index} 
              className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-200"
              title={icon.label}
            >
              {icon.icon}
            </span>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <Link 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <FaGithub className="mr-2" />
            Code
          </Link>
          <Link 
            href={project.demo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FaExternalLinkAlt className="mr-2" />
            Live Demo
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const allTechnologies = ['React', 'Next.js', 'Node.js', 'MongoDB', 'TypeScript', 'Firebase', 'Tailwind CSS', 'React Native', 'Redux'];

export default function ProjectsPage() {
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleTech = (tech: string) => {
    setSelectedTech(prev => 
      prev.includes(tech) 
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    );
  };

  const clearFilters = () => {
    setSelectedTech([]);
    setSearchQuery('');
  };

  const filteredProjects = projects.filter(project => {
    // Filter by selected technologies
    const matchesTech = selectedTech.length === 0 || 
      selectedTech.some(tech => 
        project.tags.some(tag => 
          tag.toLowerCase().includes(tech.toLowerCase())
        )
      );
    
    // Filter by search query
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesTech && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 mt-20 px-4 sm:px-6 lg:px-8 dark:from-gray-900 dark:to-gray-800">
      <main className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 relative"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">My Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">A collection of my recent work and side projects</p>
          
          {/* Search and Filter Section */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  ✕
                </button>
              )}
            </div>
            
            <div className="mt-4">
              <div className="flex flex-wrap gap-2 justify-center">
                {allTechnologies.map((tech) => (
                  <button
                    key={tech}
                    onClick={() => toggleTech(tech)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedTech.includes(tech)
                        ? 'bg-blue-600 text-white'
                        : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    {tech}
                  </button>
                ))}
                {(selectedTech.length > 0 || searchQuery) && (
                  <button
                    onClick={clearFilters}
                    className="px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    Clear all filters
                  </button>
                )}
              </div>
            </div>
          </div>
          
          <div className="flex justify-center gap-4 mt-6">
            <Link 
              href="/resume" 
              className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 shadow-md hover:shadow-lg flex items-center"
            >
              <FaBriefcase className="mr-2" />
              View My Resume
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <div className="col-span-2 text-center py-12">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">No projects found</h3>
              <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
              <button
                onClick={clearFilters}
                className="mt-4 px-4 py-2 text-blue-600 dark:text-blue-400 hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Have a project in mind?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            I'm always open to discussing product design work or partnership opportunities.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 text-lg font-medium shadow-lg hover:shadow-xl"
          >
            Get In Touch
          </Link>
        </motion.div>
      </main>
    </div>
  );
}
