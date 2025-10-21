import { memo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, Ticket } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import { TextRotate } from "@/components/ui/text-rotate";

const HeroSection = () => {
  return (
    <section
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden bg-white"
      aria-label="Hero Section"
    >

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:40px_40px] opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12 md:mb-14">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium mb-4 sm:mb-5 md:mb-6 leading-[1.1] tracking-tight text-black">
              World's <span className="bg-purple-700 bg-clip-text text-transparent">biggest youth innovation</span>{" "}
              <span className="inline-block bg-purple-700 px-3 sm:px-4 md:px-5 py-1 sm:py-2 rounded-lg shadow-lg">
                <TextRotate
                  texts={["tech", "business", "political"]}
                  rotationInterval={3000}
                  mainClassName="inline-flex text-white"
                  elementLevelClassName="text-white"
                />
              </span>{" "}
              Summit!
            </h1>

            {/* Date and Location */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-5 sm:mb-6 md:mb-7">
              <div className="flex items-center gap-2 text-gray-700">
                <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600" />
                <span className="text-base sm:text-lg md:text-xl font-semibold">28-29 March 2026</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-400"></div>
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600" />
                <span className="text-base sm:text-lg md:text-xl font-semibold">Bharat Mandapam, New Delhi</span>
              </div>
            </div>

            <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-6 sm:mb-7 md:mb-8 max-w-3xl mx-auto font-light leading-relaxed">
              Join India's premier innovation and technology summit. Connect with industry leaders, showcase your innovations, and be part of shaping the future.
            </p>

            {/* Countdown Timer */}
            <div className="mb-6 sm:mb-7 md:mb-8">
              <CountdownTimer />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-medium text-base sm:text-lg tracking-wide hover:scale-[1.02] transition-all rounded-full px-6 sm:px-8 md:px-10 py-5 sm:py-6 shadow-lg shadow-purple-500/10"
                asChild
              >
                <Link to="/delegate-pass">
                  <Ticket className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Get Delegate Pass
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-medium text-base sm:text-lg tracking-wide bg-white/70 hover:bg-purple-50 transition-all rounded-full px-6 sm:px-8 md:px-10 py-5 sm:py-6 border-purple-600 text-purple-600 hover:text-purple-700 shadow-sm"
                asChild
              >
                <Link to="/exhibitor-registration">
                  Book Your Booth <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Company Logos Section */}
        <div className="mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6">
          <div className="text-center">
            <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-500/30 rounded-full mb-4 sm:mb-6">
              <p className="text-purple-700 text-xs sm:text-sm font-semibold tracking-wide uppercase">
                In Collaboration with
              </p>
            </div>
            <div className="overflow-hidden relative">
              {/* Gradient overlays for smooth fade effect */}
              <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

              <div
                className="flex animate-scroll"
                style={{
                  '--animation-duration': '15s', // SPEED CONTROL: Lower value = faster scroll. Examples: 10s (very fast), 15s (fast), 20s (moderate), 30s (slow)
                } as React.CSSProperties}
              >
                {/* First set of logos */}
                <div className="flex-shrink-0 mx-2 sm:mx-4 md:mx-6 flex items-center justify-center p-4 sm:p-5 md:p-6 bg-white/80 dark:bg-white/90 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm border border-gray-100 dark:border-gray-200 w-32 sm:w-36 md:w-40 h-20 sm:h-24 md:h-28">
                  <img
                    src="/mcdlogo.png"
                    alt="MCD"
                    loading="lazy"
                    decoding="async"
                    className="max-h-12 sm:max-h-14 md:max-h-16 max-w-24 sm:max-w-28 md:max-w-32 object-contain"
                  />
                </div>
                <div className="flex-shrink-0 mx-2 sm:mx-4 md:mx-6 flex items-center justify-center p-4 sm:p-5 md:p-6 bg-white/80 dark:bg-white/90 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm border border-gray-100 dark:border-gray-200 w-32 sm:w-36 md:w-40 h-20 sm:h-24 md:h-28">
                  <img
                    src="/bsf.png"
                    alt="BSF"
                    loading="lazy"
                    decoding="async"
                    className="max-h-12 sm:max-h-14 md:max-h-16 max-w-24 sm:max-w-28 md:max-w-32 object-contain"
                  />
                </div>
                <div className="flex-shrink-0 mx-2 sm:mx-4 md:mx-6 flex items-center justify-center p-4 sm:p-5 md:p-6 bg-white/80 dark:bg-white/90 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm border border-gray-100 dark:border-gray-200 w-32 sm:w-36 md:w-40 h-20 sm:h-24 md:h-28">
                  <img
                    src="/jnu.png"
                    alt="JNU"
                    loading="lazy"
                    decoding="async"
                    className="max-h-12 sm:max-h-14 md:max-h-16 max-w-24 sm:max-w-28 md:max-w-32 object-contain"
                  />
                </div>
                <div className="flex-shrink-0 mx-2 sm:mx-4 md:mx-6 flex items-center justify-center p-4 sm:p-5 md:p-6 bg-white/80 dark:bg-white/90 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm border border-gray-100 dark:border-gray-200 w-32 sm:w-36 md:w-40 h-20 sm:h-24 md:h-28">
                  <img
                    src="/nsut.png"
                    alt="NSUT"
                    loading="lazy"
                    decoding="async"
                    className="max-h-12 sm:max-h-14 md:max-h-16 max-w-24 sm:max-w-28 md:max-w-32 object-contain"
                  />
                </div>
                <div className="flex-shrink-0 mx-2 sm:mx-4 md:mx-6 flex items-center justify-center p-4 sm:p-5 md:p-6 bg-white/80 dark:bg-white/90 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm border border-gray-100 dark:border-gray-200 w-32 sm:w-36 md:w-40 h-20 sm:h-24 md:h-28">
                  <img
                    src="/ddu2.jpeg"
                    alt="DDU"
                    loading="lazy"
                    decoding="async"
                    className="max-h-12 sm:max-h-14 md:max-h-16 max-w-24 sm:max-w-28 md:max-w-32 object-contain"
                  />
                </div>
                <div className="flex-shrink-0 mx-2 sm:mx-4 md:mx-6 flex items-center justify-center p-4 sm:p-5 md:p-6 bg-white/80 dark:bg-white/90 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm border border-gray-100 dark:border-gray-200 w-32 sm:w-36 md:w-40 h-20 sm:h-24 md:h-28">
                  <img
                    src="/niti.png"
                    alt="NITI"
                    loading="lazy"
                    decoding="async"
                    className="max-h-12 sm:max-h-14 md:max-h-16 max-w-24 sm:max-w-28 md:max-w-32 object-contain"
                  />
                </div>
                <div className="flex-shrink-0 mx-2 sm:mx-4 md:mx-6 flex items-center justify-center p-4 sm:p-5 md:p-6 bg-white/80 dark:bg-white/90 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm border border-gray-100 dark:border-gray-200 w-32 sm:w-36 md:w-40 h-20 sm:h-24 md:h-28">
                  <img
                    src="/Dl.png"
                    alt="Delhi"
                    loading="lazy"
                    decoding="async"
                    className="max-h-12 sm:max-h-14 md:max-h-16 max-w-24 sm:max-w-28 md:max-w-32 object-contain"
                  />
                </div>
                <div className="flex-shrink-0 mx-2 sm:mx-4 md:mx-6 flex items-center justify-center p-4 sm:p-5 md:p-6 bg-white/80 dark:bg-white/90 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm border border-gray-100 dark:border-gray-200 w-32 sm:w-36 md:w-40 h-20 sm:h-24 md:h-28">
                  <img
                    src="/ay.jpeg"
                    alt="Ayushman Bharat"
                    loading="lazy"
                    decoding="async"
                    className="max-h-12 sm:max-h-14 md:max-h-16 max-w-24 sm:max-w-28 md:max-w-32 object-contain"
                  />
                </div>

                {/* Duplicate set for seamless loop */}
                <div className="flex-shrink-0 mx-2 sm:mx-4 md:mx-6 flex items-center justify-center p-4 sm:p-5 md:p-6 bg-white/80 dark:bg-white/90 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm border border-gray-100 dark:border-gray-200 w-32 sm:w-36 md:w-40 h-20 sm:h-24 md:h-28">
                  <img
                    src="/mcdlogo.png"
                    alt="MCD"
                    loading="lazy"
                    decoding="async"
                    className="max-h-12 sm:max-h-14 md:max-h-16 max-w-24 sm:max-w-28 md:max-w-32 object-contain"
                  />
                </div>
                <div className="flex-shrink-0 mx-2 sm:mx-4 md:mx-6 flex items-center justify-center p-4 sm:p-5 md:p-6 bg-white/80 dark:bg-white/90 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm border border-gray-100 dark:border-gray-200 w-32 sm:w-36 md:w-40 h-20 sm:h-24 md:h-28">
                  <img
                    src="/bsf.png"
                    alt="BSF"
                    loading="lazy"
                    decoding="async"
                    className="max-h-12 sm:max-h-14 md:max-h-16 max-w-24 sm:max-w-28 md:max-w-32 object-contain"
                  />
                </div>
                <div className="flex-shrink-0 mx-2 sm:mx-4 md:mx-6 flex items-center justify-center p-4 sm:p-5 md:p-6 bg-white/80 dark:bg-white/90 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm border border-gray-100 dark:border-gray-200 w-32 sm:w-36 md:w-40 h-20 sm:h-24 md:h-28">
                  <img
                    src="/jnu.png"
                    alt="JNU"
                    loading="lazy"
                    decoding="async"
                    className="max-h-12 sm:max-h-14 md:max-h-16 max-w-24 sm:max-w-28 md:max-w-32 object-contain"
                  />
                </div>
                <div className="flex-shrink-0 mx-2 sm:mx-4 md:mx-6 flex items-center justify-center p-4 sm:p-5 md:p-6 bg-white/80 dark:bg-white/90 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm border border-gray-100 dark:border-gray-200 w-32 sm:w-36 md:w-40 h-20 sm:h-24 md:h-28">
                  <img
                    src="/nsut.png"
                    alt="NSUT"
                    loading="lazy"
                    decoding="async"
                    className="max-h-12 sm:max-h-14 md:max-h-16 max-w-24 sm:max-w-28 md:max-w-32 object-contain"
                  />
                </div>
                <div className="flex-shrink-0 mx-2 sm:mx-4 md:mx-6 flex items-center justify-center p-4 sm:p-5 md:p-6 bg-white/80 dark:bg-white/90 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm border border-gray-100 dark:border-gray-200 w-32 sm:w-36 md:w-40 h-20 sm:h-24 md:h-28">
                  <img
                    src="/ddu2.jpeg"
                    alt="DDU"
                    loading="lazy"
                    decoding="async"
                    className="max-h-12 sm:max-h-14 md:max-h-16 max-w-24 sm:max-w-28 md:max-w-32 object-contain"
                  />
                </div>
                <div className="flex-shrink-0 mx-2 sm:mx-4 md:mx-6 flex items-center justify-center p-4 sm:p-5 md:p-6 bg-white/80 dark:bg-white/90 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm border border-gray-100 dark:border-gray-200 w-32 sm:w-36 md:w-40 h-20 sm:h-24 md:h-28">
                  <img
                    src="/niti.png"
                    alt="NITI"
                    loading="lazy"
                    decoding="async"
                    className="max-h-12 sm:max-h-14 md:max-h-16 max-w-24 sm:max-w-28 md:max-w-32 object-contain"
                  />
                </div>
                <div className="flex-shrink-0 mx-2 sm:mx-4 md:mx-6 flex items-center justify-center p-4 sm:p-5 md:p-6 bg-white/80 dark:bg-white/90 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm border border-gray-100 dark:border-gray-200 w-32 sm:w-36 md:w-40 h-20 sm:h-24 md:h-28">
                  <img
                    src="/Dl.png"
                    alt="Delhi"
                    loading="lazy"
                    decoding="async"
                    className="max-h-12 sm:max-h-14 md:max-h-16 max-w-24 sm:max-w-28 md:max-w-32 object-contain"
                  />
                </div>
                <div className="flex-shrink-0 mx-2 sm:mx-4 md:mx-6 flex items-center justify-center p-4 sm:p-5 md:p-6 bg-white/80 dark:bg-white/90 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm border border-gray-100 dark:border-gray-200 w-32 sm:w-36 md:w-40 h-20 sm:h-24 md:h-28">
                  <img
                    src="/ay.jpeg"
                    alt="Ayushman Bharat"
                    loading="lazy"
                    decoding="async"
                    className="max-h-12 sm:max-h-14 md:max-h-16 max-w-24 sm:max-w-28 md:max-w-32 object-contain"
                  />
                </div>
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
