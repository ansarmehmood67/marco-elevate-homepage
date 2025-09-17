
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import IntroSectionOptimized from "@/components/IntroSectionOptimized";
import LiveSuccessTracker from "@/components/LiveSuccessTracker";
import NewServicesSection from "@/components/NewServicesSection";
import CTAImageSection from "@/components/CTAImageSection";
import PremiumServicesCarouselOptimized from "@/components/PremiumServicesCarouselOptimized";
import TestimonialsOptimized from "@/components/TestimonialsOptimized";
import AboutSectionAnimated from "@/components/AboutSectionAnimated";
import LeadMagnetSectionAnimated from "@/components/LeadMagnetSectionAnimated";
import MailerLiteContactSectionAnimated from "@/components/MailerLiteContactSectionAnimated";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <IntroSectionOptimized />
      
      
      <CTAImageSection />
      <div id="premium-solutions"><PremiumServicesCarouselOptimized /></div>
      <NewServicesSection />
      <TestimonialsOptimized />
      <AboutSectionAnimated />
      <LeadMagnetSectionAnimated />
      <div id="contact"><MailerLiteContactSectionAnimated /></div>
      <Footer />
    </div>
  );
};

export default Index;
