
import {
  HeroSection,
  AboutIndiaInnovates,
  CompanySlider,
  NumberTicker,
  SpeakerSection,
  DelegatePassesSection,
  VideoTestimonialsSection,
  CoursesSection,
  FAQSection,
  CTASection,
  Footer
} from "@/components/home";
export default function Index() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutIndiaInnovates />
      <NumberTicker />
      <SpeakerSection />
      <DelegatePassesSection />
      <VideoTestimonialsSection />
      <CompanySlider />
      <FAQSection />
      <Footer />
    </div>
  );
}
