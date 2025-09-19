import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEO/SEOHead";
import { seoPages } from "@/utils/seoData";
import ContactHeroSection from "@/components/contact/ContactHeroSection";
import StandardIntroSection from "@/components/shared/StandardIntroSection";
import StandardCustomersSection from "@/components/shared/StandardCustomersSection";
import StandardQuoteSection from "@/components/shared/StandardQuoteSection";
import ContactMethodsSection from "@/components/contact/ContactMethodsSection";
import ContactFormSection from "@/components/contact/ContactFormSection";
import TeamAvailabilitySection from "@/components/contact/TeamAvailabilitySection";
import ContactFAQSection from "@/components/contact/ContactFAQSection";

const Contact = () => {
  return (
    <>
      <SEOHead data={seoPages.contact} />
      <main className="min-h-screen bg-white">
      <Navigation />
      <ContactHeroSection />
      <StandardIntroSection
        badge="CONTATTI"
        title="Iniziamo insieme il tuo percorso di"
        highlightedText="crescita"
        description="Siamo qui per rispondere alle tue domande e aiutarti a trovare la soluzione perfetta per il tuo business. Contattaci per una consulenza personalizzata e scopri come possiamo accelerare la tua crescita."
        ctaText="Prenota consulenza gratuita"
        ctaHref="/quiz"
      />
      <StandardCustomersSection />
      <StandardQuoteSection
        mainQuote="Dialogo aperto. Soluzioni personalizzate."
        highlightedQuote="Partnership duratura."
        description="Ogni progetto inizia con un dialogo. Ascoltiamo le tue esigenze, comprendiamo i tuoi obiettivi e creiamo insieme la strategia più efficace per il tuo successo."
        ctaText="Inizia la conversazione"
        ctaHref="/quiz"
      />
      <ContactMethodsSection />
      <ContactFormSection />
      <TeamAvailabilitySection />
      <ContactFAQSection />
      <Footer />
    </main>
    </>
  );
};

export default Contact;