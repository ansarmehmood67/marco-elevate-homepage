import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StandardIntroSection from "@/components/shared/StandardIntroSection";
import StandardCustomersSection from "@/components/shared/StandardCustomersSection";
import StandardQuoteSection from "@/components/shared/StandardQuoteSection";
import AboutSection from "@/components/AboutSection";
import LeadMagnetSectionAnimated from "@/components/LeadMagnetSectionAnimated";
import MailerLiteContactSectionAnimated from "@/components/MailerLiteContactSectionAnimated";
import CrossSellRecommendations from "@/components/CrossSellRecommendations";
import AllServicesCarousel from "@/components/shared/AllServicesCarousel";
import MarketingAdvantagesSectionNew from "@/components/marketing/MarketingAdvantagesSectionNew";
import ExpertSectionNew from "@/components/marketing/ExpertSectionNew";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Target, Brain, Cpu, BarChart3, Play, Video, Zap } from "lucide-react";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const OutsourcingMarketing = () => {
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
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-2 px-0 bg-black">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="relative min-h-[85vh] rounded-3xl overflow-hidden bg-black border border-gray-800/30 shadow-2xl">
            {/* Video Background */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290298/outsourced_markteting_page_ndawq6.mp4" type="video/mp4" />
            </video>
            
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/70" />
            
            {/* Bottom gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 to-transparent" />
            
            {/* Mobile-friendly flex layout */}
            <div ref={ref} className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 lg:p-12 z-20">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-8">
              {/* Content Section */}
              <div className="flex-1 max-w-2xl">
                <div className={`mb-6 flex items-center space-x-2 justify-center lg:justify-start ${
                  visibleItems[0] 
                    ? "animate-swipe-in-left" 
                    : "opacity-0"
                }`}>
                  <div className="inline-flex items-center gap-2 px-3 lg:px-4 py-2 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm">
                    <TrendingUp className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
                    <span className="text-white font-medium text-xs lg:text-sm">Marketing Strategico in Outsourcing</span>
                  </div>
                </div>
                
                <h1 className={`text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 lg:mb-8 text-white drop-shadow-2xl ${
                  visibleItems[1] 
                    ? "animate-swipe-in-left" 
                    : "opacity-0"
                }`}>
                  Supera i limiti del marketing interno
                </h1>
                
                <p className={`text-lg sm:text-xl lg:text-2xl text-gray-100 mb-6 lg:mb-8 font-light leading-relaxed ${
                  visibleItems[2] 
                    ? "animate-fade-in-bottom" 
                    : "opacity-0"
                }`}>
                  Scegliendo l'outsourcing come leva strategica di crescita riduci i costi fissi e accedi a competenze specialistiche senza i vincoli di un reparto interno. Con l'outsourcing hai strategie su misura, risultati misurabili e un team che lavora per i tuoi obiettivi di crescita.
                </p>
                
                <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start ${
                  visibleItems[3] 
                    ? "animate-scale-in" 
                    : "opacity-0"
                }`}>
                  <Button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group font-semibold px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white text-black hover:bg-gray-100 border-2 border-white/30"
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
                visibleItems[4] 
                  ? "animate-fade-in" 
                  : "opacity-0"
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

      <StandardIntroSection
        badge="MARKETING OUTSOURCING"
        title="Marketing in Outsourcing: Crescita"
        highlightedText="consistente"
        description="Il marketing è una strategia di lungo termine, non un'azione spot. I risultati dipendono da visione e budget, per questo un modello snello e in outsourcing è la scelta ideale. Con noi trasformi il messaggio della tua azienda in crescita concreta, con costi ottimizzati e risultati misurabili."
        ctaText="Scopri come possiamo far crescere la tua azienda →"
        onCtaClick={() => document.getElementById('expert-section')?.scrollIntoView({ behavior: 'smooth' })}
        ctaSubtext="Audit 30 min • Nessun impegno • Risposta entro 2 ore • 500+ client"
      />
      <StandardCustomersSection />
      <StandardQuoteSection
        badge="Perché scegliere il marketing in outsourcing"
        mainQuote="Se il marketing non genera ritorni,"
        highlightedQuote="è solo una spesa!"
        description="Oggi il mercato è saturo di messaggi: senza una strategia solida il marketing non riesce a distinguersi e a generare valore. Con il marketing outsourcing hai un team di specialisti che costruisce campagne mirate e strategie data‑driven, trasformando ogni euro investito in profitto reale e misurabile."
        ctaText="Parla con un consulente oggi stesso →"
        ctaHref="/contact"
      />

      <MarketingAdvantagesSectionNew />

      {/* Full Background CTA Section */}
      <section className="py-40 relative overflow-hidden">
        {/* Background Video */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="https://res.cloudinary.com/dufcnrcfe/video/upload/v1753302456/ai_automations_1_ga0fuk.mp4" type="video/mp4" />
        </video>
        
        {/* Enhanced Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#2E8BC0]/30 via-transparent to-[#87CEEB]/20 z-10" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Affida il tuo marketing a chi porta risultati
            </h2>

            <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
              Risparmia tempo e risorse: il nostro team lavora con un unico obiettivo, trasformare ogni euro investito in valore misurabile e crescita concreta.
            </p>

            <div className="flex justify-center">
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group font-semibold px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white text-slate-900 hover:bg-slate-100"
              >
                <span className="flex items-center space-x-2">
                  <span>Parla con un consulente →</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

     

      <div id="expert-section"><ExpertSectionNew /></div>

      {/* Cross-Sell Recommendations - Mid-page focused cross-sell */}
      <CrossSellRecommendations
        currentService="outsourcing-marketing"
        layout="horizontal"
        title="Potenzia la tua strategia marketing"
        subtitle="Le aziende che combinano outsourcing marketing con questi servizi ottengono risultati superiori del 80%"
      />

      <AboutSection />
      <LeadMagnetSectionAnimated />
      
      {/* All Services Carousel - Complete service discovery */}
      <AllServicesCarousel />
      <div id="contact"><MailerLiteContactSectionAnimated /></div>
      <Footer />
    </div>
  );
};

export default OutsourcingMarketing;