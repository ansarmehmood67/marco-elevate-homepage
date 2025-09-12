import { Button } from "@/components/ui/button";
import { QuizStepProps, Preference } from "@/types/quiz";
import { HandHeart, MessageCircle, Zap, HelpCircle } from "lucide-react";

const PreferenceStep = ({ onNext, currentAnswer }: QuizStepProps) => {
  const preferences: { value: Preference; label: string; icon: any; description: string }[] = [
    {
      value: "I want someone to do it for me",
      label: "Fallo Per Me",
      icon: HandHeart,
      description: "Voglio un team che gestisca tutto mentre mi concentro sul mio business"
    },
    {
      value: "I prefer expert consulting and strategy",
      label: "Consulenza Esperta",
      icon: MessageCircle,
      description: "Voglio guida strategica e consigli esperti per farlo da solo"
    },
    {
      value: "I want to automate my workflows",
      label: "Soluzioni di Automazione",
      icon: Zap,
      description: "Voglio tecnologia e AI per automatizzare compiti ripetitivi"
    },
    {
      value: "Not sure – I want to see what's best",
      label: "Non Sono Sicuro",
      icon: HelpCircle,
      description: "Sono aperto a raccomandazioni basate su ciò che funziona meglio"
    }
  ];

  return (
    <div className="space-y-10">
      <div className="text-center space-y-6">
        <div className="inline-flex items-center space-x-3 bg-gradient-primary/10 px-6 py-3 rounded-full border border-primary/20">
          <div className="w-3 h-3 bg-primary-glow rounded-full animate-pulse shadow-glow-primary" />
          <span className="text-sm font-semibold text-primary-glow uppercase tracking-wide">
            Approccio Preferito
          </span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
          <span className="gradient-text">Come preferisci</span>
          <br />
          <span className="text-foreground">lavorare?</span>
        </h2>
        
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Aiutaci a capire il tuo approccio preferito così possiamo trovarti la
          <span className="text-primary-glow font-semibold"> soluzione ideale</span> per il tuo stile di lavoro.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {preferences.map((preference, index) => {
          const IconComponent = preference.icon;
          const isSelected = currentAnswer === preference.value;
          
          return (
            <Button
              key={preference.value}
              variant="outline"
              className={`h-auto p-10 flex flex-col items-center space-y-6 text-center transition-all duration-500 group relative overflow-hidden transform hover:scale-105 ${
                isSelected 
                  ? 'bg-gradient-primary/10 border-primary shadow-glow-primary text-foreground' 
                  : 'bg-white/5 hover:bg-white/10 border-white/20 hover:border-primary/40 shadow-card hover:shadow-glow'
              }`}
              onClick={() => onNext(preference.value)}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-500 ${
                isSelected 
                  ? 'from-primary/10 via-transparent to-secondary/10 opacity-100' 
                  : 'from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100'
              }`} />
              
              <div className="relative z-10 flex flex-col items-center space-y-6">
                <div className={`p-6 rounded-2xl transition-all duration-300 shadow-inner ${
                  isSelected 
                    ? 'bg-gradient-primary/20 shadow-glow-primary' 
                    : 'bg-white/10 group-hover:bg-primary/10 group-hover:shadow-glow-primary'
                }`}>
                  <IconComponent className={`w-12 h-12 transition-all duration-300 ${
                    isSelected 
                      ? 'text-primary-glow drop-shadow-lg' 
                      : 'text-muted-foreground group-hover:text-primary-glow group-hover:drop-shadow-lg'
                  }`} />
                </div>
                
                <div className="space-y-3">
                  <h3 className={`font-bold text-xl transition-colors duration-300 ${
                    isSelected 
                      ? 'text-foreground' 
                      : 'text-foreground group-hover:text-foreground'
                  }`}>
                    {preference.label}
                  </h3>
                  <p className={`text-base leading-relaxed transition-colors duration-300 ${
                    isSelected 
                      ? 'text-muted-foreground' 
                      : 'text-muted-foreground/80 group-hover:text-muted-foreground'
                  }`}>
                    {preference.description}
                  </p>
                </div>
              </div>
              
              {/* Selection indicator */}
              {isSelected && (
                <div className="absolute top-6 right-6 w-8 h-8 bg-primary-glow rounded-full flex items-center justify-center shadow-glow-primary animate-scale-in">
                  <div className="w-4 h-4 bg-white rounded-full" />
                </div>
              )}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default PreferenceStep;