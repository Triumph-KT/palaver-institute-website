/**
 * Authentication Hook
 * 
 * Provides authentication state and methods.
 * This is a placeholder implementation that will be connected to real auth later.
 */

import { useState, useEffect } from 'react';
import { User, UserRole, Permission } from '@/types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

// Mock user for development - replace with real auth
const mockUser: User | null = null; // Set to null for public view

export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    user: mockUser,
    isAuthenticated: !!mockUser,
    isLoading: false,
    error: null,
  });

  // Simulated auth methods (replace with real implementation)
  const login = async (credentials: { email: string; password: string }) => {
    setAuthState(prev => ({ ...prev, isLoading: true }));
    
    // Simulate API call
    setTimeout(() => {
      // Mock successful login
      const mockLoggedInUser: User = {
        id: '1',
        email: credentials.email,
        firstName: 'John',
        lastName: 'Doe',
        fullName: 'John Doe',
        role: 'director',
        permissions: ['applications.read', 'applications.review', 'dashboard.director'],
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      setAuthState({
        user: mockLoggedInUser,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });
    }, 1000);
  };

  const logout = () => {
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
    });
  };

  const hasRole = (role: UserRole): boolean => {
    return authState.user?.role === role;
  };

  const hasPermission = (permission: Permission): boolean => {
    return authState.user?.permissions.includes(permission) ?? false;
  };

  const hasAnyRole = (roles: UserRole[]): boolean => {
    return authState.user ? roles.includes(authState.user.role) : false;
  };

  return {
    ...authState,
    login,
    logout,
    hasRole,
    hasPermission,
    hasAnyRole,
  };
}
