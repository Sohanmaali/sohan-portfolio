import { FiArrowRight, FiCode, FiServer, FiTool } from 'react-icons/fi';

export default function Technologies() {
    return <>
        <div className="space-y-12">
            <div >
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
            </div>

            <div >
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
            </div>

            <div >
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
            </div>
        </div>
    </>
}