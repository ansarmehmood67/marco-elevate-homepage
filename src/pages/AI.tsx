import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StandardIntroSection from "@/components/shared/StandardIntroSection";
import StandardCustomersSection from "@/components/shared/StandardCustomersSection";
import StandardQuoteSection from "@/components/shared/StandardQuoteSection";
import AboutSection from "@/components/AboutSection";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import MailerLiteContactSection from "@/components/MailerLiteContactSection";
import TestimonialsOptimized from "@/components/TestimonialsOptimized";
import CrossSellRecommendations from "@/components/CrossSellRecommendations";
import AllServicesCarousel from "@/components/shared/AllServicesCarousel";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, Bot, Youtube, MessageSquare, Zap, ChevronLeft, ChevronRight, Target, TrendingUp, Activity } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// Background images for service cards
import youtubeBg from "@/assets/youtube-monetization-bg.jpg";
import avatarBg from "@/assets/instant-avatar-bg.jpg";
import chatbotBg from "@/assets/chatbot-ai-bg.jpg";
import automationBg from "@/assets/ai-automation-bg.jpg";
import webDevBg from "@/assets/web-app-development-bg.jpg";
import saasBg from "@/assets/saas-platforms-bg.jpg";
import smartToolsBg from "@/assets/smart-ai-tools-bg.jpg";
import integrationBg from "@/assets/ai-integration-bg.jpg";

