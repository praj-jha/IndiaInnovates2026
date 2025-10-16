// Image preloading utility for better performance
interface PreloadOptions {
  priority?: boolean;
  media?: string;
}

class ImagePreloader {
  private static preloadedImages = new Set<string>();
  private static criticalImagesPreloaded = false;
  
  static preload(src: string, options: PreloadOptions = {}): void {
    // Don't preload the same image multiple times
    if (this.preloadedImages.has(src)) return;
    
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    
    if (options.media) {
      link.media = options.media;
    }
    
    if (options.priority) {
      link.setAttribute('fetchpriority', 'high');
    }
    
    document.head.appendChild(link);
    this.preloadedImages.add(src);
  }
  
  // Preload critical images immediately
  static preloadCriticalImages(): void {
    if (this.criticalImagesPreloaded) return;
    
    // Preload critical above-the-fold images with high priority
    this.preload('/optimized/bgct-desktop.webp', { 
      priority: true, 
      media: '(min-width: 1200px)' 
    });
    this.preload('/optimized/bgct-tablet.webp', { 
      priority: true, 
      media: '(max-width: 1199px) and (min-width: 768px)' 
    });
    this.preload('/optimized/bgct-mobile.webp', { 
      priority: true, 
      media: '(max-width: 767px)' 
    });
    
    this.criticalImagesPreloaded = true;
  }
  
   static preloadProfileImages(): void {
    // Preload profile images only when testimonials section is near
    const profileImages = [
      '/optimized/1.webp',
      '/optimized/2.webp',
      '/optimized/3.webp',
      '/optimized/4.webp'
    ];

    profileImages.forEach(src => {
      this.preload(src);
    });
  }

  static observeTestimonialsSection(): void {
    // Wait for the testimonials section to exist and observe it
    const checkForTestimonials = () => {
      const testimonialsSection = document.querySelector('#testimonials');
      if (testimonialsSection) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              this.preloadProfileImages();
              observer.disconnect();
            }
          },
          { 
            threshold: 0,
            rootMargin: '200px' // Start preloading when section is 200px away
          }
        );
        observer.observe(testimonialsSection);
      } else {
        // If testimonials section doesn't exist yet, try again later
        setTimeout(checkForTestimonials, 500);
      }
    };
    
    checkForTestimonials();
  }
}

// Initialize critical image preloading
if (typeof window !== 'undefined') {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      ImagePreloader.preloadCriticalImages();
      // Set up testimonials section observer
      ImagePreloader.observeTestimonialsSection();
    });
  } else {
    ImagePreloader.preloadCriticalImages();
    // Set up testimonials section observer
    ImagePreloader.observeTestimonialsSection();
  }
}

export default ImagePreloader;
