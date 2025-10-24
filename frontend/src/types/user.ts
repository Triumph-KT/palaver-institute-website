/**
 * User-related TypeScript type definitions
 * Types for user accounts, profiles, and authentication
 */

import { ID, Timestamp, Status } from './common';

// User roles in the Palaver Institute system
export type UserRole = 
  | 'admin'           // System administrator
  | 'director'        // Research director
  | 'fellow'          // Current fellow
  | 'alumni'          // Former fellow
  | 'applicant';      // Application submitted

// User permissions
export type Permission = 
  | 'users.read'
  | 'users.write'
  | 'users.delete'
  | 'applications.read'
  | 'applications.review'
  | 'applications.approve'
  | 'research.read'
  | 'research.write'
  | 'research.publish'
  | 'dashboard.admin'
  | 'dashboard.director'
  | 'system.settings';

// Core user interface
export interface User {
  id: ID;
  email: string;
  firstName: string;
  lastName: string;
  fullName: string; // Computed: firstName + lastName
  role: UserRole;
  permissions: Permission[];
  status: Status;
  avatar?: string;
  bio?: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  lastLoginAt?: Timestamp;
}

// User profile with extended information
export interface UserProfile extends User {
  phone?: string;
  location?: {
    country: string;
    city: string;
    timezone: string;
  };
  academic: {
    institution?: string;
    degree?: string;
    fieldOfStudy?: string;
    graduationYear?: number;
  };
  social: {
    linkedin?: string;
    twitter?: string;
    website?: string;
    orcid?: string;
  };
  preferences: {
    language: string;
    notifications: {
      email: boolean;
      push: boolean;
      digest: boolean;
    };
    theme: 'light' | 'dark' | 'auto';
  };
}

// Director-specific information
export interface Director extends UserProfile {
  role: 'director';
  school: {
    id: ID;
    name: string;
  };
  lab: {
    id: ID;
    name: string;
  };
  specialization: string[];
  yearsExperience: number;
  publications: Publication[];
}

// Fellow-specific information
export interface Fellow extends UserProfile {
  role: 'fellow';
  cohort: {
    year: number;
    cycle: 'spring' | 'fall';
  };
  mentor?: {
    id: ID;
    name: string;
  };
  research: {
    area: string;
    project: string;
    status: 'planning' | 'active' | 'completed';
  };
  fellowship: {
    startDate: Timestamp;
    endDate: Timestamp;
    stipend: number;
    currency: string;
  };
}

// Alumni information
export interface Alumni extends UserProfile {
  role: 'alumni';
  fellowship: {
    year: number;
    cohort: string;
    completedAt: Timestamp;
  };
  currentPosition?: {
    title: string;
    organization: string;
    startDate: Timestamp;
  };
  achievements: Achievement[];
  mentoring: {
    isAvailable: boolean;
    currentMentees: ID[];
    specialties: string[];
  };
}

// Publication type
export interface Publication {
  id: ID;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  doi?: string;
  url?: string;
  type: 'journal' | 'conference' | 'book' | 'thesis' | 'other';
}

// Achievement type
export interface Achievement {
  id: ID;
  title: string;
  description: string;
  date: Timestamp;
  type: 'award' | 'publication' | 'grant' | 'speaking' | 'other';
  url?: string;
}

// User creation and update types
export interface CreateUserRequest {
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  password: string;
}

export interface UpdateUserRequest {
  firstName?: string;
  lastName?: string;
  bio?: string;
  phone?: string;
  avatar?: string;
  preferences?: Partial<UserProfile['preferences']>;
}

// User search and filtering
export interface UserFilters {
  role?: UserRole;
  status?: Status;
  school?: string;
  cohort?: string;
  search?: string;
}

// User statistics for dashboards
export interface UserStats {
  total: number;
  byRole: Record<UserRole, number>;
  byStatus: Record<Status, number>;
  recentRegistrations: number;
  activeThisMonth: number;
}
