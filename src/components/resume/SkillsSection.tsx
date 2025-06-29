"use client"
import { useCallback, useMemo, useState } from 'react';
import { FaCode, FaDatabase, FaLaptopCode, FaNodeJs, FaReact, FaServer, FaTools } from 'react-icons/fa';
import { SiDocker, SiMongodb, SiTypescript } from 'react-icons/si';

const categories = [
    { id: 'all', name: 'All Skills', icon: <FaTools /> },
    { id: 'frontend', name: 'Frontend', icon: <FaCode /> },
    { id: 'backend', name: 'Backend', icon: <FaServer /> },
    { id: 'database', name: 'Database', icon: <FaDatabase /> },
    { id: 'devops', name: 'DevOps', icon: <FaTools /> },
];


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
        icon: <SiMongodb
            className="w-8 h-8 text-green-700" />,
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
export default function SkillsSection() {

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

    return (
        <>
            <section
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
                                    className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category.id
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
                        <div
                            className="grid grid-cols-2 md:grid-cols-3 gap-4"
                        >
                            {filteredSkills.map((skill) => (
                                <div
                                    key={skill.id}
                                    onMouseEnter={() => handleSkillHover(skill.id)}
                                    onMouseLeave={() => handleSkillHover(null)}
                                    className={`p-4 rounded-lg transition-all cursor-pointer ${hoveredSkillId === skill.id
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
                                                <div
                                                    className="h-full bg-blue-500"
                                                    style={{ width: `${skill.level}%` }}
                                                />
                                            </div>
                                            <span className="text-xs text-gray-500 dark:text-gray-300 mt-1 block text-center">
                                                {skill.level}%
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Skill Details */}
                    <div className="w-full md:w-1/2">
                        <div
                            className="sticky top-6 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg h-fit transition-all duration-300"

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
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}