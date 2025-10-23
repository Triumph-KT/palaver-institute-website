/**
 * Shared TypeScript Type Definitions
 * 
 * This file contains all shared type definitions used across the Palaver Institute platform.
 * Types are organized by domain and include comprehensive documentation for new developers.
 * 
 * @author Palaver Institute Development Team
 * @version 1.0.0
 */

// =============================================================================
// CORE ENUMS
// =============================================================================

/**
 * User roles within the Palaver Institute platform
 * Determines access levels and available features for each user type
 */
export enum UserRole {
  /** Public users - can view website and submit applications */
  PUBLIC = 'public',
  /** Registered applicants - can submit and track applications */
  APPLICANT = 'applicant',
  /** Active fellows - access to research resources and community */
  FELLOW = 'fellow',
  /** Directors - can review applications and manage research areas */
  DIRECTOR = 'director',
  /** Alumni - access to alumni community and deliverable tracking */
  ALUMNI = 'alumni',
  /** System administrators - full platform access */
  ADMIN = 'admin'
}

/**
 * Application status tracking throughout the review process
 */
export enum ApplicationStatus {
  /** Initial submission, awaiting review */
  PENDING = 'pending',
  /** Currently being reviewed by directors */
  UNDER_REVIEW = 'under_review',
  /** Application has been accepted */
  ACCEPTED = 'accepted',
  /** Application has been rejected */
  REJECTED = 'rejected',
  /** Application is on waitlist */
  WAITLISTED = 'waitlisted',
  /** Applicant withdrew their application */
  WITHDRAWN = 'withdrawn'
}

/**
 * Types of applications available in the platform
 */
export enum ApplicationType {
  /** Director position application */
  DIRECTOR = 'director',
  /** Fellowship program application */
  FELLOW = 'fellow',
  /** Internship program application */
  INTERN = 'intern'
}

/**
 * Publication status in the research management system
 */
export enum PublicationStatus {
  /** Draft version, not yet ready for review */
  DRAFT = 'draft',
  /** Under peer review process */
  UNDER_REVIEW = 'under_review',
  /** Published and publicly available */
  PUBLISHED = 'published',
  /** Archived or withdrawn publication */
  ARCHIVED = 'archived'
}

/**
 * Contact form inquiry types for proper routing
 */
export enum ContactType {
  /** General information inquiry */
  GENERAL = 'general',
  /** Partnership or collaboration inquiry */
  PARTNERSHIP = 'partnership',
  /** Media and press inquiries */
  MEDIA = 'media',
  /** Technical support request */
  SUPPORT = 'support',
  /** Research collaboration inquiry */
  RESEARCH = 'research'
}

// =============================================================================
// USER TYPES
// =============================================================================

/**
 * Core user information shared across the platform
 */
export interface User {
  /** Unique user identifier */
  id: string;
  /** User's email address (unique) */
  email: string;
  /** User's first name */
  firstName: string;
  /** User's last name */
  lastName: string;
  /** User's role in the platform */
  role: UserRole;
  /** Whether the user account is active */
  isActive: boolean;
  /** Account creation timestamp */
  createdAt: string;
  /** Last login timestamp */
  lastLogin?: string;
  /** User profile information */
  profile?: UserProfile;
}

/**
 * Extended user profile information
 */
export interface UserProfile {
  /** User's biography or description */
  bio?: string;
  /** Academic or professional institution */
  institution?: string;
  /** User's country */
  country?: string;
  /** LinkedIn profile URL */
  linkedinUrl?: string;
  /** Personal or professional website URL */
  websiteUrl?: string;
  /** Profile picture URL */
  avatarUrl?: string;
  /** User's research interests or specializations */
  researchInterests?: string[];
  /** Academic degree information */
  degrees?: Degree[];
}

/**
 * Academic degree information
 */
export interface Degree {
  /** Degree type (BS, MS, PhD, etc.) */
  type: string;
  /** Field of study */
  field: string;
  /** Granting institution */
  institution: string;
  /** Year completed or expected completion */
  year: number;
  /** Whether this is the highest degree */
  isHighest: boolean;
}

// =============================================================================
// APPLICATION TYPES
// =============================================================================

/**
 * Complete application data structure
 */
