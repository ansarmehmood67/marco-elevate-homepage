
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import MobileOptimizedHero from "@/components/MobileOptimizedHero";
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
import StructuredData from "@/components/StructuredData";
import { useMobileOptimization } from "@/hooks/useMobileOptimization";
import { useEffect, useState } from "react";

const Index = () => {
  const mobileConfig = useMobileOptimization();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return (
    <>
      {/* SEO Structured Data */}
      <StructuredData type="Organization" />
      <StructuredData type="WebSite" />
      
      <div className="min-h-screen bg-background">
        <Navigation />
        {/* Use mobile-optimized hero on mobile devices */}
        {isMobile ? <MobileOptimizedHero /> : <HeroSection />}
        <IntroSectionOptimized />
        
        
        
        <div id="premium-solutions"><PremiumServicesCarouselOptimized /></div>
        <CTAImageSection />
        <NewServicesSection />
        <TestimonialsOptimized />
        <AboutSectionAnimated />
        <LeadMagnetSectionAnimated />
        <div id="contact"><MailerLiteContactSectionAnimated /></div>
        <Footer />
      </div>
    </>
  );
};

export default Index;
