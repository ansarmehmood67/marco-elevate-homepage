import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Lock, CheckCircle } from "lucide-react";

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
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Quasi fatto! Solo i tuoi dati
        </h2>
        <p className="text-base text-white/80 max-w-2xl mx-auto">
          Inserisci le tue informazioni per ricevere la tua soluzione personalizzata e iniziare subito
        </p>
      </div>

      <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
              Nome Completo *
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary-glow focus:border-transparent transition-all duration-300"
              placeholder="Inserisci il tuo nome completo"
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
          </div>

          <div className="space-y-4">
            <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
              Email Aziendale *
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary-glow focus:border-transparent transition-all duration-300"
              placeholder="nome@azienda.com"
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-primary hover:opacity-90 text-white font-semibold py-4 px-8 rounded-lg shadow-glow-primary transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
          >
            <span>Ottieni la Tua Soluzione Personalizzata</span>
            <ArrowRight className="w-5 h-5" />
          </Button>
        </form>

        {/* Trust indicators */}
        <div className="flex items-center justify-center space-x-6 text-sm text-white/70 mt-6">
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4 text-primary-glow" />
            <span>Dati protetti SSL</span>
          </div>
          <div className="flex items-center space-x-2">
            <Lock className="w-4 h-4 text-primary-glow" />
            <span>Privacy garantita</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-primary-glow" />
            <span>No spam, mai</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadCaptureStep;