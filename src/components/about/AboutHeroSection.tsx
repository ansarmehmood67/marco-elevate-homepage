import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Award, Target } from "lucide-react";

const AboutHeroSection = () => {
  const [counters, setCounters] = useState({
    clients: 0,
    revenue: 0,
    success: 0,
    years: 0
  });

  const finalValues = {
    clients: 500,
    revenue: 50,
    success: 95,
    years: 15
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const timer = setInterval(() => {
      setCounters(prev => ({
        clients: Math.min(prev.clients + finalValues.clients / steps, finalValues.clients),
        revenue: Math.min(prev.revenue + finalValues.revenue / steps, finalValues.revenue),
        success: Math.min(prev.success + finalValues.success / steps, finalValues.success),
        years: Math.min(prev.years + finalValues.years / steps, finalValues.years)
      }));
    }, stepDuration);

    const timeout = setTimeout(() => {
      clearInterval(timer);
      setCounters(finalValues);
    }, duration);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80')"
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-sky-blue-600/20" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-6">
                La Nostra Storia
              </Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-white via-sky-blue-200 to-primary bg-clip-text text-transparent">
                  Trasformiamo
                </span>
                <br />
                <span className="text-4xl md:text-5xl lg:text-6xl">
                  le Vendite in Successi
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Da oltre 15 anni aiutiamo aziende di ogni dimensione a raggiungere 
                il loro massimo potenziale commerciale attraverso strategie innovative 
                e risultati misurabili.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">La Nostra Missione</h3>
              <p className="text-lg text-white/80 leading-relaxed">
                Rendere il successo commerciale accessibile a ogni azienda, 
                fornendo soluzioni personalizzate che combinano esperienza umana 
                e innovazione tecnologica per risultati straordinari.
              </p>
            </div>

            <Button size="xl" className="glass-button">
              Scopri la Nostra Storia
            </Button>
          </div>

          {/* Right Content - Statistics */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="glass-card text-center hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-sky-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {Math.round(counters.clients)}+
                </div>
                <div className="text-white/70">Aziende Aiutate</div>
              </CardContent>
            </Card>

            <Card className="glass-card text-center hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {Math.round(counters.revenue)}M€
                </div>
                <div className="text-white/70">Fatturato Generato</div>
              </CardContent>
            </Card>

            <Card className="glass-card text-center hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {Math.round(counters.success)}%
                </div>
                <div className="text-white/70">Tasso di Successo</div>
              </CardContent>
            </Card>

            <Card className="glass-card text-center hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {Math.round(counters.years)}+
                </div>
                <div className="text-white/70">Anni di Esperienza</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-24 text-center">
          <Card className="glass-card max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold text-white mb-6">
                "Il successo non è un caso, è il risultato di strategia, 
                dedizione e innovazione continua"
              </h3>
              <p className="text-xl text-white/80">
                Marco Ferrario, Founder & CEO
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;