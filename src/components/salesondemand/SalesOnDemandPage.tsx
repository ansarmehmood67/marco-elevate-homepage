
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEO/SEOHead";
import { seoPages } from "@/utils/seoData";
import HeroSection from "./HeroSection";
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
import AboutSection from "@/components/AboutSection";
import LazyLeadMagnet from "@/components/LazyLeadMagnet";
import PreloadedContactSection from "@/components/PreloadedContactSection";
import CrossSellRecommendations from "@/components/CrossSellRecommendations";
import PreloadedCarousel from '@/components/PreloadedCarousel';
import EnhancedLazyImage from '@/components/EnhancedLazyImage';
import PreloadedTestimonials from '@/components/PreloadedTestimonials';
import PreloadedAboutSection from '@/components/PreloadedAboutSection';

const SalesOnDemandPage = () => {
  return (
    <>
      <SEOHead data={seoPages.salesOnDemand} />
      <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
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
      <PreloadedTestimonials />
      <FAQSalesOnDemandSection />
      <PreloadedAboutSection />
      <CrossSellRecommendations currentService="sales-on-demand" />
      <LazyLeadMagnet />
      
      <PreloadedCarousel />
      <div id="contact"><PreloadedContactSection /></div>
      <Footer />
    </main>
    </>
  );
};

export default SalesOnDemandPage;
