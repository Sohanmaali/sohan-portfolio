import { FiCode, FiServer, FiTool, FiDatabase, FiLayers, FiSmartphone, FiShield, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

const services = [
    {
        icon: <FiCode className="w-8 h-8 text-blue-500" />,
        title: 'Web Development',
        description: 'Crafting responsive, high-performance web applications using modern technologies. Specializing in React, Next.js, and TypeScript to deliver fast, SEO-friendly, and scalable solutions that drive engagement and conversions.',
        tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'Framer Motion'],
        features: [
            'Custom web application development',
            'Progressive Web Apps (PWA)',
            'Single Page Applications (SPA)',
            'Server-side rendering (SSR)',
            'API integration'
        ]
    },
    {
        icon: <FiServer className="w-8 h-8 text-purple-500" />,
        title: 'Backend Development',
        description: 'Building robust, secure, and scalable server-side applications. Expertise in designing RESTful APIs, microservices architecture, and real-time applications with WebSockets.',
        tags: ['Node.js', 'Express', 'NestJS', 'REST APIs', 'GraphQL', 'WebSockets'],
        features: [
            'Custom API development',
            'Microservices architecture',
            'Authentication & authorization',
            'Payment gateway integration',
            'Third-party API integration'
        ]
    },
    {
        icon: <FiSmartphone className="w-8 h-8 text-green-500" />,
        title: 'Mobile Development',
        description: 'Creating cross-platform mobile applications with React Native that provide native-like performance. From concept to deployment, I ensure smooth user experiences across iOS and Android platforms.',
        tags: ['React Native', 'Expo', 'iOS', 'Android', 'Redux', 'Firebase'],
        features: [
            'Cross-platform mobile apps',
            'Offline-first applications',
            'Push notifications',
            'In-app purchases',
            'App store deployment'
        ]
    },
    {
        icon: <FiDatabase className="w-8 h-8 text-yellow-500" />,
        title: 'Database Design & Optimization',
        description: 'Expert database architecture design and optimization for both SQL and NoSQL databases. Ensuring data integrity, security, and performance at scale.',
        tags: ['MongoDB', 'PostgreSQL', 'Firebase', 'Redis', 'MySQL', 'Prisma'],
        features: [
            'Database design & modeling',
            'Query optimization',
            'Data migration',
            'Backup & recovery',
            'Performance tuning'
        ]
    },
    {
        icon: <FiLayers className="w-8 h-8 text-pink-500" />,
        title: 'Full-Stack Solutions',
        description: 'End-to-end development services from concept to deployment. Seamless integration between frontend and backend systems with a focus on performance and user experience.',
        tags: ['MERN Stack', 'Next.js', 'GraphQL', 'Microservices', 'Docker', 'AWS'],
        features: [
            'Complete project lifecycle',
            'System architecture design',
            'Third-party service integration',
            'Testing & quality assurance',
            'Deployment & maintenance'
        ]
    },
    {
        icon: <FiTool className="w-8 h-8 text-indigo-500" />,
        title: 'DevOps & Cloud Services',
        description: 'Implementing CI/CD pipelines, containerization, and cloud infrastructure to ensure your applications are scalable, secure, and highly available.',
        tags: ['Docker', 'AWS', 'CI/CD', 'GitHub Actions', 'Kubernetes', 'Nginx'],
        features: [
            'CI/CD pipeline setup',
            'Container orchestration',
            'Cloud infrastructure',
            'Auto-scaling solutions',
            'Monitoring & logging'
        ]
    },
    {
        icon: <FiShield className="w-8 h-8 text-red-500" />,
        title: 'Security & Performance',
        description: 'Comprehensive security audits, performance optimization, and implementation of best practices to protect and enhance your applications.',
        tags: ['OWASP', 'Lighthouse', 'Web Vitals', 'JWT', 'OAuth', 'Helmet'],
        features: [
            'Security vulnerability assessment',
            'Performance optimization',
            'Code review & analysis',
            'GDPR & compliance',
            'Penetration testing'
        ]
    },
    {
        icon: <FiCode className="w-8 h-8 text-teal-500" />,
        title: 'Code Review & Mentoring',
        description: 'Expert code reviews, technical guidance, and team mentoring to maintain high development standards and foster growth within your team.',
        tags: ['Code Review', 'Best Practices', 'Mentoring', 'Documentation', 'Pair Programming', 'Tech Talks'],
        features: [
            'Code quality assessment',
            'Technical documentation',
            'Team training sessions',
            'Architecture guidance',
            'Best practices implementation'
        ]
    },
    {
        icon: <FiLayers className="w-8 h-8 text-orange-500" />,
        title: 'UI/UX Design',
        description: 'Creating intuitive and visually appealing user interfaces that enhance user experience and drive engagement.',
        tags: ['Figma', 'Adobe XD', 'User Research', 'Prototyping', 'UI/UX', 'Responsive Design'],
        features: [
            'User research & analysis',
            'Wireframing & prototyping',
            'UI/UX design',
            'Design systems',
            'Usability testing'
        ]
    },
    {
        icon: <FiServer className="w-8 h-8 text-cyan-500" />,
        title: 'API Development & Integration',
        description: 'Building robust and well-documented APIs with comprehensive integration support for various platforms and services.',
        tags: ['REST', 'GraphQL', 'Webhooks', 'OAuth', 'Swagger', 'Postman'],
        features: [
            'Custom API development',
            'Third-party API integration',
            'API documentation',
            'Authentication setup',
            'Rate limiting & throttling'
        ]
    }
];

export default function MyServices() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-900/50 overflow-hidden relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"></div>
                        <div className="relative z-10">
                            <div className="flex items-center mb-4">
                                <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 mr-4 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                    {service.title}
                                </h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                {service.description}
                            </p>

                            {service.features && (
                                <div className="mt-4 mb-4">
                                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">KEY FEATURES:</h4>
                                    <ul className="space-y-1.5">
                                        {service.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-start">
                                                <svg className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div className="flex flex-wrap gap-2 mt-4">
                                {service.tags.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className="px-2.5 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors duration-200"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-end">
                                <Link
                                    href="/contact"
                                    className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 group"
                                >
                                    Get started
                                    <FiArrowRight className="ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </>
    );
}