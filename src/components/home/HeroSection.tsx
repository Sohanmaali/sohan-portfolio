
import { FiCode, FiLayers } from 'react-icons/fi';
import Button from '../Button';
import styles from '../../styles/animations.module.css';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-10 md:py-20 ">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className={`${styles.slideUp} ${styles['delay-100']}`}>
              <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                Full Stack Developer
              </span>
            </div>

            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white ${styles.slideUp} ${styles['delay-200']}`}
            >
              Hi, I'm <span className="text-blue-500">Sohan Maali</span>
            </h1>

            <p
              className={`text-xl md:text-2xl text-gray-700 dark:text-gray-300 ${styles.slideUp} ${styles['delay-300']}`}
            >
              I craft <span className="font-semibold text-blue-600 dark:text-blue-400">exceptional</span> digital experiences through code and creativity.
            </p>


            <div
              className="flex flex-wrap gap-4"
            // data-animate="slide-up"
            // data-animate-delay="300"
            >
              <Button text="View My Work" href="/projects" />

              <Button text="Contact Me" href="/contact" />
            </div>

            {/* Tech Stack */}
            <div
              className={`pt-8 flex flex-wrap gap-3 ${styles.slideUp} ${styles['delay-400']}`}
            >
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind'].map((tech, index) => (
                <span
                  key={tech}
                  className={`px-3 py-1.5 text-sm bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-full text-gray-700 dark:text-gray-300 ${styles.fadeIn}`}
                  style={{ animationDelay: `${0.5 + (index * 0.1)}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>

          {/* Right Column - Profile Image */}
          <div
            className={`relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto 
              
            `}
            data-animate="slide-up"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 dark:from-blue-500/10 dark:to-purple-600/10 rounded-full blur-2xl -z-10"></div>

            {/* Profile image container */}
            <div className={`relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center ${styles.float}`}>
              <img
                src="/assets/images/sohan.jpg"
                alt="Sohan Maali"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Experience badge */}
            <div
              className={`absolute -bottom-2 -left-2 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:-translate-y-1 transition-transform duration-30 ${styles.float}`}
              data-animate="slide-up"
              data-animate-delay="0.2s"
            >
              <div className="flex items-center gap-2">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <FiCode className="text-blue-600 dark:text-blue-400 text-xl" />
                </div>
                <div >
                  <p className="font-semibold text-gray-900 dark:text-white">2+</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Years Experience</p>
                </div>
              </div>
            </div>

            {/* Projects badge */}
            <div
              className={`absolute -top-4 -right-4 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:-translate-y-1 transition-transform duration-30 ${styles.float}`}
              data-animate="slide-up"
              data-animate-delay="0.4s"

            >
              <div className="flex items-center gap-2">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <FiLayers className="text-purple-600 dark:text-purple-400 text-xl" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">8+</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Projects Done</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden" data-animate>
        <div className="absolute top-1/4 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 dark:opacity-5 animate-blob"></div>
        <div className="absolute top-1/2 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 dark:opacity-5 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 dark:opacity-5 animate-blob animation-delay-4000"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right_#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom_#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right_#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom_#1f1f1f_1px,transparent_1px)] bg-[size:24px_24px] opacity-10 dark:opacity-5"></div>
      </div>
    </section>
  );
}