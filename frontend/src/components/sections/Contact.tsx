/**
 * Contact Section Component
 * 
 * Displays contact information and integrates the ContactForm component.
 * Features contact details, location info, and the contact form.
 */

import React from 'react';
import { Card } from '@/components/ui';
import { ContactForm } from '@/components/ContactForm';
import { Mail, Globe, MapPin } from 'lucide-react';

interface ContactInfoItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  content: string;
  subtitle?: string;
}

const contactInfo: ContactInfoItem[] = [
  {
    id: 'email',
    icon: Mail,
    title: 'Email',
    content: 'info@palaverinstitute.org',
  },
  {
    id: 'website',
    icon: Globe,
    title: 'Website',
    content: 'palaverinstitute.org',
  },
  {
    id: 'headquarters',
    icon: MapPin,
    title: 'Headquarters',
    content: 'Kigali, Rwanda',
    subtitle: 'Continental Hubs: Cameroon, Ghana, Rwanda, South Africa, Morocco',
  },
];

interface ContactInfoCardProps {
  info: ContactInfoItem;
}

const ContactInfoCard: React.FC<ContactInfoCardProps> = ({ info }) => {
  const Icon = info.icon;

  return (
    <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-palaver-orange-100 rounded-lg flex items-center justify-center">
          <Icon className="w-6 h-6 text-palaver-orange-600" />
        </div>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-1">
          {info.title}
        </h4>
        <p className="text-gray-700 font-medium">
          {info.content}
        </p>
        {info.subtitle && (
          <p className="text-sm text-gray-500 mt-1">
            {info.subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-palaver-cream-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Interested in collaborating or learning more about our research? We'd love to hear from you.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column - Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <ContactInfoCard key={info.id} info={info} />
              ))}
            </div>

            {/* Additional Information */}
            <div className="mt-8 p-6 bg-palaver-orange-50 rounded-lg border border-palaver-orange-200">
              <h4 className="text-lg font-semibold text-palaver-orange-900 mb-3">
                Connect With Us
              </h4>
              <p className="text-palaver-orange-700 leading-relaxed">
                Follow our journey as we build intellectual sovereignty for Africa. 
                Join the conversation about decolonizing research and centering 
                indigenous African knowledge systems.
              </p>
              <div className="mt-4">
                <a
                  href="https://rw.linkedin.com/company/palaver-institute"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-palaver-orange-600 hover:text-palaver-orange-700 font-medium transition-colors duration-200"
                >
                  LinkedIn: @palaver-institute
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Send Us a Message
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
