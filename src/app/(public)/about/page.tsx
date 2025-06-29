
"use client";

import HeroSection from '@/components/about/HeroSection';
import AboutContent from '@/components/about/AboutContent';

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-5">
      {/* Hero Section */}
      <HeroSection />

      {/* About Content */}
      <AboutContent />
    </div>
  );
};

export default AboutPage;
