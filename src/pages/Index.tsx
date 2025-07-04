
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import NewServicesSection from "@/components/NewServicesSection";
import RotatingHeroSection from "@/components/RotatingHeroSection";
import ServicesSection from "@/components/ServicesSection";
import ValuePropositionSection from "@/components/ValuePropositionSection";
import AboutMarcoSection from "@/components/AboutMarcoSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
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
      <RotatingHeroSection />
      
      <ValuePropositionSection />
      <AboutMarcoSection />
      <TestimonialsCarousel />
      <LeadMagnetSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
