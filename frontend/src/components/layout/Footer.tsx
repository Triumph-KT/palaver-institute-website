/**
 * Footer Component
 * 
 * Site-wide footer with links, contact information, and branding.
 * Responsive design with organized sections.
 */

import React from 'react';
import Link from 'next/link';

const footerLinks = {
  quickLinks: [
    { href: '/#about', label: 'About' },
    { href: '/story', label: 'Story' },
    { href: '/#research', label: 'Research' },
    { href: '/team', label: 'Team' },
    { href: '/#contact', label: 'Contact' },
  ],
  legal: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
    { href: '/cookies', label: 'Cookie Policy' },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">
              Palaver Institute
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Where African Minds Convene to Solve Global Challenges. Building intellectual 
              sovereignty through indigenous-centered research and pan-African collaboration.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://rw.linkedin.com/company/palaver-institute"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-palaver-orange-400 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-palaver-orange-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Info
            </h4>
            <div className="space-y-2 text-gray-300">
              <p>
                <span className="font-medium">Email:</span> info@palaverinstitute.org
              </p>
              <p>
                <span className="font-medium">Website:</span> palaverinstitute.org
              </p>
              <p>
                <span className="font-medium">LinkedIn:</span>{' '}
                <a 
                  href="https://rw.linkedin.com/company/palaver-institute" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-palaver-orange-400 transition-colors duration-200"
                >
                  @palaver-institute
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © {currentYear} Palaver Institute. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex space-x-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-gray-300 text-sm transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
