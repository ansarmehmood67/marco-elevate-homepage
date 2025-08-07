import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, Shield, Award, Users, CheckCircle } from "lucide-react";
import marcoPortrait from "@/assets/marco-portrait.jpg";

const TeamAvailabilitySection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Team Info */}
          <div className="space-y-8">
            <div>
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
                Il Tuo Sales Expert
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Marco Ferrario
                <span className="block text-2xl text-sky-blue-400 mt-2">
                  Il Tuo Partner per il Successo
                </span>
              </h2>
              <p className="text-xl text-white/80 leading-relaxed">
                Con oltre 15 anni di esperienza nel sales, sono qui per trasformare 
                la tua strategia commerciale in risultati concreti e misurabili.
              </p>
            </div>

            {/* Availability */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-primary" />
                  Disponibilità Immediata
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-white/80">Lun-Ven: 9:00-19:00</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-white/80">Sab: 9:00-13:00</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-4 w-4 text-primary" />
                    <span className="text-white/80">Risposta garantita 30min</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-white/80">Consulenza dedicata</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-6">
              <Card className="glass-card text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-white/80">Aziende Aiutate</div>
                </CardContent>
              </Card>
              <Card className="glass-card text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">95%</div>
                  <div className="text-white/80">Tasso di Successo</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Guarantees */}
          <div className="space-y-8">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center">
                  <Shield className="h-6 w-6 mr-3 text-primary" />
                  Le Nostre Garanzie
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">Risposta Garantita</h4>
                      <p className="text-white/70">Risposta entro 30 minuti in orario lavorativo</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">Consulenza Gratuita</h4>
                      <p className="text-white/70">Prima chiamata di 15 minuti completamente gratuita</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">Soddisfatti o Rimborsati</h4>
                      <p className="text-white/70">Garanzia 100% sui primi 30 giorni di collaborazione</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">Supporto Continuo</h4>
                      <p className="text-white/70">Assistenza dedicata durante tutto il progetto</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center">
                  <Award className="h-5 w-5 mr-2 text-primary" />
                  Certificazioni & Riconoscimenti
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    Sales Expert
                  </Badge>
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    CRM Specialist
                  </Badge>
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    Business Coach
                  </Badge>
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    Lead Generation
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <div className="pt-6">
              <Button size="xl" className="w-full glass-button">
                Prenota Consulenza Gratuita
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamAvailabilitySection;