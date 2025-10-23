/**
 * Contact Form Component
 * 
 * Recreates the exact functionality from the original HTML version:
 * - Client-side validation
 * - Success/error notifications  
 * - Form reset after submission
 * - Email validation
 * 
 * @author Palaver Institute Development Team
 * @version 1.0.0
 */

'use client';

import { useState, FormEvent } from 'react';

// Utility function for email validation (exact copy from original script.js)
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Notification component (recreates showNotification function from script.js)
interface NotificationProps {
  message: string;
  type: 'success' | 'error' | 'info';
  onClose: () => void;
}

function Notification({ message, type, onClose }: NotificationProps) {
  return (
    <div 
      className={`fixed top-5 right-5 z-50 max-w-sm p-4 rounded-lg shadow-lg text-white font-medium transform transition-all duration-300 ${
        type === 'success' ? 'bg-green-500' : 
        type === 'error' ? 'bg-red-500' : 
        'bg-blue-500'
      }`}
      style={{
        animation: 'slideIn 0.3s ease-out'
      }}
    >
      {message}
      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

export function ContactForm() {
  const [notification, setNotification] = useState<{
    message: string;
    type: 'success' | 'error' | 'info';
  } | null>(null);

  // Show notification function (recreates original showNotification)
  const showNotification = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    // Remove existing notification
    setNotification(null);
    
    // Show new notification
    setTimeout(() => {
      setNotification({ message, type });
    }, 100);
    
    // Auto-remove after 5 seconds (matches original timing)
    setTimeout(() => {
      setNotification(null);
    }, 5100);
  };

  // Form submission handler (exact copy of original logic from script.js lines 50-74)
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    // Basic validation (exact copy from original)
    if (!name || !email || !subject || !message) {
      showNotification('Please fill in all fields.', 'error');
      return;
    }

    if (!isValidEmail(email)) {
      showNotification('Please enter a valid email address.', 'error');
      return;
    }

    // Simulate form submission (exact copy from original)
    showNotification('Thank you for your message! We will get back to you soon.', 'success');
    
    // Reset form (exact copy from original)
    e.currentTarget.reset();
  };

  return (
    <>
      {/* Contact Form */}
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              required 
            />
          </div>
          <div className="form-group">
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              required 
            />
          </div>
          <div className="form-group">
            <input 
              type="text" 
              name="subject" 
              placeholder="Subject" 
              required 
            />
          </div>
          <div className="form-group">
            <textarea 
              name="message" 
              placeholder="Your Message" 
              rows={5} 
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>

      {/* Notification */}
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </>
  );
}
