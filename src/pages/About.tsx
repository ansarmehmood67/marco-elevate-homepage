import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import StandardQuoteSection from "@/components/shared/StandardQuoteSection";
import CompanyStorySection from "@/components/about/CompanyStorySection";
import AboutSection from "@/components/AboutSection";
import ValuesMissionSection from "@/components/about/ValuesMissionSection";
import StatisticsSection from "@/components/about/StatisticsSection";
import MethodologySection from "@/components/about/MethodologySection";
import CertificationsSection from "@/components/about/CertificationsSection";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <AboutHeroSection />
      <StandardQuoteSection
        mainQuote="Esperienza consolidata. Team dedicato."
        highlightedQuote="Crescita garantita."
        description="Mettiamo a disposizione anni di esperienza e competenze specializzate per trasformare la tua vision in risultati concreti e misurabili."
        ctaText="Inizia la collaborazione"
        ctaHref="/contact"
      />
      <CompanyStorySection />
      <AboutSection />
      <ValuesMissionSection />
      <StatisticsSection />
      <MethodologySection />
      <CertificationsSection />
      <Footer />
    </div>
  );
};

export default About;