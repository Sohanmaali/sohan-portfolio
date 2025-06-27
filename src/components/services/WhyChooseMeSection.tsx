import { motion } from 'framer-motion';
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1]
        }
    }
};
export default function WhyChooseMeSection() {
    return (
        <>

            <div className=" py-8 rounded-3xl overflow-hidden relative">
                {/* Decorative elements */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                    <div className="absolute -bottom-20 left-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <motion.span
                            variants={fadeInUp}
                            className="inline-block px-4 py-2 text-sm font-medium bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 rounded-full mb-4 shadow-sm"
                        >
                            Why Choose Me
                        </motion.span>
                        <motion.h2
                            variants={fadeInUp}
                            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
                        >
                            What Makes Me Different
                        </motion.h2>
                        <motion.p
                            variants={fadeInUp}
                            className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300"
                        >
                            I combine technical expertise with a passion for creating exceptional digital experiences that drive results.
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: (
                                    <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                    </svg>
                                ),
                                title: 'Lightning Fast',
                                description: 'Optimized code and modern architecture ensure your applications load quickly and run smoothly.',
                                stat: '100%',
                                statLabel: 'Performance Focused'
                            },
                            {
                                icon: (
                                    <svg className="w-10 h-10 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                                    </svg>
                                ),
                                title: 'Secure by Design',
                                description: 'Built-in security measures and best practices to protect your data and users.',
                                stat: '24/7',
                                statLabel: 'Security Monitoring'
                            },
                            {
                                icon: (
                                    <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                    </svg>
                                ),
                                title: 'Reliable Support',
                                description: 'Dedicated support and maintenance to ensure your project\'s long-term success.',
                                stat: '99.9%',
                                statLabel: 'Uptime Guarantee'
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                                    {item.description}
                                </p>
                                <div className="text-center">
                                    <span className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                                        {item.stat}
                                    </span>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        {item.statLabel}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 grid md:grid-cols-3 gap-8">
                        {[
                            {
                                number: '8+',
                                label: 'Projects Completed',
                                description: 'Delivered successful projects to clients worldwide'
                            },
                            {
                                number: '98%',
                                label: 'Client Satisfaction',
                                description: 'Consistently high ratings from happy clients'
                            },
                            {
                                number: '2+',
                                label: 'Years Experience',
                                description: 'Building cutting-edge digital solutions'
                            }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                transition={{ delay: 0.3 + (index * 0.1) }}
                                className="text-center card bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                            >
                                <div className="text-5xl  font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
                                    {stat.number}
                                </div>
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                    {stat.label}
                                </h4>
                                <p className="text-gray-500 dark:text-gray-400">
                                    {stat.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}