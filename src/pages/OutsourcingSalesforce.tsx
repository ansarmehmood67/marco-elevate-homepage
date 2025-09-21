import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEO/SEOHead";
import { seoPages } from "@/utils/seoData";
import AboutSection from "@/components/AboutSection";
import LeadMagnetSectionAnimated from "@/components/LeadMagnetSectionAnimated";
import MailerLiteContactSectionAnimated from "@/components/MailerLiteContactSectionAnimated";
import PremiumServicesCarouselOptimized from "@/components/PremiumServicesCarouselOptimized";
import CrossSellRecommendations from "@/components/CrossSellRecommendations";
import HeroSection from "@/components/outsourcingsalesforce/HeroSection";
import StandardIntroSection from "@/components/shared/StandardIntroSection";
import StandardCustomersSection from "@/components/shared/StandardCustomersSection";
import StandardQuoteSection from "@/components/shared/StandardQuoteSection";
import AdvantagesSectionNew from "@/components/outsourcingsalesforce/AdvantagesSectionNew";
import PhotoCTASection from "@/components/outsourcingsalesforce/PhotoCTASection";
import WhenToCallSectionNew from "@/components/outsourcingsalesforce/WhenToCallSectionNew";
const OutsourcingSalesforce = () => {

  return (
    <>
      <SEOHead data={seoPages.outsourcingSalesforce} />
      <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <StandardQuoteSection
        badge="La nostra promessa"
        mainQuote="Non solo vendiamo per te,"
        highlightedQuote="Diventiamo il tuo reparto vendite"
        description="Ogni progetto di outsourcing salesforce è gestito come se fosse il nostro business. Il tuo successo è il nostro successo."
        ctaText="Scopri di più"
        ctaSubtext="✓ Approccio su misura • ✓ Processi collaudati • ✓ Risultati concreti"
        onCtaClick={() => document.getElementById('outsourcing-professionale')?.scrollIntoView({ behavior: 'smooth' })}
      />
      <StandardIntroSection
        badge="Outsourcing Vendite, risultati immediati"
        title="La tua forza vendita"
        highlightedText="a noleggio"
        description="Con Sales On Demand puoi avere venditori a noleggio che lavorano in perfetta sinergia con la tua azienda. Un servizio flessibile, scalabile e orientato al risultato, che trasforma i tuoi contatti in clienti reali e ti permette di crescere senza vincoli né costi nascosti."
        ctaText="Richiedi il Tuo Team"
        ctaSubtext="✓ Team su misura • ✓ Massima flessibilità • ✓ Performance costanti"
        onCtaClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      />
      <StandardCustomersSection />

      <div id="outsourcing-professionale"><AdvantagesSectionNew /></div>
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
      <PremiumServicesCarouselOptimized />
      
      <div id="contact"><MailerLiteContactSectionAnimated /></div>
        <Footer />
      </main>
    </>
  );
};

export default OutsourcingSalesforce;