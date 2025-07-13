
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import NewServicesSection from "@/components/NewServicesSection";
import CTAImageSection from "@/components/CTAImageSection";
import ValuePropositionSection from "@/components/ValuePropositionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <IntroSection />
      <NewServicesSection />
      <CTAImageSection />
      <ValuePropositionSection />
      <TestimonialsSection />
      <AboutSection />
      <LeadMagnetSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
