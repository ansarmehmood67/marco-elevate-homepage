
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Download, CheckCircle, Star, BookOpen, Moon, Sun } from "lucide-react";

const LeadMagnetSection = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isDark, setIsDark] = useState(true);
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
    <section className={`py-32 relative overflow-hidden transition-all duration-500 ${
      isDark 
        ? 'bg-gradient-to-br from-background via-background to-primary/5' 
        : 'bg-gradient-to-br from-slate-50 via-white to-blue-50'
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
        <div className={`absolute top-20 left-10 w-72 h-72 rounded-full filter blur-3xl animate-pulse transition-colors duration-500 ${
          isDark ? 'bg-primary/20' : 'bg-blue-500/20'
        }`} />
        <div className={`absolute bottom-20 right-10 w-96 h-96 rounded-full filter blur-3xl transition-colors duration-500 ${
          isDark ? 'bg-primary-glow/15' : 'bg-blue-400/15'
        }`} />
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full filter blur-3xl transition-colors duration-500 ${
          isDark ? 'bg-gradient-primary/10' : 'bg-blue-500/10'
        }`} />
      </div>
      
      <div className="relative container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Book showcase */}
            <div className="relative">
              {/* Book mockup with enhanced styling */}
              <div className="relative group">
                <div className={`absolute inset-0 rounded-2xl filter blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 ${
                  isDark ? 'bg-gradient-primary' : 'bg-gradient-to-br from-blue-500 to-blue-600'
                }`} />
                <div className={`relative w-80 h-96 rounded-2xl mx-auto transform rotate-3 group-hover:rotate-0 transition-all duration-500 border ${
                  isDark 
                    ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-premium border-primary/20' 
                    : 'bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 shadow-2xl border-blue-200/30'
                }`}>
                  <div className={`absolute inset-0 rounded-2xl ${
                    isDark ? 'bg-gradient-primary/10' : 'bg-blue-500/10'
                  }`} />
                  <div className="relative p-8 h-full flex flex-col justify-between text-center">
                    <div>
                      <BookOpen className={`w-12 h-12 mx-auto mb-4 ${
                        isDark ? 'text-primary' : 'text-blue-400'
                      }`} />
                      <h3 className="text-2xl font-bold text-white mb-2">Il Metodo</h3>
                      <h4 className={`text-xl mb-4 ${
                        isDark ? 'text-primary-glow' : 'text-blue-300'
                      }`}>Vendita 3.0</h4>
                      <div className="flex justify-center space-x-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-white/75 mb-2">by Marco</div>
                      <div className={`text-xs ${
                        isDark ? 'text-primary-glow' : 'text-blue-300'
                      }`}>180+ pagine di strategie</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating benefits */}
              <div className={`absolute -right-4 top-8 backdrop-blur-sm rounded-lg p-3 shadow-glow border transition-colors duration-500 ${
                isDark 
                  ? 'bg-background/90 border-primary/20' 
                  : 'bg-white/90 border-blue-200/50 shadow-lg'
              }`}>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className={isDark ? 'text-foreground' : 'text-slate-700'}>Download Immediato</span>
                </div>
              </div>
              
              <div className={`absolute -left-4 bottom-8 backdrop-blur-sm rounded-lg p-3 shadow-glow border transition-colors duration-500 ${
                isDark 
                  ? 'bg-background/90 border-primary/20' 
                  : 'bg-white/90 border-blue-200/50 shadow-lg'
              }`}>
                <div className="flex items-center gap-2 text-sm">
                  <Download className={`w-4 h-4 ${isDark ? 'text-primary' : 'text-blue-600'}`} />
                  <span className={isDark ? 'text-foreground' : 'text-slate-700'}>PDF + Bonus</span>
                </div>
              </div>
            </div>
            
            {/* Right side - Content and form */}
            <div className="space-y-8">
              <div>
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 transition-colors duration-500 ${
                  isDark 
                    ? 'bg-primary/10 text-primary' 
                    : 'bg-blue-100 text-blue-700'
                }`}>
                  <Star className="w-4 h-4" />
                  Risorsa Gratuita
                </div>
                
                <h2 className={`text-4xl lg:text-5xl font-bold mb-6 leading-tight transition-colors duration-500 ${
                  isDark ? 'text-foreground' : 'text-slate-800'
                }`}>
                  Scarica il Libro
                  <span className={`block bg-clip-text text-transparent ${
                    isDark ? 'bg-gradient-primary' : 'bg-gradient-to-r from-blue-600 to-blue-500'
                  }`}>
                    Gratuito
                  </span>
                </h2>
                
                <div className="space-y-4 mb-8">
                  <p className={`text-xl transition-colors duration-500 ${
                    isDark ? 'text-muted-foreground' : 'text-slate-600'
                  }`}>
                    <span className={`font-semibold ${
                      isDark ? 'text-primary' : 'text-blue-600'
                    }`}>"Il Metodo Vendita 3.0"</span>
                  </p>
                  <p className={`text-lg leading-relaxed transition-colors duration-500 ${
                    isDark ? 'text-muted-foreground' : 'text-slate-600'
                  }`}>
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
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-500 ${
                        isDark ? 'bg-primary/20' : 'bg-blue-100'
                      }`}>
                        <CheckCircle className={`w-4 h-4 ${
                          isDark ? 'text-primary' : 'text-blue-600'
                        }`} />
                      </div>
                      <span className={isDark ? 'text-foreground' : 'text-slate-700'}>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Enhanced form */}
              <div className={`backdrop-blur-sm rounded-2xl p-8 border shadow-card transition-colors duration-500 ${
                isDark 
                  ? 'bg-card/50 border-border/50' 
                  : 'bg-white/80 border-blue-200/50 shadow-xl'
              }`}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <Input
                      type="text"
                      placeholder="Il tuo nome completo"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`h-12 backdrop-blur-sm rounded-xl transition-colors duration-500 ${
                        isDark 
                          ? 'bg-background/80 border-border/50 text-foreground placeholder:text-muted-foreground' 
                          : 'bg-white/90 border-blue-200/50 text-slate-800 placeholder:text-slate-500'
                      }`}
                    />
                    <Input
                      type="email"
                      placeholder="La tua email professionale"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`h-12 backdrop-blur-sm rounded-xl transition-colors duration-500 ${
                        isDark 
                          ? 'bg-background/80 border-border/50 text-foreground placeholder:text-muted-foreground' 
                          : 'bg-white/90 border-blue-200/50 text-slate-800 placeholder:text-slate-500'
                      }`}
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
