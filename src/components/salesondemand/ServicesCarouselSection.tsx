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
      link: "/outsourcing-salesforce",
      gradient: "from-blue-600 via-blue-700 to-blue-800",
      image: "/lovable-uploads/13f46ac7-4c9f-4d36-97bf-eba678643498.png",
      size: "large" // Featured card
    },
    {
      icon: Phone,
      title: "Telemarketing / Teleselling",
      description: "Campagne telefoniche professionali per lead generation e conversione",
      features: ["Lead qualificati", "Script personalizzati", "Report dettagliati"],
      link: "/telemarketing-teleselling",
      gradient: "from-emerald-600 via-teal-600 to-cyan-700",
      image: "/lovable-uploads/25280549-6553-430d-9dff-5462347e4238.png",
      size: "medium"
    },
    {
      icon: MessageSquare,
      title: "Contact Center Inbound",
      description: "Gestione professionale di chiamate in entrata e supporto clienti",
      features: ["Supporto multicanale", "Tempi di risposta ottimali", "Customer satisfaction"],
      link: "/contact-center-inbound",
      gradient: "from-purple-600 via-indigo-600 to-blue-700",
      image: "/lovable-uploads/323e86a5-01ec-49ee-bbae-944b976822f2.png",
      size: "compact"
    },
    {
      icon: TrendingUp,
      title: "Outsourcing Marketing",
      description: "Strategie di marketing integrate per generare lead e aumentare le conversioni",
      features: ["Campagne mirate", "Marketing automation", "ROI ottimizzato"],
      link: "/outsourcing-marketing",
      gradient: "from-orange-500 via-red-500 to-pink-600",
      image: "/lovable-uploads/38b36456-8e63-4824-a0c6-3af4d21ae30b.png",
      size: "medium"
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

        {/* Premium Asymmetric Bento Grid */}
        <div className="max-w-7xl mx-auto">
          {/* Desktop Asymmetric Layout */}
          <div className="hidden lg:grid lg:grid-cols-12 lg:grid-rows-8 gap-6 h-[800px]">
            {/* Large Feature Card - Outsourcing Salesforce */}
            <div className="col-span-7 row-span-8 group">
              <div className={`relative h-full bg-gradient-to-br ${services[0].gradient} rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-[1.02]`}>
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={services[0].image}
                    alt={services[0].title}
                    className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/40" />
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-8 right-8 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000" />
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-10">
                  <div className="space-y-6">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-4xl font-bold text-white leading-tight">
                      {services[0].title}
                    </h3>
                    
                    <p className="text-lg text-white/90 leading-relaxed">
                      {services[0].description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-3">
                      {services[0].features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3 text-white/90">
                          <div className="w-2 h-2 bg-white rounded-full" />
                          <span className="font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* White Button with Black Text */}
                    <Link to={services[0].link}>
                      <Button className="bg-white text-black hover:bg-white/95 hover:text-black font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 shadow-xl">
                        Scopri di più
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Medium Card - Telemarketing (Top Right) */}
            <div className="col-span-5 row-span-4 group">
              <div className={`relative h-full bg-gradient-to-br ${services[1].gradient} rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-[1.02]`}>
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={services[1].image}
                    alt={services[1].title}
                    className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  />
                </div>
                
                {/* Diagonal Cut Effect */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 transform rotate-45 translate-x-12 -translate-y-12" />
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-8">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white leading-tight">
                      {services[1].title}
                    </h3>
                    
                    <p className="text-white/90 leading-relaxed text-sm">
                      {services[1].description}
                    </p>
                    
                    <Link to={services[1].link}>
                      <Button className="bg-white text-black hover:bg-white/95 hover:text-black font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105">
                        Scopri di più
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Compact Card - Contact Center (Middle Right) */}
            <div className="col-span-5 row-span-2 group">
              <div className={`relative h-full bg-gradient-to-r ${services[2].gradient} rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-[1.02]`}>
                {/* Background Image Overlay */}
                <div className="absolute right-0 top-0 bottom-0 w-1/2">
                  <img
                    src={services[2].image}
                    alt={services[2].title}
                    className="w-full h-full object-cover opacity-25 group-hover:opacity-35 transition-opacity duration-500"
                  />
                </div>
                
                {/* Content */}
                <div className="relative z-10 h-full flex items-center p-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <MessageSquare className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {services[2].title}
                      </h3>
                    </div>
                    
                    <Link to={services[2].link}>
                      <Button className="bg-white text-black hover:bg-white/95 hover:text-black font-bold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 text-sm">
                        Scopri di più
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Medium Card - Marketing (Bottom Right) */}
            <div className="col-span-5 row-span-2 group">
              <div className={`relative h-full bg-gradient-to-br ${services[3].gradient} rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-[1.02]`}>
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={services[3].image}
                    alt={services[3].title}
                    className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  />
                </div>
                
                {/* Floating Corner Element */}
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-tr-full" />
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-center p-6">
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white leading-tight">
                      {services[3].title}
                    </h3>
                    
                    <p className="text-white/90 leading-relaxed text-sm">
                      {services[3].description}
                    </p>
                    
                    <Link to={services[3].link}>
                      <Button className="bg-white text-black hover:bg-white/95 hover:text-black font-bold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 text-sm">
                        Scopri di più
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Responsive Grid */}
          <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="group">
                  <div className={`relative bg-gradient-to-br ${service.gradient} p-8 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-[1.02] min-h-[400px]`}>
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-end space-y-6">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white leading-tight">
                        {service.title}
                      </h3>
                      
                      <p className="text-white/90 leading-relaxed">
                        {service.description}
                      </p>
                      
                      {/* Features */}
                      <div className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3 text-white/90 text-sm">
                            <div className="w-1.5 h-1.5 bg-white rounded-full" />
                            <span className="font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Link to={service.link}>
                        <Button className="bg-white text-black hover:bg-white/95 hover:text-black font-bold py-4 px-6 rounded-2xl transition-all duration-300 hover:scale-105 w-full">
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