import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import StandardIntroSection from '@/components/shared/StandardIntroSection';
import StandardCustomersSection from '@/components/shared/StandardCustomersSection';
import StandardQuoteSection from '@/components/shared/StandardQuoteSection';
import CrossSellRecommendations from '@/components/CrossSellRecommendations';
import AboutSection from '@/components/AboutSection';
import MailerLiteContactSectionAnimated from '@/components/MailerLiteContactSectionAnimated';
import PremiumServicesCarouselOptimized from '@/components/PremiumServicesCarouselOptimized';
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, CheckCircle, TrendingUp, BarChart, Play } from "lucide-react";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// Premium Components
import LiveSocialProof from '@/components/premium/LiveSocialProof';
import ROICalculator from '@/components/premium/ROICalculator';
import EnhancedTestimonials from '@/components/premium/EnhancedTestimonials';

import PerformanceDashboard from '@/components/premium/PerformanceDashboard';

// Shared Components
import CompactServiceCard from '@/components/shared/CompactServiceCard';
import { consultationServicesData } from '@/utils/serviceUtils';
import MarcoScarcityTimer from '@/components/shared/MarcoScarcityTimer';
import ConsistentHowItWorks from '@/components/shared/ConsistentHowItWorks';
import ConsistentHeading from '@/components/shared/ConsistentHeading';
import PremiumFinalCTA from '@/components/shared/PremiumFinalCTA';

