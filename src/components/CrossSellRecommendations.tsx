import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  route: string;
  icon: string;
  badge?: string;
}

interface CrossSellRecommendationsProps {
  currentService: string;
  layout?: 'horizontal' | 'sidebar' | 'cards';
  title?: string;
  subtitle?: string;
  maxServices?: number;
}

// Service relationship mappings
const serviceRelationships: Record<string, string[]> = {
  // Sales Services
  'sales-on-demand': ['marketing-services', 'automazione-ai', 'consultation-services'],
  'telemarketing-teleselling': ['sales-services', 'chatbot-ai', 'marketing-services'],
  'contact-center-inbound': ['sales-services', 'automazione-ai', 'ai-integration'],
  'outsourcing-salesforce': ['sales-services', 'smart-ai-tools', 'saas-platforms'],

  // Marketing Services  
  'marketing-services': ['sales-services', 'monetizza-youtube', 'ai-integration'],
  'outsourcing-marketing': ['marketing-services', 'automazione-ai', 'consultation-services'],
  'monetizza-youtube': ['marketing-services', 'instant-avatar', 'automazione-ai'],

  // AI Services
  'ai': ['automazione-ai', 'chatbot-ai', 'instant-avatar'],
  'automazione-ai': ['ai-integration', 'smart-ai-tools', 'chatbot-ai'],
  'chatbot-ai': ['automazione-ai', 'ai-integration', 'contact-center-inbound'],
  'instant-avatar': ['monetizza-youtube', 'automazione-ai', 'marketing-services'],
  'ai-integration': ['automazione-ai', 'smart-ai-tools', 'saas-platforms'],
  'smart-ai-tools': ['ai-integration', 'saas-platforms', 'automazione-ai'],
  'web-app-development': ['saas-platforms', 'ai-integration', 'smart-ai-tools'],
  'saas-platforms': ['web-app-development', 'smart-ai-tools', 'ai-integration'],

  // Consultation Services
  'consultation-services': ['sales-services', 'marketing-services', 'automazione-ai'],
  'strategic-consulting': ['consultation-services', 'sales-services', 'marketing-services'],
  'audit-vendite': ['sales-services', 'consultation-services', 'automazione-ai'],
  'consulenza-marketing': ['marketing-services', 'consultation-services', 'monetizza-youtube'],
};

// Service definitions
const allServices: Record<string, Service> = {
  'sales-services': {
    id: 'sales-services',
    title: 'Servizi di Vendita',
    description: 'Team di vendita dedicato per massimizzare le tue conversioni',
    features: ['Team esperto', 'Processi ottimizzati', 'ROI garantito'],
    route: '/sales-services',
    icon: '📈',
    badge: 'Più popolare'
  },
  'marketing-services': {
    id: 'marketing-services',
    title: 'Servizi di Marketing',
    description: 'Strategie complete per attrarre e convertire clienti',
    features: ['Strategie complete', 'Campagne mirate', 'Analisi dettagliate'],
    route: '/marketing-services',
    icon: '🎯'
  },
  'automazione-ai': {
    id: 'automazione-ai',
    title: 'Automazione AI',
    description: 'Workflow intelligenti che automatizzano marketing e vendite',
    features: ['Automazione completa', 'AI integrata', 'Efficienza massima'],
    route: '/automazione-ai',
    icon: '🤖'
  },
  'chatbot-ai': {
    id: 'chatbot-ai',
    title: 'Chatbot AI',
    description: 'Assistenti virtuali intelligenti per supporto 24/7',
    features: ['Supporto H24', 'Lead qualification', 'Integrazione seamless'],
    route: '/chatbot-ai',
    icon: '💬'
  },
  'instant-avatar': {
    id: 'instant-avatar',
    title: 'Instant Avatar',
    description: 'Video personalizzati con avatar AI per campagne uniche',
    features: ['Avatar personalizzato', 'Video automatici', 'Engagement alto'],
    route: '/instant-avatar',
    icon: '👤'
  },
  'monetizza-youtube': {
    id: 'monetizza-youtube',
    title: 'Monetizza YouTube',
    description: 'Trasforma il tuo canale in una macchina per generare lead',
    features: ['Strategia content', 'Automazione lead', 'ROI ottimizzato'],
    route: '/monetizza-youtube',
    icon: '📺'
  },
  'consultation-services': {
    id: 'consultation-services',
    title: 'Servizi di Consulenza',
    description: 'Expertise strategica per ottimizzare i tuoi processi',
    features: ['Analisi complete', 'Strategie personalizzate', 'Implementazione guidata'],
    route: '/consultation-services',
    icon: '🎓',
    badge: 'Consigliato'
  },
  'ai-integration': {
    id: 'ai-integration',
    title: 'Integrazione AI',
    description: 'Integra AI nei tuoi sistemi esistenti per massima efficienza',
    features: ['Integrazione CRM', 'Email AI', 'Analytics predittive'],
    route: '/ai-integration',
    icon: '🔗'
  },
  'smart-ai-tools': {
    id: 'smart-ai-tools',
    title: 'Smart AI Tools',
    description: 'Dashboard personalizzate e automazioni interne',
    features: ['Dashboard CRM', 'Automazioni interne', 'Sincronizzazione dati'],
    route: '/smart-ai-tools',
    icon: '⚡'
  },
  'saas-platforms': {
    id: 'saas-platforms',
    title: 'Piattaforme SaaS',
    description: 'Lancia il tuo software intelligente e scalabile',
    features: ['Infrastruttura scalabile', 'Sistema abbonamenti', 'Multi-utente'],
    route: '/saas-platforms',
    icon: '☁️'
  },
  'web-app-development': {
    id: 'web-app-development',
    title: 'Sviluppo Web & App',
    description: 'App intelligenti e scalabili su misura per il tuo business',
    features: ['Design personalizzato', 'App cross-platform', 'Architettura API'],
    route: '/web-app-development',
    icon: '💻'
  }
};

