
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ChevronLeft, ChevronRight, Users, Target, TrendingUp, CheckCircle } from "lucide-react";
import Navigation from '../components/Navigation';

const StrategicConsulting = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      title: "Creazione della Funnel Strategy",
      subtitle: "Dall'acquisizione alla conversione: una strategia di vendita su misura",
      icon: <Target className="w-8 h-8 text-blue-400" />,
      link: "https://marcoferrario.myshopify.com/products/funnel-strategy"
    },
    {
      title: "Direzione Commerciale On Demand",
      subtitle: "Gestione flessibile e continua della tua pipeline di vendita",
      icon: <Users className="w-8 h-8 text-blue-400" />,
      link: "https://marcoferrario.myshopify.com/products/direzione-commerciale-on-demand"
    },
    {
      title: "Coaching & Mentoring della Forza Vendite",
      subtitle: "Affiancamento e potenziamento del tuo team vendite",
      icon: <TrendingUp className="w-8 h-8 text-blue-400" />,
      link: "https://marcoferrario.myshopify.com/products/coaching-sales-force"
    },
    {
      title: "Sales Force Outsourcing",
      subtitle: "Esternalizza il reparto commerciale con un team già pronto",
      icon: <CheckCircle className="w-8 h-8 text-blue-400" />,
      link: "https://marcoferrario.myshopify.com/products/sales-force-outsourcing"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Strategy",
      description: "The success of every company starts with salespeople and their processes. An experienced sales manager coordinates every stage of the funnel..."
    },
    {
      number: "02", 
      title: "Execution",
      description: "Even the best strategy is useless if it isn't executed correctly..."
    },
    {
      number: "03",
      title: "Check", 
      description: "A well-defined strategy and execution aren't enough without results..."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(services.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(services.length / 3)) % Math.ceil(services.length / 3));
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen bg-black flex items-center justify-center px-4 pt-20">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Sales Director.<br />
                  <span className="text-blue-400">Marketing Funnel Expert.</span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
                  25+ Years Experience | Strategic Sales Consulting | Outbound Funnel Architect
                </p>
              </div>
              
              <Button 
                size="xl" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Scopri di più
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Right Content - Marco's Photo */}
            <div className="relative animate-fade-in delay-300">
              <div className="relative bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-3xl p-8 backdrop-blur-sm border border-blue-500/20">
                <img 
                  src="/lovable-uploads/38b36456-8e63-4824-a0c6-3af4d21ae30b.png" 
                  alt="Marco Ferrario" 
                  className="w-full h-96 object-cover rounded-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-black/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30">
                  <blockquote className="text-sm italic text-blue-200">
                    "Tactics without strategy is the noise before defeat"
                    <cite className="block text-xs text-gray-400 mt-2">— Sun Tzu</cite>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Strategies Fail Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-red-400">
            Sai perché le tue strategie FALLISCONO?
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8">
            Molti imprenditori si chiedono perché, nonostante tutti i loro sforzi, le vendite non decollano.<br />
            La risposta spesso risiede nella mancanza di una visione completa e integrata del funnel di vendita.
          </p>
          <blockquote className="text-lg italic text-blue-200 border-l-4 border-blue-400 pl-6">
            "Una visione senza esecuzione è solo un'allucinazione."
            <cite className="block text-sm text-gray-400 mt-2">— Henry Ford</cite>
          </blockquote>
        </div>
      </section>

      {/* Services Slider Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto max-w-7xl">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold">I Nostri Servizi</h2>
            <div className="flex gap-4">
              <Button 
                onClick={prevSlide}
                variant="outline" 
                size="icon" 
                className="bg-gray-800 border-gray-700 hover:bg-gray-700"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button 
                onClick={nextSlide}
                variant="outline" 
                size="icon" 
                className="bg-gray-800 border-gray-700 hover:bg-gray-700"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {services.slice(currentSlide * 3, (currentSlide + 1) * 3).map((service, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-blue-900/30 rounded-full w-fit">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-300 mb-6 text-base leading-relaxed">
                    {service.subtitle}
                  </CardDescription>
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700"
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
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3"
              onClick={() => window.open('https://marcoferrario.myshopify.com', '_blank')}
            >
              Vedi tutti i servizi su Shopify →
            </Button>
          </div>
        </div>
      </section>

      {/* 3 Stages Process */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            Le 3 Fasi del Successo
          </h2>
          
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="bg-gradient-to-r from-gray-900 to-gray-800 border-gray-700 p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-8">
                  <div className="text-6xl font-bold text-blue-400 opacity-50">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-xl text-gray-300 leading-relaxed mb-6">
                      {step.description}
                    </p>
                    <Button className="bg-blue-600 hover:bg-blue-700 px-6 py-3">
                      Prenota una consulenza gratuita
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12">
            Direttore commerciale on-demand: La Tua Guida Esperta per Ottimizzare le Vendite e Massimizzare i Risultati
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-2xl font-bold text-gray-400">TIME VISION</div>
            <div className="text-2xl font-bold text-gray-400">Ralf</div>
            <div className="text-2xl font-bold text-gray-400">EasyCassa</div>
            <div className="text-2xl font-bold text-gray-400">The SkyRoom</div>
          </div>
        </div>
      </section>

      {/* Video/Quote Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <blockquote className="text-3xl lg:text-4xl font-light italic leading-relaxed">
            "Il segreto del successo negli affari è prevedere dove sta andando il mondo e arrivarci per primi."
            <cite className="block text-xl text-blue-200 mt-6">— Bill Gates</cite>
          </blockquote>
        </div>
      </section>

      {/* Marco's Bio */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold">Marco Ferrario</h2>
              <p className="text-xl text-blue-400 font-semibold">
                Esperto di Vendite e Consulenza Strategica
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Sales Director esperto, attivo dal 1996... Offro consulenza strategica e operativa, 
                coaching certificato e garantisco un ritorno chiaro e immediato sull'investimento...
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3">
                Contattami Ora
              </Button>
            </div>
            <div className="text-center">
              <img 
                src="/lovable-uploads/38b36456-8e63-4824-a0c6-3af4d21ae30b.png" 
                alt="Marco Ferrario in suit" 
                className="w-full max-w-md mx-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Book Promo */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <img 
                src="/src/assets/sales-on-demand.jpg" 
                alt="Sales as a Service Book Cover" 
                className="w-full max-w-sm mx-auto rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Scarica ora il libro di Marco Ferrario: è gratuito e nella sua versione integrale per te!
              </h2>
              <ul className="space-y-4 text-lg text-gray-300">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  Come attrarre il massimo di nuovi clienti
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  Come rendere efficiente il tuo reparto vendite
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  Quali sono gli strumenti giusti e come usarli
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  Come ottenere il controllo totale sulla tua pipeline di vendita
                </li>
              </ul>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-3">
                Scarica Ora
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final Form */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Compila il form, fai il test, scopri dove fallisce il tuo processo di vendita e ricevi il libro in regalo.
            </h2>
          </div>

          <Card className="bg-gray-900 border-gray-700 p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Nome</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Il tuo nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Cognome</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Il tuo cognome"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Azienda</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Nome della tua azienda"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="la-tua-email@esempio.it"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Telefono</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Il tuo numero di telefono"
                  />
                </div>
              </div>

              <div className="text-center pt-6">
                <Button 
                  type="submit" 
                  size="xl" 
                  className="bg-blue-600 hover:bg-blue-700 px-12 py-4 text-lg font-semibold"
                >
                  Invia e Ricevi il Libro
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default StrategicConsulting;
