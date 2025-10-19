import { memo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, Ticket } from "lucide-react";
import ResponsiveHeroImage from "@/components/ui/ResponsiveHeroImage";

const HeroSection = () => {
  return (
    <section
      className="relative py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden bg-white dark:bg-background"
      aria-label="Hero Section"
    >

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:40px_40px] opacity-50 dark:opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16 mb-16 lg:mb-20">
          <div className="flex-1 text-center lg:text-left max-w-3xl mx-auto lg:mx-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-[1.1] tracking-tight text-black dark:text-white">
              World's <span className="bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">biggest youth innovation</span> tech Summit!
            </h1>

            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg mb-8 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              Join India's premier innovation and technology summit. Connect with industry leaders, showcase your innovations, and be part of shaping the future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-700 hover:to-purple-800 dark:from-purple-600 dark:to-purple-700 dark:hover:from-purple-500 dark:hover:to-purple-600 text-white font-medium text-base tracking-wide hover:scale-[1.02] transition-all rounded-full px-8 shadow-lg shadow-purple-500/10 dark:shadow-purple-500/5"
                asChild
              >
                <Link to="/delegate-pass">
                  <Ticket className="mr-2 h-5 w-5" />
                  Get Delegate Pass
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-medium text-base tracking-wide bg-white/70 dark:bg-gray-900/50 hover:bg-purple-50 dark:hover:bg-purple-950/20 transition-all rounded-full px-8 border-purple-600 text-purple-600 hover:text-purple-700 dark:border-purple-400 dark:text-purple-400 dark:hover:text-purple-300 shadow-sm"
                asChild
              >
                <Link to="/exhibitor-registration">
                  Book Your Booth <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right image column */}
          <div className="flex-1 relative mt-12 lg:mt-0 w-full max-w-3xl mx-auto">
            <div className="relative h-80 lg:h-[480px] shadow-2xl overflow-hidden rounded-lg">
              <ResponsiveHeroImage
                alt="Financial professionals collaborating"
                priority={true}
              />

              {/* purple and Purple Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-purple-500/20 pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* Company Logos Section */}
        <div className="mt-10 pt-8">
          <div className="text-center">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-purple-600/20 dark:from-purple-900/40 dark:to-purple-900/30 border border-purple-500/30 dark:border-purple-700 rounded-full mb-8">
              <p className="text-purple-700 dark:text-purple-300 text-sm font-semibold tracking-wide uppercase">
                In Collaboration with
              </p>
            </div>            <div className="overflow-hidden">
              <div
                className="flex animate-scroll gap-8 md:gap-12 lg:gap-16"
                style={{ '--animation-duration': '25s' } as React.CSSProperties}
              >
                {/* First set of logos */}
                <img
                  src="/oyo.png"
                  alt="OYO"
                  loading="lazy"
                  decoding="async"
                  className="h-12 md:h-16 lg:h-20 w-auto opacity-90 hover:opacity-100 transition-opacity hover:scale-105 transform duration-200 flex-shrink-0"
                />
                <img
                  src="/TM.webp"
                  alt="Tech Mahindra"
                  loading="lazy"
                  decoding="async"
                  className="h-8 md:h-10 lg:h-12 w-auto opacity-90 hover:opacity-100 transition-opacity hover:scale-105 transform duration-200 flex-shrink-0"
                />
                <img
                  src="/ZSA.svg"
                  alt="ZS Associates"
                  loading="lazy"
                  decoding="async"
                  className="h-8 md:h-10 lg:h-12 w-auto opacity-90 hover:opacity-100 transition-opacity hover:scale-105 transform duration-200 flex-shrink-0"
                />
                <img
                  src="/RL.avif"
                  alt="Russell Reynolds"
                  loading="lazy"
                  decoding="async"
                  className="h-8 md:h-10 lg:h-12 w-auto opacity-90 hover:opacity-100 transition-opacity hover:scale-105 transform duration-200 flex-shrink-0"
                />
                <img
                  src="/kpm.svg"
                  alt="KPMG"
                  loading="lazy"
                  decoding="async"
                  className="h-8 md:h-10 lg:h-12 w-auto opacity-90 hover:opacity-100 transition-opacity hover:scale-105 transform duration-200 flex-shrink-0"
                />
                <img
                  src="/optimized/EYP.webp"
                  alt="EY"
                  loading="lazy"
                  decoding="async"
                  className="h-8 md:h-10 lg:h-12 w-auto opacity-90 hover:opacity-100 transition-opacity hover:scale-105 transform duration-200 flex-shrink-0"
                />
                <img
                  src="/optimized/del.webp"
                  alt="Deloitte"
                  loading="lazy"
                  decoding="async"
                  className="h-14 md:h-20 lg:h-24 w-auto opacity-90 hover:opacity-100 transition-opacity hover:scale-105 transform duration-200 flex-shrink-0"
                />
                <img
                  src="/optimized/pwc.webp"
                  alt="pwc"
                  loading="lazy"
                  decoding="async"
                  className="h-8 md:h-10 lg:h-12 w-auto opacity-90 hover:opacity-100 transition-opacity hover:scale-105 transform duration-200 flex-shrink-0"
                />

                {/* Duplicate set for seamless loop */}
                <img
                  src="/optimized/oyo.webp"
                  alt="OYO"
                  loading="lazy"
                  decoding="async"
                  className="h-12 md:h-16 lg:h-20 w-auto opacity-90 hover:opacity-100 transition-opacity hover:scale-105 transform duration-200 flex-shrink-0"
                />
                <img
                  src="/TM.webp"
                  alt="Tech Mahindra"
                  loading="lazy"
                  decoding="async"
                  className="h-8 md:h-10 lg:h-12 w-auto opacity-90 hover:opacity-100 transition-opacity hover:scale-105 transform duration-200 flex-shrink-0"
                />
                <img
                  src="/ZSA.svg"
                  alt="ZS Associates"
                  loading="lazy"
                  decoding="async"
                  className="h-8 md:h-10 lg:h-12 w-auto opacity-90 hover:opacity-100 transition-opacity hover:scale-105 transform duration-200 flex-shrink-0"
                />
                <img
                  src="/RL.avif"
                  alt="Russell Reynolds"
                  loading="lazy"
                  decoding="async"
                  className="h-8 md:h-10 lg:h-12 w-auto opacity-90 hover:opacity-100 transition-opacity hover:scale-105 transform duration-200 flex-shrink-0"
                />
                <img
                  src="/kpm.svg"
                  alt="KPMG"
                  loading="lazy"
                  decoding="async"
                  className="h-8 md:h-10 lg:h-12 w-auto opacity-90 hover:opacity-100 transition-opacity hover:scale-105 transform duration-200 flex-shrink-0"
                />
                <img
                  src="/optimized/EYP.webp"
                  alt="EY"
                  loading="lazy"
                  decoding="async"
                  className="h-8 md:h-10 lg:h-12 w-auto opacity-90 hover:opacity-100 transition-opacity hover:scale-105 transform duration-200 flex-shrink-0"
                />
                <img
                  src="/optimized/del.webp"
                  alt="Deloitte"
                  className="h-14 md:h-20 lg:h-24 w-auto opacity-90 hover:opacity-100 transition-opacity hover:scale-105 transform duration-200 flex-shrink-0"
                />
                <img
                  src="/optimized/pwc.webp"
                  alt="pwc"
                  className="h-8 md:h-10 lg:h-12 w-auto opacity-90 hover:opacity-100 transition-opacity hover:scale-105 transform duration-200 flex-shrink-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

HeroSection.displayName = "HeroSection";

export default memo(HeroSection);
