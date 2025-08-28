import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import StandardIntroSection from '@/components/shared/StandardIntroSection';
import StandardCustomersSection from '@/components/shared/StandardCustomersSection';
import StandardQuoteSection from '@/components/shared/StandardQuoteSection';
import CrossSellRecommendations from '@/components/CrossSellRecommendations';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Target, Users, CheckCircle, Sparkles, TrendingUp, BarChart, Star, Play, Zap, Youtube, X } from "lucide-react";
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

const ConsultationServices = () => {
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

  const consultationServices = [
    {
      id: "sales-shift",
      title: "Sales Shift – dall'outsourcing tradizionale",
      description: "Valutazione della readiness, ruoli e fornitori; progettazione di un percorso pragmatico verso un modello di outsourcing.",
      price: 2500,
      features: [
        "Assessment completo della situazione attuale",
        "Valutazione fornitori e partner",
        "Roadmap di transizione personalizzata",
        "Supporto nell'implementazione"
      ],
      shopifyLink: "https://sryeje-1e.myshopify.com/products/sales-shift-dal-vecchio-modello-al-nuovo-sistema-commerciale?variant=55802984104318",
      category: "premium" as const,
      icon: <Zap className="w-8 h-8" />,
      results: [
        "Cost Reduction: ↓ 45%",
        "Time to Market: ↓ 60%",
        "Process Efficiency: ↑ 200%"
      ],
      timeline: "4-6 settimane"
    },
    {
      id: "youtube-consultant",
      title: "YouTube Consultant",
      description: "Crescita dell'autorità mappata sui problemi dei buyer; riproposizione in shorts/ads per generare domanda.",
      price: 1800,
      features: [
        "Strategia di contenuto mirata",
        "Ottimizzazione per l'autorità",
        "Repurposing per shorts e ads",
        "Generazione della domanda"
      ],
      shopifyLink: "/products/consulente-youtube",
      category: "basic" as const,
      icon: <Youtube className="w-8 h-8" />,
      results: [
        "Authority Growth: ↑ 320%",
        "Lead Generation: ↑ 250%",
        "Brand Recognition: ↑ 180%"
      ],
      timeline: "6-8 settimane"
    }
  ];

  const howItWorksSteps = [
    {
      number: "01",
      title: "Discovery Call",
      description: "Analizziamo la situazione attuale e definiamo gli obiettivi strategici per il progetto.",
      icon: Target
    },
    {
      number: "02",
      title: "Agenda + Milestones",
      description: "Creiamo un piano dettagliato con milestone chiari e scadenze realistiche.",
      icon: BarChart
    },
    {
      number: "03",
      title: "Check-in con Azioni",
      description: "Sessioni di follow-up regolari con azioni concrete e supporto continuo.",
      icon: TrendingUp
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
                Consultation Services
              </h1>
              
              <p className="text-2xl lg:text-3xl text-gray-100 mb-6 font-light leading-relaxed max-w-2xl">
                Consulenza one-to-one per sbloccare il <span className="font-semibold text-blue-200">momentum</span>
              </p>
              
              <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl">
                Guida pratica focalizzata sui risultati di fatturato.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="group font-bold px-10 py-5 text-xl rounded-2xl shadow-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-3xl bg-white text-black hover:bg-gray-100 border-2 border-white/30 backdrop-blur-sm relative overflow-hidden">
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>Richiedi Consulenza</span>
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
                  title="Demo Video Consultation Services"
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
          <ScarcityTimer type="consultation_slots" category="consultation" />
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-12 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB]">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-2xl font-bold text-white">
              "Piani chiari, esecuzione più veloce, KPI misurabili"
            </p>
          </div>
        </div>
      </section>

      <StandardIntroSection
        badge="CONSULTATION SERVICES PREMIUM"
        title="Dalla confusione alla chiarezza"
        highlightedText="strategica"
        description="Consulenza one-to-one per sbloccare il momentum. Guida pratica focalizzata sui risultati di fatturato con prospettiva esterna qualificata, focus a 90 giorni e accountability strutturata."
        ctaText="Inizia ora"
        ctaHref="/contact"
      />
      <StandardCustomersSection />
      <StandardQuoteSection
        mainQuote="Piani chiari, esecuzione più veloce,"
        highlightedQuote="KPI misurabili"
        description="Trasformiamo la confusione in chiarezza strategica con una guida esperta orientata ai risultati business tangibili"
        ctaText="Prenota consulenza"
        ctaHref="/contact"
      />

      {/* Interactive Service Selector */}
      <section className="py-20 lg:py-32 bg-black relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              I nostri <span className="text-[#55ACEE]">servizi</span>
            </h2>
            <p className="text-xl text-white/80 max-w-4xl mx-auto">
              Due servizi di consulenza specializzati per trasformare il tuo business
            </p>
          </div>

          <InteractiveServiceSelector services={consultationServices} category="consultation" />
        </div>
      </section>

      {/* Performance Dashboard Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              <span className="text-[#2E8BC0]">Risultati</span> misurabili
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Track del progresso strategico con KPI chiari e actionable
            </p>
          </div>
          <PerformanceDashboard category="consultation" />
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
          <EnhancedTestimonials category="consultation" />
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
              Pronto per la <span className="text-yellow-300">svolta strategica?</span>
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Trasforma la confusione in chiarezza con una guida esperta. Inizia oggi il tuo percorso verso risultati misurabili.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="xl" className="bg-white text-[#2E8BC0] hover:bg-gray-100 font-bold px-12 py-6 rounded-full text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <span className="flex items-center gap-3">
                  Prenota consulenza
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Button>
              
              <Button size="xl" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#2E8BC0] font-bold px-12 py-6 rounded-full text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <span className="flex items-center gap-3">
                  Parla con un consulente
                  <Users className="w-5 h-5" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-sell Recommendations */}
      <CrossSellRecommendations currentService="consultation" />

      {/* Exit Intent Modal */}
      {showExitModal && (
        <ExitIntentModal
          category="consultation"
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

export default ConsultationServices;