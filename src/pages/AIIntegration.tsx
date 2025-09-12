import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StandardIntroSection from "@/components/shared/StandardIntroSection";
import StandardCustomersSection from "@/components/shared/StandardCustomersSection";
import StandardQuoteSection from "@/components/shared/StandardQuoteSection";
import AboutSection from "@/components/AboutSection";
import MailerLiteContactSectionAnimated from "@/components/MailerLiteContactSectionAnimated";
import CrossSellRecommendations from "@/components/CrossSellRecommendations";
import AllServicesCarousel from "@/components/shared/AllServicesCarousel";
import PremiumFinalCTA from "@/components/shared/PremiumFinalCTA";
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
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-2 px-0 bg-black">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="relative min-h-[85vh] rounded-3xl overflow-hidden bg-black border border-gray-800/30 shadow-2xl">
            {/* Background Video */}
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="absolute inset-0 w-full h-full object-cover z-0"
            >
              <source src="https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290499/ai_integrations_page_dwcnaj.mp4" type="video/mp4" />
            </video>
            
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/70" />
            
            {/* Bottom gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 to-transparent z-10" />
            
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
                    <Bot className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
                    <span className="text-white font-medium text-xs lg:text-sm">AI Integration</span>
                  </div>
                </div>
                
                <h1 className={`text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 lg:mb-8 text-white drop-shadow-2xl ${
                  visibleItems[1] 
                    ? "animate-swipe-in-left" 
                    : "opacity-0"
                }`}>
                  Trasforma il Tuo Flusso di Lavoro Esistente in un Motore Potenziato dall'AI
                </h1>
                
                <p className={`text-lg sm:text-xl lg:text-2xl text-gray-100 mb-6 lg:mb-8 font-light leading-relaxed ${
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
                  <Button className="group font-semibold px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white text-black hover:bg-gray-100 border-2 border-white/30">
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
                  <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-glow to-primary"></div>
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
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="https://res.cloudinary.com/dufcnrcfe/video/upload/v1753301663/ai_integrations_ksntuo.mp4" type="video/mp4" />
        </video>
        
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
            
            <Button className="bg-gradient-to-r from-[#55ACEE] to-[#87CEEB] hover:from-[#2E8BC0] hover:to-[#55ACEE] text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
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

      {/* How It Works Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-primary-glow/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-24">
            <div className="inline-flex items-center px-8 py-4 rounded-full text-lg font-bold mb-8 bg-gradient-to-r from-primary to-primary-glow text-white shadow-lg transition-all duration-300 hover:scale-105">
              <Target className="w-6 h-6 mr-3 animate-spin" style={{ animationDuration: '3s' }} />
              <span className="italic">Come lavoriamo sulle integrazioni</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-black leading-[0.85] tracking-tight text-slate-900 mb-12">
              Come{" "}
              <span className="text-primary">
                Funziona
              </span>
            </h2>
            <p className="text-xl lg:text-2xl leading-relaxed text-slate-600 max-w-3xl mx-auto">
              Un approccio sistematico che garantisce <span className="font-bold text-primary">risultati misurabili</span>
            </p>
          </div>
          
          {/* Timeline Structure */}
          <div className="max-w-5xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-primary via-primary-glow to-primary opacity-30"></div>
            
            <div className="space-y-16">
              {[
                {
                  number: "01",
                  title: "Analisi del tuo ecosistema",
                  description: "Valutiamo i tuoi strumenti e i casi d'uso possibili per l'AI.",
                  benefit: "Strategia personalizzata basata sui tuoi obiettivi",
                  icon: BarChart
                },
                {
                  number: "02", 
                  title: "Prototipo rapido",
                  description: "Ti mostriamo una demo integrata, collegata ai tuoi flussi reali.",
                  benefit: "Demo funzionante della soluzione",
                  icon: Zap
                },
                {
                  number: "03",
                  title: "Sviluppo e test", 
                  description: "Usiamo API, automation tools o codice per creare l'integrazione ottimale.",
                  benefit: "Integrazione perfetta con i tuoi sistemi",
                  icon: Settings
                },
                {
                  number: "04",
                  title: "Go live & formazione",
                  description: "Andiamo online e formiamo il tuo team per sfruttare al massimo l'AI.",
                  benefit: "Team formato e soluzione operativa",
                  icon: TrendingUp
                }
              ].map((phase, index) => {
                const Icon = phase.icon;
                const isLeft = index % 2 === 0;
                return (
                  <div key={index} className={`relative flex items-center ${isLeft ? 'justify-start' : 'justify-end'}`}>
                    {/* Timeline Node */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-primary via-primary-glow to-primary rounded-full border-4 border-white shadow-lg z-10"></div>
                    
                    {/* Phase Card */}
                    <div className={`w-6/12 ${isLeft ? 'pr-16' : 'pl-16'}`}>
                      <div className="relative min-h-[360px] p-10 rounded-2xl bg-gradient-to-br from-primary via-primary-glow to-primary shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group">
                        {/* Phase Number Badge */}
                        <div className={`absolute -top-4 ${isLeft ? '-right-4' : '-left-4'} w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary font-black text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {phase.number}
                        </div>
                        
                        {/* Content */}
                        <div className="space-y-6">
                          {/* Icon */}
                          <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Icon className="w-7 h-7 text-white" />
                          </div>
                          
                          {/* Title and Description */}
                          <h3 className="text-2xl font-black text-white leading-tight">
                            {phase.title}
                          </h3>
                          <p className="text-white/90 leading-relaxed text-base">
                            {phase.description}
                          </p>
                          
                          {/* Benefit Badge */}
                          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/20 border border-white/30 backdrop-blur-sm">
                            <Sparkles className="w-4 h-4 text-white" />
                            <span className="font-semibold text-white text-sm">
                              {phase.benefit}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <PremiumFinalCTA category="consultation" />

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

      <AboutSection />
      
      {/* All Services Carousel - Complete service discovery */}
      <AllServicesCarousel />
      <MailerLiteContactSectionAnimated />
      <Footer />
    </div>
  );
};

export default AIIntegration;