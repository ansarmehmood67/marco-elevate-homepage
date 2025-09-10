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

const ConsultationServices = () => {

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
      shopifyUrl: "https://sryeje-1e.myshopify.com/products/sales-shift-dal-vecchio-modello-al-nuovo-sistema-commerciale?variant=55802984104318",
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
      shopifyUrl: "https://sryeje-1e.myshopify.com/products/sales-shift-dal-vecchio-modello-al-nuovo-sistema-commerciale?variant=55802984104318",
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
            <div className="relative lg:absolute lg:inset-0 flex flex-col justify-center lg:justify-end p-4 sm:p-6 lg:p-12 pt-6 sm:pt-10 lg:pt-24 pb-10 sm:pb-12 lg:pb-12 z-20">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 sm:gap-6 lg:gap-8">
                {/* Left copy */}
                <div className="flex-1 max-w-3xl">
                   <h1 className="text-6xl lg:text-8xl font-black leading-tight mb-8 text-white drop-shadow-2xl bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent text-center lg:text-left">
                     Trasforma il tuo reparto vendite in una macchina snella, esterna e scalabile
                   </h1>
                   
                   <p className="text-base sm:text-lg lg:text-xl text-gray-100 mb-6 leading-relaxed max-w-2xl text-center lg:text-left">
                     Attraverso questa consulenza l'imprenditore acquisisce la visione e le competenze per operare come Direttore Vendite On Demand e Direttore Marketing On Demand, trasformando il proprio reparto in un sistema snello, scalabile e governato con autonomia.
                   </p>
                   
                   <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                     <Button className="group font-bold px-10 py-5 text-xl rounded-2xl shadow-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-3xl bg-white text-black hover:bg-gray-100 border-2 border-white/30 backdrop-blur-sm relative overflow-hidden">
                       <span className="relative z-10 flex items-center space-x-2">
                         <span>Prenota la tua sessione di trasformazione</span>
                         <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
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
                        title="Demo Video Consultation Services"
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>

                    {/* Label: mobile=below video, desktop=floating above */}
                    <div className="static sm:absolute top-auto sm:-top-12 left-auto sm:left-1/2 translate-x-0 sm:-translate-x-1/2 mt-1 sm:mt-0 w-full sm:w-auto flex sm:block justify-center z-10">
                      <span className="inline-flex items-center px-4 sm:px-6 py-1.5 sm:py-2 bg-gradient-to-r from-primary/90 via-primary-glow/90 to-primary/90 text-white text-xs sm:text-sm font-bold rounded-full backdrop-blur-xl border border-white/40 shadow-xl whitespace-nowrap">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white mr-2 animate-pulse" />
                        Consultation Services Demo
                      </span>
                    </div>
                  </div>
                </div>
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
      <section className="py-20 lg:py-32 bg-black relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <ConsistentHeading
            badge="Dalla complessità alla chiarezza strategica"
            title="La guida che serve"
            highlightedText="per prendere le decisioni giuste"
            subtitle="Abbiamo creato percorsi di consulenza che mettono l'imprenditore al timone: chiarezza strategica, scelte consapevoli e un modello snello che elimina sprechi e costi fissi."
            theme="dark"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
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

      {/* Standard Customers Section */}
      <StandardCustomersSection />

      {/* How It Works Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-6 relative z-10">
          <ConsistentHeading
            badge="Dalla complessità alla chiarezza operativa"
            title="Come"
            highlightedText="Funziona"
            subtitle="Un approccio pratico e strutturato che porta dall'analisi alla trasformazione del sistema commerciale."
          />
          <ConsistentHowItWorks steps={howItWorksSteps} />
          
          <div className="text-center mt-16">
            <Button className="group font-bold px-10 py-5 text-xl rounded-2xl shadow-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-3xl bg-primary text-white hover:bg-primary/90">
              <span className="relative z-10 flex items-center space-x-2">
                <span>Cambia oggi</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>
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

      {/* Premium Services Carousel */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <PremiumServicesCarouselOptimized />
        </div>
      </section>

      {/* Premium Final CTA Section */}
      <MailerLiteContactSection />


      <Footer />
    </div>
  );
};

export default ConsultationServices;