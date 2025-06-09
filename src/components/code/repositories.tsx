'use client';

import { FiGithub, FiStar, FiGitBranch, FiCode, FiSearch } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Repository {
  id: number;
  name: string;
  description: string;
  url: string;
  language: string;
  stars: number;
  forks: number;
  updated: string;
  topics: string[];
}

interface RepositoriesProps {
  searchTerm: string;
  selectedLanguage: string;
  languages: string[];
  repositories: Repository[];
}

const Repositories = ({
    searchTerm,
  selectedLanguage,
  languages,
  repositories
}: RepositoriesProps) => {
  const filteredRepos = repositories.filter(repo => {
    const matchesSearch = repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      repo.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesLanguage = selectedLanguage === 'All' || repo.language === selectedLanguage;

    return matchesSearch && matchesLanguage;
  });



  return (

    <div className="w-full">


      {/* Repositories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRepos.map((repo) => (
          <motion.div
            key={repo.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  <Link
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {repo.name}
                  </Link>
                </h3>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200">
                  {repo.language}
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {repo.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {repo.topics.map((topic) => (
                  <span
                    key={topic}
                    className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 pt-3 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center">
                    <FiStar className="mr-1" />
                    {repo.stars}
                  </span>
                  <span className="flex items-center">
                    <FiGitBranch className="mr-1" />
                    {repo.forks}
                  </span>
                </div>
                <span>Updated {repo.updated}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

  );
};

export default Repositories;
