import marcoPortrait from "@/assets/marco-portrait.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-service-1">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl filter blur-3xl" />
              <img
                src={marcoPortrait}
                alt="Marco - Business Expert"
                className="relative w-80 h-96 lg:w-96 lg:h-[500px] object-cover rounded-2xl shadow-premium"
              />
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Marco, il tuo partner per la{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  crescita
                </span>
              </h2>
              
              <blockquote className="text-2xl lg:text-3xl text-foreground leading-relaxed italic border-l-4 border-primary pl-6">
                "Dal 1996 aiuto aziende italiane a vendere di più. Oggi metto a disposizione esperienza, metodo e tecnologia per aiutarti a scalare."
              </blockquote>
              
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Con oltre 25 anni di esperienza nel settore commerciale, ho sviluppato metodologie 
                  innovative che combinano approcci tradizionali con le più moderne tecnologie AI.
                </p>
                <p>
                  La mia missione è semplice: trasformare il tuo business in una macchina di vendita 
                  efficiente e scalabile.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Anni di esperienza</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Aziende aiutate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary">300%</div>
                <div className="text-sm text-muted-foreground">Crescita media</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;