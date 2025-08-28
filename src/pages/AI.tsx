import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StandardIntroSection from "@/components/shared/StandardIntroSection";
import StandardCustomersSection from "@/components/shared/StandardCustomersSection";
import StandardQuoteSection from "@/components/shared/StandardQuoteSection";
import AboutSection from "@/components/AboutSection";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import FinalCTASection from "@/components/FinalCTASection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import CrossSellRecommendations from "@/components/CrossSellRecommendations";
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
          
          {/* AI Process Phases - Mobile optimized */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
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
                  <div key={index} className={`group relative ${isEven ? 'lg:mr-4' : 'lg:ml-4 lg:mt-16'}`}>
                    {/* Phase Number Badge - Mobile friendly positioning */}
                    <div className={`absolute -top-4 left-4 lg:-top-6 ${isEven ? 'lg:-left-6' : 'lg:-right-6'} w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-white font-black text-lg lg:text-xl shadow-2xl group-hover:scale-110 transition-transform duration-300 z-10`}>
                      {phase.number}
                    </div>
                    
                    {/* Main Card - Mobile optimized */}
                    <div className="relative p-6 sm:p-8 lg:p-10 pt-12 lg:pt-10 rounded-3xl bg-white/80 backdrop-blur-xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-700 hover:scale-105 group-hover:rotate-1 overflow-hidden mx-2 lg:mx-0">
                      
                      {/* Icon Section - Mobile responsive */}
                      <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8 relative z-10">
                        <div className="flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary-glow/10 group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                          <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-black mb-4 lg:mb-6 text-slate-900 group-hover:text-primary transition-colors duration-300 leading-tight">
                            {phase.title}
                          </h3>
                          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl mb-6 lg:mb-8 text-gray-700 leading-relaxed">
                            {phase.description}
                          </p>
                          
                          {/* Benefit Badge - Mobile responsive */}
                          <div className="inline-flex items-center space-x-2 lg:space-x-3 px-4 lg:px-6 py-3 lg:py-4 rounded-2xl bg-primary/10 border border-primary/20 group-hover:scale-105 transition-transform duration-300">
                            <Sparkles className="w-5 h-5 lg:w-6 lg:h-6 text-primary animate-pulse" />
                            <span className="font-bold text-sm sm:text-base lg:text-lg text-primary">
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
      
      {/* Cross-Sell Recommendations */}
      <CrossSellRecommendations
        currentService="ai"
        layout="horizontal"
        title="Completa la tua trasformazione AI"
        subtitle="Aziende che scelgono AI Services aggiungono spesso questi servizi per massimizzare l'efficacia"
      />
      
      <AboutSection />
      <LeadMagnetSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default AI;