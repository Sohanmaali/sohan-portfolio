'use client';

import { useEffect, useState, useCallback } from 'react';
import { FiCode, FiCopy, FiCheck, FiSearch, FiGithub, FiStar, FiGitBranch } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Repositories from '@/components/code/repositories';
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

type TabType = 'snippets' | 'repositories';

interface CodeSnippet {
  id: number;
  title: string;
  description: string;
  language: string;
  code: string;
  tags: string[];
  isExpanded?: boolean;
}

const codeSnippets: CodeSnippet[] = [
  {
    id: 1,
    title: 'Custom Hook: useLocalStorage',
    description: 'A custom React hook to easily use localStorage with React state',
    language: 'TypeScript',
    code: `import { useState, useEffect } from 'react';

function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}`,
    tags: ['react', 'typescript', 'hooks']
  },
  {
    id: 2,
    title: 'Debounce Hook',
    description: 'A custom hook to debounce fast-changing values like search inputs',
    language: 'TypeScript',
    code: `import { useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

// Example usage:
// const [searchTerm, setSearchTerm] = useState('');
// const debouncedSearchTerm = useDebounce(searchTerm, 500);
// useEffect(() => {
//   if (debouncedSearchTerm) {
//     // Make API call or update query
//     searchAPI(debouncedSearchTerm);
//   }
// }, [debouncedSearchTerm]);`,
    tags: ['react', 'typescript', 'hooks', 'performance']
  },
  {
    id: 3,
    title: 'Click Outside Hook',
    description: 'A hook that triggers a callback when clicking outside a specified element',
    language: 'TypeScript',
    code: `import { RefObject, useEffect } from 'react';

type Event = MouseEvent | TouchEvent;

export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: Event) => void,
) {
  useEffect(() => {
    const listener = (event: Event) => {
      if (!ref.current || ref.current.contains(event?.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

// Example usage:
// const ref = useRef<HTMLDivElement>(null);
// useOnClickOutside(ref, () => setIsOpen(false));`,
    tags: ['react', 'typescript', 'hooks', 'ui']
  },
  {
    id: 4,
    title: 'Dark Mode Hook',
    description: 'A hook to handle dark mode with system preference detection',
    language: 'TypeScript',
    code: `import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark' | 'system';

export function useDarkMode() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as Theme) || 'system';
    }
    return 'system';
  });

  const prefersDark = useMediaQuery('(prefers-color-scheme: dark)');
  const isDark = theme === 'dark' || (theme === 'system' && prefersDark);

  useEffect(() => {
    const root = window.document.documentElement;
    
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    localStorage.setItem('theme', theme);
  }, [theme, isDark]);

  const toggleTheme = () => {
    setTheme(prev => {
      if (prev === 'light') return 'dark';
      if (prev === 'dark') return 'system';
      return 'light';
    });
  };

  return { theme, setTheme, isDark, toggleTheme };
}

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}`,
    tags: ['react', 'typescript', 'hooks', 'dark-mode', 'ui']
  },
  {
    id: 5,
    title: 'Pagination Hook',
    description: 'A custom hook for handling pagination logic',
    language: 'TypeScript',
    code: `import { useState, useMemo } from 'react';

interface UsePaginationProps {
  totalItems: number;
  itemsPerPage: number;
  initialPage?: number;
}

export function usePagination({ totalItems, itemsPerPage, initialPage = 1 }: UsePaginationProps) {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginationRange = useMemo(() => {
    const range: (number | '...')[] = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        range.push(i);
      }
    } else {
      range.push(1);
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);

      if (currentPage <= 3) {
        range.push(2, 3, 4);
        range.push('...');
      } else if (currentPage >= totalPages - 2) {
        range.push('...');
        range.push(totalPages - 2, totalPages - 1);
      } else {
        range.push('...');
        range.push(startPage, currentPage, endPage);
        range.push('...');
      }
      range.push(totalPages);
    }

    return range;
  }, [currentPage, totalPages]);

  const setPage = (page: number) => {
    const pageNumber = Math.max(1, Math.min(page, totalPages));
    setCurrentPage(pageNumber);
  };

  const nextPage = () => setPage(currentPage + 1);
  const prevPage = () => setPage(currentPage - 1);
  const firstPage = () => setPage(1);
  const lastPage = () => setPage(totalPages);

  const canNextPage = currentPage < totalPages;
  const canPrevPage = currentPage > 1;

  return {
    currentPage,
    totalPages,
    pageSize: itemsPerPage,
    setPage,
    nextPage,
    prevPage,
    firstPage,
    lastPage,
    canNextPage,
    canPrevPage,
    paginationRange,
  };
}`,
    tags: ['react', 'typescript', 'hooks', 'pagination']
  },
  {
    id: 6,
    title: 'API Fetch Hook',
    description: 'A custom hook for handling API requests with loading and error states',
    language: 'TypeScript',
    code: `import { useState, useCallback } from 'react';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

interface FetchOptions extends RequestInit {
  method?: HttpMethod;
  headers?: HeadersInit;
  body?: BodyInit | Record<string, unknown> | null;
}

interface UseFetchReturn<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  fetchData: (url: string, options?: FetchOptions) => Promise<void>;
  reset: () => void;
}

export function useFetch<T = unknown>(): UseFetchReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async (url: string, options: FetchOptions = {}) => {
    setLoading(true);
    setError(null);

    try {
      const { method = 'GET', headers = {}, body, ...restOptions } = options;
      
      const config: RequestInit = {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
        ...restOptions,
      };

      if (body && method !== 'GET' && method !== 'HEAD') {
        config.body = typeof body === 'object' ? JSON.stringify(body) : (body as BodyInit);
      }

      const response = await fetch(url, config);

      if (!response.ok) {
        throw new Error(\`HTTP error! status: response.status\`);
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  }, []);

  const reset = useCallback(() => {
    setData(null);
    setError(null);
    setLoading(false);
  }, []);

  return { data, loading, error, fetchData, reset };
}`,
    tags: ['react', 'typescript', 'hooks', 'api', 'fetch']
  }
];


