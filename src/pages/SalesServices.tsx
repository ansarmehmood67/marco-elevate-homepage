import React from 'react';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import StandardIntroSection from '@/components/shared/StandardIntroSection';
import StandardCustomersSection from '@/components/shared/StandardCustomersSection';
import StandardQuoteSection from '@/components/shared/StandardQuoteSection';
import CrossSellRecommendations from '@/components/CrossSellRecommendations';
import AboutSection from '@/components/AboutSection';
import MailerLiteContactSectionAnimated from '@/components/MailerLiteContactSectionAnimated';
import PremiumServicesCarouselOptimized from '@/components/PremiumServicesCarouselOptimized';
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, BarChart, TrendingUp, Play } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";

// Premium Components
import LiveSocialProof from '@/components/premium/LiveSocialProof';
import ROICalculator from '@/components/premium/ROICalculator';
import EnhancedTestimonials from '@/components/premium/EnhancedTestimonials';

import PerformanceDashboard from '@/components/premium/PerformanceDashboard';

// Shared Components
import CompactServiceCard from '@/components/shared/CompactServiceCard';
import { salesServicesData } from '@/utils/serviceUtils';
import MarcoScarcityTimer from '@/components/shared/MarcoScarcityTimer';
import ConsistentHowItWorks from '@/components/shared/ConsistentHowItWorks';
import ConsistentHeading from '@/components/shared/ConsistentHeading';
import PremiumFinalCTA from '@/components/shared/PremiumFinalCTA';

