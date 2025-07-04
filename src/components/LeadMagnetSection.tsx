import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const LeadMagnetSection = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) {
      toast({
        title: "Errore",
        description: "Compila tutti i campi per scaricare il libro.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Grazie!",
      description: "Il libro è stato inviato alla tua email.",
    });
    
    setEmail("");
    setName("");
  };

  return (
    <section className="py-20 bg-gradient-service-2 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary-glow/10" />
      
      <div className="relative container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            {/* Book mockup */}
            <div className="inline-block relative mb-8">
              <div className="w-48 h-64 bg-gradient-primary rounded-lg shadow-premium mx-auto flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="text-center p-6">
                  <div className="text-2xl font-bold text-white mb-2">Il Metodo</div>
                  <div className="text-lg text-white/90 mb-4">Vendita 3.0</div>
                  <div className="text-sm text-white/75">by Marco</div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-primary/20 rounded-lg filter blur-xl -z-10" />
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Scarica il Libro Gratuito
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              <span className="font-semibold text-primary">"Il Metodo Vendita 3.0"</span> - 
              Scopri le strategie avanzate per trasformare il tuo business con AI e automazioni
            </p>
          </div>
          
          {/* Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <Input
              type="text"
              placeholder="Il tuo nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-background/50 backdrop-blur-sm border-border/50 text-foreground placeholder:text-muted-foreground"
            />
            <Input
              type="email"
              placeholder="La tua email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-background/50 backdrop-blur-sm border-border/50 text-foreground placeholder:text-muted-foreground"
            />
            <Button type="submit" variant="hero" size="xl" className="w-full">
              Scarica Gratis Ora
            </Button>
          </form>
          
          <p className="text-sm text-muted-foreground mt-4">
            📧 Riceverai il libro istantaneamente via email. Zero spam, 100% valore.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;