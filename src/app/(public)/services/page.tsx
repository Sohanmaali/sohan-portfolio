'use client';

import { motion } from 'framer-motion';
import { FiCode, FiServer, FiTool, FiDatabase, FiLayers, FiSmartphone, FiShield, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';
import MyServices from '@/components/services/MyServices';
import ProcessSection from '@/components/services/ProcessSection';
import WhyChooseMeSection from '@/components/services/WhyChooseMeSection';

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




export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <motion.span
              variants={fadeInUp}
              className="inline-block px-4 py-2 text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mb-4"
            >
              What I Offer
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            >
              My Services
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              Comprehensive web development services to bring your ideas to life with cutting-edge technologies and best practices.
            </motion.p>
          </div>
          <MyServices />

          {/* Process Section - Redesigned */}
          <ProcessSection />

          {/* Why Choose Me Section */}
         <WhyChooseMeSection/>

          <motion.div
            variants={fadeInUp}
            className="mt-8 text-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
            >
              Get In Touch
              <FiArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Add custom animation for the blob effect
const styles = `
  @keyframes blob {
    0% {
      transform: translate(0px, 0px) scale(1);
    }
    33% {
      transform: translate(30px, -50px) scale(1.1);
    }
    66% {
      transform: translate(-20px, 20px) scale(0.9);
    }
    100% {
      transform: translate(0px, 0px) scale(1);
    }
  }
  .animate-blob {
    animation: blob 7s infinite;
  }
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  .animation-delay-4000 {
    animation-delay: 4s;
  }
`;

// Add styles to the head
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}
