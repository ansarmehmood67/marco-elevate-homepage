import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StandardIntroSection from "@/components/shared/StandardIntroSection";
import StandardCustomersSection from "@/components/shared/StandardCustomersSection";
import StandardQuoteSection from "@/components/shared/StandardQuoteSection";
import VideoPlayerOptimized from "@/components/VideoPlayerOptimized";
import LazyYouTubeEmbed from "@/components/LazyYouTubeEmbed";
import LazyTestimonials from "@/components/LazyTestimonials";
import LazyAboutSection from "@/components/LazyAboutSection";
import LazyContactSection from "@/components/LazyContactSection";
import LazyCarousel from "@/components/LazyCarousel";
import CrossSellRecommendations from "@/components/CrossSellRecommendations";
import PremiumFinalCTA from "@/components/shared/PremiumFinalCTA";
import SEOHead from "@/components/SEO/SEOHead";
import { seoPages } from "@/utils/seoData";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, Bot, Mail, Webhook, Brain, Target, CheckCircle, Zap, Settings, TrendingUp, MessageSquare, BarChart, ChevronDown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const AIIntegration = () => {
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
      <SEOHead data={seoPages.aiIntegration} />
      <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-24 lg:pt-24 pb-16 px-0 bg-black relative overflow-hidden min-h-screen">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="relative min-h-[85vh] lg:min-h-[90vh] rounded-3xl overflow-hidden bg-black border border-gray-800/30 shadow-2xl">
            {/* Background Video */}
            <VideoPlayerOptimized
              src="https://res.cloudinary.com/dsergeqc9/video/upload/v1758129840/ai_integrations_page_ol1ktm.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover z-0"
              priority
            />
            
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/70" />
            
            {/* Bottom gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 to-transparent z-10" />
            
            {/* Mobile-friendly flex layout */}
            <div ref={ref} className="relative lg:absolute lg:inset-0 flex flex-col justify-center lg:justify-center p-4 sm:p-6 lg:p-12 pt-6 sm:pt-10 lg:pt-24 pb-10 sm:pb-12 lg:pb-12 z-20">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 sm:gap-6 lg:gap-8">
              {/* Content Section */}
              <div className="flex-1 max-w-5xl text-center lg:text-left">
                <div className={`mb-6 flex items-center space-x-2 justify-center lg:justify-start ${
                  visibleItems[0] 
                    ? "animate-swipe-in-left" 
                    : "opacity-0"
                }`}>
                  <div className="inline-flex items-center gap-2 px-3 lg:px-4 py-2 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm">
                    <Bot className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
                    <span className="text-white font-medium text-xs lg:text-sm">AI Integration</span>
                  </div>
                </div>
                
                <h1 className={`text-hero-title font-black leading-constrained-tight mb-6 lg:mb-8 text-white drop-shadow-2xl ${
                  visibleItems[1] 
                    ? "animate-swipe-in-left" 
                    : "opacity-0"
                }`}>
                  Trasforma il Tuo Flusso di Lavoro Esistente in un Motore Potenziato dall'AI
                </h1>
                
                <p className={`text-hero-body text-gray-100 mb-6 lg:mb-8 font-light leading-constrained-relaxed ${
                  visibleItems[2] 
                    ? "animate-fade-in-bottom" 
                    : "opacity-0"
                }`}>
                  Integriamo chatbot AI, strumenti di automazione, motori predittivi e <span className="font-semibold text-blue-200">generazione di contenuti</span> negli strumenti che già utilizzi.
                </p>
                
                <div className={`flex flex-col gap-4 justify-center lg:justify-start ${
                  visibleItems[3] 
                    ? "animate-scale-in" 
                    : "opacity-0"
                }`}>
                   <Button 
                     onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                     className="group font-semibold px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 text-base sm:text-lg lg:text-xl rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white text-black hover:bg-gray-100 border-2 border-white/30">
                     <span className="flex items-center space-x-2">
                       <span>Integriamo l'AI</span>
                       <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
                     </span>
                   </Button>
                  <Button className="group font-semibold px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white/10 text-white hover:bg-white/20 border-2 border-white/30 backdrop-blur-sm lg:hidden">
                    <span className="flex items-center space-x-2">
                      <span>Esplora i Casi d'Uso</span>
                      <Brain className="w-4 h-4 group-hover:rotate-12 transition-transform" />
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
        badge="INTEGRAZIONE INTELLIGENTE"
        title="Integrazione AI senza interruzioni nel tuo"
        highlightedText="flusso di lavoro"
        description="Non hai bisogno di ricostruire tutto. Con le giuste integrazioni AI, il tuo sito web, CRM, helpdesk o funnel di vendita possono iniziare a pensare in modo più intelligente e lavorare di più — da oggi."
        ctaText="Integra l'AI ora"
        ctaHref="/contact"
      />
      <StandardCustomersSection />
      <StandardQuoteSection
        mainQuote="I tuoi sistemi non dovrebbero solo archiviare dati."
        highlightedQuote="Dovrebbero prendere decisioni"
        description="Trasforma i tuoi strumenti esistenti in piattaforme intelligenti per la presa di decisioni"
        ctaText="Scopri come"
        ctaHref="/contact"
      />

      {/* Integration Examples Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-8 py-4 rounded-full text-sm font-bold tracking-[0.3em] uppercase mb-8 transition-all duration-300 hover:scale-105 shadow-lg bg-primary/10 text-primary border border-primary/20">
              INTEGRAZIONI AI
            </div>
            <h2 className="text-5xl lg:text-7xl font-black leading-[0.85] tracking-tight text-white mb-8">
              Integrazioni AI che realizziamo{" "}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                più spesso
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Esempi concreti di come l'AI può potenziare i tuoi strumenti esistenti
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Bot,
                title: "AI Business Intelligence Engine",
                description: "Piattaforme di business intelligence potenziate da machine learning che trasformano big data aziendali in strategic insights azionabili, con previsioni accurate e raccomandazioni automatiche per decision-making ottimale.",
                points: [
                  "Predictive analytics engine",
                  "Real-time business insights", 
                  "Automated strategic recommendations",
                  "Cross-platform data integration"
                ]
              },
              {
                icon: Sparkles,
                title: "Conversational AI Ecosystem",
                description: "Sistemi di intelligenza conversazionale avanzata che gestiscono customer journey end-to-end con comprensione contextuale, personalizzazione dinamica e handoff intelligente per massimizzare engagement e conversion.",
                points: [
                  "Advanced NLP & sentiment analysis",
                  "Multi-channel conversation orchestration", 
                  "Intelligent lead qualification",
                  "Automated customer support scaling"
                ]
              },
              {
                icon: Brain,
                title: "Process Automation Intelligence",
                description: "Ecosistemi di automazione AI che orchestrano workflow aziendali complessi con adattabilità intelligente, eliminando inefficienze operative e ottimizzando performance attraverso continuous learning.",
                points: [
                  "Intelligent workflow orchestration",
                  "Adaptive process optimization",
                  "Exception handling AI",
                  "Multi-system integration hub"
                ]
              }
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="group relative rounded-3xl p-10 min-h-[480px] flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] overflow-hidden shadow-2xl">
                  {/* Primary gradient background */}
                  <div className="absolute inset-0 bg-primary"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10"></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-3xl lg:text-4xl font-black mb-4 leading-tight text-white tracking-tight">{feature.title}</h3>
                    <p className="text-lg text-white/90 mb-8 leading-relaxed font-normal">{feature.description}</p>
                    
                    <div className="space-y-4 flex-1">
                      {feature.points.map((point, pointIndex) => (
                        <div key={pointIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-white text-base">{point}</span>
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
        <VideoPlayerOptimized
          src="https://res.cloudinary.com/dsergeqc9/video/upload/v1758129771/ai_integrations_cta_msqzif.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#2E8BC0]/30 via-transparent to-[#55ACEE]/20 z-10" />
        
        <div className="max-w-6xl mx-auto px-6 text-center relative z-20">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-2xl">
              Pronto a rendere i tuoi strumenti{" "}
              <span className="text-[#87CEEB]">più intelligenti?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed font-medium drop-shadow-xl">
              Aggiungiamo superpoteri AI al tuo flusso di lavoro esistente
            </p>
            
            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-[#55ACEE] to-[#87CEEB] hover:from-[#2E8BC0] hover:to-[#55ACEE] text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Inizia integrazione
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-8 py-4 rounded-full text-sm font-bold tracking-[0.3em] uppercase mb-8 transition-all duration-300 hover:scale-105 shadow-lg bg-primary/10 text-primary border border-primary/20">
              AI PERSONALIZZATE
            </div>
            <h2 className="text-5xl lg:text-7xl font-black leading-[0.85] tracking-tight text-slate-900 mb-8">
              Perché scegliere strumenti AI{" "}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                su misura?
              </span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              I vantaggi di integrare l'AI nei tuoi processi esistenti
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Più efficienza, meno margine d'errore",
                description: "L'AI lavora in modo costante e preciso, anche su task ripetitivi."
              },
              {
                icon: TrendingUp,
                title: "Soluzioni adattabili e scalabili", 
                description: "Gli strumenti si evolvono con il tuo business e si integrano facilmente in ambienti esistenti."
              },
              {
                icon: Zap,
                title: "Zero codice, massima potenza",
                description: "Usiamo tecnologie no-code o low-code quando possibile, così puoi gestirli anche in autonomia."
              },
              {
                icon: Settings,
                title: "Integrazione con i tuoi sistemi",
                description: "CRM, Google Sheets, email, API… colleghiamo tutto."
              }
            ].map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group border border-slate-100">
                  <div className="space-y-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#2E8BC0]/10 to-[#87CEEB]/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-[#2E8BC0]/20">
                      <IconComponent className="w-8 h-8 text-[#2E8BC0]" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-slate-900">{benefit.title}</h3>
                      <p className="text-slate-600 leading-relaxed text-sm">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      

      {/* Quote Section */}
      <section className="py-20 bg-gradient-to-br from-slate-100 to-slate-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-[#2E8BC0]/20 to-[#87CEEB]/20 rounded-lg flex items-center justify-center opacity-60">
              <span className="text-[#2E8BC0] text-3xl font-bold">"</span>
            </div>
            <blockquote className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight italic">
              Le aziende intelligenti non buttano via quello che funziona.{" "}
              <span className="text-[#2E8BC0]">Lo potenziano.</span> E oggi, lo fanno con l'intelligenza artificiale.
            </blockquote>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
              Domande frequenti sulle{" "}
              <span className="text-[#2E8BC0]">integrazioni AI</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Tutto quello che devi sapere per iniziare
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-slate-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#2E8BC0]">
                Possiamo integrare l'AI nel nostro sistema gestionale attuale?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                Assolutamente sì. Lavoriamo con API, webhook e connettori per integrare l'AI nei sistemi esistenti senza sostituirli. Che si tratti di CRM, ERP o piattaforme personalizzate, troviamo sempre una soluzione.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-slate-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#2E8BC0]">
                È necessaria una modifica al codice esistente?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                Dipende dal tipo di integrazione. Spesso lavoriamo tramite API e webhook che non richiedono modifiche al codice esistente. In altri casi, potremmo suggerire piccoli aggiornamenti per ottimizzare l'integrazione.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-slate-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#2E8BC0]">
                Quanto tempo richiede un'integrazione?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                Le integrazioni semplici possono essere pronte in 1-2 settimane, mentre quelle più complesse richiedono 4-6 settimane. Ti forniamo sempre una timeline dettagliata dopo l'analisi iniziale.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-slate-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#2E8BC0]">
                L'integrazione può essere con più strumenti (es. CRM + WhatsApp)?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                Certamente! Creiamo ecosistemi integrati dove l'AI collega e coordina più strumenti. Ad esempio, un lead che arriva da WhatsApp può essere automaticamente qualificato e inserito nel CRM con follow-up personalizzati.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-slate-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#2E8BC0]">
                Gestite anche aggiornamenti e supporto post-integrazione?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                Sì, offriamo pacchetti di supporto e manutenzione per garantire che le integrazioni rimangano sempre aggiornate e performanti. Include monitoraggio, aggiornamenti e ottimizzazioni continue.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Cross-Sell Recommendations - Mid-page focused cross-sell */}
      <CrossSellRecommendations
        currentService="ai-integration"
        layout="horizontal"
        title="Potenzia la tua integrazione AI"
        subtitle="Le aziende che combinano integrazione AI con questi servizi vedono risultati superiori del 85%"
      />

      
      
      {/* All Services Carousel - Complete service discovery */}
      <LazyCarousel />
      <LazyContactSection />
      <Footer />
    </div>
    </>
  );
};

export default AIIntegration;