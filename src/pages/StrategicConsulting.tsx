import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import IntroSection from '../components/IntroSection';
import AboutSection from '../components/AboutSection';
import LeadMagnetSection from '../components/LeadMagnetSection';
import FinalCTASection from '../components/FinalCTASection';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ChevronLeft, ChevronRight, Target, TrendingUp, DollarSign } from "lucide-react";

const StrategicConsulting = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      title: "Audit Strategico del Pitch Commerciale",
      description: "Sessione pratica per migliorare il pitch dei tuoi venditori, aumentare l'efficacia e l'allineamento del team.",
      icon: <DollarSign className="w-8 h-8 text-primary" />,
      link: "#" // Will be provided later
    },
    {
      title: "Acceleratore Vendite (Attira, Coinvolgi, Converti)",
      description: "Consulenza intensiva di 3 ore per progettare il tuo funnel di vendita su misura e aumentare il tasso di conversione.",
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      link: "#" // Will be provided later
    },
    {
      title: "Direzione Vendite – Sessione Strategica",
      description: "Analisi avanzata e piano operativo per sbloccare il potenziale del tuo team di vendita con due sessioni.",
      icon: <Target className="w-8 h-8 text-primary" />,
      link: "#" // Will be provided later
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
            
            {/* Enhanced Content */}
            <div className="absolute bottom-16 left-16 max-w-3xl" style={{ zIndex: 4 }}>
              <h1 className="text-6xl lg:text-8xl font-black leading-tight mb-8 text-white drop-shadow-2xl bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Consulenza Strategica
              </h1>
              
              <p className="text-2xl lg:text-3xl text-gray-100 mb-12 font-light leading-relaxed max-w-2xl">
                Trasforma la tua visione in <span className="font-semibold text-blue-200">strategie concrete</span> con piani operativi che generano risultati tangibili.
              </p>
              
              <Button className="group font-bold px-10 py-5 text-xl rounded-2xl shadow-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-3xl bg-white text-blue-900 hover:bg-blue-50 border-2 border-white/30 backdrop-blur-sm relative overflow-hidden">
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Richiedi Consulenza</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section - Same style as homepage */}
      <IntroSection />

      {/* Customers Section - Brand logos */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              I Brand che ci Hanno Scelto
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              La fiducia di aziende leader nel mercato è la nostra più grande soddisfazione
            </p>
          </div>
          
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-16">
              {[...brandLogos, ...brandLogos].map((logo, index) => (
                <div key={index} className="flex-shrink-0 w-32 h-20 flex items-center justify-center bg-card rounded-lg shadow-sm border">
                  <img 
                    src={logo} 
                    alt={`Brand ${index + 1}`}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Same carousel style as other pages */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-8">
            <div className="lg:w-1/2">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                I Nostri Servizi di Consulenza
              </h2>
            </div>
            <div className="lg:w-1/2">
              <p className="text-xl text-muted-foreground mb-8">
                Trasformiamo le tue sfide commerciali in opportunità concrete attraverso strategie personalizzate e metodologie comprovate.
              </p>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevSlide}
                  className="h-12 w-12 rounded-full border-primary/20 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextSlide}
                  className="h-12 w-12 rounded-full border-primary/20 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50 bg-card">
                <CardContent className="p-8">
                  <div className="mb-6 p-4 bg-primary/10 rounded-2xl w-fit group-hover:bg-primary/20 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-card-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-xl transition-all duration-300 group-hover:shadow-lg"
                    onClick={() => window.open(service.link, '_blank')}
                  >
                    Scopri di più
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
