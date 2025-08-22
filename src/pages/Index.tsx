
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import LiveSuccessTracker from "@/components/LiveSuccessTracker";
import NewServicesSection from "@/components/NewServicesSection";
import CTAImageSection from "@/components/CTAImageSection";
import ValuePropositionSectionAnimated from "@/components/ValuePropositionSectionAnimated";
import TestimonialsModernAnimated from "@/components/TestimonialsModernAnimated";
import AboutSectionAnimated from "@/components/AboutSectionAnimated";
import LeadMagnetSectionAnimated from "@/components/LeadMagnetSectionAnimated";
import FinalCTASectionAnimated from "@/components/FinalCTASectionAnimated";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <IntroSection />
      <NewServicesSection />
      <CTAImageSection />
      <ValuePropositionSectionAnimated />
      <TestimonialsModernAnimated />
      <AboutSectionAnimated />
      <LeadMagnetSectionAnimated />
      <FinalCTASectionAnimated />
      <Footer />
    </div>
  );
};

export default Index;
