
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEO/SEOHead";
import { seoPages } from "@/utils/seoData";
import HeroSection from "./HeroSection";
import StandardIntroSection from "@/components/shared/StandardIntroSection";
import StandardCustomersSection from "@/components/shared/StandardCustomersSection";
import ServicesCarouselSection from "./ServicesCarouselSection";
import ComparisonTableSection from "./ComparisonTableSection";
import CTAImageSection from "./CTAImageSection";
import HowItWorksSection from "./HowItWorksSection";
import WhyChooseSection from "./WhyChooseSection";
import AboutSection from "@/components/AboutSection";
import LazyLeadMagnet from "@/components/LazyLeadMagnet";
import LazyContactSection from "@/components/LazyContactSection";
import CrossSellRecommendations from "@/components/CrossSellRecommendations";
import LazyCarousel from '@/components/LazyCarousel';
import EnhancedLazyImage from '@/components/EnhancedLazyImage';
import LazyTestimonials from '@/components/LazyTestimonials';
import LazyAboutSection from '@/components/LazyAboutSection';

const SalesOnDemandPage = () => {
  return (
    <>
      <SEOHead data={seoPages.salesOnDemand} />
      <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <StandardIntroSection
        badge="SALES ON DEMAND"
        title="Sales on Demand,"
        highlightedText="risultati immediati"
        description="Una soluzione completa di outsourcing forza vendita: venditori a noleggio, metodo validato e tecnologia integrata per garantire crescita scalabile e misurabile."
        ctaText="Scopri Sales on Demand"
        ctaSubtext="•Venditori a noleggio •Risultati reali"
        onCtaClick={() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })}
      />
      <StandardCustomersSection />
      <div id="services-section"><ServicesCarouselSection /></div>
      <CTAImageSection />
      <ComparisonTableSection />
      
      <HowItWorksSection />
      <WhyChooseSection />
      
      
      
      
      <LazyTestimonials />
      <LazyAboutSection />
      <LazyCarousel />
      <LazyLeadMagnet />
      
      
      <LazyCarousel />
      <div id="contact"><LazyContactSection /></div>
      <Footer />
    </main>
    </>
  );
};

export default SalesOnDemandPage;
