import { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, Users, PhoneCall, Headphones, Megaphone, PieChart, TrendingUp, Youtube, Bot, UserRound, Workflow, Globe, Cloud, Plug, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import Quiz from "@/components/quiz/Quiz";

interface Service {
  title: string;
  subtitle: string;
  pillar: string;
  icon: any;
  accent: string;
  path: string;
  video?: string;
  image?: string;
}

const PremiumServicesCarousel = () => {
  const navigate = useNavigate();
  const { ref: headerRef, visibleItems: headerItems } = useStaggeredAnimation(3, 120);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const services = [
    { 
      title: "Consulenza Strategica", 
      subtitle: "Trasforma il reparto vendite",
      pillar: "Consulting",
      icon: Users,
      accent: "violet",
      path: "/consulenza-strategica/consultation-services",
      video: "https://res.cloudinary.com/dsergeqc9/video/upload/v1758138693/Untitled_design_20_unmefc.mp4"
    },
    { 
      title: "Servizi Vendite", 
      subtitle: "Direttore Vendite a Noleggio",
      pillar: "Consulting",
      icon: Users,
      accent: "violet",
      path: "/consulenza-strategica/sales-services",
      video: "https://res.cloudinary.com/dsergeqc9/video/upload/v1758138684/Untitled_design_19_ckwhs4.mp4"
    },
    { 
      title: "Servizi Marketing", 
      subtitle: "Direttore Marketing a Noleggio",
      pillar: "Consulting",
      icon: Megaphone,
      accent: "violet",
      path: "/consulenza-strategica/marketing-services",
      video: "https://res.cloudinary.com/dsergeqc9/video/upload/v1758138683/Untitled_design_18_fxnrkq.mp4"
    },
    { 
      title: "Outsourcing Salesforce", 
      subtitle: "Team vendita dedicato",
      pillar: "Sales On Demand",
      icon: Users,
      accent: "blue",
      path: "/outsourcing-salesforce",
      video: "https://res.cloudinary.com/dsergeqc9/video/upload/v1758129886/outsourcing_salesforce_cta_qdfzwe.mp4"
    },
    { 
      title: "Telemarketing & Teleselling", 
      subtitle: "Chiamate commerciali professionali",
      pillar: "Sales On Demand",
      icon: PhoneCall,
      accent: "blue",
      path: "/telemarketing-teleselling",
      video: "https://res.cloudinary.com/dsergeqc9/video/upload/v1758132202/telemarketing_page_xgiv6m.mp4"
    },
    { 
      title: "Contact Center Inbound", 
      subtitle: "Supporto clienti professionale",
      pillar: "Sales On Demand",
      icon: Headphones,
      accent: "blue",
      path: "/contact-center-inbound",
      video: "https://res.cloudinary.com/dsergeqc9/video/upload/v1758129834/inbound_contact_center_page_lu3tek.mp4"
    },
    { 
      title: "Outsourcing Marketing", 
      subtitle: "Marketing completo in outsourcing",
      pillar: "Consulting",
      icon: Megaphone,
      accent: "violet",
      path: "/outsourcing-marketing",
      video: "https://res.cloudinary.com/dsergeqc9/video/upload/v1758132397/outsourced_markteting_hero_ntknxt.mp4"
    },
    { 
      title: "Audit Vendite", 
      subtitle: "Analisi processi commerciali",
      pillar: "Consulting",
      icon: PieChart,
      accent: "violet",
      path: "/audit-vendite",
      video: "https://res.cloudinary.com/dsergeqc9/video/upload/v1758129794/ai_tools_page_t0drw4.mp4"
    },
    { 
      title: "Consulenza Marketing", 
      subtitle: "Strategia marketing personalizzata",
      pillar: "Consulting",
      icon: TrendingUp,
      accent: "violet",
      path: "/consulenza-marketing",
      video: "https://res.cloudinary.com/dsergeqc9/video/upload/v1758132397/outsourced_markteting_hero_ntknxt.mp4"
    },
    { 
      title: "Monetizza YouTube", 
      subtitle: "Trasforma i video in profitti",
      pillar: "Consulting",
      icon: Youtube,
      accent: "violet",
      path: "/monetizza-youtube",
      video: "https://res.cloudinary.com/dsergeqc9/video/upload/v1758129819/youtubemonetization_y5pier.mp4"
    },
    { 
      title: "Instant Avatar", 
      subtitle: "Avatar AI per video personali",
      pillar: "AI & Automation",
      icon: UserRound,
      accent: "green",
      path: "/instant-avatar",
      video: "https://res.cloudinary.com/dsergeqc9/video/upload/v1758129855/instant_avatar_page_w7t83a.mp4"
    },
    { 
      title: "Chatbot AI", 
      subtitle: "Assistenti virtuali intelligenti",
      pillar: "AI & Automation",
      icon: Bot,
      accent: "green",
      path: "/chatbot-ai",
      video: "https://res.cloudinary.com/dsergeqc9/video/upload/v1758129773/chatbot_ai_page_aopek0.mp4"
    },
    { 
      title: "Automazione AI", 
      subtitle: "Processi automatizzati con AI",
      pillar: "AI & Automation",
      icon: Workflow,
      accent: "green",
      path: "/automazione-ai",
      video: "https://res.cloudinary.com/dsergeqc9/video/upload/v1758129869/ai_automation_page_g9ppcq.mp4"
    },
    { 
      title: "Web & App Development", 
      subtitle: "Sviluppo applicazioni su misura",
      pillar: "AI & Automation",
      icon: Globe,
      accent: "green",
      path: "/web-app-development",
      video: "https://res.cloudinary.com/dsergeqc9/video/upload/v1758134350/web_and_app_development_page_t02syb.mp4"
    },
    { 
      title: "Piattaforme SaaS", 
      subtitle: "Software as a Service personalizzato",
      pillar: "AI & Automation",
      icon: Cloud,
      accent: "green",
      path: "/saas-platforms",
      video: "https://res.cloudinary.com/dsergeqc9/video/upload/v1758129806/saas_tools_page_uoeqrf.mp4"
    },
    { 
      title: "Smart AI Tools", 
      subtitle: "Strumenti AI per il business",
      pillar: "AI & Automation",
      icon: Bot,
      accent: "green",
      path: "/smart-ai-tools",
      video: "https://res.cloudinary.com/dsergeqc9/video/upload/v1758129794/ai_tools_page_t0drw4.mp4"
    },
    { 
      title: "AI Integration", 
      subtitle: "Integrazione AI nei processi",
      pillar: "AI & Automation",
      icon: Plug,
      accent: "green",
      path: "/ai-integration",
      video: "https://res.cloudinary.com/dsergeqc9/video/upload/v1758129840/ai_integrations_page_ol1ktm.mp4"
    }
  ];

  // Triple services for seamless infinite loop
  const extendedServices = [...services, ...services, ...services];

  // Seamless continuous animation using CSS transform
  useEffect(() => {
    if (isPaused || !trackRef.current) return;

    let animationId: number;
    let startTime: number | null = null;
    const speed = 30; // pixels per second
    const cardWidth = 365; // width + gap
    const singleSetWidth = services.length * cardWidth;
    
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      
      const elapsed = (currentTime - startTime) / 1000; // convert to seconds
      const translateX = -(elapsed * speed) % singleSetWidth;
      
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${translateX}px)`;
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPaused, services.length]);

  const handlePrevious = () => {
    if (trackRef.current) {
      const currentTransform = trackRef.current.style.transform;
      const match = currentTransform.match(/-?\d+/);
      const currentX = match ? parseInt(match[0]) : 0;
      const newX = currentX + 365; // move right (previous)
      trackRef.current.style.transform = `translateX(${newX}px)`;
      trackRef.current.style.transition = 'transform 0.3s ease';
      
      setTimeout(() => {
        if (trackRef.current) {
          trackRef.current.style.transition = '';
        }
      }, 300);
    }
  };

  const handleNext = () => {
    if (trackRef.current) {
      const currentTransform = trackRef.current.style.transform;
      const match = currentTransform.match(/-?\d+/);
      const currentX = match ? parseInt(match[0]) : 0;
      const newX = currentX - 365; // move left (next)
      trackRef.current.style.transform = `translateX(${newX}px)`;
      trackRef.current.style.transition = 'transform 0.3s ease';
      
      setTimeout(() => {
        if (trackRef.current) {
          trackRef.current.style.transition = '';
        }
      }, 300);
    }
  };

  const handleCardClick = (path: string) => {
    navigate(path);
  };

  const pillarColors = {
    "Sales On Demand": "text-blue-400",
    "Consulting": "text-violet-400", 
    "AI & Automation": "text-green-400"
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M0 0h80v80H0V0zm10 10h60v60H10V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Radial Gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-primary/20 via-primary/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-radial from-primary-glow/15 via-transparent to-transparent rounded-full blur-3xl"></div>
      </div>
      
      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-primary-glow/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-40 h-40 bg-gradient-to-br from-primary-glow/20 to-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-br from-white/5 to-primary/10 rounded-full blur-xl animate-pulse delay-2000"></div>
      
      {/* Geometric shapes */}
      <div className="absolute top-1/3 right-1/5 w-2 h-32 bg-gradient-to-b from-primary/30 to-transparent transform rotate-45 animate-pulse delay-500"></div>
      <div className="absolute bottom-1/4 left-1/6 w-1 h-24 bg-gradient-to-t from-primary-glow/40 to-transparent animate-pulse delay-1500"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header Section */}
        <div ref={headerRef} className="text-center max-w-5xl mx-auto mb-24">
          <div className={`inline-block mb-8 group transition-all duration-700 ease-out ${
            headerItems[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="text-sm font-bold tracking-[0.3em] uppercase px-8 py-4 rounded-full bg-gradient-to-r from-primary/20 to-primary-glow/20 text-primary border border-primary/30 backdrop-blur-sm shadow-lg hover:shadow-primary/20 transition-all duration-300 group-hover:scale-105">
              Premium Solutions
            </span>
          </div>
          
          <h2 className={`text-5xl lg:text-7xl font-black leading-[0.9] tracking-tight text-white mb-10 pb-3 group transition-all duration-700 ease-out ${
            headerItems[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="inline-block transform transition-transform duration-500 group-hover:scale-105">
              Soluzioni per la Tua{" "}
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent inline-block transform transition-transform duration-500 hover:scale-110 ">
              Crescita
            </span>
          </h2>
          
          <p className={`text-xl lg:text-2xl leading-relaxed text-gray-300 max-w-4xl mx-auto font-light transition-all duration-700 ease-out ${
            headerItems[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Trasforma il tuo business con soluzioni innovative e risultati misurabili.<br />
            <span className="text-primary font-medium">Ogni progetto è su misura per te.</span>
          </p>
          
          {/* Enhanced visual separator */}
          <div className="mt-12 flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Premium Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full p-3 transition-all duration-300 hover:scale-110"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full p-3 transition-all duration-300 hover:scale-110"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <ArrowRight className="w-6 h-6 text-white" />
          </button>

          {/* Edge Fade Gradients */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black via-black/50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black via-black/50 to-transparent z-10 pointer-events-none"></div>

          {/* Carousel Container */}
          <div 
            className="overflow-hidden pb-8 pt-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            <div
              ref={trackRef}
              className="flex gap-5"
              style={{ willChange: 'transform' }}
            >
              {extendedServices.map((service, index) => {
              const isHovered = hoveredCard === index;
              
              return (
                <div
                  key={`${service.title}-${index}`}
                  className="flex-shrink-0 w-[320px] lg:w-[360px] h-[520px] lg:h-[560px] relative group cursor-pointer transition-all duration-300 hover:-translate-y-1"
                  style={{ scrollSnapAlign: 'start' }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => handleCardClick(service.path)}
                  aria-label={`Navigate to ${service.title} service page`}
                >
                  {/* Media Background (Video or Image) */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden">
                    {service.video ? (
                      <>
                        <video
                          className="w-full h-full object-cover"
                          src={service.video}
                          muted
                          loop
                          playsInline
                          preload="metadata" 
                          style={{ willChange: 'auto' }}
                          onError={(e) => {
                            console.error('Video failed to load:', service.video);
                            e.currentTarget.style.display = 'none';
                            const fallbackDiv = e.currentTarget.nextElementSibling as HTMLElement;
                            if (fallbackDiv) {
                              fallbackDiv.style.display = 'block';
                            }
                          }}
                          onLoadedData={(e) => {
                            console.log('Video loaded successfully:', service.video);
                          }}
                          ref={(el) => {
                            if (el) {
                              if (isHovered) {
                                el.play().catch(() => {});
                              } else {
                                el.pause();
                              }
                            }
                          }}
                        />
                        {/* Video fallback gradient */}
                        <div 
                          className="w-full h-full hidden"
                          style={{
                            background: service.title.includes('Consulenza') 
                              ? 'linear-gradient(135deg, hsl(271, 81%, 20%) 0%, hsl(271, 81%, 35%) 100%)'
                              : service.title.includes('Vendite')
                              ? 'linear-gradient(135deg, hsl(142, 76%, 20%) 0%, hsl(142, 76%, 35%) 100%)'
                              : service.title.includes('Marketing')
                              ? 'linear-gradient(135deg, hsl(280, 91%, 20%) 0%, hsl(280, 91%, 35%) 100%)'
                              : 'linear-gradient(135deg, hsl(271, 81%, 20%) 0%, hsl(271, 81%, 35%) 100%)'
                          }}
                        />
                      </>
                    ) : (
                      <div 
                        className="w-full h-full"
                        style={{
                          background: 'linear-gradient(135deg, hsl(271, 81%, 20%) 0%, hsl(271, 81%, 35%) 100%)'
                        }}
                      />
                    )}
                    
                    {/* Bottom gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  </div>

                  {/* Card Border */}
                  <div className="absolute inset-0 rounded-3xl border border-white/10 shadow-2xl transition-all duration-300 group-hover:shadow-primary/20"></div>

                  {/* Content - Tony Robbins Style (Bottom-left) */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-left">
                    {/* Pillar Label */}
                    <div className={`text-sm font-semibold uppercase tracking-wider mb-3 ${pillarColors[service.pillar as keyof typeof pillarColors]}`}>
                      {service.pillar}
                    </div>
                    
                    {/* Service Title */}
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight">
                      {service.title}
                    </h3>
                    
                    {/* Service Subtitle/Description */}
                    <p className="text-lg text-gray-300 font-medium leading-relaxed">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                </div>
              );
              })}
            </div>
          </div>
        </div>

        {/* Creative Quiz CTA - Italian */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-gray-300 mb-6">
              Non sai da dove iniziare?
              <span className="text-white font-medium"> Lascia che ti guidiamo.</span>
            </p>
            
            <Button 
              onClick={() => setIsQuizOpen(true)}
              className="group bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary text-white px-10 py-5 text-xl font-semibold rounded-full shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105 border border-primary/20"
            >
              <Zap className="w-6 h-6 mr-3 group-hover:animate-pulse" />
              Fai il Quiz di 45 Secondi
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Button>
            
            <p className="text-sm text-gray-400 mt-4">
              Ricevi raccomandazioni personalizzate in meno di un minuto
            </p>
          </div>
        </div>
      </div>
      
      {/* Quiz Component */}
      <Quiz isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </section>
  );
};

export default PremiumServicesCarousel;