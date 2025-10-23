/**
 * Button Component
 * 
 * A flexible, accessible button component following the Palaver Institute design system.
 * Supports multiple variants, sizes, and states.
 */

import React from 'react';
import { clsx } from 'clsx';
import { ButtonVariant, ColorVariant, SizeVariant } from '@/types';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual style variant
   */
  variant?: ButtonVariant;
  
  /**
   * Color theme
   */
  color?: ColorVariant;
  
  /**
   * Size of the button
   */
  size?: SizeVariant;
  
  /**
   * Whether the button is in a loading state
   */
  loading?: boolean;
  
  /**
   * Icon to display before the button text
   */
  leftIcon?: React.ReactNode;
  
  /**
   * Icon to display after the button text
   */
  rightIcon?: React.ReactNode;
  
  /**
   * Whether the button should take full width of its container
   */
  fullWidth?: boolean;
  
  /**
   * Button content
   */
  children: React.ReactNode;
}

// Base button styles
const baseStyles = [
  'inline-flex',
  'items-center',
  'justify-center',
  'border',
  'font-medium',
  'rounded-lg',
  'transition-all',
  'duration-200',
  'focus:outline-none',
  'focus:ring-2',
  'focus:ring-offset-2',
  'disabled:opacity-50',
  'disabled:cursor-not-allowed',
  'disabled:pointer-events-none',
];

// Variant styles
const variantStyles: Record<ButtonVariant, Record<ColorVariant, string[]>> = {
  solid: {
    primary: [
      'bg-palaver-orange-500',
      'border-palaver-orange-500',
      'text-white',
      'hover:bg-palaver-orange-600',
      'hover:border-palaver-orange-600',
      'focus:ring-palaver-orange-500',
    ],
    secondary: [
      'bg-palaver-blue-500',
      'border-palaver-blue-500',
      'text-white',
      'hover:bg-palaver-blue-600',
      'hover:border-palaver-blue-600',
      'focus:ring-palaver-blue-500',
    ],
    accent: [
      'bg-palaver-purple-500',
      'border-palaver-purple-500',
      'text-white',
      'hover:bg-palaver-purple-600',
      'hover:border-palaver-purple-600',
      'focus:ring-palaver-purple-500',
    ],
    success: [
      'bg-success-500',
      'border-success-500',
      'text-white',
      'hover:bg-success-600',
      'hover:border-success-600',
      'focus:ring-success-500',
    ],
    warning: [
      'bg-warning-500',
      'border-warning-500',
      'text-white',
      'hover:bg-warning-600',
      'hover:border-warning-600',
      'focus:ring-warning-500',
    ],
    error: [
      'bg-error-500',
      'border-error-500',
      'text-white',
      'hover:bg-error-600',
      'hover:border-error-600',
      'focus:ring-error-500',
    ],
    neutral: [
      'bg-gray-500',
      'border-gray-500',
      'text-white',
      'hover:bg-gray-600',
      'hover:border-gray-600',
      'focus:ring-gray-500',
    ],
  },
  outline: {
    primary: [
      'bg-transparent',
      'border-palaver-orange-500',
      'text-palaver-orange-500',
      'hover:bg-palaver-orange-50',
      'focus:ring-palaver-orange-500',
    ],
    secondary: [
      'bg-transparent',
      'border-palaver-blue-500',
      'text-palaver-blue-500',
      'hover:bg-palaver-blue-50',
      'focus:ring-palaver-blue-500',
    ],
    accent: [
      'bg-transparent',
      'border-palaver-purple-500',
      'text-palaver-purple-500',
      'hover:bg-palaver-purple-50',
      'focus:ring-palaver-purple-500',
    ],
    success: [
      'bg-transparent',
      'border-success-500',
      'text-success-500',
      'hover:bg-success-50',
      'focus:ring-success-500',
    ],
    warning: [
      'bg-transparent',
      'border-warning-500',
      'text-warning-500',
      'hover:bg-warning-50',
      'focus:ring-warning-500',
    ],
    error: [
      'bg-transparent',
      'border-error-500',
      'text-error-500',
      'hover:bg-error-50',
      'focus:ring-error-500',
    ],
    neutral: [
      'bg-transparent',
      'border-gray-500',
      'text-gray-500',
      'hover:bg-gray-50',
      'focus:ring-gray-500',
    ],
  },
  ghost: {
    primary: [
      'bg-transparent',
      'border-transparent',
      'text-palaver-orange-500',
      'hover:bg-palaver-orange-50',
      'focus:ring-palaver-orange-500',
    ],
    secondary: [
      'bg-transparent',
      'border-transparent',
      'text-palaver-blue-500',
      'hover:bg-palaver-blue-50',
      'focus:ring-palaver-blue-500',
    ],
    accent: [
      'bg-transparent',
      'border-transparent',
      'text-palaver-purple-500',
      'hover:bg-palaver-purple-50',
      'focus:ring-palaver-purple-500',
    ],
    success: [
      'bg-transparent',
      'border-transparent',
      'text-success-500',
      'hover:bg-success-50',
      'focus:ring-success-500',
    ],
    warning: [
      'bg-transparent',
      'border-transparent',
      'text-warning-500',
      'hover:bg-warning-50',
      'focus:ring-warning-500',
    ],
    error: [
      'bg-transparent',
      'border-transparent',
      'text-error-500',
      'hover:bg-error-50',
      'focus:ring-error-500',
    ],
    neutral: [
      'bg-transparent',
      'border-transparent',
      'text-gray-500',
      'hover:bg-gray-50',
      'focus:ring-gray-500',
    ],
  },
  link: {
    primary: [
      'bg-transparent',
      'border-transparent',
      'text-palaver-orange-500',
      'hover:text-palaver-orange-600',
      'hover:underline',
      'focus:ring-palaver-orange-500',
      'p-0',
      'h-auto',
      'font-normal',
    ],
    secondary: [
      'bg-transparent',
      'border-transparent',
      'text-palaver-blue-500',
      'hover:text-palaver-blue-600',
      'hover:underline',
      'focus:ring-palaver-blue-500',
      'p-0',
      'h-auto',
      'font-normal',
    ],
    accent: [
      'bg-transparent',
      'border-transparent',
      'text-palaver-purple-500',
      'hover:text-palaver-purple-600',
      'hover:underline',
      'focus:ring-palaver-purple-500',
      'p-0',
      'h-auto',
      'font-normal',
    ],
    success: [
      'bg-transparent',
      'border-transparent',
      'text-success-500',
      'hover:text-success-600',
      'hover:underline',
      'focus:ring-success-500',
      'p-0',
      'h-auto',
      'font-normal',
    ],
    warning: [
      'bg-transparent',
      'border-transparent',
      'text-warning-500',
      'hover:text-warning-600',
      'hover:underline',
      'focus:ring-warning-500',
      'p-0',
      'h-auto',
      'font-normal',
    ],
    error: [
      'bg-transparent',
      'border-transparent',
      'text-error-500',
      'hover:text-error-600',
      'hover:underline',
      'focus:ring-error-500',
      'p-0',
      'h-auto',
      'font-normal',
    ],
    neutral: [
      'bg-transparent',
      'border-transparent',
      'text-gray-500',
      'hover:text-gray-600',
      'hover:underline',
      'focus:ring-gray-500',
      'p-0',
      'h-auto',
      'font-normal',
    ],
  },
};

