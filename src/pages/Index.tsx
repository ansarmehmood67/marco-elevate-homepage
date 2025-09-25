
import Navigation from "@/components/Navigation";
import MobileOptimizedHero from "@/components/MobileOptimizedHero";
import IntroSectionOptimized from "@/components/IntroSectionOptimized";
import LiveSuccessTracker from "@/components/LiveSuccessTracker";
import NewServicesSection from "@/components/NewServicesSection";
import CTAImageSection from "@/components/CTAImageSection";
import PremiumServicesCarouselOptimized from "@/components/PremiumServicesCarouselOptimized";
import TestimonialsOptimized from "@/components/TestimonialsOptimized";
import AboutSection from "@/components/AboutSection";
import LeadMagnetSectionAnimated from "@/components/LeadMagnetSectionAnimated";
import MailerLiteContactSectionAnimated from "@/components/MailerLiteContactSectionAnimated";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEO/SEOHead";
import { seoPages } from "@/utils/seoData";

const Index = () => {
  return (
    <>
      {/* SEO Head with dynamic meta tags and structured data */}
      <SEOHead data={seoPages.homepage} />
      
      <main className="min-h-screen bg-background">
        <Navigation />
        <MobileOptimizedHero />
        <IntroSectionOptimized />
        
        
        
        <div id="premium-solutions"><PremiumServicesCarouselOptimized /></div>
        <CTAImageSection />
        <NewServicesSection />
        <TestimonialsOptimized />
        <AboutSection />
        <LeadMagnetSectionAnimated />
        <div id="contact"><MailerLiteContactSectionAnimated /></div>
        <Footer />
      </main>
    </>
  );
};

export default Index;
