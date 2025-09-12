import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import LeadMagnetSectionAnimated from "@/components/LeadMagnetSectionAnimated";
import MailerLiteContactSection from "@/components/MailerLiteContactSection";
import CrossSellRecommendations from "@/components/CrossSellRecommendations";
import AllServicesCarousel from "@/components/shared/AllServicesCarousel";
import HeroSection from "@/components/outsourcingsalesforce/HeroSection";
import StandardIntroSection from "@/components/shared/StandardIntroSection";
import StandardCustomersSection from "@/components/shared/StandardCustomersSection";
import StandardQuoteSection from "@/components/shared/StandardQuoteSection";
import AdvantagesSectionNew from "@/components/outsourcingsalesforce/AdvantagesSectionNew";
import PhotoCTASection from "@/components/outsourcingsalesforce/PhotoCTASection";
import WhenToCallSectionNew from "@/components/outsourcingsalesforce/WhenToCallSectionNew";
const OutsourcingSalesforce = () => {

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <StandardIntroSection
        badge="Outsourcing Vendite, risultati immediati"
        title="La tua forza vendita"
        highlightedText="a noleggio"
        description="Con Sales On Demand puoi avere venditori a noleggio che lavorano in perfetta sinergia con la tua azienda. Un servizio flessibile, scalabile e orientato al risultato, che trasforma i tuoi contatti in clienti reali e ti permette di crescere senza vincoli né costi nascosti."
        ctaText="Richiedi il Tuo Team"
        ctaSubtext="✓ Team su misura • ✓ Massima flessibilità • ✓ Performance costanti"
      />
      <StandardCustomersSection />
      
      <StandardQuoteSection
        badge="La nostra promessa"
        mainQuote="Non solo vendiamo per te,"
        highlightedQuote="Diventiamo il tuo reparto vendite"
        description="Ogni progetto di outsourcing salesforce è gestito come se fosse il nostro business. Il tuo successo è il nostro successo."
        ctaText="Scopri Come Funziona"
        ctaSubtext="✓ Approccio su misura • ✓ Processi collaudati • ✓ Risultati concreti"
      />

      <AdvantagesSectionNew />
      <PhotoCTASection />
      <WhenToCallSectionNew />
      
      {/* Cross-Sell Recommendations */}
      <CrossSellRecommendations
        currentService="outsourcing-salesforce"
        layout="horizontal"
        title="Massimizza l'efficacia della tua forza vendita"
        subtitle="Le aziende che combinano outsourcing salesforce con questi servizi vedono risultati superiori del 65%"
      />

      <AboutSection />
      <LeadMagnetSectionAnimated />
      
      {/* All Services Carousel */}
      <AllServicesCarousel />
      
      <MailerLiteContactSection />
      <Footer />
    </div>
  );
};

export default OutsourcingSalesforce;