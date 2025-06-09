"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiInstagram } from 'react-icons/fi';
import ContactCard from './ContactCard';
import ContactForm from './ContactForm';

const socialLinks = [
  { icon: <FiGithub />, url: 'https://github.com/sohanmaali', label: 'GitHub' },
  { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/sohan-maali1/', label: 'LinkedIn' },
  { icon: <FiTwitter />, url: 'https://x.com/sohanmaali7', label: 'Twitter' },
  { icon: <FiInstagram />, url: 'https://instagram.com/sohan.maali', label: 'Instagram' },
];

export default function ContactPage() {
  return (
    <> <div className="min-h-screen mt-20 bg-gradient-to-br from-gray-950 to-gray-900 py-12 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full mix-blend-soft-light filter blur-3xl animate-blob"></div>
          <div className="absolute top-1/3 -right-20 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-soft-light filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-indigo-500/20 rounded-full mix-blend-soft-light filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Main Content */}
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Page Header */}
          <div className="text-center mb-16">
            <motion.h1
              className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Let's Connect
            </motion.h1>
            <motion.p
              className="text-lg text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Have a project in mind or want to collaborate? I'd love to hear from you.
              Let's create something amazing together!
            </motion.p>
          </div>

          {/* Contact Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Card */}
            <div>
              <ContactForm />

              {/* Social Links */}
              <motion.div
                className="mt-8 p-6 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-lg font-semibold text-white mb-4">Follow Me :</h3>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-gray-800/50 hover:bg-gray-800/80 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                      whileHover={{ y: -3, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <ContactCard />

              {/* Additional Info */}
              <motion.div
                className="mt-8 p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl border border-white/5 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-lg font-semibold text-white mb-3">Let's Work Together</h3>
                <p className="text-gray-300 mb-4">
                  I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
                  I'll get back to you as soon as possible!
                </p>
                <motion.a
                  href="mailto:sohanmaali4@gmail.com"
                  className="inline-flex items-center px-5 py-2.5 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors text-sm"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FiMail className="mr-2" />
                  Send me an email
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div></>
  );
}
