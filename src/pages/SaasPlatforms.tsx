import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StandardIntroSection from "@/components/shared/StandardIntroSection";
import StandardCustomersSection from "@/components/shared/StandardCustomersSection";
import StandardQuoteSection from "@/components/shared/StandardQuoteSection";

import MailerLiteContactSectionAnimated from "@/components/MailerLiteContactSectionAnimated";
import CrossSellRecommendations from "@/components/CrossSellRecommendations";
import AllServicesCarousel from "@/components/shared/AllServicesCarousel";
import PremiumFinalCTA from "@/components/shared/PremiumFinalCTA";
import SEOHead from "@/components/SEO/SEOHead";
import { seoPages } from "@/utils/seoData";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, TrendingUp, Cloud, CreditCard, UserCheck, BarChart, Target, CheckCircle, Shield, Settings, Database, Smartphone, Headphones, Zap } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const SaasPlatforms = () => {
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
      <SEOHead data={seoPages.saasPlatforms} />
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
              <source src="https://res.cloudinary.com/dsergeqc9/video/upload/v1758129806/saas_tools_page_uoeqrf.mp4" type="video/mp4" />
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
                    <TrendingUp className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
                    <span className="text-white font-medium text-xs lg:text-sm">SaaS Platforms</span>
                  </div>
                </div>
                
                <h1 className={`text-hero-title font-black leading-constrained-tight mb-6 lg:mb-8 text-white drop-shadow-2xl ${
                  visibleItems[1] ? "animate-swipe-in-left" : "opacity-0"
                }`}>
                  Costruiamo Prodotti SaaS che Scalano Automaticamente
                </h1>
                
                <p className={`text-hero-body text-gray-100 mb-6 lg:mb-8 font-light leading-constrained-relaxed ${
                  visibleItems[2] ? "animate-fade-in-bottom" : "opacity-0"
                }`}>
                  Trasformiamo la tua idea di business in una potente piattaforma cloud. <span className="font-semibold text-blue-200">Dall'MVP al lancio globale</span> — gestiamo tutto noi.
                </p>
                
                <div className={`flex flex-col gap-4 justify-center lg:justify-start ${
                  visibleItems[3] ? "animate-scale-in" : "opacity-0"
                }`}>
                   <Button 
                     onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                     className="group font-semibold px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 text-base sm:text-lg lg:text-xl rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white text-black hover:bg-gray-100 border-2 border-white/30">
                     <span className="flex items-center space-x-2">
                       <span>Costruiamo il tuo SaaS</span>
                       <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
                     </span>
                   </Button>
                  <Button className="group font-semibold px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white/10 text-white hover:bg-white/20 border-2 border-white/30 backdrop-blur-sm lg:hidden">
                    <span className="flex items-center space-x-2">
                      <span>Parla con un esperto</span>
                      <TrendingUp className="w-4 h-4 group-hover:rotate-12 transition-transform" />
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
        badge="SVILUPPO SAAS"
        title="Piattaforme SaaS che scalano"
        highlightedText="automaticamente"
        description="Che tu sia una startup o un brand affermato, ti aiutiamo a trasformare la tua visione in prodotto. Costruisci strumenti in abbonamento, portali clienti, app di reporting o servizi potenziati dall'AI — tutto sotto il tuo brand."
        ctaText="Inizia a costruire"
        onCtaClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      />
      <StandardCustomersSection />
      <StandardQuoteSection
        mainQuote="Ogni SaaS che costruiamo è progettato per crescere"
        highlightedQuote="senza aumentare i tuoi costi fissi"
        description="Architettura intelligente incontra design elegante per una crescita sostenibile"
        ctaText="Scopri come"
        ctaHref="/contact"
      />

      {/* New SaaS Benefits Cards Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-8 py-4 rounded-full text-sm font-bold tracking-[0.3em] uppercase mb-8 transition-all duration-300 hover:scale-105 shadow-lg bg-primary/10 text-primary border border-primary/20">
              SAAS EXCELLENCE
            </div>
            <h2 className="text-5xl lg:text-7xl font-black leading-[0.85] tracking-tight text-white mb-8">
              Piattaforme che{" "}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                evolvono con te
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Architettura enterprise che scala senza limiti, powered by AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Cloud,
                title: "Architettura Cloud Elastica",
                description: "Infrastruttura cloud-native che scala automaticamente da startup a enterprise, gestendo milioni di utenti senza compromessi su performance o sicurezza.",
                features: ["Auto-scaling intelligente", "99.99% uptime garantito", "Sicurezza enterprise-grade", "Global CDN optimization"]
              },
              {
                icon: Sparkles,
                title: "AI Native by Design",
                description: "Ogni funzionalità è progettata per l'integrazione AI, dalla personalizzazione utente all'automazione dei processi, rendendo la tua piattaforma intelligente dal primo giorno.",
                features: ["Machine learning integrato", "Personalizzazione dinamica", "Automazione workflow", "Predictive analytics nativo"]
              },
              {
                icon: Zap,
                title: "Time-to-Market Accelerato",
                description: "Metodologie agili e stack tecnologici moderni che riducono il time-to-market del 70%, permettendoti di validare l'idea e iterare rapidamente based sui feedback reali.",
                features: ["MVP in 8-12 settimane", "Deploy continuo automatico", "A/B testing integrato", "Feedback loop real-time"]
              }
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="group relative rounded-3xl p-10 min-h-[580px] flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] overflow-hidden shadow-2xl">
                  {/* Primary gradient background */}
                  <div className="absolute inset-0 bg-primary"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10"></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-3xl lg:text-4xl font-black mb-4 leading-tight text-white tracking-tight">{feature.title}</h3>
                    <p className="text-lg text-white/90 mb-8 leading-relaxed font-normal">{feature.description}</p>
                    
                    <div className="space-y-4 mb-6 flex-1">
                      {feature.features.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-white text-base">{item}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Benefit Strip */}
                    <div className="mt-auto">
                      <span className="text-white text-sm font-medium">
                        {index === 0 && "Scaling senza limiti • Performance garantita • Sicurezza enterprise"}
                        {index === 1 && "AI integrato • Automazione native • Intelligence predittiva"}
                        {index === 2 && "MVP veloce • Deploy continuo • Iterazione rapida"}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                From Idea to Launch
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                We help you plan, validate, and build your MVP fast — without cutting corners. UX-first, ROI-focused.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#2E8BC0]/10 to-[#87CEEB]/10 rounded-2xl p-8 border border-[#2E8BC0]/20">
              <div className="w-16 h-16 bg-[#2E8BC0] rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">MVP Development</h4>
              <p className="text-slate-600">Fast, validated launches with measurable market fit</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="bg-gradient-to-br from-[#87CEEB]/10 to-[#2E8BC0]/10 rounded-2xl p-8 border border-[#87CEEB]/20">
              <div className="w-16 h-16 bg-[#87CEEB] rounded-full flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">AI-Ready by Default</h4>
              <p className="text-slate-600">Future-proof platforms with smart automation capabilities</p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                AI-Ready by Default
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Every SaaS we build can be integrated with smart assistants, automation workflows, or machine learning features — future-proof from day one.
              </p>
            </div>
          </div>
        </div>
      </section>


      <PremiumFinalCTA category="consultation" />

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Domande frequenti sulle{" "}
              <span className="text-[#2E8BC0]">piattaforme SaaS</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] rounded-full mx-auto"></div>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border border-slate-200 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-[#2E8BC0]">
                Quanto tempo ci vuole per sviluppare una piattaforma SaaS?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed">
                I tempi dipendono dalla complessità del progetto. Un MVP semplice può essere sviluppato in 8-12 settimane, mentre piattaforme più complesse richiedono 4-6 mesi. Lavoriamo con metodologie agili per consegnare valore incrementale durante tutto il processo.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-slate-200 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-[#2E8BC0]">
                Quali tecnologie utilizzate?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed">
                Utilizziamo stack moderni e performanti: React/Vue.js per il frontend, Node.js/Python per il backend, PostgreSQL/MongoDB per i database, AWS/Vercel per l'hosting. La scelta dipende dalle specifiche esigenze del progetto.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-slate-200 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-[#2E8BC0]">
                È possibile integrare sistemi di pagamento e abbonamenti?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed">
                Assolutamente sì. Integriamo sistemi di pagamento come Stripe, PayPal e altri, gestendo abbonamenti ricorrenti, fatturazione automatica, prove gratuite e piani tariffari personalizzati.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-slate-200 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-[#2E8BC0]">
                Offrite supporto continuo dopo il lancio?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed">
                Sì, offriamo piani di supporto e manutenzione continui che includono aggiornamenti di sicurezza, ottimizzazioni performance, correzione bug e sviluppo di nuove funzionalità basate sul feedback degli utenti.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-slate-200 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-[#2E8BC0]">
                La piattaforma sarà scalabile in futuro?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed">
                Progettiamo tutte le nostre piattaforme con l'architettura cloud-native e microservizi per garantire scalabilità automatica. Questo significa che la tua piattaforma può gestire migliaia di utenti senza problemi di performance.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border border-slate-200 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-[#2E8BC0]">
                Potete sviluppare anche una versione mobile o un'app integrata?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed">
                Certamente. Sviluppiamo app mobile native (iOS/Android) o progressive web app (PWA) che si integrano perfettamente con la piattaforma web, condividendo lo stesso backend e database.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Cross-Sell Recommendations */}
      <CrossSellRecommendations
        currentService="saas-platforms"
        layout="horizontal"  
        title="Amplifica il successo del tuo SaaS"
        subtitle="Imprenditori SaaS di successo combinano sviluppo con questi servizi per accelerare la crescita"
      />

      

      {/* All Services Carousel */}
      <AllServicesCarousel />

      <MailerLiteContactSectionAnimated />
      <Footer />
    </div>
    </>
  );
};

export default SaasPlatforms;