export interface Application {
  /** Unique application identifier */
  id: string;
  /** ID of the user who submitted the application */
  userId: string;
  /** Type of application (director, fellow, intern) */
  applicationType: ApplicationType;
  /** Current status of the application */
  status: ApplicationStatus;
  /** Specific position or lab applied for */
  positionApplied: string;
  /** Applicant's motivation letter */
  motivationLetter: string;
  /** Research proposal (if applicable) */
  researchProposal?: string;
  /** Reference contact information */
  references?: ApplicationReference[];
  /** Uploaded CV file information */
  cvFile?: FileUpload;
  /** Additional supporting documents */
  supportingDocuments?: FileUpload[];
  /** Application submission timestamp */
  submittedAt: string;
  /** Review completion timestamp */
  reviewedAt?: string;
  /** ID of the reviewer */
  reviewedBy?: string;
  /** Review notes and feedback */
  reviewNotes?: string;
  /** Application score (if applicable) */
  score?: number;
}

/**
 * Reference information for applications
 */
export interface ApplicationReference {
  /** Reference provider's name */
  name: string;
  /** Reference provider's email */
  email: string;
  /** Reference provider's institution */
  institution: string;
  /** Reference provider's position/title */
  position: string;
  /** Relationship to applicant */
  relationship: string;
}

/**
 * File upload information
 */
export interface FileUpload {
  /** Unique file identifier */
  id: string;
  /** Original filename */
  filename: string;
  /** File MIME type */
  mimeType: string;
  /** File size in bytes */
  size: number;
  /** Server file path */
  path: string;
  /** Upload timestamp */
  uploadedAt: string;
}

// =============================================================================
// RESEARCH TYPES
// =============================================================================

/**
 * Research school information
 */
export interface School {
  /** Unique school identifier */
  id: string;
  /** School name (e.g., "School of Human Systems") */
  name: string;
  /** School description and focus area */
  description: string;
  /** Whether the school is currently active */
  isActive: boolean;
  /** School creation timestamp */
  createdAt: string;
  /** Labs associated with this school */
  labs: Lab[];
}

/**
 * Research lab information
 */
export interface Lab {
  /** Unique lab identifier */
  id: string;
  /** ID of the parent school */
  schoolId: string;
  /** Lab name (e.g., "Indigenous Intelligence Lab") */
  name: string;
  /** Lab description and research focus */
  description: string;
  /** Whether this is a flagship lab */
  isFlagship: boolean;
  /** Whether the lab is currently active */
  isActive: boolean;
  /** Lab creation timestamp */
  createdAt: string;
  /** Publications from this lab */
  publications: Publication[];
  /** Current lab members */
  members?: LabMember[];
}

/**
 * Research publication information
 */
export interface Publication {
  /** Unique publication identifier */
  id: string;
  /** ID of the associated lab */
  labId: string;
  /** ID of the primary author */
  authorId: string;
  /** Publication title */
  title: string;
  /** Publication abstract */
  abstract: string;
  /** Full publication content or file path */
  content?: string;
  /** Current publication status */
  status: PublicationStatus;
  /** Journal or venue name */
  journalName?: string;
  /** Publication date */
  publicationDate?: string;
  /** Digital Object Identifier */
  doi?: string;
  /** Number of citations */
  citationCount: number;
  /** PDF file information */
  pdfFile?: FileUpload;
  /** Publication creation timestamp */
  createdAt: string;
  /** Last update timestamp */
  updatedAt: string;
  /** Co-authors information */
  coAuthors?: PublicationAuthor[];
  /** Publication tags/keywords */
  tags?: string[];
}

/**
 * Publication author information
 */
export interface PublicationAuthor {
  /** Author's user ID (if internal) */
  userId?: string;
  /** Author's name */
  name: string;
  /** Author's institution */
  institution: string;
  /** Whether this is the primary author */
  isPrimary: boolean;
  /** Author order in publication */
  order: number;
}

/**
 * Lab member information
 */
export interface LabMember {
  /** Member's user ID */
  userId: string;
  /** Member's role in the lab */
  role: string;
  /** When the member joined the lab */
  joinedAt: string;
  /** Whether the member is currently active */
  isActive: boolean;
}

// =============================================================================
// CONTACT & COMMUNICATION TYPES
// =============================================================================

/**
 * Contact form submission data
 */
export interface ContactSubmission {
  /** Unique submission identifier */
  id: string;
  /** Submitter's name */
  name: string;
  /** Submitter's email */
  email: string;
  /** Inquiry subject */
  subject: string;
  /** Inquiry message */
  message: string;
  /** Type of inquiry */
  type: ContactType;
  /** Whether the inquiry has been responded to */
  isResponded: boolean;
  /** Submission timestamp */
  createdAt: string;
  /** Response timestamp */
  respondedAt?: string;
  /** Response message */
  response?: string;
}

// =============================================================================
// DASHBOARD & ANALYTICS TYPES
// =============================================================================

