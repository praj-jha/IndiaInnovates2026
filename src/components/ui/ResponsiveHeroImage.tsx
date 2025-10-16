import React from 'react';
import { cn } from '@/lib/utils';

interface ResponsiveHeroImageProps {
  alt: string;
  className?: string;
  priority?: boolean;
}

export function ResponsiveHeroImage({
  alt,
  className,
  priority = true
}: ResponsiveHeroImageProps) {
  return (
    <picture className={cn('block w-full h-full', className)}>
      {/* WebP sources for modern browsers */}
      <source
        media="(max-width: 767px)"
        srcSet="/optimized/bgct-mobile.webp"
        type="image/webp"
      />
      <source
        media="(max-width: 1199px)"
        srcSet="/optimized/bgct-tablet.webp"
        type="image/webp"
      />
      <source
        media="(min-width: 1200px)"
        srcSet="/optimized/bgct-desktop.webp"
        type="image/webp"
      />

      {/* Fallback for browsers that don't support WebP */}
      <img
        src="/optimized/bgct-desktop.webp"
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        {...(priority ? { fetchpriority: 'high' as const } : {})}
      />
    </picture>
  );
}

export default ResponsiveHeroImage;
