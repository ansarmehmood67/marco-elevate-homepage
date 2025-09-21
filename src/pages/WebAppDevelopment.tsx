import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StandardIntroSection from "@/components/shared/StandardIntroSection";
import StandardCustomersSection from "@/components/shared/StandardCustomersSection";
import StandardQuoteSection from "@/components/shared/StandardQuoteSection";

import LazyYouTubeEmbed from "@/components/LazyYouTubeEmbed";
import LazyTestimonials from "@/components/LazyTestimonials";
import AboutSection from "@/components/AboutSection";
import MailerLiteContactSectionAnimated from "@/components/MailerLiteContactSectionAnimated";
import PremiumServicesCarouselOptimized from "@/components/PremiumServicesCarouselOptimized";
import CrossSellRecommendations from "@/components/CrossSellRecommendations";
import PremiumFinalCTA from "@/components/shared/PremiumFinalCTA";
import SEOHead from "@/components/SEO/SEOHead";
import { seoPages } from "@/utils/seoData";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, Target, Code, Smartphone, Zap, Activity } from "lucide-react";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const WebAppDevelopment = () => {
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
      <SEOHead data={seoPages.webAppDevelopment} />
      <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-24 lg:pt-24 pb-16 px-0 bg-black relative overflow-hidden min-h-screen">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="relative min-h-[85vh] rounded-3xl overflow-hidden bg-black border border-gray-800/30 shadow-2xl">
            {/* Background Video */}
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover z-0"
            >
              <source src="https://res.cloudinary.com/dsergeqc9/video/upload/v1758134350/web_and_app_development_page_t02syb.mp4" type="video/mp4" />
            </video>
            
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/70" />
            
            {/* Bottom gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 to-transparent z-10" />
            
            {/* Mobile-friendly flex layout */}
            <div ref={ref} className="absolute inset-0 flex flex-col justify-center lg:justify-center p-4 sm:p-6 lg:p-12 z-20">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-8">
                {/* Content */}
                <div className="flex-1 max-w-5xl text-center lg:text-left">
                  <div className={`mb-6 flex items-center space-x-2 ${
                    visibleItems[0] ? "animate-swipe-in-left" : "opacity-0"
                  }`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm">
                      <Code className="w-4 h-4 text-white" />
                      <span className="text-white font-medium text-sm">Web & App Development</span>
                    </div>
                  </div>
                  
                  <h1 className={`text-hero-title font-black leading-constrained-tight mb-6 lg:mb-8 text-white drop-shadow-2xl ${
                    visibleItems[1] ? "animate-swipe-in-left" : "opacity-0"
                  }`}>
                    Web App e App Mobile Personalizzate per la Crescita
                  </h1>
                  
                  <p className={`text-hero-body text-gray-100 mb-6 lg:mb-8 font-light leading-constrained-relaxed ${
                    visibleItems[2] ? "animate-fade-in-bottom" : "opacity-0"
                  }`}>
                    Che tu abbia bisogno di una landing page elegante o di un'app enterprise completa, progettiamo <span className="font-semibold text-blue-200">piattaforme ad alte prestazioni</span> che si integrano perfettamente con i tuoi obiettivi e la tua strategia AI.
                  </p>
                  
                  <div className={`flex flex-col sm:flex-row gap-4 ${
                    visibleItems[3] ? "animate-scale-in" : "opacity-0"
                  }`}>
                     <Button 
                       onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                       className="group font-semibold px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 text-base sm:text-lg lg:text-xl rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white text-black hover:bg-gray-100 border-2 border-white/30">
                       <span className="flex items-center space-x-2">
                         <span>Richiedi un preventivo gratuito</span>
                         <ArrowRight className="w-4 lg:w-5 h-4 lg:h-5 group-hover:translate-x-1 transition-transform" />
                       </span>
                     </Button>
                     <Button 
                       onClick={() => document.getElementById('nostre-competenze')?.scrollIntoView({ behavior: 'smooth' })}
                       className="group font-semibold px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white/10 text-white hover:bg-white/20 border-2 border-white/30 backdrop-blur-sm">
                       <span className="flex items-center space-x-2">
                         <span>Esplora il nostro lavoro</span>
                         <Target className="w-4 lg:w-5 h-4 lg:h-5 group-hover:rotate-12 transition-transform" />
                       </span>
                     </Button>
                  </div>
                </div>

                {/* YouTube Video Player - Responsive positioning */}
                 <div className={`w-full sm:w-80 lg:w-80 h-48 rounded-xl overflow-hidden shadow-2xl border-2 border-white/20 backdrop-blur-sm lg:flex-shrink-0 transform-gpu will-change-[transform,opacity] ${
                  visibleItems[4] ? "animate-fade-in" : "opacity-0"
                }`}>
                  <LazyYouTubeEmbed
                    videoId="ZocHP6N9Aig"
                    title="Demo Video"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StandardIntroSection
        badge="SVILUPPO PROFESSIONALE"
        title="Sviluppo web e mobile che scala con il tuo"
        highlightedText="business"
        description="Nel mondo digitale di oggi, un sito web o un'app è molto più di una semplice presenza — è il motore per acquisizione, automazione e crescita. Creiamo prodotti digitali su misura potenziati da strategia, velocità e integrazioni intelligenti."
        ctaText="Inizia ora"
        onCtaClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      />
      <StandardCustomersSection />
      <StandardQuoteSection
        mainQuote="Non costruiamo solo app —"
        highlightedQuote="costruiamo piattaforme che vendono, scalano e supportano il tuo business 24/7"
        description="Ogni riga di codice è scritta con scopo e performance in mente"
        ctaText="Scopri di più"
        onCtaClick={() => document.getElementById('come-funziona')?.scrollIntoView({ behavior: 'smooth' })}
      />

      {/* Features Section */}
      <section id="nostre-competenze" className="py-20 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-8 py-4 rounded-full text-sm font-bold tracking-[0.3em] uppercase mb-8 transition-all duration-300 hover:scale-105 shadow-lg bg-primary/10 text-primary border border-primary/20">
              WEB & APP DEVELOPMENT
            </div>
            <h2 className="text-5xl lg:text-7xl font-black leading-[0.85] tracking-tight text-white mb-8">
              Le nostre{" "}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                competenze
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Tutto quello che serve per costruire, lanciare e far crescere la tua piattaforma digitale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: "Enterprise Full-Stack Architecture",
                description: "Piattaforme digitali enterprise-grade con architettura cloud-native, integrazione AI-ready e performance ottimizzate per sostenere crescita business esponenziale e carichi critici.",
                features: ["Cloud-native architecture", "AI-ready infrastructure", "Auto-scaling capabilities", "Enterprise security standards"]
              },
              {
                icon: Target,
                title: "SEO & Performance Domination",
                description: "Ottimizzazione tecnica avanzata che garantisce posizionamento organico dominante, Core Web Vitals perfetti e user experience che massimizza conversion rate su ogni touchpoint.",
                features: ["Technical SEO mastery", "Page speed optimization", "Conversion funnel engineering", "Core Web Vitals excellence"]
              },
              {
                icon: Smartphone,
                title: "Cross-Platform Mobile Excellence",
                description: "Sviluppo applicazioni native iOS/Android e PWA con design system premium, performance exceptional e integrazione completa nell'ecosistema business digitale.",
                features: ["Native iOS & Android apps", "Progressive Web App development", "Design system consistency", "Business API integration"]
              }
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="group relative rounded-3xl p-10 min-h-[480px] flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] overflow-hidden shadow-2xl">
                  {/* Solid primary background */}
                  <div className="absolute inset-0 bg-primary"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10"></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-3xl lg:text-4xl font-black mb-4 leading-tight text-white tracking-tight">{feature.title}</h3>
                    <p className="text-lg text-white/90 mb-8 leading-relaxed font-normal">{feature.description}</p>
                    
                    <div className="space-y-4 flex-1">
                      {feature.features.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-white text-base">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Image Section */}
      <section className="py-40 relative overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="https://res.cloudinary.com/dsergeqc9/video/upload/v1758134391/web_and_app_development_tgrqt4.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#2E8BC0]/20 via-transparent to-[#55ACEE]/15 z-10" />
        
        <div className="max-w-6xl mx-auto px-6 text-center relative z-20">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-2xl">
              Pronto a costruire il futuro del{" "}
              <span className="text-[#87CEEB]">tuo business?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white leading-relaxed font-medium drop-shadow-xl">
              Creiamo una piattaforma digitale che genera risultati concreti per la tua azienda
            </p>
            
            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-[#55ACEE] to-[#87CEEB] hover:from-[#2E8BC0] hover:to-[#55ACEE] text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Inizia il tuo progetto
            </Button>
          </div>
        </div>
      </section>


      <PremiumFinalCTA category="consultation" />

      {/* Use Case Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl lg:text-7xl font-black leading-[0.85] tracking-tight text-white mb-12">
              Sviluppiamo soluzioni per{" "}
              <span className="bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] bg-clip-text text-transparent">
                ogni tipo di business
              </span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "MVP per Startup & Pagine di Lancio",
                description: "Hai bisogno di lanciarti velocemente? Costruiamo MVP agili e scalabili che crescono con il tuo progetto.",
                icon: Zap
              },
              {
                title: "Piattaforme E-commerce & Prenotazioni",
                description: "Vendi prodotti, gestisci prenotazioni, utenti e pagamenti — tutto con pannelli di controllo personalizzati e automazioni.",
                icon: Target
              },
              {
                title: "App & Portali Aziendali",
                description: "Sviluppiamo portali web sicuri, dashboard interattive e strumenti mobile per uso interno o per i tuoi clienti.",
                icon: Users
              }
            ].map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <div key={index} className="group relative">
                  <div className="relative p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/50 hover:border-[#2E8BC0]/30 transition-all duration-700 hover:scale-105 overflow-hidden">
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2E8BC0]/5 via-transparent to-[#87CEEB]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Icon */}
                    <div className="relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#2E8BC0]/20 to-[#87CEEB]/20 mb-8 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-10 h-10 text-[#87CEEB]" />
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10 space-y-6">
                      <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight group-hover:text-[#87CEEB] transition-colors duration-300">
                        {useCase.title}
                      </h3>
                      <p className="text-lg text-gray-300 leading-relaxed">
                        {useCase.description}
                      </p>
                    </div>
                    
                    {/* Decorative corner */}
                    <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-[#2E8BC0]/20 to-[#87CEEB]/20 rounded-full blur-xl group-hover:blur-lg transition-all duration-500" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-gradient-to-br from-[#2E8BC0] via-[#55ACEE] to-[#87CEEB] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm mb-8">
              <Code className="w-4 h-4 text-white" />
              <span className="text-white font-medium text-sm">La nostra filosofia</span>
            </div>
            
            <blockquote className="space-y-6">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                "Il tuo sito web e la tua app non sono solo strumenti — sono il tuo quartier generale digitale. Li rendiamo belli, funzionali e pronti a crescere con il tuo business."
              </h3>
            </blockquote>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Domande frequenti sullo{" "}
              <span className="bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] bg-clip-text text-transparent">
                sviluppo web e mobile
              </span>
            </h2>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "Quanto tempo ci vuole per sviluppare un sito web personalizzato?",
                answer: "I tempi variano in base alla complessità del progetto. Un sito semplice richiede 2-4 settimane, mentre piattaforme complesse possono richiedere 2-3 mesi. Ti forniremo sempre una stima precisa dopo la fase di analisi."
              },
              {
                question: "Potete anche lavorare su un sito WordPress esistente?",
                answer: "Assolutamente sì. Possiamo ottimizzare, ridisegnare o aggiungere funzionalità al tuo sito WordPress esistente, mantenendo tutti i contenuti e migliorando performance e design."
              },
              {
                question: "Offrite servizi di manutenzione dopo il lancio?",
                answer: "Sì, offriamo pacchetti di manutenzione che includono aggiornamenti di sicurezza, backup, monitoraggio delle performance e supporto tecnico continuo."
              },
              {
                question: "Gli sviluppi includono anche l'ottimizzazione SEO?",
                answer: "Tutti i nostri siti sono ottimizzati per i motori di ricerca fin dalla fase di sviluppo, con struttura tecnica SEO-friendly, velocità di caricamento ottimizzata e markup semantico."
              },
              {
                question: "Potete realizzare un'app sia per Android che per iOS?",
                answer: "Sì, sviluppiamo sia app native che cross-platform. Le soluzioni cross-platform ci permettono di creare un'app che funziona su entrambe le piattaforme con un unico sviluppo."
              },
              {
                question: "Come funziona la consegna e la pubblicazione?",
                answer: "Gestiamo tutto il processo: dalla configurazione dei server al deploy finale. Ti consegniamo il progetto completo con documentazione e ti supportiamo nella pubblicazione su app store e hosting."
              }
            ].map((faq, index) => (
              <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
                <details className="group">
                  <summary className="flex items-center justify-between p-8 cursor-pointer hover:bg-slate-50 transition-colors duration-200">
                    <h3 className="text-xl font-semibold text-slate-900 pr-8">{faq.question}</h3>
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2E8BC0]/10 flex items-center justify-center group-open:rotate-45 transition-transform duration-200">
                      <span className="text-[#2E8BC0] font-bold text-xl">+</span>
                    </div>
                  </summary>
                  <div className="px-8 pb-8">
                    <p className="text-slate-600 leading-relaxed text-lg">{faq.answer}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Built Around Your Vision
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                We don't push templates. Every platform starts with a discovery call, wireframes, and a custom roadmap. You tell us where you want to go — we build the vehicle.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#2E8BC0]/10 to-[#87CEEB]/10 rounded-2xl p-8 border border-[#2E8BC0]/20">
              <div className="w-16 h-16 bg-[#2E8BC0] rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">Vision-Driven Development</h4>
              <p className="text-slate-600">Custom solutions that align perfectly with your business goals</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="bg-gradient-to-br from-[#87CEEB]/10 to-[#2E8BC0]/10 rounded-2xl p-8 border border-[#87CEEB]/20">
              <div className="w-16 h-16 bg-[#87CEEB] rounded-full flex items-center justify-center mb-6">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">Real-Time Management</h4>
              <p className="text-slate-600">Advanced dashboards and control panels for seamless operations</p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Real-Time Management Tools
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Add dashboards, content management, lead tracking, or user-level control panels — all tailored to your operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      

      {/* Cross-Sell Recommendations - Mid-page focused cross-sell */}
      <CrossSellRecommendations
        currentService="web-app-development"
        layout="horizontal"
        title="Porta il tuo sviluppo al livello successivo"
        subtitle="Le piattaforme web e mobile performano meglio quando integrate con questi servizi"
      />

      {/* All Services Carousel - Complete service discovery */}
      <PremiumServicesCarouselOptimized />
      
      <MailerLiteContactSectionAnimated />
      <Footer />
    </div>
    </>
  );
};

export default WebAppDevelopment;