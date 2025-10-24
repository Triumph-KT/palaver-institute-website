// Base UI Components Export
// Core components for the Palaver Institute design system

export { Button } from './Button';
export { Card } from './Card';
export { ErrorBoundary, withErrorBoundary } from './ErrorBoundary';
export {
  LoadingSpinner,
  PageLoading,
  SectionLoading,
  CardLoading,
  TableLoading,
  InlineLoading,
  LoadingOverlay,
} from './Loading';

// TODO: Uncomment as additional components are created
// export { Input } from './Input';
// export { Modal } from './Modal';
// export { Table } from './Table';
// export { Badge } from './Badge';
// export { Avatar } from './Avatar';

// Re-export types
export type { ButtonProps } from './Button';
export type { 
  CardProps,
  CardHeaderProps,
  CardContentProps,
  CardFooterProps,
  CardTitleProps,
  CardDescriptionProps 
} from './Card';
export type {
  LoadingSpinnerProps,
  PageLoadingProps,
  SectionLoadingProps,
  CardLoadingProps,
  TableLoadingProps,
  InlineLoadingProps,
  LoadingOverlayProps,
} from './Loading';

// TODO: Uncomment as additional component types are created
// export type { InputProps } from './Input';
// export type { ModalProps } from './Modal';
// export type { TableProps } from './Table';
