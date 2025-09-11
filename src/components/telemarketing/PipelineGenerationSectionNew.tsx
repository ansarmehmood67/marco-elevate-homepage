import ConsistentHeading from "@/components/shared/ConsistentHeading";

const PipelineGenerationSectionNew = () => {
  const services = [
    {
      badge: "Strategia",
      title: "Telemarketing Proattivo",
      subtitle: "Comunicazione strategica e personalizzata per capire le esigenze dei prospect e costruire relazioni di valore nel tempo.",
      features: [
        "Approccio consulenziale",
        "Script personalizzati",
        "Relazioni durature",
        "Follow-up strutturato"
      ],
      benefitStrip: "Approccio strategico • Relazioni autentiche • Risultati duraturi",
      link: "/contact"
    },
    {
      badge: "Conversione",
      title: "Generazione di nuovi clienti",
      subtitle: "Gestione mirata dei contatti per garantire un flusso continuo di lead qualificati pronti a diventare clienti.",
      features: [
        "Lead qualificati",
        "Targeting preciso",
        "Flusso continuo",
        "Alta conversione"
      ],
      benefitStrip: "Pipeline costante • Lead caldi • Conversioni elevate",
      link: "/contact"
    },
    {
      badge: "Risultati",
      title: "Opportunità di Vendita",
      subtitle: "Presentazione chiara e convincente dei tuoi servizi, per trasformare ogni contatto in una possibilità concreta di crescita.",
      features: [
        "Presentazioni efficaci",
        "Argomentazioni solide",
        "Chiusure professionali",
        "Crescita misurabile"
      ],
      benefitStrip: "Vendite concrete • Crescita garantita • ROI ottimizzato",
      link: "/contact"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="w-full px-6">
        {/* Header Section */}
        <ConsistentHeading
          badge="Pipeline Generation"
          title="Generiamo opportunità di vendita concrete"
          highlightedText="con il Telemarketing Proattivo"
          subtitle="Il nostro telemarketing proattivo va oltre le semplici chiamate: genera lead qualificati e crea un flusso costante di nuovi clienti, supportando la crescita del tuo business."
          theme="dark"
          className="mb-16 max-w-6xl mx-auto"
        />

        {/* Services Grid - Full Width Single Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
          {services.map((service, index) => (
            <div key={index} className="group relative rounded-3xl p-8 min-h-[450px] flex flex-col justify-between transition-all duration-700 hover:scale-[1.02] overflow-hidden shadow-2xl hover:shadow-glow"
              style={{animationDelay: `${index * 150}ms`}}>
              {/* Enhanced Premium Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-glow to-primary opacity-95"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/8 to-white/12"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10"></div>
              
              {/* Floating Premium Effects */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-white/3 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Service Badge */}
                <div className="mb-8">
                  <span className="text-white/80 text-2xl font-bold italic">{service.badge}</span>
                </div>
                
                {/* Heading */}
                <h3 className="text-3xl lg:text-4xl font-black mb-4 leading-tight text-white tracking-tight">
                  {service.title}
                </h3>
                
                {/* Subhead */}
                <p className="text-lg text-white/90 mb-8 leading-relaxed font-normal">
                  {service.subtitle}
                </p>
                
                {/* Bullets */}
                <div className="space-y-4 mb-8 flex-1">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-white text-base">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Benefit Strip */}
                <div className="mb-6">
                  <span className="text-white text-sm font-medium">{service.benefitStrip}</span>
                </div>
                {/* Premium Decorative Element */}
                <div className="mt-4">
                  <div className="h-1 w-16 bg-gradient-to-r from-white/60 to-white/20 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PipelineGenerationSectionNew;