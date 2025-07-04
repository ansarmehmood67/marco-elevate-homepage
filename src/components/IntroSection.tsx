import { Button } from "@/components/ui/button";

const IntroSection = () => {
  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-2xl lg:text-3xl text-foreground leading-relaxed font-light">
            Affidati a un team esperto in{" "}
            <span className="font-semibold text-primary">outsourcing vendite</span>,{" "}
            <span className="font-semibold text-primary">marketing</span> e{" "}
            <span className="font-semibold text-primary">intelligenza artificiale</span>.
          </p>
          <p className="text-xl text-muted-foreground">
            Se cerchi un sistema per vendere di più, sei nel posto giusto.
          </p>
          
          <Button variant="premium" size="lg" className="mt-8">
            Scopri di più
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;