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
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-slate-900">
          Ci siamo quasi! Qual è il tuo nome e email?
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Utilizzeremo queste informazioni per inviarti una raccomandazione personalizzata e seguire i prossimi passi.
        </p>
      </div>

      <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-slate-900 flex items-center space-x-2">
              <User className="w-4 h-4 text-slate-600" />
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
              className={`${errors.name ? 'border-destructive' : ''}`}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-slate-900 flex items-center space-x-2">
              <Mail className="w-4 h-4 text-slate-600" />
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
              className={`${errors.email ? 'border-destructive' : ''}`}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email}</p>
            )}
          </div>

          <Button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all"
            size="lg"
          >
            <span>Ottieni la Mia Raccomandazione Personalizzata</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </form>

        {/* Trust indicators */}
        <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
          <div className="flex items-center space-x-2 text-sm text-slate-600">
            <Shield className="w-4 h-4 text-green-600" />
            <span>Le tue informazioni sono sicure e non saranno mai condivise con terze parti.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadCaptureStep;