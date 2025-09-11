import ConsistentHeading from "@/components/shared/ConsistentHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProcessSectionNew = () => {
  const services = [
    {
      badge: "Step 1",
      title: "Presa in carico",
      subtitle: "Risposta immediata e professionale ad ogni chiamata in entrata.",
      features: [
        "Risposta entro 3 squilli",
        "Accoglienza professionale",
        "Identificazione chiamante",
        "Registrazione completa"
      ],
      benefitStrip: "Velocità • Professionalità • Accuratezza",
      link: "/contact"
    },
    {
      badge: "Step 2",
      title: "Classificazione",
      subtitle: "Analisi rapida della richiesta per instradare correttamente la chiamata.",
      features: [
        "Analisi della richiesta",
        "Instradamento intelligente",
        "Priorità dinamiche",
        "Escalation automatica"
      ],
      benefitStrip: "Precisione • Efficienza • Priorità",
      link: "/contact"
    },
    {
      badge: "Step 3",
      title: "Risoluzione",
      subtitle: "Gestione diretta della richiesta o trasferimento al reparto competente.",
      features: [
        "Risoluzione diretta",
        "Trasferimento qualificato",
        "Follow-up attivo",
        "Documentazione completa"
      ],
      benefitStrip: "Risoluzione rapida • Competenza • Continuità",
      link: "/contact"
    },
    {
      badge: "Step 4",
      title: "Tracciamento",
      subtitle: "Monitoraggio completo di ogni interazione, con procedure snelle per garantire qualità e follow-up.",
      features: [
        "Monitoraggio continuo",
        "Qualità garantita",
        "Reporting dettagliato",
        "Feedback costante"
      ],
      benefitStrip: "Controllo qualità • Tracciabilità • Miglioramento continuo",
      link: "/contact"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="w-full px-6">
        {/* Header Section */}
        <ConsistentHeading
          badge="Dal primo squillo alla risoluzione"
          title="Il nostro"
          highlightedText="processo"
          subtitle="Ogni chiamata segue un flusso preciso: presa in carico immediata, analisi, risoluzione e tracciamento. Così garantiamo qualità costante e un servizio su misura, ideale per le medie imprese."
          theme="dark"
          className="mb-16 max-w-6xl mx-auto"
        />

        {/* Services Grid - 4 cards in 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="group relative rounded-3xl p-10 min-h-[680px] flex flex-col justify-between transition-all duration-700 hover:scale-[1.02] overflow-hidden shadow-2xl">
              {/* Blue gradient background - matching SalesOnDemand style */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-glow to-primary"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10"></div>
              
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
              </div>
              
              {/* CTA Button - White with black text */}
              <Button asChild className="relative z-10 w-full !bg-white !text-black hover:!bg-white/95 py-6 rounded-full text-base font-semibold transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl" style={{background: 'white', color: 'black'}}>
                <Link to={service.link}>Scopri di più</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>  
    </section>
  );
};

export default ProcessSectionNew;