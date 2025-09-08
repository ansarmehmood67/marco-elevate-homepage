import {
  Users, PhoneCall, Headphones, Megaphone, TrendingUp, Youtube, Bot, UserRound,
  Workflow, Globe, Cloud, Plug, Zap, Target, Briefcase
} from "lucide-react";

export interface PremiumService {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  route: string;
  pillar: string;
  icon: any;
  accent: string;
  video: string;
  poster: string;
  badge?: string;
}

// Premium service data with rich content
export const premiumServicesData: Record<string, PremiumService> = {
  'outsourcing-salesforce': {
    id: 'outsourcing-salesforce',
    title: 'Outsourcing Salesforce',
    subtitle: 'Team vendita dedicato',
    description: 'Team di vendita dedicato per massimizzare le tue conversioni',
    features: ['Team esperto', 'Processi ottimizzati', 'ROI garantito'],
    route: '/outsourcing-salesforce',
    pillar: 'Sales On Demand',
    icon: Users,
    accent: 'blue',
    video: 'https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290356/outsourced_sales_force_page_ydama6.mp4',
    poster: 'https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290356/outsourced_sales_force_page_ydama6.jpg',
    badge: 'Più popolare'
  },
  'telemarketing-teleselling': {
    id: 'telemarketing-teleselling',
    title: 'Telemarketing & Teleselling',
    subtitle: 'Chiamate commerciali professionali',
    description: 'Chiamate commerciali professionali per generare lead qualificati',
    features: ['Chiamate qualificate', 'Script ottimizzati', 'Lead generation'],
    route: '/telemarketing-teleselling',
    pillar: 'Sales On Demand',
    icon: PhoneCall,
    accent: 'blue',
    video: 'https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290362/telemarketing_page_1_vrqa0n.mp4',
    poster: 'https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290362/telemarketing_page_1_vrqa0n.jpg'
  },
  'contact-center-inbound': {
    id: 'contact-center-inbound',
    title: 'Contact Center Inbound',
    subtitle: 'Supporto clienti professionale',
    description: 'Supporto clienti professionale e qualificazione lead inbound',
    features: ['Supporto H24', 'Lead qualification', 'Customer care'],
    route: '/contact-center-inbound',
    pillar: 'Sales On Demand',
    icon: Headphones,
    accent: 'blue',
    video: 'https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290377/inbound_contact_center_page_a8rtme.mp4',
    poster: 'https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290377/inbound_contact_center_page_a8rtme.jpg'
  },
  'outsourcing-marketing': {
    id: 'outsourcing-marketing',
    title: 'Outsourcing Marketing',
    subtitle: 'Marketing completo in outsourcing',
    description: 'Strategie di marketing complete gestite dal nostro team',
    features: ['Strategie complete', 'Gestione campagne', 'Analytics avanzate'],
    route: '/outsourcing-marketing',
    pillar: 'Sales On Demand',
    icon: Megaphone,
    accent: 'blue',
    video: 'https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290298/outsourced_markteting_page_ndawq6.mp4',
    poster: 'https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290298/outsourced_markteting_page_ndawq6.jpg'
  },
  'sales-services': {
    id: 'sales-services',
    title: 'Servizi Vendite',
    subtitle: 'Consulenza strategica vendite',
    description: 'Consulenza strategica per ottimizzare i processi di vendita',
    features: ['Analisi processi', 'Strategie vendite', 'Training team'],
    route: '/sales-services',
    pillar: 'Consulting',
    icon: Target,
    accent: 'violet',
    video: 'https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290356/outsourced_sales_force_page_ydama6.mp4',
    poster: 'https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290356/outsourced_sales_force_page_ydama6.jpg'
  },
  'marketing-services': {
    id: 'marketing-services',
    title: 'Servizi Marketing',
    subtitle: 'Strategia marketing personalizzata',
    description: 'Strategie di marketing personalizzate per la tua crescita',
    features: ['Strategia custom', 'Multi-channel', 'Performance tracking'],
    route: '/marketing-services',
    pillar: 'Consulting',
    icon: TrendingUp,
    accent: 'violet',
    video: 'https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290298/outsourced_markteting_page_ndawq6.mp4',
    poster: 'https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290298/outsourced_markteting_page_ndawq6.jpg'
  },
  'consultation-services': {
    id: 'consultation-services',
    title: 'Servizi Consulenza',
    subtitle: 'Consulenza strategica completa',
    description: 'Consulenza strategica completa per ottimizzare il business',
    features: ['Analisi complete', 'Strategie personalizzate', 'Implementazione guidata'],
    route: '/consultation-services',
    pillar: 'Consulting',
    icon: Briefcase,
    accent: 'violet',
    video: 'https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290380/ai_tools_page_uqjdsu.mp4',
    poster: 'https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290380/ai_tools_page_uqjdsu.jpg',
    badge: 'Consigliato'
  },
  'monetizza-youtube': {
    id: 'monetizza-youtube',
    title: 'Monetizza YouTube',
    subtitle: 'Trasforma i video in profitti',
    description: 'Trasforma il tuo canale YouTube in una macchina per generare lead',
    features: ['Strategia content', 'Automazione lead', 'ROI ottimizzato'],
    route: '/monetizza-youtube',
    pillar: 'AI & Automation',
    icon: Youtube,
    accent: 'green',
    video: 'https://res.cloudinary.com/dufcnrcfe/video/upload/v1755364792/20250816_2127_Marketing_Team_Strategy_Buzz_simple_compose_01k2sva0wpexqa68v9zccbyxq1_nxgujp.mp4',
    poster: 'https://res.cloudinary.com/dufcnrcfe/video/upload/v1755364792/20250816_2127_Marketing_Team_Strategy_Buzz_simple_compose_01k2sva0wpexqa68v9zccbyxq1_nxgujp.jpg'
  },
  'instant-avatar': {
    id: 'instant-avatar',
    title: 'Instant Avatar',
    subtitle: 'Avatar AI per video personali',
    description: 'Video personalizzati con avatar AI per campagne uniche',
    features: ['Avatar personalizzato', 'Video automatici', 'Engagement alto'],
    route: '/instant-avatar',
    pillar: 'AI & Automation',
    icon: UserRound,
    accent: 'green',
    video: 'https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290666/instant_avatar_page_yxlyqy.mp4',
    poster: 'https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290666/instant_avatar_page_yxlyqy.jpg'
  },
  'chatbot-ai': {
    id: 'chatbot-ai',
    title: 'Chatbot AI',
    subtitle: 'Assistenti virtuali intelligenti',
    description: 'Assistenti virtuali intelligenti per supporto clienti 24/7',
    features: ['Supporto H24', 'Lead qualification', 'Integrazione seamless'],
    route: '/chatbot-ai',
    pillar: 'AI & Automation',
    icon: Bot,
    accent: 'green',
    video: 'https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290521/chatbot_ai_page_jgsw1x.mp4',
    poster: 'https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290521/chatbot_ai_page_jgsw1x.jpg'
  },
  'automazione-ai': {
    id: 'automazione-ai',
    title: 'Automazione AI',
    subtitle: 'Processi automatizzati con AI',
    description: 'Workflow intelligenti che automatizzano marketing e vendite',
    features: ['Automazione completa', 'AI integrata', 'Efficienza massima'],
    route: '/automazione-ai',
    pillar: 'AI & Automation',
    icon: Workflow,
    accent: 'green',
    video: 'https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290567/ai_automation_page_audup1.mp4',
    poster: 'https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290567/ai_automation_page_audup1.jpg'
  },
  'web-app-development': {
    id: 'web-app-development',
    title: 'Web & App Development',
    subtitle: 'Sviluppo applicazioni su misura',
    description: 'App intelligenti e scalabili su misura per il tuo business',
    features: ['Design personalizzato', 'App cross-platform', 'Architettura API'],
    route: '/web-app-development',
    pillar: 'AI & Automation',
    icon: Globe,
    accent: 'green',
    video: 'https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290228/web_and_app_development_page_xnkfqj.mp4',
    poster: 'https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290228/web_and_app_development_page_xnkfqj.jpg'
  },
  'saas-platforms': {
    id: 'saas-platforms',
    title: 'Piattaforme SaaS',
    subtitle: 'Software as a Service personalizzato',
    description: 'Lancia il tuo software intelligente e scalabile',
    features: ['Infrastruttura scalabile', 'Sistema abbonamenti', 'Multi-utente'],
    route: '/saas-platforms',
    pillar: 'AI & Automation',
    icon: Cloud,
    accent: 'green',
    video: 'https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290535/saas_tools_page_inne6r.mp4',
    poster: 'https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290535/saas_tools_page_inne6r.jpg'
  },
  'smart-ai-tools': {
    id: 'smart-ai-tools',
    title: 'Smart AI Tools',
    subtitle: 'Strumenti AI per il business',
    description: 'Dashboard personalizzate e automazioni interne',
    features: ['Dashboard CRM', 'Automazioni interne', 'Sincronizzazione dati'],
    route: '/smart-ai-tools',
    pillar: 'AI & Automation',
    icon: Zap,
    accent: 'green',
    video: 'https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290380/ai_tools_page_uqjdsu.mp4',
    poster: 'https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290380/ai_tools_page_uqjdsu.jpg'
  },
  'ai-integration': {
    id: 'ai-integration',
    title: 'AI Integration',
    subtitle: 'Integrazione AI nei processi',
    description: 'Integra AI nei tuoi sistemi esistenti per massima efficienza',
    features: ['Integrazione CRM', 'Email AI', 'Analytics predittive'],
    route: '/ai-integration',
    pillar: 'AI & Automation',
    icon: Plug,
    accent: 'green',
    video: 'https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290499/ai_integrations_page_dwcnaj.mp4',
    poster: 'https://res.cloudinary.com/dufcnrcfe/video/upload/v1753290499/ai_integrations_page_dwcnaj.jpg'
  }
};

