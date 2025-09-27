
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEO/SEOHead";
import { seoPages } from "@/utils/seoData";
import HeroSection from "./HeroSection";
import StandardIntroSection from "@/components/shared/StandardIntroSection";
import StandardCustomersSection from "@/components/shared/StandardCustomersSection";
import ServicesCarouselSection from "./ServicesCarouselSection";
import FAQSalesOnDemandSection from "./FAQSalesOnDemandSection";
import ComparisonTableSection from "./ComparisonTableSection";
import HowItWorksSection from "./HowItWorksSection";
import LeadMagnetSectionAnimated from "@/components/LeadMagnetSectionAnimated";
import MailerLiteContactSectionAnimated from "@/components/MailerLiteContactSectionAnimated";
import CrossSellRecommendations from "@/components/CrossSellRecommendations";
import PremiumServicesCarouselOptimized from '@/components/PremiumServicesCarouselOptimized';
import TestimonialsOptimized from '@/components/TestimonialsOptimized';
import AboutSection from "@/components/AboutSection";
import { Button } from "@/components/ui/button";
import ConsistentHeading from "@/components/shared/ConsistentHeading";

// Inline CTA Image Section Component
const InlineCTAImageSection = () => (
  <section className="py-40 relative overflow-hidden">
    {/* Background Image */}
    <div 
      className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
      style={{ backgroundImage: `url(/assets/images/cta/sales-on-demand-bg.png)` }}
    />
    
    {/* Enhanced Overlay for better text readability */}
    <div className="absolute inset-0 bg-black/50 z-10" />
    <div className="absolute inset-0 bg-gradient-to-br from-[#2E8BC0]/30 via-transparent to-[#55ACEE]/20 z-10" />
    
    <div className="max-w-6xl mx-auto px-6 text-center relative z-20">
      <div className="max-w-4xl mx-auto space-y-8">
        <ConsistentHeading
          title="Trasforma il tuo business con"
          highlightedText="Sales On Demand"
          subtitle="Scopri come il nostro servizio Sales On Demand può rivoluzionare il tuo approccio alle vendite e accelerare la crescita del tuo business."
          theme="dark"
        />
        
        <Button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          Inizia Subito
        </Button>
      </div>
    </div>
  </section>
);

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
      <InlineCTAImageSection />
      <ComparisonTableSection />
      <HowItWorksSection />
      <TestimonialsOptimized />
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
