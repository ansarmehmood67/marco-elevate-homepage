
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ChevronLeft, ChevronRight, Users, Target, TrendingUp, CheckCircle, Star, Award, Zap, Shield, Rocket, Crown, Play, DollarSign, Brain, X } from "lucide-react";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const StrategicConsulting = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const services = [
    {
      title: "Acceleratore Vendite",
      subtitle: "Consulenza intensiva di 3 ore per progettare il tuo funnel di vendita su misura e aumentare il tasso di conversione.",
      videoId: "Asr6MBs4u-g",
      icon: <Rocket className="w-8 h-8 text-blue-400" />,
      badge: "Funnel",
      link: "https://sryeje-1e.myshopify.com/products/acceleratore-vendite-attira-coinvolgi-convinci-costruisci-il-tuo-sistema-di-vendita?variant=55843237036414",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      title: "Audit Marketing & Lead Generation",
      subtitle: "Due sessioni strategiche per trasformare il tuo ecosistema digitale in una macchina da lead qualificati.",
      videoId: "Asr6MBs4u-g",
      icon: <TrendingUp className="w-8 h-8 text-emerald-400" />,
      badge: "Lead Gen",
      link: "https://sryeje-1e.myshopify.com/products/audit-marketing-lead-generation?variant=55866512933246",
      gradient: "from-emerald-600 to-teal-600"
    },
    {
      title: "Audit Pitch Commerciale",
      subtitle: "Sessione pratica per migliorare il pitch dei tuoi venditori, aumentare l'efficacia e l'allineamento del team.",
      videoId: "uPhcQHDoux0",
      icon: <DollarSign className="w-8 h-8 text-orange-400" />,
      badge: "Comunicazione",
      link: "https://sryeje-1e.myshopify.com/products/audit-strategico-del-pitch-commerciale?variant=55843346219390",
      gradient: "from-orange-600 to-red-600"
    },
    {
      title: "Direttore Vendite – Sessione Strategica",
      subtitle: "Analisi avanzata e piano operativo per sbloccare il potenziale del tuo team di vendita con due sessioni.",
      videoId: "FEWNkmm058Y",
      icon: <Target className="w-8 h-8 text-green-400" />,
      badge: "Leadership",
      link: "https://sryeje-1e.myshopify.com/products/direttore-vendite-on-demand-sessione-strategica?variant=55800936366462",
      gradient: "from-green-600 to-emerald-600"
    },
    {
      title: "Sales Shift",
      subtitle: "Consulenza su misura per passare da un modello di vendita interno tradizionale all'outsourcing e automazione.",
      videoId: "hl8GMojRxQ8",
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      badge: "Outsourcing",
      link: "https://sryeje-1e.myshopify.com/products/sales-shift-dal-vecchio-modello-al-nuovo-sistema-commerciale?variant=55802984104318",
      gradient: "from-purple-600 to-pink-600"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Strategy",
      description: "Il successo di ogni azienda inizia dai venditori e dai loro processi. Un sales manager esperto coordina ogni fase del funnel di vendita per massimizzare le conversioni e ottimizzare i risultati.",
      icon: <Crown className="w-12 h-12 text-amber-400" />,
      gradient: "from-amber-500 to-orange-500"
    },
    {
      number: "02", 
      title: "Execution",
      description: "Anche la migliore strategia è inutile se non viene eseguita correttamente. La nostra esperienza garantisce un'implementazione precisa e metodica di ogni elemento del piano commerciale.",
      icon: <Rocket className="w-12 h-12 text-blue-400" />,
      gradient: "from-blue-500 to-purple-500"
    },
    {
      number: "03",
      title: "Check", 
      description: "Una strategia ben definita e un'esecuzione perfetta non bastano senza risultati misurabili. Monitoriamo costantemente le performance per garantire il ROI più elevato possibile.",
      icon: <Award className="w-12 h-12 text-emerald-400" />,
      gradient: "from-emerald-500 to-teal-500"
    }
  ];

  const clientLogos = ["TIME VISION", "Ralf", "EasyCassa", "The SkyRoom", "Innovation Lab", "TechStart"];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(services.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(services.length / 3)) % Math.ceil(services.length / 3));
  };

  const openVideoModal = (service) => {
    setSelectedVideo(service);
    setVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setVideoModalOpen(false);
    setSelectedVideo(null);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />

      {/* Enhanced Hero Section with Video Background */}
      <section className="pt-24 pb-2 px-0 transition-all duration-500 relative overflow-hidden">
        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative min-h-[85vh] rounded-3xl overflow-hidden transition-all duration-500 shadow-2xl bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 border border-white/10">
            {/* Video Background */}
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              style={{ zIndex: 1 }}
            >
              <source src="https://res.cloudinary.com/dsgem4tdv/video/upload/v1752128583/a14ff2cd-e917-4480-9942-acd5b5e88d41.mp4_trw04e.mp4" type="video/mp4" />
            </video>
            
            {/* Video Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" style={{ zIndex: 2 }} />
            
            {/* Floating Elements */}
            <div className="absolute top-20 right-20 opacity-20" style={{ zIndex: 3 }}>
              <div className="w-32 h-32 rounded-full border-2 animate-spin border-white/20 border-t-white/40" style={{ animationDuration: '20s' }} />
            </div>
            <div className="absolute bottom-20 left-20 opacity-30" style={{ zIndex: 3 }}>
              <Target className="w-16 h-16 text-blue-400 animate-pulse" />
            </div>
            
            {/* Enhanced Content */}
            <div className="absolute bottom-16 left-16 max-w-3xl" style={{ zIndex: 4 }}>
              <div className="mb-6 flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-white/90 font-medium">Expertise dal 1996</span>
              </div>
              
              <h1 className="text-6xl lg:text-8xl font-black leading-tight mb-8 text-white drop-shadow-2xl bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Consulenza Strategica
              </h1>
              
              <p className="text-2xl lg:text-3xl text-gray-100 mb-12 font-light leading-relaxed max-w-2xl">
                Trasforma la tua visione in <span className="font-semibold text-blue-200">strategie concrete</span> con piani operativi che generano risultati tangibili.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="group font-bold px-10 py-5 text-xl rounded-2xl shadow-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-3xl bg-white text-blue-900 hover:bg-blue-50 border-2 border-white/30 backdrop-blur-sm relative overflow-hidden">
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>Richiedi Consulenza</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-20 transition-opacity" />
                </Button>
                
                <Button variant="outline" className="font-semibold px-8 py-6 text-xl rounded-2xl border-2 border-white/40 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105">
                  <Play className="w-5 h-5 mr-2" />
                  Guarda Demo
                </Button>
              </div>
            </div>

            {/* Right Content - Enhanced Marco's Photo */}
            <div className="relative animate-fade-in delay-300">
              <div className="relative">
                {/* Glowing background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-3xl filter blur-2xl transform rotate-3"></div>
                
                <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 rounded-3xl p-8 backdrop-blur-sm border border-blue-500/20 shadow-2xl">
                  <img 
                    src="/lovable-uploads/38b36456-8e63-4824-a0c6-3af4d21ae30b.png" 
                    alt="Marco Ferrario" 
                    className="w-full h-96 object-cover rounded-2xl shadow-xl"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-black/90 to-gray-900/90 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30 max-w-sm">
                    <blockquote className="text-sm italic text-blue-200">
                      "Tactics without strategy is the noise before defeat"
                      <cite className="block text-xs text-gray-400 mt-2 font-semibold">— Sun Tzu</cite>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Why Strategies Fail Section */}
      <section className="relative py-32 px-4 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Premium Animated Background */}
        <div className="absolute inset-0">
          {/* Moving gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse opacity-60" style={{animationDuration: '4s'}}></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-full blur-3xl animate-pulse opacity-50" style={{animationDelay: '2s', animationDuration: '6s'}}></div>
          
          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-orange-400 rounded-full animate-pulse opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${1 + Math.random() * 2}s`
              }}
            />
          ))}
          
          {/* Geometric patterns */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 3px 3px, white 1px, transparent 0)',
              backgroundSize: '60px 60px'
            }} />
          </div>
        </div>

        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <div className="space-y-16">
            {/* Premium Header */}
            <div className="space-y-8">
              <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-full border border-red-500/30 backdrop-blur-xl shadow-2xl">
                <Zap className="w-8 h-8 text-red-400 mr-3 animate-bounce" />
                <span className="text-red-200 text-lg font-bold tracking-wider uppercase">Critical Problem</span>
              </div>
              
              <h2 className="text-6xl lg:text-8xl font-black leading-tight bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-2xl">
                Sai perché le tue strategie<br />
                <span className="italic">FALLISCONO?</span>
              </h2>
            </div>
            
            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 text-left">
                <p className="text-2xl lg:text-3xl text-gray-300 leading-relaxed font-light">
                  Molti imprenditori si chiedono perché, nonostante tutti i loro sforzi, <span className="font-bold text-orange-400 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">le vendite non decollano.</span>
                </p>
                
                <p className="text-xl text-gray-400 leading-relaxed">
                  La risposta spesso risiede nella <span className="text-yellow-400 font-semibold">mancanza di una visione completa e integrata</span> del funnel di vendita.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-6 pt-8">
                  <div className="group p-6 bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl border border-red-500/20 backdrop-blur-sm hover:scale-105 transition-all duration-300">
                    <div className="text-4xl font-black text-red-400 mb-2 group-hover:scale-110 transition-transform">87%</div>
                    <div className="text-sm text-gray-400">Strategie Falliscono</div>
                  </div>
                  <div className="group p-6 bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl border border-orange-500/20 backdrop-blur-sm hover:scale-105 transition-all duration-300">
                    <div className="text-4xl font-black text-orange-400 mb-2 group-hover:scale-110 transition-transform">€2M</div>
                    <div className="text-sm text-gray-400">Perdite Annuali</div>
                  </div>
                </div>
              </div>
              
              {/* Quote Card */}
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-900/90 via-red-900/30 to-orange-900/30 backdrop-blur-xl rounded-3xl p-12 border border-orange-500/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 relative overflow-hidden">
                  {/* Quote icon */}
                  <div className="absolute top-8 left-8 text-6xl text-orange-400/20 font-serif">"</div>
                  
                  <blockquote className="text-3xl italic text-orange-200 leading-relaxed mb-8 relative z-10">
                    "Una visione senza esecuzione è solo un'allucinazione."
                  </blockquote>
                  <cite className="text-xl text-gray-400 font-semibold relative z-10">— Henry Ford</cite>
                  
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ultra Premium Services Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black w-full">
        {/* Revolutionary Background */}
        <div className="absolute inset-0">
          {/* Dynamic moving gradients */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse opacity-80" style={{animationDuration: '8s'}}></div>
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/15 via-pink-500/15 to-orange-500/15 rounded-full blur-3xl animate-pulse opacity-70" style={{animationDelay: '4s', animationDuration: '10s'}}></div>
          </div>
          
          {/* Floating geometric elements */}
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className={`absolute ${i % 3 === 0 ? 'w-2 h-2 bg-blue-400' : i % 3 === 1 ? 'w-1 h-1 bg-purple-400' : 'w-1.5 h-1.5 bg-cyan-400'} rounded-full animate-pulse opacity-30`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
          
          {/* Premium pattern overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 4px 4px, white 1px, transparent 0)',
              backgroundSize: '80px 80px'
            }} />
          </div>
        </div>
        
        <div className="w-full px-6 lg:px-8 relative z-10">
          {/* Premium Header */}
          <div className="flex justify-between items-end mb-20 max-w-7xl mx-auto">
            <div className="space-y-8">
              <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full border border-blue-500/30 backdrop-blur-xl shadow-2xl">
                <Crown className="w-8 h-8 text-blue-400 mr-3 animate-bounce" />
                <span className="text-blue-200 text-lg font-bold tracking-wider uppercase">Premium Services</span>
              </div>
              <h2 className="text-6xl lg:text-8xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl">
                I Nostri Servizi
              </h2>
              <p className="text-2xl text-gray-300 max-w-3xl leading-relaxed font-light">
                Soluzioni <span className="text-blue-400 font-semibold">innovative e personalizzate</span> per trasformare il tuo business
              </p>
            </div>
            
            {/* Futuristic Navigation */}
            <div className="flex gap-4">
              <Button 
                onClick={prevSlide}
                variant="outline" 
                size="icon" 
                className="group bg-gray-900/80 border-blue-500/30 hover:bg-blue-600/20 backdrop-blur-xl w-16 h-16 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-110"
              >
                <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={nextSlide}
                variant="outline" 
                size="icon" 
                className="group bg-gray-900/80 border-blue-500/30 hover:bg-blue-600/20 backdrop-blur-xl w-16 h-16 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-110"
              >
                <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Ultra Premium Service Cards Carousel */}
          <div className="relative overflow-hidden mb-20 max-w-7xl mx-auto">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {/* Create slides with 3 cards each */}
              {Array.from({ length: Math.ceil(services.length / 3) }, (_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0 grid lg:grid-cols-3 gap-8 px-5">
                   {services.slice(slideIndex * 3, (slideIndex + 1) * 3).map((service, index) => (
                     <Card key={index} className="group relative bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-black/95 border border-gray-700/30 hover:border-blue-500/60 transition-all duration-700 transform hover:scale-[1.02] hover:shadow-2xl backdrop-blur-xl overflow-hidden h-[640px] rounded-3xl">
                       {/* Premium glow effect */}
                       <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                       
                       {/* Animated border gradient */}
                       <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
                       
                       {/* Badge */}
                       <div className="absolute top-6 right-6 z-20">
                         <span className="px-4 py-2 bg-gradient-to-r from-blue-600/90 to-purple-600/90 text-white text-sm font-bold rounded-full backdrop-blur-sm border border-white/20 shadow-lg">
                           {service.badge}
                         </span>
                       </div>

                       {/* YouTube Thumbnail Section - Perfect 16:9 aspect ratio */}
                       <div className="relative h-56 overflow-hidden rounded-t-3xl">
                         <img
                           src={`https://img.youtube.com/vi/${service.videoId}/hqdefault.jpg`}
                           alt={service.title}
                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                         />
                         
                         {/* Premium gradient overlay */}
                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
                         
                         {/* Play Button Overlay - Only visible on hover */}
                         <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
                           <button
                             onClick={(e) => {
                               e.stopPropagation();
                               openVideoModal(service);
                             }}
                             className="w-20 h-20 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 border-4 border-white/30 backdrop-blur-sm"
                           >
                             <Play className="w-8 h-8 text-white ml-1" fill="white" />
                           </button>
                         </div>

                         {/* Icon in top-left corner */}
                         <div className="absolute top-6 left-6 p-4 bg-gray-900/90 rounded-2xl backdrop-blur-sm border border-gray-700/50 shadow-xl">
                           {service.icon}
                         </div>
                       </div>
                       
                       {/* Enhanced Content Section */}
                       <div className="relative flex-1 p-0 bg-gradient-to-b from-gray-900/50 to-black/50">
                         {/* Decorative element */}
                         <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
                         
                         <CardContent className="p-8 space-y-6 flex flex-col justify-between h-96">
                           {/* Header with enhanced styling */}
                           <div className="space-y-6">
                             {/* Title with enhanced typography */}
                             <div className="space-y-3">
                               <CardTitle className="text-3xl font-black text-white group-hover:text-blue-200 transition-colors duration-500 leading-tight relative">
                                 <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                                   {service.title}
                                 </span>
                                 {/* Underline effect */}
                                 <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-700"></div>
                               </CardTitle>
                               
                               {/* Premium divider */}
                               <div className="flex items-center space-x-4">
                                 <div className="h-px bg-gradient-to-r from-blue-500/50 to-purple-500/50 flex-1"></div>
                                 <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                                 <div className="h-px bg-gradient-to-r from-purple-500/50 to-pink-500/50 flex-1"></div>
                               </div>
                             </div>
                             
                             {/* Enhanced Subtitle with better spacing and typography */}
                             <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30">
                               <CardDescription className="text-gray-200 text-base leading-relaxed font-light">
                                 {service.subtitle}
                               </CardDescription>
                             </div>
                           </div>
                           
                           {/* Enhanced CTA Section */}
                           <div className="space-y-4">
                             {/* Price or Value Indicator */}
                             <div className="flex items-center justify-center">
                               <div className="px-4 py-2 bg-gradient-to-r from-emerald-600/20 to-green-600/20 rounded-full border border-emerald-500/30 backdrop-blur-sm">
                                 <span className="text-emerald-300 text-sm font-semibold">Consulenza Premium</span>
                               </div>
                             </div>
                             
                             {/* CTA Button with enhanced design */}
                             <Button 
                               className="w-full bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-600 hover:from-emerald-700 hover:via-green-700 hover:to-emerald-700 text-white font-bold py-5 text-lg rounded-2xl shadow-2xl hover:shadow-emerald-500/40 transition-all duration-500 transform hover:scale-105 border border-emerald-500/30 relative overflow-hidden group"
                               onClick={(e) => {
                                 e.stopPropagation();
                                 window.open(service.link, '_blank');
                               }}
                             >
                               <span className="relative z-10 flex items-center justify-center">
                                 Scopri di più
                                 <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                               </span>
                               {/* Button glow effect */}
                               <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-emerald-300/10 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                             </Button>
                           </div>
                         </CardContent>
                       </div>
                     </Card>
                  ))}
                </div>
              ))}
            </div>
          </div>
          
          {/* Premium CTA */}
          <div className="text-center max-w-7xl mx-auto">
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 hover:from-purple-700 hover:via-pink-700 hover:to-orange-700 px-16 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 transform hover:scale-110 relative overflow-hidden"
              onClick={() => window.open('https://marcoferrario.myshopify.com', '_blank')}
            >
              <span className="relative z-10 flex items-center">
                Vedi tutti i servizi su Shopify
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {videoModalOpen && selectedVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative bg-gray-900 rounded-2xl overflow-hidden max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={closeVideoModal}
              className="absolute top-4 right-4 z-10 bg-red-600 hover:bg-red-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
            
            {/* Video Title */}
            <div className="p-6 border-b border-gray-700">
              <h3 className="text-2xl font-bold text-white">{selectedVideo.title}</h3>
            </div>
            
            {/* Video */}
            <div className="relative pb-[56.25%] h-0">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* Revolutionary 3 Stages Process */}
      <section className="relative py-32 px-4 overflow-hidden bg-gradient-to-br from-black via-emerald-900/20 to-black">
        {/* Ultra Premium Background */}
        <div className="absolute inset-0">
          {/* Dynamic flowing gradients */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-[700px] h-[700px] bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse opacity-60" style={{animationDuration: '12s'}}></div>
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-r from-teal-500/20 via-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse opacity-50" style={{animationDelay: '6s', animationDuration: '14s'}}></div>
          </div>
          
          {/* Floating success elements */}
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className={`absolute ${i % 4 === 0 ? 'w-3 h-3 bg-emerald-400' : i % 4 === 1 ? 'w-2 h-2 bg-teal-400' : i % 4 === 2 ? 'w-1 h-1 bg-cyan-400' : 'w-1.5 h-1.5 bg-green-400'} rounded-full animate-pulse opacity-40`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
          
          {/* Success pattern overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 5px 5px, emerald 1px, transparent 0)',
              backgroundSize: '100px 100px'
            }} />
          </div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Revolutionary Header */}
          <div className="text-center mb-24">
            <div className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-full border border-emerald-500/30 backdrop-blur-xl shadow-2xl mb-8">
              <Award className="w-10 h-10 text-emerald-400 mr-4 animate-bounce" />
              <span className="text-emerald-200 text-xl font-bold tracking-wider uppercase">Success Framework</span>
            </div>
            <h2 className="text-6xl lg:text-8xl font-black bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent mb-8 drop-shadow-2xl">
              Le 3 Fasi del<br />
              <span className="italic">Successo</span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              Il nostro <span className="text-emerald-400 font-semibold">metodo collaudato</span> per trasformare la tua strategia commerciale in <span className="text-teal-400 font-semibold">risultati concreti</span>
            </p>
          </div>
          
          {/* Ultra Premium Process Cards */}
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <Card key={index} className="group relative bg-gradient-to-r from-gray-900/70 via-gray-800/70 to-black/70 border border-gray-700/50 hover:border-emerald-500/50 p-12 hover:shadow-2xl transition-all duration-700 backdrop-blur-xl overflow-hidden hover:scale-[1.02]">
                {/* Dynamic background effects */}
                <div className={`absolute inset-0 bg-gradient-to-r ${step.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Floating particles inside card */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700">
                  {[...Array(10)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-emerald-400 rounded-full animate-pulse"
                      style={{
                        left: `${10 + i * 8}%`,
                        top: `${5 + i * 12}%`,
                        animationDelay: `${i * 0.2}s`
                      }}
                    />
                  ))}
                </div>
                
                <div className="flex items-center gap-16 relative z-10">
                  {/* Premium Number and Icon */}
                  <div className="flex flex-col items-center space-y-6">
                    <div className="text-9xl font-black text-gray-700/30 group-hover:text-gray-600/50 transition-colors duration-500 group-hover:scale-110">
                      {step.number}
                    </div>
                    <div className={`p-6 bg-gradient-to-br ${step.gradient} rounded-3xl shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Premium Content */}
                  <div className="flex-1 space-y-8">
                    <h3 className="text-5xl font-black text-white group-hover:text-emerald-100 transition-colors duration-500">
                      {step.title}
                    </h3>
                    <p className="text-2xl text-gray-300 leading-relaxed font-light">
                      {step.description}
                    </p>
                    <Button className={`group/btn bg-gradient-to-r ${step.gradient} hover:shadow-xl px-12 py-4 text-lg rounded-2xl font-bold transition-all duration-500 transform hover:scale-105 relative overflow-hidden`}>
                      <span className="relative z-10 flex items-center">
                        Prenota una consulenza gratuita
                        <ArrowRight className="ml-3 w-6 h-6 group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Client Logos */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 via-black to-blue-900/30"></div>
        
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-gray-700/30 to-gray-800/30 rounded-full border border-gray-600/30">
                <span className="text-gray-300 text-sm font-bold tracking-wider uppercase">Trusted By</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Direttore commerciale on-demand:<br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  La Tua Guida Esperta per Ottimizzare le Vendite e Massimizzare i Risultati
                </span>
              </h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {clientLogos.map((logo, index) => (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300 transform hover:scale-105">
                    <div className="text-xl font-bold text-gray-400 group-hover:text-white transition-colors">
                      {logo}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Video/Quote Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/80 to-pink-900/80"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <div className="bg-black/30 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <Star className="w-16 h-16 text-yellow-400 mx-auto mb-8 animate-pulse" />
            <blockquote className="text-3xl lg:text-5xl font-light italic leading-relaxed text-white mb-8">
              "Il segreto del successo negli affari è prevedere dove sta andando il mondo e arrivarci per primi."
            </blockquote>
            <cite className="text-xl text-blue-200 font-semibold">— Bill Gates</cite>
          </div>
        </div>
      </section>

      {/* Enhanced Marco's Bio */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/50 to-black"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full border border-blue-500/30">
                  <span className="text-blue-200 text-sm font-bold tracking-wider uppercase">About Marco</span>
                </div>
                <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Marco Ferrario
                </h2>
                <p className="text-2xl text-blue-400 font-semibold">
                  Esperto di Vendite e Consulenza Strategica
                </p>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Sales Director esperto, attivo dal 1996... Offro consulenza strategica e operativa, 
                coaching certificato e garantisco un ritorno chiaro e immediato sull'investimento. 
                La mia missione è trasformare le sfide commerciali in opportunità concrete di crescita.
              </p>
              
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-12 py-4 text-lg font-bold rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
                Contattami Ora
              </Button>
            </div>
            
            <div className="text-center">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-3xl filter blur-2xl transform rotate-3"></div>
                <img 
                  src="/lovable-uploads/38b36456-8e63-4824-a0c6-3af4d21ae30b.png" 
                  alt="Marco Ferrario in suit" 
                  className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl border border-blue-500/20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Book Promo */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-black to-teal-900/20"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/30 to-teal-600/30 rounded-3xl filter blur-2xl"></div>
                <img 
                  src="/src/assets/sales-on-demand.jpg" 
                  alt="Sales as a Service Book Cover" 
                  className="relative w-full max-w-sm mx-auto rounded-3xl shadow-2xl border border-emerald-500/20"
                />
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-block px-6 py-3 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-full border border-emerald-500/30">
                  <span className="text-emerald-200 text-sm font-bold tracking-wider uppercase">Free Download</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Scarica ora il libro di Marco Ferrario:
                  <span className="block text-emerald-400 mt-2">è gratuito e nella sua versione integrale per te!</span>
                </h2>
              </div>
              
              <ul className="space-y-6 text-lg text-gray-300">
                {[
                  "Come attrarre il massimo di nuovi clienti",
                  "Come rendere efficiente il tuo reparto vendite", 
                  "Quali sono gli strumenti giusti e come usarli",
                  "Come ottenere il controllo totale sulla tua pipeline di vendita"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="p-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mt-1">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 px-12 py-4 text-lg font-bold rounded-full shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105">
                Scarica Ora
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Form Section - Matching SalesOnDemand Style */}
      <section 
        className="py-20 px-6 relative overflow-hidden"
        style={{
          backgroundImage: `url('/lovable-uploads/25280549-6553-430d-9dff-5462347e4238.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        
        <div className="container mx-auto max-w-4xl text-center relative z-10 text-white">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8">
            Compila il form, fai il test, scopri dove fallisce il tuo processo di vendita
          </h2>
          <p className="text-2xl mb-12 opacity-90">
            <span className="text-blue-300 font-semibold">e ricevi il libro in regalo.</span>
          </p>
          
          <div className="max-w-2xl mx-auto p-8 rounded-2xl backdrop-blur-sm bg-black/30 border border-white/20">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Nome"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <input
                  type="text"
                  placeholder="Cognome"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <input
                type="text"
                placeholder="Azienda"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <input
                  type="tel"
                  placeholder="Telefono"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <Button className="w-full py-4 text-lg font-semibold bg-white text-black hover:bg-gray-100 rounded-lg transition-all duration-300 hover:scale-105">
                Invia e Ricevi il Libro
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StrategicConsulting;
