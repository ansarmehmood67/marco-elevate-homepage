import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import StandardQuoteSection from "@/components/shared/StandardQuoteSection";
import CompanyStorySection from "@/components/about/CompanyStorySection";
import MarcoStorySection from "@/components/about/MarcoStorySection";
import ValuesMissionSection from "@/components/about/ValuesMissionSection";
import StatisticsSection from "@/components/about/StatisticsSection";
import MethodologySection from "@/components/about/MethodologySection";
import CertificationsSection from "@/components/about/CertificationsSection";
import BehindScenesSection from "@/components/about/BehindScenesSection";
import MarcoFinalCTASection from "@/components/about/MarcoFinalCTASection";

const About = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <AboutHeroSection />
      <StandardQuoteSection
        mainQuote="Marco è la differenza. Il team è l'esecuzione."
        highlightedQuote="Risultati garantiti."
        description="Guidati dalla visione strategica di Marco Ferrario, supportati da un team dedicato che trasforma le strategie in crescita concreta e misurabile."
        ctaText="Lavora con Marco"
        ctaHref="/contact"
      />
      <MarcoStorySection />
      <CompanyStorySection />
      <ValuesMissionSection />
      <StatisticsSection />
      <MethodologySection />
      <CertificationsSection />
      <BehindScenesSection />
      <MarcoFinalCTASection />
      <Footer />
    </div>
  );
};

export default About;