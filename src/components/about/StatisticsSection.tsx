const StatisticsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-background/50 via-background/80 to-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent">
            I Numeri del
            <span className="block text-primary">Successo</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Risultati concreti che testimoniano la qualità del nostro approccio
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;