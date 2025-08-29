import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import StandardIntroSection from '@/components/shared/StandardIntroSection';
import StandardCustomersSection from '@/components/shared/StandardCustomersSection';
import StandardQuoteSection from '@/components/shared/StandardQuoteSection';
import CrossSellRecommendations from '@/components/CrossSellRecommendations';
import AboutSection from '@/components/AboutSection';
import PremiumServicesCarouselOptimized from '@/components/PremiumServicesCarouselOptimized';
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, BarChart, TrendingUp, Play } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// Premium Components
import LiveSocialProof from '@/components/premium/LiveSocialProof';
import ROICalculator from '@/components/premium/ROICalculator';
import EnhancedTestimonials from '@/components/premium/EnhancedTestimonials';
import ExitIntentModal from '@/components/premium/ExitIntentModal';
import PerformanceDashboard from '@/components/premium/PerformanceDashboard';

// Shared Components
import VideoServiceCard from '@/components/shared/VideoServiceCard';
import MarcoScarcityTimer from '@/components/shared/MarcoScarcityTimer';
import ConsistentHowItWorks from '@/components/shared/ConsistentHowItWorks';
import ConsistentHeading from '@/components/shared/ConsistentHeading';
import PremiumFinalCTA from '@/components/shared/PremiumFinalCTA';

const SalesServices = () => {
  const [showExitModal, setShowExitModal] = useState(false);
  const [mouseLeaveCount, setMouseLeaveCount] = useState(0);

  // Exit intent detection
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && mouseLeaveCount === 0) {
        setMouseLeaveCount(1);
        setShowExitModal(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [mouseLeaveCount]);

  const salesServices = [
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
    },
    {
      title: "Acceleratore Vendite – Sistema di Vendita",
      subtitle: "Sistema completo per costruire una macchina di vendita",
      features: [
        "Definizione del cliente ideale (ICP)",
        "Creazione di messaggi efficaci e persuasivi",
        "Progettazione pipeline di vendita strutturata",
        "Setup CRM e automazioni avanzate"
      ],
      youtubeUrl: "https://www.youtube.com/embed/uPhcQHDoux0?si=TzGArSKPaTTz4hEe",
      shopifyUrl: "https://sryeje-1e.myshopify.com/products/audit-strategico-del-pitch-commerciale?variant=55843346219390",
      category: "premium" as const,
    },
    {
      title: "Direttore Vendite – Sessione Strategica",
      subtitle: "Leadership commerciale per ottimizzare le performance del team",
      features: [
        "Definizione obiettivi e KPI di performance",
        "Piano strategico a 90 giorni strutturato",
        "Scorecard di performance del team",
        "Sessioni di revisione e coaching regolari"
      ],
      youtubeUrl: "https://www.youtube.com/embed/uPhcQHDoux0?si=TzGArSKPaTTz4hEe",
      shopifyUrl: "https://sryeje-1e.myshopify.com/products/audit-strategico-del-pitch-commerciale?variant=55843346219390",
      category: "basic" as const,
    }
  ];

  const howItWorksSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "Analizziamo il tuo business attuale, i processi di vendita e identifichiamo le aree di miglioramento.",
      icon: Target
    },
    {
      number: "02",
      title: "Costruzione del Sistema",
      description: "Sviluppiamo strategie personalizzate, processi ottimizzati e strumenti per il tuo team.",
      icon: Users
    },
    {
      number: "03",
      title: "Esecuzione con KPI",
      description: "Implementiamo il sistema con monitoraggio settimanale e ottimizzazioni continue.",
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
            <div className="absolute bottom-16 left-16 max-w-3xl" style={{ zIndex: 4 }}>
              <h1 className="text-6xl lg:text-8xl font-black leading-tight mb-8 text-white drop-shadow-2xl bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Sales Services
              </h1>
              
              <p className="text-2xl lg:text-3xl text-gray-100 mb-6 font-light leading-relaxed max-w-2xl">
                Sistemi di vendita che <span className="font-semibold text-blue-200">funzionano davvero</span>
              </p>
              
              <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl">
                Dal design del pitch alle sessioni di leadership che aumentano i tassi di vincita.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="group font-bold px-10 py-5 text-xl rounded-2xl shadow-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-3xl bg-white text-black hover:bg-gray-100 border-2 border-white/30 backdrop-blur-sm relative overflow-hidden">
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>Parla con Sales</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
                
                <Button variant="outline" className="group font-bold px-10 py-5 text-xl rounded-2xl shadow-2xl transition-all duration-500 transform hover:scale-105 border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                  <span className="flex items-center space-x-2">
                    <span>Quiz 60 secondi</span>
                    <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </span>
                </Button>
              </div>
            </div>

            {/* YouTube Video Player - Bottom Right */}
            <div className="absolute bottom-12 right-12 z-20">
              <div className="w-80 h-48 rounded-xl overflow-hidden shadow-2xl border-2 border-white/20 backdrop-blur-sm">
                <iframe
                  src="https://www.youtube.com/embed/ZocHP6N9Aig"
                  title="Demo Video Sales Services"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <StandardIntroSection
        badge="SALES SERVICES PREMIUM"
        title="Metodo, ritmo e KPI che i team usano"
        highlightedText="davvero"
        description="Sviluppiamo strategie personalizzate, processi ottimizzati e strumenti per il tuo team. Dal pitch alla chiusura, ogni fase è progettata per massimizzare i risultati."
        ctaText="Inizia ora"
        ctaHref="/contact"
      />
      <StandardCustomersSection />
      <StandardQuoteSection
        mainQuote="Processi strutturati,"
        highlightedQuote="risultati moltiplicati"
        description="Trasformiamo le vendite in un sistema prevedibile e scalabile"
        ctaText="Parla con Sales"
        ctaHref="/contact"
      />

      {/* Services Section with Video Cards */}
      <section className="py-20 lg:py-32 bg-black relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <ConsistentHeading
            badge="I Nostri Servizi Sales"
            title="Servizi"
            highlightedText="Vendite"
            subtitle="Tre servizi specializzati per trasformare il tuo approccio alle vendite in un sistema vincente"
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
              />
            ))}
          </div>
        </div>
      </section>

      {/* Consistent How It Works Section */}
      <ConsistentHowItWorks steps={howItWorksSteps} />

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

      <PremiumFinalCTA category="sales" />

      {/* Cross-Sell Recommendations */}
      <CrossSellRecommendations
        currentService="sales-services"
        layout="horizontal"
        title="Accelera ulteriormente la crescita"
        subtitle="Il 78% dei clienti Sales Services aggiunge questi servizi per risultati ancora più potenti"
      />

      {/* Exit Intent Modal */}
      {showExitModal && (
        <ExitIntentModal
          category="sales"
          onClose={() => setShowExitModal(false)}
          onCapture={(email) => {
            console.log('Email captured:', email);
            setShowExitModal(false);
          }}
        />
      )}

      <Footer />
    </div>
  );
};

export default SalesServices;