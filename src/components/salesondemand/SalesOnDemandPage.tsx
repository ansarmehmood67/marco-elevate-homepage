
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEO/SEOHead";
import { seoPages } from "@/utils/seoData";
import EmergencyHeroSection from "./EmergencyHeroSection";
import StandardIntroSection from "@/components/shared/StandardIntroSection";
import StandardCustomersSection from "@/components/shared/StandardCustomersSection";
import ServicesCarouselSection from "./ServicesCarouselSection";
import ForzaVenditaOutsourcingSection from "./ForzaVenditaOutsourcingSection";
import TelemarketingContactCenterSection from "./TelemarketingContactCenterSection";
import OutsourcingMarketingSection from "./OutsourcingMarketingSection";
import WhyChooseSalesOnDemandSection from "./WhyChooseSalesOnDemandSection";
import FAQSalesOnDemandSection from "./FAQSalesOnDemandSection";
import ComparisonTableSection from "./ComparisonTableSection";
import CTAImageSection from "./CTAImageSection";
import HowItWorksSection from "./HowItWorksSection";
import WhyChooseSection from "./WhyChooseSection";
import LeadMagnetSectionAnimated from "@/components/LeadMagnetSectionAnimated";
import MailerLiteContactSectionAnimated from "@/components/MailerLiteContactSectionAnimated";
import CrossSellRecommendations from "@/components/CrossSellRecommendations";
import PremiumServicesCarouselOptimized from '@/components/PremiumServicesCarouselOptimized';
import EnhancedLazyImage from '@/components/EnhancedLazyImage';
import TestimonialsSection from '@/components/TestimonialsSection';
import AboutSection from "@/components/AboutSection";

const SalesOnDemandPage = () => {
  return (
    <>
      <SEOHead data={seoPages.salesOnDemand} />
      <main className="min-h-screen bg-background">
      <Navigation />
      <EmergencyHeroSection />
      <StandardIntroSection
        badge="SALES ON DEMAND"
        title="Outsourcing vendite e marketing"
        highlightedText="per crescere subito"
        description="Reparto vendite e marketing in outsourcing: strategia, operatività e AI. Team dedicato, 500+ aziende servite. Audit gratuito di 30 minuti."
        ctaText="Richiedi Audit Gratuito"
        ctaSubtext="•Forza vendita in outsourcing •Telemarketing B2B"
        onCtaClick={() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })}
      />
      <StandardCustomersSection />
      <div id="services-section"><ServicesCarouselSection /></div>
      <ForzaVenditaOutsourcingSection />
      <TelemarketingContactCenterSection />
      <OutsourcingMarketingSection />
      <WhyChooseSalesOnDemandSection />
      <CTAImageSection />
      <ComparisonTableSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FAQSalesOnDemandSection />
      <AboutSection />
      <CrossSellRecommendations currentService="sales-on-demand" />
      <LeadMagnetSectionAnimated />
      
      <PremiumServicesCarouselOptimized />
      <div id="contact"><MailerLiteContactSectionAnimated /></div>
      <Footer />
    </main>
    </>
  );
};

export default SalesOnDemandPage;
