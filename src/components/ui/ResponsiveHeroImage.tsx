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
    <picture>
      {/* AVIF format for best compression */}
      <source
        type="image/avif"
        srcSet="/optimized/vr-mobile.avif 640w, /optimized/vr-tablet.avif 1024w, /optimized/vr-desktop.avif 1920w"
        sizes="100vw"
      />
      {/* WebP fallback */}
      <source
        type="image/webp"
        srcSet="/optimized/vr-mobile.webp 640w, /optimized/vr-tablet.webp 1024w, /optimized/vr-desktop.webp 1920w"
        sizes="100vw"
      />
      {/* PNG fallback for older browsers */}
      <img
        src="/vr.png"
        alt={alt}
        className={cn('w-full h-full object-cover transition-transform duration-500 hover:scale-110', className)}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        {...(priority ? { fetchpriority: 'high' as const } : {})}
        width="1920"
        height="1080"
      />
    </picture>
  );
}

export default ResponsiveHeroImage;
