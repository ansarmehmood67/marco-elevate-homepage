
import salesImage from "@/assets/sales-on-demand.jpg";
import consultingImage from "@/assets/strategic-consulting.jpg";
import aiImage from "@/assets/instant-avatar.jpg";

const ServicesSection = () => {
  const services = [
    {
      title: "Esternalizza il reparto commerciale. Concretamente. Subito.",
      description: "Una forza vendita pronta, competente, guidata da 25+ anni di esperienza.",
      ctaText: "Scopri Sales On Demand",
      image: salesImage,
      imagePosition: "left",
      gradient: "from-blue-900/90 via-slate-900/80 to-black/90",
      accentColor: "blue"
    },
    {
      title: "Costruisci una strategia di vendita che funziona davvero.",
      description: "Funnel, CRM, KPI e metodo. Costruiamo insieme un sistema replicabile.",
      ctaText: "Scopri la Consulenza",
      image: consultingImage,
      imagePosition: "right",
      gradient: "from-purple-900/90 via-slate-900/80 to-black/90",
      accentColor: "purple"
    },
    {
      title: "Automazioni e AI per vendere senza sforzi.",
      description: "Creiamo chatbot, sistemi conversazionali e fluszi automatizzati personalizzati.",
      ctaText: "Esplora Instant Avatar",
      image: aiImage,
      imagePosition: "left",
      gradient: "from-emerald-900/90 via-slate-900/80 to-black/90",
      accentColor: "emerald"
    }
  ];

  return (
    <section className="bg-black relative overflow-hidden">
      {/* Premium Intro Block */}
      <div className="relative py-32 bg-gradient-to-br from-black via-slate-900/50 to-black overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-600/5 rounded-full filter blur-3xl animate-pulse delay-2000" />
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Premium backdrop card */}
            <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-12 shadow-2xl shadow-blue-500/10">
              <h2 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-8 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Cosa possiamo fare per la tua azienda
              </h2>
              <p className="text-2xl lg:text-3xl text-slate-300 font-light leading-relaxed">
                Tre servizi pensati per far crescere il tuo business.
              </p>
            </div>
          </div>
        </div>

        {/* Subtle divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      {/* Premium Service Blocks */}
      <div className="space-y-0">
        {services.map((service, index) => (
          <div key={index} className="min-h-screen flex items-center relative overflow-hidden group">
            {/* Premium background with parallax effect */}
            <div className="absolute inset-0">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover scale-110 transition-transform duration-[3000ms] group-hover:scale-100"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} transition-all duration-1000 group-hover:opacity-80`} />
            </div>

            {/* Floating decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className={`absolute top-1/4 ${service.imagePosition === 'right' ? 'left-1/4' : 'right-1/4'} w-64 h-64 bg-${service.accentColor}-500/10 rounded-full filter blur-3xl animate-pulse opacity-60`} />
              <div className={`absolute bottom-1/3 ${service.imagePosition === 'right' ? 'right-1/3' : 'left-1/3'} w-96 h-96 bg-${service.accentColor}-400/5 rounded-full filter blur-3xl animate-pulse delay-1000 opacity-40`} />
              
              {/* Geometric shapes */}
              <div className={`absolute top-1/2 ${service.imagePosition === 'right' ? 'left-1/6' : 'right-1/6'} w-2 h-32 bg-gradient-to-b from-white/20 to-transparent transform rotate-45 opacity-30`} />
              <div className={`absolute bottom-1/4 ${service.imagePosition === 'right' ? 'right-1/5' : 'left-1/5'} w-1 h-24 bg-gradient-to-t from-${service.accentColor}-400/40 to-transparent opacity-50`} />
            </div>
            
            <div className="container mx-auto px-6 relative z-10">
              <div className={`grid lg:grid-cols-2 gap-20 items-center ${
                service.imagePosition === 'right' ? 'lg:grid-flow-col-dense' : ''
              }`}>
                
                {/* Premium Image Block */}
                <div className={`relative group/image ${
                  service.imagePosition === 'right' ? 'lg:col-start-2' : ''
                }`}>
                  <div className="relative">
                    {/* Main image container */}
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-black/50">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[700px] object-cover transition-all duration-700 group-hover/image:scale-105"
                      />
                      
                      {/* Premium overlay gradients */}
                      <div className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-${service.accentColor}-900/20 opacity-60 transition-opacity duration-500 group-hover/image:opacity-40`} />
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/40" />
                      
                      {/* Subtle border glow */}
                      <div className={`absolute inset-0 rounded-3xl border border-${service.accentColor}-500/20 shadow-inner`} />
                    </div>

                    {/* Floating accent elements */}
                    <div className={`absolute -top-6 -right-6 w-32 h-32 bg-${service.accentColor}-500/10 rounded-full filter blur-2xl animate-pulse opacity-70`} />
                    <div className={`absolute -bottom-8 -left-8 w-40 h-40 bg-white/5 rounded-full filter blur-3xl animate-pulse delay-1000 opacity-50`} />
                  </div>
                </div>

                {/* Premium Content Block */}
                <div className={`space-y-10 ${
                  service.imagePosition === 'right' ? 'lg:col-start-1 lg:row-start-1' : ''
                }`}>
                  {/* Content backdrop */}
                  <div className="backdrop-blur-xl bg-black/20 border border-white/10 rounded-3xl p-10 shadow-2xl">
                    <div className="space-y-8">
                      <h3 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                        <span className={`bg-gradient-to-r from-white via-${service.accentColor}-100 to-white bg-clip-text text-transparent`}>
                          {service.title}
                        </span>
                      </h3>
                      
                      <p className="text-xl lg:text-2xl text-slate-200 leading-relaxed font-light">
                        {service.description}
                      </p>
                    </div>
                    
                    {/* Premium CTA Button */}
                    <div className="mt-10">
                      <button className={`group/btn relative overflow-hidden bg-gradient-to-r from-${service.accentColor}-600 via-${service.accentColor}-500 to-${service.accentColor}-600 hover:from-${service.accentColor}-500 hover:via-${service.accentColor}-400 hover:to-${service.accentColor}-500 text-white font-semibold px-12 py-5 text-xl rounded-2xl shadow-2xl hover:shadow-${service.accentColor}-500/30 transform hover:scale-105 transition-all duration-300 border border-${service.accentColor}-400/20`}>
                        <span className="relative z-10 flex items-center gap-3">
                          {service.ctaText}
                          <svg className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                        
                        {/* Button shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                        
                        {/* Button glow */}
                        <div className={`absolute inset-0 rounded-2xl bg-${service.accentColor}-400/20 filter blur-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300`} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium section divider */}
            {index < services.length - 1 && (
              <div className="absolute bottom-0 left-0 right-0">
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className={`h-px bg-gradient-to-r from-transparent via-${service.accentColor}-500/20 to-transparent mt-px`} />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
