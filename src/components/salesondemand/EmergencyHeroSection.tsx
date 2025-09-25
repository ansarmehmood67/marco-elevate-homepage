import { Button } from "@/components/ui/button";

const EmergencyHeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 to-background">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Sales On Demand
            <span className="block text-primary">Outsourcing Vendite</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
            Team vendite dedicato, strategie AI-powered, risultati garantiti.
            500+ aziende servite con successo.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center gap-4 text-primary font-semibold flex-wrap">
              <span>✓ Team dedicato</span>
              <span>✓ Telemarketing B2B</span>
              <span>✓ Audit gratuito</span>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="text-lg px-8 py-6"
            onClick={() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Scopri i Servizi
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EmergencyHeroSection;