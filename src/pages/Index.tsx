import { lazy, Suspense, memo } from "react";
import { HeroSection } from "@/components/home";

// Lazy load below-the-fold components for better initial load
const AboutIndiaInnovates = lazy(() => import("@/components/home/AboutIndiaInnovates").then(m => ({ default: m.AboutIndiaInnovates })));
const NumberTicker = lazy(() => import("@/components/home/NumberTicker"));
const SpeakerSection = lazy(() => import("@/components/home/SpeakerSection").then(m => ({ default: m.SpeakerSection })));
const VideoTestimonialsSection = lazy(() => import("@/components/home/VideoTestimonialsSection").then(m => ({ default: m.VideoTestimonialsSection })));
const FAQSection = lazy(() => import("@/components/home/FAQSection"));
const Footer = lazy(() => import("@/components/home/Footer"));

// Lightweight loading skeleton
const SectionLoader = memo(() => (
  <div className="w-full py-12 flex items-center justify-center">
    <div className="w-8 h-8 border-3 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
));

SectionLoader.displayName = "SectionLoader";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Suspense fallback={<SectionLoader />}>
        <AboutIndiaInnovates />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <NumberTicker />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <SpeakerSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <FAQSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default memo(Index);