const AI = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [aiCounter, setAiCounter] = useState(247);
  const [greeting, setGreeting] = useState("");

  // Time-based greeting
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting("Buongiorno");
    } else if (hour < 18) {
      setGreeting("Buon pomeriggio");
    } else {
      setGreeting("Buonasera");
    }
  }, []);

  // Typing animation for hero title
  useEffect(() => {
    const text = "Automazioni AI";
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= text.length) {
        setTypedText(text.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  // AI automation counter
  useEffect(() => {
    const counterInterval = setInterval(() => {
      setAiCounter(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 5000);

    return () => clearInterval(counterInterval);
  }, []);
  
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
      link: "/monetizza-youtube",
      backgroundImage: youtubeBg
    },
    {
      icon: Bot,
      title: "Instant Avatar",
      description: "Crea video personalizzati con avatar AI per campagne marketing uniche",
      features: ["Avatar personalizzato", "Video automatici", "Engagement alto"],
      link: "/instant-avatar",
      backgroundImage: avatarBg
    },
    {
      icon: MessageSquare,
      title: "Chatbot AI",
      description: "Assistenti virtuali intelligenti per siti web e piattaforme di messaggistica",
      features: ["Supporto H24", "Lead qualification", "Integrazione seamless"],
      link: "/chatbot-ai",
      backgroundImage: chatbotBg
    },
    {
      icon: Zap,
      title: "Automazione AI",
      description: "Workflow intelligenti che automatizzano marketing e vendite",
      features: ["Automazione completa", "AI integrata", "Efficienza massima"],
      link: "/automazione-ai",
      backgroundImage: automationBg
    },
    {
      icon: Target,
      title: "Web & App Development",
      description: "Build smart, scalable apps tailored to your business",
      features: ["Custom Design & UX", "Cross-Platform Apps", "API-Ready Architecture"],
      link: "/web-app-development",
      backgroundImage: webDevBg
    },
    {
      icon: TrendingUp,
      title: "SaaS Platforms",
      description: "Launch your own smart software",
      features: ["Scalable Infrastructure", "Subscription & Payments", "Multi-User Systems"],
      link: "/saas-platforms",
      backgroundImage: saasBg
    },
    {
      icon: Users,
      title: "Smart AI Tools",
      description: "Custom dashboards, internal automations, and smart assistants",
      features: ["CRM-Like Dashboards", "Internal Automations", "Data Sync & APIs"],
      link: "/smart-ai-tools",
      backgroundImage: smartToolsBg
    },
    {
      icon: Sparkles,
      title: "AI Integration",
      description: "Plug AI into your existing systems and processes",
      features: ["CRM & Chatbot Integration", "AI-Powered Emails", "Predictive Analytics"],
      link: "/ai-integration",
      backgroundImage: integrationBg
    }
  ];

  const itemsPerView = 4;
  const maxIndex = Math.max(0, services.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with Video Background */}
      <section className="pt-20 pb-2 px-0 bg-black">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="relative min-h-[85vh] rounded-3xl overflow-hidden bg-black border border-gray-800/30 shadow-2xl">
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
            <div className="absolute inset-0 bg-black/70" />
            
            {/* Bottom gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 to-transparent z-10" />
            
            {/* Mobile-friendly flex layout */}
            <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 lg:p-12 z-20">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-8">
                {/* Content */}
                <div className="flex-1 max-w-2xl">
                  <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                    {/* AI Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm">
                      <Sparkles className="w-4 h-4 text-white" />
                      <span className="text-white font-medium text-sm">Intelligenza Artificiale</span>
                    </div>
                    
                    {/* AI Status Indicator */}
                    <div className="inline-flex items-center gap-2 px-3 py-2 bg-[#2E8BC0]/20 rounded-full border border-[#2E8BC0]/30 backdrop-blur-sm">
                      <div className="w-2 h-2 bg-[#87CEEB] rounded-full animate-pulse"></div>
                      <span className="text-white font-medium text-xs">
                        {aiCounter} automazioni attive
                      </span>
                    </div>
                  </div>
                  
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold leading-tight mb-6 lg:mb-8 text-white drop-shadow-2xl">
                    {typedText}
                    <span className="animate-pulse">|</span>
                  </h1>
                  
                  <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 mb-6 lg:mb-8 font-light leading-relaxed">
                    {greeting}! Soluzioni di intelligenza artificiale avanzate per <span className="font-semibold text-blue-200">automatizzare marketing e vendite</span>.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="group font-semibold px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white text-black hover:bg-gray-100 border-2 border-white/30">
                      <span className="flex items-center space-x-2">
                        <span>Scopri le automazioni</span>
                        <ArrowRight className="w-4 lg:w-5 h-4 lg:h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </div>
                </div>

                {/* YouTube Video Player - Responsive positioning */}
                <div className="w-full sm:w-80 lg:w-80 h-48 rounded-xl overflow-hidden shadow-2xl border-2 border-white/20 backdrop-blur-sm lg:flex-shrink-0">
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
        </div>
      </section>

      <StandardIntroSection
        badge="SOLUZIONI AI INNOVATIVE"
        title="Intelligenza artificiale performante per il tuo"
        highlightedText="business"
        description="Sales on Demand sviluppa soluzioni AI complete per automatizzare marketing e vendite. Tecnologie all'avanguardia che lavorano 24/7 per far crescere il tuo business con efficienza e precisione."
        ctaText="Scopri le soluzioni AI"
        ctaHref="/contact"
      />
      <StandardCustomersSection />
      <StandardQuoteSection
        mainQuote="L'AI non sostituisce l'uomo,"
        highlightedQuote="lo potenzia"
        description="Trasformiamo processi complessi in automazioni intelligenti che lavorano per te"
        ctaText="Scopri come"
        ctaHref="/contact"
      />

      {/* Services Section - Carousel - Full Width */}
      <section className="py-20 bg-black relative overflow-hidden">
        {/* Floating AI Particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-[#2E8BC0] rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-[#87CEEB] rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-20 w-3 h-3 bg-[#2E8BC0] rounded-full opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-60 right-40 w-2 h-2 bg-[#87CEEB] rounded-full opacity-50 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-20 right-10 w-1 h-1 bg-[#2E8BC0] rounded-full opacity-70 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>
        {/* Header section - contained but background full width */}
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="flex justify-between items-start">
            {/* Header section positioned top left */}
            <div className="text-left max-w-2xl">
              <div className="inline-flex items-center px-8 py-4 rounded-full text-sm font-bold tracking-[0.3em] uppercase mb-8 transition-all duration-300 hover:scale-105 shadow-lg bg-primary/10 text-primary border border-primary/20">
                SOLUZIONI AI PREMIUM
              </div>
              <h2 className="text-5xl lg:text-7xl font-black leading-[0.85] tracking-tight text-white leading-tight mb-6">
                I nostri{" "}
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">servizi</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Soluzioni complete di outsourcing per vendite e marketing. Ogni servizio è 
                progettato per integrarsi perfettamente con il tuo business.
              </p>
            </div>

            {/* Navigation buttons - top right */}
            <div className="flex gap-4">
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                disabled={currentIndex >= maxIndex}
                className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Services Carousel - Full Width */}
        <div className="w-full overflow-hidden">
          <div className="flex gap-8 px-6 md:px-8 lg:px-12">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-8 min-w-0"
              style={{ transform: `translateX(-${currentIndex * 320}px)` }}
            >
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="w-80 flex-shrink-0">
                    <div className="relative overflow-hidden rounded-2xl min-h-[480px] group cursor-pointer transition-all duration-500 hover:scale-[1.02]">
                      {/* Background Image */}
                      <div className="absolute inset-0">
                        <img
                          src={service.backgroundImage}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* Smart Dark Overlay with Green Tint */}
                        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-slate-900/70 to-emerald-950/80" />
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 via-transparent to-emerald-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        {/* Edge Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-emerald-500/10 opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                      </div>
                      
                      {/* Content */}
                      <div className="relative z-10 h-full flex flex-col p-6">
                        {/* Primary Color Icon at Top */}
                        <div className="mb-6">
                          <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-300 backdrop-blur-sm border border-primary/30">
                            <IconComponent className="w-7 h-7 text-primary group-hover:text-primary-glow transition-colors duration-300" />
                          </div>
                        </div>
                        
                        {/* Text Content */}
                        <div className="flex-1 space-y-4">
                          <h3 className="text-2xl font-black text-white leading-tight group-hover:text-primary-glow transition-colors duration-300">
                            {service.title}
                          </h3>
                          <p className="text-gray-200 leading-relaxed text-base font-semibold">
                            {service.description}
                          </p>
                          
                          <ul className="space-y-2">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center gap-2 text-base font-medium text-gray-200">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full group-hover:bg-primary-glow transition-colors duration-300"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* CTA Button */}
                        <div className="mt-6">
                          <Link to={service.link}>
                            <Button className="w-full bg-white hover:bg-gray-100 text-black border border-gray-300 transition-all duration-300 group-hover:shadow-lg font-semibold">
                              Scopri di più
                            </Button>
                          </Link>
                        </div>
                      </div>
                      
                      {/* Hover effect overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                );
              })}
            </div>
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
          <source src="https://res.cloudinary.com/dufcnrcfe/video/upload/v1753297500/Untitled_design_15_jnkgck.mp4" type="video/mp4" />
        </video>
        
        {/* Minimal overlay to preserve video visibility */}
        <div className="absolute inset-0 bg-black/20 z-10" />
        
        <div className="max-w-6xl mx-auto px-6 text-center relative z-20">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-2xl">
              Rivoluziona il tuo business con{" "}
              <span className="text-[#87CEEB] drop-shadow-xl">l'intelligenza artificiale</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white leading-relaxed drop-shadow-xl font-medium">
              Scopri come le nostre soluzioni AI innovative possono automatizzare 
              i tuoi processi e accelerare la crescita del tuo business.
            </p>
            
            <Button className="bg-gradient-to-r from-[#55ACEE] to-[#87CEEB] hover:from-[#2E8BC0] hover:to-[#55ACEE] text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Richiedi una demo
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section - Timeline */}
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
            <div className="inline-flex items-center px-8 py-4 rounded-full text-lg font-bold mb-8 bg-gradient-to-r from-primary to-primary-glow text-white shadow-lg transition-all duration-300 hover:scale-105">
              <Bot className="w-6 h-6 mr-3 animate-spin" style={{ animationDuration: '3s' }} />
              <span className="italic">Il Nostro Processo AI</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-black leading-[0.85] tracking-tight text-slate-900 mb-12">
              Come{" "}
              <span className="text-primary">
                Funziona
              </span>
            </h2>
            <p className="text-xl lg:text-2xl leading-relaxed text-slate-600 max-w-3xl mx-auto">
              Un approccio sistematico che garantisce <span className="font-bold text-primary">risultati misurabili</span>
            </p>
          </div>
          
          {/* Timeline Structure */}
          <div className="max-w-5xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-teal-600 via-emerald-600 to-green-700 opacity-30"></div>
            
            <div className="space-y-16">
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
                const isLeft = index % 2 === 0;
                return (
                  <div key={index} className={`relative flex items-center ${isLeft ? 'justify-start' : 'justify-end'}`}>
                    {/* Timeline Node */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-teal-600 via-emerald-600 to-green-700 rounded-full border-4 border-white shadow-lg z-10"></div>
                    
                    {/* Phase Card */}
                    <div className={`w-6/12 ${isLeft ? 'pr-16' : 'pl-16'}`}>
                      <div className="relative min-h-[360px] p-10 rounded-2xl bg-gradient-to-br from-teal-600 via-emerald-600 to-green-700 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group">
                        {/* Phase Number Badge */}
                        <div className={`absolute -top-4 ${isLeft ? '-right-4' : '-left-4'} w-12 h-12 rounded-full bg-white flex items-center justify-center text-teal-600 font-black text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {phase.number}
                        </div>
                        
                        {/* Content */}
                        <div className="space-y-6">
                          {/* Icon */}
                          <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Icon className="w-7 h-7 text-white" />
                          </div>
                          
                          {/* Title and Description */}
                          <h3 className="text-2xl font-black text-white leading-tight">
                            {phase.title}
                          </h3>
                          <p className="text-white/90 leading-relaxed text-base">
                            {phase.description}
                          </p>
                          
                          {/* Benefit Badge */}
                          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/20 border border-white/30 backdrop-blur-sm">
                            <Sparkles className="w-4 h-4 text-white" />
                            <span className="font-semibold text-white text-sm">
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
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary-glow/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="container mx-auto px-6 py-32 relative z-20">
          <div className="text-center mb-24 animate-fade-in">
            {/* Premium Badge */}
            <div className="inline-flex items-center px-8 py-4 rounded-full text-lg font-bold mb-8 bg-gradient-to-r from-primary to-primary-glow text-white shadow-2xl backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-3xl group">
              <Sparkles className="w-6 h-6 mr-3 group-hover:animate-pulse" />
              <span className="italic">Vantaggi Esclusivi</span>
            </div>
            
            {/* Elegant Typography */}
            <h2 className="text-5xl lg:text-7xl font-black mb-6 leading-tight text-slate-900 tracking-tight">
              Perché Scegliere <br />
              <span className="text-primary drop-shadow-sm">
                Le Nostre Soluzioni AI
              </span>
            </h2>
            
            {/* Decorative Line */}
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full shadow-lg" />
          </div>
          
          {/* Three Cards in Row */}
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Automazione Intelligente",
                  description: "Libera il tuo team dalle attività ripetitive con automazioni AI che lavorano 24/7 per far crescere il tuo business.",
                  points: [
                    "Automazione processi di vendita",
                    "Gestione lead automatizzata", 
                    "Follow-up intelligente",
                    "Reportistica automatica"
                  ],
                  icon: Bot
                },
                {
                  title: "Risultati Misurabili",
                  description: "Monitoraggio in tempo reale delle performance con dashboard avanzate e analytics predittive basate su AI.",
                  points: [
                    "Dashboard in tempo reale",
                    "Analytics predittive avanzate",
                    "ROI tracking dettagliato",
                    "KPI personalizzabili"
                  ],
                  icon: Activity
                },
                {
                  title: "Scalabilità Senza Limiti",
                  description: "Cresci rapidamente senza aumentare i costi operativi grazie a soluzioni AI che si adattano alle tue esigenze.",
                  points: [
                    "Infrastruttura cloud scalabile",
                    "Costi operativi ridotti",
                    "Crescita sostenibile",
                    "Adattabilità completa"
                  ],
                  icon: TrendingUp
                }
              ].map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="group">
                    <div className="relative min-h-[420px] p-8 rounded-2xl bg-gradient-to-br from-teal-600 via-emerald-600 to-green-700 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                      {/* Icon */}
                      <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* Content */}
                      <div className="space-y-6">
                        <h3 className="text-2xl font-black text-white leading-tight">
                          {benefit.title}
                        </h3>
                        <p className="text-white/90 leading-relaxed text-base">
                          {benefit.description}
                        </p>
                        
                        {/* Bullet Points */}
                        <ul className="space-y-3">
                          {benefit.points.map((point, pointIndex) => (
                            <li key={pointIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0" />
                              <span className="text-white font-medium">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <TestimonialsOptimized />
      
      {/* Cross-Sell Recommendations - Mid-page focused cross-sell */}
      <CrossSellRecommendations
        currentService="ai"
        layout="horizontal"
        title="Amplia le tue soluzioni AI"
        subtitle="Le aziende che integrano questi servizi AI ottengono risultati superiori del 95%"
      />

      <AboutSection />
      <LeadMagnetSection />
      
      {/* All Services Carousel - Complete service discovery */}
      <AllServicesCarousel />
      <MailerLiteContactSection />
      <Footer />
    </div>
  );
};

export default AI;