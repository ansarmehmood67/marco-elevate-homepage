import React from 'react';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import StandardIntroSection from '@/components/shared/StandardIntroSection';
import StandardCustomersSection from '@/components/shared/StandardCustomersSection';
import StandardQuoteSection from '@/components/shared/StandardQuoteSection';
import CrossSellRecommendations from '@/components/CrossSellRecommendations';
import AboutSection from '@/components/AboutSection';
import MailerLiteContactSection from '@/components/MailerLiteContactSection';
import PremiumServicesCarouselOptimized from '@/components/PremiumServicesCarouselOptimized';
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, BarChart, TrendingUp, Play } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// Premium Components
import LiveSocialProof from '@/components/premium/LiveSocialProof';
import ROICalculator from '@/components/premium/ROICalculator';
import EnhancedTestimonials from '@/components/premium/EnhancedTestimonials';

import PerformanceDashboard from '@/components/premium/PerformanceDashboard';

// Shared Components
import VideoServiceCard from '@/components/shared/VideoServiceCard';
import MarcoScarcityTimer from '@/components/shared/MarcoScarcityTimer';
import ConsistentHowItWorks from '@/components/shared/ConsistentHowItWorks';
import ConsistentHeading from '@/components/shared/ConsistentHeading';
import PremiumFinalCTA from '@/components/shared/PremiumFinalCTA';

