
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ChevronLeft, ChevronRight, Users, Target, TrendingUp, CheckCircle, Star, Award, Zap, Shield, Rocket, Crown, Play, DollarSign, Brain, X, Trophy } from "lucide-react";
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

      {/* Critical Problems Section - Minimal White Style */}
      <section className="py-16 transition-all duration-500 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-5xl mx-auto space-y-8 relative">
            {/* Premium backdrop blur card */}
            <div className="backdrop-blur-xl rounded-3xl p-10 border transition-all duration-500 bg-white/60 border-white/20 shadow-2xl shadow-slate-500/10">
              
              {/* Main value proposition */}
              <p className="text-2xl lg:text-3xl leading-relaxed font-light mb-6 transition-colors duration-500 text-slate-800">
                Sai perché le tue{" "}
                <span className="font-semibold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  strategie falliscono
                </span>
                {" "}e i{" "}
                <span className="font-semibold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  risultati non arrivano
                </span>
                ?
              </p>

              {/* Supporting text */}
              <p className="text-lg lg:text-xl leading-relaxed mb-8 transition-colors duration-500 text-slate-600">
                Molti imprenditori si chiedono perché, nonostante tutti i loro sforzi, le vendite non decollano.{" "}
                <span className="font-semibold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  La risposta risiede nella mancanza di una visione integrata
                </span>
                .
              </p>
              
              {/* Premium CTA Button */}
              <Button 
                variant="premium" 
                size="lg" 
                className="group relative overflow-hidden bg-gradient-to-r from-primary via-primary-glow to-primary hover:from-primary-glow hover:via-primary hover:to-primary-glow text-white font-semibold px-10 py-3 text-base rounded-xl shadow-2xl hover:shadow-primary/25 transform hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10">Richiedi Consulenza</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </Button>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary-glow/5 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
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

      {/* Bloomberg Quote CTA Section */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(/lovable-uploads/aae386e9-46e4-472f-8b3a-aa28673a1c85.png)`,
          }}
        >
          {/* Premium overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
        </div>

        {/* Quote Content - Right Side */}
        <div className="relative z-10 h-full flex items-center justify-end pr-8 lg:pr-16">
          <div className="max-w-2xl text-right">
            {/* Quote backdrop */}
            <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-12 border border-white/20 shadow-2xl">
              {/* Quote mark decoration */}
              <div className="text-8xl text-white/20 font-serif leading-none mb-4 text-right">"</div>
              
              {/* Main quote */}
              <blockquote className="text-3xl lg:text-4xl font-light text-white leading-relaxed mb-8 italic">
                Results are what matter, and the{" "}
                <span className="font-semibold bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
                  quality of the result
                </span>
                {" "}is directly proportional to the{" "}
                <span className="font-semibold bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
                  dedication of the execution
                </span>
                .
              </blockquote>
              
              {/* Attribution */}
              <cite className="block text-xl text-blue-200 font-semibold not-italic">
                — Michael Bloomberg
              </cite>
              
              {/* CTA Button */}
              <div className="mt-10">
                <Button 
                  className="group relative overflow-hidden bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/40 px-10 py-4 text-lg font-semibold rounded-2xl backdrop-blur-sm transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-white/10"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>Start Your Transformation</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </Button>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </section>

      {/* Beautiful 3 Stages Process - White Background */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gray-50">
        {/* Elegant Background Elements */}
        <div className="absolute inset-0">
          {/* Subtle geometric patterns */}
          <div className="absolute top-0 left-0 w-full h-full opacity-30">
            <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl"></div>
            <div className="absolute bottom-32 right-32 w-96 h-96 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-orange-100 to-pink-100 rounded-full blur-3xl"></div>
          </div>
          
          {/* Subtle dot pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(99 102 241) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10 px-6">
          {/* Beautiful Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-8 shadow-xl">
              <Award className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-black mb-6 text-slate-800 tracking-tight">
              Le 3 Fasi del{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Successo
              </span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
              Il nostro metodo collaudato per trasformare la tua{" "}
              <span className="font-semibold text-blue-600">strategia commerciale</span>{" "}
              in risultati concreti
            </p>
          </div>

          {/* Creative Process Timeline */}
          <div className="relative">
            {/* Central timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-purple-200 to-indigo-200 hidden lg:block"></div>

            <div className="space-y-24">
              {processSteps.map((step, index) => (
                <div 
                  key={index} 
                  className={`flex items-center gap-12 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col lg:flex-row`}
                >
                  {/* Content Card */}
                  <div className="flex-1 group">
                    <div className="bg-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-slate-100 hover:border-blue-200 hover:-translate-y-2 relative overflow-hidden">
                      {/* Subtle background gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Content */}
                      <div className="relative z-10">
                        <div className="flex items-center gap-6 mb-6">
                          <div className={`p-4 bg-gradient-to-br ${step.gradient} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            {step.icon}
                          </div>
                          <div>
                            <span className="text-6xl font-black text-slate-200 group-hover:text-slate-300 transition-colors">
                              {step.number}
                            </span>
                          </div>
                        </div>
                        
                        <h3 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4 group-hover:text-blue-700 transition-colors">
                          {step.title}
                        </h3>
                        
                        <p className="text-lg text-slate-600 leading-relaxed mb-8 font-light">
                          {step.description}
                        </p>

                        <Button className="group/btn bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                          <span className="flex items-center">
                            Scopri di più
                            <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                          </span>
                        </Button>
                      </div>

                      {/* Decorative corner element */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full transform translate-x-16 -translate-y-16 opacity-50"></div>
                    </div>
                  </div>

                  {/* Timeline Node (Desktop) */}
                  <div className="hidden lg:flex flex-shrink-0 w-20 h-20 items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-lg">{step.number}</span>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden lg:block">
                    {index % 2 !== 0 && (
                      <div className="text-center">
                        <div className="w-24 h-24 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full mx-auto flex items-center justify-center opacity-50">
                          {step.icon}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20">
            <div className="bg-white rounded-3xl p-12 shadow-2xl border border-slate-100 max-w-4xl mx-auto">
              <h3 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
                Pronto a trasformare il tuo business?
              </h3>
              <p className="text-xl text-slate-600 mb-8 font-light">
                Inizia oggi stesso il tuo percorso verso il successo con la nostra consulenza strategica personalizzata.
              </p>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <span className="flex items-center">
                  Richiedi Consulenza Gratuita
                  <ArrowRight className="ml-3 w-6 h-6" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tony Robbins Inspired Success Section */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black">
        {/* Dynamic Premium Background */}
        <div className="absolute inset-0">
          {/* Powerful energy waves */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-orange-500/10 to-red-500/20 animate-pulse" style={{animationDuration: '4s'}}></div>
          <div className="absolute inset-0 bg-gradient-to-l from-blue-500/10 via-purple-500/20 to-indigo-500/10 animate-pulse" style={{animationDelay: '2s', animationDuration: '6s'}}></div>
          
          {/* Golden energy particles */}
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className={`absolute ${i % 5 === 0 ? 'w-2 h-2 bg-amber-400' : i % 5 === 1 ? 'w-1.5 h-1.5 bg-orange-400' : i % 5 === 2 ? 'w-1 h-1 bg-yellow-400' : i % 5 === 3 ? 'w-3 h-3 bg-red-400' : 'w-2.5 h-2.5 bg-pink-400'} rounded-full animate-pulse opacity-60`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${1 + Math.random() * 2}s`
              }}
            />
          ))}
          
          {/* Radial burst pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle at center, transparent 20%, rgba(255,255,255,0.1) 21%, rgba(255,255,255,0.1) 22%, transparent 23%)',
            backgroundSize: '150px 150px'
          }}></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10 px-6 py-20">
          {/* Explosive Header - Tony Robbins Style */}
          <div className="text-center space-y-8 mb-20">
            {/* Power Badge */}
            <div className="inline-flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
                <div className="relative bg-gradient-to-r from-amber-500 to-orange-600 rounded-full px-12 py-4 shadow-2xl border-2 border-amber-300">
                  <span className="text-white text-xl font-black uppercase tracking-widest">🔥 BREAKTHROUGH RESULTS 🔥</span>
                </div>
              </div>
            </div>

            {/* Massive Impact Headline */}
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl font-black leading-none">
                <span className="block bg-gradient-to-r from-amber-300 via-orange-400 to-red-500 bg-clip-text text-transparent drop-shadow-2xl">
                  DOMINA
                </span>
                <span className="block bg-gradient-to-r from-red-400 via-pink-500 to-purple-600 bg-clip-text text-transparent drop-shadow-2xl">
                  IL TUO
                </span>
                <span className="block bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-500 bg-clip-text text-transparent drop-shadow-2xl">
                  SUCCESSO
                </span>
              </h2>

              <div className="max-w-4xl mx-auto">
                <p className="text-3xl lg:text-4xl text-white font-bold leading-tight">
                  Non aspettare il successo.{" "}
                  <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                    CREALO.
                  </span>
                </p>
                <p className="text-xl lg:text-2xl text-gray-300 mt-6 font-light">
                  La differenza tra chi sogna e chi realizza è una sola: l'AZIONE STRATEGICA.
                </p>
              </div>
            </div>
          </div>

          {/* Power Stats Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { number: "500+", label: "Imprenditori Trasformati", icon: "👑" },
              { number: "€50M+", label: "Fatturato Generato", icon: "💎" },
              { number: "98%", label: "Successo Garantito", icon: "🚀" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-3xl p-8 border border-amber-500/30 backdrop-blur-xl shadow-2xl hover:scale-105 transition-all duration-300">
                    <div className="text-6xl mb-4">{stat.icon}</div>
                    <div className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-lg text-gray-300 font-semibold uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Core Message Section */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-orange-500/20 to-red-500/10 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-3xl p-16 border border-amber-500/30 backdrop-blur-xl shadow-2xl">
              <div className="text-center space-y-12">
                {/* Core Promise */}
                <div className="space-y-6">
                  <h3 className="text-4xl lg:text-6xl font-black text-white leading-tight">
                    Il Tuo{" "}
                    <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                      IMPERO COMMERCIALE
                    </span>{" "}
                    Ti Aspetta
                  </h3>
                  
                  <p className="text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    Ogni grande imprenditore ha avuto un momento di{" "}
                    <span className="text-amber-400 font-bold">SVOLTA</span>.
                    <br />
                    Il tuo momento è <span className="text-orange-400 font-bold">ADESSO</span>.
                  </p>
                </div>

                {/* Power Features */}
                <div className="grid md:grid-cols-2 gap-8 mt-16">
                  {[
                    {
                      title: "STRATEGIA VINCENTE",
                      subtitle: "Non lasciare nulla al caso",
                      description: "Piano di battaglia personalizzato per conquistare il tuo mercato e annientare la concorrenza.",
                      icon: "⚡",
                      gradient: "from-amber-500 to-orange-600"
                    },
                    {
                      title: "ESECUZIONE PERFETTA",
                      subtitle: "Dalla visione alla realtà",
                      description: "Implementazione step-by-step con un team di esperti che trasforma le tue idee in profitti.",
                      icon: "🎯",
                      gradient: "from-orange-500 to-red-600"
                    }
                  ].map((feature, index) => (
                    <div key={index} className="group relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-20 rounded-2xl blur-xl group-hover:opacity-30 transition-opacity duration-500`}></div>
                      <div className="relative bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-2xl p-8 border border-white/10 backdrop-blur-sm group-hover:scale-105 transition-all duration-300">
                        <div className="text-5xl mb-4">{feature.icon}</div>
                        <h4 className={`text-2xl lg:text-3xl font-black mb-2 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                          {feature.title}
                        </h4>
                        <p className="text-lg text-amber-300 font-bold mb-4 uppercase tracking-wide">
                          {feature.subtitle}
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Ultimate CTA */}
                <div className="mt-16 space-y-8">
                  <div className="space-y-4">
                    <p className="text-2xl lg:text-3xl text-white font-bold">
                      Sei pronto a{" "}
                      <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                        DOMINARE
                      </span>{" "}
                      il tuo settore?
                    </p>
                    <p className="text-lg text-gray-400">
                      Solo 24 posti disponibili questo mese. Non aspettare che sia troppo tardi.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Button className="group relative overflow-hidden bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 hover:from-amber-400 hover:via-orange-400 hover:to-red-400 text-white text-xl font-black px-12 py-6 rounded-2xl shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-110 border-2 border-amber-300">
                      <span className="relative z-10 flex items-center uppercase tracking-wider">
                        🔥 TRASFORMA IL TUO BUSINESS ORA
                        <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    </Button>
                    
                    <div className="text-center">
                      <p className="text-amber-400 font-bold text-lg">⏰ OFFERTA LIMITATA</p>
                      <p className="text-gray-400 text-sm">Consulenza gratuita del valore di €2,500</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary Quote Section with Bill Gates Background */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Ultra Premium Background with Bill Gates Image */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/lovable-uploads/eeb1d6c7-a9ec-4380-ba6d-0ed594589663.png')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/70 to-pink-900/80"></div>
          <div className="absolute top-1/4 left-1/4 w-[700px] h-[700px] bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse opacity-80" style={{animationDuration: '8s'}}></div>
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/15 via-pink-500/15 to-orange-500/15 rounded-full blur-3xl animate-pulse opacity-70" style={{animationDelay: '4s', animationDuration: '10s'}}></div>
          
          {/* Floating quote elements */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute ${i % 3 === 0 ? 'w-3 h-3 bg-yellow-400' : i % 3 === 1 ? 'w-2 h-2 bg-blue-400' : 'w-1 h-1 bg-purple-400'} rounded-full animate-pulse opacity-40`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
          
          {/* Premium pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 4px 4px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }} />
          </div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10 flex justify-end">
          <div className="relative group w-full md:w-[60%] lg:w-[50%]">
            {/* Glow effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative bg-gradient-to-br from-black/70 via-gray-900/60 to-black/70 backdrop-blur-xl rounded-[3rem] p-16 border border-white/30 hover:border-purple-400/50 transition-all duration-700 shadow-2xl hover:shadow-purple-500/20 hover:scale-[1.02]">
              {/* Quote decoration */}
              <div className="absolute top-8 left-8 opacity-20">
                <div className="text-8xl text-purple-400 font-serif transform -rotate-12">"</div>
              </div>
              <div className="absolute bottom-8 right-8 opacity-20">
                <div className="text-8xl text-blue-400 font-serif transform rotate-12">"</div>
              </div>
              
              {/* Premium star constellation */}
              <div className="flex justify-center mb-12">
                <div className="relative">
                  <Star className="w-20 h-20 text-yellow-400 mx-auto animate-pulse drop-shadow-2xl" />
                  <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
                  
                  {/* Orbiting mini stars */}
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-60"
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-40px)`,
                        animationDelay: `${i * 0.2}s`
                      }}
                    />
                  ))}
                </div>
              </div>
              
              {/* Enhanced quote */}
              <blockquote className="relative z-10">
                <p className="text-4xl lg:text-6xl font-light italic leading-relaxed text-white mb-12 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent drop-shadow-2xl">
                  "Il segreto del successo negli affari è <span className="font-semibold">prevedere</span> dove sta andando il mondo e <span className="font-semibold text-yellow-300">arrivarci per primi.</span>"
                </p>
              </blockquote>
              
              {/* Premium citation */}
              <div className="relative z-10 space-y-4">
                <cite className="text-2xl text-blue-200 font-bold not-italic">— Bill Gates</cite>
                <div className="text-lg text-gray-400 font-medium">Founder, Microsoft Corporation</div>
                
                {/* Achievement badges */}
                <div className="flex justify-center space-x-6 mt-8">
                  <div className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full border border-blue-500/30">
                    <span className="text-blue-200 text-sm font-bold">Visionary</span>
                  </div>
                  <div className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full border border-purple-500/30">
                    <span className="text-purple-200 text-sm font-bold">Innovator</span>
                  </div>
                  <div className="px-4 py-2 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-full border border-yellow-500/30">
                    <span className="text-yellow-200 text-sm font-bold">Pioneer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Marco Section - Ultra Premium Design */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Stunning Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-30">
            <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{animationDuration: '10s'}}></div>
            <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '5s', animationDuration: '12s'}}></div>
          </div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Revolutionary Main Heading */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full border border-blue-500/30 backdrop-blur-xl shadow-2xl mb-8">
              <Crown className="w-8 h-8 text-blue-400 mr-3 animate-bounce" />
              <span className="text-blue-200 text-lg font-bold tracking-wider uppercase">Excellence Leader</span>
            </div>
            
            <h2 className="text-4xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-8 drop-shadow-2xl">
              Pronto a <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">DOMINARE</span><br />
              il mercato con la<br />
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent italic">strategia perfetta?</span>
            </h2>
            
            <p className="text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              Scopri come i leader del settore trasformano <span className="text-blue-400 font-semibold">visioni audaci</span> in risultati straordinari
            </p>
          </div>

          {/* Ultra Premium Marco Section */}
          <div className="relative group mb-20">
            {/* Multiple glow effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-[4rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-[4rem] blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-1000"></div>
            
            <div className="relative bg-gradient-to-br from-black/60 via-gray-900/40 to-black/60 backdrop-blur-2xl rounded-[4rem] overflow-hidden border border-white/20 hover:border-blue-400/50 transition-all duration-1000 shadow-2xl hover:shadow-blue-500/25 group-hover:scale-[1.02]">
              <div className="grid lg:grid-cols-2 items-center min-h-[700px]">
                {/* Left Side - Enhanced Image */}
                <div className="relative h-full min-h-[700px] overflow-hidden rounded-l-[4rem]">
                  {/* Image with overlay effects */}
                  <img 
                    src="/lovable-uploads/38b36456-8e63-4824-a0c6-3af4d21ae30b.png" 
                    alt="Marco Ferrario - Sales Expert" 
                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-1000"
                  />
                  
                  {/* Premium overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-blue-900/60"></div>
                  
                  {/* Floating achievement badges */}
                  <div className="absolute top-8 left-8 space-y-4">
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-4 shadow-2xl animate-pulse">
                      <div className="flex items-center space-x-2">
                        <Star className="w-6 h-6 text-white fill-white" />
                        <span className="text-white font-black text-sm">27+ Years</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-4 shadow-2xl">
                      <div className="flex items-center space-x-2">
                        <Target className="w-6 h-6 text-white" />
                        <span className="text-white font-black text-sm">€50M+ Generated</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right Side - Revolutionary Content */}
                <div className="p-12 lg:p-16 text-white space-y-8">
                  {/* Power statement */}
                  <div className="space-y-6">
                    <h3 className="text-4xl lg:text-5xl font-black leading-tight">
                      <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">MARCO FERRARIO</span><br />
                      Il Architetto delle<br />
                      <span className="text-yellow-400 italic">Vendite Vincenti</span>
                    </h3>
                    
                    <p className="text-xl lg:text-2xl leading-relaxed font-light text-gray-300">
                      Non si tratta solo di vendere. Si tratta di <span className="text-blue-400 font-semibold">dominare il mercato</span>, di creare sistemi che generano risultati automaticamente, di trasformare ogni strategia in <span className="text-purple-400 font-semibold">profitti straordinari</span>.
                    </p>
                  </div>
                  
                  {/* Achievement stats */}
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { number: "500+", label: "Progetti Vinti", icon: Trophy },
                      { number: "95%", label: "Success Rate", icon: Target },
                      { number: "€50M+", label: "Revenue Generated", icon: DollarSign },
                      { number: "27+", label: "Years Experience", icon: Crown }
                    ].map((stat, index) => (
                      <div key={index} className="group/stat">
                        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-4 border border-gray-600/30 hover:border-blue-400/50 transition-all duration-300 group-hover/stat:scale-105">
                          <stat.icon className="w-8 h-8 text-blue-400 mb-2 group-hover/stat:scale-110 transition-transform duration-300" />
                          <div className="text-2xl font-black text-white">{stat.number}</div>
                          <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Premium CTA */}
                  <div className="space-y-4">
                    <Button className="group bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 px-12 py-6 text-xl font-black rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-110 relative overflow-hidden">
                      <span className="relative z-10 flex items-center">
                        <Crown className="mr-3 w-6 h-6" />
                        Incontra il Master
                        <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Button>
                    
                    <p className="text-sm text-gray-400 italic">
                      "La differenza tra il successo e il fallimento è spesso una sola strategia"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Visionary Strategy", 
                desc: "Strategie che anticipano il mercato di anni", 
                icon: Brain,
                color: "blue"
              },
              { 
                title: "Execution Excellence", 
                desc: "Implementazione perfetta, risultati garantiti", 
                icon: Rocket,
                color: "purple"
              },
              { 
                title: "Results Mastery", 
                desc: "ROI straordinario, crescita esponenziale", 
                icon: Trophy,
                color: "pink"
              }
            ].map((feature, index) => (
              <div key={index} className="group">
                <div className={`bg-gradient-to-br from-${feature.color}-900/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-${feature.color}-500/30 hover:border-${feature.color}-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-${feature.color}-500/20`}>
                  <div className={`w-16 h-16 bg-gradient-to-r from-${feature.color}-500 to-${feature.color === 'blue' ? 'purple' : feature.color === 'purple' ? 'pink' : 'orange'}-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-black text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Premium Form Section - New Background */}
      <section 
        className="py-20 px-6 relative overflow-hidden"
        style={{
          backgroundImage: `url('/src/assets/consultation-cta-bg.jpg')`,
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
