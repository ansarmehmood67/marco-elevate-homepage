import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CrossSellRecommendations from '@/components/CrossSellRecommendations';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Target, Users, CheckCircle, Sparkles, TrendingUp, BarChart, Star, Play, Eye, X } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import TestimonialsCarousel from '../components/TestimonialsCarousel';

// Premium Components
import LiveSocialProof from '@/components/premium/LiveSocialProof';
import ROICalculator from '@/components/premium/ROICalculator';
import ScarcityTimer from '@/components/premium/ScarcityTimer';
import InteractiveServiceSelector from '@/components/premium/InteractiveServiceSelector';
import EnhancedTestimonials from '@/components/premium/EnhancedTestimonials';
import ExitIntentModal from '@/components/premium/ExitIntentModal';
import PerformanceDashboard from '@/components/premium/PerformanceDashboard';

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

  const marketingServices = [
    {
      id: "audit-marketing",
      title: "AUDIT MARKETING LEAD GEN",
      description: "Diagnosi completa di offerta, messaggio e canali. Ricevi un piano per aumentare le risposte e i tassi di riunione.",
      price: 1500,
      features: [
        "Analisi approfondita dell'offerta attuale",
        "Ottimizzazione del messaggio",
        "Valutazione dei canali di marketing",
        "Piano strategico per migliorare le performance"
      ],
      shopifyLink: "https://sryeje-1e.myshopify.com/products/audit-marketing-lead-generation?variant=55866512933246",
      category: "popular",
      icon: <Eye className="w-8 h-8" />,
      results: {
        "Response Rate": "↑ 340%",
        "Cost per Lead": "↓ 62%",
        "Meeting Rate": "↑ 180%"
      },
      timeline: "2-3 settimane"
    },
    {
      id: "lead-gen-campaigns",
      title: "Lead Gen Campaigns",
      description: "Design dell'offerta, audience, creativi e outreach multicanale per riempire il top-of-funnel con lead ICP.",
      price: 3500,
      features: [
        "Design dell'offerta mirata",
        "Creazione audience qualificate",
        "Sviluppo creativi efficaci",
        "Campagne outreach multicanale"
      ],
      shopifyLink: "/products/lead-gen-campaigns",
      category: "basic",
      icon: <Target className="w-8 h-8" />,
      results: {
        "Qualified Leads": "↑ 450%",
        "Pipeline Value": "↑ 280%",
        "Conversion Rate": "↑ 125%"
      },
      timeline: "4-6 settimane"
    }
  ];

  const howItWorksSteps = [
    {
      number: "01",
      title: "Audit & Offerta",
      description: "Analizziamo la situazione attuale e sviluppiamo un'offerta vincente che risuona con il mercato target.",
      icon: Eye
    },
    {
      number: "02",
      title: "Lancio",
      description: "Implementiamo le campagne ottimizzate su tutti i canali selezionati con creativi e messaggi testati.",
      icon: Target
    },
    {
      number: "03",
      title: "Ottimizzazione Settimanale",
      description: "Monitoriamo le performance e ottimizziamo continuamente per massimizzare i risultati.",
      icon: TrendingUp
    }
  ];

  const outcomes = [
    "Scheda dell'offerta ottimizzata",
    "Liste audience segmentate",
    "Piano di tracking completo",
    "Report settimanali dettagliati",
    "Roadmap a 90 giorni"
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
      question: "Come garantite l'allineamento con il team Sales?",
      answer: "Lavoriamo a stretto contatto con il team vendite per definire il profilo del cliente ideale, i criteri di qualificazione lead e i processi di handoff. Organizziamo meeting di allineamento regolari."
    },
    {
      question: "Quanto budget pubblicitario è necessario?",
      answer: "Il budget dipende dal settore e dagli obiettivi. Tipicamente consigliamo un minimo di €3.000-5.000/mese per campagne B2B efficaci. Analizziamo il mercato per fornire raccomandazioni specifiche."
    },
    {
      question: "Quanto tempo serve per vedere i primi risultati?",
      answer: "I primi lead qualificati arrivano solitamente entro 2-4 settimane. Per valutare l'efficacia completa delle campagne e ottimizzare il funnel, servono tipicamente 2-3 mesi."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Live Social Proof Component */}
      <LiveSocialProof />
      
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
                Marketing Services
              </h1>
              
              <p className="text-2xl lg:text-3xl text-gray-100 mb-6 font-light leading-relaxed max-w-2xl">
                Marketing che alimenta la <span className="font-semibold text-blue-200">pipeline</span>
              </p>
              
              <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl">
                Offerte, audience e campagne misurate su opportunità qualificate.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="group font-bold px-10 py-5 text-xl rounded-2xl shadow-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-3xl bg-white text-black hover:bg-gray-100 border-2 border-white/30 backdrop-blur-sm relative overflow-hidden">
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>Pianifica Campagna</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
                
                <Button variant="outline" className="group font-bold px-10 py-5 text-xl rounded-2xl shadow-2xl transition-all duration-500 transform hover:scale-105 border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                  <span className="flex items-center space-x-2">
                    <span>Fai il Quiz</span>
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
                  title="Demo Video Marketing Services"
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
      <section className="py-8">
        <div className="container mx-auto px-6">
          <ScarcityTimer type="limited_spots" category="marketing" />
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-white py-24 lg:py-32 relative">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center space-y-12">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#2E8BC0]/10 to-[#87CEEB]/10 rounded-full border border-[#2E8BC0]/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-[#2E8BC0]" />
              <span className="text-[#2E8BC0] font-semibold text-sm">Marketing Services Premium</span>
            </div>

            {/* Main Headlines */}
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                Un piano, condiviso con Sales.{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-[#2E8BC0] via-[#87CEEB] to-[#2E8BC0] bg-clip-text text-transparent">
                    Un set di numeri.
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
                      Basse risposte alle campagne
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      Contenuti casuali e dispersivi
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      Nessun collegamento con le vendite
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-[#2E8BC0]">Valore che offriamo:</h3>
                  <ul className="space-y-3 text-lg text-slate-600">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#2E8BC0]" />
                      Offerta validata dal mercato
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#2E8BC0]" />
                      ICP mappato accuratamente
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#2E8BC0]" />
                      Costo per opportunità tracciato
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
                  className="relative bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] hover:from-[#87CEEB] hover:to-[#2E8BC0] text-white font-bold px-12 py-6 rounded-full text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <span className="flex items-center gap-3">
                    Inizia ora
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
              Calcola il tuo <span className="text-[#2E8BC0]">ROI Marketing</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Scopri quanto potresti guadagnare migliorando le tue campagne marketing
            </p>
          </div>
          <ROICalculator category="marketing" />
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
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              I nostri <span className="text-[#55ACEE]">servizi</span>
            </h2>
            <p className="text-xl text-white/80 max-w-4xl mx-auto">
              Due servizi specializzati per trasformare il tuo marketing in una macchina di lead generation
            </p>
          </div>

          <InteractiveServiceSelector services={marketingServices} category="marketing" />
        </div>
      </section>

      {/* Performance Dashboard Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              <span className="text-[#2E8BC0]">Performance</span> in tempo reale
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Monitora le metriche che contano davvero per il tuo business
            </p>
          </div>
          <PerformanceDashboard category="marketing" />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Come <span className="text-[#2E8BC0]">lavoriamo</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {howItWorksSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="relative mb-8">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] flex items-center justify-center text-white text-3xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300">
                      {step.number}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center">
                      <IconComponent className="w-4 h-4 text-[#2E8BC0]" />
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
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <EnhancedTestimonials category="marketing" />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Domande <span className="text-[#2E8BC0]">frequenti</span>
              </h2>
            </div>

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

      {/* Final CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8">
              Pronto a trasformare il tuo <span className="text-yellow-300">marketing?</span>
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Inizia oggi stesso e trasforma il tuo marketing in una macchina di generazione lead qualificati.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="xl" className="bg-white text-[#2E8BC0] hover:bg-gray-100 font-bold px-12 py-6 rounded-full text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <span className="flex items-center gap-3">
                  Inizia il tuo progetto
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Button>
              
              <Button size="xl" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#2E8BC0] font-bold px-12 py-6 rounded-full text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
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
      <CrossSellRecommendations currentService="marketing" />

      {/* Exit Intent Modal */}
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