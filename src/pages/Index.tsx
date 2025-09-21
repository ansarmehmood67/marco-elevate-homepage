import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import IntroSectionOptimized from "@/components/IntroSectionOptimized";
import LiveSuccessTracker from "@/components/LiveSuccessTracker";
import NewServicesSection from "@/components/NewServicesSection";
import CTAImageSection from "@/components/CTAImageSection";
import PreloadedCarousel from "@/components/PreloadedCarousel";
import TestimonialsOptimized from "@/components/TestimonialsOptimized";
import PreloadedAboutSection from "@/components/PreloadedAboutSection";
import LazyLeadMagnet from "@/components/LazyLeadMagnet";
import PreloadedContactSection from "@/components/PreloadedContactSection";
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
        
        
        
        <div id="premium-solutions"><PreloadedCarousel /></div>
        <CTAImageSection />
        <NewServicesSection />
        <TestimonialsOptimized />
        <PreloadedAboutSection />
        <LazyLeadMagnet />
        <div id="contact"><PreloadedContactSection /></div>
        <Footer />
      </main>
    </>
  );
};

export default Index;