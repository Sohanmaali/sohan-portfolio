import MyServices from '@/components/services/MyServices';
import ProcessSection from '@/components/services/ProcessSection';
import WhyChooseMeSection from '@/components/services/WhyChooseMeSection';
import Button from '@/components/Button';

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="">
        <div className="max-w-8xl mx-auto px-2 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <span
              className="inline-block px-4 py-2 text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mb-4"
            >
              What I Offer
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            >
              My Services
            </h2>
            <p
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              Comprehensive web development services to bring your ideas to life with cutting-edge technologies and best practices.
            </p>
          </div>
          <MyServices />

          {/* Process Section - Redesigned */}
          <ProcessSection />

          {/* Why Choose Me Section */}
          <WhyChooseMeSection />

          <Button text="Get In Touch" href="/contact" />
        </div>
      </section>
    </div>
  );
}

