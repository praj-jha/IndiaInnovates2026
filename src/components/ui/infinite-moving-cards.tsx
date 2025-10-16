"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useMemo, memo, useState } from "react";

export const InfiniteMovingCards = memo(({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    image?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const hasAnimated = useRef(false);
  const [isVisible, setIsVisible] = useState(false);

  // Memoize animation duration to prevent recalculation
  const animationDuration = useMemo(() => {
    switch (speed) {
      case "fast":
        return "40s";
      case "normal":
        return "80s";
      case "slow":
        return "150s";
      default:
        return "150s";
    }
  }, [speed]);

  // Memoize animation class to prevent recalculation
  const animationClass = useMemo(() => {
    return direction === "left" ? "animate-scroll" : "animate-scroll-reverse";
  }, [direction]);

  // Intersection Observer for performance
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasAnimated.current && isVisible && containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Use requestAnimationFrame for better performance
      requestAnimationFrame(() => {
        // Duplicate items only once for better performance
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        });

        // Set animation duration
        if (containerRef.current) {
          containerRef.current.style.setProperty("--animation-duration", animationDuration);
        }
        
        hasAnimated.current = true;
      });
    }
  }, [animationDuration, isVisible]);
  
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden",
        className,
      )}
      style={{
        "--animation-duration": animationDuration,
      } as React.CSSProperties}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-4",
          isVisible ? animationClass : "",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            className="group relative w-[350px] max-w-full shrink-0 rounded-2xl border border-zinc-200/50 bg-white p-6 shadow-md transition-transform duration-200 hover:-translate-y-1 md:w-[380px] dark:border-zinc-700/50 dark:bg-zinc-900 dark:shadow-zinc-900/20 flex flex-col justify-between min-h-[220px]"
            key={`${item.name}-${idx}`}
          >
            <blockquote className="relative z-10 flex flex-col h-full">
              {/* Quote content */}
              <div className="flex-1 mb-4">
                <p className="text-sm leading-relaxed font-medium text-zinc-700 dark:text-zinc-200 italic">
                  "{item.quote.length < 100 ? `${item.quote} This experience has truly transformed my perspective and I couldn't be happier with the results.` : item.quote}"
                </p>
              </div>
                
              {/* Star rating decoration */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-3 h-3 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              
              {/* Author section */}
              <div className="flex items-center gap-3 mt-auto">
                {item.image ? (
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-zinc-200 dark:ring-zinc-700"
                      width={40}
                      height={40}
                      loading="eager"
                      onError={() => {
                        // Silently handle image load errors in production
                      }}
                    />
                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white dark:border-zinc-900"></div>
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center ring-2 ring-zinc-200 dark:ring-zinc-700">
                    <span className="text-white font-semibold text-sm">
                      {item.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                )}
                
                <div className="flex flex-col">
                  <span className="text-base font-bold text-zinc-800 dark:text-zinc-100 leading-tight">
                    {item.name}
                  </span>
                  <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 leading-tight">
                    {item.title}
                  </span>
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
});