const SalesServices = () => {

  const salesServices = [
    {
      title: "Direttore Vendite – Sessione Strategica",
      subtitle: "La leadership commerciale che guida il tuo team verso risultati concreti.",
      features: [
        "• In cosa consiste: 1 call strategica di 2 ore + 1 follow-up a 30 giorni per analizzare pipeline, KPI e costruire un piano operativo chiaro.",
        "• A chi è rivolto: Imprenditori e aziende senza un responsabile vendite interno o con team confusi/demotivati.",
        "• Cosa ottieni: Una fotografia reale della situazione commerciale e un piano pratico con attività e priorità.",
        "• Benefici immediati: Addio improvvisazione: vendite più guidate, pipeline sbloccata e team motivato."
      ],
      youtubeUrl: "https://www.youtube.com/embed/uPhcQHDoux0?si=TzGArSKPaTTz4hEe",
      shopifyUrl: "https://sryeje-1e.myshopify.com/products/audit-strategico-del-pitch-commerciale?variant=55843346219390",
      category: "basic" as const,
      price: "€1.600 IVA esclusa"
    },
    {
      title: "Audit Strategico del Pitch Commerciale – Versione Ridotta",
      subtitle: "La consulenza che rende più persuasivo il tuo team.",
      features: [
        "• In cosa consiste: Revisione delle chiamate, creazione script personalizzato e feedback sul pitch.",
        "• A chi è rivolto: Imprenditori, manager e aziende con team di vendita attivi o in crescita.",
        "• Cosa ottieni: Venditori più efficaci, sicuri e con messaggi coerenti.",
        "• Benefici immediati: Pitch che convertono di più e meno opportunità sprecate."
      ],
      youtubeUrl: "https://www.youtube.com/embed/uPhcQHDoux0?si=TzGArSKPaTTz4hEe",
      shopifyUrl: "https://sryeje-1e.myshopify.com/products/audit-strategico-del-pitch-commerciale?variant=55843346219390",
      category: "premium" as const,
      price: "€800 IVA esclusa"
    },
    {
      title: "Audit Strategico del Pitch Commerciale",
      subtitle: "Analisi approfondita per aumentare i tassi di chiusura",
      features: [
        "Analisi completa del pitch attuale",
        "Ottimizzazione del posizionamento commerciale",
        "Miglioramento degli asset di vendita",
        "Strategie per aumentare i tassi di chiusura"
      ],
      youtubeUrl: "https://www.youtube.com/embed/uPhcQHDoux0?si=TzGArSKPaTTz4hEe",
      shopifyUrl: "https://sryeje-1e.myshopify.com/products/audit-strategico-del-pitch-commerciale?variant=55843346219390",
      category: "popular" as const,
      price: "€2.700"
    }
  ];

  const howItWorksSteps = [
    {
      number: "01",
      title: "Discovery → Analisi di team, pipeline e risultati attuali",
      description: "In questa prima fase, con il supporto di un Direttore Vendite a noleggio, analizziamo a fondo la situazione reale: come lavora il team, quali risultati sta ottenendo, come funziona la pipeline e dove si creano blocchi e aree di opportunità. È il momento in cui emergono i punti critici e le aree da migliorare subito.",
      icon: Target
    },
    {
      number: "02",
      title: "Costruzione del Sistema → Disegno del processo commerciale ideale",
      description: "Una volta individuati i problemi, progettiamo insieme il processo di vendita ideale per il tuo business. Definiamo le fasi, le responsabilità e gli strumenti da usare (CRM, script, automazioni, follow-up) per rendere il sistema replicabile, scalabile e adatto alle tue risorse. Qui il metodo prende forma.",
      icon: Users
    },
    {
      number: "03",
      title: "Esecuzione con KPI → Piano pratico e numeri da monitorare subito",
      description: "L'ultimo step è operativo: ti consegniamo un piano di azione chiaro con attività concrete e priorità definite. Non solo: fissiamo anche i KPI da monitorare (conversioni, cicli di vendita, margini) così puoi misurare i progressi e mantenere il controllo. È la parte che trasforma la strategia in risultati tangibili.",
      icon: BarChart
    }
  ];

  const faqs = [
    {
      question: "Quali strumenti utilizzate per implementare il sistema?",
      answer: "Lavoriamo con i principali CRM come HubSpot, Salesforce, Pipedrive, e strumenti di automazione come Zapier, ActiveCampaign. Ci adattiamo al vostro stack tecnologico esistente."
    },
    {
      question: "Quanto tempo ci vuole per vedere i primi risultati?",
      answer: "Tipicamente 2-4 settimane per essere operativi con il nuovo sistema. I primi miglioramenti nelle metriche si vedono entro 30 giorni dall'implementazione."
    },
    {
      question: "Lavorate con il nostro team vendite esistente?",
      answer: "Assolutamente sì. Formiamo il vostro team sui nuovi processi e strumenti, garantendo una transizione fluida e l'adozione delle migliori pratiche."
    },
    {
      question: "Come strutturate i prezzi?",
      answer: "I nostri servizi hanno tariffe fisse per garantire trasparenza. Il prezzo varia in base alla complessità del progetto e alle dimensioni del team. Contattateci per un preventivo personalizzato."
    },
    {
      question: "Offrite supporto post-implementazione?",
      answer: "Sì, includiamo sempre un periodo di supporto per assicurarci che il sistema funzioni perfettamente. Offriamo anche piani di mantenimento per ottimizzazioni continue."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-2 px-0 transition-all duration-500 relative overflow-hidden bg-black">
        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative min-h-[85vh] rounded-3xl overflow-hidden transition-all duration-500 shadow-2xl bg-black border border-gray-800/30">
            {/* Video Background */}
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              style={{ zIndex: 1 }}
            >
              <source src="https://res.cloudinary.com/dufcnrcfe/video/upload/v1753296146/Untitled_design_14_s2pudj.mp4" type="video/mp4" />
            </video>
            
            {/* Video Overlay */}
            <div className="absolute inset-0 bg-black/70" style={{ zIndex: 2 }} />
            
            {/* Bottom gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 to-transparent" style={{ zIndex: 3 }} />
            
            {/* Enhanced Content */}
            <div className="relative lg:absolute lg:inset-0 flex flex-col justify-center lg:justify-end p-4 sm:p-6 lg:p-12 pt-6 sm:pt-10 lg:pt-24 pb-10 sm:pb-12 lg:pb-12 z-20">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 sm:gap-6 lg:gap-8">
                {/* Left copy */}
                <div className="flex-1 max-w-3xl">
                  <div className="mb-4">
                    <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary/20 to-primary-glow/20 text-primary font-semibold text-sm rounded-full border border-primary/30 backdrop-blur-sm">
                      Consulenza Vendite
                    </span>
                  </div>
                  
                  <h1 className="text-4xl lg:text-6xl font-black leading-tight mb-8 text-white drop-shadow-2xl bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent text-center lg:text-left">
                    Direttore Vendite a Noleggio: la soluzione accessibile per far crescere le tue vendite
                  </h1>
                  
                  <p className="text-xl lg:text-2xl text-gray-100 mb-6 font-light leading-relaxed max-w-2xl text-center lg:text-left">
                    Perché non tutte le aziende possono <span className="font-semibold text-blue-200">permettersi un direttore commerciale</span>, ma tutte hanno bisogno di vendere di più.
                  </p>
                  
                  <p className="text-lg text-gray-300 mb-12 leading-relaxed max-w-2xl text-center lg:text-left">
                    Con una sessione con un Direttore Vendite a noleggio ottieni l'esperienza di un direttore vendite, senza i costi fissi. Un alleato strategico che porta metodo, chiarezza e risultati immediati al tuo team.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Button className="group font-bold px-10 py-5 text-xl rounded-2xl shadow-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-3xl bg-white text-black hover:bg-gray-100 border-2 border-white/30 backdrop-blur-sm relative overflow-hidden">
                      <span className="relative z-10 flex items-center space-x-2">
                        <span>Scopri di più</span>
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </div>
                </div>

                {/* Right video */}
                <div className="w-full sm:w-80 lg:w-80 lg:flex-shrink-0">
                  <div className="relative">
                    {/* Video box */}
                    <div className="w-full h-44 sm:h-48 rounded-xl overflow-hidden shadow-2xl border-2 border-white/20 backdrop-blur-sm lg:hover:shadow-[0_0_40px_rgba(56,189,248,0.3)] transition-all duration-700 lg:hover:scale-105">
                      <iframe
                        src="https://www.youtube.com/embed/ZocHP6N9Aig"
                        title="Demo Video Sales Services"
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>

                    {/* Label: mobile=below video, desktop=floating above */}
                    <div className="static sm:absolute top-auto sm:-top-12 left-auto sm:left-1/2 translate-x-0 sm:-translate-x-1/2 mt-1 sm:mt-0 w-full sm:w-auto flex sm:block justify-center z-10">
                      <span className="inline-flex items-center px-4 sm:px-6 py-1.5 sm:py-2 bg-gradient-to-r from-primary/90 via-primary-glow/90 to-primary/90 text-white text-xs sm:text-sm font-bold rounded-full backdrop-blur-xl border border-white/40 shadow-xl whitespace-nowrap">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white mr-2 animate-pulse" />
                        Sales Services Demo
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StandardIntroSection
        badge="Il passo successivo"
        title="Dalla consulenza alla soluzione: i servizi pensati per la tua"
        highlightedText="crescita"
        description="Un direttore vendite a noleggio offre l'esperienza strategica di cui ogni azienda ha bisogno, senza i costi di assunzione. Con un singolo intervento strategico risolvi i blocchi del team, ottieni un processo su misura per vendere di più e avrai un reparto vendite più solido ed efficace. Scopri i servizi dedicati al tuo business."
        ctaText="Scopri tutti i servizi"
        ctaSubtext="Direttore vendite a noleggio • Benefici già dopo 1 intervento • Oltre 500 clienti soddisfatti"
        ctaHref="/contact"
      />
      <StandardCustomersSection />
      <StandardQuoteSection
        badge="La forza di una consulenza mirata"
        mainQuote="Quante opportunità stai perdendo per mancanza di"
        highlightedQuote="metodo?"
        description="Cosa potrebbe fare un Direttore Vendite a Noleggio per il tuo business? Già oltre 500 aziende hanno visto benefici incredibili da un singolo intervento. Confrontarsi uno specialista significa eliminare i problemi che bloccano le vendite e potenziare ciò che già funziona, ottenendo chiarezza, metodo e performance misurabili senza i costi fissi di un direttore commerciale interno."
        ctaText="Scopri di più"
        ctaSubtext="Direttore vendite a noleggio • Benefici già dopo 1 intervento • Oltre 500 clienti soddisfatti"
        ctaHref="/contact"
      />

      {/* Services Section with Video Cards */}
      <section className="py-20 lg:py-32 bg-black relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <ConsistentHeading
            badge="Tre consulenze ad alto impatto"
            title="Il kit completo per una forza vendite"
            highlightedText="performante"
            subtitle="Dal pitch alla strategia: tre soluzioni pensate per eliminare il caos, migliorare ciò che già funziona e dare al tuo team la guida di un direttore vendite a noleggio. Ogni azienda ha esigenze diverse, ma tutte hanno un obiettivo comune: vendere di più e meglio. Per questo abbiamo creato tre percorsi chiari e immediatamente operativi. Una consulenza singola è sufficiente per portare benefici concreti e far fare un salto di qualità al tuo reparto commerciale."
            theme="dark"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {salesServices.map((service, index) => (
                <VideoServiceCard
                  key={index}
                  title={service.title}
                  subtitle={service.subtitle}
                  features={service.features}
                  youtubeUrl={service.youtubeUrl}
                  shopifyUrl={service.shopifyUrl}
                  category={service.category}
                  price={service.price}
                />
            ))}
          </div>
        </div>
      </section>

      {/* Consistent How It Works Section - Custom for Sales Services */}
      <section className="py-32 px-6 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-24">
            <div className="inline-flex items-center px-8 py-4 rounded-full text-lg font-bold mb-8 bg-primary/10 text-primary border border-primary/20 transition-all duration-300 hover:scale-105 shadow-lg">
              <Target className="w-6 h-6 mr-3" />
              Dal problema alla soluzione in 3 step
            </div>
            <h2 className="text-5xl lg:text-7xl font-black leading-[0.85] tracking-tight text-slate-900 mb-12">
              Come funziona la consulenza{" "}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                commerciale?
              </span>
            </h2>
            <p className="text-xl lg:text-2xl leading-relaxed text-slate-600 max-w-3xl mx-auto">
              Ogni azienda è diversa, ma il nostro approccio è sempre lo stesso: semplice, concreto e orientato ai risultati. Con un Direttore Vendite a noleggio al tuo fianco, in tre step chiari passiamo dall'analisi alla strategia fino all'esecuzione, per garantirti <span className="font-bold text-primary">miglioramenti reali e misurabili</span>.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {howItWorksSteps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200/50 transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
                  <div className="text-6xl font-black text-primary/20 mb-4">{step.number}</div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-primary to-primary-glow flex items-center justify-center mb-6">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
                
                {/* Connector Arrow */}
                {index < howItWorksSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <ConsistentHeading
            badge="Calcola il Tuo ROI"
            title="Calcola il Tuo"
            highlightedText="ROI"
            subtitle="Scopri quanto potresti guadagnare ottimizzando i tuoi processi di vendita"
          />
          <ROICalculator category="sales" />
        </div>
      </section>

      {/* Performance Dashboard Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <ConsistentHeading
            title="Performance"
            highlightedText="Dashboard"
            subtitle="Monitora le metriche di vendita che contano davvero per il tuo business"
          />
          <PerformanceDashboard category="sales" />
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <ConsistentHeading
            title="Cosa dicono"
            highlightedText="i nostri clienti"
            subtitle="Storie di successo di aziende che hanno trasformato le loro vendite con i nostri servizi"
          />
          <EnhancedTestimonials category="sales" />
        </div>
      </section>

      {/* About Marco Section */}
      <AboutSection />

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <ConsistentHeading
              title="Domande"
              highlightedText="Frequenti"
            />

            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border rounded-xl px-6 hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-[#2E8BC0] py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>    
      </section>

      {/* Premium Services Carousel */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
      <PremiumServicesCarouselOptimized />
        </div>
      </section>

      <MailerLiteContactSection />

      {/* Cross-Sell Recommendations */}
      <CrossSellRecommendations
        currentService="sales-services"
        layout="horizontal"
        title="Accelera ulteriormente la crescita"
        subtitle="Il 78% dei clienti Sales Services aggiunge questi servizi per risultati ancora più potenti"
      />


      <Footer />
    </div>
  );
};

export default SalesServices;