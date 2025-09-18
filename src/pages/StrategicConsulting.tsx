import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import marcoHeroImage from '../assets/marco-hero-image.svg';
import Footer from '../components/Footer';
import StandardIntroSection from '@/components/shared/StandardIntroSection';
import StandardCustomersSection from '@/components/shared/StandardCustomersSection';
import StandardQuoteSection from '@/components/shared/StandardQuoteSection';
import AboutSection from '../components/AboutSection';
import LeadMagnetSectionAnimated from '../components/LeadMagnetSectionAnimated';
import MailerLiteContactSectionAnimated from "../components/MailerLiteContactSectionAnimated";
import TestimonialsOptimized from '@/components/TestimonialsOptimized';
import CrossSellRecommendations from '@/components/CrossSellRecommendations';
import AllServicesCarousel from '@/components/shared/AllServicesCarousel';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ChevronLeft, ChevronRight, Target, TrendingUp, DollarSign, BarChart, Users, CheckCircle, Sparkles } from "lucide-react";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const StrategicConsulting = () => {
  const { ref, visibleItems } = useStaggeredAnimation(6, 200);
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      title: "Consulenza Vendite",
      description: "Affianco la tua azienda come Direttore Vendite a Noleggio, intervenendo sul processo commerciale per renderlo più efficace e performante. Dalla definizione del pitch fino alla gestione delle trattative, il mio approccio trasforma il reparto vendite in una macchina organizzata e capace di generare risultati concreti e misurabili.",
      icon: <Users className="w-8 h-8" />,
      points: [
        "Audit Strategico del Pitch Commerciale",
        "Acceleratore Vendite – Attira, Coinvolgi, Convinci",
        "Direttore Vendite – Sessione Strategica"
      ],
      link: "/consulenza-strategica/sales-services"
    },
    {
      title: "Consulenza Marketing",
      description: "Come Direttore Marketing a Noleggio ti aiuto a sviluppare strategie integrate che uniscono marketing tradizionale, digitale e strumenti di intelligenza artificiale. L'obiettivo è rendere il marketing un vero alleato della crescita, capace di attrarre lead qualificati, posizionare il brand e rafforzare la comunicazione aziendale anche attraverso canali innovativi come YouTube.",
      icon: <Target className="w-8 h-8" />,
      points: [
        "Lead Generation Audit",
        "Business Solutions",
        "YouTube Consultant",
        "Instant Avatar"
      ],
      link: "/consulenza-strategica/marketing-services"
    },
    {
      title: "Consulenza di Trasformazione Strategica",
      description: "Le mie consulenze guidano il decision maker nella migrazione dal modello tradizionale a quello on demand, sia per il marketing che per le vendite. L'obiettivo è metterti nelle condizioni di essere autonomo nella scelta e nell'attivazione delle strutture esterne più adatte — dal reparto marketing digitale al servizio di vendite in outsourcing — da utilizzare solo quando servono, garantendo flessibilità, controllo dei costi e rapidità di esecuzione.",
      icon: <TrendingUp className="w-8 h-8" />,
      points: [
        "Consulenza esperta per passare dai modelli tradizionali a soluzioni automatizzate",
        "Scalabilità che accelera la crescita"
      ],
      link: "/consulenza-strategica/consultation-services"
    }
  ];

  const phases = [
    {
      number: "01",
      title: "Strategia",
      description: "Creare un piano non significa scrivere un documento, ma costruire un percorso concreto e personalizzato. Come Direttore Vendite e Marketing a Noleggio, ti aiuto a definire obiettivi realistici, identificare i target giusti e scegliere gli strumenti più efficaci per trasformare la tua visione in un patrimonio aziendale duraturo.",
      icon: Target
    },
    {
      number: "02", 
      title: "Esecuzione",
      description: "Una strategia vale solo se viene messa in pratica. Coordino ogni fase del processo commerciale e di marketing, garantendo che le attività siano coerenti, integrate e orientate ai risultati. Il mio intervento ti permette di trasformare le idee in azioni, ridurre gli sprechi e aumentare la produttività del tuo team.",
      icon: Users
    },
    {
      number: "03",
      title: "Controllo",
      description: "Ogni azione deve essere monitorata e migliorata nel tempo. Implemento sistemi di controllo e misurazione che ti permettono di avere piena visibilità su ciò che funziona e su ciò che va ottimizzato. Questo approccio ti assicura continuità, scalabilità e la possibilità di prendere decisioni basate su dati concreti.",
      icon: BarChart
    }
  ];

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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-24 lg:pt-24 pb-16 px-0 bg-black relative overflow-hidden min-h-screen">
        {/* Simplified background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-black to-gray-900/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(var(--primary)/0.08),transparent_50%)]" />

        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative rounded-3xl overflow-hidden border border-gray-800/30 shadow-2xl bg-black/60 backdrop-blur-sm min-h-[95vh] lg:min-h-[100vh]">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src="https://res.cloudinary.com/dsergeqc9/image/upload/v1758132546/consultation_landing_hero_1_v7yf0c.png"
                alt="Strategic Consulting Background"
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
            </div>

            {/* Clean overlays */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/75 via-black/65 to-black/80" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />

            {/* Marco Image Layer - Middle Layer */}
            <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
              <div className="absolute left-1/2 transform -translate-x-1/2 sm:left-auto sm:transform-none sm:right-3 lg:right-4 xl:right-6 bottom-0 w-[85vw] sm:w-96 lg:w-[500px] xl:w-[560px] h-auto sm:max-w-[calc(50vw-2rem)]">
                <img 
                  src="https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758204308/Untitled_design_93_kt7mag.png"
                  alt="Marco Ferrario"
                  className="w-full h-auto opacity-85 sm:opacity-70 lg:opacity-80"
                />
                {/* Black fade effect from bottom - only at the bottom border */}
                <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 lg:h-24 bg-gradient-to-t from-black/60 via-black/30 to-transparent sm:from-black/80 sm:via-black/40 pointer-events-none" />
              </div>
            </div>

            {/* Content */}
            <div ref={ref} className="relative lg:absolute lg:inset-0 flex flex-col justify-center lg:justify-center p-4 sm:p-6 lg:p-12 pt-6 sm:pt-10 lg:pt-24 pb-10 sm:pb-12 lg:pb-12 z-20">
              {/* Left copy */}
              <div className="flex-1 max-w-5xl">
                {/* Preheader Badge */}
                <div className="mb-6 flex items-center justify-center lg:justify-start">
                  <div className="inline-flex items-center px-8 py-4 rounded-full text-sm lg:text-base font-bold bg-primary/10 text-primary border border-primary/20 transition-all duration-300 hover:scale-105 shadow-lg">
                    Il tuo Direttore Vendite e Marketing a Noleggio
                  </div>
                </div>
                
                {/* Heading */}
                <h1 className={`text-hero-title font-black leading-constrained-tight tracking-tight text-white mb-8 sm:mb-10 text-center lg:text-left transition-all duration-1200 ease-out ${
                  visibleItems[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  Strategia su Misura<br />in una Sessione
                </h1>

                {/* Subcopy */}
                <div className="mb-6 lg:mb-10">
                  <div className="relative inline-block">
                    <p className="inline-block w-fit max-w-[60ch] text-hero-body text-white/95 leading-constrained-relaxed backdrop-blur-xl bg-gradient-to-r from-black/30 via-black/20 to-black/30 rounded-2xl px-4 lg:px-6 py-3 lg:py-4 border border-white/10 shadow-2xl">
                      Accedi a oltre 25 anni di esperienza in vendite e marketing solo quando ti serve, senza il peso di un dirigente interno.
                    </p>
                  </div>
                </div>

                {/* Bullets */}
                <div className="mb-6 lg:mb-8">
                  <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                    <p className="text-sm lg:text-base text-white font-bold">
                      <span className="text-primary-glow">✓</span> 15 min di consulenza gratuita • 
                      <span className="text-primary-glow mx-2">✓</span> Metodo collaudato • 
                      <span className="text-primary-glow mx-2">✓</span> Valore duraturo • 
                      <span className="text-primary-glow mx-2">✓</span> 25+ anni esperienza
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div className="relative group mb-8 sm:mb-0 flex justify-center lg:justify-start">
                   <Button 
                     onClick={() => document.getElementById('tailor-made-consultancy')?.scrollIntoView({ behavior: 'smooth' })}
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StandardIntroSection
        badge="La scelta che cambia la crescita della tua azienda"
        title="Consulenza Strategica"
        highlightedText="che diventa patrimonio per la tua azienda"
        description="Non una semplice analisi, ma un intervento trasformativo, che ti offre la visione e l'esperienza di un Direttore Vendite e Marketing a Noleggio. Con oltre 25 anni di esperienza, ti aiuto a costruire strategie personalizzate, guidare l'esecuzione e garantire controllo costante dei risultati. Una scelta che genera valore duraturo e ti rende più autonomo nelle decisioni."
        ctaText="Inizia la tua Consulenza Strategica"
        ctaSubtext="Consulenza trasformativa • Direzione esperta • Risultati misurabili"
        onCtaClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      />
      <StandardCustomersSection />
      <StandardQuoteSection
        badge="La tua azienda cresce con il capitale della conoscenza"
        mainQuote="Le vendite non falliscono per caso,"
        highlightedQuote="ma per mancanza di strategia"
        description="La consulenza strategica non è un intervento momentaneo, ma un'eredità operativa: processi, strumenti e strategie che continuano a generare risultati anche dopo la sessione."
        ctaText="Scopri di più"
        ctaSubtext="• 15 min di consulenza gratuita • Metodo collaudato • Valore duraturo"
      />

      

      {/* Services Section - Exact match to uploaded image */}
      <section id="tailor-made-consultancy" className="py-20 lg:py-32 bg-black relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          {/* Header Section */}
          <div className="text-left mb-16 pl-8">
            <div className="inline-flex items-center px-8 py-4 rounded-full text-sm font-bold tracking-[0.3em] uppercase mb-8 transition-all duration-300 hover:scale-105 shadow-lg bg-primary/10 text-primary border border-primary/20">
              Consulenze su misura
            </div>
            <h2 className="text-5xl lg:text-7xl font-black leading-[0.85] tracking-tight mb-8">
              Aree e Servizi di{" "}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Consulenza Strategica
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-4xl">
              Ogni azienda ha sfide uniche. Le mie consulenze ti offrono la visione e l'esperienza di un Direttore Vendite e Marketing a Noleggio, con percorsi mirati che trasformano i tuoi obiettivi in risultati concreti e duraturi.
            </p>
          </div>

          {/* Services Grid - 3 cards with home page card 2 styling */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative rounded-3xl p-10 min-h-[680px] flex flex-col justify-between transition-all duration-700 hover:scale-[1.02] overflow-hidden shadow-2xl ease-out"
              >
                {/* Deep slate/blue-gray gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-slate-800 to-blue-900"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10"></div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon Badge */}
                  <div className="mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                      <div className="text-white">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Heading */}
                  <h3 className="text-3xl lg:text-4xl font-black mb-4 leading-tight text-white tracking-tight">
                    {service.title}
                  </h3>
                  
                  {/* Subhead */}
                  <p className="text-lg text-white/90 mb-8 leading-relaxed font-normal">
                    {service.description}
                  </p>
                  
                  {/* Bullets */}
                  <div className="space-y-4 mb-8 flex-1">
                    {service.points.map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-white text-base">{point}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Benefit Strip */}
                  <div className="mb-6">
                    <span className="text-white text-sm font-medium">Strategia personalizzata • Risultati misurabili • Crescita sostenibile</span>
                  </div>
                </div>
                
                {/* CTA Button */}
                <Button asChild className="relative z-10 w-full !bg-white !text-black hover:!bg-white/95 py-6 rounded-full text-base font-semibold transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl" style={{background: 'white', color: 'black'}}>
                  <Link to={service.link}>Scopri di più</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Video Section */}
<section className="py-40 relative overflow-hidden">
  {/* Background Video */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover z-0"
  >
    <source
      src="https://res.cloudinary.com/dsergeqc9/video/upload/v1758129884/salesondemand_cta_k2t6ee.mp4"
      type="video/mp4"
    />
  </video>

  {/* Light Overlay for Text Readability */}
  <div className="absolute inset-0 bg-black/30 z-10"></div>

  <div className="max-w-6xl mx-auto px-6 text-center relative z-20">
    <div className="max-w-3xl mx-auto space-y-8">
      <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6" style={{ textShadow: '2px 4px 8px rgba(0,0,0,0.8)' }}>
        Sei Pronto per Vedere Risultati Concreti?
      </h2>

      <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-medium" style={{ textShadow: '1px 2px 4px rgba(0,0,0,0.8)' }}>
        Scopri il valore delle mie consulenze trasformative: con l'esperienza di un Direttore Vendite e Marketing a Noleggio ottimizzi il processo commerciale, rendi il marketing più efficace e innovativo, e acquisisci la visione per trasformare il tuo modello in un sistema on demand, flessibile e scalabile.
      </p>

      <Button className="bg-gradient-to-r from-[#55ACEE] to-[#87CEEB] hover:from-[#2E8BC0] hover:to-[#55ACEE] text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
        Prenota ora gratuitamente
      </Button>
    </div>
  </div>
</section>


      {/* Timeline Methodology Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-8 py-4 rounded-full text-sm font-bold tracking-[0.3em] uppercase mb-8 transition-all duration-300 hover:scale-105 shadow-lg bg-primary/10 text-primary border border-primary/20">
              Il Metodo in 3 Fasi
            </div>
            <h2 className="text-5xl lg:text-7xl font-black leading-[0.85] tracking-tight mb-8">
              Il mio{" "}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Metodo di Lavoro
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-4xl mx-auto">
              Un processo consolidato in 25 anni di esperienza che trasforma idee in risultati concreti e duraturi.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-7xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-primary-glow to-primary hidden lg:block"></div>
            
            {phases.map((phase, index) => {
              const IconComponent = phase.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className="relative mb-16 lg:mb-24">
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 hidden lg:block">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-lg border-4 border-black z-20">
                      <span className="text-white font-black text-xl">{phase.number}</span>
                    </div>
                  </div>
                  
                  {/* Card */}
                  <div className={`lg:w-1/2 ${isEven ? 'lg:pr-16' : 'lg:pl-16 lg:ml-auto'}`}>
                    <div className="group relative rounded-3xl p-10 min-h-[680px] flex flex-col justify-between transition-all duration-700 hover:scale-[1.02] overflow-hidden shadow-2xl ease-out">
                      {/* Deep slate/blue-gray gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-slate-800 to-blue-900"></div>
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10"></div>

                      <div className="relative z-10 flex flex-col h-full">
                        {/* Mobile Number Badge */}
                        <div className="mb-8 lg:hidden">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-lg">
                            <span className="text-white font-black text-lg">{phase.number}</span>
                          </div>
                        </div>

                        {/* Icon Badge */}
                        <div className="mb-8">
                          <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        
                        {/* Heading */}
                        <h3 className="text-3xl lg:text-4xl font-black mb-4 leading-tight text-white tracking-tight">
                          {phase.title}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-lg text-white/90 mb-8 leading-relaxed font-normal flex-1">
                          {phase.description}
                        </p>
                        
                        {/* Benefit Strip */}
                        <div className="mb-6">
                          <span className="text-white text-sm font-medium">
                            {index === 0 && "Piano concreto • Target identificati • Strumenti efficaci"}
                            {index === 1 && "Coordinazione attività • Risultati integrati • Produttività ottimizzata"}
                            {index === 2 && "Monitoraggio costante • Dati concreti • Miglioramento continuo"}
                          </span>
                        </div>
                      </div>
                      
                      {/* CTA Button */}
                      <Button className="relative z-10 w-full !bg-white !text-black hover:!bg-white/95 py-6 rounded-full text-base font-semibold transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl" style={{background: 'white', color: 'black'}}>
                        Fase {phase.number}: {phase.title}
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      

      {/* Testimonials Section */}
      <TestimonialsOptimized />

      {/* About Marco Ferrario - Same as homepage */}
      <AboutSection />

      {/* Book Section - Same as homepage */}
      <LeadMagnetSectionAnimated />

      {/* All Services Carousel */}
      <AllServicesCarousel />

      {/* Contact Form + CTA - Same as homepage */}
      <div id="contact"><MailerLiteContactSectionAnimated /></div>

      {/* Footer - Same as homepage */}
      <Footer />
    </div>
  );
};

export default StrategicConsulting;
