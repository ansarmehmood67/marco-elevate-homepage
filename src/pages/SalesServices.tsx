import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CrossSellRecommendations from '@/components/CrossSellRecommendations';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Target, Users, CheckCircle, Sparkles, TrendingUp, BarChart, Star, Play, Zap, DollarSign, X } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import TestimonialsCarousel from '../components/TestimonialsCarousel';

// Premium Components
import PriceConfigurator from '@/components/premium/PriceConfigurator';
import LiveSocialProof from '@/components/premium/LiveSocialProof';
import ROICalculator from '@/components/premium/ROICalculator';
import ScarcityTimer from '@/components/premium/ScarcityTimer';
import InteractiveServiceSelector from '@/components/premium/InteractiveServiceSelector';
import EnhancedTestimonials from '@/components/premium/EnhancedTestimonials';
import ExitIntentModal from '@/components/premium/ExitIntentModal';
import PerformanceDashboard from '@/components/premium/PerformanceDashboard';

const SalesServices = () => {
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

  const salesServices = [
    {
      id: "audit-strategico",
      title: "Audit Strategico del Pitch Commerciale",
      description: "Analisi approfondita di una settimana su posizionamento, offerta e asset per aumentare le risposte e i tassi di chiusura.",
      price: 2200,
      features: [
        "Analisi completa del pitch attuale",
        "Ottimizzazione del posizionamento",
        "Miglioramento degli asset di vendita",
        "Strategie per aumentare i tassi di chiusura"
      ],
      shopifyLink: "https://sryeje-1e.myshopify.com/products/audit-strategico-del-pitch-commerciale?variant=55843346219390",
      category: "premium" as const,
      icon: <Target className="w-8 h-8" />,
      results: ["Tasso di chiusura +340%", "Revenue medio per deal +125%", "Ciclo di vendita -40%"],
      timeline: "1-2 settimane"
    },
    {
      id: "acceleratore-vendite",
      title: "Acceleratore Vendite – Sistema di Vendita",
      description: "Progettazione di ICP, messaging, pipeline, CRM e ritmo operativo per costruire un sistema di vendita completo.",
      price: 4500,
      features: [
        "Definizione del cliente ideale (ICP)",
        "Creazione di messaggi efficaci",
        "Progettazione pipeline di vendita",
        "Setup CRM e automazioni"
      ],
      shopifyLink: "https://sryeje-1e.myshopify.com/products/acceleratore-vendite-attira-coinvolgi-convinci-costruisci-il-tuo-sistema-di-vendita?variant=55843237036414",
      category: "popular" as const,
      icon: <TrendingUp className="w-8 h-8" />,
      results: ["Pipeline growth +280%", "Lead conversion +180%", "Team performance +220%"],
      timeline: "3-4 settimane"
    },
    {
      id: "direttore-vendite",
      title: "Direttore Vendite – Sessione Strategica",
      description: "Obiettivi, ritmo e piano a 90 giorni con scorecard e revisioni per ottimizzare le performance del team vendite.",
      price: 1800,
      features: [
        "Definizione obiettivi e KPI",
        "Piano strategico a 90 giorni",
        "Scorecard di performance",
        "Sessioni di revisione regolari"
      ],
      shopifyLink: "https://sryeje-1e.myshopify.com/products/direttore-vendite-on-demand-sessione-strategica?variant=55800936366462",
      category: "basic" as const,
      icon: <Users className="w-8 h-8" />,
      results: ["Team efficiency +150%", "KPI clarity +200%", "Goal achievement +175%"],
      timeline: "2-3 settimane"
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

  const outcomes = [
    "Documento del pitch ottimizzato",
    "Sequenze e template personalizzati",
    "Fasi della pipeline strutturate",
    "Dashboard e report automatici",
    "Ritmo di revisione settimanale"
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
      
      {/* Live Social Proof Component */}
      <LiveSocialProof />
      
      {/* Hero Section - Enhanced with premium design */}
      <section className="pt-24 pb-2 px-0 transition-all duration-500 relative overflow-hidden bg-gradient-to-br from-slate-900 via-black to-slate-800">
        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative min-h-[85vh] rounded-3xl overflow-hidden transition-all duration-500 shadow-2xl bg-gradient-to-br from-black via-slate-900 to-black border border-primary/20">
            {/* Video Background */}
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-60"
              style={{ zIndex: 1 }}
            >
              <source src="https://res.cloudinary.com/dufcnrcfe/video/upload/v1753296146/Untitled_design_14_s2pudj.mp4" type="video/mp4" />
            </video>
            
            {/* Premium gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-black/80 to-secondary/30" style={{ zIndex: 2 }} />
            
            {/* Bottom gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/95 to-transparent" style={{ zIndex: 3 }} />
            
            {/* Enhanced Content */}
            <div className="absolute bottom-16 left-16 max-w-4xl" style={{ zIndex: 4 }}>
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full border border-primary/30 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-primary font-semibold text-sm">Premium Sales Services</span>
                </span>
              </div>
              
              <h1 className="text-6xl lg:text-8xl font-black leading-tight mb-8 text-white drop-shadow-2xl">
                <span className="bg-gradient-to-r from-white via-primary-foreground to-secondary bg-clip-text text-transparent">
                  Sales Services
                </span>
              </h1>
              
              <p className="text-2xl lg:text-3xl text-gray-100 mb-6 font-light leading-relaxed max-w-3xl">
                Costruiti per la <span className="font-semibold text-primary bg-primary/10 px-2 py-1 rounded">pipeline</span>
              </p>
              
              <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl">
                Dal design del pitch alle sessioni di leadership che aumentano i tassi di vincita.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="xl" className="group font-bold px-12 py-6 text-xl rounded-2xl shadow-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-3xl bg-white text-black hover:bg-gray-100 border-2 border-white/30 backdrop-blur-sm relative overflow-hidden">
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>Parla con Sales</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
                
                <Button size="xl" variant="outline" className="group font-bold px-12 py-6 text-xl rounded-2xl shadow-2xl transition-all duration-500 transform hover:scale-105 border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                  <span className="flex items-center space-x-2">
                    <span>Fai il Quiz</span>
                    <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </span>
                </Button>
              </div>
            </div>

            {/* YouTube Video Player - Bottom Right */}
            <div className="absolute bottom-12 right-12 z-20">
              <div className="w-80 h-48 rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/30 backdrop-blur-sm bg-black/20">
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

      {/* Scarcity Timer */}
      <section className="py-8 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6">
          <ScarcityTimer type="limited_spots" category="sales" />
        </div>
      </section>

      {/* Premium Stats Strip */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M30 30c0-16.569 13.431-30 30-30v60c-16.569 0-30-13.431-30-30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.2
        }}></div>
      </section>

      {/* Intro Section - Enhanced */}
      <section className="bg-gradient-to-br from-white via-primary/5 to-secondary/5 py-24 lg:py-32 relative">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center space-y-12">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-primary/20 backdrop-blur-sm shadow-lg">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary font-semibold text-sm">Sales Services Premium</span>
            </div>

            {/* Main Headlines */}
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                Da processi casuali a{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                    sistema prevedibile
                  </span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full opacity-60"></div>
                </span>
              </h1>
              
              <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mt-16">
                <div className="space-y-6 p-8 rounded-2xl bg-red-50 border border-red-100">
                  <h3 className="text-2xl font-bold text-red-600 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                      <X className="w-4 h-4 text-red-600" />
                    </div>
                    Problemi comuni:
                  </h3>
                  <ul className="space-y-3 text-lg text-slate-700">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      Vendite inconsistenti e imprevedibili
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      Team demotivato senza direzione chiara
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      Perdita di opportunità per mancanza di processo
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-6 p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20">
                  <h3 className="text-2xl font-bold text-primary flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    Valore che offriamo:
                  </h3>
                  <ul className="space-y-3 text-lg text-slate-700">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      Sistema di vendita scalabile e ripetibile
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      Team allineato con KPI chiari
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      Crescita prevedibile e sostenibile
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Enhanced CTA Button */}
            <div className="pt-8">
              <div className="relative inline-block group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-60 group-hover:opacity-100 transition-all duration-500"></div>
                <Button 
                  size="xl" 
                  className="relative bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-bold px-12 py-6 rounded-full text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <span className="flex items-center gap-3">
                    Trasforma le tue vendite
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Calcola il tuo <span className="text-primary">ROI Sales</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Scopri quanto potresti guadagnare ottimizzando il tuo sistema di vendita
            </p>
          </div>
          <ROICalculator category="sales" />
        </div>
      </section>

      {/* Client Logos Section - Enhanced */}
      <div className="bg-gradient-to-br from-slate-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium text-sm">I nostri clienti</span>
            </div>
            <h4 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Trusted by <span className="text-primary">500+ companies</span>
            </h4>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
          </div>
          
          {/* Logo Slider */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-50 via-white to-slate-50 p-8 border border-slate-200/50 shadow-lg">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
            
            <div className="flex animate-[slide_30s_linear_infinite] items-center gap-16">
              {brandLogos.concat(brandLogos).map((logo, index) => (
                <div key={index} className="flex-shrink-0 group">
                  <div className="p-4 rounded-xl bg-white shadow-sm border border-slate-100 group-hover:shadow-md group-hover:border-primary/20 transition-all duration-300">
                    <img 
                      src={logo} 
                      alt={`Brand ${index + 1}`}
                      className="h-12 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <style>{`
          @keyframes slide {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>
      </div>

      {/* Interactive Service Selector */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-black to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M30 30c0-16.569 13.431-30 30-30v60c-16.569 0-30-13.431-30-30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              I nostri <span className="text-primary">servizi</span>
            </h2>
            <p className="text-xl text-white/80 max-w-4xl mx-auto">
              Tre servizi specializzati per trasformare il tuo team di vendita in una macchina di crescita
            </p>
          </div>

          <InteractiveServiceSelector services={salesServices} category="sales" />
        </div>
      </section>

      {/* Performance Dashboard Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              <span className="text-primary">Performance</span> in tempo reale
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Monitora le metriche che contano davvero per il tuo team vendite
            </p>
          </div>
          <PerformanceDashboard category="sales" />
        </div>
      </section>

      {/* How It Works Section - Enhanced */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Come <span className="text-primary">lavoriamo</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Un processo testato e comprovato per trasformare il tuo team vendite
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {howItWorksSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="relative mb-8">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white text-3xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      {step.number}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center border border-primary/20">
                      <IconComponent className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-black to-slate-800">
        <div className="container mx-auto px-6">
          <EnhancedTestimonials category="sales" />
        </div>
      </section>

      {/* FAQ Section - Enhanced */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Domande <span className="text-primary">frequenti</span>
              </h2>
              <p className="text-xl text-slate-600">
                Risposte alle domande più comuni sui nostri servizi sales
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border rounded-xl px-6 hover:shadow-md transition-shadow bg-gradient-to-r from-white to-primary/5"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-primary py-6">
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

      {/* Final CTA Section - Enhanced */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-16.569 13.431-30 30-30v60c-16.569 0-30-13.431-30-30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8">
              Pronto a trasformare le tue <span className="text-yellow-300">vendite?</span>
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Inizia oggi stesso e trasforma il tuo team vendite in una macchina di crescita prevedibile e sostenibile.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="xl" className="bg-white text-primary hover:bg-gray-100 font-bold px-12 py-6 rounded-full text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <span className="flex items-center gap-3">
                  Inizia il tuo progetto
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Button>
              
              <Button size="xl" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold px-12 py-6 rounded-full text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <span className="flex items-center gap-3">
                  Parla con un esperto
                  <Users className="w-5 h-5" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-sell Recommendations */}
      <CrossSellRecommendations currentService="sales" />

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