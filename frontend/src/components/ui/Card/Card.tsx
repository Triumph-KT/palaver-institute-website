/**
 * Card Component
 * 
 * A flexible card component for displaying content with consistent styling.
 * Supports different variants and compound components.
 */

import React from 'react';
import { clsx } from 'clsx';
import { BaseComponentProps } from '@/types';

export interface CardProps extends BaseComponentProps {
  /**
   * Visual variant of the card
   */
  variant?: 'default' | 'outlined' | 'elevated' | 'ghost';
  
  /**
   * Padding size
   */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  
  /**
   * Whether the card is hoverable (adds hover effects)
   */
  hoverable?: boolean;
  
  /**
   * Whether the card is clickable (adds cursor pointer)
   */
  clickable?: boolean;
  
  /**
   * Click handler for the card
   */
  onClick?: () => void;
}

export interface CardHeaderProps extends BaseComponentProps {
  /**
   * Whether to add bottom border
   */
  bordered?: boolean;
}

export interface CardContentProps extends BaseComponentProps {}

export interface CardFooterProps extends BaseComponentProps {
  /**
   * Whether to add top border
   */
  bordered?: boolean;
  
  /**
   * Justify content alignment
   */
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
}

export interface CardTitleProps extends BaseComponentProps {
  /**
   * HTML heading level
   */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export interface CardDescriptionProps extends BaseComponentProps {}

// Base card styles
const baseCardStyles = [
  'rounded-lg',
  'transition-all',
  'duration-200',
];

// Card variant styles
const cardVariantStyles = {
  default: [
    'bg-white',
    'border',
    'border-gray-200',
  ],
  outlined: [
    'bg-white',
    'border-2',
    'border-gray-300',
  ],
  elevated: [
    'bg-white',
    'shadow-lg',
    'border',
    'border-gray-100',
  ],
  ghost: [
    'bg-transparent',
  ],
};

// Padding styles
const paddingStyles = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

// Hover styles
const hoverStyles = [
  'hover:shadow-md',
  'hover:border-gray-300',
];

// Clickable styles
const clickableStyles = [
  'cursor-pointer',
  'hover:bg-gray-50',
];

// Card Root Component
const CardRoot: React.FC<CardProps> = ({
  variant = 'default',
  padding = 'md',
  hoverable = false,
  clickable = false,
  onClick,
  className,
  children,
  ...props
}) => {
  const cardClasses = clsx(
    baseCardStyles,
    cardVariantStyles[variant],
    padding !== 'none' && paddingStyles[padding],
    hoverable && hoverStyles,
    clickable && clickableStyles,
    className
  );

  const handleClick = onClick || (clickable ? () => {} : undefined);

  return (
    <div
      className={cardClasses}
      onClick={handleClick}
      {...props}
    >
      {children}
    </div>
  );
};

// Card Header Component
const CardHeader: React.FC<CardHeaderProps> = ({
  bordered = false,
  className,
  children,
  ...props
}) => {
  const headerClasses = clsx(
    'flex',
    'flex-col',
    'space-y-2',
    bordered && 'pb-4 border-b border-gray-200',
    className
  );

  return (
    <div className={headerClasses} {...props}>
      {children}
    </div>
  );
};

// Card Content Component
const CardContent: React.FC<CardContentProps> = ({
  className,
  children,
  ...props
}) => {
  const contentClasses = clsx(
    'flex-1',
    className
  );

  return (
    <div className={contentClasses} {...props}>
      {children}
    </div>
  );
};

// Card Footer Component
const CardFooter: React.FC<CardFooterProps> = ({
  bordered = false,
  justify = 'end',
  className,
  children,
  ...props
}) => {
  const justifyClasses = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
  };

  const footerClasses = clsx(
    'flex',
    'items-center',
    justifyClasses[justify],
    bordered && 'pt-4 border-t border-gray-200',
    className
  );

  return (
    <div className={footerClasses} {...props}>
      {children}
    </div>
  );
};

// Card Title Component
const CardTitle: React.FC<CardTitleProps> = ({
  level = 3,
  className,
  children,
  ...props
}) => {
  const titleStyles = [
    'font-semibold',
    'text-gray-900',
    'leading-tight',
  ];

  const sizeStyles = {
    1: 'text-3xl',
    2: 'text-2xl',
    3: 'text-xl',
    4: 'text-lg',
    5: 'text-base',
    6: 'text-sm',
  };

  const titleClasses = clsx(
    titleStyles,
    sizeStyles[level],
    className
  );

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag className={titleClasses} {...props}>
      {children}
    </Tag>
  );
};

// Card Description Component
const CardDescription: React.FC<CardDescriptionProps> = ({
  className,
  children,
  ...props
}) => {
  const descriptionClasses = clsx(
    'text-sm',
    'text-gray-600',
    'leading-relaxed',
    className
  );

  return (
    <p className={descriptionClasses} {...props}>
      {children}
    </p>
  );
};

// Compound Card Component
export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Content: CardContent,
  Footer: CardFooter,
  Title: CardTitle,
  Description: CardDescription,
});