const SalesServices = () => {
  const { ref, visibleItems } = useStaggeredAnimation(6, 200);

  const salesServices = [
    {
      title: "Direttore Vendite – Sessione Strategica",
      subtitle: "La leadership commerciale che guida il tuo team verso risultati concreti.",
      description: "Hai venditori motivati ma senza una direzione chiara? Con una sessione strategica di 2 ore con un Direttore Vendite a noleggio ottieni subito chiarezza, metodo e un piano operativo che sblocca la pipeline.",
      features: [
        "• <strong>In cosa consiste:</strong> 1 call strategica di 2 ore + 1 follow-up a 30 giorni per analizzare pipeline, KPI e costruire un piano operativo chiaro.",
        "• <strong>A chi è rivolto:</strong> Imprenditori e aziende senza un responsabile vendite interno o con team confusi/demotivati.",
        "• <strong>Cosa ottieni:</strong> Una fotografia reale della situazione commerciale e un piano pratico con attività e priorità.",
        "• <strong>Benefici immediati:</strong> Addio improvvisazione: vendite più guidate, pipeline sbloccata e team motivato."
      ],
      youtubeUrl: "https://www.youtube.com/embed/uPhcQHDoux0?si=TzGArSKPaTTz4hEe",
      shopifyProductId: "15458055160190",
      category: "basic" as const,
      price: "€1.600 IVA esclusa"
    },
    {
      title: "Design Strategico del Sistema di Vendita",
      subtitle: "Dal caos a un sistema di vendita replicabile e scalabile.",
      description: "Hai contatti ma non clienti? Invi preventivi ma non ricevi risposte? In 3 ore di consulenza intensiva disegniamo insieme il tuo sistema di vendita completo: lead generation, gestione contatti e chiusura trattative.",
      features: [
        "• <strong>In cosa consiste:</strong> Analisi delle fonti di lead, gestione contatti e pipeline per costruire un flusso ideale di conversione.",
        "• <strong>A chi è rivolto:</strong> PMI, freelance e startup che hanno contatti ma non riescono a trasformarli in clienti.",
        "• <strong>Cosa ottieni:</strong> Un sistema di vendita su misura, replicabile e scalabile con un piano operativo chiaro.",
        "• <strong>Benefici immediati:</strong> Stop al disordine: più controllo, più conversioni, più clienti reali."
      ],
      youtubeUrl: "https://www.youtube.com/embed/uPhcQHDoux0?si=TzGArSKPaTTz4hEe",
      shopifyProductId: "15458055160190",
      category: "basic" as const,
      price: "€1.400 IVA esclusa"
    },
    {
      title: "Audit Strategico del Pitch Commerciale — Versione Ridotta",
      subtitle: "La consulenza che rende più persuasivo il tuo team.",
      description: "Cosa raccontano i tuoi venditori e come lo raccontano? Con una sessione pratica e personalizzata analizziamo il pitch commerciale del tuo team e lo rendiamo più chiaro, persuasivo e orientato alla chiusura.",
      features: [
        "• <strong>In cosa consiste:</strong> Revisione delle chiamate, creazione script personalizzato e feedback sul pitch.",
        "• <strong>A chi è rivolto:</strong> Imprenditori, manager e aziende con team di vendita attivi o in crescita.",
        "• <strong>Cosa ottieni:</strong> Venditori più efficaci, sicuri e con messaggi coerenti.",
        "• <strong>Benefici immediati:</strong> Pitch che convertono di più e meno opportunità sprecate."
      ],
      youtubeUrl: "https://www.youtube.com/embed/uPhcQHDoux0?si=TzGArSKPaTTz4hEe",
      shopifyProductId: "15458055160190",
      category: "basic" as const,
      price: "€800 IVA esclusa"
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
      <section className="pt-24 sm:pt-24 lg:pt-24 pb-16 px-0 transition-all duration-500 relative overflow-hidden bg-black min-h-screen">
        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative min-h-[85vh] lg:min-h-[90vh] rounded-3xl overflow-hidden transition-all duration-500 shadow-2xl bg-black border border-gray-800/30">
            {/* Video Background */}
            <img
              src="https://res.cloudinary.com/dsergeqc9/image/upload/v1758133064/sales_services_hero_background_utm5pa.png"
              alt="Sales Services Background"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ zIndex: 1 }}
            />
            
            {/* Video Overlay */}
            <div className="absolute inset-0 bg-black/70" style={{ zIndex: 2 }} />
            
            {/* Bottom gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 to-transparent" style={{ zIndex: 3 }} />
            
            {/* Enhanced Content */}
            <div ref={ref} className="relative lg:absolute lg:inset-0 flex flex-col justify-center lg:justify-center p-2 sm:p-2 lg:p-6 pt-6 sm:pt-10 lg:pt-4 pb-4 sm:pb-6 lg:pb-4 z-20">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 sm:gap-6 lg:gap-8">
                {/* Left copy */}
                <div className="flex-1 max-w-5xl text-center lg:text-left">
                  <div className="mb-4">
                    <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary/20 to-primary-glow/20 text-primary font-semibold text-sm rounded-full border border-primary/30 backdrop-blur-sm">
                      Consulenza Vendite
                    </span>
                  </div>
                  
                  <h1 className={`text-hero-title font-black leading-constrained-tight mb-8 text-white drop-shadow-2xl bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent text-center lg:text-left transition-all duration-1200 ease-out ${
                    visibleItems[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}>
                    Direttore Vendite a Noleggio
                  </h1>
                  
                  {/* Paragraph */}
                  <div
                    className={`mb-6 lg:mb-10 transition-all duration-500 ease-out delay-320 transform ${
                      visibleItems[1] 
                        ? "opacity-100 translate-y-0 scale-100" 
                        : "opacity-0 translate-y-4 scale-96"
                    }`}
                    style={{
                      transitionDelay: visibleItems[1] ? '320ms' : '0ms'
                    }}
                  >
                    <div className="relative inline-block">
                      <p className="inline-block w-fit max-w-[60ch] text-hero-body text-white/95 leading-constrained-relaxed backdrop-blur-xl bg-gradient-to-r from-black/30 via-black/20 to-black/30 rounded-2xl px-4 lg:px-2 py-1 lg:py-2 border border-white/10 shadow-2xl">
                        Perché non tutte le aziende possono{" "}
                        <span className="text-primary font-medium">
                          permettersi un direttore commerciale
                        </span>
                        , ma tutte hanno bisogno di vendere di più. Con una sessione con un Direttore Vendite a noleggio ottieni l'esperienza di un{" "}
                        <span className="text-primary font-medium">
                          direttore vendite
                        </span>
                        , senza i costi fissi. Un alleato strategico che porta metodo, chiarezza e risultati immediati al tuo team.
                      </p>
                    </div>
                  </div>
                  
                  <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-450 ease-out delay-600 ${
                    visibleItems[3] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}>
                    <Button 
                      onClick={() => document.getElementById('tre-consulenze')?.scrollIntoView({ behavior: 'smooth' })}
                      className="group font-bold px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 text-base sm:text-lg lg:text-xl rounded-2xl shadow-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-3xl bg-white text-black hover:bg-gray-100 border-2 border-white/30 backdrop-blur-sm relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center space-x-2">
                        <span>Scopri di più</span>
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </div>
                </div>

                {/* Right video */}
                <div className={`w-full sm:w-80 lg:w-80 lg:flex-shrink-0 transition-all duration-600 ease-out delay-800 ${
                  visibleItems[4] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}>
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

      {/* Philosophy Section - Moved after Hero */}
      <StandardQuoteSection
        badge="La forza di una consulenza mirata"
        mainQuote="Quante opportunità stai perdendo per mancanza di"
        highlightedQuote="metodo?"
        description="Cosa potrebbe fare un Direttore Vendite a Noleggio per il tuo business? Già oltre 500 aziende hanno visto benefici incredibili da un singolo intervento. Confrontarsi uno specialista significa eliminare i problemi che bloccano le vendite e potenziare ciò che già funziona, ottenendo chiarezza, metodo e performance misurabili senza i costi fissi di un direttore commerciale interno."
        ctaText="Scopri di più"
        ctaSubtext="Direttore vendite a noleggio • Benefici già dopo 1 intervento • Oltre 500 clienti soddisfatti"
        onCtaClick={() => document.getElementById('tre-consulenze')?.scrollIntoView({ behavior: 'smooth' })}
      />

      {/* Il passo successivo - Moved after Philosophy */}
      <StandardIntroSection
        badge="Il passo successivo"
        title="Dalla consulenza alla soluzione: i servizi pensati per la tua"
        highlightedText="crescita"
        description="Un direttore vendite a noleggio offre l'esperienza strategica di cui ogni azienda ha bisogno, senza i costi di assunzione. Con un singolo intervento strategico risolvi i blocchi del team, ottieni un processo su misura per vendere di più e avrai un reparto vendite più solido ed efficace. Scopri i servizi dedicati al tuo business."
        ctaText="Scopri tutti i servizi"
        ctaSubtext="Direttore vendite a noleggio • Benefici già dopo 1 intervento • Oltre 500 clienti soddisfatti"
        onCtaClick={() => document.getElementById('tre-consulenze')?.scrollIntoView({ behavior: 'smooth' })}
      />

      {/* Services Section with Video Cards */}
      <section id="tre-consulenze" className="py-20 lg:py-32 bg-black relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <ConsistentHeading
            badge="Tre consulenze ad alto impatto"
            title="La forza vendite"
            highlightedText="performante"
            subtitle={<>
              <strong>Metodo</strong>, <strong>chiarezza</strong> e <strong>risultati immediati</strong> senza i costi di un direttore interno. Tre percorsi strategici per trasformare il <strong>caos</strong> in un sistema di vendita <strong>replicabile</strong> e <strong>scalabile</strong>.
            </>}
            theme="dark"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {salesServicesData.map((service, index) => (
                <CompactServiceCard
                  key={service.id}
                  title={service.title}
                  subtitle={service.subtitle}
                  price={service.price}
                  category={service.category}
                  youtubeUrl={service.youtubeUrl}
                  rating={service.rating || 5}
                  reviewCount={service.reviewCount || 0}
                  availability={service.availability || 'available'}
                  slug={service.slug}
                  basePath="/consulenza-strategica/sales-services"
                />
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section - Moved after Services */}
      <StandardCustomersSection />

      

      {/* Cross-Sell Recommendations */}
      <CrossSellRecommendations
        currentService="sales-services"
        layout="horizontal"
        title="Accelera ulteriormente la crescita"
        subtitle="Il 78% dei clienti Sales Services aggiunge questi servizi per risultati ancora più potenti"
      />

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

      <div id="contact"><MailerLiteContactSectionAnimated /></div>

      


      <Footer />
    </div>
  );
};

export default SalesServices;