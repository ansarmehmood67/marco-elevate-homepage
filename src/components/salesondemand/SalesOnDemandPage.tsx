
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
import MailerLiteContactSection from "@/components/MailerLiteContactSection";
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
      />
      <StandardCustomersSection />
      <ServicesCarouselSection />
      <CTAImageSection />
      <ComparisonTableSection />
      
      <HowItWorksSection />
      <WhyChooseSection />
      
      {/* Cross-Sell Recommendations - Mid-page focused cross-sell */}
      <CrossSellRecommendations
        currentService="sales-on-demand"
        layout="horizontal"
        title="Accelera ulteriormente la crescita"
        subtitle="Il 78% dei clienti Sales on Demand aggiunge questi servizi per risultati ancora più potenti"
      />
      
      <TestimonialsOptimized />
      <AboutSection />
      <LeadMagnetSectionAnimated />
      
      {/* All Services Carousel - Complete service discovery */}
      <AllServicesCarousel />
      <MailerLiteContactSection />
      <Footer />
    </div>
  );
};

export default SalesOnDemandPage;