const ConsultationServices = () => {
  const { ref, visibleItems } = useStaggeredAnimation(6, 200);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Preload the image
    const image = document.createElement('img');
    image.src = "https://res.cloudinary.com/dsergeqc9/image/upload/v1758133357/consulting_services_hero_background_foldqx.png";
    
    const handleLoad = () => {
      setImageLoaded(true);
      image.removeEventListener('load', handleLoad);
    };
    
    image.addEventListener('load', handleLoad);
    
    return () => {
      image.removeEventListener('load', handleLoad);
    };
  }, []);

  const brandLogos = [
    "/lovable-uploads/4942e788-ba8d-426d-bd98-bf362a153c59.png",
    "/lovable-uploads/55ba51af-1df7-42c2-9eb0-7808ffbd9c64.png",
    "/lovable-uploads/57e4bdda-6fe0-4184-b948-1e51ef3229c1.png",
    "/lovable-uploads/5a8470d1-8aa8-4ee0-a0c5-efbe23f61c0b.png",
    "/lovable-uploads/655e08e7-f709-41c5-9b01-f624d4dea2ce.png",
    "/lovable-uploads/6e880c32-395f-4bee-afdc-3c3ddfa8eac4.png",
    "/lovable-uploads/6fc89ca3-7ee8-4e7f-87bb-2aaa90c96cf4.png",
    "/lovable-uploads/7a5a9505-672f-4d4e-b7c5-de56bbe2ebf5.png",
    "/lovable-uploads/81b2f01b-2e68-4d8c-9de0-8db4e74eb18f.png",
    "/lovable-uploads/871bbc8b-f67d-4537-a7a2-574d06a9e919.png",
    "/lovable-uploads/911930fd-818f-4633-a9f4-f2abce87bc72.png",
    "/lovable-uploads/981ed56a-ba22-44a8-91a6-e6a1961bc0ae.png",
    "/lovable-uploads/aae386e9-46e4-472f-8b3a-aa28673a1c85.png",
    "/lovable-uploads/ada1d4fd-49a4-4da5-92fe-ac3367d74743.png",
    "/lovable-uploads/c015aef0-9ac6-47d5-8f1b-ea8aff14dd08.png",
    "/lovable-uploads/d4a117b0-a098-4850-9d53-82ee30cbdb21.png",
    "/lovable-uploads/da53b1fe-9242-462b-8ffc-800e0c813813.png",
    "/lovable-uploads/eeb1d6c7-a9ec-4380-ba6d-0ed594589663.png",
    "/lovable-uploads/fe2c67ca-9c86-4598-b7ce-05d1ef35dbbf.png"
  ];

  const consultationServices = [
    {
      title: "Startup Sales Kickstart – Sessione Strategica",
      subtitle: "La consulenza strategica che ti aiuta a costruire da zero un reparto vendite snello e funzionale. Hai un'idea, un prodotto o un servizio da lanciare ma non sai da dove iniziare con le vendite? Con una sessione intensiva analizziamo insieme il tuo modello di business e creiamo un funnel pratico e replicabile per trasformare i primi contatti in clienti paganti.",
      features: [
        "•In cosa consiste: 1 sessione strategica 1:1 da 120 minuti con analisi del modello di business, dei canali di acquisizione più adatti e disegno del funnel di vendita iniziale.",
        "•A chi è rivolto: Startup, freelance e nuovi imprenditori che devono costruire il loro primo sistema di vendita senza rischiare errori costosi.",
        "•Cosa ottieni: Report operativo con il funnel base disegnato, strumenti consigliati (CRM, tool di automazione), primo piano di acquisizione clienti.",
        "•Benefici immediati: Parti con una direzione chiara, eviti sprechi di tempo e budget, imposti fin da subito un sistema replicabile e scalabile."
      ],
      youtubeUrl: "https://www.youtube.com/embed/uPhcQHDoux0?si=HS91ksdl8eUVpgOk",
      shopifyProductId: "15458055160190",
      category: "popular" as const,
      price: "€2.000"
    },
    {
      title: "Sales Shift – Sessione Strategica",
      subtitle: "La consulenza strategica che trasforma un reparto vendite lento e costoso in una macchina commerciale moderna ed efficiente. Hai campagne attive, un sito online, magari qualche funnel... ma i lead non arrivano (o sono quelli sbagliati)? Con due sessioni strategiche analizziamo insieme tutto il tuo ecosistema digitale per capire cosa funziona, cosa no e cosa migliorare subito. Alla fine avrai un report operativo e un piano d'azione concreto.",
      features: [
        "•In cosa consiste: 2 sessioni strategiche 1:1 da 120 minuti con assessment completo della pipeline, valutazione dei fornitori e disegno di una roadmap di trasformazione.",
        "•A chi è rivolto: Aziende consolidate e PMI che vogliono aggiornare il loro sistema di vendita per restare competitive in un mercato in rapido cambiamento.",
        "•Cosa ottieni: Report operativo con criticità rilevate, suggerimenti di miglioramento, strumenti consigliati e piano di transizione commerciale personalizzato.",
        "•Benefici immediati: Riduci sprechi e inefficienze, migliori la performance del team, imposti un modello di vendita agile e misurabile pronto a crescere."
      ],
      youtubeUrl: "https://www.youtube.com/embed/uPhcQHDoux0?si=HS91ksdl8eUVpgOk",
      shopifyProductId: "15458055160190",
      category: "premium" as const,
      price: "€3.000"
    }
  ];

  const howItWorksSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "Analizziamo lo stato attuale del tuo business: processi di vendita, canali di acquisizione, strumenti digitali e risultati. Individuiamo subito i punti di forza e le aree di miglioramento.",
      icon: Target
    },
    {
      number: "02",
      title: "Costruzione del Sistema",
      description: "Disegniamo insieme un modello commerciale personalizzato: funnel, strumenti digitali, automazioni e attività da delegare in outsourcing per avere un processo snello e replicabile.",
      icon: Users
    },
    {
      number: "03", 
      title: "Esecuzione con KPI",
      description: "Trasformiamo la strategia in azione con un piano operativo concreto, definendo KPI chiari e un sistema di monitoraggio che garantisce controllo e crescita continua.",
      icon: BarChart
    }
  ];

  const outcomes = [
    "Roadmap prioritizzata",
    "Rischi e mitigazioni",
    "Scorecard semplice",
    "Supporto decisionale",
    "Plan di esecuzione"
  ];

  const faqs = [
    {
      question: "Per chi sono pensati questi servizi di consulenza?",
      answer: "I nostri servizi sono ideali per imprenditori, CEO e responsabili commerciali che vogliono trasformare il loro approccio alle vendite o costruire autorità attraverso il content marketing. Perfetti per chi ha bisogno di una guida strategica esterna."
    },
    {
      question: "Quante sessioni include la consulenza?",
      answer: "Dipende dal servizio scelto. Tipicamente includiamo 3-5 sessioni strategiche da 90 minuti ciascuna, distribuite su 4-6 settimane. Il numero esatto viene definito in base alla complessità del progetto."
    },
    {
      question: "Aiutate anche nell'implementazione delle strategie?",
      answer: "Sì, forniamo supporto nell'implementazione attraverso i nostri team Sales e Marketing. La consulenza include sempre raccomandazioni pratiche e, se necessario, possiamo gestire l'esecuzione operativa."
    },
    {
      question: "Qual è la differenza tra consulenza e servizi operativi?",
      answer: "La consulenza si focalizza sulla strategia, pianificazione e decision-making. I servizi operativi (Sales/Marketing Services) si occupano dell'esecuzione pratica. Spesso combiniamo entrambi per risultati ottimali."
    },
    {
      question: "Come garantite il ROI della consulenza?",
      answer: "Ogni consulenza include KPI chiari e misurabili. Forniamo framework di misurazione e scorecard per tracciare i progressi. Il nostro approccio è sempre orientato ai risultati business tangibili."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-24 lg:pt-24 pb-16 px-0 bg-black relative overflow-hidden min-h-screen">
        {/* Simplified background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-black to-gray-900/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(var(--primary)/0.08),transparent_50%)]" />

        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
          {/* NOTE: let height be auto on mobile; only enforce min-h on lg */}
          <div className="relative rounded-3xl overflow-hidden border border-gray-800/30 shadow-2xl bg-black/60 backdrop-blur-sm min-h-[100vh] lg:min-h-[105vh]">
            {/* Background Video with loading state */}
            <div className="absolute inset-0">
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 animate-pulse" />
              )}
              <img
                src="https://res.cloudinary.com/dsergeqc9/image/upload/v1758133357/consulting_services_hero_background_foldqx.png"
                alt="Consulting Services Background"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  imageLoaded ? 'opacity-80' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(true)}
              />
            </div>

            {/* Clean overlays */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/75 via-black/65 to-black/80" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />

            {/* Content */}
            {/* KEY CHANGE: static on mobile, absolute only on lg */}
            <div
              ref={ref}
              className="relative lg:absolute lg:inset-0 flex flex-col justify-center lg:justify-center p-2 sm:p-2 lg:p-6 pt-6 sm:pt-10 lg:pt-4 pb-4 sm:pb-6 lg:pb-4 z-20"
            >
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 sm:gap-6 lg:gap-8">
                {/* Left copy */}
                <div className="flex-1 max-w-5xl">
                   {/* Heading */}
                   <h1
                    className={`text-hero-title font-black leading-constrained-tight tracking-tight text-white mb-8 sm:mb-10 text-center lg:text-left transition-all duration-600 ease-out ${
                      visibleItems[0] 
                        ? "opacity-100 translate-y-0" 
                        : "opacity-0 translate-y-4"
                    }`}
                    style={{
                      transitionDelay: visibleItems[0] ? '0ms' : '0ms'
                    }}
                  >
                    <div className={`transition-all duration-600 ease-out ${visibleItems[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                      Trasforma il tuo reparto vendite in una{" "}
                      <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent tracking-normal">
                        macchina snella, esterna e scalabile
                      </span>
                    </div>
                  </h1>

                  {/* Subcopy */}
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
                      <p className="inline-block w-fit max-w-[60ch] text-hero-body text-white/95 leading-constrained-relaxed backdrop-blur-xl bg-gradient-to-r from-black/30 via-black/20 to-black/30 rounded-2xl px-4 lg:px-6 py-3 lg:py-4 border border-white/10 shadow-2xl">
                        Attraverso questa consulenza l'imprenditore acquisisce la visione e le competenze per operare come{" "}
                        <span className="text-primary font-medium">
                          Direttore Vendite On Demand
                        </span>
                        {" "}e{" "}
                        <span className="text-primary font-medium">
                          Direttore Marketing On Demand
                        </span>
                        , trasformando il proprio reparto in un sistema snello, scalabile e governato con autonomia.
                      </p>
                    </div>
                  </div>

                  {/* Bullets */}
                  <div
                    className={`mb-6 lg:mb-8 transition-all duration-600 ease-out delay-400 transform ${
                      visibleItems[2] 
                        ? "opacity-100 translate-x-0" 
                        : "opacity-0 -translate-x-8"
                    }`}
                    style={{
                      transitionDelay: visibleItems[2] ? '400ms' : '0ms'
                    }}
                  >
                    <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                      <p className="text-base lg:text-lg text-white font-bold">
                        <span className="text-primary-glow">✓</span> Audit 30 min • 
                        <span className="text-primary-glow mx-2">✓</span> Nessun impegno • 
                        <span className="text-primary-glow mx-2">✓</span> Risposta entro 2 ore • 
                        <span className="text-primary-glow mx-2">✓</span> 500+ clienti
                      </p>
                    </div>
                  </div>

                  {/* CTA */}
                  <div
                    className={`relative group mb-8 sm:mb-0 transition-all duration-450 ease-out delay-480 transform flex justify-center lg:justify-start ${
                      visibleItems[3] 
                        ? "opacity-100 translate-y-0" 
                        : "opacity-0 translate-y-4"
                    }`}
                    style={{
                      transitionDelay: visibleItems[3] ? '480ms' : '0ms'
                    }}
                  >
                     <Button 
                       onClick={() => document.getElementById('complessita-chiarezza')?.scrollIntoView({ behavior: 'smooth' })}
                       className="relative font-bold px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 text-base sm:text-lg lg:text-xl rounded-full shadow-2xl hover:shadow-[0_0_50px_hsl(var(--primary-glow)/0.4)] transition-all duration-700 transform lg:hover:scale-105 hover:-translate-y-0.5 bg-gradient-to-r from-white via-gray-50 to-white text-black hover:from-primary hover:via-primary-glow hover:to-primary hover:text-white border-2 border-white/60 hover:border-primary/70 backdrop-blur-xl overflow-hidden group"
                     >
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary-glow/0 to-primary/0 group-hover:from-primary/20 group-hover:via-primary-glow/20 group-hover:to-primary/20 transition-all duration-700" />
                        <span className="flex items-center space-x-2 lg:space-x-3 relative z-10">
                          <span className="relative">
                            Prenota la tua sessione di trasformazione
                            <div className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-primary to-primary-glow group-hover:w-full transition-all duration-500" />
                          </span>
                          <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-3 transition-all duration-500 group-hover:text-white animate-pulse" />
                        </span>
                        <div className="absolute inset-0 -top-2 bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                      </Button>
                    
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 via-primary-glow/30 to-primary/30 filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
                    <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary/20 via-primary-glow/20 to-primary/20 filter blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-700 -z-20" />
                  </div>
                </div>

                {/* Right video */}
                <div className={`w-full sm:w-80 lg:w-80 lg:flex-shrink-0 group transition-all duration-600 ease-out delay-600 transform ${
                  visibleItems[4] 
                    ? "opacity-100 translate-x-0" 
                    : "opacity-0 translate-x-8"
                }`}
                  style={{
                    transitionDelay: visibleItems[4] ? '600ms' : '0ms'
                  }}
                >
                  <div className="relative">
                    {/* Video box */}
                    <div className="w-full h-44 sm:h-48 rounded-2xl overflow-hidden shadow-2xl border border-white/40 backdrop-blur-xl bg-gradient-to-br from-black/30 via-black/20 to-black/30 lg:hover:shadow-[0_0_40px_rgba(56,189,248,0.3)] transition-all duration-700 lg:hover:scale-105">
                      <iframe
                        src="https://www.youtube.com/embed/ZocHP6N9Aig"
                        title="Demo Video"
                        className="w-full h-full rounded-2xl"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>

                    {/* Label: mobile=below video, desktop=floating above */}
                    <div
                      className={`
                        static sm:absolute
                        top-auto sm:-top-12
                        left-auto sm:left-1/2
                        translate-x-0 sm:-translate-x-1/2
                        mt-1 sm:mt-0
                        w-full sm:w-auto
                        flex sm:block justify-center
                        z-10
                        transition-all duration-300 ease-out
                        ${visibleItems[4] 
                          ? "opacity-100 translate-y-0" 
                          : "opacity-0 translate-y-4"
                        }
                      `}
                      style={{
                        transitionDelay: visibleItems[4] ? '250ms' : '0ms'
                      }}
                    >
                      <span className="inline-flex items-center px-4 sm:px-6 py-1.5 sm:py-2 bg-gradient-to-r from-primary/90 via-primary-glow/90 to-primary/90 text-white text-xs sm:text-sm font-bold rounded-full backdrop-blur-xl border border-white/40 shadow-xl whitespace-nowrap">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white mr-2 animate-pulse" />
                        Consultation Services Demo
                      </span>
                    </div>
                  </div>
                </div>
                {/* /Right video */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <StandardQuoteSection
        badge="Le regole del gioco sono cambiate"
        mainQuote="Il modello tradizionale non è più sostenibile: dal peso dei costi fissi"
        highlightedQuote="alla libertà dell'outsourcing"
        description="Oggi poche aziende possono permettersi una forza vendite e un reparto marketing completi. La vera svolta è mettere l'imprenditore al timone, con le competenze per agire come Direttore Vendite e Marketing On Demand, capace di guidare in autonomia reparti esterni e governare l'intero funnel con flessibilità e controllo."
        ctaText="Prenota la tua sessione di trasformazione"
        ctaSubtext="•Taglia i costi fissi senza rinunciare alla crescita •Governa il funnel con autonomia e chiarezza strategica •Attiva marketing e vendite esterne solo quando servono"
        ctaHref="/contact"
      />

      {/* Solution Section */}
      <StandardIntroSection
        badge="Impara a governare il funnel senza sprechi"
        title="Al timone del tuo business,"
        highlightedText="con chiarezza e controllo"
        description="Che si tratti di iniziare da zero o di trasformare un reparto già attivo, il nostro percorso ti mette nella cabina di comando. L'imprenditore diventa capitano delle proprie vendite: più decisioni consapevoli, meno costi inutili."
        ctaText="Prenota la tua sessione di trasformazione"
        ctaSubtext="•Cabina di comando per marketing e vendite •Imprenditore al timone, senza sprechi •Percorso per chi inizia o deve cambiare"
        ctaHref="/contact"
      />

          {/* Services Section with Video Cards */}
          <section id="complessita-chiarezza" className="py-20 lg:py-32 bg-black relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <ConsistentHeading
            badge="Dalla complessità alla chiarezza strategica"
            title="La guida che serve"
            highlightedText="per prendere le decisioni giuste"
            subtitle="Chiarezza strategica, scelte consapevoli e un modello snello che elimina sprechi e costi fissi. Abbiamo creato percorsi di consulenza che mettono l'imprenditore al timone: dalla complessità alla chiarezza operativa, con strumenti pratici per prendere decisioni strategiche informate e ottenere risultati misurabili."
            theme="dark"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {consultationServicesData.map((service, index) => (
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
                  basePath="/consulenza-strategica/consultation-services"
                />
            ))}
          </div>
        </div>
      </section>

      {/* Standard Customers Section */}
      <StandardCustomersSection />

      

      {/* CTA Button */}
      <section className="py-8 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="container mx-auto px-6 text-center">
          <Button className="group font-bold px-10 py-5 text-xl rounded-2xl shadow-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-3xl bg-primary text-white hover:bg-primary/90">
            <span className="relative z-10 flex items-center space-x-2">
              <span>Cambia oggi</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
        </div>
      </section>

      {/* Cross-Sell Recommendations */}
      <CrossSellRecommendations
        currentService="consultation-services"
        layout="horizontal"
        title="Accelera ulteriormente la crescita"
        subtitle="Il 78% dei clienti Consultation Services aggiunge questi servizi per risultati ancora più potenti"
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

      

      {/* Premium Final CTA Section */}
      <div id="contact"><MailerLiteContactSectionAnimated /></div>


      <Footer />
    </div>
  );
};

export default ConsultationServices;