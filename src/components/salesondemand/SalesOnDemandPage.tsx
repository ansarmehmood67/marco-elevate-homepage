
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "./HeroSection";
import StandardIntroSection from "@/components/shared/StandardIntroSection";
import StandardCustomersSection from "@/components/shared/StandardCustomersSection";
import ServicesCarouselSection from "./ServicesCarouselSection";
import ComparisonTableSection from "./ComparisonTableSection";
import CTAImageSection from "./CTAImageSection";
import HowItWorksSection from "./HowItWorksSection";
import WhyChooseSection from "./WhyChooseSection";
import AboutSection from "@/components/AboutSection";
import LeadMagnetSectionAnimated from "@/components/LeadMagnetSectionAnimated";
import MailerLiteContactSectionAnimated from "@/components/MailerLiteContactSectionAnimated";
import CrossSellRecommendations from "@/components/CrossSellRecommendations";
import AllServicesCarousel from "@/components/shared/AllServicesCarousel";
import TestimonialsOptimized from "@/components/TestimonialsOptimized";

const SalesOnDemandPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <StandardIntroSection
        badge="SALES ON DEMAND"
        title="Sales on Demand,"
        highlightedText="risultati immediati"
        description="Una soluzione completa di outsourcing forza vendita: venditori a noleggio, metodo validato e tecnologia integrata per garantire crescita scalabile e misurabile."
        ctaText="Scopri Sales on Demand"
        ctaSubtext="•Venditori a noleggio •Risultati reali"
        onCtaClick={() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })}
      />
      <StandardCustomersSection />
      <div id="services-section"><ServicesCarouselSection /></div>
      <CTAImageSection />
      <ComparisonTableSection />
      
      <HowItWorksSection />
      <WhyChooseSection />
      
      
      
      
      <TestimonialsOptimized />
      <AboutSection />
      <AllServicesCarousel />
      <LeadMagnetSectionAnimated />
      
      
      <AllServicesCarousel />
      <div id="contact"><MailerLiteContactSectionAnimated /></div>
      <Footer />
    </div>
  );
};

export default SalesOnDemandPage;
