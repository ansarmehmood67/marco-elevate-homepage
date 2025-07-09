
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ChevronLeft, ChevronRight, Users, Target, TrendingUp, CheckCircle, Star, Award, Zap, Shield, Rocket, Crown } from "lucide-react";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const StrategicConsulting = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      title: "Creazione della Funnel Strategy",
      subtitle: "Dall'acquisizione alla conversione: una strategia di vendita su misura",
      icon: <Target className="w-8 h-8 text-blue-400" />,
      link: "https://marcoferrario.myshopify.com/products/funnel-strategy",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      title: "Direzione Commerciale On Demand",
      subtitle: "Gestione flessibile e continua della tua pipeline di vendita",
      icon: <Users className="w-8 h-8 text-emerald-400" />,
      link: "https://marcoferrario.myshopify.com/products/direzione-commerciale-on-demand",
      gradient: "from-emerald-600 to-teal-600"
    },
    {
      title: "Coaching & Mentoring della Forza Vendite",
      subtitle: "Affiancamento e potenziamento del tuo team vendite",
      icon: <TrendingUp className="w-8 h-8 text-orange-400" />,
      link: "https://marcoferrario.myshopify.com/products/coaching-sales-force",
      gradient: "from-orange-600 to-red-600"
    },
    {
      title: "Sales Force Outsourcing",
      subtitle: "Esternalizza il reparto commerciale con un team già pronto",
      icon: <CheckCircle className="w-8 h-8 text-green-400" />,
      link: "https://marcoferrario.myshopify.com/products/sales-force-outsourcing",
      gradient: "from-green-600 to-emerald-600"
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

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />

      {/* Enhanced Hero Section with Animated Background */}
      <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Moving gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black animate-pulse"></div>
          
          {/* Animated floating elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full filter blur-3xl animate-bounce" style={{animationDuration: '6s'}}></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full filter blur-3xl animate-pulse" style={{animationDuration: '8s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-full filter blur-3xl animate-spin" style={{animationDuration: '20s'}}></div>
          
          {/* Geometric shapes */}
          <div className="absolute top-20 right-20 w-4 h-4 bg-blue-400 rotate-45 animate-ping"></div>
          <div className="absolute bottom-40 left-20 w-6 h-6 bg-purple-400 rounded-full animate-pulse"></div>
          <div className="absolute top-60 left-1/3 w-3 h-3 bg-pink-400 rotate-45 animate-bounce"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
                  <span className="text-blue-200 text-sm font-medium">Expertise dal 1996</span>
                </div>
                <h1 className="text-6xl lg:text-8xl font-bold leading-tight bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                  Sales Director.<br />
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Marketing Funnel Expert.</span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
                  <span className="text-blue-400 font-semibold">25+ Years Experience</span> | Strategic Sales Consulting | <span className="text-purple-400 font-semibold">Outbound Funnel Architect</span>
                </p>
              </div>
              
              <Button 
                size="xl" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-110 border border-blue-500/30"
              >
                Scopri di più
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
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
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-black to-orange-900/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-red-500/5 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <div className="space-y-12">
            <div className="inline-block p-4 bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-full">
              <Zap className="w-16 h-16 text-red-400" />
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Sai perché le tue strategie FALLISCONO?
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-8">
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
                Molti imprenditori si chiedono perché, nonostante tutti i loro sforzi, le vendite non decollano.<br />
                <span className="text-orange-400 font-semibold">La risposta spesso risiede nella mancanza di una visione completa e integrata del funnel di vendita.</span>
              </p>
              
              <div className="bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/20">
                <blockquote className="text-2xl italic text-orange-200 leading-relaxed">
                  "Una visione senza esecuzione è solo un'allucinazione."
                  <cite className="block text-lg text-gray-400 mt-4 font-semibold">— Henry Ford</cite>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Slider Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-black"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex justify-between items-center mb-16">
            <div className="space-y-4">
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full border border-blue-500/30">
                <span className="text-blue-200 text-sm font-bold tracking-wider uppercase">Premium Services</span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                I Nostri Servizi
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl">
                Soluzioni innovative e personalizzate per trasformare il tuo business
              </p>
            </div>
            
            <div className="flex gap-4">
              <Button 
                onClick={prevSlide}
                variant="outline" 
                size="icon" 
                className="bg-gray-900/80 border-blue-500/30 hover:bg-blue-600/20 backdrop-blur-sm w-14 h-14 rounded-full"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button 
                onClick={nextSlide}
                variant="outline" 
                size="icon" 
                className="bg-gray-900/80 border-blue-500/30 hover:bg-blue-600/20 backdrop-blur-sm w-14 h-14 rounded-full"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {services.slice(currentSlide * 3, (currentSlide + 1) * 3).map((service, index) => (
              <Card key={index} className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm overflow-hidden">
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <CardHeader className="text-center pb-6 relative z-10">
                  <div className="mx-auto mb-6 p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl w-fit backdrop-blur-sm border border-gray-700/50 group-hover:border-blue-500/30 transition-all duration-500">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl text-white group-hover:text-blue-200 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="text-center relative z-10">
                  <CardDescription className="text-gray-300 mb-8 text-lg leading-relaxed">
                    {service.subtitle}
                  </CardDescription>
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 rounded-full shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
                    onClick={() => window.open(service.link, '_blank')}
                  >
                    Scopri su Shopify →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-12 py-4 text-lg font-bold rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-110"
              onClick={() => window.open('https://marcoferrario.myshopify.com', '_blank')}
            >
              Vedi tutti i servizi su Shopify →
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced 3 Stages Process */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/50 to-black"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-full border border-emerald-500/30 mb-6">
              <span className="text-emerald-200 text-sm font-bold tracking-wider uppercase">Success Framework</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              Le 3 Fasi del Successo
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Il nostro metodo collaudato per trasformare la tua strategia commerciale in risultati concreti
            </p>
          </div>
          
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <Card key={index} className="group relative bg-gradient-to-r from-gray-900/80 to-black/80 border-gray-700/50 p-8 hover:shadow-2xl transition-all duration-500 backdrop-blur-sm overflow-hidden">
                {/* Animated background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="flex items-start gap-12 relative z-10">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="text-8xl font-bold text-gray-700/50 group-hover:text-gray-600/70 transition-colors">
                      {step.number}
                    </div>
                    <div className={`p-4 bg-gradient-to-br ${step.gradient} rounded-2xl shadow-lg`}>
                      {step.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-6">
                    <h3 className="text-4xl font-bold text-white group-hover:text-gray-100 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xl text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                    <Button className={`bg-gradient-to-r ${step.gradient} hover:shadow-lg px-8 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105`}>
                      Prenota una consulenza gratuita
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

      {/* Enhanced Final Form Section with Background Image */}
      <section 
        className="relative py-32 px-4 min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url('/lovable-uploads/25280549-6553-430d-9dff-5462347e4238.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-blue-900/60 to-purple-900/80"></div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <div className="space-y-6">
              <div className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-white text-sm font-bold tracking-wider uppercase">Get Started</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Compila il form, fai il test, scopri dove fallisce il tuo processo di vendita
                <span className="block text-blue-300 mt-2">e ricevi il libro in regalo.</span>
              </h2>
            </div>
          </div>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8 shadow-2xl">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Nome</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Il tuo nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Cognome</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Il tuo cognome"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white mb-2">Azienda</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Nome della tua azienda"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="la-tua-email@esempio.it"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Telefono</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Il tuo numero di telefono"
                  />
                </div>
              </div>

              <div className="text-center pt-6">
                <Button 
                  type="submit" 
                  size="xl" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-16 py-6 text-xl font-bold rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  Invia e Ricevi il Libro
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StrategicConsulting;
