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

        {/* Services Grid - Full Width Single Row */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 w-full">
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