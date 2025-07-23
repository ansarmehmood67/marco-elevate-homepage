
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "./HeroSection";
import IntroSection from "./IntroSection";
import CustomersSection from "./CustomersSection";
import ServicesCarouselSection from "./ServicesCarouselSection";
import ComparisonTableSection from "./ComparisonTableSection";
import CTAImageSection from "./CTAImageSection";
import HowItWorksSection from "./HowItWorksSection";
import WhyChooseSection from "./WhyChooseSection";
import AboutSection from "@/components/AboutSection";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import FinalCTASection from "@/components/FinalCTASection";
import ServiceMetrics from "@/components/interactive/ServiceMetrics";
import LiveDemo from "@/components/interactive/LiveDemo";
import ContextualTestimonials from "@/components/interactive/ContextualTestimonials";

const SalesOnDemandPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <IntroSection />
      <CustomersSection />
      <ServiceMetrics serviceType="sales" />
      <LiveDemo serviceType="roi" />
      <ServicesCarouselSection />
      <CTAImageSection />
      <ComparisonTableSection />
      
      <HowItWorksSection />
      <WhyChooseSection />
      <ContextualTestimonials serviceType="sales" />
      <AboutSection />
      <LeadMagnetSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default SalesOnDemandPage;
