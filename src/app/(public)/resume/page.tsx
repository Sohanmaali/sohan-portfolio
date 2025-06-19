'use client';

import { FaGraduationCap, FaBriefcase, FaLaptopCode, FaDownload, FaReact, FaNodeJs, FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiDocker, SiGraphql, SiJavascript, SiHtml5, SiCss3 } from 'react-icons/si';
import { motion, useAnimation, useInView } from 'framer-motion';
import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import Link from 'next/link';

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
   <> <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 mt-20 py-12 px-4 sm:px-6 lg:px-8 dark:from-gray-900 dark:to-gray-800">
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
     <motion.section 
       initial={{ opacity: 0, y: 20 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true }}
       className="mb-20"
     >
       <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
         <FaGraduationCap className="mr-2 text-blue-600" />
         Education
       </h2>
       <div className="space-y-8">
         {education.map((edu) => (
           <motion.div
             key={edu.id}
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
           >
             <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
               <div className="flex-1">
                 <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
               </div>
               <div className="flex-shrink-0">
                 <span className="inline-block px-3 py-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full whitespace-nowrap">
                   {edu.year}
                 </span>
               </div>
             </div>
             <p className="text-lg text-blue-600 dark:text-blue-400 mb-3">{edu.institution}</p>
             <p className="text-gray-600 dark:text-gray-300 mb-4">{edu.description}</p>
             <ul className="space-y-2">
               {edu.achievements.map((achievement, index) => (
                 <li key={index} className="flex items-start">
                   <span className="text-blue-500 mr-2">•</span>
                   <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                 </li>
               ))}
             </ul>
           </motion.div>
         ))}
       </div>
     </motion.section>

     {/* Experience Section */}
     <motion.section 
       initial={{ opacity: 0, y: 20 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true }}
       className="mb-20"
     >
       <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
         <FaBriefcase className="mr-2 text-blue-600" />
         Work Experience
       </h2>
       <div className="space-y-8">
         {experience.map((exp) => (
           <motion.div
             key={exp.id}
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
           >
             <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
               <div className="flex-1">
                 <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
               </div>
               <div className="flex-shrink-0">
                 <span className="inline-block px-3 py-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full whitespace-nowrap">
                   {exp.year}
                 </span>
               </div>
             </div>
             <p className="text-lg text-blue-600 dark:text-blue-400 mb-3">{exp.company}</p>
             <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
             <ul className="space-y-2">
               {exp.responsibilities.map((responsibility, index) => (
                 <li key={index} className="flex items-start">
                   <span className="text-blue-500 mr-2">•</span>
                   <span className="text-gray-600 dark:text-gray-300">{responsibility}</span>
                 </li>
               ))}
             </ul>
           </motion.div>
         ))}
       </div>
     </motion.section>

     {/* Skills Section */}
     <motion.section 
       initial={{ opacity: 0, y: 20 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true }}
       className="mb-20"
     >
       <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">My Skills</h2>
       <div className="flex flex-col md:flex-row gap-8">
         {/* Skills List */}
         <div className="w-full md:w-1/2">
           {/* Category Filters */}
           <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 mb-6">
             {categories.map((category) => (
               <button
                 key={category.id}
                 onClick={() => handleCategoryChange(category.id)}
                 className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                   activeCategory === category.id
                     ? 'bg-blue-600 text-white'
                     : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                 }`}
               >
                 <span className="mr-2">{category.icon}</span>
                 {category.name}
               </button>
             ))}
           </div>

           {/* Skills Grid */}
           <motion.div
             variants={containerVariants}
             initial="hidden"
             animate="show"
             className="grid grid-cols-2 md:grid-cols-3 gap-4"
           >
             {filteredSkills.map((skill) => (
               <motion.div
                 key={skill.id}
                 variants={itemVariants}
                 whileHover={{ scale: 1.05 }}
                 onMouseEnter={() => handleSkillHover(skill.id)}
                 onMouseLeave={() => handleSkillHover(null)}
                 className={`p-4 rounded-lg transition-all cursor-pointer ${
                   hoveredSkillId === skill.id
                     ? 'bg-white dark:bg-gray-700 shadow-lg ring-2 ring-blue-500'
                     : 'bg-white dark:bg-gray-800 shadow-md hover:shadow-lg'
                 }`}
               >
                 <div className="flex flex-col items-center">
                   <div className="w-12 h-12 flex items-center justify-center mb-2">
                     {skill.icon}
                   </div>
                   <h3 className="font-medium text-center">{skill.name}</h3>
                   <div className="w-full mt-2">
                     <div className="h-1.5 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                       <motion.div 
                         className="h-full bg-blue-500"
                         initial={{ width: 0 }}
                         animate={{ width: `${skill.level}%` }}
                         transition={{ duration: 1, delay: 0.2 }}
                       />
                     </div>
                     <span className="text-xs text-gray-500 dark:text-gray-300 mt-1 block text-center">
                       {skill.level}%
                     </span>
                   </div>
                 </div>
               </motion.div>
             ))}
           </motion.div>
         </div>

         {/* Skill Details */}
         <div className="w-full md:w-1/2">
           <motion.div 
             className="sticky top-6 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg h-fit transition-all duration-300"
             initial={{ opacity: 0, x: 20 }}
             animate={{ 
               opacity: currentHoveredSkill ? 1 : 0.8,
               x: 0,
               transition: { duration: 0.3 }
             }}
           >
             {currentHoveredSkill ? (
               <div className="text-center">
                 <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
                   {currentHoveredSkill.icon}
                 </div>
                 <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                   {currentHoveredSkill.name}
                 </h3>
                 <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
                 <p className="text-gray-600 dark:text-gray-300 mb-6">
                   {currentHoveredSkill.description}
                 </p>
                 <div className="flex flex-wrap justify-center gap-2">
                   {currentHoveredSkill.keywords.map((keyword, index) => (
                     <span 
                       key={index}
                       className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                     >
                       {keyword}
                     </span>
                   ))}
                 </div>
               </div>
             ) : (
               <div className="text-center">
                 <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
                   <FaLaptopCode className="w-12 h-12 text-purple-500" />
                 </div>
                 <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                   My Skills
                 </h3>
                 <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
                 <p className="text-gray-600 dark:text-gray-300 px-4">
                   Hover over any skill to see detailed information about my experience, proficiency level, and how I apply these technologies in real-world projects.
                 </p>
               </div>
             )}
           </motion.div>
         </div>
       </div>
     </motion.section>

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
