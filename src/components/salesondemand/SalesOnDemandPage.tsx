
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "./HeroSection";
import ValuePropositionSection from "./ValuePropositionSection";
import ProblemSolutionSection from "./ProblemSolutionSection";
import HowItWorksSection from "./HowItWorksSection";
import WhyChooseSection from "./WhyChooseSection";
import PerformanceSection from "./PerformanceSection";
import VideoSection from "./VideoSection";
import BookPromoSection from "./BookPromoSection";
import FinalCTASection from "./FinalCTASection";
import ServicesWeOfferSection from "./ServicesWeOfferSection";
import CTAVideoSection from "./CTAVideoSection";

const SalesOnDemandPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ValuePropositionSection />
      <ServicesWeOfferSection />
      <CTAVideoSection />
      <HowItWorksSection />
      <WhyChooseSection />
      <PerformanceSection />
      <VideoSection />
      <BookPromoSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default SalesOnDemandPage;
