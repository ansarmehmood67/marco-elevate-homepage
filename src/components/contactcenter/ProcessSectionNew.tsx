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

        {/* Services Grid - Full Width Single Row */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 w-full">
          {services.map((service, index) => (
            <div key={index} className="group relative rounded-3xl p-8 min-h-[450px] flex flex-col justify-between transition-all duration-700 hover:scale-[1.02] overflow-hidden shadow-2xl hover:shadow-glow"
              style={{animationDelay: `${index * 150}ms`}}>
              {/* Enhanced Premium Background */}
              <div className="absolute inset-0 bg-primary"></div>
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
              </div>
              
              {/* CTA Button - White with black text */}
              
            </div>
          ))}
        </div>
      </div>  
    </section>
  );
};

export default ProcessSectionNew;