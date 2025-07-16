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
        <div className="text-left mb-16 max-w-4xl ml-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            I nostri{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              servizi
            </span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
            Soluzioni complete di outsourcing per vendite e marketing. 
            Ogni servizio è progettato per integrarsi perfettamente con il tuo business.
          </p>
        </div>

        {/* Services Grid - All 4 cards visible */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="group">
                <div className="relative bg-white p-8 rounded-3xl border border-gray-200/20 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl group-hover:shadow-primary/20 h-full backdrop-blur-sm overflow-hidden">
                  {/* Premium gradient border effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                  
                  {/* Floating light effect */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  <div className="relative space-y-6 z-10">
                    {/* Premium Icon */}
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary/15 to-primary/5 rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                        <IconComponent className="w-10 h-10 text-primary" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Premium Content */}
                    <div className="space-y-5">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-base">{service.description}</p>
                      
                      {/* Premium Features */}
                      <div className="space-y-3 pt-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3 text-sm text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                            <div className="w-2 h-2 bg-gradient-to-r from-primary to-primary/60 rounded-full shadow-sm"></div>
                            <span className="font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Premium CTA Button */}
                    <Link to={service.link}>
                      <Button className="w-full mt-8 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white font-bold py-4 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-primary/25 relative overflow-hidden group/btn">
                        <span className="relative z-10">Scopri di più</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
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