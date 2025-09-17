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
      <div className="lg:sticky lg:top-8 bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl border border-slate-200/50 shadow-sm">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2E8BC0]/10 rounded-full border border-[#2E8BC0]/20 mb-3">
            <Target className="w-3 h-3 text-[#2E8BC0]" />
            <span className="text-[#2E8BC0] font-medium text-xs">Combinazione vincente</span>
          </div>
          <h3 className="text-section-subtitle font-bold text-slate-900 mb-2">{title || "Accelera la crescita"}</h3>
          <p className="text-base text-slate-600">{subtitle || "Servizi scelti dal 78% dei nostri clienti"}</p>
        </div>

        <div className="space-y-4">
          {relatedServices.map((service, index) => (
            <div key={service.path} className="group" style={{ minHeight: '300px' }}>
              <ServiceCard 
                service={service} 
                index={index}
                className="h-full"
                staticDisplay={true}
              />
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-slate-200">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-[#2E8BC0]" />
              <span className="text-lg font-bold bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] bg-clip-text text-transparent">
                78%
              </span>
              <Sparkles className="w-4 h-4 text-[#2E8BC0]" />
            </div>
            <p className="text-sm text-slate-600 font-medium">
              dei nostri clienti sceglie servizi complementari per <span className="text-[#2E8BC0] font-semibold">risultati superiori</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (layout === 'cards') {
    return (
      <section className="py-16 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2E8BC0]/10 rounded-full border border-[#2E8BC0]/20 mb-6">
              <Users className="w-4 h-4 text-[#2E8BC0]" />
              <span className="text-[#2E8BC0] font-medium text-sm">Servizi complementari</span>
            </div>
            <h2 className="text-section-title font-bold text-slate-900 mb-4">
              {title || defaultTitle}
            </h2>
            <p className="text-section-subtitle text-slate-600 max-w-2xl mx-auto">
              {subtitle || defaultSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedServices.map((service, index) => (
              <ServiceCard 
                key={service.path}
                service={service} 
                index={index}
                className="h-full"
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
    <section className="py-12 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#2E8BC0]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-[#87CEEB]/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm mb-4">
            <Star className="w-4 h-4 text-[#87CEEB]" />
            <span className="text-[#87CEEB] font-medium text-sm">Combinazione vincente</span>
          </div>
          <h2 className="text-section-title font-bold text-white mb-3">
            {title || defaultTitle}
          </h2>
          <p className="text-section-subtitle text-slate-300 max-w-2xl mx-auto">
            {subtitle || defaultSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {relatedServices.map((service, index) => (
            <ServiceCard 
              key={service.path}
              service={service} 
              index={index}
              className="h-full bg-white/5"
              staticDisplay={true}
            />
          ))}
        </div>

        <div className="text-center mt-8 pt-6 border-t border-white/10">
          <div className="inline-flex items-center gap-3 mb-2">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-[#87CEEB]"></div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#87CEEB]" />
              <span className="text-2xl font-bold bg-gradient-to-r from-[#87CEEB] to-white bg-clip-text text-transparent">
                78%
              </span>
              <Sparkles className="w-5 h-5 text-[#87CEEB]" />
            </div>
            <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-[#87CEEB]"></div>
          </div>
          <p className="text-slate-300 text-base font-medium">
            dei nostri clienti sceglie servizi complementari per <span className="text-[#87CEEB] font-semibold">risultati superiori</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CrossSellRecommendations;