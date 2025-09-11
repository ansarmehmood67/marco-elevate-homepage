import ConsistentHeading from "@/components/shared/ConsistentHeading";

const WhenToCallSectionNew = () => {
  const services = [
    {
      badge: "Velocità",
      title: "Venditori subito",
      subtitle: "Con noi eviti selezioni lunghe e costose: hai venditori esperti, già pronti a entrare in azienda e portare risultati.",
      features: [
        "Team selezionato e formato",
        "Operativi in 48 ore",
        "Esperienza certificata",
        "Settori specializzati"
      ],
      benefitStrip: "Attivazione rapida • Zero tempi morti • Performance immediate",
      link: "/contact"
    },
    {
      badge: "Risparmio",
      title: "Taglia le spese",
      subtitle: "Dimentica stipendi fissi, contributi e spese inutili che pesano sul bilancio. Con Sales On Demand paghi solo per le performance e trasformi un costo rigido in un investimento che genera vendite reali.",
      features: [
        "Zero costi fissi",
        "Pagamento a performance",
        "Nessun contributo",
        "ROI garantito"
      ],
      benefitStrip: "Costi variabili • Performance tracking • Budget ottimizzato",
      link: "/contact"
    },
    {
      badge: "Flessibilità",
      title: "Adatti il team",
      subtitle: "Il tuo mercato non è sempre uguale, e la tua forza vendita non deve esserlo. Con noi puoi aumentare la capacità nei periodi di picco, ridurla quando serve o mettere in pausa senza vincoli, mantenendo sempre la massima qualità.",
      features: [
        "Scalabilità istantanea",
        "Adattamento ai picchi",
        "Pausa senza penali",
        "Qualità costante"
      ],
      benefitStrip: "Massima flessibilità • Zero vincoli • Adattamento rapido",
      link: "/contact"
    },
    {
      badge: "Crescita",
      title: "Cresci davvero",
      subtitle: "Tu ti concentri sulla strategia e sulla visione del tuo business, noi ci occupiamo di portare clienti in target e nuove opportunità di fatturato. Ogni attività è tracciata, misurata e orientata a un unico obiettivo: risultati concreti.",
      features: [
        "Clienti qualificati",
        "Fatturato incrementale",
        "Reporting dettagliato",
        "Risultati misurabili"
      ],
      benefitStrip: "Crescita sostenibile • Target precisi • ROI tracciabile",
      link: "/contact"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="w-full px-6">
        {/* Header Section */}
        <ConsistentHeading
          badge="QUANDO CHIAMARCI"
          title="Le tue esigenze,"
          highlightedText="la nostra risposta"
          theme="dark"
          className="mb-16 max-w-6xl mx-auto"
        />

        {/* Services Grid - Full Width Single Row */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 w-full">
          {services.map((service, index) => (
            <div key={index} className="group relative rounded-3xl p-8 pb-10 min-h-[600px] md:min-h-[620px] lg:min-h-[660px] flex flex-col justify-between transition-all duration-700 hover:scale-[1.02] overflow-hidden shadow-2xl hover:shadow-glow"
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
                <p className="text-base lg:text-lg text-white/90 mb-6 leading-relaxed font-normal line-clamp-4">
                  {service.subtitle}
                </p>
                
                {/* Bullets */}
                <div className="space-y-3 mb-6 flex-1">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-white text-sm lg:text-base">{feature}</span>
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

export default WhenToCallSectionNew;