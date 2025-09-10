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
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Target, Brain, Cpu, BarChart3, Play, Video, Zap } from "lucide-react";

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
                    <span className="text-white font-medium text-xs lg:text-sm">Marketing Strategico in Outsourcing</span>
                  </div>
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 lg:mb-8 text-white drop-shadow-2xl">
                  Supera i limiti del marketing interno
                </h1>
                
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 mb-6 lg:mb-8 font-light leading-relaxed">
                  Scegliendo l'outsourcing come leva strategica di crescita riduci i costi fissi e accedi a competenze specialistiche senza i vincoli di un reparto interno. Con l'outsourcing hai strategie su misura, risultati misurabili e un team che lavora per i tuoi obiettivi di crescita.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button className="group font-semibold px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white text-black hover:bg-gray-100 border-2 border-white/30">
                    <span className="flex items-center space-x-2">
                      <span>Scopri di più →</span>
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
        badge="MARKETING OUTSOURCING"
        title="Marketing in Outsourcing: Crescita"
        highlightedText="consistente"
        description="Il marketing è una strategia di lungo termine, non un'azione spot. I risultati dipendono da visione e budget, per questo un modello snello e in outsourcing è la scelta ideale. Con noi trasformi il messaggio della tua azienda in crescita concreta, con costi ottimizzati e risultati misurabili."
        ctaText="Scopri come possiamo far crescere la tua azienda →"
        ctaHref="/contact"
      />
      <StandardCustomersSection />
      <StandardQuoteSection
        badge="Perché scegliere il marketing in outsourcing"
        mainQuote="Marketing che produce"
        highlightedQuote="ROI"
        description="Se il marketing non genera ritorni, è solo una spesa! Oggi il mercato è saturo di messaggi: senza una strategia solida il marketing non riesce a distinguersi e a generare valore. Con il marketing outsourcing hai un team di specialisti che costruisce campagne mirate e strategie data‑driven, trasformando ogni euro investito in profitto reale e misurabile."
        ctaText="Parla con un consulente oggi stesso →"
        ctaHref="/contact"
      />

      {/* Benefits Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-16 px-4 relative">
            <div className="inline-block mb-6">
              <span className="text-sm font-bold tracking-[0.3em] uppercase px-8 py-4 rounded-full bg-primary/10 text-primary border border-primary/20 transition-all duration-300 hover:scale-105 shadow-lg">
                Dal marketing spot al processo integrato che genera ROI
              </span>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-5xl lg:text-7xl font-black leading-[0.85] tracking-tight text-white mb-8">
                  Outsourcing{" "}
                  <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                    Marketing
                  </span>
                </h2>
              </div>
              <div className="space-y-8">
                <p className="text-xl lg:text-2xl leading-relaxed text-slate-300 max-w-3xl">
                  Comprare servizi isolati porta risultati temporanei e spesso inconcludenti. Con un modello di outsourcing basato su strategie integrate trasformiamo il marketing in un motore di crescita misurabile e incrementale.
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
                  Dal targeting avanzato al monitoraggio in tempo reale, ogni azione è ottimizzata per aumentare clienti e conversioni.
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
                  Automazioni intelligenti che creano continuità
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Non interventi spot, ma processi potenziati dall'intelligenza artificiale: workflow evoluti che coltivano ogni lead, lo seguono passo dopo passo e lo trasformano in opportunità di business.
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
                  ROI incrementale
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Ogni attività è parte di un processo: così l'investimento cresce nel tempo e produce ritorni sempre più consistenti.
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
              Affida il tuo marketing a chi porta risultati
            </h2>

            <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
              Risparmia tempo e risorse: il nostro team lavora con un unico obiettivo, trasformare ogni euro investito in valore misurabile e crescita concreta.
            </p>

            <div className="flex justify-center">
              <Button className="group font-semibold px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white text-slate-900 hover:bg-slate-100">
                <span className="flex items-center space-x-2">
                  <span>Parla con un consulente →</span>
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
                  Scegliere un team esterno significa trasformare il marketing da costo incerto a leva strategica: più flessibilità, più competenze, meno rischi.
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
                  Modella le attività in base alle tue esigenze, senza vincoli rigidi.
                </p>
              </div>

              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] rounded-full shadow-lg transition-all duration-500 group-hover:scale-125 group-hover:shadow-xl"></div>
            </div>

            <div className="group relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-lg transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-[#2E8BC0]/20 hover:-translate-y-2 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500"></div>
              
              <div className="relative space-y-4">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#2E8BC0] transition-colors duration-300">
                  Competenze specialistiche
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Accedi a un pool di esperti sempre aggiornati.
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
                  Adattiamo le risorse al ritmo della tua crescita.
                </p>
              </div>

              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] rounded-full shadow-lg transition-all duration-500 group-hover:scale-125 group-hover:shadow-xl"></div>
            </div>

            <div className="group relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-lg transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-[#2E8BC0]/20 hover:-translate-y-2 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500"></div>
              
              <div className="relative space-y-4">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#2E8BC0] transition-colors duration-300">
                  Costi chiari
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Budget definiti e trasparenti, con ritorni dimostrabili.
                </p>
              </div>

              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] rounded-full shadow-lg transition-all duration-500 group-hover:scale-125 group-hover:shadow-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Dream Team Section - Marketing + Vendite */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-8 py-4 rounded-full text-lg font-bold mb-8 transition-all duration-300 hover:scale-105 shadow-lg bg-primary/10 text-primary border border-primary/20">
              Un unico flusso, dal lead alla vendita
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[0.85] tracking-tight mb-12">
              Il dream team per il successo: marketing e vendite in outsourcing
            </h2>
            
            <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-4xl mx-auto mb-8">
              Marketing e vendite non devono mai viaggiare separati. Con il nostro modello integrato hai il controllo totale del funnel, senza scarichi di responsabilità. L'unione tra outsourcing marketing e outsourcing vendite crea un unico processo fluido: dalla generazione dei lead alla chiusura commerciale.
            </p>
            
            <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-4xl mx-auto mb-12">
              Un solo punto di contatto, un team integrato e un obiettivo comune: far crescere il tuo business.
            </p>
            
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90 px-8 py-4 text-lg font-semibold">
              Scopri come funziona il nostro modello integrato →
            </Button>
          </div>
        </div>
      </section>

      {/* AI Marketing Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-8 py-4 rounded-full text-lg font-bold mb-8 transition-all duration-300 hover:scale-105 shadow-lg bg-white/10 text-white border border-white/20">
              Tecnologia al servizio della strategia
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-black text-white leading-[0.85] tracking-tight mb-12">
              Intelligenza artificiale: il motore invisibile del tuo marketing
            </h2>
            
            <p className="text-xl lg:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-8">
              Modelli intelligenti e piattaforme su misura per governare ogni processo aziendale.
            </p>
            
            <p className="text-lg text-white/70 leading-relaxed max-w-4xl mx-auto mb-12">
              Non ci limitiamo a fare campagne: costruiamo sistemi. Grazie all'intelligenza artificiale sviluppiamo modelli predittivi, automazioni evolute e piattaforme personalizzate che monitorano e ottimizzano ogni fase del funnel. Con noi, l'AI diventa un alleato strategico che lavora silenziosamente per la crescita della tua azienda.
            </p>
            
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold">
              Scopri come l'AI può trasformare il tuo business →
            </Button>
          </div>
        </div>
      </section>

      {/* YouTube Avatar Section */}
      <section className="py-24 bg-gradient-to-br from-white to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-wave-pattern opacity-5"></div>
        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div>
              <div className="inline-flex items-center px-8 py-4 rounded-full text-lg font-bold mb-8 transition-all duration-300 hover:scale-105 shadow-lg bg-primary/10 text-primary border border-primary/20">
                Comunicare in modo innovativo
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-black text-slate-900 leading-[0.85] tracking-tight mb-8">
                YouTube con avatar personalizzati: il nuovo volto del tuo brand
              </h2>
              
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Siamo specialisti nella creazione di contenuti video con avatar personalizzati, per dare voce e identità unica alla tua azienda.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-12">
                Il nostro sistema YouTube unisce tecnologia, strategia e creatività. L'esperienza diretta e reale del canale Marco Ferrario, un canale YouTube che genera ricavi e continua a crescere grazie all'integrazione di avatar personalizzati e modelli predittivi basati su intelligenza artificiale. Lo stesso metodo oggi viene applicato alle aziende: creiamo format scalabili, automatizziamo la produzione e ti diamo un canale capace di comunicare 24/7 con il tuo pubblico.
              </p>
              
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 px-8 py-4 text-lg font-semibold">
                Scopri il sistema YouTube con avatar →
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/5 to-primary-glow/5 p-8 rounded-3xl border border-primary/10 shadow-2xl backdrop-blur-sm">
                <div className="relative overflow-hidden rounded-3xl shadow-xl border-2 border-white/50 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary-glow/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <iframe 
                    className="w-full aspect-video rounded-2xl" 
                    src="https://www.youtube.com/embed/zpFEclojmZw?si=7q3jc0ZqV3xXP3FC"
                    title="Avatar Personalizzati YouTube Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-primary shadow-lg">
                    ▶ DEMO LIVE
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-primary/20 shadow-lg">
                  <p className="text-lg text-slate-700 font-medium text-center leading-relaxed">
                    Ferrari Service ha scelto questa soluzione per innovare la propria comunicazione e rappresenta una delle nostre storie di successo.
                  </p>
                </div>
              </div>
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
      <MailerLiteContactSection />
      <Footer />
    </div>
  );
};

export default OutsourcingMarketing;