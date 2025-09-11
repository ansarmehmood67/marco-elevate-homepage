import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServicesCarouselSection = () => {

  const services = [
    {
      badge: "Sales Team",
      title: "Outsourcing Salesforce",
      subtitle: "Team di venditori specializzati che diventano il tuo reparto commerciale esterno",
      features: [
        "Team dedicato di venditori esperti",
        "Formazione continua e aggiornamento",
        "KPI monitorati e report mensili"
      ],
      benefitStrip: "Team pronto • Vendite immediate • Costi controllati",
      link: "/outsourcing-salesforce"
    },
    {
      badge: "Telemarketing",
      title: "Telemarketing / Teleselling",
      subtitle: "Campagne telefoniche professionali per lead generation e conversione",
      features: [
        "Lead qualificati con approccio consulenziale",
        "Script personalizzati per ogni settore",
        "Report dettagliati e analisi performance"
      ],
      benefitStrip: "Più appuntamenti • Lead caldi • ROI misurabile",
      link: "/telemarketing-teleselling"
    },
    {
      badge: "Customer Care",
      title: "Contact Center Inbound",
      subtitle: "Gestione professionale di chiamate in entrata e supporto clienti",
      features: [
        "Supporto multicanale 24/7",
        "Tempi di risposta ottimali garantiti",
        "Customer satisfaction monitorata"
      ],
      benefitStrip: "Servizio continuo • Clienti soddisfatti • Costi ridotti",
      link: "/contact-center-inbound"
    },
    {
      badge: "Digital Marketing",
      title: "Outsourcing Marketing",
      subtitle: "Strategie di marketing integrate per generare lead e aumentare le conversioni",
      features: [
        "Campagne mirate sui canali giusti",
        "Marketing automation e nurturing",
        "ROI ottimizzato e trasparente"
      ],
      benefitStrip: "Più lead • Conversioni alte • Crescita costante",
      link: "/outsourcing-marketing"
    }
  ];


  return (
    <section className="py-20 bg-black">
      <div className="w-full px-6">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-6xl mx-auto">
          <div className="text-sm uppercase tracking-[0.3em] text-primary font-bold mb-4">
            SOLUZIONI INTEGRATE
          </div>
          <h2 className="text-5xl lg:text-7xl font-black leading-[0.8] tracking-tight text-white mb-10">
            <span className="inline-block transform transition-transform duration-500 hover:scale-105">
              I nostri{" "}
            </span>
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent inline-block transform transition-transform duration-500 hover:scale-110">
              servizi
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Soluzioni complete di outsourcing per vendite e marketing. 
            Ogni servizio è progettato per integrarsi perfettamente con il tuo business.
          </p>
        </div>

        {/* Services Grid - All 4 cards in one row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="group relative rounded-3xl p-10 min-h-[680px] flex flex-col justify-between transition-all duration-700 hover:scale-[1.02] overflow-hidden shadow-2xl">
              {/* Blue gradient background - matching home page first card */}
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

export default ServicesCarouselSection;