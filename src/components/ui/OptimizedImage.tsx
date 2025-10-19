import React, { useState, useRef, useEffect, memo } from 'react';
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
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
  type?: 'speaker' | 'logo' | 'default';
}

const OptimizedImageComponent = ({
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
  loading,
  decoding = 'async',
  type = 'default',
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  // Generate optimized image paths
  const getOptimizedPaths = (originalSrc: string) => {
    const filename = originalSrc.split('/').pop()?.replace(/\.(png|jpg|jpeg)$/i, '');

    if (type === 'speaker') {
      return {
        avif: `/optimized/${filename}.avif`,
        avifSmall: `/optimized/${filename}-sm.avif`,
        webp: `/optimized/${filename}.webp`,
        webpSmall: `/optimized/${filename}-sm.webp`,
        fallback: originalSrc,
      };
    } else if (type === 'logo') {
      return {
        avif: `/optimized/${filename}.avif`,
        avifSmall: `/optimized/${filename}-sm.avif`,
        webp: `/optimized/${filename}.webp`,
        webpSmall: `/optimized/${filename}-sm.webp`,
        fallback: originalSrc,
      };
    }

    return {
      fallback: originalSrc,
    };
  };

  const optimizedPaths = getOptimizedPaths(src);

  // Intersection Observer for lazy loading (only if not priority)
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
        threshold: 0.01,
        rootMargin: '50px' // Start loading slightly before visible
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
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}

      {/* Actual image */}
      {(isInView || priority) && !hasError && (
        <>
          {type === 'speaker' && optimizedPaths.avif ? (
            <picture>
              {/* AVIF format for best compression */}
              <source
                type="image/avif"
                srcSet={`${optimizedPaths.avifSmall} 180w, ${optimizedPaths.avif} 240w`}
                sizes={sizes || '(max-width: 768px) 180px, 240px'}
              />
              {/* WebP fallback */}
              <source
                type="image/webp"
                srcSet={`${optimizedPaths.webpSmall} 180w, ${optimizedPaths.webp} 240w`}
                sizes={sizes || '(max-width: 768px) 180px, 240px'}
              />
              {/* Original format fallback */}
              <img
                src={optimizedPaths.fallback}
                alt={alt}
                width={width || 240}
                height={height || 320}
                className={cn(
                  'w-full h-full object-cover transition-opacity duration-300',
                  isLoaded ? 'opacity-100' : 'opacity-0'
                )}
                onLoad={handleLoad}
                onError={handleError}
                loading={loading || (priority ? 'eager' : 'lazy')}
                decoding={decoding}
              />
            </picture>
          ) : type === 'logo' && optimizedPaths.avif ? (
            <picture>
              {/* AVIF format for best compression */}
              <source
                type="image/avif"
                srcSet={`${optimizedPaths.avifSmall} 120w, ${optimizedPaths.avif} 200w`}
                sizes={sizes || '(max-width: 768px) 120px, 200px'}
              />
              {/* WebP fallback */}
              <source
                type="image/webp"
                srcSet={`${optimizedPaths.webpSmall} 120w, ${optimizedPaths.webp} 200w`}
                sizes={sizes || '(max-width: 768px) 120px, 200px'}
              />
              {/* Original format fallback */}
              <img
                src={optimizedPaths.fallback}
                alt={alt}
                className={cn(
                  'w-full h-full object-cover transition-opacity duration-300',
                  isLoaded ? 'opacity-100' : 'opacity-0'
                )}
                onLoad={handleLoad}
                onError={handleError}
                loading={loading || (priority ? 'eager' : 'lazy')}
                decoding={decoding}
              />
            </picture>
          ) : (
            <img
              src={optimizedSrc}
              srcSet={srcSet}
              sizes={sizes}
              alt={alt}
              width={width}
              height={height}
              className={cn(
                'w-full h-full object-cover transition-opacity duration-300',
                isLoaded ? 'opacity-100' : 'opacity-0'
              )}
              onLoad={handleLoad}
              onError={handleError}
              loading={loading || (priority ? 'eager' : 'lazy')}
              decoding={decoding}
            />
          )}
        </>
      )}

      {/* Error fallback */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-gray-400 text-sm">Image failed to load</div>
        </div>
      )}
    </div>
  );
};

OptimizedImageComponent.displayName = 'OptimizedImage';

export const OptimizedImage = memo(OptimizedImageComponent);
export default OptimizedImage;
