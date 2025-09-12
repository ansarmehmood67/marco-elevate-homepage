import { Button } from "@/components/ui/button";
import { QuizStepProps, TeamSize } from "@/types/quiz";
import { User, Users, Building, Building2 } from "lucide-react";

const TeamSizeStep = ({ onNext, currentAnswer }: QuizStepProps) => {
  const teamSizes: { value: TeamSize; label: string; icon: any; description: string }[] = [
    {
      value: "Solo / Freelancer",
      label: "Solo / Freelancer",
      icon: User,
      description: "Solo io che lavoro sul mio business o progetti"
    },
    {
      value: "Small team (2–5)",
      label: "Team Piccolo (2–5)",
      icon: Users,
      description: "Un piccolo team affiatato di professionisti"
    },
    {
      value: "Medium (6–20)",
      label: "Azienda Media (6–20)",
      icon: Building,
      description: "Business in crescita con più dipartimenti"
    },
    {
      value: "Larger company (20+)",
      label: "Azienda Grande (20+)",
      icon: Building2,
      description: "Azienda consolidata con esigenze complesse"
    }
  ];

  return (
    <div className="space-y-10">
      <div className="text-center space-y-6">
        <div className="inline-flex items-center space-x-3 bg-gradient-primary/10 px-6 py-3 rounded-full border border-primary/20">
          <div className="w-3 h-3 bg-primary-glow rounded-full animate-pulse shadow-glow-primary" />
          <span className="text-sm font-semibold text-primary-glow uppercase tracking-wide">
            Dimensioni Team
          </span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
          <span className="gradient-text">Quanto è grande</span>
          <br />
          <span className="text-foreground">il tuo team?</span>
        </h2>
        
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Capire la dimensione del tuo team ci aiuta a raccomandare 
          <span className="text-primary-glow font-semibold"> soluzioni su misura</span> per la tua organizzazione.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {teamSizes.map((size, index) => {
          const IconComponent = size.icon;
          const isSelected = currentAnswer === size.value;
          
          return (
            <Button
              key={size.value}
              variant="outline"
              className={`h-auto p-10 flex flex-col items-center space-y-6 text-center transition-all duration-500 group relative overflow-hidden transform hover:scale-105 ${
                isSelected 
                  ? 'bg-gradient-primary/10 border-primary shadow-glow-primary text-foreground' 
                  : 'bg-white/5 hover:bg-white/10 border-white/20 hover:border-primary/40 shadow-card hover:shadow-glow'
              }`}
              onClick={() => onNext(size.value)}
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
                    {size.label}
                  </h3>
                  <p className={`text-base leading-relaxed transition-colors duration-300 ${
                    isSelected 
                      ? 'text-muted-foreground' 
                      : 'text-muted-foreground/80 group-hover:text-muted-foreground'
                  }`}>
                    {size.description}
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

export default TeamSizeStep;