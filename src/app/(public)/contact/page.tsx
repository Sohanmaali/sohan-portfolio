import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiInstagram } from 'react-icons/fi';
import ContactCard from '../../../components/contact/ContactCard';
import ContactForm from '../../../components/contact/ContactForm';
import Link from 'next/link';

const socialLinks = [
  { icon: <FiGithub />, url: 'https://github.com/sohanmaali', label: 'GitHub' },
  { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/sohan-maali1/', label: 'LinkedIn' },
  { icon: <FiTwitter />, url: 'https://x.com/sohanmaali7', label: 'Twitter' },
  { icon: <FiInstagram />, url: 'https://instagram.com/sohan.maali', label: 'Instagram' },
];

export default function ContactPage() {
  return (
    <> <div className="min-h-screen  mt-10 py-12 px-4 sm:px-6 lg:px-8 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-8xl ">

        {/* Main Content */}
        <div className="relative z-10">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
              Let's Connect
            </h1>
            <p className="text-lg text-gray-800 dark:text-gray-300 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you.
              Let's create something amazing together!
            </p>
          </div>

          {/* Contact Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Card */}
            <div>
              <ContactForm />

              {/* Social Links */}
              <div
                className="mt-8 p-6 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800/50"

              >
                <h3 className="text-lg font-semibold text-white mb-4">Follow Me :</h3>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, index) => (
                    <Link
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-gray-800/50 hover:bg-gray-800/80 flex items-center justify-center text-gray-300 hover:text-white transition-colors"

                      aria-label={social.label}
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div>
              <ContactCard />

              {/* Additional Info */}
              < div className="mt-8 p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl border border-white/5 backdrop-blur-sm">
                <h3 className="text-lg font-semibold dark:text-white text-gray-800 mb-3">Let's Work Together</h3>
                <p className="text-gray-300 dark:text-white text-gray-800  mb-4">
                  I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
                  I'll get back to you as soon as possible!
                </p>
                <Link
                  href="mailto:sohanmaali4@gmail.com"
                  className="inline-flex items-center px-5 py-2.5 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors text-sm"
                >
                  <FiMail className="mr-2" />
                  Send me an email
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div></>
  );
}
