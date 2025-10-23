/**
 * Common TypeScript type definitions for Palaver Institute
 * Base types used throughout the application
 */

// Basic utility types
export type ID = string;
export type Timestamp = Date;

// API Response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T = any> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Component prop types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
}

// Size variants used across components
export type SizeVariant = 'sm' | 'md' | 'lg' | 'xl';

// Color variants based on our design system
export type ColorVariant = 
  | 'primary'     // Palaver orange
  | 'secondary'   // Palaver blue
  | 'accent'      // Palaver purple
  | 'success'     // Green
  | 'warning'     // Yellow
  | 'error'       // Red
  | 'neutral';    // Gray

// Button and interactive element variants
export type ButtonVariant = 
  | 'solid' 
  | 'outline' 
  | 'ghost' 
  | 'link';

// Loading and async states
export interface AsyncState<T = any> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

// Form field states
export interface FormFieldState {
  value: string;
  error?: string;
  touched: boolean;
  dirty: boolean;
}

// Generic form state
export interface FormState<T extends Record<string, any> = Record<string, any>> {
  values: T;
  errors: Partial<Record<keyof T, string>>;
  touched: Partial<Record<keyof T, boolean>>;
  isSubmitting: boolean;
  isValid: boolean;
}

// Status types
export type Status = 'active' | 'inactive' | 'pending' | 'archived';

// Priority levels
export type Priority = 'low' | 'medium' | 'high' | 'urgent';

// Generic list item for dropdowns, selects, etc.
export interface ListItem {
  id: ID;
  label: string;
  value: string;
  disabled?: boolean;
  icon?: React.ComponentType;
}

// File upload types
export interface FileUpload {
  id: ID;
  name: string;
  size: number;
  type: string;
  url?: string;
  uploadedAt: Timestamp;
}

// Notification types
export interface Notification {
  id: ID;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  timestamp: Timestamp;
  read: boolean;
  actions?: NotificationAction[];
}

export interface NotificationAction {
  label: string;
  action: () => void;
  variant?: ButtonVariant;
}

// Search and filter types
export interface SearchFilters {
  query?: string;
  status?: Status;
  dateFrom?: Timestamp;
  dateTo?: Timestamp;
  tags?: string[];
}

export interface SortOption {
  field: string;
  direction: 'asc' | 'desc';
}

// Table column definition
export interface TableColumn<T = any> {
  key: keyof T;
  label: string;
  sortable?: boolean;
  width?: string;
  render?: (value: any, row: T) => React.ReactNode;
}

// Modal and dialog types
export interface ModalProps extends BaseComponentProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: SizeVariant;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
}

// Theme and styling
export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    success: string;
    warning: string;
    error: string;
    neutral: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    full: string;
  };
}
