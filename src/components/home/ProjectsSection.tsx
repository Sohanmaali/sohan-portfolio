"use client";
import { projects } from '@/utl/constData';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiExternalLink } from 'react-icons/fi';
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
export default function ProjectsSection() {
    return <>
        <section id="projects" className="pb-10 ">
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

                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
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
        </section></>
}