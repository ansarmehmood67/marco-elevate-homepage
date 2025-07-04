
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { ArrowRight, Calendar, MessageCircle, Sparkles, CheckCircle2, Moon, Sun } from "lucide-react";
import { useState } from "react";

const FinalCTASection = () => {
  const [isDark, setIsDark] = useState(true);

  return (
    <section className={`py-32 relative overflow-hidden transition-all duration-500 ${
      isDark 
        ? 'bg-gradient-to-br from-background via-primary/5 to-background' 
        : 'bg-gradient-to-br from-slate-50 via-blue-50 to-white'
    }`}>
      {/* Theme Toggle */}
      <div className="absolute top-8 right-8 z-20">
        <div className={`flex items-center space-x-3 backdrop-blur-sm rounded-full px-4 py-2 border transition-all duration-500 ${
          isDark 
            ? 'bg-white/10 border-white/20' 
            : 'bg-white/90 border-gray-200 shadow-lg'
        }`}>
          <Sun className={`w-4 h-4 transition-colors ${isDark ? 'text-slate-400' : 'text-amber-500'}`} />
          <Switch 
            checked={isDark} 
            onCheckedChange={setIsDark}
            className={isDark ? "data-[state=checked]:bg-slate-700 data-[state=unchecked]:bg-amber-100" : "data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-amber-200"}
          />
          <Moon className={`w-4 h-4 transition-colors ${isDark ? 'text-blue-400' : 'text-slate-500'}`} />
        </div>
      </div>

      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className={`absolute top-20 left-20 w-96 h-96 rounded-full filter blur-3xl animate-pulse transition-colors duration-500 ${
          isDark ? 'bg-primary/20' : 'bg-blue-500/20'
        }`} />
        <div className={`absolute bottom-20 right-20 w-80 h-80 rounded-full filter blur-3xl transition-colors duration-500 ${
          isDark ? 'bg-primary-glow/20' : 'bg-blue-400/20'
        }`} />
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full filter blur-3xl transition-colors duration-500 ${
          isDark ? 'bg-gradient-primary/5' : 'bg-blue-500/5'
        }`} />
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-32 left-10 opacity-20">
        <Sparkles className={`w-8 h-8 animate-pulse ${
          isDark ? 'text-primary' : 'text-blue-500'
        }`} />
      </div>
      <div className="absolute bottom-32 right-10 opacity-20">
        <Sparkles className={`w-6 h-6 animate-pulse ${
          isDark ? 'text-primary-glow' : 'text-blue-400'
        }`} style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="relative container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Main content */}
          <div className="text-center mb-16">
            <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium mb-8 transition-colors duration-500 ${
              isDark 
                ? 'bg-primary/10 text-primary' 
                : 'bg-blue-100 text-blue-700'
            }`}>
              <Sparkles className="w-4 h-4" />
              È il momento di crescere
            </div>
            
            <h2 className={`text-5xl lg:text-7xl font-bold leading-tight mb-8 transition-colors duration-500 ${
              isDark ? 'text-foreground' : 'text-slate-800'
            }`}>
              Pronto a far crescere la tua{" "}
              <span className={`bg-clip-text text-transparent relative ${
                isDark ? 'bg-gradient-primary' : 'bg-gradient-to-r from-blue-600 to-blue-500'
              }`}>
                azienda?
                <div className={`absolute -bottom-2 left-0 right-0 h-1 rounded-full opacity-30 ${
                  isDark ? 'bg-gradient-primary' : 'bg-gradient-to-r from-blue-600 to-blue-500'
                }`} />
              </span>
            </h2>
            
            <p className={`text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed mb-4 transition-colors duration-500 ${
              isDark ? 'text-muted-foreground' : 'text-slate-600'
            }`}>
              Parla con Marco e scopri cosa può fare il suo team per te.
            </p>
            
            <p className={`text-lg max-w-2xl mx-auto transition-colors duration-500 ${
              isDark ? 'text-muted-foreground/80' : 'text-slate-500'
            }`}>
              Il prossimo passo è tuo.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button variant="hero" size="xl" className="text-lg px-12 py-6 h-16 group">
              <Calendar className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
              Prenota una Consulenza Gratuita
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className={`text-lg px-10 py-6 h-16 backdrop-blur-sm border-2 group transition-colors duration-500 ${
                isDark 
                  ? 'bg-background/50 hover:bg-primary/5' 
                  : 'bg-white/70 border-blue-200 hover:bg-blue-50/80'
              }`}
            >
              <MessageCircle className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
              Contattaci
            </Button>
          </div>
          
          {/* Features/Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Calendar className="w-6 h-6" />,
                title: "Consulenza gratuita di 30 minuti",
                description: "Analisi approfondita del tuo business"
              },
              {
                icon: <CheckCircle2 className="w-6 h-6" />,
                title: "Analisi personalizzata",
                description: "Strategia su misura per i tuoi obiettivi"
              },
              {
                icon: <Sparkles className="w-6 h-6" />,
                title: "Strategia su misura",
                description: "Piano d'azione concreto e realizzabile"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 group-hover:scale-110 transition-all duration-500 ${
                  isDark 
                    ? 'bg-primary/10 group-hover:bg-primary/20' 
                    : 'bg-blue-100 group-hover:bg-blue-200'
                }`}>
                  <div className={`group-hover:scale-110 transition-transform ${
                    isDark ? 'text-primary' : 'text-blue-600'
                  }`}>
                    {feature.icon}
                  </div>
                </div>
                <h3 className={`text-lg font-semibold mb-2 transition-colors duration-500 ${
                  isDark ? 'text-foreground' : 'text-slate-800'
                }`}>{feature.title}</h3>
                <p className={`text-sm transition-colors duration-500 ${
                  isDark ? 'text-muted-foreground' : 'text-slate-600'
                }`}>{feature.description}</p>
              </div>
            ))}
          </div>
          
          {/* Trust indicators */}
          <div className={`backdrop-blur-sm rounded-2xl p-8 border transition-colors duration-500 ${
            isDark 
              ? 'bg-card/30 border-border/30' 
              : 'bg-white/60 border-blue-200/30 shadow-lg'
          }`}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className={`text-3xl font-bold ${
                  isDark ? 'text-primary' : 'text-blue-600'
                }`}>100+</div>
                <div className={`text-sm ${
                  isDark ? 'text-muted-foreground' : 'text-slate-600'
                }`}>Aziende aiutate</div>
              </div>
              <div className="space-y-2">
                <div className={`text-3xl font-bold ${
                  isDark ? 'text-primary' : 'text-blue-600'
                }`}>300%</div>
                <div className={`text-sm ${
                  isDark ? 'text-muted-foreground' : 'text-slate-600'
                }`}>Crescita media</div>
              </div>
              <div className="space-y-2">
                <div className={`text-3xl font-bold ${
                  isDark ? 'text-primary' : 'text-blue-600'
                }`}>24h</div>
                <div className={`text-sm ${
                  isDark ? 'text-muted-foreground' : 'text-slate-600'
                }`}>Tempo di risposta</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
