/**
 * Authentication-related TypeScript type definitions
 * Types for login, registration, and session management
 */

import { ID, Timestamp } from './common';
import { User, UserRole, Permission } from './user';

// Authentication credentials
export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterCredentials {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  acceptTerms: boolean;
}

// Password management
export interface PasswordResetRequest {
  email: string;
}

export interface PasswordReset {
  token: string;
  password: string;
  confirmPassword: string;
}

export interface PasswordChange {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

// JWT Token structure
export interface JWTPayload {
  sub: ID;              // User ID
  email: string;
  role: UserRole;
  permissions: Permission[];
  iat: number;          // Issued at
  exp: number;          // Expires at
}

// Authentication session
export interface AuthSession {
  user: User;
  accessToken: string;
  refreshToken: string;
  expiresAt: Timestamp;
  issuedAt: Timestamp;
}

// Authentication state
export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
  session: AuthSession | null;
}

// Authentication context
export interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (credentials: RegisterCredentials) => Promise<void>;
  logout: () => void;
  refreshToken: () => Promise<void>;
  resetPassword: (request: PasswordResetRequest) => Promise<void>;
  confirmPasswordReset: (reset: PasswordReset) => Promise<void>;
  changePassword: (change: PasswordChange) => Promise<void>;
  hasRole: (role: UserRole) => boolean;
  hasPermission: (permission: Permission) => boolean;
  hasAnyPermission: (permissions: Permission[]) => boolean;
  hasAllPermissions: (permissions: Permission[]) => boolean;
}

// API response types
export interface LoginResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

export interface RegisterResponse {
  user: User;
  message: string;
  requiresEmailVerification?: boolean;
}

export interface RefreshTokenResponse {
  accessToken: string;
  expiresIn: number;
}

// Email verification
export interface EmailVerification {
  token: string;
}

export interface EmailVerificationRequest {
  email: string;
}

// Two-factor authentication (future feature)
export interface TwoFactorSetup {
  secret: string;
  qrCode: string;
  backupCodes: string[];
}

export interface TwoFactorVerification {
  code: string;
  backupCode?: string;
}

// OAuth providers (future feature)
export type OAuthProvider = 'google' | 'github' | 'linkedin';

export interface OAuthCredentials {
  provider: OAuthProvider;
  code: string;
  redirectUri: string;
}

// Security events
export interface SecurityEvent {
  id: ID;
  userId: ID;
  type: 'login' | 'logout' | 'password_change' | 'failed_login' | 'account_locked';
  ipAddress: string;
  userAgent: string;
  location?: {
    country: string;
    city: string;
  };
  timestamp: Timestamp;
  metadata?: Record<string, any>;
}

// Account security settings
export interface SecuritySettings {
  twoFactorEnabled: boolean;
  lastPasswordChange: Timestamp;
  loginNotifications: boolean;
  sessionTimeout: number; // minutes
  allowedIpAddresses?: string[];
  blockedIpAddresses?: string[];
}

// Permission checking helpers
export interface PermissionCheck {
  resource: string;
  action: string;
  context?: Record<string, any>;
}

// Role-based access control
export interface RolePermissions {
  [key: string]: Permission[];
}

// Default role permissions
export const DEFAULT_PERMISSIONS: RolePermissions = {
  admin: [
    'users.read', 'users.write', 'users.delete',
    'applications.read', 'applications.review', 'applications.approve',
    'research.read', 'research.write', 'research.publish',
    'dashboard.admin', 'dashboard.director',
    'system.settings'
  ],
  director: [
    'users.read',
    'applications.read', 'applications.review',
    'research.read', 'research.write', 'research.publish',
    'dashboard.director'
  ],
  fellow: [
    'research.read', 'research.write'
  ],
  alumni: [
    'research.read'
  ],
  applicant: []
};