/**
 * Dashboard statistics for different user roles
 */
export interface DashboardStats {
  /** Total number of applications */
  totalApplications: number;
  /** Pending applications count */
  pendingApplications: number;
  /** Total registered users */
  totalUsers: number;
  /** Total publications count */
  totalPublications: number;
  /** Active fellows count */
  activeFellows: number;
  /** Active directors count */
  activeDirectors: number;
  /** Recent activity summary */
  recentActivity: ActivityItem[];
}

/**
 * Activity item for dashboard feeds
 */
export interface ActivityItem {
  /** Unique activity identifier */
  id: string;
  /** Type of activity */
  type: 'application' | 'publication' | 'user_registration' | 'contact';
  /** Activity title */
  title: string;
  /** Activity description */
  description: string;
  /** Activity timestamp */
  timestamp: string;
  /** Related user information */
  user?: {
    id: string;
    name: string;
    role: UserRole;
  };
}

// =============================================================================
// API RESPONSE TYPES
// =============================================================================

/**
 * Standard API response wrapper
 */
export interface ApiResponse<T = any> {
  /** Whether the request was successful */
  success: boolean;
  /** Response data */
  data?: T;
  /** Error message (if unsuccessful) */
  message?: string;
  /** Additional error details */
  errors?: Record<string, string[]>;
  /** Response metadata */
  meta?: {
    /** Current page (for paginated responses) */
    page?: number;
    /** Items per page */
    limit?: number;
    /** Total items count */
    total?: number;
    /** Total pages count */
    totalPages?: number;
  };
}

/**
 * Authentication response data
 */
export interface AuthResponse {
  /** JWT access token */
  accessToken: string;
  /** JWT refresh token */
  refreshToken: string;
  /** User information */
  user: User;
  /** Token expiration timestamp */
  expiresAt: string;
}

/**
 * Paginated response data
 */
export interface PaginatedResponse<T> {
  /** Array of items */
  items: T[];
  /** Pagination metadata */
  pagination: {
    /** Current page number */
    page: number;
    /** Items per page */
    limit: number;
    /** Total items count */
    total: number;
    /** Total pages count */
    totalPages: number;
    /** Whether there are more pages */
    hasNext: boolean;
    /** Whether there are previous pages */
    hasPrev: boolean;
  };
}

// =============================================================================
// FORM TYPES
// =============================================================================

/**
 * Login form data
 */
export interface LoginForm {
  /** User's email address */
  email: string;
  /** User's password */
  password: string;
  /** Whether to remember the user */
  rememberMe?: boolean;
}

/**
 * Registration form data
 */
export interface RegisterForm {
  /** User's email address */
  email: string;
  /** User's password */
  password: string;
  /** Password confirmation */
  confirmPassword: string;
  /** User's first name */
  firstName: string;
  /** User's last name */
  lastName: string;
  /** User's institution */
  institution?: string;
  /** User's country */
  country?: string;
  /** Agreement to terms of service */
  agreeToTerms: boolean;
}

/**
 * Application form data
 */
export interface ApplicationForm {
  /** Type of application */
  applicationType: ApplicationType;
  /** Position or lab applied for */
  positionApplied: string;
  /** Motivation letter */
  motivationLetter: string;
  /** Research proposal (if applicable) */
  researchProposal?: string;
  /** Reference information */
  references: ApplicationReference[];
  /** CV file */
  cvFile?: File;
  /** Supporting documents */
  supportingDocuments?: File[];
}

/**
 * Contact form data
 */
export interface ContactForm {
  /** Submitter's name */
  name: string;
  /** Submitter's email */
  email: string;
  /** Inquiry subject */
  subject: string;
  /** Inquiry message */
  message: string;
  /** Type of inquiry */
  type: ContactType;
}

// =============================================================================
// UTILITY TYPES
// =============================================================================

/**
 * Generic ID type for type safety
 */
export type ID = string;

/**
 * ISO 8601 date string
 */
export type DateString = string;

/**
 * Email address string
 */
export type Email = string;

/**
 * URL string
 */
export type URL = string;

/**
 * Make all properties of T optional
 */
export type Partial<T> = {
  [P in keyof T]?: T[P];
};

/**
 * Pick specific properties from T
 */
export type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

/**
 * Omit specific properties from T
 */
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

/**
 * Create a type with all properties of T except those in K
 */
export type Without<T, K> = Pick<T, Exclude<keyof T, K>>;

// =============================================================================
// EXPORT ALL TYPES
// =============================================================================
// Note: Individual interfaces are already exported above, 
// so no need to re-export them here to avoid conflicts
