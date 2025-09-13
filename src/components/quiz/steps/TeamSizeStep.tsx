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
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Qual è la dimensione del tuo team?
        </h2>
        <p className="text-base text-white/80 max-w-2xl mx-auto">
          Questa informazione ci aiuta a personalizzare la soluzione più adatta alla tua struttura aziendale
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {teamSizes.map((size, index) => {
          const IconComponent = size.icon;
          const isSelected = currentAnswer === size.value;
          
          return (
            <Button
              key={size.value}
              variant="outline"
              className={`relative overflow-hidden w-full h-auto p-8 flex flex-col items-center space-y-6 text-center transition-all duration-300 hover:scale-105 whitespace-normal break-words ${
                isSelected 
                  ? 'bg-primary-glow/10 border-primary-glow shadow-glow-primary text-white' 
                  : 'bg-white/5 hover:bg-white/10 border-white/20 hover:border-primary-glow/50'
              }`}
              onClick={() => onNext(size.value)}
            >
              <div className="flex flex-col items-center space-y-4">
                <div className={`p-4 rounded-2xl transition-all duration-300 ${
                  isSelected 
                    ? 'bg-primary-glow/20 shadow-glow-primary' 
                    : 'bg-white/10 hover:bg-primary-glow/10'
                }`}>
                  <IconComponent className={`w-10 h-10 transition-all duration-300 ${
                    isSelected 
                      ? 'text-primary-glow' 
                      : 'text-white/80 hover:text-primary-glow'
                  }`} />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-bold text-lg text-white">
                    {size.label}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {size.description}
                  </p>
                </div>
              </div>
              
              {/* Selection indicator */}
              {isSelected && (
                <div className="absolute top-4 right-4 w-6 h-6 bg-primary-glow rounded-full flex items-center justify-center shadow-glow-primary">
                  <div className="w-3 h-3 bg-white rounded-full" />
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