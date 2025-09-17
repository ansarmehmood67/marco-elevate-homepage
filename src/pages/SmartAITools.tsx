import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StandardIntroSection from "@/components/shared/StandardIntroSection";
import StandardCustomersSection from "@/components/shared/StandardCustomersSection";
import StandardQuoteSection from "@/components/shared/StandardQuoteSection";
import AboutSection from "@/components/AboutSection";
import MailerLiteContactSectionAnimated from "@/components/MailerLiteContactSectionAnimated";
import CrossSellRecommendations from "@/components/CrossSellRecommendations";
import AllServicesCarousel from "@/components/shared/AllServicesCarousel";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ArrowRight, Sparkles, Users, Settings, BarChart, Zap, Database, Shield, FileText, TrendingUp, Bot, MessageSquare, CheckCircle, Target, Layers, LinkIcon } from "lucide-react";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const SmartAITools = () => {
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
      <section className="pt-24 sm:pt-24 lg:pt-24 pb-16 px-0 bg-black relative overflow-hidden min-h-screen">
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
              <source src="https://res.cloudinary.com/dsergeqc9/video/upload/v1758129794/ai_tools_page_t0drw4.mp4" type="video/mp4" />
            </video>
            
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/70" />
            
            {/* Bottom gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 to-transparent z-10" />
            
            {/* Mobile-friendly flex layout */}
            <div ref={ref} className="absolute inset-0 flex flex-col justify-center lg:justify-center p-4 sm:p-6 lg:p-12 z-20">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-8">
              {/* Content Section */}
              <div className="flex-1 max-w-5xl text-center lg:text-left">
                <div className={`mb-6 flex items-center space-x-2 justify-center lg:justify-start ${
                  visibleItems[0] ? "animate-swipe-in-left" : "opacity-0"
                }`}>
                  <div className="inline-flex items-center gap-2 px-3 lg:px-4 py-2 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm">
                    <Settings className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
                    <span className="text-white font-medium text-xs lg:text-sm">Smart AI Tools</span>
                  </div>
                </div>
                
                <h1 className={`text-hero-title font-black leading-constrained-tight mb-6 lg:mb-8 text-white drop-shadow-2xl ${
                  visibleItems[1] ? "animate-swipe-in-left" : "opacity-0"
                }`}>
                  Strumenti AI Personalizzati che Lavorano come un Membro del Team
                </h1>
                
                <p className={`text-hero-body text-gray-100 mb-6 lg:mb-8 font-light leading-constrained-relaxed ${
                  visibleItems[2] ? "animate-fade-in-bottom" : "opacity-0"
                }`}>
                  Costruiamo dashboard interne, pannelli di automazione e <span className="font-semibold text-blue-200">assistenti intelligenti</span> personalizzati per il tuo flusso di lavoro quotidiano.
                </p>
                
                <div className={`flex flex-col gap-4 justify-center lg:justify-start ${
                  visibleItems[3] ? "animate-scale-in" : "opacity-0"
                }`}>
                   <Button 
                     onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                     className="group font-semibold px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 text-base sm:text-lg lg:text-xl rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white text-black hover:bg-gray-100 border-2 border-white/30">
                     <span className="flex items-center space-x-2">
                       <span>Richiedi una Demo</span>
                       <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
                     </span>
                   </Button>
                  <Button className="group font-semibold px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white/10 text-white hover:bg-white/20 border-2 border-white/30 backdrop-blur-sm lg:hidden">
                    <span className="flex items-center space-x-2">
                      <span>Parla con i nostri ingegneri</span>
                      <Settings className="w-4 h-4 group-hover:rotate-12 transition-transform" />
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

      <StandardIntroSection
        badge="AUTOMAZIONE INTERNA"
        title="Strumenti AI che lavorano dietro le quinte per il tuo"
        highlightedText="team"
        description="Hai bisogno di un tracker lead interno? Un generatore di report automatico? Invece di strumenti generici, costruiamo mini-piattaforme intelligenti che fanno esattamente ciò di cui il tuo team ha bisogno — senza fronzoli, senza canoni mensili."
        ctaText="Costruisci i tuoi strumenti"
        ctaHref="/contact"
      />
      <StandardCustomersSection />
      <StandardQuoteSection
        mainQuote="Ogni strumento che costruiamo sostituisce ore di lavoro umano a settimana"
        highlightedQuote="e non si ammala mai"
        description="Automazione intelligente che pensa come il tuo miglior dipendente"
        ctaText="Scopri di più"
        onCtaClick={() => document.getElementById('esempi-smart-ai')?.scrollIntoView({ behavior: 'smooth' })}
      />

      {/* Use Case Section */}
      <section id="esempi-smart-ai" className="py-20 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-8 py-4 rounded-full text-sm font-bold tracking-[0.3em] uppercase mb-8 transition-all duration-300 hover:scale-105 shadow-lg bg-primary/10 text-primary border border-primary/20">
              SMART AI SOLUTIONS
            </div>
            <h2 className="text-5xl lg:text-7xl font-black leading-[0.85] tracking-tight text-white mb-8">
              Esempi di soluzioni{" "}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Smart AI
              </span>{" "}
              che possiamo costruire
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Soluzioni personalizzate per ogni esigenza aziendale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: "Content Intelligence Engine",
                description: "Piattaforma AI avanzata che genera contenuti premium multi-format personalizzati per ogni fase del customer journey, ottimizzando engagement e conversion rate attraverso data science applicata.",
                points: [
                  "AI-powered content strategy engine",
                  "Multi-format generation automation", 
                  "Brand voice consistency AI",
                  "Performance-optimized content creation",
                  "Dynamic content personalization"
                ]
              },
              {
                icon: TrendingUp,
                title: "Predictive Business Intelligence",
                description: "Dashboard intelligente che trasforma big data in strategic insights azionabili con machine learning predittivo, fornendo raccomandazioni automatiche per decision-making ottimale.",
                points: [
                  "Revenue forecasting & modeling",
                  "Customer behavior prediction",
                  "Automated strategic insights",
                  "Real-time decision intelligence",
                  "Competitive analysis automation"
                ]
              },
              {
                icon: Bot,
                title: "Process Automation Hub",
                description: "Ecosistema di automazione intelligente che orchestra workflow aziendali end-to-end con AI adattiva, eliminando colli di bottiglia e ottimizzando efficienza operativa.",
                points: [
                  "Intelligent workflow orchestration",
                  "Adaptive process optimization",
                  "Cross-system integration AI",
                  "Self-learning automation engine",
                  "Exception handling intelligence"
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
                     <div className="relative mb-6">
                       <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                         <IconComponent className="w-8 h-8 text-white" />
                       </div>
                       <div className="absolute -top-1 -right-1 w-6 h-6 bg-white/30 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                         <span className="text-white text-xs font-bold">{index + 1}</span>
                       </div>
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
          <source src="https://res.cloudinary.com/dsergeqc9/video/upload/v1758134705/smart_ai_tools_2_jc06rt.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#2E8BC0]/30 via-transparent to-[#55ACEE]/20 z-10" />
        
        <div className="max-w-6xl mx-auto px-6 text-center relative z-20">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-2xl">
              Pronto ad automatizzare{" "}
              <span className="text-[#87CEEB]">il tuo flusso di lavoro quotidiano?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed font-medium drop-shadow-xl">
              Costruiamo strumenti che lavorano in modo più intelligente, non più faticoso
            </p>
            
            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-[#55ACEE] to-[#87CEEB] hover:from-[#2E8BC0] hover:to-[#55ACEE] text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Inizia ora
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-8 py-4 rounded-full text-sm font-bold tracking-[0.3em] uppercase mb-8 transition-all duration-300 hover:scale-105 shadow-lg bg-primary/10 text-primary border border-primary/20">
              STRUMENTI PERSONALIZZATI
            </div>
            <h2 className="text-5xl lg:text-7xl font-black leading-[0.85] tracking-tight text-slate-900 mb-8">
              Perché scegliere strumenti{" "}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                AI su misura?
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Più efficienza, meno margine d'errore",
                description: "L'AI lavora in modo costante e preciso, anche su task ripetitivi."
              },
              {
                icon: Layers,
                title: "Soluzioni adattabili e scalabili",
                description: "Gli strumenti si evolvono con il tuo business e si integrano facilmente in ambienti esistenti."
              },
              {
                icon: Zap,
                title: "Zero codice, massima potenza",
                description: "Usiamo tecnologie no-code o low-code quando possibile, così puoi gestirli anche in autonomia."
              },
              {
                icon: LinkIcon,
                title: "Integrazione con i tuoi sistemi",
                description: "CRM, Google Sheets, email, API… colleghiamo tutto."
              }
            ].map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-[#2E8BC0]/5 to-[#87CEEB]/5 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group border border-[#2E8BC0]/10">
                  <div className="space-y-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#2E8BC0]/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-[#87CEEB]/5 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Hai un'idea di{" "}
                <span className="text-[#87CEEB]">strumento AI?</span>
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                Parlaci del tuo caso d'uso e costruiremo la soluzione in pochi giorni.
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <Button 
                size="xl" 
                className="bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] hover:from-[#87CEEB] hover:to-[#2E8BC0] text-white font-bold px-12 py-6 rounded-full text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center gap-3">
                  Inizia il tuo progetto AI
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-slate-200/50">
            <blockquote className="space-y-6">
              <div className="text-6xl text-[#2E8BC0]/20 font-serif">"</div>
              <p className="text-2xl md:text-3xl font-medium text-slate-700 leading-relaxed">
                Non serve essere OpenAI per creare qualcosa di utile. A volte bastano le giuste API, un flusso chiaro e un problema reale da risolvere.{" "}
                <span className="text-[#2E8BC0] font-semibold">Il resto… lo facciamo noi.</span>
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
              Domande frequenti su{" "}
              <span className="text-[#2E8BC0]">strumenti AI personalizzati</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-gradient-to-br from-[#2E8BC0]/5 to-[#87CEEB]/5 rounded-xl border border-[#2E8BC0]/20 px-6">
              <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#2E8BC0] transition-colors">
                Potete davvero costruire da zero uno strumento per la mia azienda?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                Assolutamente sì. Analizziamo i tuoi processi attuali, identifichiamo le aree di miglioramento e costruiamo strumenti personalizzati che si integrano perfettamente nel tuo workflow esistente.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-gradient-to-br from-[#2E8BC0]/5 to-[#87CEEB]/5 rounded-xl border border-[#2E8BC0]/20 px-6">
              <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#2E8BC0] transition-colors">
                Quanto tempo serve per sviluppare un tool AI?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                Dipende dalla complessità, ma generalmente sviluppiamo MVP funzionanti in 1-2 settimane. Strumenti più complessi possono richiedere 3-4 settimane. Ti forniamo sempre una timeline precisa dopo l'analisi iniziale.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-gradient-to-br from-[#2E8BC0]/5 to-[#87CEEB]/5 rounded-xl border border-[#2E8BC0]/20 px-6">
              <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#2E8BC0] transition-colors">
                Gli strumenti sono facili da usare per chi non è tecnico?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                Progettiamo sempre interfacce intuitive e user-friendly. Includiamo training per il tuo team e documentazione dettagliata. L'obiettivo è che chiunque possa utilizzare gli strumenti senza competenze tecniche.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-gradient-to-br from-[#2E8BC0]/5 to-[#87CEEB]/5 rounded-xl border border-[#2E8BC0]/20 px-6">
              <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#2E8BC0] transition-colors">
                Posso collegare l'AI a dati che ho già (es. fogli, CRM)?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                Certamente. Integriamo con Google Sheets, Excel, CRM come HubSpot o Salesforce, database esistenti, API personalizzate e molte altre fonti dati. L'integrazione è una parte fondamentale del nostro approccio.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-gradient-to-br from-[#2E8BC0]/5 to-[#87CEEB]/5 rounded-xl border border-[#2E8BC0]/20 px-6">
              <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#2E8BC0] transition-colors">
                È possibile creare strumenti che generano testi, immagini o report?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                Sì, possiamo integrare le migliori AI generative (GPT, Claude, DALL-E, etc.) nei tuoi strumenti personalizzati. Creiamo interfacce su misura per generazione contenuti, report automatici, analisi predittive e molto altro.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <AboutSection />
      
      {/* Final CTA Section */}
      <section className="py-20 bg-white text-slate-900">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to build your first Smart AI tool?
          </h2>
          <p className="text-xl mb-10 leading-relaxed text-slate-600">
            Let's create something that makes your team more efficient and your business smarter.
          </p>
          <Button 
            size="xl" 
            className="bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] hover:from-[#87CEEB] hover:to-[#2E8BC0] text-white font-bold px-12 py-6 rounded-full text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <span className="flex items-center gap-3">
              Iniziamo
              <ArrowRight className="w-5 h-5" />
            </span>
          </Button>
        </div>
      </section>

      {/* Cross-Sell Recommendations - Mid-page focused cross-sell */}
      <CrossSellRecommendations
        currentService="smart-ai-tools"
        layout="horizontal"
        title="Espandi il tuo arsenale di strumenti intelligenti"
        subtitle="Gli strumenti AI personalizzati sono più efficaci quando integrati con questi servizi"
      />

      {/* All Services Carousel - Complete service discovery */}
      <AllServicesCarousel />
      <MailerLiteContactSectionAnimated />
      <Footer />
    </div>
  );
};

export default SmartAITools;