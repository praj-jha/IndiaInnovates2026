
import {
  HeroSection,
  CompanySlider,
  NumberTicker,
  CoursesSection,
  TestimonialsSection,
  FAQSection,
  CTASection,
  Footer
} from "@/components/home";
export default function Index() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <NumberTicker />
      <CoursesSection />
      <CompanySlider />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
