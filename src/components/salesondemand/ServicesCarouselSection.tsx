import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Users, Phone, MessageSquare, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesCarouselSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.max(1, services.length - 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.max(1, services.length - 3)) % Math.max(1, services.length - 3));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-12">
          {/* Left: Heading and Paragraph */}
          <div className="flex-1 ml-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              I nostri{" "}
              <span className="bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] bg-clip-text text-transparent">
                servizi
              </span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
              Soluzioni complete di outsourcing per vendite e marketing. 
              Ogni servizio è progettato per integrarsi perfettamente con il tuo business.
            </p>
          </div>
          
          {/* Right: Navigation Buttons */}
          <div className="flex gap-4 ml-8">
            <Button
              variant="outline"
              size="lg"
              onClick={prevSlide}
              className="p-3 rounded-full border-2 border-[#2E8BC0]/20 hover:border-[#2E8BC0] hover:bg-[#2E8BC0]/10"
            >
              <ChevronLeft className="w-5 h-5 text-[#2E8BC0]" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={nextSlide}
              className="p-3 rounded-full border-2 border-[#2E8BC0]/20 hover:border-[#2E8BC0] hover:bg-[#2E8BC0]/10"
            >
              <ChevronRight className="w-5 h-5 text-[#2E8BC0]" />
            </Button>
          </div>
        </div>

        {/* Services Carousel */}
        <div className="overflow-hidden px-4">
          <div 
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{ transform: `translateX(-${currentIndex * 22}%)` }}
          >
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="w-full md:w-1/2 lg:w-1/4 flex-shrink-0">
                  <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200/50 hover:border-[#2E8BC0]/30 transition-all duration-300 hover:shadow-lg group h-full">
                    <div className="space-y-6">
                      {/* Icon */}
                      <div className="w-16 h-16 bg-gradient-to-r from-[#2E8BC0]/10 to-[#87CEEB]/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-[#2E8BC0]" />
                      </div>

                      {/* Content */}
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{service.description}</p>
                        
                        {/* Features */}
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2 text-sm text-slate-600">
                              <div className="w-1.5 h-1.5 bg-[#2E8BC0] rounded-full"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA Button */}
                      <Link to={service.link}>
                        <Button className="w-full mt-6 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] hover:from-[#87CEEB] hover:to-[#2E8BC0] text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105">
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
      </div>
    </section>
  );
};

export default ServicesCarouselSection;