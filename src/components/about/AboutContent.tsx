"use client"
import { motion, useAnimation, useInView } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { FiArrowRight, FiCode, FiServer, FiTool } from 'react-icons/fi';

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
export default function AboutContent() {

    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [controls, isInView]);

    return <>
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
    </>

}