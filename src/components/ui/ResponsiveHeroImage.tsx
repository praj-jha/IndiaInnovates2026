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
    <img
      src="/vr.png"
      alt={alt}
      className={cn('w-full h-full object-cover transition-transform duration-500 hover:scale-110', className)}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      {...(priority ? { fetchpriority: 'high' as const } : {})}
    />
  );
}

export default ResponsiveHeroImage;