// Size styles
const sizeStyles: Record<SizeVariant, string[]> = {
  sm: ['px-3', 'py-1.5', 'text-sm', 'h-8'],
  md: ['px-4', 'py-2', 'text-base', 'h-10'],
  lg: ['px-6', 'py-3', 'text-lg', 'h-12'],
  xl: ['px-8', 'py-4', 'text-xl', 'h-14'],
};

// Loading spinner component
const LoadingSpinner: React.FC<{ size: SizeVariant }> = ({ size }) => {
  const spinnerSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-7 h-7',
  };

  return (
    <svg
      className={clsx('animate-spin', spinnerSizes[size])}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'solid',
  color = 'primary',
  size = 'md',
  loading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  disabled,
  className,
  children,
  ...props
}) => {
  const isDisabled = disabled || loading;

  const buttonClasses = clsx(
    baseStyles,
    variantStyles[variant][color],
    variant !== 'link' && sizeStyles[size],
    fullWidth && 'w-full',
    className
  );

  return (
    <button
      className={buttonClasses}
      disabled={isDisabled}
      {...props}
    >
      {loading && <LoadingSpinner size={size} />}
      {!loading && leftIcon && (
        <span className="mr-2 flex-shrink-0">{leftIcon}</span>
      )}
      <span className={loading ? 'ml-2' : ''}>{children}</span>
      {!loading && rightIcon && (
        <span className="ml-2 flex-shrink-0">{rightIcon}</span>
      )}
    </button>
  );
};
