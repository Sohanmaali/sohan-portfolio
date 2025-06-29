import Link from 'next/link';
import { FiArrowRight, FiCode, FiDatabase, FiServer, FiTool } from 'react-icons/fi';
import styles from '../../styles/animations.module.css';

export default function AboutSection() {

    return (
        <section
            id="about"
            className="pb-10"
        >
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div>
                    <div className="text-center mb-16">
                        <span className={`${styles.slideUp} ${styles['delay-100']} inline-block px-4 py-2 text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mb-4`}>
                            About Me
                        </span>
                        <h2 className={`${styles.slideUp} ${styles['delay-200']} text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6`}>
                            Crafting Digital Experiences
                        </h2>
                        <div className={`${styles.slideUp} ${styles['delay-300']} w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8`} />
                    </div>

                    <div className={`grid md:grid-cols-2 gap-12 items-center ${styles.fadeIn} ${styles['delay-400']}`}>
                        <div className={` space-y-6`}>
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
                                <div className={`space-y-3 ${styles.slideUp} ${styles['delay-500']}`}>
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
                        </div>

                        <div className={` space-y-6`}>
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md space-y-4">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                    My Technical Expertise
                                </h3>
                                <div className="space-y-4">
                                    <p className="text-gray-600 dark:text-gray-300">
                                        With over 2 years of experience in full-stack development, I specialize in creating high-performance web applications using modern JavaScript frameworks and cloud technologies.
                                    </p>
                                    <div className={`grid grid-cols-2 gap-4 ${styles.slideUp} ${styles['delay-600']}`}>
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
                        </div>
                    </div>

                    <div className={`mt-16 text-center group ${styles.fadeIn} ${styles['delay-700']}`}>
                        <Link
                            href="/resume"
                            className="relative inline-flex items-center px-8 py-4 overflow-hidden text-base font-medium text-white bg-gradient-to-r from-teal-500 to-emerald-600 dark:from-teal-600 dark:to-emerald-700 rounded-lg group-hover:from-teal-600 group-hover:to-emerald-700 dark:group-hover:from-teal-700 dark:group-hover:to-emerald-800 transition-all duration-300 ease-out shadow-lg hover:shadow-xl hover:-translate-y-1"
                        >
                            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-16 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                            <span className="relative flex items-center">
                                View My Resume
                                <FiArrowRight className="ml-3 transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>


        </section>
    )
}