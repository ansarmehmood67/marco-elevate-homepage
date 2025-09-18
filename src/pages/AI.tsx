import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StandardIntroSection from "@/components/shared/StandardIntroSection";
import StandardCustomersSection from "@/components/shared/StandardCustomersSection";
import StandardQuoteSection from "@/components/shared/StandardQuoteSection";
import AboutSection from "@/components/AboutSection";
import LeadMagnetSectionAnimated from "@/components/LeadMagnetSectionAnimated";
import MailerLiteContactSectionAnimated from "@/components/MailerLiteContactSectionAnimated";
import TestimonialsOptimized from "@/components/TestimonialsOptimized";
import CrossSellRecommendations from "@/components/CrossSellRecommendations";
import AllServicesCarousel from "@/components/shared/AllServicesCarousel";
import AIServicesCarousel from "@/components/AIServicesCarousel";
import AIProcessSection from "@/components/shared/AIProcessSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const AI = () => {
  const { ref, visibleItems } = useStaggeredAnimation(6, 200);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [aiCounter, setAiCounter] = useState(247);
  const [greeting, setGreeting] = useState("");

  // Time-based greeting
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting("Buongiorno");
    } else if (hour < 18) {
      setGreeting("Buon pomeriggio");
    } else {
      setGreeting("Buonasera");
    }
  }, []);

  // Typing animation for hero title
  useEffect(() => {
    const text = "Automazioni AI";
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= text.length) {
        setTypedText(text.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  // AI automation counter
  useEffect(() => {
    const counterInterval = setInterval(() => {
      setAiCounter(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 5000);

    return () => clearInterval(counterInterval);
  }, []);
  
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
      
      {/* Hero Section with Video Background */}
      <section className="pt-32 sm:pt-36 lg:pt-28 pb-16 px-0 bg-black relative overflow-hidden min-h-screen">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="relative min-h-[85vh] lg:min-h-[90vh] rounded-3xl overflow-hidden bg-black border border-gray-800/30 shadow-2xl">
            {/* Background Video */}
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="absolute inset-0 w-full h-full object-cover z-0"
            >
              <source src="https://res.cloudinary.com/dsergeqc9/video/upload/v1758129874/aipage_basxul.mp4" type="video/mp4" />
            </video>
            
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/70" />
            
            {/* Bottom gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 to-transparent z-10" />
            
            {/* Mobile-friendly flex layout */}
            <div ref={ref} className="relative lg:absolute lg:inset-0 flex flex-col justify-center lg:justify-center p-4 sm:p-6 lg:p-12 pt-6 sm:pt-10 lg:pt-24 pb-10 sm:pb-12 lg:pb-12 z-20">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 sm:gap-6 lg:gap-8">
                {/* Content */}
                <div className="flex-1 max-w-5xl text-center lg:text-left">
                  <div className={`mb-6 flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 ${
                    visibleItems[0] 
                      ? "animate-swipe-in-left" 
                      : "opacity-0"
                  }`}>
                    {/* AI Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm">
                      <Sparkles className="w-4 h-4 text-white" />
                      <span className="text-white font-medium text-sm">Intelligenza Artificiale</span>
                    </div>
                    
                    {/* AI Status Indicator */}
                    <div className="inline-flex items-center gap-2 px-3 py-2 bg-[#2E8BC0]/20 rounded-full border border-[#2E8BC0]/30 backdrop-blur-sm">
                      <div className="w-2 h-2 bg-[#87CEEB] rounded-full animate-pulse"></div>
                      <span className="text-white font-medium text-xs">
                        {aiCounter} automazioni attive
                      </span>
                    </div>
                  </div>
                  
                  <h1 className={`text-hero-title font-black leading-constrained-tight mb-6 lg:mb-8 text-white drop-shadow-2xl ${
                    visibleItems[1] 
                      ? "animate-swipe-in-left" 
                      : "opacity-0"
                  }`}>
                    {typedText}
                    <span className="animate-pulse">|</span>
                  </h1>
                  
                  <p className={`text-hero-body text-gray-100 mb-6 lg:mb-8 font-light leading-constrained-relaxed ${
                    visibleItems[2] 
                      ? "animate-fade-in-bottom" 
                      : "opacity-0"
                  }`}>
                    {greeting}! Soluzioni di intelligenza artificiale avanzate per <span className="font-semibold text-blue-200">automatizzare marketing e vendite</span>.
                  </p>
                  
                  <div className={`flex flex-col sm:flex-row gap-4 ${
                    visibleItems[3] 
                      ? "animate-scale-in" 
                      : "opacity-0"
                  }`}>
                     <Button 
                       onClick={() => document.getElementById('ourservices')?.scrollIntoView({ behavior: 'smooth' })}
                       className="group font-semibold px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 text-base sm:text-lg lg:text-xl rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white text-black hover:bg-gray-100 border-2 border-white/30">
                       <span className="flex items-center space-x-2">
                         <span>Scopri le automazioni</span>
                         <ArrowRight className="w-4 lg:w-5 h-4 lg:h-5 group-hover:translate-x-1 transition-transform" />
                       </span>
                     </Button>
                  </div>
                </div>

                {/* YouTube Video Player - Responsive positioning */}
                <div className={`w-full sm:w-80 lg:w-80 h-48 rounded-xl overflow-hidden shadow-2xl border-2 border-white/20 backdrop-blur-sm lg:flex-shrink-0 transform-gpu will-change-[transform,opacity] ${
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
        badge="SOLUZIONI AI INNOVATIVE"
        title="Intelligenza artificiale performante per il tuo"
        highlightedText="business"
        description="Sales on Demand sviluppa soluzioni AI complete per automatizzare marketing e vendite. Tecnologie all'avanguardia che lavorano 24/7 per far crescere il tuo business con efficienza e precisione."
        ctaText="Scopri le soluzioni AI"
        onCtaClick={() => document.getElementById('ourservices')?.scrollIntoView({ behavior: 'smooth' })}
      />
      <StandardCustomersSection />
      <StandardQuoteSection
        mainQuote="L'AI non sostituisce l'uomo,"
        highlightedQuote="lo potenzia"
        description="Trasformiamo processi complessi in automazioni intelligenti che lavorano per te"
        ctaText="Scopri come"
        onCtaClick={() => document.getElementById('come-funziona')?.scrollIntoView({ behavior: 'smooth' })}
      />

      {/* AI Services Carousel */}
      <AIServicesCarousel />

      {/* CTA Video Section */}
      <section className="py-40 relative overflow-hidden">
        {/* Background Video */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="https://res.cloudinary.com/dsergeqc9/video/upload/v1758133732/138422-769570674_ygojnh.mp4" type="video/mp4" />
        </video>
        
        {/* Minimal overlay to preserve video visibility */}
        <div className="absolute inset-0 bg-black/20 z-10" />
        
        <div className="max-w-6xl mx-auto px-6 text-center relative z-20">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-2xl">
              Rivoluziona il tuo business con{" "}
              <span className="text-[#87CEEB] drop-shadow-xl">l'intelligenza artificiale</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white leading-relaxed drop-shadow-xl font-medium">
              Scopri come le nostre soluzioni AI innovative possono automatizzare 
              i tuoi processi e accelerare la crescita del tuo business.
            </p>
            
            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-[#55ACEE] to-[#87CEEB] hover:from-[#2E8BC0] hover:to-[#55ACEE] text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Richiedi una demo
            </Button>
          </div>
        </div>
      </section>

      <AIProcessSection />

      {/* Benefits Section */}
      <section className="relative overflow-hidden bg-white">
        {/* Premium Background */}
        <div className="absolute inset-0">
          {/* Elegant Gradient Orbs */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary-glow/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="container mx-auto px-6 py-32 relative z-20">
          <div className="text-center mb-24 animate-fade-in">
            {/* Premium Badge */}
            <div className="inline-flex items-center px-8 py-4 rounded-full text-lg font-bold mb-8 bg-gradient-to-r from-primary to-primary-glow text-white shadow-2xl backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-3xl group">
              <Sparkles className="w-6 h-6 mr-3 group-hover:animate-pulse" />
              <span className="italic">Vantaggi Esclusivi</span>
            </div>
            
            {/* Elegant Typography */}
            <h2 className="text-5xl lg:text-7xl font-black mb-6 leading-tight text-slate-900 tracking-tight">
              Perché Scegliere <br />
              <span className="text-primary drop-shadow-sm">
                Le Nostre Soluzioni AI
              </span>
            </h2>
            
            {/* Decorative Line */}
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full shadow-lg" />
          </div>
          
          {/* Three Cards in Row */}
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Automazione Intelligente",
                  description: "Libera il tuo team dalle attività ripetitive con automazioni AI che lavorano 24/7 per far crescere il tuo business.",
                  points: [
                    "Automazione processi di vendita",
                    "Gestione lead automatizzata", 
                    "Follow-up intelligente",
                    "Reportistica automatica"
                  ],
                  icon: Sparkles
                },
                {
                  title: "Risultati Misurabili",
                  description: "Monitoraggio in tempo reale delle performance con dashboard avanzate e analytics predittive basate su AI.",
                  points: [
                    "Dashboard in tempo reale",
                    "Analytics predittive avanzate",
                    "ROI tracking dettagliato",
                    "KPI personalizzabili"
                  ],
                  icon: Sparkles
                },
                {
                  title: "Scalabilità Senza Limiti",
                  description: "Cresci rapidamente senza aumentare i costi operativi grazie a soluzioni AI che si adattano alle tue esigenze.",
                  points: [
                    "Infrastruttura cloud scalabile",
                    "Costi operativi ridotti",
                    "Crescita sostenibile",
                    "Adattabilità completa"
                  ],
                  icon: Sparkles
                }
              ].map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="group">
                    <div className="relative min-h-[420px] p-8 rounded-2xl bg-primary shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                      {/* Icon */}
                      <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* Content */}
                      <div className="space-y-6">
                        <h3 className="text-2xl font-black text-white leading-tight">
                          {benefit.title}
                        </h3>
                        <p className="text-white/90 leading-relaxed text-base">
                          {benefit.description}
                        </p>
                        
                        {/* Bullet Points */}
                        <ul className="space-y-3">
                          {benefit.points.map((point, pointIndex) => (
                            <li key={pointIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0" />
                              <span className="text-white font-medium">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <TestimonialsOptimized />
      
      {/* Cross-Sell Recommendations - Mid-page focused cross-sell */}
      <CrossSellRecommendations
        currentService="ai"
        layout="horizontal"
        title="Amplia le tue soluzioni AI"
        subtitle="Le aziende che integrano questi servizi AI ottengono risultati superiori del 95%"
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

export default AI;