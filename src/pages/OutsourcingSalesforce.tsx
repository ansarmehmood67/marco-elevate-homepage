import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import FinalCTASection from "@/components/FinalCTASection";
import CrossSellRecommendations from "@/components/CrossSellRecommendations";
import HeroSection from "@/components/outsourcingsalesforce/HeroSection";
import StandardIntroSection from "@/components/shared/StandardIntroSection";
import StandardCustomersSection from "@/components/shared/StandardCustomersSection";
import StandardQuoteSection from "@/components/shared/StandardQuoteSection";
import AdvantagesSection from "@/components/outsourcingsalesforce/AdvantagesSection";
import PhotoCTASection from "@/components/outsourcingsalesforce/PhotoCTASection";
import WhenToCallSection from "@/components/outsourcingsalesforce/WhenToCallSection";
import { Users } from "lucide-react";

const OutsourcingSalesforce = () => {
  const brandLogos = [
    "/lovable-uploads/c015aef0-9ac6-47d5-8f1b-ea8aff14dd08.png",
    "/lovable-uploads/655e08e7-f709-41c5-9b01-f624d4dea2ce.png",
    "/lovable-uploads/fe2c67ca-9c86-4598-b7ce-05d1ef35dbbf.png",
    "/lovable-uploads/871bbc8b-f67d-4537-a7a2-574d06a9e919.png",
    "/lovable-uploads/d4a117b0-a098-4850-9d53-82ee30cbdb21.png",
    "/lovable-uploads/5a8470d1-8aa8-4ee0-a0c5-efbe23f61c0b.png",
    "/lovable-uploads/57e4bdda-6fe0-4184-b948-1e51ef3229c1.png",
  ];

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
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default OutsourcingSalesforce;