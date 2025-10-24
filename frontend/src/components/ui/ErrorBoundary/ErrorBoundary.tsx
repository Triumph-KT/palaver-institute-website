/**
 * Error Boundary Component
 * 
 * Catches JavaScript errors anywhere in the component tree and displays a fallback UI.
 * Provides different error displays based on error type and context.
 */

'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Button } from '../Button';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  showDetails?: boolean;
  context?: string; // e.g., "Navigation", "Dashboard", "Form"
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null,
    };
  }

  override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });

    // Log error to monitoring service (replace with actual service)
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // TODO: Send to error monitoring service
    // errorMonitoring.captureException(error, {
    //   context: this.props.context,
    //   componentStack: errorInfo.componentStack,
    // });
  }

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  override render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <div className="max-w-md w-full">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              
              {/* Error Icon */}
              <div className="w-16 h-16 bg-error-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="w-8 h-8 text-error-500" />
              </div>

              {/* Error Message */}
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Something went wrong
              </h2>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                {this.props.context 
                  ? `There was an error in the ${this.props.context} component. `
                  : 'An unexpected error occurred. '
                }
                We've been notified and are working to fix this issue.
              </p>

              {/* Action Buttons */}
              <div className="space-y-4">
                <Button
                  onClick={this.handleRetry}
                  variant="solid"
                  color="primary"
                  size="lg"
                  fullWidth
                  leftIcon={<RefreshCw className="w-4 h-4" />}
                >
                  Try Again
                </Button>
                
                <Button
                  onClick={this.handleGoHome}
                  variant="outline"
                  color="neutral"
                  size="lg"
                  fullWidth
                  leftIcon={<Home className="w-4 h-4" />}
                >
                  Go to Homepage
                </Button>
              </div>

              {/* Error Details (Development Only) */}
              {this.props.showDetails && process.env.NODE_ENV === 'development' && (
                <details className="mt-8 text-left">
                  <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
                    Error Details (Development)
                  </summary>
                  <div className="mt-4 p-4 bg-gray-100 rounded-lg text-xs font-mono overflow-auto">
                    <div className="mb-4">
                      <strong>Error:</strong>
                      <pre className="mt-1 text-error-600">{this.state.error?.toString()}</pre>
                    </div>
                    {this.state.errorInfo && (
                      <div>
                        <strong>Component Stack:</strong>
                        <pre className="mt-1 text-gray-600">{this.state.errorInfo.componentStack}</pre>
                      </div>
                    )}
                  </div>
                </details>
              )}
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// HOC for wrapping components with error boundary
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  context?: string
) {
  const WrappedComponent = (props: P) => (
    <ErrorBoundary context={context} showDetails>
      <Component {...props} />
    </ErrorBoundary>
  );

  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;
  return WrappedComponent;
}
