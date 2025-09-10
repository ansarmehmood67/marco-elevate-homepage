import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import marcoHeroImage from '../assets/marco-hero-image.svg';
import Footer from '../components/Footer';
import StandardIntroSection from '@/components/shared/StandardIntroSection';
import StandardCustomersSection from '@/components/shared/StandardCustomersSection';
import StandardQuoteSection from '@/components/shared/StandardQuoteSection';
import AboutSection from '../components/AboutSection';
import LeadMagnetSection from '../components/LeadMagnetSection';
import MailerLiteContactSection from "../components/MailerLiteContactSection";
import TestimonialsOptimized from '@/components/TestimonialsOptimized';
import CrossSellRecommendations from '@/components/CrossSellRecommendations';
import AllServicesCarousel from '@/components/shared/AllServicesCarousel';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ChevronLeft, ChevronRight, Target, TrendingUp, DollarSign, BarChart, Users, CheckCircle, Sparkles } from "lucide-react";

const StrategicConsulting = () => {
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
      <section className="pt-24 sm:pt-28 lg:pt-24 pb-8 px-0 bg-black relative overflow-hidden">
        {/* Simplified background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-black to-gray-900/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(var(--primary)/0.08),transparent_50%)]" />

        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative rounded-3xl overflow-hidden border border-gray-800/30 shadow-2xl bg-black/60 backdrop-blur-sm lg:min-h-[80vh]">
            {/* Background Video */}
            <div className="absolute inset-0">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              >
                <source
                  src="https://res.cloudinary.com/dufcnrcfe/video/upload/v1753296146/Untitled_design_14_s2pudj.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

            {/* Clean overlays */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/75 via-black/65 to-black/80" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />

            {/* Marco Image Layer - Middle Layer */}
            <div className="absolute inset-0 z-10 pointer-events-none">
              <div className="absolute left-1/2 transform translate-x-4 sm:translate-x-8 lg:translate-x-12 xl:translate-x-16 bottom-0 w-56 sm:w-72 lg:w-96 xl:w-[420px] h-auto">
                <img 
                  src={marcoHeroImage}
                  alt="Marco Ferrario"
                  className="w-full h-auto opacity-60 sm:opacity-70 lg:opacity-80"
                />
                {/* Black fade effect from bottom - only at the bottom border */}
                <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Content */}
            <div className="relative lg:absolute lg:inset-0 flex flex-col justify-center lg:justify-end p-4 sm:p-6 lg:p-12 pt-6 sm:pt-10 lg:pt-24 pb-10 sm:pb-12 lg:pb-12 z-20">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 sm:gap-6 lg:gap-8">
                {/* Left copy */}
                <div className="flex-1 max-w-5xl">
                  {/* Preheader Badge */}
                  <div className="mb-6 flex items-center justify-center lg:justify-start">
                    <div className="inline-flex items-center px-8 py-4 rounded-full text-lg font-bold bg-primary/10 text-primary border border-primary/20 transition-all duration-300 hover:scale-105 shadow-lg">
                      Il tuo Direttore Vendite e Marketing a Noleggio
                    </div>
                  </div>
                  
                  {/* Heading */}
                  <h1 className="text-6xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white mb-8 sm:mb-10 text-center lg:text-left">
                    Strategia su Misura<br />in una Sessione
                  </h1>

                  {/* Subcopy */}
                  <div className="mb-6 lg:mb-10">
                    <div className="relative inline-block">
                      <p className="inline-block w-fit max-w-[60ch] text-base sm:text-lg lg:text-xl text-white/95 leading-relaxed backdrop-blur-xl bg-gradient-to-r from-black/30 via-black/20 to-black/30 rounded-2xl px-4 lg:px-6 py-3 lg:py-4 border border-white/10 shadow-2xl">
                        Accedi a oltre 25 anni di esperienza in vendite e marketing solo quando ti serve, senza il peso di un dirigente interno.
                      </p>
                    </div>
                  </div>

                  {/* Bullets */}
                  <div className="mb-6 lg:mb-8">
                    <p className="text-sm text-white/80 font-medium">
                      <span className="text-primary">✓</span> 15 min di consulenza gratuita • 
                      <span className="text-primary mx-2">✓</span> Metodo collaudato • 
                      <span className="text-primary mx-2">✓</span> Valore duraturo • 
                      <span className="text-primary mx-2">✓</span> 25+ anni esperienza
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="relative group mb-8 sm:mb-0 flex justify-center lg:justify-start">
                    <Button className="relative font-bold px-6 lg:px-10 py-3 lg:py-5 text-base lg:text-lg rounded-full shadow-2xl hover:shadow-[0_0_50px_hsl(var(--primary-glow)/0.4)] transition-all duration-700 transform lg:hover:scale-105 hover:-translate-y-0.5 bg-gradient-to-r from-white via-gray-50 to-white text-black hover:from-primary hover:via-primary-glow hover:to-primary hover:text-white border-2 border-white/60 hover:border-primary/70 backdrop-blur-xl overflow-hidden group">
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

                {/* Right video */}
                <div className="w-full sm:w-80 lg:w-80 lg:flex-shrink-0 group">
                  <div className="relative">
                    {/* Video box */}
                    <div className="w-full h-44 sm:h-48 rounded-2xl overflow-hidden shadow-2xl border border-white/40 backdrop-blur-xl bg-gradient-to-br from-black/30 via-black/20 to-black/30 lg:hover:shadow-[0_0_40px_rgba(56,189,248,0.3)] transition-all duration-700 lg:hover:scale-105">
                      <iframe
                        src="https://www.youtube.com/embed/ZocHP6N9Aig"
                        title="Demo Video"
                        className="w-full h-full rounded-2xl"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>

                    {/* Label: mobile=below video, desktop=floating above */}
                    <div className="static sm:absolute top-auto sm:-top-12 left-auto sm:left-1/2 translate-x-0 sm:-translate-x-1/2 mt-1 sm:mt-0 w-full sm:w-auto flex sm:block justify-center z-10">
                      <span className="inline-flex items-center px-4 sm:px-6 py-1.5 sm:py-2 bg-gradient-to-r from-primary/90 via-primary-glow/90 to-primary/90 text-white text-xs sm:text-sm font-bold rounded-full backdrop-blur-xl border border-white/40 shadow-xl whitespace-nowrap">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white mr-2 animate-pulse" />
                        Consulenza Strategica in 30'
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
        badge="La scelta che cambia la crescita della tua azienda"
        title="Consulenza Strategica"
        highlightedText="che diventa patrimonio per la tua azienda"
        description="Non una semplice analisi, ma un intervento trasformativo, che ti offre la visione e l'esperienza di un Direttore Vendite e Marketing a Noleggio. Con oltre 25 anni di esperienza, ti aiuto a costruire strategie personalizzate, guidare l'esecuzione e garantire controllo costante dei risultati. Una scelta che genera valore duraturo e ti rende più autonomo nelle decisioni."
        ctaText="Inizia la tua Consulenza Strategica"
        ctaSubtext="Consulenza trasformativa • Direzione esperta • Risultati misurabili"
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
      <section className="py-20 lg:py-32 bg-black relative overflow-hidden">
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

          {/* Services Grid - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Icon with blue background */}
                <div className="relative mb-6 w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">
                  <div className="text-[#55ACEE]">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Points with blue dots */}
                  <ul className="space-y-3 mt-6">
                    {service.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="text-gray-600 flex items-center">
                        <span className="w-2 h-2 bg-[#55ACEE] rounded-full mr-3 flex-shrink-0"></span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <div className="pt-6">
                    <a 
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full"
                    >
                      <Button className="w-full bg-[#55ACEE] hover:bg-[#2E8BC0] text-white font-semibold py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                        {index === 0 ? 'Scopri la Consulenza Vendite' : 
                         index === 1 ? 'Scopri la Consulenza Marketing' : 
                         'Scopri la Consulenza di Trasformazione'}
                      </Button>
                    </a>
                  </div>
                </div>
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
      src="https://res.cloudinary.com/dufcnrcfe/video/upload/v1752757133/salesondemand_1_dcdcgx.mp4"
      type="video/mp4"
    />
  </video>

  

  <div className="max-w-6xl mx-auto px-6 text-center relative z-20">
    <div className="max-w-3xl mx-auto space-y-8">
      <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight px-6 py-4 mb-6">
        Sei Pronto per Vedere Risultati Concreti?
      </h2>

      <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-medium px-6 py-4">
        Scopri il valore delle mie consulenze trasformative: con l'esperienza di un Direttore Vendite e Marketing a Noleggio ottimizzi il processo commerciale, rendi il marketing più efficace e innovativo, e acquisisci la visione per trasformare il tuo modello in un sistema on demand, flessibile e scalabile.
      </p>

      <Button className="bg-gradient-to-r from-[#55ACEE] to-[#87CEEB] hover:from-[#2E8BC0] hover:to-[#55ACEE] text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
        Prenota ora gratuitamente
      </Button>
    </div>
  </div>
