
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import LiveSuccessTracker from "@/components/LiveSuccessTracker";
import NewServicesSection from "@/components/NewServicesSection";
import CTAImageSection from "@/components/CTAImageSection";
import PremiumServicesCarouselOptimized from "@/components/PremiumServicesCarouselOptimized";
import TestimonialsOptimized from "@/components/TestimonialsOptimized";
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
      <PremiumServicesCarouselOptimized />
      <TestimonialsOptimized />
      <AboutSection />
      <LeadMagnetSectionAnimated />
      <FinalCTASectionAnimated />
      <Footer />
    </div>
  );
};

export default Index;
