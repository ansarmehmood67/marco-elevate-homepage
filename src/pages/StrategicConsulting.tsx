import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import IntroSection from '../components/IntroSection';
import AboutSection from '../components/AboutSection';
import LeadMagnetSection from '../components/LeadMagnetSection';
import FinalCTASection from '../components/FinalCTASection';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ChevronLeft, ChevronRight, Target, TrendingUp, DollarSign, BarChart, Users, CheckCircle, Sparkles } from "lucide-react";

const StrategicConsulting = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      title: "Sales Services",
      description: "Boost your revenue by outsourcing your sales process to professionals. We help you close more deals without expanding your internal team.",
      icon: <Users className="w-8 h-8" />,
      points: [
        "Audit Strategico del Pitch Commerciale",
        "Acceleratore Vendite – Attira, Coinvolgi, Convinci",
        "Direttore Vendite – Sessione Strategica"
      ],
      link: "https://shopify.com/sales-services"
    },
    {
      title: "Marketing Services",
      description: "From lead generation to brand positioning, our marketing services are designed to grow your visibility and fill your sales funnel.",
      icon: <Target className="w-8 h-8" />,
      points: [
        "AUDIT MARKETING LEAD GEN",
        "custom business solutions"
      ],
      link: "https://shopify.com/marketing-services"
    },
    {
      title: "Consultant Services",
      description: "Leverage expert consulting to transition from traditional models to automated, scalable solutions that accelerate your growth.",
      icon: <TrendingUp className="w-8 h-8" />,
      points: [
        "Sales Shift",
        "youtube consultant"
      ],
      link: "https://shopify.com/consultant-services"
    }
  ];

  const phases = [
    {
      number: "01",
      title: "Strategia",
      description: "Creare un piano efficace e personalizzato.",
      icon: Target
    },
    {
      number: "02", 
      title: "Esecuzione",
      description: "Garantire che ogni fase sia gestita e coordinata.",
      icon: Users
    },
    {
      number: "03",
      title: "Controllo",
      description: "Monitorare, correggere, migliorare.",
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
      
      {/* Hero Section - Keep current style */}
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
                Consulenza Strategica
              </h1>
              
              <p className="text-2xl lg:text-3xl text-gray-100 mb-12 font-light leading-relaxed max-w-2xl">
                Trasforma la tua visione in <span className="font-semibold text-blue-200">strategie concrete</span> con piani operativi che generano risultati tangibili.
              </p>
              
              <Button className="group font-bold px-10 py-5 text-xl rounded-2xl shadow-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-3xl bg-white text-black hover:bg-gray-100 border-2 border-white/30 backdrop-blur-sm relative overflow-hidden">
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Richiedi Consulenza</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </div>

            {/* YouTube Video Player - Bottom Right */}
            <div className="absolute bottom-12 right-12 z-20">
              <div className="w-80 h-48 rounded-xl overflow-hidden shadow-2xl border-2 border-white/20 backdrop-blur-sm">
                <iframe
                  src="https://www.youtube.com/embed/ZocHP6N9Aig"
                  title="Demo Video"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Intro Section for Strategic Consulting */}
      <section className="relative overflow-hidden">
        {/* Hero Section with Modern Design */}
        <div className="bg-white py-24 lg:py-32 relative">
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center space-y-12">
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#2E8BC0]/10 to-[#87CEEB]/10 rounded-full border border-[#2E8BC0]/20 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-[#2E8BC0]" />
                <span className="text-[#2E8BC0] font-semibold text-sm">Consulenza strategica</span>
              </div>

              {/* Main Headlines with Strategic Consulting Content */}
              <div className="space-y-8">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                  Consulenza Strategica alle Vendite{" "}
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-[#2E8BC0] via-[#87CEEB] to-[#2E8BC0] bg-clip-text text-transparent">
                      che genera risultati misurabili
                    </span>
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] rounded-full opacity-60"></div>
                  </span>
                  <br />
                  per startup e aziende che vogliono crescere
                </h1>
                
                <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-4xl mx-auto leading-relaxed">
                  La consulenza alle vendite di Marco Ferrario offre una{" "}
                  <span className="text-[#2E8BC0] font-semibold">guida esperta su misura</span> per il tuo modello di business. 
                  Un partner esterno con oltre 25 anni di esperienza in funnel di vendita, esecuzione e controllo delle performance.
                </p>
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
                      Inizia la consulenza
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Section with Modern Design */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#2E8BC0]/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-[#87CEEB]/5 to-transparent rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <div className="space-y-8">
              {/* Quote Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
                <span className="text-[#87CEEB] font-medium text-sm">La nostra filosofia</span>
              </div>

              <blockquote className="space-y-6">
                <div className="relative">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                    Le vendite non falliscono per caso,{" "}
                    <span className="bg-gradient-to-r from-[#87CEEB] to-[#2E8BC0] bg-clip-text text-transparent">
                      ma per mancanza di strategia
                    </span>
                  </h3>
                  
                  {/* Modern Quote Marks */}
                  <div className="absolute -top-6 -left-6 w-8 h-8 bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] rounded-lg flex items-center justify-center opacity-20">
                    <span className="text-white text-lg font-bold">"</span>
                  </div>
                </div>

                <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                  Trasformiamo azioni scollegate in un metodo efficace e orientato alla crescita
                </p>

                <div className="pt-6">
                  <Button 
                    size="lg"
                    className="bg-white/10 text-white hover:bg-white/20 font-semibold px-10 py-4 rounded-full transition-all duration-300 border border-white/20 hover:border-white/30 backdrop-blur-sm"
                  >
                    <span className="flex items-center gap-2">
                      Scopri come
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Button>
                </div>
              </blockquote>
            </div>
          </div>
        </div>

        {/* Enhanced Brand Logos Section */}
        <div className="bg-gradient-to-br from-slate-50 to-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2E8BC0]/10 rounded-full border border-[#2E8BC0]/20 mb-6">
                <Users className="w-4 h-4 text-[#2E8BC0]" />
                <span className="text-[#2E8BC0] font-medium text-sm">I nostri clienti</span>
              </div>
              <h4 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Scelti ogni giorno da più di{" "}
                <span className="text-[#2E8BC0]">500 clienti</span>
              </h4>
              <div className="w-24 h-1 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] rounded-full mx-auto"></div>
            </div>
            
            {/* Enhanced Logo Slider */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-50 via-white to-slate-50 p-8 border border-slate-200/50">
              {/* Fade effects */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
              
              {/* Sliding logos */}
              <div className="flex animate-[slide_30s_linear_infinite] items-center gap-16">
                {/* First set */}
                {brandLogos.map((logo, index) => (
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
                {/* Duplicate set for seamless loop */}
                {brandLogos.map((logo, index) => (
                  <div key={`dup-${index}`} className="flex-shrink-0 group">
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
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-[#2E8BC0] rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-[#87CEEB] rounded-full opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-4 h-4 bg-[#2E8BC0] rounded-full opacity-20 animate-pulse delay-2000"></div>
        
        <style>{`
          @keyframes slide {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </section>

      

      {/* Services Section - Exact match to uploaded image */}
      <section className="py-20 lg:py-32 bg-black relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          {/* Header Section */}
          <div className="text-left mb-16 pl-8">
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              I nostri <span className="text-[#55ACEE]">servizi</span>
            </h2>
            <p className="text-xl text-white/80 max-w-4xl">
              Consulenza su misura e direzione commerciale on-demand. Ogni soluzione è pensata per i tuoi obiettivi e per risultati concreti nel tempo.
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
                        Scopri di più
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
        Prenota oggi una consulenza gratuita e scopri come un direttore commerciale on demand può trasformare il tuo processo di vendita e ottimizzare le tue risorse.
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

      {/* Testimonials Section */}
      <TestimonialsCarousel />

      {/* About Marco Ferrario - Same as homepage */}
      <AboutSection />

      {/* Book Section - Same as homepage */}
      <LeadMagnetSection />

      {/* Contact Form + CTA - Same as homepage */}
      <FinalCTASection />

      {/* Footer - Same as homepage */}
      <Footer />
    </div>
  );
};

export default StrategicConsulting;
