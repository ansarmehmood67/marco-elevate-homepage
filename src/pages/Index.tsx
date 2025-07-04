
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutMarcoSection from "@/components/AboutMarcoSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import FinalCTASection from "@/components/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <AboutMarcoSection />
      <AboutSection />
      <TestimonialsSection />
      <LeadMagnetSection />
      <FinalCTASection />
    </div>
  );
};

export default Index;
