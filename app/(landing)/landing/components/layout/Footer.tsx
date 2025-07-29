// components/layout/Footer.tsx
import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { label: 'Privacy Policy', href: '/privacy', id: 'privacy-link' },
    { label: 'Terms of Service', href: '/terms', id: 'terms-link' }
  ];

  return (
    <footer className="w-full pb-10 " role="contentinfo">
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-10 bg-[#181726] py-8 gap-6">
        {/* Copyright */}
        <div className="order-2 sm:order-1">
          <p className="text-sm text-white font-normal leading-relaxed">
            © {currentYear} Moodiverse. All rights reserved.
          </p>
        </div>

        {/* Logo */}
        <div className="order-1 sm:order-2">
          <Image
            src="/logos/moodjiverse.svg"
            alt="Moodiverse"
            width={167}
            height={18}
            className="w-auto h-auto"
            priority={false}
          />
        </div>

        {/* Links */}
        <nav className="order-3 flex space-x-6" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#181726] rounded"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;