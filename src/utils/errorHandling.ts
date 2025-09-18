// Error Handling Utilities
import React from 'react';

export interface ErrorInfo {
  message: string;
  component?: string;
  timestamp: number;
  url?: string;
}

/**
 * Centralized error logging that replaces console.error
 */
export const logError = (error: Error | string, component?: string, context?: any) => {
  const errorInfo: ErrorInfo = {
    message: error instanceof Error ? error.message : error,
    component,
    timestamp: Date.now(),
    url: typeof window !== 'undefined' ? window.location.href : undefined
  };

  // In development, log to console
  if (process.env.NODE_ENV === 'development') {
    console.error('[Error]', errorInfo, context);
  }

  // In production, you could send to error tracking service
  if (process.env.NODE_ENV === 'production') {
    // Example: Send to error tracking service
    // trackError(errorInfo, context);
  }

  return errorInfo;
};

/**
 * Safe image loading with fallback
 */
export const handleImageError = (
  event: React.SyntheticEvent<HTMLImageElement>,
  fallbackSrc?: string,
  component?: string
) => {
  const img = event.currentTarget;
  const originalSrc = img.src;

  logError(`Image failed to load: ${originalSrc}`, component);

  if (fallbackSrc && img.src !== fallbackSrc) {
    img.src = fallbackSrc;
  } else {
    // Set a default placeholder or hide the image
    img.style.display = 'none';
  }
};

/**
 * Safe video loading with fallback
 */
export const handleVideoError = (
  event: React.SyntheticEvent<HTMLVideoElement>,
  component?: string
) => {
  const video = event.currentTarget;
  logError(`Video failed to load: ${video.src}`, component);
  
  // Hide the video element or show a fallback
  video.style.display = 'none';
};

/**
 * Wrapper for async operations with error handling
 */
export const safeAsync = async <T>(
  operation: () => Promise<T>,
  fallback: T,
  component?: string
): Promise<T> => {
  try {
    return await operation();
  } catch (error) {
    logError(error instanceof Error ? error : new Error(String(error)), component);
    return fallback;
  }
};

/**
 * Safe DOM query with error handling
 */
export const safeQuerySelector = (
  selector: string,
  component?: string
): Element | null => {
  try {
    return document.querySelector(selector);
  } catch (error) {
    logError(`Invalid selector: ${selector}`, component);
    return null;
  }
};

/**
 * Performance-aware error boundary fallback
 */
export const createErrorFallback = (componentName: string) => {
  return function ErrorFallback({ error }: { error: Error }) {
    logError(error, componentName);
    
    return React.createElement('div', {
      className: 'p-4 border border-destructive/20 bg-destructive/5 rounded-lg'
    }, [
      React.createElement('h3', {
        key: 'title',
        className: 'font-semibold text-destructive mb-2'
      }, 'Something went wrong'),
      React.createElement('p', {
        key: 'message',
        className: 'text-sm text-muted-foreground'
      }, 'We\'re working to fix this issue. Please try refreshing the page.'),
      React.createElement('button', {
        key: 'button',
        onClick: () => window.location.reload(),
        className: 'mt-3 px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm hover:bg-primary/90 transition-colors'
      }, 'Refresh Page')
    ]);
  };
};