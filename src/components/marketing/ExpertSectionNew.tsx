import ConsistentHeading from "@/components/shared/ConsistentHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ExpertSectionNew = () => {
  const services = [
    {
      badge: "Agilità",
      title: "Flessibilità operativa",
      subtitle: "Modella le attività in base alle tue esigenze, senza vincoli rigidi.",
      features: [
        "Adattamento rapido",
        "Scalabilità immediata",
        "Processi personalizzati",
        "Zero vincoli contrattuali"
      ],
      benefitStrip: "Massima flessibilità • Adattamento rapido • Zero vincoli",
      link: "/contact"
    },
    {
      badge: "Expertise",
      title: "Competenze specialistiche",
      subtitle: "Accedi a un pool di esperti sempre aggiornati.",
      features: [
        "Team specializzato",
        "Formazione continua",
        "Best practices",
        "Tecnologie avanzate"
      ],
      benefitStrip: "Esperti certificati • Competenze aggiornate • Know-how avanzato",
      link: "/contact"
    },
    {
      badge: "Crescita",
      title: "Scalabilità immediata",
      subtitle: "Adattiamo le risorse al ritmo della tua crescita.",
      features: [
        "Crescita graduale",
        "Risorse su misura",
        "Espansione rapida",
        "Controllo dei costi"
      ],
      benefitStrip: "Crescita sostenibile • Risorse ottimizzate • Controllo totale",
      link: "/contact"
    },
    {
      badge: "Trasparenza",
      title: "Costi chiari",
      subtitle: "Budget definiti e trasparenti, con ritorni dimostrabili.",
      features: [
        "Prezzi fissi",
        "ROI tracciabile",
        "Report dettagliati",
        "Performance misurabili"
      ],
      benefitStrip: "Trasparenza totale • ROI garantito • Risultati misurabili",
      link: "/contact"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="w-full px-6">
        {/* Header Section */}
        <ConsistentHeading
          badge="OUTSOURCING MARKETING"
          title="I vantaggi dell'"
          highlightedText="esternalizzazione"
          subtitle="Scegliere un team esterno significa trasformare il marketing da costo incerto a leva strategica: più flessibilità, più competenze, meno rischi."
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
                <Link to={service.link}>Richiedi consulenza</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertSectionNew;