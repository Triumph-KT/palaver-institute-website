/**
 * Enhanced Navigation Component with Role-Based Menus
 * 
 * Provides different navigation options based on user authentication and role.
 * Supports public, authenticated, and role-specific navigation items.
 */

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, User, LogOut, Settings, ChevronDown } from 'lucide-react';
import { useAuth } from '@/hooks';
import { UserRole } from '@/types';

// Navigation item interface
interface NavigationItem {
  href: string;
  label: string;
  requiresAuth?: boolean;
  roles?: UserRole[];
  external?: boolean;
}

// Public navigation items (always visible)
const publicNavItems: NavigationItem[] = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/story', label: 'Story' },
  { href: '/#research', label: 'Research' },
  { href: '/team', label: 'Team' },
  { href: '/#contact', label: 'Contact' },
];

// Authenticated navigation items (visible when logged in)
const authenticatedNavItems: NavigationItem[] = [
  { href: '/dashboard', label: 'Dashboard', requiresAuth: true },
  { href: '/applications', label: 'Applications', requiresAuth: true },
  { href: '/research-portal', label: 'Research Portal', requiresAuth: true },
];

// Role-specific navigation items
const roleBasedNavItems: Record<UserRole, NavigationItem[]> = {
  admin: [
    { href: '/admin/users', label: 'User Management', roles: ['admin'] },
    { href: '/admin/system', label: 'System Settings', roles: ['admin'] },
    { href: '/admin/analytics', label: 'Analytics', roles: ['admin'] },
  ],
  director: [
    { href: '/director/applications', label: 'Review Applications', roles: ['director'] },
    { href: '/director/lab', label: 'Lab Management', roles: ['director'] },
    { href: '/director/fellows', label: 'My Fellows', roles: ['director'] },
  ],
  fellow: [
    { href: '/fellow/resources', label: 'Resources', roles: ['fellow'] },
    { href: '/fellow/deliverables', label: 'Deliverables', roles: ['fellow'] },
    { href: '/fellow/community', label: 'Community', roles: ['fellow'] },
  ],
  alumni: [
    { href: '/alumni/network', label: 'Alumni Network', roles: ['alumni'] },
    { href: '/alumni/mentoring', label: 'Mentoring', roles: ['alumni'] },
    { href: '/alumni/updates', label: 'Submit Updates', roles: ['alumni'] },
  ],
  applicant: [
    { href: '/application/status', label: 'Application Status', roles: ['applicant'] },
  ],
};

