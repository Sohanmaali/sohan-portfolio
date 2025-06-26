"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
const stagger = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
};
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
export default function CTASection() {
    return <>
        <section className="py-20  ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={stagger}
                >
                    <motion.h2
                        variants={fadeInUp}
                        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
                    >
                        Have a project in mind?
                    </motion.h2>
                    <motion.p
                        variants={fadeInUp}
                        className="text-xl text-gray-900 dark:text-white mb-8 max-w-2xl mx-auto "
                    >
                        I'm currently available for freelance work. Let's build something amazing together!
                    </motion.p>
                    <motion.div variants={fadeInUp}>
                        <Link
                            href="/contact"
                            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 transition-colors duration-200"
                        >
                            Get In Touch
                            <FiArrowRight className="ml-2" />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    </>
}