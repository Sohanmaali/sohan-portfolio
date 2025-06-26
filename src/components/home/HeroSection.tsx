"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiCode, FiLayers } from 'react-icons/fi';

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


export default function HeroSection() {

    return <>
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
                            Hi, I'm <span className="text-blue-500">Sohan Maali</span>
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
                        // ref={profileRef}
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
                                rotateX: 0,
                                rotateY: 0,
                            }}
                            transition={{
                                type: 'spring',
                                stiffness: 100,
                                damping: 15,
                                mass: 0.5,
                            }}
                        >
                            <span className="text-7xl font-bold text-gray-400 dark:text-gray-600">

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
        </section></>
}