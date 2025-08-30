import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StandardIntroSection from "@/components/shared/StandardIntroSection";
import StandardCustomersSection from "@/components/shared/StandardCustomersSection";
import StandardQuoteSection from "@/components/shared/StandardQuoteSection";
import AboutSection from "@/components/AboutSection";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import FinalCTASection from "@/components/FinalCTASection";
import CrossSellRecommendations from "@/components/CrossSellRecommendations";
import AllServicesCarousel from "@/components/shared/AllServicesCarousel";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Target } from "lucide-react";

const OutsourcingMarketing = () => {
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
            <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 lg:p-12 z-20">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-8">
              {/* Content Section */}
              <div className="flex-1 max-w-2xl">
                <div className="mb-6 flex items-center space-x-2 justify-center lg:justify-start">
                  <div className="inline-flex items-center gap-2 px-3 lg:px-4 py-2 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm">
                    <TrendingUp className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
                    <span className="text-white font-medium text-xs lg:text-sm">Outsourcing Marketing</span>
                  </div>
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 lg:mb-8 text-white drop-shadow-2xl">
                  Marketing Strategico
                </h1>
                
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 mb-6 lg:mb-8 font-light leading-relaxed">
                  Strategie di marketing complete per <span className="font-semibold text-blue-200">generare lead qualificati</span> e aumentare conversioni.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button className="group font-semibold px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white text-black hover:bg-gray-100 border-2 border-white/30">
                    <span className="flex items-center space-x-2">
                      <span>Pianifica strategia</span>
                      <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </div>
              </div>

              {/* Video Player Section */}
              <div className="w-full lg:w-80 xl:w-96 h-48 lg:h-48 xl:h-56 rounded-xl overflow-hidden shadow-2xl border-2 border-white/20 backdrop-blur-sm flex-shrink-0">
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
        badge="MARKETING OUTSOURCING INNOVATIVO"
        title="Marketing in Outsourcing: Crescita senza"
        highlightedText="limiti"
        description="Affidare le attività di marketing a un team esterno ti consente di accedere a competenze avanzate, strategie mirate e risultati misurabili, senza i costi di un reparto interno. Noi siamo il tuo reparto marketing a prestazioni."
        ctaText="Scopri di più"
        ctaHref="/contact"
      />
      <StandardCustomersSection />
      <StandardQuoteSection
        mainQuote="Marketing che"
        highlightedQuote="produce ROI"
        description="Campagne mirate, automation intelligente e strategie data-driven per massimizzare il ritorno sull'investimento"
        ctaText="Parla con un consulente"
        ctaHref="/contact"
      />

      {/* Benefits Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-16 px-4 relative">
            <div className="inline-block mb-6">
              <span className="text-sm font-bold tracking-[0.3em] uppercase px-8 py-4 rounded-full bg-primary/10 text-primary border border-primary/20 transition-all duration-300 hover:scale-105 shadow-lg">
                I NOSTRI VANTAGGI
              </span>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-5xl lg:text-7xl font-black leading-[0.85] tracking-tight text-white mb-8">
                  Marketing{" "}
                  <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                    Strategico
                  </span>
                </h2>
              </div>
              <div className="space-y-8">
                <p className="text-xl lg:text-2xl leading-relaxed text-slate-300 max-w-3xl">
                  Vantaggi concreti che trasformano il marketing in un motore di crescita per il tuo business.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-white backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-lg transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500"></div>
              
              <div className="relative mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>

              <div className="relative space-y-4">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors duration-300">
                  Campagne Mirate
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Strategie di targeting avanzate per massimizzare ROI e conversioni.
                </p>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>Segmentazione audience avanzata</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>A/B testing automatico</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>Ottimizzazione conversioni</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>Analytics real-time</li>
                </ul>
              </div>

              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] rounded-full shadow-lg transition-all duration-500 group-hover:scale-125 group-hover:shadow-xl"></div>
            </div>

            <div className="group relative bg-white backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-lg transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500"></div>
              
              <div className="relative mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>

              <div className="relative space-y-4">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors duration-300">
                  Marketing Automation
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Workflow intelligenti che nurturano lead automaticamente.
                </p>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>Email drip campaigns</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>Lead nurturing sequences</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>Scoring automatico</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>Tracking performance</li>
                </ul>
              </div>

              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] rounded-full shadow-lg transition-all duration-500 group-hover:scale-125 group-hover:shadow-xl"></div>
            </div>

            <div className="group relative bg-white backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-lg transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500"></div>
              
              <div className="relative mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>

              <div className="relative space-y-4">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors duration-300">
                  ROI Ottimizzato
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Strategie data-driven per massimizzare il ritorno sull'investimento.
                </p>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>Metriche avanzate KPI</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>Budget optimization</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>Cost per acquisition</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>Revenue attribution</li>
                </ul>
              </div>

              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] rounded-full shadow-lg transition-all duration-500 group-hover:scale-125 group-hover:shadow-xl"></div>
            </div>
          </div>
        </div>
      </section>

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
              📢 Affida il tuo marketing a chi lavora per risultati
            </h2>

            <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
              Risparmia tempo e risorse: affidati a un team di esperti focalizzato sulla crescita. Con noi, ogni euro investito porta valore.
            </p>

            <div className="flex justify-center">
              <Button className="group font-semibold px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white text-slate-900 hover:bg-slate-100">
                <span className="flex items-center space-x-2">
                  <span>🔗 Parla con un consulente</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 px-4 relative">
            <div className="inline-block mb-6">
              <span className="text-sm font-bold tracking-[0.3em] uppercase px-8 py-4 rounded-full bg-primary/10 text-primary border border-primary/20 transition-all duration-300 hover:scale-105 shadow-lg">
                OUTSOURCING MARKETING
              </span>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-5xl lg:text-7xl font-black leading-[0.85] tracking-tight text-slate-900 mb-8">
                  I vantaggi dell'{" "}
                  <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                    esternalizzazione
                  </span>
                </h2>
              </div>
              <div className="space-y-8">
                <p className="text-xl lg:text-2xl leading-relaxed text-slate-600 max-w-3xl">
                  Perché affidarsi a un team esterno di marketing può trasformare la tua strategia aziendale.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-lg transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-[#2E8BC0]/20 hover:-translate-y-2 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500"></div>
              
              <div className="relative space-y-4">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#2E8BC0] transition-colors duration-300">
                  Flessibilità operativa
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Adatta le risorse alle tue esigenze specifiche senza vincoli a lungo termine.
                </p>
              </div>

              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] rounded-full shadow-lg transition-all duration-500 group-hover:scale-125 group-hover:shadow-xl"></div>
            </div>

            <div className="group relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-lg transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-[#2E8BC0]/20 hover:-translate-y-2 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500"></div>
              
              <div className="relative space-y-4">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#2E8BC0] transition-colors duration-300">
                  Accesso a competenze specialistiche
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Team di esperti con know-how avanzato in tutte le aree del marketing digitale.
                </p>
              </div>

              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] rounded-full shadow-lg transition-all duration-500 group-hover:scale-125 group-hover:shadow-xl"></div>
            </div>

            <div className="group relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-lg transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-[#2E8BC0]/20 hover:-translate-y-2 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500"></div>
              
              <div className="relative space-y-4">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#2E8BC0] transition-colors duration-300">
                  Scalabilità immediata
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Aumenta o riduci le attività in base alle necessità del business.
                </p>
              </div>

              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] rounded-full shadow-lg transition-all duration-500 group-hover:scale-125 group-hover:shadow-xl"></div>
            </div>

            <div className="group relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-lg transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-[#2E8BC0]/20 hover:-translate-y-2 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500"></div>
              
              <div className="relative space-y-4">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#2E8BC0] transition-colors duration-300">
                  Costi chiari e prevedibili
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Budget definiti senza sorprese, solo risultati misurabili.
                </p>
              </div>

              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] rounded-full shadow-lg transition-all duration-500 group-hover:scale-125 group-hover:shadow-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Sell Recommendations - Mid-page focused cross-sell */}
      <CrossSellRecommendations
        currentService="outsourcing-marketing"
        layout="horizontal"
        title="Potenzia la tua strategia marketing"
        subtitle="Le aziende che combinano outsourcing marketing con questi servizi ottengono risultati superiori del 80%"
      />

      <AboutSection />
      <LeadMagnetSection />
      
      {/* All Services Carousel - Complete service discovery */}
      <AllServicesCarousel />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default OutsourcingMarketing;