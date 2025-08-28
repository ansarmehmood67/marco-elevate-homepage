import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import StandardIntroSection from "@/components/shared/StandardIntroSection";
import StandardCustomersSection from "@/components/shared/StandardCustomersSection";
import StandardQuoteSection from "@/components/shared/StandardQuoteSection";
import CompanyStorySection from "@/components/about/CompanyStorySection";
import TeamSection from "@/components/about/TeamSection";
import ValuesMissionSection from "@/components/about/ValuesMissionSection";
import StatisticsSection from "@/components/about/StatisticsSection";
import MethodologySection from "@/components/about/MethodologySection";
import CertificationsSection from "@/components/about/CertificationsSection";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <AboutHeroSection />
      <StandardIntroSection
        badge="CHI SIAMO"
        title="La tua crescita è il nostro"
        highlightedText="obiettivo"
        description="Da oltre 10 anni aiutiamo aziende di ogni dimensione a crescere attraverso strategie di vendita e marketing integrate. Il nostro team di esperti lavora come un'estensione del tuo reparto interno."
        ctaText="Scopri la nostra storia"
        ctaHref="/contact"
      />
      <StandardCustomersSection />
      <StandardQuoteSection
        mainQuote="Esperienza consolidata. Team dedicato."
        highlightedQuote="Crescita garantita."
        description="Mettiamo a disposizione anni di esperienza e competenze specializzate per trasformare la tua vision in risultati concreti e misurabili."
        ctaText="Inizia la collaborazione"
        ctaHref="/contact"
      />
      <CompanyStorySection />
      <TeamSection />
      <ValuesMissionSection />
      <StatisticsSection />
      <MethodologySection />
      <CertificationsSection />
      <Footer />
    </div>
  );
};

export default About;