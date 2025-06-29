import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ProjectsSection from '@/components/home/ProjectsSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {

  return (
    <>
      <div className="pt-16 overflow-x-hidden relative">

        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* CTA Section */}
        <CTASection />
      </div>
    </>
  );
} 
