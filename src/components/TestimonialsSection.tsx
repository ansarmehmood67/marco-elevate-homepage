const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Abbiamo raddoppiato i lead in 30 giorni.",
      author: "Davide R.",
      role: "CEO"
    },
    {
      quote: "Il ROI è aumentato del 400% nel primo trimestre.",
      author: "Elena M.",
      role: "Marketing Director"
    },
    {
      quote: "Finalmente un sistema di vendita che funziona davvero.",
      author: "Giuseppe P.",
      role: "Sales Manager"
    },
    {
      quote: "L'automazione AI ha trasformato il nostro business.",
      author: "Sofia L.",
      role: "Founder"
    },
    {
      quote: "Risultati concreti dal primo mese di collaborazione.",
      author: "Marco T.",
      role: "Business Owner"
    },
    {
      quote: "Il miglior investimento che abbiamo mai fatto.",
      author: "Federica B.",
      role: "COO"
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-glow/5 rounded-full filter blur-3xl" />
      
      <div className="relative container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            I nostri clienti{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              crescono
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Risultati concreti, misurabili e duraturi nel tempo
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 shadow-card border border-border/50 hover:shadow-premium transition-all duration-300 hover:scale-105"
            >
              <blockquote className="text-lg text-foreground mb-4 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Metric Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center bg-gradient-service-1 rounded-2xl p-8 shadow-card">
            <div className="text-5xl font-bold text-primary mb-2">↑</div>
            <div className="text-2xl font-bold text-foreground mb-2">Conversioni</div>
            <div className="text-muted-foreground">Aumento medio del 250%</div>
          </div>
          
          <div className="text-center bg-gradient-service-2 rounded-2xl p-8 shadow-card">
            <div className="text-5xl font-bold text-primary mb-2">↓</div>
            <div className="text-2xl font-bold text-foreground mb-2">Costi</div>
            <div className="text-muted-foreground">Riduzione fino al 60%</div>
          </div>
          
          <div className="text-center bg-gradient-service-3 rounded-2xl p-8 shadow-card">
            <div className="text-5xl font-bold text-primary mb-2">🤖</div>
            <div className="text-2xl font-bold text-foreground mb-2">Automazione</div>
            <div className="text-muted-foreground">24/7 senza interruzioni</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;