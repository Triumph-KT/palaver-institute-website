/**
 * Navigation Component
 * 
 * Global navigation component that appears on all pages.
 * Features responsive design, logo integration, and active state management.
 * 
 * @author Palaver Institute Development Team
 * @version 1.0.0
 */

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

/**
 * Navigation menu items configuration
 * Add new pages here to automatically include them in navigation
 */
const navigationItems = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/story', label: 'Story' },
  { href: '/research', label: 'Research' },
  { href: '/team', label: 'Team' },
  { href: '/#contact', label: 'Contact' },
] as const;

export function Navigation() {
  // State management for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Get current pathname for active state
  const pathname = usePathname();
  
  /**
   * Handle scroll events to add background to navigation
   * Creates a glass morphism effect when user scrolls
   */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  /**
   * Close mobile menu when route changes
   */
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);
  
  /**
   * Check if a navigation item is currently active
   */
  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href.split('#')[0]);
  };
  
  /**
   * Handle mobile menu toggle
   */
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  /**
   * Handle smooth scrolling for anchor links
   */
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.includes('#')) {
      const [path, anchor] = href.split('#');
      
      // If we're on the same page, scroll smoothly
      if (!path || pathname === path) {
        e.preventDefault();
        const element = document.getElementById(anchor);
        if (element) {
          const offsetTop = element.offsetTop - 80; // Account for fixed navbar
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <nav 
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/20' 
          : 'bg-white/90 backdrop-blur-sm'
        }
      `}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="Palaver Institute"
              width={50}
              height={50}
              className="w-12 h-12 object-contain"
              priority
            />
            <span className="hidden sm:block text-xl font-bold text-palaver-orange-primary">
              Palaver Institute
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleAnchorClick(e, item.href)}
                className={`
                  relative px-3 py-2 text-sm font-medium transition-colors duration-200
                  ${isActiveLink(item.href)
                    ? 'text-palaver-orange-primary'
                    : 'text-text-dark hover:text-palaver-orange-primary'
                  }
                `}
              >
                {item.label}
                
                {/* Active indicator */}
                {isActiveLink(item.href) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-palaver-orange-primary rounded-full"></span>
                )}
                
                {/* Hover indicator */}
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-palaver-orange-primary rounded-full scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
              </Link>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg text-text-dark hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200/20 shadow-lg">
            <div className="py-4 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleAnchorClick(e, item.href)}
                  className={`
                    block px-6 py-3 text-base font-medium transition-colors duration-200
                    ${isActiveLink(item.href)
                      ? 'text-palaver-orange-primary bg-palaver-cream-light/50'
                      : 'text-text-dark hover:text-palaver-orange-primary hover:bg-gray-50'
                    }
                  `}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
