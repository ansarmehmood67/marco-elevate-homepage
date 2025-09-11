import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import StandardQuoteSection from "@/components/shared/StandardQuoteSection";
import DarkDividerSection from "@/components/about/DarkDividerSection";
import TeamMembersSection from "@/components/about/TeamMembersSection";
import OfficeSection from "@/components/about/OfficeSection";
import SalesMarketingTeamSection from "@/components/about/SalesMarketingTeamSection";
import DevelopmentAITeamSection from "@/components/about/DevelopmentAITeamSection";
import CompanyStorySection from "@/components/about/CompanyStorySection";
import StatisticsSection from "@/components/about/StatisticsSection";

const About = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <AboutHeroSection />
      <StandardQuoteSection
        badge="Il team Sales on demand"
        mainQuote="Il team è l'esecuzione."
        highlightedQuote="Risultati garantiti."
        subheading="Outsourcing che funziona grazie a un team di esperti dedicati"
        description="Ogni risultato nasce da competenze solide e da un'esecuzione impeccabile. Il nostro team è composto da specialisti in marketing, vendite, CRM e customer care, capaci di integrarsi nel tuo business e gestire ogni fase del processo commerciale. Con noi hai un partner unico che elimina inefficienze, accelera la crescita e garantisce performance verificabili."
        ctaText="Scopri il team"
        ctaHref="/contact"
      />
      <DarkDividerSection />
      <TeamMembersSection />
      <OfficeSection />
      <SalesMarketingTeamSection />
      <DevelopmentAITeamSection />
      <CompanyStorySection />
      <StatisticsSection />
      <Footer />
    </div>
  );
};

export default About;