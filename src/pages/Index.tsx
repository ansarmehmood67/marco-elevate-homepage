
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import IntroSectionOptimized from "@/components/IntroSectionOptimized";
import LiveSuccessTracker from "@/components/LiveSuccessTracker";
import NewServicesSection from "@/components/NewServicesSection";
import CTAImageSection from "@/components/CTAImageSection";
import LazyCarousel from "@/components/LazyCarousel";
import TestimonialsOptimized from "@/components/TestimonialsOptimized";
import AboutSectionAnimated from "@/components/AboutSectionAnimated";
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
        <HeroSection />
        <IntroSectionOptimized />
        
        
        
        <div id="premium-solutions"><LazyCarousel /></div>
        <CTAImageSection />
        <NewServicesSection />
        <TestimonialsOptimized />
        <AboutSectionAnimated />
        <LeadMagnetSectionAnimated />
        <div id="contact"><MailerLiteContactSectionAnimated /></div>
        <Footer />
      </main>
    </>
  );
};

export default Index;
