"use client"
import { useState } from 'react';
import Link from 'next/link';
import { FaBriefcase } from 'react-icons/fa';

import ProjectCard from '@/components/project/ProjectCard';
import Button from '@/components/Button';

const projects = [
  {
    id: 1,
    title: 'CarMucho',
    description: 'A full-stack e-commerce platform with user authentication, product catalog, shopping cart, and payment integration.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: '#',
    demo: 'https://carmucho.com/',
    image: '/images/projects/carmucho.png'

  },
  {
    id: 2,
    title: 'Scrapify',
    description: 'A collaborative task management application with real-time updates, task assignments, and progress tracking.',
    tags: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    github: '#',
    demo: 'https://scrapify-client-alpha.vercel.app',
    image: '/images/projects/scrapify.png'

  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing projects, skills, and experience with a clean, modern design.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/yourusername/portfolio',
    demo: 'https://showcase-with-sohan.vercel.app',
    image: '/images/projects/portFolio.png',

  },
  {
    id: 4,
    title: 'Chat App',
    description: 'A mobile-first application to discover and save recipes with filtering by ingredients and dietary restrictions.',
    tags: ['React Native', 'Redux', 'Spoonacular API'],
    github: 'https://github.com/yourusername/recipe-finder',
    demo: 'https://play.google.com/store/apps/recipe-finder',
    image: '/images/projects/recipe-app.jpg',

  },
];

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
    <div className="min-h-screen  py-12 mt-10 px-4 sm:px-6 lg:px-8 ">
      <main className="max-w-8xl mx-auto">
        <div
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
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedTech.includes(tech)
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
        </div>

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

        <div
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Have a project in mind?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            I'm always open to discussing product design work or partnership opportunities.
          </p>

          <Button
            text="Get In Touch"
            href="/contact"
          />
        </div>
      </main>
    </div>
  );
}