// Service relationship mappings (updated to use new IDs)
export const serviceRelationships: Record<string, string[]> = {
  // Sales Services
  'sales-on-demand': ['marketing-services', 'automazione-ai', 'consultation-services'],
  'telemarketing-teleselling': ['outsourcing-salesforce', 'chatbot-ai', 'marketing-services'],
  'contact-center-inbound': ['outsourcing-salesforce', 'automazione-ai', 'ai-integration'],
  'outsourcing-salesforce': ['telemarketing-teleselling', 'smart-ai-tools', 'saas-platforms'],

  // Marketing Services  
  'marketing-services': ['outsourcing-salesforce', 'monetizza-youtube', 'ai-integration'],
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
  'consultation-services': ['outsourcing-salesforce', 'marketing-services', 'automazione-ai'],
  'strategic-consulting': ['consultation-services', 'outsourcing-salesforce', 'marketing-services'],
  'audit-vendite': ['outsourcing-salesforce', 'consultation-services', 'automazione-ai'],
  'consulenza-marketing': ['marketing-services', 'consultation-services', 'monetizza-youtube'],
};

// Utility function to get premium service by ID
export const getPremiumService = (id: string): PremiumService | null => {
  return premiumServicesData[id] || null;
};

// Utility function to get related services
export const getRelatedServices = (currentService: string, maxServices = 3): PremiumService[] => {
  const relatedServiceIds = serviceRelationships[currentService] || [];
  return relatedServiceIds
    .slice(0, maxServices)
    .map(id => premiumServicesData[id])
    .filter(Boolean);
};