const languages = ['All', 'TypeScript', 'JavaScript', 'CSS', 'HTML'];

const repositories: Repository[] = [
  {
    id: 1,
    name: 'portfolio',
    description: 'My personal portfolio website built with Next.js and Tailwind CSS',
    url: 'https://github.com/yourusername/portfolio',
    language: 'TypeScript',
    stars: 24,
    forks: 5,
    updated: '2 days ago',
    topics: ['nextjs', 'tailwindcss', 'typescript']
  },
  {
    id: 2,
    name: 'ecommerce-platform',
    description: 'Full-stack e-commerce solution with React and Node.js',
    url: 'https://github.com/yourusername/ecommerce',
    language: 'JavaScript',
    stars: 42,
    forks: 12,
    updated: '1 week ago',
    topics: ['react', 'nodejs', 'mongodb']
  },
  {
    id: 3,
    name: 'task-manager',
    description: 'Task management application with real-time updates',
    url: 'https://github.com/yourusername/task-manager',
    language: 'TypeScript',
    stars: 18,
    forks: 3,
    updated: '3 days ago',
    topics: ['react', 'typescript', 'firebase']
  },
  {
    id: 4,
    name: 'ui-components',
    description: 'Reusable UI component library',
    url: 'https://github.com/yourusername/ui-components',
    language: 'TypeScript',
    stars: 15,
    forks: 2,
    updated: '1 month ago',
    topics: ['react', 'storybook', 'typescript']
  },
  {
    id: 5,
    name: 'blog-api',
    description: 'RESTful API for blog application',
    url: 'https://github.com/yourusername/blog-api',
    language: 'JavaScript',
    stars: 8,
    forks: 1,
    updated: '2 weeks ago',
    topics: ['nodejs', 'express', 'mongodb']
  },
  {
    id: 6,
    name: 'data-visualization',
    description: 'Interactive data visualization dashboard',
    url: 'https://github.com/yourusername/data-viz',
    language: 'TypeScript',
    stars: 31,
    forks: 7,
    updated: '5 days ago',
    topics: ['react', 'd3', 'typescript']
  }
];


