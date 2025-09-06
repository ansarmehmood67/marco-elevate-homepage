import React, { useState, useEffect } from 'react';
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
import ExitIntentModal from '@/components/premium/ExitIntentModal';
import PerformanceDashboard from '@/components/premium/PerformanceDashboard';

// Shared Components
import VideoServiceCard from '@/components/shared/VideoServiceCard';
import MarcoScarcityTimer from '@/components/shared/MarcoScarcityTimer';
import ConsistentHowItWorks from '@/components/shared/ConsistentHowItWorks';
import ConsistentHeading from '@/components/shared/ConsistentHeading';
import PremiumFinalCTA from '@/components/shared/PremiumFinalCTA';

const MarketingServices = () => {
  const [showExitModal, setShowExitModal] = useState(false);
  const [isExitIntent, setIsExitIntent] = useState(false);

  // Exit intent detection
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !isExitIntent) {
        setIsExitIntent(true);
        setShowExitModal(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [isExitIntent]);

  const marketingServices = [
    {
      title: "Audit Marketing Lead Generation",
      subtitle: "Diagnosi completa per ottimizzare le performance",
      features: [
        "Analisi approfondita dell'offerta attuale",
        "Ottimizzazione del messaggio e posizionamento",
        "Valutazione dei canali di marketing esistenti",
        "Piano strategico per migliorare le performance"
      ],
      youtubeUrl: "https://www.youtube.com/embed/uPhcQHDoux0?si=AkujdTksF3U8sK1X",
      shopifyUrl: "https://sryeje-1e.myshopify.com/products/audit-marketing-lead-generation?variant=55866512933246",
      category: "popular" as const,
      price: "€2.900"
    },
    {
      title: "Lead Generation Campaigns",
      subtitle: "Campagne multicanale per alimentare la pipeline",
      features: [
        "Design dell'offerta mirata al target",
        "Creazione audience qualificate e segmentate",
        "Sviluppo creativi efficaci e performanti",
        "Outreach multicanale coordinato"
      ],
      youtubeUrl: "https://www.youtube.com/embed/uPhcQHDoux0?si=AkujdTksF3U8sK1X",
      shopifyUrl: "https://sryeje-1e.myshopify.com/products/audit-marketing-lead-generation?variant=55866512933246",
      category: "premium" as const,
      price: "€3.100"
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
                  <h1 className="text-6xl lg:text-8xl font-black leading-tight mb-8 text-white drop-shadow-2xl bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent text-center lg:text-left">
                    Marketing Services
                  </h1>
                  <p className="text-2xl lg:text-3xl text-gray-100 mb-6 font-light leading-relaxed max-w-2xl text-center lg:text-left">
                    Marketing che alimenta la <span className="font-semibold text-blue-200">pipeline</span>
                  </p>
                  <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl text-center lg:text-left">
                    Offerte, audience e campagne misurate su opportunità qualificate.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Button className="group font-bold px-10 py-5 text-xl rounded-2xl shadow-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-3xl bg-white text-black hover:bg-gray-100">
                      <span className="relative z-10 flex items-center space-x-2">
                        <span>Pianifica Campagna</span>
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                    <Button variant="outline" className="group font-bold px-10 py-5 text-xl rounded-2xl shadow-2xl transition-all duration-500 transform hover:scale-105 border-2 border-white/30 text-white hover:bg-white/10">
                      <span className="flex items-center space-x-2">
                        <span>Fai il Quiz</span>
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

      <StandardIntroSection
        badge="MARKETING SERVICES PREMIUM"
        title="Marketing che produce"
        highlightedText="ROI"  
        description="Campagne mirate, automation intelligente e strategie data-driven per massimizzare il ritorno sull'investimento"
        ctaText="Inizia ora"
        ctaHref="/contact"
      />
      <StandardCustomersSection />
      <StandardQuoteSection
        mainQuote="Marketing che"
        highlightedQuote="produce ROI"
        description="Campagne mirate, automation intelligente e strategie data-driven per massimizzare il ritorno sull'investimento"
        ctaText="Pianifica campagna"
        ctaHref="/contact"
      />

      {/* Services Section with Video Cards */}
      <section className="py-20 lg:py-32 bg-black relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <ConsistentHeading
            badge="I Nostri Servizi Marketing"
            title="Servizi"
            highlightedText="Marketing"
            subtitle="Due servizi specializzati per trasformare il tuo marketing in una macchina di lead generation"
            theme="dark"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {marketingServices.map((service, index) => (
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

      <ConsistentHowItWorks steps={howItWorksSteps} />

      {/* ROI Calculator Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <ConsistentHeading
            badge="Calcola il Tuo ROI"
            title="Calcola il Tuo"
            highlightedText="ROI"
            subtitle="Scopri quanto potresti guadagnare migliorando le tue campagne marketing"
          />
          <ROICalculator category="marketing" />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <ConsistentHeading
            title="Performance"
            highlightedText="Dashboard"
            subtitle="Monitora le metriche che contano davvero per il tuo business"
          />
          <PerformanceDashboard category="marketing" />
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <ConsistentHeading
            title="Cosa dicono"
            highlightedText="i nostri clienti"
            subtitle="Storie di successo di aziende che hanno trasformato il loro marketing con i nostri servizi"
          />
          <EnhancedTestimonials category="marketing" />
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

      {showExitModal && (
        <ExitIntentModal
          category="marketing"
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

export default MarketingServices;