const CrossSellRecommendations = ({ 
  currentService, 
  layout = 'horizontal',
  title,
  subtitle,
  maxServices = 3 
}: CrossSellRecommendationsProps) => {
  const relatedServiceIds = serviceRelationships[currentService] || [];
  const relatedServices = relatedServiceIds
    .slice(0, maxServices)
    .map(id => allServices[id])
    .filter(Boolean);

  if (relatedServices.length === 0) return null;

  const defaultTitle = "Massimizza i tuoi risultati";
  const defaultSubtitle = "Clienti che hanno scelto questo servizio hanno anche beneficiato di:";

  if (layout === 'sidebar') {
    return (
      <div className="lg:sticky lg:top-8 bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl border border-slate-200/50 shadow-sm">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2E8BC0]/10 rounded-full border border-[#2E8BC0]/20 mb-3">
            <Target className="w-3 h-3 text-[#2E8BC0]" />
            <span className="text-[#2E8BC0] font-medium text-xs">Servizi correlati</span>
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">{title || "Completa la tua strategia"}</h3>
          <p className="text-sm text-slate-600">{subtitle || "Servizi spesso scelti insieme"}</p>
        </div>

        <div className="space-y-4">
          {relatedServices.map((service) => (
            <div key={service.id} className="group">
              <Link to={service.route} className="block p-4 bg-white rounded-xl border border-slate-100 hover:border-[#2E8BC0]/30 hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">{service.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-slate-900 text-sm">{service.title}</h4>
                      {service.badge && (
                        <span className="text-xs bg-[#2E8BC0]/10 text-[#2E8BC0] px-2 py-0.5 rounded-full font-medium">
                          {service.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-600 line-clamp-2">{service.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-slate-200">
          <p className="text-xs text-slate-500 text-center">
            Il 73% dei nostri clienti sceglie servizi complementari
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
            {relatedServices.map((service) => (
              <div key={service.id} className="group bg-white rounded-2xl p-6 border border-slate-100 hover:border-[#2E8BC0]/30 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                    {service.badge && (
                      <span className="text-xs bg-[#2E8BC0]/10 text-[#2E8BC0] px-2 py-1 rounded-full font-medium">
                        {service.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-slate-600 mb-4">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center justify-center text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 bg-[#2E8BC0] rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button asChild className="w-full bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] hover:from-[#87CEEB] hover:to-[#2E8BC0] text-white font-semibold">
                    <Link to={service.route} className="flex items-center justify-center">
                      Scopri di più
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
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
          {relatedServices.map((service) => (
            <div key={service.id} className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#87CEEB]/30 hover:bg-white/10 transition-all duration-300">
              <div className="text-center">
                <div className="text-3xl mb-4">{service.icon}</div>
                <div className="flex items-center justify-center gap-2 mb-3">
                  <h3 className="text-lg font-bold text-white">{service.title}</h3>
                  {service.badge && (
                    <span className="text-xs bg-[#87CEEB]/20 text-[#87CEEB] px-2 py-1 rounded-full font-medium">
                      {service.badge}
                    </span>
                  )}
                </div>
                <p className="text-slate-300 text-sm mb-4">{service.description}</p>
                
                <Button asChild size="sm" className="bg-white/10 text-white hover:bg-white/20 font-semibold border border-white/20 hover:border-white/30">
                  <Link to={service.route} className="flex items-center justify-center">
                    Scopri
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 pt-6 border-t border-white/10">
          <p className="text-slate-400 text-sm">
            <span className="text-[#87CEEB] font-semibold">500+ clienti</span> hanno già scelto combinazioni di questi servizi
          </p>
        </div>
      </div>
    </section>
  );
};

export default CrossSellRecommendations;