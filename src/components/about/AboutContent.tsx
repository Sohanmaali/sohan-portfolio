"use client";

import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import Technologies from './Technologies';


export default function AboutContent() {

    return (
        <section >
            <div className="max-w-6xl mx-auto px-4 ">
                <div

                    className="space-y-12"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                            My Story
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8" />
                    </div>

                    <div className={`space-y-6`}>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            Hello! I'm Sohan Maali, a passionate Full Stack Developer with over 2 years of experience in creating exceptional digital experiences. My journey in web development started when I built my first website, and I've been hooked ever since.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            I specialize in building modern, responsive, and user-centric web applications using cutting-edge technologies. My approach combines clean code, performance optimization, and attention to detail to deliver high-quality solutions that exceed expectations.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community through blog posts and tutorials.
                        </p>
                    </div>

                    <div className="pt-8">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                            My Technical Expertise
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                'Frontend Development (React, Next.js, TypeScript)',
                                'Backend Development (Node.js, Express, Java)',
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
                    </div>

                    <div className="pt-8">
                        <Link
                            href="/services"
                            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                        >
                            Explore My Services
                            <FiArrowRight className="ml-2" />
                        </Link>
                    </div>

                    <Technologies />
                </div>
            </div>
        </section>
    )
}