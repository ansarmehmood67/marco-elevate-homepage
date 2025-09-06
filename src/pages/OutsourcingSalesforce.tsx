import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import MailerLiteContactSection from "@/components/MailerLiteContactSection";
import CrossSellRecommendations from "@/components/CrossSellRecommendations";
import AllServicesCarousel from "@/components/shared/AllServicesCarousel";
import HeroSection from "@/components/outsourcingsalesforce/HeroSection";
import StandardIntroSection from "@/components/shared/StandardIntroSection";
import StandardCustomersSection from "@/components/shared/StandardCustomersSection";
import StandardQuoteSection from "@/components/shared/StandardQuoteSection";
import AdvantagesSection from "@/components/outsourcingsalesforce/AdvantagesSection";
import PhotoCTASection from "@/components/outsourcingsalesforce/PhotoCTASection";
import WhenToCallSection from "@/components/outsourcingsalesforce/WhenToCallSection";
const OutsourcingSalesforce = () => {

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <StandardIntroSection
        badge="OUTSOURCING SALESFORCE"
        title="La Tua Forza Vendita"
        highlightedText="Esterna Professionale"
        description="Trasforma le tue vendite con un team di venditori esperti, processi consolidati e tecnologie all'avanguardia. Risultati immediati senza costi fissi."
        ctaText="Richiedi il Tuo Team"
        ctaSubtext="Setup 48h • Team dedicato • Risultati garantiti • 200+ salesforce create"
      />
      <StandardCustomersSection />
      
      <StandardQuoteSection
        badge="La nostra promessa"
        mainQuote="Non solo vendiamo per te,"
        highlightedQuote="Diventiamo il tuo reparto vendite"
        description="Ogni progetto di outsourcing salesforce è gestito come se fosse il nostro business. Il tuo successo è il nostro successo."
        ctaText="Scopri Come Funziona"
        ctaSubtext="Consulenza gratuita • Piano personalizzato • ROI garantito"
      />

      <AdvantagesSection />
      <PhotoCTASection />
      <WhenToCallSection />
      
      {/* Cross-Sell Recommendations */}
      <CrossSellRecommendations
        currentService="outsourcing-salesforce"
        layout="horizontal"
        title="Massimizza l'efficacia della tua forza vendita"
        subtitle="Le aziende che combinano outsourcing salesforce con questi servizi vedono risultati superiori del 65%"
      />

      <AboutSection />
      <LeadMagnetSection />
      
      {/* All Services Carousel */}
      <AllServicesCarousel />
      
      <MailerLiteContactSection />
      <Footer />
    </div>
  );
};

export default OutsourcingSalesforce;