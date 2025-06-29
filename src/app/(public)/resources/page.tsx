'use client';

import { useState } from 'react';
import { FaBook, FaTools, FaYoutube, FaBookOpen, FaLaptopCode, FaGraduationCap, FaLink } from 'react-icons/fa';

import Link from 'next/link';

type Resource = {
  id: number;
  title: string;
  url: string;
  description: string;
  category: 'books' | 'tools' | 'videos' | 'articles' | 'courses';
  icon: React.ReactNode;
};

const resources: Resource[] = [
  // Books
  {
    id: 1,
    title: 'You Don\'t Know JS',
    url: 'https://github.com/getify/You-Dont-Know-JS',
    description: 'A book series on JavaScript',
    category: 'books',
    icon: <FaBook className="text-blue-500" />
  },
  {
    id: 2,
    title: 'Clean Code',
    url: 'https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882',
    description: 'A Handbook of Agile Software Craftsmanship',
    category: 'books',
    icon: <FaBook className="text-blue-500" />
  },

  // Tools
  {
    id: 3,
    title: 'VS Code',
    url: 'https://code.visualstudio.com/',
    description: 'Code editing redefined',
    category: 'tools',
    icon: <FaTools className="text-green-500" />
  },
  {
    id: 4,
    title: 'GitHub',
    url: 'https://github.com/',
    description: 'Version control and collaboration',
    category: 'tools',
    icon: <FaTools className="text-green-500" />
  },

  // Videos
  {
    id: 5,
    title: 'React Tutorial for Beginners',
    url: 'https://youtube.com/playlist?list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&si=QIJb3MOBc2UKbhci',
    description: 'Complete React tutorial by Codevolution',
    category: 'videos',
    icon: <FaYoutube className="text-red-500" />
  },

  // Articles
  {
    id: 6,
    title: 'The React Handbook',
    url: 'https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/',
    description: 'Learn React by Flavio Copes',
    category: 'articles',
    icon: <FaBookOpen className="text-purple-500" />
  },

  // Courses
  {
    id: 7,
    title: 'Complete Next.js Developer',
    url: 'https://www.udemy.com/course/complete-nextjs-developer-zero-to-mastery/',
    description: 'Next.js course by Andrei Neagoie',
    category: 'courses',
    icon: <FaGraduationCap className="text-yellow-500" />
  },
  {
    id: 8,
    title: 'TypeScript Course for Beginners',
    url: 'https://www.udemy.com/course/understanding-typescript/',
    description: 'Learn TypeScript from scratch',
    category: 'courses',
    icon: <FaLaptopCode className="text-blue-600" />
  }
];

const categories = [
  { id: 'all', name: 'All Resources', icon: <FaLink className="mr-2" /> },
  { id: 'books', name: 'Books', icon: <FaBook className="mr-2" /> },
  { id: 'tools', name: 'Tools', icon: <FaTools className="mr-2" /> },
  { id: 'videos', name: 'Videos', icon: <FaYoutube className="mr-2" /> },
  { id: 'articles', name: 'Articles', icon: <FaBookOpen className="mr-2" /> },
  { id: 'courses', name: 'Courses', icon: <FaGraduationCap className="mr-2" /> },
];

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredResources = resources.filter(resource => {
    const matchesCategory = activeCategory === 'all' || resource.category === activeCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8  mt-10">
        <main className="max-w-6xl mx-auto">
          <div
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">Resources</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">A curated collection of learning materials and tools</p>
          </div>

          {/* Search and Filter */}
          <div className="mb-12">
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
            </div>

            <div className="flex flex-wrap justify-center gap-2 ">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id as any)}
                  className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${(activeCategory === category.id)
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                >
                  {category.icon}
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.length > 0 ? (
              filteredResources.map((resource) => (
                <Link
                  key={resource.id}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="h-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700 mr-4">
                          {resource.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {resource.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">{resource.description}</p>
                      <div className="mt-4">
                        <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full">
                          {resource.category.charAt(0).toUpperCase() + resource.category.slice(1)}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-3 text-center py-12">
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">No resources found</h3>
                <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>

          <div
            className="text-center mt-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Have a resource to suggest?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always looking for great resources to add to this collection. If you have any suggestions, I'd love to hear them!
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 text-lg font-medium shadow-lg hover:shadow-xl"
            >
              Suggest a Resource
            </Link>
          </div>
        </main>
      </div></>
  );
}
