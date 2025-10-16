
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star } from "lucide-react";
import OptimizedImage from "@/components/ui/OptimizedImage";
import ResponsiveHeroImage from "@/components/ui/ResponsiveHeroImage";

export default function HeroSection() {
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
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-orange-500/10 to-orange-600/10 dark:from-orange-900/30 dark:to-orange-900/20 border border-orange-500/30 dark:border-orange-700 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium tracking-wide">
              Built by professionals. Designed for impact.
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-[1.1] tracking-tight text-black dark:text-white">
              World's <span className="bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">biggest youth innovation</span> Summit!
            </h1>

            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg mb-8 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              Expert-led cohorts for IB, Consulting, Product & Strategy roles.
              Learn from professionals, skip the theory, land your dream job.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-700 hover:to-orange-800 dark:from-orange-600 dark:to-orange-700 dark:hover:from-orange-500 dark:hover:to-orange-600 text-white font-medium text-base tracking-wide hover:scale-[1.02] transition-all rounded-full px-8 shadow-lg shadow-orange-500/10 dark:shadow-orange-500/5"
                asChild
              >
                <Link to="#courses">
                  Explore Cohorts <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button> */}
              <Button className="bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-700 hover:to-orange-800 dark:from-orange-600 dark:to-orange-700 dark:hover:from-orange-500 dark:hover:to-orange-600 text-white font-medium"
                onClick={() => document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explore Cohorts <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-medium text-base tracking-wide bg-white/70 dark:bg-gray-900/50 hover:bg-orange-50 dark:hover:bg-orange-950/20 transition-all rounded-full px-8 border-orange-600 text-orange-600 hover:text-orange-700 dark:border-orange-400 dark:text-orange-400 dark:hover:text-orange-300 shadow-sm"
                asChild
              >
                <Link to="#crash-courses">
                  <Play className="mr-2 h-5 w-5" />
                  Crash Courses
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

              {/* Orange and Purple Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-purple-500/20 pointer-events-none"></div>

              {/* Floating badge */}
              <div className="absolute bottom-6 right-6 bg-white dark:bg-gray-900 px-4 py-2 rounded-full shadow-lg flex items-center gap-2 border border-orange-500/20">
                <div className="w-3 h-3 rounded-full bg-orange-500 animate-pulse"></div>
                <span className="text-sm font-medium text-orange-700 dark:text-orange-400">
                  Live Cohort Starting
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Company Logos Section */}
        <div className="mt-16 pt-8">
          <div className="text-center">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500/20 to-orange-600/20 dark:from-orange-900/40 dark:to-orange-900/30 border border-orange-500/30 dark:border-orange-700 rounded-full mb-8">
              <p className="text-orange-700 dark:text-orange-300 text-sm font-semibold tracking-wide uppercase">
                Our Mentors are from
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
                  className="h-12 md:h-16 lg:h-20 w-auto opacity-90 hover:opacity-100 transition-opacity hover:scale-105 transform duration-200 flex-shrink-0"
                />
                <img
                  src="/TM.webp"
                  alt="Tech Mahindra"
                  className="h-8 md:h-10 lg:h-12 w-auto opacity-90 hover:opacity-100 transition-opacity hover:scale-105 transform duration-200 flex-shrink-0"
                />
                <img
                  src="/ZSA.svg"
                  alt="ZS Associates"
                  className="h-8 md:h-10 lg:h-12 w-auto opacity-90 hover:opacity-100 transition-opacity hover:scale-105 transform duration-200 flex-shrink-0"
                />
                <img
                  src="/RL.avif"
                  alt="Russell Reynolds"
                  className="h-8 md:h-10 lg:h-12 w-auto opacity-90 hover:opacity-100 transition-opacity hover:scale-105 transform duration-200 flex-shrink-0"
                />
                <img
                  src="/kpm.svg"
                  alt="KPMG"
                  className="h-8 md:h-10 lg:h-12 w-auto opacity-90 hover:opacity-100 transition-opacity hover:scale-105 transform duration-200 flex-shrink-0"
                />
                <img
                  src="/optimized/EYP.webp"
                  alt="EY"
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

                {/* Duplicate set for seamless loop */}
                <img
                  src="/optimized/oyo.webp"
                  alt="OYO"
                  className="h-12 md:h-16 lg:h-20 w-auto opacity-90 hover:opacity-100 transition-opacity hover:scale-105 transform duration-200 flex-shrink-0"
                />
                <img
                  src="/TM.webp"
                  alt="Tech Mahindra"
                  className="h-8 md:h-10 lg:h-12 w-auto opacity-90 hover:opacity-100 transition-opacity hover:scale-105 transform duration-200 flex-shrink-0"
                />
                <img
                  src="/ZSA.svg"
                  alt="ZS Associates"
                  className="h-8 md:h-10 lg:h-12 w-auto opacity-90 hover:opacity-100 transition-opacity hover:scale-105 transform duration-200 flex-shrink-0"
                />
                <img
                  src="/RL.avif"
                  alt="Russell Reynolds"
                  className="h-8 md:h-10 lg:h-12 w-auto opacity-90 hover:opacity-100 transition-opacity hover:scale-105 transform duration-200 flex-shrink-0"
                />
                <img
                  src="/kpm.svg"
                  alt="KPMG"
                  className="h-8 md:h-10 lg:h-12 w-auto opacity-90 hover:opacity-100 transition-opacity hover:scale-105 transform duration-200 flex-shrink-0"
                />
                <img
                  src="/optimized/EYP.webp"
                  alt="EY"
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
}
