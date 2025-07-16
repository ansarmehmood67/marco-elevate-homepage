import { Button } from "@/components/ui/button";
import { Users, Phone, MessageSquare, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesCarouselSection = () => {

  const services = [
    {
      icon: Users,
      title: "Outsourcing Salesforce",
      description: "Team di venditori specializzati che diventano il tuo reparto commerciale esterno",
      features: ["Team dedicato", "Formazione continua", "KPI monitorati"],
      link: "/outsourcing-salesforce"
    },
    {
      icon: Phone,
      title: "Telemarketing / Teleselling",
      description: "Campagne telefoniche professionali per lead generation e conversione",
      features: ["Lead qualificati", "Script personalizzati", "Report dettagliati"],
      link: "/telemarketing-teleselling"
    },
    {
      icon: MessageSquare,
      title: "Contact Center Inbound",
      description: "Gestione professionale di chiamate in entrata e supporto clienti",
      features: ["Supporto multicanale", "Tempi di risposta ottimali", "Customer satisfaction"],
      link: "/contact-center-inbound"
    },
    {
      icon: TrendingUp,
      title: "Outsourcing Marketing",
      description: "Strategie di marketing integrate per generare lead e aumentare le conversioni",
      features: ["Campagne mirate", "Marketing automation", "ROI ottimizzato"],
      link: "/outsourcing-marketing"
    }
  ];


  return (
    <section className="py-20 bg-black">
      <div className="w-full px-6">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            I nostri{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              servizi
            </span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Soluzioni complete di outsourcing per vendite e marketing. 
            Ogni servizio è progettato per integrarsi perfettamente con il tuo business.
          </p>
        </div>

        {/* Services Grid - All 4 cards visible */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="group">
                <div className="bg-white p-8 rounded-2xl border border-gray-200/50 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl group-hover:shadow-primary/10 h-full">
                  <div className="space-y-6">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{service.description}</p>
                      
                      {/* Features */}
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <Link to={service.link}>
                      <Button className="w-full mt-6 bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105">
                        Scopri di più
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesCarouselSection;