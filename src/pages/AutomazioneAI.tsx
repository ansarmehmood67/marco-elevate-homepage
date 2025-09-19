import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StandardIntroSection from "@/components/shared/StandardIntroSection";
import StandardCustomersSection from "@/components/shared/StandardCustomersSection";
import StandardQuoteSection from "@/components/shared/StandardQuoteSection";

import MailerLiteContactSectionAnimated from "@/components/MailerLiteContactSectionAnimated";
import CrossSellRecommendations from "@/components/CrossSellRecommendations";
import AllServicesCarousel from "@/components/shared/AllServicesCarousel";
import SEOHead from "@/components/SEO/SEOHead";
import { seoPages } from "@/utils/seoData";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Zap, 
  Users, 
  Target, 
  BarChart, 
  TrendingUp, 
  CheckCircle,
  Bot,
  Mail,
  FileText,
  Settings,
  Briefcase,
  ShoppingCart,
  Building,
  Sparkles
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const AutomazioneAI = () => {
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
      <SEOHead data={seoPages.automazioneAI} />
      <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section ref={ref} className="pt-24 sm:pt-24 lg:pt-24 pb-16 px-0 bg-black relative overflow-hidden min-h-screen">
        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative min-h-[85vh] lg:min-h-[90vh] rounded-3xl overflow-hidden bg-black/60 backdrop-blur-sm border border-gray-800/30 shadow-2xl">
            {/* Background Video */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="https://res.cloudinary.com/dsergeqc9/video/upload/v1758129869/ai_automation_page_g9ppcq.mp4" type="video/mp4" />
            </video>
            
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/70" />
            
            {/* Bottom gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 to-transparent" />
            
            {/* Mobile-friendly flex layout */}
            <div className="relative lg:absolute lg:inset-0 flex flex-col justify-center lg:justify-center p-4 sm:p-6 lg:p-12 pt-6 sm:pt-10 lg:pt-24 pb-10 sm:pb-12 lg:pb-12 z-20">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 sm:gap-6 lg:gap-8">
                {/* Content */}
                <div className="flex-1 max-w-5xl text-center lg:text-left">
                  <div className={`mb-6 flex items-center space-x-2 ${
                    visibleItems[0] 
                      ? "animate-swipe-in-left" 
                      : "opacity-0"
                  }`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm">
                      <Zap className="w-4 h-4 text-white" />
                      <span className="text-white font-medium text-sm">Automazione AI</span>
                    </div>
                  </div>
                  
                  <h1 className={`text-hero-title font-black leading-constrained-tight mb-6 lg:mb-8 text-white drop-shadow-2xl ${
                    visibleItems[1] 
                      ? "animate-swipe-in-left" 
                      : "opacity-0"
                  }`}>
                    Automazioni AI per lavorare meglio, non di più
                  </h1>
                  
                  <p className={`text-hero-body text-gray-100 mb-6 lg:mb-8 font-light leading-constrained-relaxed ${
                    visibleItems[2] 
                      ? "animate-fade-in-bottom" 
                      : "opacity-0"
                  }`}>
                    Riduci i tempi. Taglia i costi. Elimina gli errori.<br/>
                    Ti aiutiamo ad automatizzare processi aziendali ripetitivi con l'intelligenza artificiale, rendendo il tuo lavoro più fluido, veloce e intelligente.
                  </p>
                  
                  <div className={`flex flex-col sm:flex-row gap-4 ${
                    visibleItems[3] 
                      ? "animate-scale-in" 
                      : "opacity-0"
                  }`}>
                     <Button 
                       onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                       className="group font-semibold px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 text-base sm:text-lg lg:text-xl rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white text-black hover:bg-gray-100 border-2 border-white/30">
                       <span className="flex items-center space-x-2">
                         <span>Scopri le Automazioni AI</span>
                         <ArrowRight className="w-4 lg:w-5 h-4 lg:h-5 group-hover:translate-x-1 transition-transform" />
                       </span>
                     </Button>
                  </div>
                </div>

                {/* YouTube Video Player - Responsive positioning */}
                <div className={`w-full sm:w-80 lg:w-80 h-48 rounded-xl overflow-hidden shadow-2xl border-2 border-white/20 backdrop-blur-sm lg:flex-shrink-0 transform-gpu will-change-[transform,opacity] ${
                  visibleItems[4] 
                    ? "animate-swipe-in-right" 
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
        badge="AUTOMAZIONE INTELLIGENTE"
        title="Efficienza massima con AI"
        highlightedText="integrata"
        description="Ogni giorno le aziende perdono tempo prezioso in attività manuali: invii di email, raccolta dati, risposte clienti, inserimenti in CRM… Noi automatizziamo tutto questo con soluzioni su misura basate su AI e automazioni low-code. Nessun team tecnico interno, nessuna complessità."
        ctaText="Automatizza ora"
        onCtaClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      />
      <StandardCustomersSection />
      <StandardQuoteSection
        mainQuote="L'AI non sostituisce"
        highlightedQuote="potenzia il team"
        description="Sistemi intelligenti che liberano il potenziale umano eliminando le attività ripetitive"
        ctaText="Scopri come funziona"
        onCtaClick={() => document.getElementById('come-funziona')?.scrollIntoView({ behavior: 'smooth' })}
      />

      {/* Features Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-8 py-4 rounded-full text-sm font-bold tracking-[0.3em] uppercase mb-8 transition-all duration-300 hover:scale-105 shadow-lg bg-primary/10 text-primary border border-primary/20">
              AUTOMAZIONI AI
            </div>
            <h2 className="text-5xl lg:text-7xl font-black leading-[0.85] tracking-tight text-white mb-8">
              Cosa possiamo{" "}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                automatizzare per te?
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Soluzioni AI che trasformano processi ripetitivi in automazioni intelligenti
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Mail,
                title: "Communication Intelligence Engine",
                description: "Ecosistema AI che orchestra comunicazioni omnicanale con personalizzazione avanzata, timing predittivo e engagement optimization per massimizzare la conversione di ogni touchpoint.",
                features: ["Behavioral communication triggers", "AI-powered content personalization", "Predictive send-time optimization", "Multi-channel orchestration"]
              },
              {
                icon: Users,
                title: "Customer Lifecycle Automation",
                description: "Piattaforma intelligente che automatizza l'intero customer journey da prospect a advocate, con scoring predittivo e pipeline intelligence per crescita revenue sostenibile.",
                features: ["360° customer intelligence", "Predictive churn prevention", "Automated lifecycle marketing", "Revenue attribution modeling"]
              },
              {
                icon: FileText,
                title: "Executive Intelligence Dashboard",
                description: "Sistema di business intelligence che trasforma big data in strategic insights azionabili, generando report executive e raccomandazioni strategiche in tempo reale.",
                features: ["Real-time strategic insights", "Predictive business modeling", "Automated competitive analysis", "Executive decision support AI"]
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
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="https://res.cloudinary.com/dsergeqc9/video/upload/v1758129862/ai_automations_ckfayl.mp4" type="video/mp4" />
        </video>
        
        {/* Enhanced Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#2E8BC0]/30 via-transparent to-[#55ACEE]/20 z-10" />
        
        <div className="max-w-6xl mx-auto px-6 text-center relative z-20">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-2xl">
              Automatizza il futuro con{" "}
              <span className="text-[#87CEEB]">intelligenza artificiale</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed drop-shadow-xl font-medium">
              Trasforma i tuoi processi aziendali con sistemi AI che imparano, 
              si adattano e ottimizzano automaticamente ogni operazione.
            </p>
            
            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-[#55ACEE] to-[#87CEEB] hover:from-[#2E8BC0] hover:to-[#55ACEE] text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Inizia l'automazione
            </Button>
          </div>
        </div>
      </section>


      {/* Use Cases Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Automazioni già realizzate per i{" "}
              <span className="text-[#87CEEB]">nostri clienti</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Esempi reali di come abbiamo trasformato i processi di diverse aziende
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Briefcase,
                title: "Studio legale",
                description: "Automatizzazione dei follow-up email per appuntamenti e aggiornamenti cause.",
                features: ["Email automatiche", "Tracking appuntamenti", "Report casi"]
              },
              {
                icon: ShoppingCart,
                title: "E-commerce",
                description: "Risposte automatiche su WhatsApp, tracking ordini, gestione ticket.",
                features: ["Bot WhatsApp", "Stato ordini", "Supporto clienti"]
              },
              {
                icon: Building,
                title: "Agenzia di consulenza",
                description: "Generazione automatica di report settimanali e aggiornamento CRM.",
                features: ["Report automatici", "CRM aggiornato", "Dashboard insight"]
              }
            ].map((useCase, index) => {
              const IconComponent = useCase.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group border border-[#2E8BC0]/20 hover:border-[#87CEEB]/30">
                  <div className="space-y-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#2E8BC0]/20 to-[#87CEEB]/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-[#87CEEB]" />
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-white">{useCase.title}</h3>
                      <p className="text-slate-300 leading-relaxed">{useCase.description}</p>
                      <div className="space-y-2">
                        {useCase.features.map((feature, i) => (
                          <div key={i} className="flex items-center text-sm text-slate-400">
                            <div className="w-2 h-2 bg-[#87CEEB] rounded-full mr-3"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <blockquote className="space-y-8">
            <div className="relative">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                "Ogni attività ripetitiva che svolgi a mano può diventare un flusso automatizzato.{" "}
                <span className="bg-gradient-to-r from-[#87CEEB] to-[#2E8BC0] bg-clip-text text-transparent">
                  L'AI non sostituisce le persone, ma restituisce loro tempo.
                </span>"
              </h3>
              
              {/* Modern Quote Marks */}
              <div className="absolute -top-6 -left-6 w-8 h-8 bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] rounded-lg flex items-center justify-center opacity-20">
                <span className="text-white text-lg font-bold">"</span>
              </div>
            </div>
          </blockquote>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              Vuoi scoprire cosa puoi{" "}
              <span className="bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] bg-clip-text text-transparent">
                automatizzare oggi?
              </span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Raccontaci come lavori e ti mostreremo una demo gratuita del tuo flusso automatizzato.
            </p>
            <div className="pt-4">
              <div className="relative inline-block group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] rounded-full blur opacity-60 group-hover:opacity-100 transition-all duration-500"></div>
                <Button 
                  size="xl" 
                  className="relative bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] hover:from-[#87CEEB] hover:to-[#2E8BC0] text-white font-bold px-12 py-6 rounded-full text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <span className="flex items-center gap-3">
                    Prenota una call
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Domande frequenti sulle{" "}
              <span className="text-[#2E8BC0]">automazioni AI</span>
            </h2>
            <p className="text-xl text-slate-600">
              Risposte alle domande più comuni sui nostri servizi di automazione
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg border border-slate-200 px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-[#2E8BC0]">
                Serve avere un team tecnico per usare queste soluzioni?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                No, assolutamente. Le nostre automazioni sono progettate per essere utilizzate da chiunque, senza competenze tecniche. Ci occupiamo noi di tutta la parte tecnica e ti forniamo interfacce semplici e intuitive per gestire i tuoi flussi automatizzati.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg border border-slate-200 px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-[#2E8BC0]">
                Quanto tempo serve per implementare un'automazione?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                Dipende dalla complessità del processo, ma generalmente riusciamo a implementare automazioni semplici in 3-5 giorni lavorativi, mentre quelle più complesse possono richiedere 1-2 settimane. Ti forniamo sempre una timeline precisa dopo l'analisi iniziale.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg border border-slate-200 px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-[#2E8BC0]">
                Posso collegare più strumenti (es. WhatsApp + Google Sheets + Email)?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                Assolutamente sì! Una delle nostre specialità è creare automazioni che collegano diversi strumenti e piattaforme. Possiamo integrare praticamente qualsiasi servizio che abbia delle API disponibili, creando flussi complessi che funzionano perfettamente insieme.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg border border-slate-200 px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-[#2E8BC0]">
                Posso modificare il flusso dopo la consegna?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                Certamente! Ti forniamo sempre la possibilità di modificare e ottimizzare i tuoi flussi automatizzati. Offriamo supporto continuo e, quando possibile, creiamo interfacce che ti permettono di fare modifiche semplici in autonomia.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-lg border border-slate-200 px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-[#2E8BC0]">
                Offrite supporto e aggiornamenti nel tempo?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                Sì, offriamo diversi piani di supporto che includono monitoraggio, manutenzione, aggiornamenti e ottimizzazioni continue. Le automazioni devono evolvere con il tuo business, e noi ci assicuriamo che funzionino sempre al meglio.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Cross-Sell Recommendations - Mid-page focused cross-sell */}
      <CrossSellRecommendations
        currentService="automazione-ai"
        layout="horizontal"
        title="Completa la tua trasformazione digitale"
        subtitle="Le aziende che combinano automazione AI con questi servizi vedono un ROI del 340% superiore"
      />

      
      <div id="contact"><MailerLiteContactSectionAnimated /></div>
      
      {/* All Services Carousel - Complete service discovery */}
      <AllServicesCarousel />
      <Footer />
    </div>
    </>
  );
};

export default AutomazioneAI;