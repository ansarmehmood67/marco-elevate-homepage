
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Download, CheckCircle, Star, BookOpen } from "lucide-react";

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
    <section className="py-32 bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/15 rounded-full filter blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-primary/10 rounded-full filter blur-3xl" />
      </div>
      
      <div className="relative container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Book showcase */}
            <div className="relative">
              {/* Book mockup with enhanced styling */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-primary rounded-2xl filter blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                <div className="relative w-80 h-96 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-premium mx-auto transform rotate-3 group-hover:rotate-0 transition-all duration-500 border border-primary/20">
                  <div className="absolute inset-0 bg-gradient-primary/10 rounded-2xl" />
                  <div className="relative p-8 h-full flex flex-col justify-between text-center">
                    <div>
                      <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-2">Il Metodo</h3>
                      <h4 className="text-xl text-primary-glow mb-4">Vendita 3.0</h4>
                      <div className="flex justify-center space-x-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-white/75 mb-2">by Marco</div>
                      <div className="text-xs text-primary-glow">180+ pagine di strategie</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating benefits */}
              <div className="absolute -right-4 top-8 bg-background/90 backdrop-blur-sm rounded-lg p-3 shadow-glow border border-primary/20">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-foreground">Download Immediato</span>
                </div>
              </div>
              
              <div className="absolute -left-4 bottom-8 bg-background/90 backdrop-blur-sm rounded-lg p-3 shadow-glow border border-primary/20">
                <div className="flex items-center gap-2 text-sm">
                  <Download className="w-4 h-4 text-primary" />
                  <span className="text-foreground">PDF + Bonus</span>
                </div>
              </div>
            </div>
            
            {/* Right side - Content and form */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Star className="w-4 h-4" />
                  Risorsa Gratuita
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                  Scarica il Libro
                  <span className="block bg-gradient-primary bg-clip-text text-transparent">
                    Gratuito
                  </span>
                </h2>
                
                <div className="space-y-4 mb-8">
                  <p className="text-xl text-muted-foreground">
                    <span className="font-semibold text-primary">"Il Metodo Vendita 3.0"</span>
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Scopri le strategie avanzate per trasformare il tuo business con AI e automazioni. 
                    Un manuale completo con casi studio reali e implementazioni pratiche.
                  </p>
                </div>
                
                {/* Benefits list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    "Strategie AI per vendite",
                    "Automazioni avanzate",
                    "Casi studio reali",
                    "Template pronti all'uso"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Enhanced form */}
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-card">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <Input
                      type="text"
                      placeholder="Il tuo nome completo"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="h-12 bg-background/80 backdrop-blur-sm border-border/50 text-foreground placeholder:text-muted-foreground rounded-xl"
                    />
                    <Input
                      type="email"
                      placeholder="La tua email professionale"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 bg-background/80 backdrop-blur-sm border-border/50 text-foreground placeholder:text-muted-foreground rounded-xl"
                    />
                  </div>
                  
                  <Button type="submit" variant="hero" size="xl" className="w-full h-14 text-lg font-semibold">
                    <Download className="w-5 h-5 mr-2" />
                    Scarica Gratis Ora
                  </Button>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>📧 Riceverai il libro istantaneamente via email</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-1">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>🔒 Zero spam, 100% valore garantito</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;
