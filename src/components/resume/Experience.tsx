import { experience } from '@/utl/constData';
import { FaBriefcase } from 'react-icons/fa';


export default function Experience() {

    return <>
        <section className="mb-20"    >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <FaBriefcase className="mr-2 text-blue-600" />
                Work Experience
            </h2>
            <div className="space-y-8">
                {experience.map((exp) => (
                    <div key={exp.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
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
                    </div>
                ))}
            </div>
        </section></>

}