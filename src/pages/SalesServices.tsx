import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CrossSellRecommendations from '@/components/CrossSellRecommendations';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Target, Users, CheckCircle, Sparkles, TrendingUp, BarChart, Star, Play } from "lucide-react";
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

  const services = [
    {
      title: "Audit Strategico del Pitch Commerciale",
      description: "Analisi approfondita di una settimana su posizionamento, offerta e asset per aumentare le risposte e i tassi di chiusura.",
      icon: <Target className="w-8 h-8" />,
      features: [
        "Analisi completa del pitch attuale",
        "Ottimizzazione del posizionamento",
        "Miglioramento degli asset di vendita",
        "Strategie per aumentare i tassi di chiusura"
      ],
      shopifyLink: "https://sryeje-1e.myshopify.com/products/audit-strategico-del-pitch-commerciale?variant=55843346219390",
      contactLink: "/contact?service=Audit%20Strategico%20del%20Pitch%20Commerciale"
    },
    {
      title: "Acceleratore Vendite – Sistema di Vendita",
      description: "Progettazione di ICP, messaging, pipeline, CRM e ritmo operativo per costruire un sistema di vendita completo.",
      icon: <TrendingUp className="w-8 h-8" />,
      features: [
        "Definizione del cliente ideale (ICP)",
        "Creazione di messaggi efficaci",
        "Progettazione pipeline di vendita",
        "Setup CRM e automazioni"
      ],
      shopifyLink: "https://sryeje-1e.myshopify.com/products/acceleratore-vendite-attira-coinvolgi-convinci-costruisci-il-tuo-sistema-di-vendita?variant=55843237036414",
      contactLink: "/contact?service=Convinc!%20Sistema%20di%20Vendita"
    },
    {
      title: "Direttore Vendite – Sessione Strategica",
      description: "Obiettivi, ritmo e piano a 90 giorni con scorecard e revisioni per ottimizzare le performance del team vendite.",
      icon: <Users className="w-8 h-8" />,
      features: [
        "Definizione obiettivi e KPI",
        "Piano strategico a 90 giorni",
        "Scorecard di performance",
        "Sessioni di revisione regolari"
      ],
      shopifyLink: "https://sryeje-1e.myshopify.com/products/direttore-vendite-on-demand-sessione-strategica?variant=55800936366462",
      contactLink: "/contact?service=Direttore%20Vendite%20%E2%80%93%20Sessione%20Strategica"
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
                Costruiti per la <span className="font-semibold text-blue-200">pipeline</span>
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

      {/* Live Social Proof */}
      <LiveSocialProof />

      {/* Intro Section */}
      <section className="bg-white py-24 lg:py-32 relative">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center space-y-12">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#2E8BC0]/10 to-[#87CEEB]/10 rounded-full border border-[#2E8BC0]/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-[#2E8BC0]" />
              <span className="text-[#2E8BC0] font-semibold text-sm">Sales Services Premium</span>
            </div>

            {/* Main Headlines */}
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                Metodo, ritmo e KPI{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-[#2E8BC0] via-[#87CEEB] to-[#2E8BC0] bg-clip-text text-transparent">
                    che i team usano davvero
                  </span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] rounded-full opacity-60"></div>
                </span>
              </h1>
              
              <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mt-16">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-red-600">Problemi comuni:</h3>
                  <ul className="space-y-3 text-lg text-slate-600">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      Riunioni inconsistenti
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      Pitch sparsi e poco efficaci
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      Mancanza di ritmo operativo
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-[#2E8BC0]">Valore che offriamo:</h3>
                  <ul className="space-y-3 text-lg text-slate-600">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#2E8BC0]" />
                      Pitch chiaro e strutturato
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#2E8BC0]" />
                      Sistema end-to-end completo
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#2E8BC0]" />
                      Governance settimanale
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-8">
              <div className="relative inline-block group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] rounded-full blur opacity-60 group-hover:opacity-100 transition-all duration-500"></div>
                <Button 
                  size="xl" 
                  className="relative bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] hover:from-[#87CEEB] hover:to-[#2E8BC0] text-white font-bold px-6 sm:px-12 py-4 sm:py-6 rounded-full text-sm sm:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                >
                  <span className="flex items-center justify-center gap-2 sm:gap-3">
                    <span className="hidden sm:inline">Inizia ora</span>
                    <span className="sm:hidden">Inizia</span>
                    <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scarcity Timer */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <ScarcityTimer type="limited_spots" category="sales" />
        </div>
      </section>

      {/* Client Logos Section */}
      <div className="bg-gradient-to-br from-slate-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2E8BC0]/10 rounded-full border border-[#2E8BC0]/20 mb-6">
              <Users className="w-4 h-4 text-[#2E8BC0]" />
              <span className="text-[#2E8BC0] font-medium text-sm">I nostri clienti</span>
            </div>
            <h4 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Trusted by <span className="text-[#2E8BC0]">500+ companies</span>
            </h4>
            <div className="w-24 h-1 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] rounded-full mx-auto"></div>
          </div>
          
          {/* Logo Slider */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-50 via-white to-slate-50 p-8 border border-slate-200/50">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
            
            <div className="flex animate-[slide_30s_linear_infinite] items-center gap-16">
              {brandLogos.concat(brandLogos).map((logo, index) => (
                <div key={index} className="flex-shrink-0 group">
                  <div className="p-4 rounded-xl bg-white shadow-sm border border-slate-100 group-hover:shadow-md group-hover:border-[#2E8BC0]/20 transition-all duration-300">
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
      <section className="py-20 lg:py-32 bg-black relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <InteractiveServiceSelector 
            services={services.map(service => ({
              ...service,
              id: service.title.toLowerCase().replace(/\s+/g, '-'),
              price: service.title.includes('Audit') ? 2500 : service.title.includes('Acceleratore') ? 3500 : 2800,
              category: service.title.includes('Audit') ? 'basic' : service.title.includes('Acceleratore') ? 'popular' : 'premium',
              results: [
                'Aumento conversion rate del 45%',
                'Riduzione ciclo vendita del 25%', 
                'Incremento valore medio deal del 20%'
              ],
              timeline: '4-6 settimane per implementazione completa'
            }))}
            category="sales"
          />
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <ROICalculator category="sales" />
        </div>
      </section>

      {/* Performance Dashboard */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <PerformanceDashboard category="sales" />
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <EnhancedTestimonials category="sales" />
        </div>
      </section>

      {/* Price Configurator */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <PriceConfigurator 
            services={services.map(service => ({
              ...service,
              id: service.title.toLowerCase().replace(/\s+/g, '-'),
              basePrice: service.title.includes('Audit') ? 2500 : service.title.includes('Acceleratore') ? 3500 : 2800
            }))}
            category="sales"
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-24">
            <div className="inline-flex items-center px-8 py-4 rounded-full text-lg font-bold mb-8 bg-primary/10 text-primary border border-primary/20 transition-all duration-300 hover:scale-105 shadow-lg">
              <Target className="w-6 h-6 mr-3" />
              Il Nostro Processo Collaudato
            </div>
            <h2 className="text-5xl lg:text-7xl font-black leading-[0.85] tracking-tight text-slate-900 mb-12">
              Come{" "}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Funziona
              </span>
            </h2>
            <p className="text-xl lg:text-2xl leading-relaxed text-slate-600 max-w-3xl mx-auto">
              Un approccio sistematico che garantisce <span className="font-bold text-primary">risultati certi</span>
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

      {/* Outcomes Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-glow text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Cosa Ricevi
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Deliverable concreti che trasformano il tuo business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {outcomes.map((outcome, index) => (
              <div key={index} className="flex items-center gap-4 p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
                <CheckCircle className="w-6 h-6 text-white flex-shrink-0" />
                <span className="text-lg font-medium">{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Domande Frequenti
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Risposte alle domande più comuni sui nostri servizi
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-slate-50 rounded-2xl px-6 border-none">
                  <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-6 text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

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
            // Add email to marketing system
          }}
        />
      )}

      <Footer />
    </div>
  );
};

export default SalesServices;