
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import LiveSuccessTracker from "@/components/LiveSuccessTracker";
import NewServicesSection from "@/components/NewServicesSection";
import CTAImageSection from "@/components/CTAImageSection";
import PremiumServicesCarousel from "@/components/PremiumServicesCarousel";
import TestimonialsModernAnimated from "@/components/TestimonialsModernAnimated";
import AboutSection from "@/components/AboutSection";
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
      <PremiumServicesCarousel />
      <TestimonialsModernAnimated />
      <AboutSection />
      <LeadMagnetSectionAnimated />
      <FinalCTASectionAnimated />
      <Footer />
    </div>
  );
};

export default Index;
