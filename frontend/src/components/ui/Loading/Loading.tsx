/**
 * Loading Components
 * 
 * Various loading state components for different use cases.
 * Includes spinners, skeletons, and page-level loading states.
 */

import React from 'react';
import { clsx } from 'clsx';
import { Loader2 } from 'lucide-react';
import { SizeVariant } from '@/types';

// Basic loading spinner
export interface LoadingSpinnerProps {
  size?: SizeVariant;
  className?: string;
  color?: 'primary' | 'secondary' | 'white' | 'gray';
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  className,
  color = 'primary',
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12',
  };

  const colorClasses = {
    primary: 'text-palaver-orange-500',
    secondary: 'text-palaver-blue-500',
    white: 'text-white',
    gray: 'text-gray-500',
  };

  return (
    <Loader2 
      className={clsx(
        'animate-spin',
        sizeClasses[size],
        colorClasses[color],
        className
      )} 
    />
  );
};

// Page-level loading component
export interface PageLoadingProps {
  message?: string;
  showLogo?: boolean;
}

export const PageLoading: React.FC<PageLoadingProps> = ({
  message = 'Loading...',
  showLogo = true,
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        {showLogo && (
          <div className="mb-8">
            <img 
              src="/logo.png" 
              alt="Palaver Institute" 
              className="w-16 h-16 mx-auto object-contain"
            />
          </div>
        )}
        
        <LoadingSpinner size="xl" className="mb-4" />
        
        <p className="text-lg text-gray-600 font-medium">
          {message}
        </p>
      </div>
    </div>
  );
};

// Section loading component
export interface SectionLoadingProps {
  lines?: number;
  showTitle?: boolean;
  className?: string;
}

export const SectionLoading: React.FC<SectionLoadingProps> = ({
  lines = 3,
  showTitle = true,
  className,
}) => {
  return (
    <div className={clsx('animate-pulse', className)}>
      {showTitle && (
        <div className="h-8 bg-gray-200 rounded-lg w-1/3 mb-6"></div>
      )}
      
      <div className="space-y-4">
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={clsx(
              'h-4 bg-gray-200 rounded',
              index === lines - 1 ? 'w-2/3' : 'w-full'
            )}
          />
        ))}
      </div>
    </div>
  );
};

// Card loading skeleton
export interface CardLoadingProps {
  showImage?: boolean;
  showActions?: boolean;
  className?: string;
}

export const CardLoading: React.FC<CardLoadingProps> = ({
  showImage = false,
  showActions = false,
  className,
}) => {
  return (
    <div className={clsx('animate-pulse bg-white rounded-lg border p-6', className)}>
      {showImage && (
        <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
      )}
      
      <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
      <div className="space-y-2 mb-4">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        <div className="h-4 bg-gray-200 rounded w-4/6"></div>
      </div>
      
      {showActions && (
        <div className="flex space-x-2">
          <div className="h-8 bg-gray-200 rounded w-20"></div>
          <div className="h-8 bg-gray-200 rounded w-16"></div>
        </div>
      )}
    </div>
  );
};

// Table loading skeleton
export interface TableLoadingProps {
  rows?: number;
  columns?: number;
  showHeader?: boolean;
  className?: string;
}

export const TableLoading: React.FC<TableLoadingProps> = ({
  rows = 5,
  columns = 4,
  showHeader = true,
  className,
}) => {
  return (
    <div className={clsx('animate-pulse', className)}>
      <div className="bg-white rounded-lg border overflow-hidden">
        {showHeader && (
          <div className="bg-gray-50 px-6 py-4 border-b">
            <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
              {Array.from({ length: columns }).map((_, index) => (
                <div key={index} className="h-4 bg-gray-200 rounded w-3/4"></div>
              ))}
            </div>
          </div>
        )}
        
        <div className="divide-y divide-gray-200">
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <div key={rowIndex} className="px-6 py-4">
              <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
                {Array.from({ length: columns }).map((_, colIndex) => (
                  <div 
                    key={colIndex} 
                    className={clsx(
                      'h-4 bg-gray-200 rounded',
                      colIndex === 0 ? 'w-full' : 'w-2/3'
                    )}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Inline loading component for buttons and small elements
export interface InlineLoadingProps {
  size?: SizeVariant;
  text?: string;
  className?: string;
}

export const InlineLoading: React.FC<InlineLoadingProps> = ({
  size = 'sm',
  text,
  className,
}) => {
  return (
    <div className={clsx('flex items-center space-x-2', className)}>
      <LoadingSpinner size={size} />
      {text && (
        <span className="text-sm text-gray-600">{text}</span>
      )}
    </div>
  );
};

// Loading overlay for forms and modals
export interface LoadingOverlayProps {
  isLoading: boolean;
  message?: string;
  children: React.ReactNode;
  className?: string;
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  isLoading,
  message = 'Loading...',
  children,
  className,
}) => {
  return (
    <div className={clsx('relative', className)}>
      {children}
      
      {isLoading && (
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50 rounded-lg">
          <div className="text-center">
            <LoadingSpinner size="lg" className="mb-4" />
            <p className="text-gray-600 font-medium">{message}</p>
          </div>
        </div>
      )}
    </div>
  );
};
