import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, Star, Users, Target, ArrowRight } from "lucide-react";

const MarcoFinalCTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-black via-slate-900/95 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-glow/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <Badge className="bg-primary/20 text-primary border-primary/30 mb-6 px-6 py-3 text-base">
            Il Prossimo Passo
          </Badge>
          <h2 className="text-5xl lg:text-7xl font-black leading-[0.9] tracking-tight text-white mb-8 pb-3">
            Lavora con Marco
            <span className="block bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              & il Team
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Trasforma le tue sfide commerciali in crescita concreta. 
            Marco ti guiderà personalmente verso il successo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Primary CTA */}
          <Card className="glass-card border-2 border-primary/30 bg-primary/15 backdrop-blur-md group hover:shadow-glow transition-all duration-500">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                <Calendar className="h-10 w-10 text-white" />
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-4">
                Consulenza Strategica con Marco
              </h3>
              
              <p className="text-white/80 leading-relaxed mb-8">
                60 minuti con Marco Ferrario per analizzare la tua situazione attuale 
                e definire una roadmap di crescita personalizzata. 
                <span className="font-semibold text-primary"> Risultati garantiti o consulenza gratuita.</span>
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-white/90">
                  <Star className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Analisi completa della situazione attuale</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <Target className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Strategia personalizzata per i tuoi obiettivi</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <Users className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Piano d'azione immediato per il tuo team</span>
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full group bg-gradient-to-r from-primary to-primary-glow text-white font-semibold text-lg py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                <Calendar className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                Prenota Consulenza con Marco
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <div className="mt-4 text-sm text-white/60">
                ✓ Sessione di 60 minuti • ✓ Garanzia di risultato • ✓ Piano d'azione incluso
              </div>
            </CardContent>
          </Card>

          {/* Right: Secondary CTA */}
          <Card className="glass-card border-2 border-white/20 bg-white/5 backdrop-blur-md group hover:shadow-glow transition-all duration-500">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/30">
                <FileText className="h-10 w-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                Case Studies & Metodologie
              </h3>
              
              <p className="text-white/70 leading-relaxed mb-8">
                Scopri come abbiamo aiutato oltre 500 aziende a crescere. 
                Casi studio reali, metodologie esclusive e strategie vincenti.
              </p>

              <div className="space-y-3 mb-8">
                <div className="text-sm text-white/80">
                  ➤ 25+ Case Study dettagliati
                </div>
                <div className="text-sm text-white/80">
                  ➤ Framework "Metodo Marco" completo
                </div>
                <div className="text-sm text-white/80">
                  ➤ Toolkit per l'implementazione
                </div>
              </div>

              <Button 
                variant="outline"
                size="lg" 
                className="w-full group border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 font-semibold py-6 rounded-xl backdrop-blur-sm transition-all duration-300"
              >
                <FileText className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                Scarica Case Studies
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <div className="mt-4 text-sm text-white/50">
                Accesso immediato • Esempi concreti • Metodologie esclusive
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trust Indicators */}
        <Card className="glass-card border border-white/10 bg-white/5 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Perché Scegliere Marco Ferrario?
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-2">15+</div>
                <div className="text-white/70 text-sm">Anni di Leadership</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-2">500+</div>
                <div className="text-white/70 text-sm">Aziende Partner</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-2">95%</div>
                <div className="text-white/70 text-sm">Tasso di Successo</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-2">50M€</div>
                <div className="text-white/70 text-sm">Fatturato Generato</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MarcoFinalCTASection;