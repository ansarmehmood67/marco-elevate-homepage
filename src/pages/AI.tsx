import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import FinalCTASection from "@/components/FinalCTASection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, Bot, Youtube, MessageSquare, Zap, ChevronLeft, ChevronRight, Target, TrendingUp, Activity } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

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
    },
    {
      icon: Target,
      title: "Web & App Development",
      description: "Build smart, scalable apps tailored to your business",
      features: ["Custom Design & UX", "Cross-Platform Apps", "API-Ready Architecture"],
      link: "/web-app-development"
    },
    {
      icon: TrendingUp,
      title: "SaaS Platforms",
      description: "Launch your own smart software",
      features: ["Scalable Infrastructure", "Subscription & Payments", "Multi-User Systems"],
      link: "/saas-platforms"
    },
    {
      icon: Users,
      title: "Smart AI Tools",
      description: "Custom dashboards, internal automations, and smart assistants",
      features: ["CRM-Like Dashboards", "Internal Automations", "Data Sync & APIs"],
      link: "/smart-ai-tools"
    },
    {
      icon: Sparkles,
      title: "AI Integration",
      description: "Plug AI into your existing systems and processes",
      features: ["CRM & Chatbot Integration", "AI-Powered Emails", "Predictive Analytics"],
      link: "/ai-integration"
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
            
            {/* Digital Matrix Rain Effect */}
            <div className="absolute inset-0 opacity-10 pointer-events-none z-5">
              <div className="matrix-rain">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div
                    key={i}
                    className="matrix-column"
                    style={{
                      left: `${i * 5}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      animationDuration: `${3 + Math.random() * 2}s`
                    }}
                  >
                    {Array.from({ length: 15 }).map((_, j) => (
                      <span
                        key={j}
                        className="matrix-char"
                        style={{ animationDelay: `${j * 0.1}s` }}
                      >
                        {Math.random() > 0.5 ? '1' : '0'}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            
            {/* AI Neural Network Background */}
            <div className="absolute inset-0 opacity-20 pointer-events-none z-5">
              <svg className="w-full h-full" viewBox="0 0 800 600">
                {/* Neural Network Nodes */}
                <circle cx="100" cy="150" r="3" fill="#2E8BC0" className="animate-pulse">
                  <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="200" cy="100" r="3" fill="#87CEEB" className="animate-pulse" style={{ animationDelay: '0.5s' }}>
                  <animate attributeName="r" values="3;5;3" dur="1.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="300" cy="200" r="3" fill="#2E8BC0" className="animate-pulse" style={{ animationDelay: '1s' }}>
                  <animate attributeName="r" values="3;7;3" dur="2.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="400" cy="120" r="3" fill="#87CEEB" className="animate-pulse" style={{ animationDelay: '1.5s' }}>
                  <animate attributeName="r" values="3;4;3" dur="1.8s" repeatCount="indefinite"/>
                </circle>
                <circle cx="500" cy="180" r="3" fill="#2E8BC0" className="animate-pulse" style={{ animationDelay: '2s' }}>
                  <animate attributeName="r" values="3;6;3" dur="2.2s" repeatCount="indefinite"/>
                </circle>
                
                {/* Neural Network Connections */}
                <line x1="100" y1="150" x2="200" y2="100" stroke="#2E8BC0" strokeWidth="1" opacity="0.4">
                  <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite"/>
                </line>
                <line x1="200" y1="100" x2="300" y2="200" stroke="#87CEEB" strokeWidth="1" opacity="0.4">
                  <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2.5s" repeatCount="indefinite" begin="0.5s"/>
                </line>
                <line x1="300" y1="200" x2="400" y2="120" stroke="#2E8BC0" strokeWidth="1" opacity="0.4">
                  <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2.8s" repeatCount="indefinite" begin="1s"/>
                </line>
                <line x1="400" y1="120" x2="500" y2="180" stroke="#87CEEB" strokeWidth="1" opacity="0.4">
                  <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2.3s" repeatCount="indefinite" begin="1.5s"/>
                </line>
              </svg>
            </div>
            
            {/* Bottom gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 to-transparent z-10" />
            
            {/* Content positioned at bottom left */}
            <div className="absolute bottom-12 left-12 max-w-2xl z-20">
              <div className="mb-6 flex items-center space-x-4">
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
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8 text-white drop-shadow-2xl">
                {typedText}
                <span className="animate-pulse">|</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-100 mb-8 font-light leading-relaxed max-w-2xl">
                {greeting}! Soluzioni di intelligenza artificiale avanzate per <span className="font-semibold text-blue-200">automatizzare marketing e vendite</span>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="group font-semibold px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white text-black hover:bg-gray-100 border-2 border-white/30">
                  <span className="flex items-center space-x-2">
                    <span>Scopri le automazioni</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </div>
            </div>

            {/* AI Chat Preview - Top Right */}
            <div className="absolute top-12 right-12 z-20">
              <div className="w-80 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-4 shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#2E8BC0] to-[#87CEEB] rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">AI Assistant</div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-white/70 text-xs">Online</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-[#2E8BC0]/20 rounded-lg p-3 text-white text-sm">
                    Ciao! Come posso aiutarti ad automatizzare il tuo business oggi?
                  </div>
                  
                  <div className="flex items-center gap-2 text-white/60 text-xs">
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>
                      <div className="w-1 h-1 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-1 h-1 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                    AI sta scrivendo...
                  </div>
                </div>
              </div>
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
        
        {/* CSS for Matrix Rain Effect */}
        <style>{`
          .matrix-rain {
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
          }
          
          .matrix-column {
            position: absolute;
            top: -100%;
            width: 20px;
            animation: matrix-fall linear infinite;
            color: #2E8BC0;
            font-family: 'Courier New', monospace;
            font-size: 14px;
            font-weight: bold;
          }
          
          .matrix-char {
            display: block;
            opacity: 0;
            animation: matrix-fade 0.5s ease-in-out infinite alternate;
          }
          
          @keyframes matrix-fall {
            to {
              transform: translateY(100vh);
            }
          }
          
          @keyframes matrix-fade {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
        `}</style>
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
            
            {/* Enhanced Logo Slider with AI Processing Effect */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-50 via-white to-slate-50 p-8 border border-slate-200/50">
              {/* AI Processing Indicator */}
              <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 bg-[#2E8BC0]/10 rounded-full border border-[#2E8BC0]/20">
                <div className="w-2 h-2 bg-[#2E8BC0] rounded-full animate-pulse"></div>
                <span className="text-[#2E8BC0] text-xs font-semibold">AI Analyzing</span>
              </div>
              
              {/* Scan Line Effect */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="scan-line"></div>
              </div>
              
              {/* Fade effects */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
              
              {/* Sliding logos */}
              <div className="flex animate-[slide_30s_linear_infinite] items-center gap-16">
                {/* First set */}
                {brandLogos.map((logo, index) => (
                  <div key={index} className="flex-shrink-0 group relative">
                    <div className="p-4 rounded-xl bg-white shadow-sm border border-slate-100 group-hover:shadow-md group-hover:border-[#2E8BC0]/20 transition-all duration-300 relative overflow-hidden">
                      <img 
                        src={logo} 
                        alt={`Brand ${index + 1}`}
                        className="h-12 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      {/* AI Processing Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#2E8BC0]/5 to-[#87CEEB]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                    </div>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {brandLogos.map((logo, index) => (
                  <div key={`dup-${index}`} className="flex-shrink-0 group relative">
                    <div className="p-4 rounded-xl bg-white shadow-sm border border-slate-100 group-hover:shadow-md group-hover:border-[#2E8BC0]/20 transition-all duration-300 relative overflow-hidden">
                      <img 
                        src={logo} 
                        alt={`Brand ${index + 1}`}
                        className="h-12 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      {/* AI Processing Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#2E8BC0]/5 to-[#87CEEB]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced floating AI elements */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-[#2E8BC0] rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-[#87CEEB] rounded-full opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-4 h-4 bg-[#2E8BC0] rounded-full opacity-20 animate-pulse delay-2000"></div>
        
        {/* AI Circuit Pattern */}
        <div className="absolute top-1/3 right-1/4 opacity-10">
          <svg width="60" height="60" viewBox="0 0 60 60" className="text-[#2E8BC0]">
            <circle cx="30" cy="30" r="2" fill="currentColor" className="animate-pulse"/>
            <circle cx="10" cy="10" r="1" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.5s' }}/>
            <circle cx="50" cy="50" r="1.5" fill="currentColor" className="animate-pulse" style={{ animationDelay: '1s' }}/>
            <line x1="30" y1="30" x2="10" y2="10" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
            <line x1="30" y1="30" x2="50" y2="50" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
          </svg>
        </div>
        
        <style>{`
          @keyframes slide {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
          
          .scan-line {
            position: absolute;
            top: 0;
            left: -100%;
            width: 2px;
            height: 100%;
            background: linear-gradient(to bottom, transparent, #2E8BC0, transparent);
            animation: scan 3s linear infinite;
          }
          
          @keyframes scan {
            0% { left: -100%; }
            100% { left: 100%; }
          }
        `}</style>
      </section>

      {/* Services Section - Carousel - Full Width */}
      <section className="py-20 bg-black relative overflow-hidden">
        {/* Advanced AI Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating AI Particles */}
          <div className="absolute top-20 left-10 w-2 h-2 bg-[#2E8BC0] rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-[#87CEEB] rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-20 w-3 h-3 bg-[#2E8BC0] rounded-full opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-60 right-40 w-2 h-2 bg-[#87CEEB] rounded-full opacity-50 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-20 right-10 w-1 h-1 bg-[#2E8BC0] rounded-full opacity-70 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          
          {/* Data Stream Lines */}
          <div className="data-streams">
            <div className="stream stream-1"></div>
            <div className="stream stream-2"></div>
            <div className="stream stream-3"></div>
          </div>
        </div>
        
        {/* CSS for Data Streams */}
        <style>{`
          .data-streams {
            position: absolute;
            inset: 0;
            overflow: hidden;
          }
          
          .stream {
            position: absolute;
            width: 2px;
            height: 100px;
            background: linear-gradient(to bottom, transparent, #2E8BC0, transparent);
            opacity: 0.3;
          }
          
          .stream-1 {
            left: 20%;
            animation: stream-flow 4s linear infinite;
          }
          
          .stream-2 {
            left: 50%;
            animation: stream-flow 3s linear infinite reverse;
            animation-delay: 1s;
            background: linear-gradient(to bottom, transparent, #87CEEB, transparent);
          }
          
          .stream-3 {
            left: 80%;
            animation: stream-flow 5s linear infinite;
            animation-delay: 2s;
          }
          
          @keyframes stream-flow {
            0% { transform: translateY(-100vh); opacity: 0; }
            50% { opacity: 0.3; }
            100% { transform: translateY(100vh); opacity: 0; }
          }
        `}</style>
        {/* Header section - contained but background full width */}
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="flex justify-between items-start">
            {/* Header section positioned top left */}
            <div className="text-left max-w-2xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                I nostri{" "}
                <span className="text-[#2E8BC0]">servizi</span>
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
                    <div className="bg-white rounded-2xl p-8 hover:shadow-xl hover:shadow-[#2E8BC0]/20 transition-all duration-300 group h-full animate-fade-in border border-transparent hover:border-[#2E8BC0]/20 hover:scale-[1.02]">
                      <div className="space-y-6">
                        {/* Icon with light blue background and AI glow effect */}
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#2E8BC0]/30 transition-all duration-300 relative">
                          <IconComponent className="w-8 h-8 text-[#2E8BC0] group-hover:animate-pulse" />
                          <div className="absolute inset-0 bg-[#2E8BC0]/10 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>
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
                          <Button className="w-full mt-6 bg-[#2E8BC0] hover:bg-[#2E8BC0]/90 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover-scale group-hover:shadow-lg group-hover:shadow-[#2E8BC0]/40 relative overflow-hidden">
                            <span className="relative z-10">Scopri di più</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#87CEEB] to-[#2E8BC0] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </Button>
                        </Link>
                      </div>
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
      
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default AI;