</section>


      {/* How It Works Section - 3 Phases */}
      <section className="py-32 px-6 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-primary-glow/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-24">
            <div className="inline-flex items-center px-8 py-4 rounded-full text-lg font-bold mb-8 bg-primary/10 text-primary border border-primary/20 transition-all duration-300 hover:scale-105 shadow-lg">
              <Target className="w-6 h-6 mr-3 animate-spin" style={{ animationDuration: '3s' }} />
              Il Metodo in 3 Fasi
            </div>
            <h2 className="text-5xl lg:text-7xl font-black leading-[0.85] tracking-tight text-slate-900 mb-12">
              Strategia, Esecuzione,{" "}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Controllo
              </span>
            </h2>
            <p className="text-xl lg:text-2xl leading-relaxed text-slate-600 max-w-3xl mx-auto">
              Un approccio sistematico che garantisce <span className="font-bold text-primary">risultati misurabili</span>
            </p>
          </div>
          
          {/* Phases Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-16">
              {phases.map((phase, index) => {
                const Icon = phase.icon;
                return (
                  <div key={index} className="group relative">
                    {/* Phase Number Badge */}
                    <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-white font-black text-xl shadow-2xl group-hover:scale-110 transition-transform duration-300 z-10">
                      {phase.number}
                    </div>
                    
                    {/* Main Card */}
                    <div className="relative p-10 rounded-3xl bg-white/80 backdrop-blur-xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-700 hover:scale-105 group-hover:rotate-1 overflow-hidden">
                      
                      {/* Animated background particles */}
                      <div className="absolute inset-0 opacity-20">
                        {[...Array(6)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-2 h-2 bg-primary rounded-full animate-pulse"
                            style={{
                              left: `${10 + i * 15}%`,
                              top: `${10 + i * 20}%`,
                              animationDelay: `${i * 0.3}s`
                            }}
                          />
                        ))}
                      </div>
                      
                      {/* Icon Section */}
                      <div className="flex flex-col items-center text-center relative z-10">
                        <div className="flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary-glow/10 group-hover:rotate-12 transition-transform duration-500 shadow-lg mb-6">
                          <Icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        
                        <h3 className="text-3xl lg:text-4xl font-black mb-6 text-slate-900 group-hover:text-primary transition-colors duration-300">
                          {phase.title}
                        </h3>
                        <p className="text-xl lg:text-xl mb-8 text-gray-700 leading-relaxed">
                          {phase.description}
                        </p>
                        
                        {/* CTA Button */}
                        <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 group-hover:scale-105">
                          Prenota una consulenza
                        </Button>
                      </div>
                      
                      {/* Decorative Elements */}
                      <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-2xl group-hover:blur-xl transition-all duration-500" />
                      <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary-glow/20 rounded-full blur-2xl group-hover:blur-xl transition-all duration-500" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Sell Recommendations */}
      <CrossSellRecommendations
        currentService="consulenza-strategica"
        layout="horizontal"
        title="Potenzia la tua consulenza strategica"
        subtitle="I migliori risultati si ottengono combinando consulenza strategica con questi servizi complementari"
      />

      {/* Testimonials Section */}
      <TestimonialsOptimized />

      {/* About Marco Ferrario - Same as homepage */}
      <AboutSection />

      {/* Book Section - Same as homepage */}
      <LeadMagnetSection />

      {/* All Services Carousel */}
      <AllServicesCarousel />

      {/* Contact Form + CTA - Same as homepage */}
      <MailerLiteContactSection />

      {/* Footer - Same as homepage */}
      <Footer />
    </div>
  );
};

export default StrategicConsulting;
