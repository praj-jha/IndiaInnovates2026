import { useEffect, useState, useRef } from "react";

interface NumberTickerProps {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  shouldStart: boolean;
}

function NumberTicker({ value, duration = 2000, suffix = "", prefix = "", shouldStart }: NumberTickerProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    const startTime = Date.now();
    const endTime = startTime + duration;

    const timer = setInterval(() => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(easeOutQuart * value);
      
      setCurrent(currentValue);

      if (now >= endTime) {
        setCurrent(value);
        clearInterval(timer);
      }
    }, 16); // ~60fps

    return () => clearInterval(timer);
  }, [value, duration, shouldStart]);

  return (
    <span className="font-bold text-black dark:text-white">
      {prefix}{current.toLocaleString()}{suffix}
    </span>
  );
}

export default function NumberTickerSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    { value: 1500, suffix: "+", label: "Students Trained" },
    { value: 250, suffix: "+", label: "Companies Hiring" },
    { value: 95, suffix: "%", label: "Placement Rate" },
    { value: 4.8, suffix: "/5", label: "Average Rating" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the component is visible
        rootMargin: '0px 0px -50px 0px' // Start animation slightly before fully visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-16 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white">
                <NumberTicker 
                  value={stat.value} 
                  suffix={stat.suffix}
                  duration={2000 + index * 200} // Stagger animations
                  shouldStart={isVisible}
                />
              </div>
              <p className="text-sm md:text-base font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
