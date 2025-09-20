import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEO/SEOHead";
import { seoPages } from "@/utils/seoData";
import ProspectGenerationSectionNew from "@/components/telemarketing/ProspectGenerationSectionNew";
import PipelineGenerationSectionNew from "@/components/telemarketing/PipelineGenerationSectionNew";
import StandardCustomersSection from "@/components/shared/StandardCustomersSection";
import StandardQuoteSection from "@/components/shared/StandardQuoteSection";
import LazyAboutSection from "@/components/LazyAboutSection";
import LazyLeadMagnet from "@/components/LazyLeadMagnet";
import LazyContactSection from "@/components/LazyContactSection";
import LazyCarousel from "@/components/LazyCarousel";
import CrossSellRecommendations from "@/components/CrossSellRecommendations";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ArrowRight, Phone, Target, Users, Database, Linkedin, ChevronDown } from "lucide-react";
import TelemarketingIntroSection from "@/components/telemarketing/TelemarketingIntroSection";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const TelemarketingTeleselling = () => {
  const { ref, visibleItems } = useStaggeredAnimation(6, 200);
  const brandLogos = [
    "/lovable-uploads/c015aef0-9ac6-47d5-8f1b-ea8aff14dd08.png",
    "/lovable-uploads/655e08e7-f709-41c5-9b01-f624d4dea2ce.png",
    "/lovable-uploads/fe2c67ca-9c86-4598-b7ce-05d1ef35dbbf.png",
    "/lovable-uploads/871bbc8b-f67d-4537-a7a2-574d06a9e919.png",
    "/lovable-uploads/d4a117b0-a098-4850-9d53-82ee30cbdb21.png",
    "/lovable-uploads/5a8470d1-8aa8-4ee0-a0c5-efbe23f61c0b.png",
    "/lovable-uploads/57e4bdda-6fe0-4184-b948-1e51ef3229c1.png",
  ];

  return (
    <>
      <SEOHead data={seoPages.telemarketingTeleselling} />
      <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with Video Background */}
      <section className="pt-32 sm:pt-36 lg:pt-28 pb-16 px-0 bg-black relative overflow-hidden min-h-screen">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="relative min-h-[85vh] lg:min-h-[90vh] rounded-3xl overflow-hidden border border-gray-800/30 shadow-2xl bg-black">
            {/* Video Background */}
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="https://res.cloudinary.com/dsergeqc9/video/upload/v1758132202/telemarketing_page_xgiv6m.mp4" type="video/mp4" />
            </video>
            
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/70" />
            
            {/* Bottom gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 to-transparent" />
            
            {/* Mobile-friendly flex layout */}
            <div ref={ref} className="absolute inset-0 flex flex-col justify-center lg:justify-center p-4 sm:p-6 lg:p-12 z-20">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-8">
              {/* Content Section */}
              <div className="flex-1 max-w-5xl text-center lg:text-left">
                <div className={`mb-6 flex items-center space-x-2 justify-center lg:justify-start ${
                  visibleItems[0] ? "animate-swipe-in-left" : "opacity-0"
                }`}>
                  <div className="inline-flex items-center gap-2 px-3 lg:px-4 py-2 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm">
                    <Phone className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
                    <span className="text-white font-medium text-xs lg:text-sm">Telemarketing / Teleselling</span>
                  </div>
                </div>
                
                <h1 className={`text-hero-title font-black leading-constrained-tight mb-8 text-white drop-shadow-2xl ${
                  visibleItems[1] 
                    ? "animate-swipe-in-left" 
                    : "opacity-0"
                }`}>
                  Telemarketing B2B che genera opportunità reali
                </h1>
                
                <p className={`text-hero-body text-gray-100 mb-6 lg:mb-8 font-light leading-constrained-relaxed ${
                  visibleItems[2] ? "animate-fade-in-bottom" : "opacity-0"
                }`}>
                  Trasformiamo ogni chiamata in un'opportunità
                </p>
                
                <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start ${
                  visibleItems[3] ? "animate-scale-in" : "opacity-0"
                }`}>
                  <Button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group font-semibold px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 text-base sm:text-lg lg:text-xl rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white text-black hover:bg-gray-100 border-2 border-white/30"
                  >
                    <span className="flex items-center space-x-2">
                      <span>Inizia ora</span>
                      <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </div>
              </div>

              {/* Video Player Section */}
              <div className={`w-full lg:w-80 xl:w-96 h-48 lg:h-48 xl:h-56 rounded-xl overflow-hidden shadow-2xl border-2 border-white/20 backdrop-blur-sm flex-shrink-0 transform-gpu will-change-[transform,opacity] ${
                visibleItems[4] ? "animate-fade-in" : "opacity-0"
              }`}>
                <iframe
                  src="https://www.youtube.com/embed/ZocHP6N9Aig"
                  title="Demo Video"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>

      <StandardQuoteSection
        mainQuote="Ogni chiamata è una connessione,"
        highlightedQuote="ogni connessione conta"
        description="Trasformiamo ogni chiamata in un'opportunità per costruire fiducia e soddisfazione"
        ctaText="Inizia ora"
        onCtaClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      />
      <TelemarketingIntroSection
        badge="TELEMARKETING/TELESELLING"
        ctaText="Scopri di più →"
        onCtaClick={() => document.getElementById('pipeline-generation')?.scrollIntoView({ behavior: 'smooth' })}
        ctaSubtext="Audit 30 min • Nessun impegno • Risposta entro 2 ore • 500+ client"
      />
      <StandardCustomersSection />

      <ProspectGenerationSectionNew />

      {/* CTA Image Section - Full Width */}
      <section className="py-40 relative overflow-hidden">
        {/* Background Video */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="https://res.cloudinary.com/dsergeqc9/video/upload/v1758132205/telemarketing_page_1_ulctla.mp4" type="video/mp4" />
        </video>
        
        {/* Enhanced Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#2E8BC0]/30 via-transparent to-[#87CEEB]/20 z-10" />
        
        <div className="max-w-6xl mx-auto px-6 text-center relative z-20">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-2xl">
              Aumenta ricavi e profitti con{" "}
              <span className="text-[#87CEEB]">il telemarketing strategico</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed drop-shadow-xl font-medium">
              Il nostro servizio ti aiuta a trasformare le chiamate in opportunità reali, evitando sprechi di budget e azioni poco redditizie. Con un modello flessibile e orientato ai risultati, puoi ottenere più vendite in meno tempo.
            </p>
            
            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] hover:from-[#87CEEB] hover:to-[#2E8BC0] text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Contattaci
            </Button>
          </div>
        </div>
      </section>

      <div id="pipeline-generation"><PipelineGenerationSectionNew /></div>

      {/* Cross-Sell Recommendations */}
      <CrossSellRecommendations
        currentService="telemarketing-teleselling"
        layout="horizontal"
        title="Potenzia i tuoi risultati di vendita"
        subtitle="Il 73% dei clienti Telemarketing aggiunge questi servizi per massimizzare le conversioni"
      />

      <LazyAboutSection />
      <LazyLeadMagnet />
      
      {/* All Services Carousel */}
      <LazyCarousel />
      
      <div id="contact"><LazyContactSection /></div>
        <Footer />
      </main>
    </>
  );
};

export default TelemarketingTeleselling;