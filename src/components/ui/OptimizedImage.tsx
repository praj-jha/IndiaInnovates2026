import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
  sizes?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export function OptimizedImage({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
  placeholder = 'empty',
  sizes,
  onLoad,
  onError,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || isInView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '20px' // Reduced from 50px to prevent early loading
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority, isInView]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Generate optimized src and srcSet for responsive images
  const getOptimizedSrc = (originalSrc: string) => {
    // If it's already an optimized image, return as is
    if (originalSrc.includes('/optimized/')) {
      return originalSrc;
    }

    // Convert to optimized version
    const filename = originalSrc.split('/').pop();
    if (!filename) return originalSrc;

    // For profile images (thumbnails)
    if (['1.jpg', '2.JPG', '3.jpg', '4.jpg'].includes(filename)) {
      return `/optimized/${filename.toLowerCase().replace(/\.(jpg|jpeg)$/i, '.webp')}`;
    }

    // For hero background
    if (filename === 'bgct.png') {
      return `/optimized/bgct-desktop.webp`;
    }

    // For course images
    if (['MC.jpeg', 'IB.jpeg'].includes(filename)) {
      return `/optimized/${filename.replace(/\.(jpg|jpeg)$/i, '.webp')}`;
    }

    // For company logos
    if (['del.png', 'oyo.png', 'pwc.png', 'EYP.png'].includes(filename)) {
      return `/optimized/${filename.replace('.png', '.webp')}`;
    }

    return originalSrc;
  };

  const getResponsiveSrcSet = (originalSrc: string) => {
    const filename = originalSrc.split('/').pop();
    
    // For hero background, provide responsive sizes
    if (filename === 'bgct.png') {
      return [
        '/optimized/bgct-mobile.webp 800w',
        '/optimized/bgct-tablet.webp 1200w',
        '/optimized/bgct-desktop.webp 1920w'
      ].join(', ');
    }

    return undefined;
  };

  const optimizedSrc = getOptimizedSrc(src);
  const srcSet = getResponsiveSrcSet(src);

  return (
    <div 
      ref={imgRef}
      className={cn('relative overflow-hidden', className)}
      style={{ width, height }}
    >
      {/* Placeholder */}
      {placeholder === 'blur' && !isLoaded && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse" />
      )}

      {/* Actual image */}
      {(isInView || priority) && !hasError && (
        <img
          src={optimizedSrc}
          srcSet={srcSet}
          sizes={sizes}
          alt={alt}
          className={cn(
            'w-full h-full object-cover transition-opacity duration-300',
            isLoaded ? 'opacity-100' : 'opacity-0'
          )}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
      )}

      {/* Error fallback */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
          <div className="text-gray-400 text-sm">Image failed to load</div>
        </div>
      )}
    </div>
  );
}

export default OptimizedImage;
