// 'use client';

import { FaDownload } from 'react-icons/fa';
import SkillsSection from '@/components/resume/SkillsSection';
import Experience from '@/components/resume/Experience';
import Education from '@/components/resume/Education';
import Button from '@/components/Button';

export default function Resume() {
  const handleDownload = () => {
    // In a real implementation, this would download the PDF version of the resume
    alert('Downloading resume...');
  };

  return (
    <> <div className="min-h-screen  mt-10 py-12 px-4 sm:px-6 lg:px-8 dark:from-gray-900 dark:to-gray-800">
      <main className="max-w-8xl mx-auto">
        {/* Header */}
        <div
          className="text-center mb-12 relative"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">My Professional Journey</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">Education & Work Experience</p>
          <button
            // onClick={handleDownload}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <FaDownload className="mr-2" />
            Download Resume
          </button>
        </div>

        {/* Education Section */}
        <Education />

        {/* Experience Section */}
        <Experience />

        {/* Skills Section */}
        <SkillsSection />

        {/* Call to Action */}
        <div
          className="text-center mt-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Let's Work Together</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Interested in working together? I'm always open to discussing product design work or partnership opportunities.
          </p>
          <Button text="Get In Touch" href="/contact" />
        </div>
      </main>
    </div></>
  );
}
