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
      
      {/* Hero Section */}
      <section className="pt-20 pb-2 px-0 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div 
            className="relative min-h-[85vh] rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 border border-blue-200/30 shadow-2xl"
            style={{ 
              backgroundImage: `url('/lovable-uploads/72a42abc-cce3-430b-ab34-02973dafaf92.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/50 to-blue-900/80" />
            
            {/* Bottom gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-900/90 via-blue-800/60 to-transparent" />
            
            {/* Content positioned at bottom left */}
            <div className="absolute bottom-12 left-12 max-w-2xl">
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

      {/* Intro Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#2E8BC0]/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-[#87CEEB]/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
              <span className="text-[#87CEEB] font-medium text-sm">Il futuro è adesso</span>
            </div>

            <blockquote className="space-y-6">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                L'AI che{" "}
                <span className="bg-gradient-to-r from-[#87CEEB] to-[#2E8BC0] bg-clip-text text-transparent">
                  trasforma il business
                </span>
              </h3>

              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Tecnologie all'avanguardia per automatizzare processi, personalizzare l'esperienza cliente e scalare il tuo business
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Customers Section */}
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
          
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-50 via-white to-slate-50 p-8 border border-slate-200/50">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
            
            <div className="flex animate-[slide_30s_linear_infinite] items-center gap-16">
              {brandLogos.concat(brandLogos).map((logo, index) => (
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
            </div>
          </div>
        </div>
        
        <style>{`
          @keyframes slide {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>
      </div>

      {/* Services Carousel Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Soluzioni{" "}
                <span className="bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] bg-clip-text text-transparent">
                  AI
                </span>
              </h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-xl text-slate-600 leading-relaxed">
                Tecnologie di intelligenza artificiale all'avanguardia per automatizzare 
                e potenziare ogni aspetto del tuo business digitale.
              </p>
              
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={prevSlide}
                  className="p-3 rounded-full border-2 border-[#2E8BC0]/20 hover:border-[#2E8BC0] hover:bg-[#2E8BC0]/10"
                >
                  <ChevronLeft className="w-5 h-5 text-[#2E8BC0]" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={nextSlide}
                  className="p-3 rounded-full border-2 border-[#2E8BC0]/20 hover:border-[#2E8BC0] hover:bg-[#2E8BC0]/10"
                >
                  <ChevronRight className="w-5 h-5 text-[#2E8BC0]" />
                </Button>
              </div>
            </div>
          </div>

          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{ transform: `translateX(-${currentIndex * 25}%)` }}
            >
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="w-full md:w-1/2 lg:w-1/4 flex-shrink-0">
                    <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200/50 hover:border-[#2E8BC0]/30 transition-all duration-300 hover:shadow-lg group h-full">
                      <div className="space-y-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-[#2E8BC0]/10 to-[#87CEEB]/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-8 h-8 text-[#2E8BC0]" />
                        </div>

                        <div className="space-y-4">
                          <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                          <p className="text-slate-600 leading-relaxed">{service.description}</p>
                          
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
                          <Button className="w-full mt-6 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] hover:from-[#87CEEB] hover:to-[#2E8BC0] text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105">
                            Scopri di più
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

      <TestimonialsCarousel />
      <AboutSection />
      <LeadMagnetSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default AI;