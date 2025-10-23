/**
 * Mobile Navigation Component
 * 
 * Handles mobile menu functionality exactly like the original HTML version.
 * Recreates all the JavaScript interactions from script.js
 * 
 * @author Palaver Institute Development Team
 * @version 1.0.0
 */

'use client';

import { useEffect } from 'react';

export function MobileNavigation(): null {
  useEffect(() => {
    // Mobile Navigation Toggle (exact copy from script.js lines 3-18)
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
      const handleHamburgerClick = () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
      };

      hamburger.addEventListener('click', handleHamburgerClick);

      // Close mobile menu when clicking on a link (exact copy from script.js lines 13-18)
      const navLinks = document.querySelectorAll('.nav-link');
      navLinks.forEach(link => {
        const handleLinkClick = () => {
          hamburger.classList.remove('active');
          navMenu.classList.remove('active');
        };
        link.addEventListener('click', handleLinkClick);
      });

      // Cleanup event listeners
      return () => {
        hamburger.removeEventListener('click', handleHamburgerClick);
        navLinks.forEach(link => {
          link.removeEventListener('click', () => {});
        });
      };
    }
    
    // Return cleanup function even if elements not found
    return () => {};
  }, []);

  useEffect(() => {
    // Smooth scrolling for navigation links (exact copy from script.js lines 20-33)
    const anchors = document.querySelectorAll('a[href^="#"]');
    
    anchors.forEach(anchor => {
      const handleAnchorClick = (e: Event) => {
        e.preventDefault();
        const href = (anchor as HTMLAnchorElement).getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            const offsetTop = (target as HTMLElement).offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
          }
        }
      };
      
      anchor.addEventListener('click', handleAnchorClick);
    });

    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  useEffect(() => {
    // Navbar background change on scroll (exact copy from script.js lines 35-45)
    const navbar = document.querySelector('.navbar') as HTMLElement;
    
    const handleScroll = () => {
      if (window.scrollY > 50) {
        if (navbar) {
          navbar.style.background = 'rgba(255, 255, 255, 0.98)';
          navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
      } else {
        if (navbar) {
          navbar.style.background = 'rgba(255, 255, 255, 0.95)';
          navbar.style.boxShadow = 'none';
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Intersection Observer for animations (exact copy from script.js lines 77-94)
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
        }
      });
    }, observerOptions);

    // Observe elements for animation
    const elements = document.querySelectorAll('.research-card, .team-card, .about-text, .contact-item');
    elements.forEach(el => {
      observer.observe(el);
    });

    return () => {
      elements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  useEffect(() => {
    // Counter animation for stats (exact copy from script.js lines 96-130)
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const animateCounter = (element: Element, target: number) => {
      let current = 0;
      const increment = target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        (element as HTMLElement).textContent = Math.floor(current) + (target >= 10 ? '+' : '');
      }, 30);
    };

    // Trigger counter animation when stats section is visible
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          statNumbers.forEach(stat => {
            const target = parseInt((stat as HTMLElement).textContent || '0');
            if (!isNaN(target)) {
              (stat as HTMLElement).textContent = '0';
              animateCounter(stat, target);
            }
          });
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.about-stats');
    if (statsSection) {
      statsObserver.observe(statsSection);
    }

    return () => {
      if (statsSection) {
        statsObserver.unobserve(statsSection);
      }
    };
  }, []);

  useEffect(() => {
    // Keyboard navigation support (exact copy from script.js lines 283-293)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        // Close mobile menu if open
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        if (hamburger && navMenu) {
          hamburger.classList.remove('active');
          navMenu.classList.remove('active');
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return null; // This component only handles JavaScript functionality
}
