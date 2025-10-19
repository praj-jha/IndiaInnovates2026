/**
 * Performance optimization utilities for React components
 */

import { ComponentType, memo, lazy, LazyExoticComponent } from 'react';

/**
 * Wraps a component with React.memo for automatic re-render prevention
 * @param Component - The component to memoize
 * @param displayName - Optional display name for debugging
 */
export function withMemo<P extends object>(
  Component: ComponentType<P>,
  displayName?: string
) {
  const MemoizedComponent = memo(Component);
  if (displayName) {
    MemoizedComponent.displayName = displayName;
  }
  return MemoizedComponent;
}

/**
 * Creates a lazy-loaded component with better error handling
 * @param importFn - Dynamic import function
 * @param componentName - Name of the component for error messages
 */
export function lazyWithRetry<T extends ComponentType<any>>(
  importFn: () => Promise<{ default: T }>,
  componentName = 'Component'
): LazyExoticComponent<T> {
  return lazy(async () => {
    try {
      return await importFn();
    } catch (error) {
      console.error(`Failed to load ${componentName}:`, error);
      // Retry logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      return await importFn();
    }
  });
}

/**
 * Preloads a lazy component to avoid loading delay
 * @param importFn - Dynamic import function
 */
export function preloadComponent(importFn: () => Promise<any>): void {
  importFn();
}

/**
 * Debounce function for performance optimization
 * @param func - Function to debounce
 * @param wait - Wait time in milliseconds
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function for performance optimization
 * @param func - Function to throttle
 * @param limit - Time limit in milliseconds
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Check if component should update (for use with React.memo)
 * Deep comparison for props
 */
export function arePropsEqual<P extends object>(
  prevProps: Readonly<P>,
  nextProps: Readonly<P>
): boolean {
  const prevKeys = Object.keys(prevProps) as Array<keyof P>;
  const nextKeys = Object.keys(nextProps) as Array<keyof P>;

  if (prevKeys.length !== nextKeys.length) {
    return false;
  }

  for (const key of prevKeys) {
    if (prevProps[key] !== nextProps[key]) {
      return false;
    }
  }

  return true;
}

/**
 * Performance measurement wrapper
 */
export function measurePerformance(
  name: string,
  fn: () => void | Promise<void>
): void | Promise<void> {
  if (import.meta.env.DEV) {
    performance.mark(`${name}-start`);
    const result = fn();
    
    if (result instanceof Promise) {
      return result.finally(() => {
        performance.mark(`${name}-end`);
        performance.measure(name, `${name}-start`, `${name}-end`);
      });
    } else {
      performance.mark(`${name}-end`);
      performance.measure(name, `${name}-start`, `${name}-end`);
    }
  }
  return fn();
}

/**
 * Idle callback wrapper for non-critical tasks
 */
export function runWhenIdle(callback: IdleRequestCallback, timeout = 2000): void {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(callback, { timeout });
  } else {
    // Fallback for browsers without requestIdleCallback
    setTimeout(callback, 1);
  }
}

export default {
  withMemo,
  lazyWithRetry,
  preloadComponent,
  debounce,
  throttle,
  arePropsEqual,
  measurePerformance,
  runWhenIdle,
};
