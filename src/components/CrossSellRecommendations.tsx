import { Star, Users, Target, Sparkles } from "lucide-react";
import { allServices } from "@/data/servicesData";
import ServiceCard from "@/components/shared/ServiceCard";

interface CrossSellRecommendationsProps {
  currentService: string;
  layout?: 'horizontal' | 'sidebar' | 'cards';
  title?: string;
  subtitle?: string;
  maxServices?: number;
}

// Enhanced recommendation logic based on service pillars
const getIntelligentRecommendations = (currentServicePath: string, maxServices: number = 3) => {
  // Clean the path
  const cleanPath = currentServicePath.startsWith('/') ? currentServicePath.slice(1) : currentServicePath;
  
  // Find current service to determine its pillar
  const currentService = allServices.find(service => 
    service.path === `/${cleanPath}` || service.path.includes(cleanPath)
  );
  
  if (!currentService) {
    // Fallback to popular services if current service not found
    return allServices.slice(0, maxServices);
  }
  
  // Get services from the same pillar, excluding current service
  const samePillarServices = allServices
    .filter(service => 
      service.pillar === currentService.pillar && 
      service.path !== currentService.path &&
      !service.path.includes(cleanPath)
    )
    .slice(0, maxServices);
  
  // If we have enough same-pillar services, return them
  if (samePillarServices.length >= maxServices) {
    return samePillarServices;
  }
  
  // Otherwise, fill with popular services from other pillars
  const otherServices = allServices
    .filter(service => 
      service.pillar !== currentService.pillar &&
      service.path !== currentService.path
    )
    .slice(0, maxServices - samePillarServices.length);
  
  return [...samePillarServices, ...otherServices];
};

const CrossSellRecommendations = ({ 
  currentService, 
  layout = 'horizontal',
  title,
  subtitle,
  maxServices = 3 
}: CrossSellRecommendationsProps) => {
  const relatedServices = getIntelligentRecommendations(currentService, maxServices);

  if (relatedServices.length === 0) return null;

  const defaultTitle = "Accelera ulteriormente la crescita";
  const defaultSubtitle = "Il 78% dei clienti Sales on Demand aggiunge questi servizi per risultati ancora più potenti";

  if (layout === 'sidebar') {
    return (
      <div className="lg:sticky lg:top-8 bg-black p-8 rounded-3xl border border-white/10 shadow-premium backdrop-blur-sm relative overflow-hidden">
        {/* Premium Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2E8BC0]/5 via-transparent to-[#87CEEB]/5 rounded-3xl"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#2E8BC0]/10 to-transparent rounded-full blur-2xl"></div>
        
        <div className="text-center mb-8 relative z-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-[#2E8BC0]/20 to-[#87CEEB]/20 rounded-full border border-white/10 backdrop-blur-sm mb-4 shadow-glow">
            <Target className="w-4 h-4 text-[#87CEEB]" />
            <span className="text-white font-bold text-sm tracking-wide">Combinazione Vincente</span>
          </div>
          <h3 className="text-section-subtitle font-black text-white mb-3 bg-gradient-to-r from-white to-[#87CEEB] bg-clip-text text-transparent">
            {title || "Accelera la Crescita"}
          </h3>
          <p className="text-lg text-white/90 font-medium leading-relaxed">
            {subtitle || "Servizi scelti dal 78% dei nostri clienti"}
          </p>
        </div>

        <div className="space-y-5 relative z-10">
          {relatedServices.map((service, index) => (
            <div key={service.path} className="group" style={{ minHeight: '300px' }}>
              <ServiceCard 
                service={service} 
                index={index}
                className="h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500"
                staticDisplay={true}
              />
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-white/20 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-3">
              <Sparkles className="w-5 h-5 text-[#87CEEB]" />
              <span className="text-3xl font-black bg-gradient-to-r from-[#87CEEB] via-white to-[#2E8BC0] bg-clip-text text-transparent tracking-tight">
                78%
              </span>
              <Sparkles className="w-5 h-5 text-[#87CEEB]" />
            </div>
            <p className="text-base text-white/90 font-bold">
              dei nostri clienti sceglie servizi complementari per{" "}
              <span className="bg-gradient-to-r from-[#87CEEB] to-[#2E8BC0] bg-clip-text text-transparent font-black">
                risultati superiori
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (layout === 'cards') {
    return (
      <section className="py-20 bg-black relative overflow-hidden">
        {/* Premium Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#2E8BC0]/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-[#87CEEB]/8 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#2E8BC0]/5 to-transparent rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#2E8BC0]/20 to-[#87CEEB]/20 rounded-full border border-white/10 backdrop-blur-sm mb-8 shadow-glow">
              <Users className="w-5 h-5 text-[#87CEEB]" />
              <span className="text-white font-black text-base tracking-wide">Servizi Complementari</span>
            </div>
            <h2 className="text-section-title font-black text-white mb-6 bg-gradient-to-r from-white via-[#87CEEB] to-white bg-clip-text text-transparent leading-tight">
              {title || defaultTitle}
            </h2>
            <p className="text-section-subtitle text-white/90 max-w-2xl mx-auto font-medium leading-relaxed">
              {subtitle || defaultSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedServices.map((service, index) => (
              <ServiceCard 
                key={service.path}
                service={service} 
                index={index}
                className="h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 shadow-premium"
                staticDisplay={true}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Default horizontal layout
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#2E8BC0]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-[#87CEEB]/8 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-[#2E8BC0]/5 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-gradient-to-br from-[#87CEEB]/5 to-transparent rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#2E8BC0]/20 to-[#87CEEB]/20 rounded-full border border-white/10 backdrop-blur-sm mb-8 shadow-glow">
            <Star className="w-5 h-5 text-[#87CEEB]" />
            <span className="text-white font-black text-base tracking-wide">Combinazione Vincente</span>
          </div>
          <h2 className="text-section-title font-black text-white mb-6 bg-gradient-to-r from-white via-[#87CEEB] to-white bg-clip-text text-transparent leading-tight">
            {title || defaultTitle}
          </h2>
          <p className="text-section-subtitle text-white/90 max-w-2xl mx-auto font-medium leading-relaxed">
            {subtitle || defaultSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {relatedServices.map((service, index) => (
            <ServiceCard 
              key={service.path}
              service={service} 
              index={index}
              className="h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 shadow-premium"
              staticDisplay={true}
            />
          ))}
        </div>

        <div className="text-center mt-12 pt-8 border-t border-white/10">
          <div className="inline-flex items-center gap-4 mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#87CEEB]"></div>
            <div className="flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-[#87CEEB]" />
              <span className="text-4xl font-black bg-gradient-to-r from-[#87CEEB] via-white to-[#2E8BC0] bg-clip-text text-transparent tracking-tight">
                78%
              </span>
              <Sparkles className="w-6 h-6 text-[#87CEEB]" />
            </div>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#87CEEB]"></div>
          </div>
          <p className="text-white/90 text-lg font-bold">
            dei nostri clienti sceglie servizi complementari per{" "}
            <span className="bg-gradient-to-r from-[#87CEEB] to-[#2E8BC0] bg-clip-text text-transparent font-black text-xl">
              risultati superiori
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CrossSellRecommendations;