"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiCode, FiDatabase, FiServer, FiTool } from 'react-icons/fi';

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
export default function AboutSection() {

    return <>
        <section id="about" className="py-20 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={stagger}
                >
                    <div className="text-center mb-16">
                        <motion.span
                            variants={fadeInUp}
                            className="inline-block px-4 py-2 text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mb-4"
                        >
                            About Me
                        </motion.span>
                        <motion.h2
                            variants={fadeInUp}
                            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
                        >
                            Crafting Digital Experiences
                        </motion.h2>
                        <motion.div
                            variants={fadeInUp}
                            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div variants={fadeInUp} className="space-y-6">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Who I Am</h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Hello! I'm Sohan Maali, a passionate Full Stack Developer with 2+ years of experience in creating exceptional digital experiences.
                                I specialize in building modern, responsive, and user-centric web applications using cutting-edge technologies.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                My journey in web development started when I built my first website. Since then, I've had the privilege of working with
                                startups and established companies, helping them bring their ideas to life through clean, efficient, and scalable code.
                            </p>
                            <div className="pt-4">
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">My Approach</h4>
                                <div className="space-y-3">
                                    {[
                                        'User-centered design thinking',
                                        'Clean, maintainable code',
                                        'Performance optimization',
                                        'Responsive & accessible interfaces',
                                        'Agile development'
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center">
                                            <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                                            <span className="text-gray-600 dark:text-gray-300">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            className="space-y-6"
                        >
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md space-y-4">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                    My Technical Expertise
                                </h3>
                                <div className="space-y-4">
                                    <p className="text-gray-600 dark:text-gray-300">
                                        With over 2 years of experience in full-stack development, I specialize in creating high-performance web applications using modern JavaScript frameworks and cloud technologies.
                                    </p>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <h4 className="font-semibold text-gray-800 dark:text-gray-200 flex items-center">
                                                <FiCode className="mr-2 text-blue-500" />
                                                Frontend
                                            </h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                React, Next.js, TypeScript, Redux, Tailwind CSS, Responsive Design, Web Performance
                                            </p>
                                        </div>
                                        <div className="space-y-2">
                                            <h4 className="font-semibold text-gray-800 dark:text-gray-200 flex items-center">
                                                <FiServer className="mr-2 text-purple-500" />
                                                Backend
                                            </h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                Node.js, Express, RESTful APIs, GraphQL, Microservices, Authentication, Caching
                                            </p>
                                        </div>
                                        <div className="space-y-2">
                                            <h4 className="font-semibold text-gray-800 dark:text-gray-200 flex items-center">
                                                <FiDatabase className="mr-2 text-green-500" />
                                                Database
                                            </h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                MongoDB, SQL, Redis, ORMs, Database Design, Optimization
                                            </p>
                                        </div>
                                        <div className="space-y-2">
                                            <h4 className="font-semibold text-gray-800 dark:text-gray-200 flex items-center">
                                                <FiTool className="mr-2 text-yellow-500" />
                                                DevOps & Tools
                                            </h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                Docker, AWS, CI/CD, Git, Testing, Webpack, Vite, Agile/Scrum
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-2">
                                    <Link
                                        href="/about"
                                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-medium"
                                    >
                                        Explore Full Technical Stack
                                        <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        variants={fadeInUp}
                        className="mt-16 text-center"
                    >
                        <Link
                            href="/resume"
                            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                        >
                            View My Resume
                            <FiArrowRight className="ml-2" />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section></>
}