import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Mail, Shield, ArrowRight } from "lucide-react";

interface LeadCaptureStepProps {
  onNext: (name: string) => void;
  onPrevious: () => void;
  onEmailSubmit: (email: string, name: string) => void;
  currentName?: string;
  currentEmail?: string;
  isFirst: boolean;
  isLast: boolean;
}

const LeadCaptureStep = ({ 
  onNext, 
  onEmailSubmit, 
  currentName = "", 
  currentEmail = "" 
}: LeadCaptureStepProps) => {
  const [name, setName] = useState(currentName);
  const [email, setEmail] = useState(currentEmail);
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const validateForm = () => {
    const newErrors: { name?: string; email?: string } = {};
    
      if (!name.trim()) {
        newErrors.name = "Il nome è obbligatorio";
      }
      
      if (!email.trim()) {
        newErrors.email = "L'email è obbligatoria";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        newErrors.email = "Inserisci un indirizzo email valido";
      }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Save name first
      onNext(name);
      // Then submit email and name to complete the quiz
      onEmailSubmit(email, name);
    }
  };

  return (
    <div className="space-y-10">
      <div className="text-center space-y-6">
        <div className="inline-flex items-center space-x-3 bg-gradient-primary/10 px-6 py-3 rounded-full border border-primary/20">
          <div className="w-3 h-3 bg-primary-glow rounded-full animate-pulse shadow-glow-primary" />
          <span className="text-sm font-semibold text-primary-glow uppercase tracking-wide">
            Finalizzazione
          </span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
          <span className="gradient-text">Ci siamo quasi!</span>
          <br />
          <span className="text-foreground">I tuoi dati</span>
        </h2>
        
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Utilizzeremo queste informazioni per inviarti una
          <span className="text-primary-glow font-semibold"> raccomandazione personalizzata</span> e seguire i prossimi passi.
        </p>
      </div>

      <div className="max-w-lg mx-auto">
        <div className="glass-card rounded-2xl p-8 md:p-10 backdrop-blur-xl border border-white/10 shadow-card">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-4">
              <Label htmlFor="name" className="text-base font-semibold text-foreground flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <User className="w-5 h-5 text-primary-glow" />
                </div>
                <span>Nome Completo</span>
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Inserisci il tuo nome completo"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errors.name) {
                    setErrors(prev => ({ ...prev, name: undefined }));
                  }
                }}
                className={`h-14 text-lg bg-white/5 border-white/20 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 transition-all duration-300 ${
                  errors.name ? 'border-destructive' : ''
                }`}
              />
              {errors.name && (
                <p className="text-sm text-destructive flex items-center space-x-2">
                  <div className="w-2 h-2 bg-destructive rounded-full" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            <div className="space-y-4">
              <Label htmlFor="email" className="text-base font-semibold text-foreground flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Mail className="w-5 h-5 text-primary-glow" />
                </div>
                <span>Indirizzo Email</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Inserisci il tuo indirizzo email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) {
                    setErrors(prev => ({ ...prev, email: undefined }));
                  }
                }}
                className={`h-14 text-lg bg-white/5 border-white/20 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 transition-all duration-300 ${
                  errors.email ? 'border-destructive' : ''
                }`}
              />
              {errors.email && (
                <p className="text-sm text-destructive flex items-center space-x-2">
                  <div className="w-2 h-2 bg-destructive rounded-full" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>

            <Button 
              type="submit" 
              className="w-full h-16 text-lg font-bold bg-gradient-primary hover:shadow-glow-primary text-white shadow-card hover:scale-105 transition-all duration-300"
              size="lg"
            >
              <span>Ottieni la Mia Raccomandazione Personalizzata</span>
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
          </form>

          {/* Trust indicators */}
          <div className="mt-8 p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
            <div className="flex items-start space-x-4 text-sm text-muted-foreground">
              <div className="p-2 bg-green-500/10 rounded-lg mt-0.5">
                <Shield className="w-5 h-5 text-green-400" />
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-foreground">Sicurezza Garantita</p>
                <p className="leading-relaxed">
                  Le tue informazioni sono protette e crittografate. Non saranno mai condivise con terze parti.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadCaptureStep;