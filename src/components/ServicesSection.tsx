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
      {/* Floating Header - repositioned to avoid overlap */}
      <div className="relative z-30 pt-20 pb-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="inline-block backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl shadow-blue-500/10">
              <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-4 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Cosa possiamo fare per la tua azienda
              </h2>
              <p className="text-lg lg:text-xl text-slate-300 font-light leading-relaxed">
                Tre servizi pensati per far crescere il tuo business.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="space-y-0">
        {services.map((service, index) => (
          <div key={index} className="min-h-screen flex items-center relative overflow-hidden group">
            {/* Premium background with parallax effect */}
            <div className="absolute inset-0">
              <div 
                className="w-full h-full bg-cover bg-center scale-110 transition-transform duration-[3s] group-hover:scale-100"
                style={{
                  backgroundImage: `url(${service.image})`,
                }}
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
              } ${index === 0 ? 'pt-24' : ''}`}>
                
                {/* Premium Image Block */}
                <div className={`relative group/image ${
                  service.imagePosition === 'right' ? 'lg:col-start-2' : ''
                }`}>
                  <div className="relative">
                    {/* Main image container */}
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-black/50">
                      <div 
                        className="w-full h-[600px] lg:h-[700px] bg-cover bg-center transition-all duration-700 group-hover/image:scale-105"
                        style={{
                          backgroundImage: `url(${service.image})`,
                        }}
                      />
                      
                      {/* Premium overlay gradients */}
                      <div className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-${service.accentColor}-900/20 opacity-60 transition-opacity duration-500 group-hover/image:opacity-40`} />
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/40" />
                      
                      {/* Subtle border glow */}
                      <div className={`absolute inset-0 rounded-3xl border border-${service.accentColor}-500/20 shadow-inner`} />

                      {/* Video-like play overlay effect */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                        <div className={`w-20 h-20 rounded-full bg-${service.accentColor}-500/20 backdrop-blur-sm border border-${service.accentColor}-400/30 flex items-center justify-center`}>
                          <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1" />
                        </div>
                      </div>
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
                  <div className="backdrop-blur-xl bg-black/20 border border-white/10 rounded-3xl p-8 lg:p-10 shadow-2xl">
                    <div className="space-y-8">
                      <h3 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
                        <span className={`bg-gradient-to-r from-white via-${service.accentColor}-100 to-white bg-clip-text text-transparent`}>
                          {service.title}
                        </span>
                      </h3>
                      
                      <p className="text-lg lg:text-xl text-slate-200 leading-relaxed font-light">
                        {service.description}
                      </p>
                    </div>
                    
                    {/* Premium CTA Button */}
                    <div className="mt-10">
                      <button className={`group/btn relative overflow-hidden bg-gradient-to-r from-${service.accentColor}-600 via-${service.accentColor}-500 to-${service.accentColor}-600 hover:from-${service.accentColor}-500 hover:via-${service.accentColor}-400 hover:to-${service.accentColor}-500 text-white font-semibold px-10 py-4 text-lg rounded-2xl shadow-2xl hover:shadow-${service.accentColor}-500/30 transform hover:scale-105 transition-all duration-300 border border-${service.accentColor}-400/20`}>
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

      <style>{`
        @keyframes subtle-zoom {
          0%, 100% { transform: scale(1.1); }
          50% { transform: scale(1.15); }
        }
        
        @keyframes gentle-float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.02); }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
