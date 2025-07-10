
import { useState } from "react";
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

const SalesOnDemandPage = () => {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDark ? 'bg-black text-white' : 'bg-white text-slate-900'
    }`}>
      <Navigation />
      <HeroSection isDark={isDark} setIsDark={setIsDark} />
      <ValuePropositionSection isDark={isDark} />
      <ProblemSolutionSection isDark={isDark} />
      <HowItWorksSection isDark={isDark} />
      <WhyChooseSection isDark={isDark} />
      <PerformanceSection isDark={isDark} />
      <VideoSection isDark={isDark} />
      <BookPromoSection isDark={isDark} />
      <FinalCTASection isDark={isDark} />
      <Footer />
    </div>
  );
};

export default SalesOnDemandPage;
