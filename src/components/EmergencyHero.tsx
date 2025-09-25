import { Button } from "@/components/ui/button";

const EmergencyHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 to-background">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Marco Ferrario
            <span className="block text-primary">Sales & Marketing Expert</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
            Trasformo le tue vendite con strategie AI-powered e team dedicati. 
            500+ aziende servite, risultati garantiti.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center gap-2 text-primary font-semibold">
              <span>✓ Audit gratuito 30 min</span>
              <span>✓ Team dedicato</span>
              <span>✓ Risultati garantiti</span>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="text-lg px-8 py-6"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Richiedi Audit Gratuito
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EmergencyHero;