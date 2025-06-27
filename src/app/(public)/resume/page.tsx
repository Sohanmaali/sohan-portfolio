'use client';

import { FaGraduationCap, FaBriefcase, FaLaptopCode, FaDownload, FaReact, FaNodeJs, FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiDocker, SiGraphql, SiJavascript, SiHtml5, SiCss3 } from 'react-icons/si';
import { motion, useAnimation, useInView } from 'framer-motion';
import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import Link from 'next/link';
import SkillsSection from '@/components/resume/SkillsSection';
import Experience from '@/components/resume/Experience';
import Education from '@/components/resume/Education';

const skills = [
  {
    id: 1,
    name: 'React',
    category: 'frontend',
    level: 90,
    icon: <FaReact className="w-8 h-8 text-blue-500" />,
    description: 'Building interactive user interfaces with React and Next.js',
    keywords: ['Hooks', 'Context API', 'Redux', 'Next.js']
  },
  {
    id: 2,
    name: 'TypeScript',
    category: 'frontend',
    level: 85,
    icon: <SiTypescript className="w-8 h-8 text-blue-600" />,
    description: 'Strongly typed JavaScript for better developer experience',
    keywords: ['Type Safety', 'Interfaces', 'Generics']
  },
  {
    id: 3,
    name: 'Node.js',
    category: 'backend',
    level: 80,
    icon: <FaNodeJs className="w-8 h-8 text-green-600" />,
    description: 'Building scalable server-side applications',
    keywords: ['Express', 'REST APIs', 'Authentication']
  },
  {
    id: 4,
    name: 'MongoDB',
    category: 'database',
    level: 75,
    icon: <SiMongodb className="w-8 h-8 text-green-700" />,
    description: 'NoSQL database for modern applications',
    keywords: ['Mongoose', 'Aggregation', 'Indexing']
  },
  {
    id: 5,
    name: 'Docker',
    category: 'devops',
    level: 70,
    icon: <SiDocker className="w-8 h-8 text-blue-400" />,
    description: 'Containerization for development and deployment',
    keywords: ['Containers', 'Docker Compose', 'Kubernetes']
  },
];

const education = [
  {
    id: 1,
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Devi Ahilya Vishwavidyalaya, Indore',
    year: '2020 - 2023',
    description: 'Specialized in Advanced Web Technologies and Cloud Computing',
    achievements: [
      'Scored 8.5 CGPA',
      'Completed major project on E-commerce Platform using MERN Stack',
      'Active participant in coding competitions and hackathons'
    ]
  },
  {
    id: 2,
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Barkatullah University, Bhopal',
    year: '2017 - 2020',
    description: 'Focused on Computer Science fundamentals and software development',
    achievements: [
      'Scored 7.8 CGPA',
      'Developed Library Management System as academic project',
      'Participated in technical symposiums and workshops'
    ]
  },
  {
    id: 3,
    degree: '12th (Senior Secondary)',
    institution: 'Kendriya Vidyalaya, Bhopal',
    year: '2016 - 2017',
    description: 'Science Stream with Computer Science',
    achievements: [
      'Scored 65% in CBSE Board Exams',
      'Participated in school science exhibitions',
      'Member of Computer Club'
    ]
  },
  {
    id: 4,
    degree: '10th (Secondary)',
    institution: 'Kendriya Vidyalaya, Bhopal',
    year: '2014 - 2015',
    description: 'General Studies with focus on Science and Mathematics',
    achievements: [
      'Scored 8.4 CGPA in CBSE Board Exams',
      'Active participant in extracurricular activities',
      'Member of School Quiz Team'
    ]
  }
];

const experience = [
  {
    id: 1,
    role: 'Frontend Developer',
    company: 'Foduu Technologies',
    year: '2023 - Present',
    description: 'Developing modern web applications using React, Next.js, and TypeScript',
    responsibilities: [
      'Building responsive and interactive user interfaces',
      'Implementing state management using Redux Toolkit',
      'Collaborating with backend developers for API integration',
      'Optimizing application performance and implementing best practices',
      'Participating in code reviews and team meetings'
    ]
  },
  {
    id: 2,
    role: 'Trainee',
    company: 'InfoBeans Foundation',
    year: '2022 - 2023',
    description: 'Full-stack development training program',
    responsibilities: [
      'Learned frontend technologies: HTML, CSS, JavaScript, React',
      'Gained experience in backend development with Node.js and Express',
      'Worked on database design and management with MongoDB',
      'Developed and deployed full-stack applications',
      'Participated in team projects and code reviews'
    ]
  }
];

const categories = [
  { id: 'all', name: 'All Skills', icon: <FaTools /> },
  { id: 'frontend', name: 'Frontend', icon: <FaCode /> },
  { id: 'backend', name: 'Backend', icon: <FaServer /> },
  { id: 'database', name: 'Database', icon: <FaDatabase /> },
  { id: 'devops', name: 'DevOps', icon: <FaTools /> },
];

export default function Resume() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredSkillId, setHoveredSkillId] = useState<number | null>(null);

  const filteredSkills = useMemo(() => {
    return activeCategory === 'all'
      ? skills
      : skills.filter(skill => skill.category === activeCategory);
  }, [activeCategory]);

  const currentHoveredSkill = useMemo(() => {
    if (!hoveredSkillId) return null;
    return skills.find(skill => skill.id === hoveredSkillId) || null;
  }, [hoveredSkillId]);

  const handleSkillHover = useCallback((skillId: number | null) => {
    setHoveredSkillId(skillId);
  }, []);

  const handleCategoryChange = useCallback((categoryId: string) => {
    setActiveCategory(categoryId);
    setHoveredSkillId(null);
  }, []);

  const handleDownload = () => {
    // In a real implementation, this would download the PDF version of the resume
    alert('Downloading resume...');
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <> <div className="min-h-screen  mt-20 py-12 px-4 sm:px-6 lg:px-8 dark:from-gray-900 dark:to-gray-800">
      <main className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 relative"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">My Professional Journey</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">Education & Work Experience</p>
          <button
            onClick={handleDownload}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <FaDownload className="mr-2" />
            Download Resume
          </button>
        </motion.div>

        {/* Education Section */}
        <Education />

        {/* Experience Section */}
        <Experience />

        {/* Skills Section */}
        <SkillsSection />

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Let's Work Together</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Interested in working together? I'm always open to discussing product design work or partnership opportunities.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 text-lg font-medium shadow-lg hover:shadow-xl"
          >
            Get In Touch
          </Link>
        </motion.div>
      </main>
    </div></>
  );
}
