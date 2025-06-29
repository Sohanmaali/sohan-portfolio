import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt, FaLaptopCode } from 'react-icons/fa';
import Image from 'next/image';



const ProjectCard = ({ project }: any) => {
    return (
        <div
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
            <div className="h-48 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <FaLaptopCode className="w-16 h-16 text-gray-300 dark:text-gray-600" />
                    <div className="w-16 h-16 text-gray-300 dark:text-gray-600">

                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>



                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag: any, index: any) => (
                        <span
                            key={index}
                            className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex justify-between items-center mt-4">
                    <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                        <FaGithub className="mr-2" />
                        Code
                    </Link>
                    <Link
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        <FaExternalLinkAlt className="mr-2" />
                        Live Demo
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;