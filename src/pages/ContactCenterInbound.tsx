import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StandardIntroSection from "@/components/shared/StandardIntroSection";
import StandardCustomersSection from "@/components/shared/StandardCustomersSection";
import StandardQuoteSection from "@/components/shared/StandardQuoteSection";
import AboutSection from "@/components/AboutSection";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import MailerLiteContactSection from "@/components/MailerLiteContactSection";
import CrossSellRecommendations from "@/components/CrossSellRecommendations";
import AllServicesCarousel from "@/components/shared/AllServicesCarousel";
import AdvantagesSectionNew from "@/components/contactcenter/AdvantagesSectionNew";
import ProcessSectionNew from "@/components/contactcenter/ProcessSectionNew";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Users, Headphones, TrendingUp, Target } from "lucide-react";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const ContactCenterInbound = () => {
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
      <section id="hero" className="pt-20 pb-2 px-0 bg-black">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="relative min-h-[85vh] rounded-3xl overflow-hidden bg-black border border-gray-800/30 shadow-2xl">
            {/* Background Video */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source
                src="https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290377/inbound_contact_center_page_a8rtme.mp4"
                type="video/mp4"
              />
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
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm">
                  <MessageSquare className="w-4 h-4 text-white" />
                  <span className="text-white font-medium text-sm">Contact Center Inbound: gestione professionale delle chiamate in entrata</span>
                </div>
              </div>
              
              <h1 className={`text-5xl lg:text-7xl font-bold leading-tight mb-8 text-white drop-shadow-2xl ${
                visibleItems[1] 
                  ? "animate-swipe-in-left" 
                  : "opacity-0"
              }`}>
               Accoglienza Clienti Telefonica
              </h1>
              
              <p className={`text-xl lg:text-2xl text-gray-100 mb-8 font-light leading-relaxed max-w-2xl ${
                visibleItems[2] 
                  ? "animate-fade-in-bottom" 
                  : "opacity-0"
              }`}>
                Ogni cliente che chiama merita ascolto, attenzione e soluzioni immediate: ogni chiamata è un'opportunità per accogliere, comprendere e costruire relazioni durature.
              </p>
              
              <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start ${
                visibleItems[3] 
                  ? "animate-scale-in" 
                  : "opacity-0"
              }`}>
                <Button 
                  onClick={() => document.getElementById('intro-servizio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group font-semibold px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white text-black hover:bg-gray-100 border-2 border-white/30"
                >
                  <span className="flex items-center space-x-2">
                    <span>Scopri di più</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
        badge="CONTACT CENTER INBOUND"
        title="La Tua Centrale di Supporto"
        highlightedText="Inbound"
        description="Ogni chiamata è gestita con attenzione e rapidità, garantendo al cliente un'esperienza fluida, multicanale e sempre disponibile."
        ctaText="Scopri il Servizio"
        ctaHref="#vantaggi"
        ctaSubtext="Setup rapido • Operatori qualificati • Supporto H24 • 500+ client"
      />
      <div id="intro-servizio"></div>
      <div id="clienti">
        <StandardCustomersSection />
      </div>
      <div id="impegno">
        <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
          {/* Background Video */}
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          >
            <source src="https://res.cloudinary.com/dufcnrcfe/video/upload/v1753302600/outsourcing_salesforce_1_bbl0g3.mp4" type="video/mp4" />
          </video>
          
          {/* Enhanced Overlay */}
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#2E8BC0]/20 via-transparent to-[#87CEEB]/10" />
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-[#2E8BC0]/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-32 right-16 w-32 h-32 bg-[#87CEEB]/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
            {/* Quote Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm mb-8">
              <span className="text-primary-glow font-medium text-sm">Contact Center Professionale</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Il cliente al centro,<br />
              <span className="bg-gradient-to-r from-primary-glow to-primary bg-clip-text text-transparent">sempre</span>
            </h2>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Operatori esperti disponibili H24 per offrire un'esperienza fluida e relazioni durature con i tuoi clienti.
            </p>
            
            <p className="text-sm text-gray-300 max-w-2xl mx-auto">
              Disponibilità continua • Supporto qualificato • Esperienza superiore
            </p>
          </div>
        </section>
      </div>

      <AdvantagesSectionNew />

      <ProcessSectionNew />

      {/* CTA Image Section */}
      <section id="cta-finale" className="py-40 relative overflow-hidden">
        {/* Background Video */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="https://res.cloudinary.com/dufcnrcfe/video/upload/v1753302600/outsourcing_salesforce_1_bbl0g3.mp4" type="video/mp4" />
        </video>
        
        {/* Enhanced Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#2E8BC0]/30 via-transparent to-[#87CEEB]/20 z-10" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Dal primo squillo all'assistenza completa:
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            un servizio clienti che aumenta efficienza e fidelizzazione.
          </p>
          
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] rounded-full blur opacity-60 group-hover:opacity-100 transition-all duration-500"></div>
            <Button 
              size="xl" 
              onClick={() => window.location.href = '/contact'}
              className="relative bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] hover:from-[#87CEEB] hover:to-[#2E8BC0] text-white font-bold px-12 py-6 rounded-full text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <span className="flex items-center gap-3">
                Contattaci ora →
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </div>
        </div>
      </section>


      {/* Cross-Sell Recommendations - Mid-page focused cross-sell */}
      <CrossSellRecommendations
        currentService="contact-center-inbound"
        layout="horizontal"
        title="Ottimizza l'esperienza cliente completa"
        subtitle="Contact center di successo integrano questi servizi per risultati eccezionali"
      />

      <AboutSection />
      <LeadMagnetSection />
      
      {/* All Services Carousel - Complete service discovery */}
      <AllServicesCarousel />
      <MailerLiteContactSection />
      <Footer />
    </div>
  );
};

export default ContactCenterInbound;