export default function CodePage() {
  const [activeTab, setActiveTab] = useState<TabType>('snippets');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [copiedSnippetId, setCopiedSnippetId] = useState<number | null>(null);
  const [expandedSnippets, setExpandedSnippets] = useState<{ [key: number]: boolean }>({});
  const [selectedLanguage, setSelectedLanguage] = useState<string>('All');

  const toggleSnippet = (id: number) => {
    setExpandedSnippets(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const copyToClipboard = async (code: string, id: number) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedSnippetId(id);
      setTimeout(() => setCopiedSnippetId(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // Filter snippets based on search term, selected tag, and language
  const filteredSnippets = codeSnippets.filter(snippet => {
    const matchesSearch = snippet.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      snippet.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      snippet.tags.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesTag = !selectedTag || snippet.tags.includes(selectedTag);
    const matchesLanguage = selectedLanguage === 'All' || snippet.language === selectedLanguage;

    return matchesSearch && matchesTag && matchesLanguage;
  });


  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedTag(null);
    setSelectedLanguage('All');
  };

  // Get unique tags from all snippets
  const allTags = Array.from(new Set(codeSnippets.flatMap((snippet: CodeSnippet) => snippet.tags))).sort();

  return (
    <>

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 mt-20 px-4 sm:px-6 lg:px-8 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl font-bold mb-4">Code Snippets</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                A collection of useful code snippets and projects
              </p>
            </motion.div>

            <div className="flex justify-center mb-8">
              <div className="inline-flex rounded-md shadow-sm">
                <button
                  onClick={() => setActiveTab('snippets')}
                  className={`px-4 py-2 text-sm font-medium rounded-l-lg ${activeTab === 'snippets'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                >
                  Snippets
                </button>
                <button
                  onClick={() => setActiveTab('repositories')}
                  className={`px-4 py-2 text-sm font-medium rounded-r-lg ${activeTab === 'repositories'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                >
                  Repositories
                </button>
              </div>
            </div>
            {/* Search and Filters */}
            <div className="mb-12">
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiSearch className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search repositories..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm('')}
                      className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {languages.map((language) => (
                  <button
                    key={language}
                    onClick={() => setSelectedLanguage(language)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedLanguage === language
                      ? 'bg-blue-600 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                  >
                    {language}
                  </button>
                ))}
              </div>
            </div>


            {activeTab === 'snippets' ? (
              <>


                <div className="grid grid-cols-1 gap-8">
                  {filteredSnippets.length > 0 ? (
                    filteredSnippets.map((snippet) => (
                      <motion.div
                        key={snippet.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                      >
                        <div
                          className="p-5 sm:p-6 cursor-pointer"
                          onClick={() => toggleSnippet(snippet.id)}
                        >
                          <div className="flex justify-between items-start gap-3">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <motion.div
                                  animate={{ rotate: expandedSnippets[snippet.id] ? 90 : 0 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </motion.div>
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                                  {snippet.title}
                                </h2>
                              </div>
                              <p className="mt-2 text-gray-600 dark:text-gray-300">
                                {snippet.description}
                              </p>
                              <div className="mt-3 flex flex-wrap gap-2 mb-4">
                                {snippet.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${selectedTag === tag
                                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100'
                                      : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                                      }`}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setSelectedTag(selectedTag === tag ? null : tag);
                                    }}
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                copyToClipboard(snippet.code, snippet.id);
                              }}
                              className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                              title="Copy to clipboard"
                            >
                              {copiedSnippetId === snippet.id ? (
                                <FiCheck className="h-5 w-5 text-green-500" />
                              ) : (
                                <FiCopy className="h-5 w-5" />
                              )}
                            </button>
                          </div>

                          <AnimatePresence>
                            {expandedSnippets[snippet.id] && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="mt-4 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50">
                                  <div className="relative">
                                    <SyntaxHighlighter
                                      language={snippet.language}
                                      style={atomDark}
                                      customStyle={{
                                        margin: 0,
                                        fontSize: '0.875rem',
                                        background: '#1a1b26',
                                        borderRadius: '0.5rem',
                                        padding: '1.5rem',
                                        overflowX: 'auto'
                                      }}
                                      showLineNumbers
                                    >
                                      {snippet.code}
                                    </SyntaxHighlighter>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <div className="col-span-3 text-center py-12">
                      <FiCode className="mx-auto h-12 w-12 text-gray-400" />
                      <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-white">No snippets found</h3>
                      <p className="mt-1 text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
                      <button
                        onClick={() => {
                          setSearchTerm('');
                          setSelectedTag(null);
                        }}
                        className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 dark:text-blue-200 dark:bg-blue-900/30 dark:hover:bg-blue-800/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Clear all filters
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="mt-8">
                <Repositories 
                  searchTerm={searchTerm}
                  selectedLanguage={selectedLanguage}
                  languages={languages}
                  repositories={repositories}
                />
              </div>
            )}

            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Want to see more?</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Check out my GitHub profile for more code examples and projects.
              </p>
              <Link
                href="https://github.com/sohanmaali"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors duration-300 text-lg font-medium shadow-lg hover:shadow-xl dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
              >
                View on GitHub
                <FiGithub className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

    </>
  );
}
