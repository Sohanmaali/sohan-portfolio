import { education } from '@/utl/constData';
import { FaGraduationCap } from 'react-icons/fa';


export default function Education() {
    return (
        <>
            <section className="mb-20">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                    <FaGraduationCap className="mr-2 text-blue-600" />
                    Education
                </h2>
                <div className="space-y-8">
                    {education.map((edu) => (
                        <div
                            key={edu.id}
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
                        </div>
                    ))}
                </div>
            </section></>
    );
}   