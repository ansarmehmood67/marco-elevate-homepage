
import ServiceCard from "./ServiceCard";
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
      imagePosition: "left"
    },
    {
      title: "Costruisci una strategia di vendita che funziona davvero.",
      description: "Funnel, CRM, KPI e metodo. Costruiamo insieme un sistema replicabile.",
      ctaText: "Scopri la Consulenza",
      image: consultingImage,
      imagePosition: "right"
    },
    {
      title: "Automazioni e AI per vendere senza sforzi.",
      description: "Creiamo chatbot, sistemi conversazionali e fluszi automatizzati personalizzati.",
      ctaText: "Esplora Instant Avatar",
      image: aiImage,
      imagePosition: "left"
    }
  ];

  return (
    <section className="bg-black">
      {/* Intro Block */}
      <div className="py-20 bg-gradient-to-br from-black via-slate-900 to-black">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Cosa possiamo fare per la tua azienda
            </h2>
            <p className="text-xl lg:text-2xl text-slate-300 font-light">
              Tre servizi pensati per far crescere il tuo business.
            </p>
          </div>
        </div>
      </div>

      {/* Service Blocks */}
      <div className="space-y-0">
        {services.map((service, index) => (
          <div key={index} className="min-h-screen flex items-center bg-black relative overflow-hidden">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-transparent to-black/40" />
            
            <div className="container mx-auto px-6 relative z-10">
              <div className={`grid lg:grid-cols-2 gap-16 items-center ${
                service.imagePosition === 'right' ? 'lg:grid-flow-col-dense' : ''
              }`}>
                
                {/* Image Block */}
                <div className={`relative group ${
                  service.imagePosition === 'right' ? 'lg:col-start-2' : ''
                }`}>
                  <div className="relative overflow-hidden rounded-3xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Subtle floating elements */}
                    <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse" />
                    <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-blue-400/5 rounded-full filter blur-3xl animate-pulse delay-1000" />
                  </div>
                </div>

                {/* Content Block */}
                <div className={`space-y-8 ${
                  service.imagePosition === 'right' ? 'lg:col-start-1 lg:row-start-1' : ''
                }`}>
                  <div className="space-y-6">
                    <h3 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                      {service.title}
                    </h3>
                    
                    <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>
                  
                  <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-500 hover:via-blue-400 hover:to-blue-500 text-white font-semibold px-12 py-4 text-lg rounded-2xl shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300">
                    <span className="relative z-10">{service.ctaText}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  </button>
                </div>
              </div>
            </div>

            {/* Subtle section divider */}
            {index < services.length - 1 && (
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