// User dropdown menu items
interface UserMenuItemProps {
  href?: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  onClick?: () => void;
  divider?: boolean;
}

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const pathname = usePathname();
  const { user, isAuthenticated, logout, hasRole } = useAuth();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsUserMenuOpen(false);
  }, [pathname]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('[data-dropdown]')) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Get navigation items based on user state
  const getNavigationItems = (): NavigationItem[] => {
    let items = [...publicNavItems];

    if (isAuthenticated && user) {
      // Add authenticated items
      items = [...items, ...authenticatedNavItems];

      // Add role-specific items
      const roleItems = roleBasedNavItems[user.role] || [];
      items = [...items, ...roleItems];
    }

    return items;
  };

  // Check if navigation item should be visible
  const isItemVisible = (item: NavigationItem): boolean => {
    if (item.requiresAuth && !isAuthenticated) return false;
    if (item.roles && user && !item.roles.includes(user.role)) return false;
    return true;
  };

  // Check if a navigation item is currently active
  const isActiveLink = (href: string): boolean => {
    if (href === '/') {
      return pathname === '/';
    }
    const basePath = href.split('#')[0] || href;
    return pathname.startsWith(basePath);
  };

  // Handle smooth scrolling for anchor links
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.includes('#')) {
      const [path, anchor] = href.split('#');
      
      if (!path || pathname === path) {
        e.preventDefault();
        if (anchor) {
          const element = document.getElementById(anchor);
          if (element) {
            const offsetTop = element.offsetTop - 80;
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

  const navigationItems = getNavigationItems();

  // User menu items
  const userMenuItems: UserMenuItemProps[] = [
    { href: '/profile', label: 'Profile', icon: User },
    { href: '/settings', label: 'Settings', icon: Settings },
    { divider: true, label: '', onClick: () => {} },
    { label: 'Logout', icon: LogOut, onClick: logout },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/20 shadow-sm transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.png" alt="Palaver Institute" className="h-10 w-auto object-contain" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.filter(isItemVisible).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleAnchorClick(e, item.href)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActiveLink(item.href)
                    ? 'text-palaver-orange-500'
                    : 'text-gray-700 hover:text-palaver-orange-500'
                }`}
                {...(item.external && { target: '_blank', rel: 'noopener noreferrer' })}
              >
                {item.label}
                {isActiveLink(item.href) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-palaver-orange-500 rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

        {/* Desktop User Menu / Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {isAuthenticated && user ? (
            <div className="relative" data-dropdown>
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-palaver-orange-500 transition-colors duration-200"
              >
                <div className="w-8 h-8 bg-palaver-orange-100 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-palaver-orange-600" />
                </div>
                <span>{user.firstName}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isUserMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* User Dropdown Menu */}
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                  {userMenuItems.map((menuItem, index) => (
                    menuItem.divider ? (
                      <div key={index} className="border-t border-gray-100 my-1" />
                    ) : (
                      <div key={menuItem.label}>
                        {menuItem.href ? (
                          <Link
                            href={menuItem.href}
                            className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                          >
                            {menuItem.icon && <menuItem.icon className="w-4 h-4" />}
                            <span>{menuItem.label}</span>
                          </Link>
                        ) : (
                          <button
                            onClick={menuItem.onClick}
                            className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                          >
                            {menuItem.icon && <menuItem.icon className="w-4 h-4" />}
                            <span>{menuItem.label}</span>
                          </button>
                        )}
                      </div>
                    )
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Link
                href="/login"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-palaver-orange-500 transition-colors duration-200"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-4 py-2 text-sm font-medium bg-palaver-orange-500 text-white rounded-lg hover:bg-palaver-orange-600 transition-colors duration-200"
              >
                Apply
              </Link>
            </div>
          )}
        </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-palaver-orange-500 focus:ring-offset-2"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-2 space-y-1">
            {/* Navigation Links */}
            {navigationItems.filter(isItemVisible).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleAnchorClick(e, item.href)}
                className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors duration-200 ${
                  isActiveLink(item.href)
                    ? 'text-palaver-orange-500 bg-palaver-orange-50'
                    : 'text-gray-700 hover:text-palaver-orange-500 hover:bg-gray-50'
                }`}
                {...(item.external && { target: '_blank', rel: 'noopener noreferrer' })}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Auth Section */}
            {isAuthenticated && user ? (
              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="flex items-center space-x-3 px-3 py-2 mb-2">
                  <div className="w-8 h-8 bg-palaver-orange-100 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-palaver-orange-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">{user.fullName}</div>
                    <div className="text-xs text-gray-500 capitalize">{user.role}</div>
                  </div>
                </div>
                {userMenuItems.map((menuItem, index) => (
                  !menuItem.divider && (
                    <div key={menuItem.label}>
                      {menuItem.href ? (
                        <Link
                          href={menuItem.href}
                          className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                        >
                          {menuItem.icon && <menuItem.icon className="w-4 h-4" />}
                          <span>{menuItem.label}</span>
                        </Link>
                      ) : (
                        <button
                          onClick={menuItem.onClick}
                          className="w-full flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                        >
                          {menuItem.icon && <menuItem.icon className="w-4 h-4" />}
                          <span>{menuItem.label}</span>
                        </button>
                      )}
                    </div>
                  )
                ))}
              </div>
            ) : (
              <div className="border-t border-gray-200 pt-4 mt-4 space-y-2">
                <Link
                  href="/login"
                  className="block w-full px-3 py-2 text-center text-sm font-medium text-gray-700 hover:text-palaver-orange-500 border border-gray-300 rounded-lg transition-colors duration-200"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="block w-full px-3 py-2 text-center text-sm font-medium bg-palaver-orange-500 text-white rounded-lg hover:bg-palaver-orange-600 transition-colors duration-200"
                >
                  Apply for Fellowship
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
