import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOHead from '@/components/SEO/SEOHead';
import { seoPages } from '@/utils/seoData';
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
import { marketingServicesData } from '@/utils/serviceUtils';
import MarcoScarcityTimer from '@/components/shared/MarcoScarcityTimer';
import ConsistentHowItWorks from '@/components/shared/ConsistentHowItWorks';
import ConsistentHeading from '@/components/shared/ConsistentHeading';
import PremiumFinalCTA from '@/components/shared/PremiumFinalCTA';

const MarketingServices = () => {
  const { ref, visibleItems } = useStaggeredAnimation(6, 200);
  const [imageLoaded, setImageLoaded] = useState(false);

  const marketingServices = [
    {
      title: "Direttore Marketing – Sessione Strategica",
      subtitle: "La consulenza strategica che trasforma i tuoi canali digitali in una macchina di lead qualificati.",
      description: "Hai campagne attive, un sito online, magari qualche funnel..., ma i lead non arrivano (o sono quelli sbagliati)? Con due sessioni strategiche analizziamo insieme tutto il tuo ecosistema digitale per capire cosa funziona, cosa no e cosa migliorare subito. Alla fine avrai un report operativo e un piano d'azione concreto.",
      features: [
        "<strong>In cosa consiste:</strong> 2 sessioni strategiche 1:1 (1 ora + 1 ora follow-up a 7 giorni) con analisi completa dei tuoi asset digitali (sito, funnel, campagne, email, tool di automazione).",
        "<strong>A chi è rivolto:</strong> Imprenditori, PMI, freelance e agenzie che investono in marketing ma non hanno una strategia chiara o non vedono risultati concreti.",
        "<strong>Cosa ottieni:</strong> Report operativo con criticità, suggerimenti, tool consigliati e un piano di lead generation migliorato e misurabile.",
        "<strong>Benefici immediati:</strong> Capisci cosa funziona e cosa no, eviti sprechi di tempo e budget, ottieni un piano pratico cucito su misura e migliori subito la tua strategia di acquisizione."
      ],
      youtubeUrl: "https://www.youtube.com/embed/uPhcQHDoux0?si=AkujdTksF3U8sK1X",
      shopifyProductId: "15458055160190",
      category: "popular" as const,
      price: "€1.300 IVA esclusa"
    },
    {
      title: "Comunicazione con Avatar AI — Consulenza Strategica",
      subtitle: "Dai voce e volto digitale al tuo brand con la guida di un Direttore Marketing a Noleggio.",
      description: "Vuoi rendere la tua comunicazione più efficace, scalabile e moderna? Con la nostra consulenza ti aiutiamo a integrare avatar AI e strumenti innovativi nei tuoi contenuti aziendali, così da migliorare la percezione del brand e rafforzare il rapporto con clienti e prospect.",
      features: [
        "<strong>In cosa consiste:</strong> call di consulenza strategica + piano operativo che spiega tutto quello che c'è da sapere su come strutturare il tuo gemello in intelligenza artificiale, come usare le varie piattaforme ed effettuare il primo setup del tuo avatar. (Nota: i video in alta risoluzione non sono forniti).",
        "<strong>A chi è rivolto:</strong> Imprese, PMI e professionisti che vogliono distinguersi con contenuti innovativi e rendere la comunicazione aziendale più efficace e scalabile.",
        "<strong>Cosa ottieni:</strong> Linee guida complete, esempi concreti di utilizzo (presentazioni, onboarding, customer care, video istituzionali) e il supporto strategico per scegliere le piattaforme più adatte.",
        "<strong>Benefici immediati:</strong> Risparmi tempo e costi di produzione, migliori la percezione del brand e ottieni contenuti sempre coerenti e professionali."
      ],
      youtubeUrl: "https://www.youtube.com/embed/uPhcQHDoux0?si=AkujdTksF3U8sK1X",
      shopifyProductId: "15458055160190",
      category: "basic" as const,
      price: "€1.000 IVA esclusa"
    },
    {
      title: "Consulenza Avanzata per Monetizzazione YouTube",
      subtitle: "Da creator che monetizza a brand che scala.",
      description: "Vuoi portare il tuo canale YouTube alla monetizzazione ma non sai come fare il salto? In qualità di creator già monetizzante, ti metto a disposizione il metodo che ho testato e validato in un anno di crescita reale, per aiutarti a costruire un canale solido, con contenuti strategici e un percorso chiaro verso la monetizzazione.",
      features: [
        "<strong>In cosa consiste:</strong> 1 call strategica di 2 ore + report operativo con analisi del canale, ottimizzazione dei contenuti e roadmap pratica per raggiungere i requisiti di monetizzazione.",
        "<strong>A chi è rivolto:</strong> Un metodo già validato, indicazioni concrete su contenuti, SEO, automazioni e format per accelerare il percorso verso la monetizzazione.",
        "<strong>Cosa ottieni:</strong> Un metodo già validato, indicazioni concrete su contenuti, SEO, automazioni e format per accelerare il percorso verso la monetizzazione.",
        "<strong>Benefici immediati:</strong> Capisci cosa manca al tuo canale per monetizzare, ottieni una strategia testata e applicabile subito e riduci drasticamente tempi ed errori di percorso."
      ],
      youtubeUrl: "https://www.youtube.com/embed/uPhcQHDoux0?si=AkujdTksF3U8sK1X",
      shopifyProductId: "15458055160190",
      category: "basic" as const,
      price: "€500 IVA esclusa"
    }
  ];

  const howItWorksSteps = [
    {
      number: "01",
      title: "Discovery → Analisi di canali, funnel e posizionamento",
      description: "In questa prima fase, con il supporto del Direttore Marketing a Noleggio, analizziamo a fondo il tuo ecosistema digitale: sito, funnel, campagne attive, email, social e strumenti di automazione. È il momento in cui emergono i colli di bottiglia, le aree che disperdono budget e le opportunità non sfruttate.",
      icon: Target
    },
    {
      number: "02",
      title: "Costruzione del Sistema → Disegno della strategia di marketing ideale",
      description: "Una volta individuati i punti critici, progettiamo insieme la strategia più adatta al tuo business. Definiamo i canali da attivare, il posizionamento, i messaggi chiave e le automazioni che rendono il sistema replicabile, scalabile e sostenibile. Qui il metodo prende forma e il marketing smette di essere improvvisazione per diventare processo.",
      icon: Users
    },
    {
      number: "03", 
      title: "Esecuzione con KPI → Piano operativo e numeri da monitorare subito",
      description: "L'ultimo step è operativo: ti consegniamo un piano concreto, con attività da avviare subito e priorità definite. Non solo: fissiamo anche i KPI di marketing da monitorare (crescita lead, tasso di conversione, ROI delle campagne), per misurare i progressi e avere sempre il controllo. È qui che la strategia si trasforma in crescita tangibile.",
      icon: BarChart
    }
  ];

  const faqs = [
    {
      question: "Gestite direttamente le campagne pubblicitarie?",
      answer: "Sì, possiamo gestire direttamente le campagne o formare il vostro team interno. Utilizziamo le principali piattaforme come Google Ads, Facebook Ads, LinkedIn Ads e strumenti di email marketing."
    },
    {
      question: "Come misurate il successo delle campagne?",
      answer: "Tracciamo metriche chiave come costo per lead qualificato, tasso di conversione da lead a opportunità, e ROI delle campagne. Forniamo report dettagliati settimanali con insights actionable."
    },
    {
      question: "Quanto budget pubblicitario è necessario?",
      answer: "Il budget dipende dal settore e dagli obiettivi. Tipicamente consigliamo un minimo di €3.000-5.000/mese per campagne B2B efficaci. Analizziamo il mercato per fornire raccomandazioni specifiche."
    }
  ];

  return (
    <>
      <SEOHead data={seoPages.marketingConsulting} />
      <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-24 lg:pt-24 pb-16 px-0 bg-black relative overflow-hidden min-h-screen">
        {/* Simplified background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-black to-gray-900/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(var(--primary)/0.08),transparent_50%)]" />

        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
          {/* NOTE: let height be auto on mobile; only enforce min-h on lg */}
          <div className="relative rounded-3xl overflow-hidden border border-gray-800/30 shadow-2xl bg-black/60 backdrop-blur-sm min-h-[95vh] lg:min-h-[100vh]">
            {/* Background Image with loading state */}
            <div className="absolute inset-0">
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 animate-pulse" />
              )}
              <img
                src="https://res.cloudinary.com/dsergeqc9/image/upload/v1758133357/marketing_services_hero_background_raxees.png"
                alt="Marketing Services Background"
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
                      Consulenza Marketing che produce{" "}
                      <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent tracking-normal">
                        ROI
                      </span>
                    </div>
                    
                    <div className={`text-hero-subtitle text-white/95 font-bold tracking-wide mt-4 transition-all duration-550 ease-out delay-240 ${visibleItems[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                       Il tuo Direttore Marketing a Noleggio.
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
                      <p className="inline-block w-fit max-w-[60ch] text-hero-body text-white/95 leading-constrained-relaxed backdrop-blur-xl bg-gradient-to-r from-black/30 via-black/20 to-black/30 rounded-2xl px-4 lg:px-2 py-1 lg:py-2 border border-white/10 shadow-2xl">
                        Analisi, strategia ed esecuzione: con un approccio data-driven trasformiamo ogni investimento marketing in{" "}
                        <span className="text-primary font-medium">
                          crescita concreta
                        </span>
                        , senza sprechi di tempo e budget. Grazie al{" "}
                        <span className="text-primary font-medium">
                          Direttore Marketing a Noleggio
                        </span>{" "}
                        hai la guida esperta di cui hai bisogno, solo quando ti serve.
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
                       onClick={() => document.getElementById('troppe-campagne')?.scrollIntoView({ behavior: 'smooth' })}
                       className="relative font-bold px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 text-base sm:text-lg lg:text-xl rounded-full shadow-2xl hover:shadow-[0_0_50px_hsl(var(--primary-glow)/0.4)] transition-all duration-700 transform lg:hover:scale-105 hover:-translate-y-0.5 bg-gradient-to-r from-white via-gray-50 to-white text-black hover:from-primary hover:via-primary-glow hover:to-primary hover:text-white border-2 border-white/60 hover:border-primary/70 backdrop-blur-xl overflow-hidden group"
                     >
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary-glow/0 to-primary/0 group-hover:from-primary/20 group-hover:via-primary-glow/20 group-hover:to-primary/20 transition-all duration-700" />
                        <span className="flex items-center space-x-2 lg:space-x-3 relative z-10">
                          <span className="relative">
                            Scopri di più
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
                        Marketing Services Demo
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

      <StandardQuoteSection
        badge="La forza di una consulenza mirata"
        mainQuote="Ti manca una guida chiara per capire dove"
        highlightedQuote="migliorare?"
        description="Con il Direttore Marketing a Noleggio affianchi alla tua azienda un partner esperto, capace di trasformare dubbi e inefficienze in un piano chiaro, misurabile e orientato alla crescita."
        ctaText="Scopri di più→"
        ctaSubtext="Consulenza strategica • Metodo concreto • Risultati misurabili"
        ctaHref="/contact"
      />
      <StandardIntroSection
        badge="Marketing che produce ROI"
        title="Ti manca un metodo chiaro per capire cosa funziona e cosa"
        highlightedText="migliorare?"
        description="Con il Direttore Marketing a Noleggio ottieni una consulenza strategica continua: analisi, orientamento e supporto decisionale per costruire un sistema di marketing efficace, sostenibile e misurabile."
        ctaText="Scopri di più→"
        ctaSubtext="Consulenza strategica • Supporto continuo • Crescita misurabile"
        ctaHref="/contact"
      />

      {/* Services Section with Video Cards */}
      <section id="troppe-campagne" className="py-20 lg:py-32 bg-black relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <ConsistentHeading
            badge="Troppe campagne senza risultati?"
            title="Ti serve una"
            highlightedText="guida"
            subtitle={<>
              Un <strong>partner strategico</strong> che unisce <strong>analisi</strong> e <strong>azione</strong>. Non strumenti, ma <strong>metodo</strong> e <strong>chiarezza</strong> per costruire marketing che produce <strong>ROI misurabile</strong>.
            </>}
            theme="dark"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {marketingServicesData.map((service, index) => (
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
                  basePath="/consulenza-strategica/marketing-services"
                />
            ))}
          </div>
        </div>
      </section>

      <StandardCustomersSection />

      

      <CrossSellRecommendations
        currentService="marketing-services"
        layout="horizontal"
        title="Accelera ulteriormente la crescita"
        subtitle="Il 78% dei clienti Marketing Services aggiunge questi servizi per risultati ancora più potenti"
      />

      <AboutSection />

      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <ConsistentHeading
              title="Domande"
              highlightedText="Frequenti"
            />
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-xl px-6 hover:shadow-md transition-shadow">
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

      

      <MailerLiteContactSectionAnimated />
      
      {/* Contact section */}
      <Footer />
    </div>
    </>
  );
};

export default MarketingServices;