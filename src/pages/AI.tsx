import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import FinalCTASection from "@/components/FinalCTASection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, Bot, Youtube, MessageSquare, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const AI = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const brandLogos = [
    "/lovable-uploads/c015aef0-9ac6-47d5-8f1b-ea8aff14dd08.png",
    "/lovable-uploads/655e08e7-f709-41c5-9b01-f624d4dea2ce.png",
    "/lovable-uploads/fe2c67ca-9c86-4598-b7ce-05d1ef35dbbf.png",
    "/lovable-uploads/871bbc8b-f67d-4537-a7a2-574d06a9e919.png",
    "/lovable-uploads/d4a117b0-a098-4850-9d53-82ee30cbdb21.png",
    "/lovable-uploads/5a8470d1-8aa8-4ee0-a0c5-efbe23f61c0b.png",
    "/lovable-uploads/57e4bdda-6fe0-4184-b948-1e51ef3229c1.png",
  ];

  const services = [
    {
      icon: Youtube,
      title: "Monetizza YouTube",
      description: "Trasforma il tuo canale YouTube in una macchina per generare lead e vendite",
      features: ["Strategia content", "Automazione lead", "ROI ottimizzato"],
      link: "/monetizza-youtube"
    },
    {
      icon: Bot,
      title: "Instant Avatar",
      description: "Crea video personalizzati con avatar AI per campagne marketing uniche",
      features: ["Avatar personalizzato", "Video automatici", "Engagement alto"],
      link: "/instant-avatar"
    },
    {
      icon: MessageSquare,
      title: "Chatbot AI",
      description: "Assistenti virtuali intelligenti per siti web e piattaforme di messaggistica",
      features: ["Supporto H24", "Lead qualification", "Integrazione seamless"],
      link: "/chatbot-ai"
    },
    {
      icon: Zap,
      title: "Automazione AI",
      description: "Workflow intelligenti che automatizzano marketing e vendite",
      features: ["Automazione completa", "AI integrata", "Efficienza massima"],
      link: "/automazione-ai"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.max(1, services.length - 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.max(1, services.length - 3)) % Math.max(1, services.length - 3));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with Video Background */}
      <section className="pt-20 pb-2 px-0 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="relative min-h-[85vh] rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 border border-blue-200/30 shadow-2xl">
            {/* Background Video */}
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="absolute inset-0 w-full h-full object-cover z-0"
            >
              <source src="https://res.cloudinary.com/dufcnrcfe/video/upload/v1752759463/salesondemand_3_fdbwrl.mp4" type="video/mp4" />
            </video>
            
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/50 to-blue-900/80 z-10" />
            
            {/* Bottom gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-900/90 via-blue-800/60 to-transparent z-10" />
            
            {/* Content positioned at bottom left */}
            <div className="absolute bottom-12 left-12 max-w-2xl z-20">
              <div className="mb-6 flex items-center space-x-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 text-white" />
                  <span className="text-white font-medium text-sm">Intelligenza Artificiale</span>
                </div>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8 text-white drop-shadow-2xl">
                Automazioni AI
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-100 mb-8 font-light leading-relaxed max-w-2xl">
                Soluzioni di intelligenza artificiale avanzate per <span className="font-semibold text-blue-200">automatizzare marketing e vendite</span>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="group font-semibold px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white text-blue-900 hover:bg-blue-50 border-2 border-white/30">
                  <span className="flex items-center space-x-2">
                    <span>Scopri le automazioni</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI-focused Complete Intro Section */}
      <section className="relative overflow-hidden">
        {/* Main Intro Section with Light Background */}
        <div className="bg-white py-24 lg:py-32 relative">
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center space-y-12">
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#2E8BC0]/10 to-[#87CEEB]/10 rounded-full border border-[#2E8BC0]/20 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-[#2E8BC0]" />
                <span className="text-[#2E8BC0] font-semibold text-sm">Soluzioni AI innovative</span>
              </div>

              {/* Main Headlines with Modern Typography */}
              <div className="space-y-8">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                  Intelligenza artificiale{" "}
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-[#2E8BC0] via-[#87CEEB] to-[#2E8BC0] bg-clip-text text-transparent">
                      performante
                    </span>
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] rounded-full opacity-60"></div>
                  </span>
                  <br />
                  per il tuo business
                </h1>
                
                <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-4xl mx-auto leading-relaxed">
                  Sales on Demand sviluppa{" "}
                  <span className="text-[#2E8BC0] font-semibold">soluzioni AI complete</span> per automatizzare 
                  marketing e vendite. Tecnologie all'avanguardia che lavorano 24/7 per far crescere il tuo business 
                  con efficienza e precisione.
                </p>
              </div>

              {/* Second headline */}
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  <span className="text-slate-600">Automatizzate, intelligenti.</span>
                  <br />
                  <span className="text-slate-900">Sempre attive.</span>
                </h2>
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
                      Scopri le soluzioni AI
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dark Quote Section */}
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
                <span className="text-[#87CEEB] font-medium text-sm">La nostra visione</span>
              </div>

              <blockquote className="space-y-6">
                <div className="relative">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                    L'AI non sostituisce l'uomo,{" "}
                    <span className="bg-gradient-to-r from-[#87CEEB] to-[#2E8BC0] bg-clip-text text-transparent">
                      lo potenzia
                    </span>
                  </h3>
                  
                  {/* Modern Quote Marks */}
                  <div className="absolute -top-6 -left-6 w-8 h-8 bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] rounded-lg flex items-center justify-center opacity-20">
                    <span className="text-white text-lg font-bold">"</span>
                  </div>
                </div>

                <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                  Trasformiamo processi complessi in automazioni intelligenti che lavorano per te
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



      {/* Services Section - styled like the reference image */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header section positioned top left */}
          <div className="text-left mb-16 max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              I nostri{" "}
              <span className="text-[#2E8BC0]">servizi</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Soluzioni complete di outsourcing per vendite e marketing. Ogni servizio è 
              progettato per integrarsi perfettamente con il tuo business.
            </p>
          </div>

          {/* Services Grid - 4 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
                  <div className="space-y-6">
                    {/* Icon with light blue background */}
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-[#2E8BC0]" />
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                      <p className="text-slate-600 leading-relaxed text-sm">{service.description}</p>
                      
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm text-slate-600">
                            <div className="w-1.5 h-1.5 bg-[#2E8BC0] rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link to={service.link}>
                      <Button className="w-full mt-6 bg-[#2E8BC0] hover:bg-[#2E8BC0]/90 text-white font-semibold py-3 rounded-xl transition-all duration-300">
                        Scopri di più
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Image Section */}
      <section className="py-40 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: `url(https://res.cloudinary.com/dufcnrcfe/image/upload/v1752430999/a14ff2cd-e917-4480-9942-acd5b5e88d41.mp4_5_fg4olu.png)` }}
        />
        
        {/* Enhanced Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#2E8BC0]/30 via-transparent to-[#55ACEE]/20 z-10" />
        
        <div className="max-w-6xl mx-auto px-6 text-center relative z-20">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-2xl bg-black/20 backdrop-blur-sm rounded-lg px-6 py-4 mb-6 border border-white/10">
              Rivoluziona il tuo business con{" "}
              <span className="text-[#87CEEB] bg-gradient-to-r from-[#87CEEB] to-[#55ACEE] bg-clip-text text-transparent">l'intelligenza artificiale</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed drop-shadow-xl font-medium bg-black/30 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/10">
              Scopri come le nostre soluzioni AI innovative possono automatizzare 
              i tuoi processi e accelerare la crescita del tuo business.
            </p>
            
            <Button className="bg-gradient-to-r from-[#55ACEE] to-[#87CEEB] hover:from-[#2E8BC0] hover:to-[#55ACEE] text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Richiedi una demo
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
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
              <Bot className="w-6 h-6 mr-3 animate-spin" style={{ animationDuration: '3s' }} />
              Il Nostro Processo AI
            </div>
            <h2 className="text-5xl lg:text-7xl font-black leading-[0.85] tracking-tight text-slate-900 mb-12">
              Come{" "}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Funziona
              </span>
            </h2>
            <p className="text-xl lg:text-2xl leading-relaxed text-slate-600 max-w-3xl mx-auto">
              Un approccio sistematico che garantisce <span className="font-bold text-primary">risultati misurabili</span>
            </p>
          </div>
          
          {/* AI Process Phases */}
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {[
                {
                  number: "01",
                  title: "Analisi & Strategia AI",
                  description: "Analizziamo i tuoi processi attuali e identifichiamo le opportunità di automazione con AI.",
                  benefit: "Strategia personalizzata basata sui tuoi obiettivi",
                  icon: Bot
                },
                {
                  number: "02", 
                  title: "Implementazione Intelligente",
                  description: "Sviluppiamo e integriamo soluzioni AI su misura per il tuo business.",
                  benefit: "Automazioni avanzate e workflow ottimizzati",
                  icon: Zap
                },
                {
                  number: "03",
                  title: "Monitoraggio & Ottimizzazione", 
                  description: "Monitoriamo costantemente le performance e ottimizziamo i risultati.",
                  benefit: "Miglioramento continuo e ROI crescente",
                  icon: Users
                },
                {
                  number: "04",
                  title: "Scalabilità & Crescita",
                  description: "Espandiamo le soluzioni AI per supportare la crescita del tuo business.",
                  benefit: "Crescita sostenibile con tecnologie all'avanguardia",
                  icon: ArrowRight
                }
              ].map((phase, index) => {
                const Icon = phase.icon;
                const isEven = index % 2 === 0;
                return (
                  <div key={index} className={`group relative ${isEven ? 'lg:mr-8' : 'lg:ml-8 lg:mt-16'}`}>
                    {/* Phase Number Badge */}
                    <div className={`absolute -top-6 ${isEven ? '-left-6' : '-right-6'} w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-white font-black text-xl shadow-2xl group-hover:scale-110 transition-transform duration-300 z-10`}>
                      {phase.number}
                    </div>
                    
                    {/* Main Card */}
                    <div className="relative p-10 rounded-3xl bg-white/80 backdrop-blur-xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-700 hover:scale-105 group-hover:rotate-1 overflow-hidden">
                      
                      {/* Icon Section */}
                      <div className="flex items-start space-x-8 relative z-10">
                        <div className="flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary-glow/10 group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                          <Icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-3xl lg:text-4xl font-black mb-6 text-slate-900 group-hover:text-primary transition-colors duration-300">
                            {phase.title}
                          </h3>
                          <p className="text-xl lg:text-2xl mb-8 text-gray-700 leading-relaxed">
                            {phase.description}
                          </p>
                          
                          {/* Benefit Badge */}
                          <div className="inline-flex items-center space-x-3 px-6 py-4 rounded-2xl bg-primary/10 border border-primary/20 group-hover:scale-105 transition-transform duration-300">
                            <Sparkles className="w-6 h-6 text-primary animate-pulse" />
                            <span className="font-bold text-lg text-primary">
                              {phase.benefit}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative overflow-hidden bg-white">
        {/* Premium Background */}
        <div className="absolute inset-0">
          {/* Elegant Gradient Orbs */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary-glow/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="container mx-auto px-6 py-32 relative z-20">
          <div className="text-center mb-24 animate-fade-in">
            {/* Premium Badge */}
            <div className="inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold mb-8 bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-2xl border border-slate-700/20 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-3xl group">
              <Sparkles className="w-6 h-6 mr-3 group-hover:animate-pulse" />
              <span className="bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">Vantaggi Esclusivi</span>
            </div>
            
            {/* Elegant Typography */}
            <h2 className="text-5xl lg:text-7xl font-black mb-6 leading-tight text-slate-900 tracking-tight">
              Perché Scegliere <br />
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent drop-shadow-sm">
                Le Nostre Soluzioni AI
              </span>
            </h2>
            
            {/* Decorative Line */}
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full shadow-lg" />
          </div>
          
          {/* Premium Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Automazione Intelligente",
                description: "Libera il tuo team dalle attività ripetitive con automazioni AI che lavorano 24/7 per far crescere il tuo business."
              },
              {
                title: "Risultati Misurabili",
                description: "Monitoraggio in tempo reale delle performance con dashboard avanzate e analytics predittive basate su AI."
              },
              {
                title: "Scalabilità Senza Limiti",
                description: "Cresci rapidamente senza aumentare i costi operativi grazie a soluzioni AI che si adattano alle tue esigenze."
              }
            ].map((benefit, index) => (
              <div 
                key={index} 
                className="group relative animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Premium Number Badge */}
                <div className="absolute -top-6 -left-6 w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center text-white font-black text-2xl shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 z-10 border border-slate-700/30">
                  <span className="bg-gradient-to-br from-white to-slate-200 bg-clip-text text-transparent">
                    {index + 1}
                  </span>
                </div>
                
                {/* Elegant Card */}
                <div className="relative p-10 pt-16 rounded-3xl bg-white shadow-[0_20px_70px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_80px_-15px_rgba(0,0,0,0.15)] border border-slate-100 transition-all duration-700 hover:scale-[1.02] hover:-translate-y-2 group-hover:border-slate-200 overflow-hidden">
                  
                  {/* Elegant Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-slate-50/30 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-slate-900 group-hover:text-primary transition-colors duration-500 leading-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-lg leading-relaxed text-slate-600 group-hover:text-slate-700 transition-colors duration-500">
                      {benefit.description}
                    </p>
                    
                    {/* Elegant Accent Line */}
                    <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary-glow mt-8 rounded-full group-hover:w-24 transition-all duration-500 shadow-sm" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsCarousel />
      <AboutSection />
      <LeadMagnetSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default AI;