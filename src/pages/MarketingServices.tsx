import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import StandardIntroSection from '@/components/shared/StandardIntroSection';
import StandardCustomersSection from '@/components/shared/StandardCustomersSection';
import StandardQuoteSection from '@/components/shared/StandardQuoteSection';
import CrossSellRecommendations from '@/components/CrossSellRecommendations';
import AboutSection from '@/components/AboutSection';
import MailerLiteContactSection from '@/components/MailerLiteContactSection';
import PremiumServicesCarouselOptimized from '@/components/PremiumServicesCarouselOptimized';
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, CheckCircle, TrendingUp, BarChart, Play } from "lucide-react";
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

const MarketingServices = () => {

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
      shopifyUrl: "https://sryeje-1e.myshopify.com/products/audit-marketing-lead-generation?variant=55866512933246",
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
      shopifyUrl: "https://sryeje-1e.myshopify.com/products/audit-marketing-lead-generation?variant=55866512933246",
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
      shopifyUrl: "https://sryeje-1e.myshopify.com/products/audit-marketing-lead-generation?variant=55866512933246",
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
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-2 px-0 transition-all duration-500 relative overflow-hidden bg-black">
        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative min-h-[85vh] rounded-3xl overflow-hidden transition-all duration-500 shadow-2xl bg-black border border-gray-800/30">
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" style={{ zIndex: 1 }}>
              <source src="https://res.cloudinary.com/dufcnrcfe/video/upload/v1753296146/Untitled_design_14_s2pudj.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/70" style={{ zIndex: 2 }} />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 to-transparent" style={{ zIndex: 3 }} />
            
            <div className="relative lg:absolute lg:inset-0 flex flex-col justify-center lg:justify-end p-4 sm:p-6 lg:p-12 pt-6 sm:pt-10 lg:pt-24 pb-10 sm:pb-12 lg:pb-12 z-20">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 sm:gap-6 lg:gap-8">
                {/* Left copy */}
                <div className="flex-1 max-w-3xl">
                  <div className="inline-flex items-center px-8 py-4 rounded-full text-lg font-bold mb-8 transition-all duration-300 hover:scale-105 shadow-lg bg-white/10 text-white border border-white/20 text-center lg:text-left">
                    Direttore Marketing a Noleggio
                  </div>
                  <h1 className="text-6xl sm:text-6xl lg:text-7xl font-black leading-tight mb-8 text-white drop-shadow-2xl bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent text-center lg:text-left">
                    Consulenza Marketing che produce ROI
                  </h1>
                  <p className="text-2xl sm:text-5xl lg:text-5xl text-gray-100 mb-6 font-light leading-relaxed max-w-2xl text-center lg:text-left">
                    Il tuo Direttore Marketing a Noleggio, orientato ai risultati
                  </p>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl text-center lg:text-left">
                    Analisi, strategia ed esecuzione: con un approccio data-driven trasformiamo ogni investimento marketing in crescita concreta, senza sprechi di tempo e budget. Grazie al Direttore Marketing a Noleggio hai la guida esperta di cui hai bisogno, solo quando ti serve.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Button variant="outline" className="group font-bold px-6 lg:px-10 py-3 lg:py-5 text-base lg:text-lg rounded-2xl shadow-2xl transition-all duration-500 transform hover:scale-105 border-2 border-white/30 text-white hover:bg-white/10">
                      <span className="flex items-center space-x-2">
                        <span>Scopri di più</span>
                        <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
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
                        title="Demo Video Marketing Services"
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>

                    {/* Label: mobile=below video, desktop=floating above */}
                    <div className="static sm:absolute top-auto sm:-top-12 left-auto sm:left-1/2 translate-x-0 sm:-translate-x-1/2 mt-1 sm:mt-0 w-full sm:w-auto flex sm:block justify-center z-10">
                      <span className="inline-flex items-center px-4 sm:px-6 py-1.5 sm:py-2 bg-gradient-to-r from-primary/90 via-primary-glow/90 to-primary/90 text-white text-xs sm:text-sm font-bold rounded-full backdrop-blur-xl border border-white/40 shadow-xl whitespace-nowrap">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white mr-2 animate-pulse" />
                        Marketing Services Demo
                      </span>
                    </div>
                  </div>
                </div>
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
      <section className="py-20 lg:py-32 bg-black relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          {/* Custom Two-Column Header */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto items-start">
              {/* Left Column: Badge + Main Heading */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center px-8 py-4 rounded-full text-lg font-bold mb-8 transition-all duration-300 hover:scale-105 shadow-lg bg-white/10 text-white border border-white/20">
                  Troppe campagne senza risultati?
                </div>
                
                <h2 className="text-5xl lg:text-7xl font-black leading-[0.85] tracking-tight text-white">
                  Non ti servono altri strumenti: ti serve una{" "}
                  <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                    guida
                  </span>
                </h2>
              </div>
              
              {/* Right Column: Subheading + Paragraph */}
              <div className="space-y-6 pt-8 lg:pt-16">
                <h3 className="text-2xl lg:text-3xl font-bold text-white/90 leading-tight">
                  Troppe campagne senza risultati?
                </h3>
                
                <p className="text-xl text-white/70 leading-relaxed">
                  Con il Direttore Marketing a Noleggio non hai un fornitore, ma un partner strategico. Servizi mirati che uniscono analisi e azione per darti metodo, chiarezza e risultati.
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {marketingServices.map((service, index) => (
                <VideoServiceCard
                  key={index}
                  title={service.title}
                  subtitle={service.subtitle}
                  description={service.description}
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

      <StandardCustomersSection />

      {/* Process Section - Custom for Marketing Services */}
      <section className="py-32 px-6 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-24">
            <div className="inline-flex items-center px-8 py-4 rounded-full text-lg font-bold mb-8 transition-all duration-300 hover:scale-105 shadow-lg bg-primary/10 text-primary border border-primary/20">
              Dal problema alla soluzione in 3 step
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-black leading-[0.85] tracking-tight mb-12 text-slate-900">
              Come funziona la consulenza{" "}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                marketing?
              </span>
            </h2>
            
            <p className="text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto text-slate-600">
              Ogni azienda è diversa, ma il nostro approccio è sempre lo stesso: semplice, concreto e orientato ai risultati. Con un Direttore Marketing a Noleggio al tuo fianco, in tre step chiari passiamo dall'analisi alla strategia fino all'esecuzione, per garantirti miglioramenti reali e misurabili.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {howItWorksSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl mb-6 mx-auto">
                  <span className="text-white font-black text-2xl">{step.number}</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-slate-900 text-center">
                  {step.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed text-center">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
      <PremiumServicesCarouselOptimized />
        </div>
      </section>

      <MailerLiteContactSection />

      <CrossSellRecommendations
        currentService="marketing-services"
        layout="horizontal"
        title="Accelera ulteriormente la crescita"
        subtitle="Il 78% dei clienti Marketing Services aggiunge questi servizi per risultati ancora più potenti"
      />


      <Footer />
    </div>
  );
};

export default MarketingServices;