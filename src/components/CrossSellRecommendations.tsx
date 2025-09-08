import { Star, Users, Target } from "lucide-react";
import { getRelatedServices } from "@/data/servicesData";
import ServiceCard from "@/components/shared/ServiceCard";

interface CrossSellRecommendationsProps {
  currentService: string;
  layout?: 'horizontal' | 'sidebar' | 'cards';
  title?: string;
  subtitle?: string;
  maxServices?: number;
}

const CrossSellRecommendations = ({ 
  currentService, 
  layout = 'horizontal',
  title,
  subtitle,
  maxServices = 3 
}: CrossSellRecommendationsProps) => {
  const relatedServices = getRelatedServices(currentService, maxServices);

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
          <h3 className="text-lg font-bold text-slate-900 mb-2">{title || "Accelera la crescita"}</h3>
          <p className="text-sm text-slate-600">{subtitle || "Servizi scelti dal 78% dei nostri clienti"}</p>
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
          <p className="text-xs text-slate-500 text-center">
            Il 78% dei nostri clienti sceglie servizi complementari per risultati superiori
          </p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {title || defaultTitle}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
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
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            {title || defaultTitle}
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
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
          <p className="text-slate-400 text-sm">
            <span className="text-[#87CEEB] font-semibold">Il 78%</span> dei clienti Sales on Demand sceglie servizi aggiuntivi per massimizzare i risultati
          </p>
        </div>
      </div>
    </section>
  );
};

export default CrossSellRecommendations;