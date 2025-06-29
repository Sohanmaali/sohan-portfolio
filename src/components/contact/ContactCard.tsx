'use client';

import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const ContactCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  const contactInfo = [
    {
      icon: <FiMail className="text-blue-400 text-xl" />,
      label: 'Email',
      value: 'sohanmaali4@gmail.com',
      href: 'mailto:sohanmaali4@gmail.com',
    },
    // {
    //   icon: <FiPhone className="text-purple-400 text-xl" />,
    //   label: 'Phone',
    //   value: '+91 9876543210',
    //   href: 'tel:+919876543210',
    // },
    {
      icon: <FiMapPin className="text-indigo-400 text-xl" />,
      label: 'Location',
      value: 'Indore, Madhya Pradesh, India',
    },
  ];

  return (
    <div
      className="relative bg-gray-900/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 shadow-xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-indigo-500/10"
        style={{
          backgroundPosition: isHovered ? '100% 100%' : '0% 0%',
          transition: 'background-position 8s linear infinite',
        }}
      />

      <div className="relative z-10">
        <div
          className="inline-block mb-6 p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20"
          style={{
            transform: isHovered ? 'rotate(10deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease-in-out',
          }}
        >
          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center text-white">
            <FiMail className="text-xl" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-1">
          Contact Information
        </h2>

        <p className="text-gray-400 mb-8">
          Feel free to reach out for any questions or opportunities.
        </p>

        <div className="space-y-4">
          {contactInfo.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start p-4 rounded-xl bg-gray-800/50 hover:bg-gray-800/70 transition-colors duration-300 group"
              style={{
                opacity: isHovered ? 1 : 0,
                transform: isHovered ? 'translateY(0)' : 'translateY(10px)',
                transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
              }}
            >
              <div className="p-2 rounded-lg bg-gray-700/50 group-hover:bg-gradient-to-br from-blue-500/20 to-purple-500/20 transition-colors duration-300 mr-4">
                {item.icon}
              </div>
              <div>
                <div className="text-sm text-gray-400">{item.label}</div>
                <div className="text-white font-medium">{item.value}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
