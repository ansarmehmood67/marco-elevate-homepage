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
      title: "Sales Shift – dal vecchio modello al nuovo sistema commerciale",
      subtitle: "Consulenza strategica per la transizione commerciale",
      features: [
        "Assessment completo della situazione attuale",
        "Valutazione fornitori e partner esistenti",
        "Roadmap di transizione personalizzata e pragmatica",
        "Supporto nell'implementazione del nuovo modello"
      ],
      youtubeUrl: "https://www.youtube.com/embed/uPhcQHDoux0?si=HS91ksdl8eUVpgOk",
      shopifyUrl: "https://sryeje-1e.myshopify.com/products/sales-shift-dal-vecchio-modello-al-nuovo-sistema-commerciale?variant=55802984104318",
      category: "popular" as const,
      price: "€3.200"
    },
    {
      title: "Consulenza Strategica Completa",
      subtitle: "Guida one-to-one per sbloccare il momentum aziendale",
      features: [
        "Strategia di crescita personalizzata",
        "Ottimizzazione processi e workflow",
        "KPI e metriche di performance",
        "Piano di implementazione a 90 giorni"
      ],
      youtubeUrl: "https://www.youtube.com/embed/uPhcQHDoux0?si=HS91ksdl8eUVpgOk",
      shopifyUrl: "https://sryeje-1e.myshopify.com/products/sales-shift-dal-vecchio-modello-al-nuovo-sistema-commerciale?variant=55802984104318",
      category: "premium" as const,
      price: "€3.500"
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
                Consulenza strategica per <span className="font-semibold text-blue-200">risultati certi</span>
              </p>
              
              <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl">
                Dalla confusione alla chiarezza. Guida pratica focalizzata sui risultati di fatturato.
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

      {/* Services Section with Video Cards */}
      <section className="py-20 lg:py-32 bg-black relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <ConsistentHeading
            badge="I Nostri Servizi di Consulenza"
            title="Servizi"
            highlightedText="Premium"
            subtitle="Consulenza strategica personalizzata per trasformare il tuo business con risultati misurabili"
            theme="dark"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {consultationServices.map((service, index) => (
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

      {/* Consistent How It Works Section */}
      <ConsistentHowItWorks steps={howItWorksSteps} />
      {/* Cross-Sell Recommendations */}
      <CrossSellRecommendations
        currentService="consultation-services"
        layout="horizontal"
        title="Accelera ulteriormente la crescita"
        subtitle="Il 78% dei clienti Consultation Services aggiunge questi servizi per risultati ancora più potenti"
      />

      {/* ROI Calculator Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <ConsistentHeading
            badge="Calcola il Tuo ROI"
            title="Calcola il Tuo"
            highlightedText="ROI"
            subtitle="Scopri quanto potresti guadagnare investendo in una consulenza strategica personalizzata"
          />
          <ROICalculator category="consultation" />
        </div>
      </section>

      {/* Performance Dashboard Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <ConsistentHeading
            title="Performance"
            highlightedText="Dashboard"
            subtitle="Track del progresso strategico con KPI chiari e actionable"
          />
          <PerformanceDashboard category="consultation" />
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <ConsistentHeading
            title="Cosa dicono"
            highlightedText="i nostri clienti"
            subtitle="Storie di successo di aziende che hanno trasformato il loro business con la nostra consulenza"
          />
          <EnhancedTestimonials category="consultation" />
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

      {/* Premium Final CTA Section */}
      <PremiumFinalCTA category="consultation" />

      

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