import { projects } from '@/utl/constData';
import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink } from 'react-icons/fi';
import styles from '@/styles/animations.module.css';
import Button from '../Button';

export default function ProjectsSection() {
    return (
        <section id="projects" className="pb-10">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center mb-16">
                    <h2
                        className={`text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 ${styles.animateSlideUp}`}
                    >
                        Featured Projects
                    </h2>
                    <div
                        className={`w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto ${styles.animateSlideUp} ${styles.delay100}`}
                    ></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.title}
                            className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${styles.projectCard} ${styles.animateSlideUp}`}
                            style={{ animationDelay: `${100 + (index * 50)}ms` }}
                        >
                            <div className="relative h-48 w-full overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className={`${styles.techTag} px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full ${styles.animateFade}`}
                                            style={{ animationDelay: `${150 + (i * 50)}ms` }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex space-x-4">
                                    <Link
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center ${styles.animateFade} ${styles.delay200}`}
                                    >
                                        <FiExternalLink className="w-4 h-4 mr-1" />
                                        Live Demo
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='mt-16'>
                    <Button text="View All Projects" href="/projects" />
                </div>
            </div>
        </section>
    );
}