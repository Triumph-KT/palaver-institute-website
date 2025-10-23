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
import { usePathname } from 'next/navigation';

/**
 * Navigation menu items configuration
 * Add new pages here to automatically include them in navigation
 */
const navigationItems = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/story', label: 'Story' },
  { href: '/#research', label: 'Research' },
  { href: '/team', label: 'Team' },
  { href: '/#contact', label: 'Contact' },
] as const;

export function Navigation() {
  // State management for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Get current pathname for active state
  const pathname = usePathname();
  
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
    const basePath = href.split('#')[0] || href;
    return pathname.startsWith(basePath);
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
        if (anchor) {
          const element = document.getElementById(anchor);
          if (element) {
            const offsetTop = element.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
          }
        }
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <img src="/logo.png" alt="Palaver Institute" className="logo-img" />
        </div>
        
        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {navigationItems.map((item) => (
            <li key={item.href} className="nav-item">
              <Link
                href={item.href}
                onClick={(e) => handleAnchorClick(e, item.href)}
                className={`nav-link ${isActiveLink(item.href) ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        
        <div 
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
}
