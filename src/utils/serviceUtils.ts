// Utility functions for service management

export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[àáâäå]/g, 'a')
    .replace(/[èéêë]/g, 'e')
    .replace(/[ìíîï]/g, 'i')
    .replace(/[òóôöõ]/g, 'o')
    .replace(/[ùúûü]/g, 'u')
    .replace(/[ç]/g, 'c')
    .replace(/[ñ]/g, 'n')
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters except spaces and hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim()
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
};

export interface ExtendedServiceData {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  benefits?: string[];
  youtubeUrl: string;
  shopifyProductId: string;
  category: 'basic' | 'popular' | 'premium';
  price: string;
  originalPrice?: string;
  rating?: number;
  reviewCount?: number;
  availability?: 'available' | 'limited' | 'sold-out';
  duration?: string;
  deliverables?: string[];
  thumbnails?: string[];
}

// Enhanced service data with e-commerce fields
export const consultationServicesData: ExtendedServiceData[] = [
  {
    id: 'startup-sales-kickstart',
    slug: generateSlug('Startup Sales Kickstart – Sessione Strategica'),
    title: 'Startup Sales Kickstart – Sessione Strategica',
    subtitle: 'La consulenza strategica che ti aiuta a costruire da zero un reparto vendite snello e funzionale.',
    description: 'Hai un\'idea, un prodotto o un servizio da lanciare ma non sai da dove iniziare con le vendite? Con una sessione intensiva analizziamo insieme il tuo modello di business e creiamo un funnel pratico e replicabile per trasformare i primi contatti in clienti paganti.',
    features: [
      'In cosa consiste: 1 sessione strategica 1:1 da 120 minuti con analisi del modello di business, dei canali di acquisizione più adatti e disegno del funnel di vendita iniziale.',
      'A chi è rivolto: Startup, freelance e nuovi imprenditori che devono costruire il loro primo sistema di vendita senza rischiare errori costosi.',
      'Cosa ottieni: Report operativo con il funnel base disegnato, strumenti consigliati (CRM, tool di automazione), primo piano di acquisizione clienti.',
      'Benefici immediati: Parti con una direzione chiara, eviti sprechi di tempo e budget, imposti fin da subito un sistema replicabile e scalabile.'
    ],
    benefits: [
      'Parti con una direzione chiara e strategica',
      'Eviti sprechi di tempo e budget nelle fasi iniziali',
      'Imposti un sistema replicabile e scalabile',
      'Ottieni un vantaggio competitivo nel tuo settore'
    ],
    youtubeUrl: 'https://www.youtube.com/embed/uPhcQHDoux0?si=HS91ksdl8eUVpgOk',
    shopifyProductId: '15458055160190',
    category: 'popular',
    price: '€2.000',
    rating: 5,
    reviewCount: 67,
    availability: 'available',
    duration: '120 minuti',
    deliverables: [
      'Report operativo con funnel disegnato',
      'Lista strumenti consigliati (CRM, automazioni)',
      'Piano di acquisizione clienti personalizzato',
      'Registrazione della sessione per future consultazioni'
    ]
  },
  {
    id: 'sales-shift-strategica',
    slug: generateSlug('Sales Shift – Sessione Strategica'),
    title: 'Sales Shift – Sessione Strategica',
    subtitle: 'La consulenza strategica che trasforma un reparto vendite lento e costoso in una macchina commerciale moderna ed efficiente.',
    description: 'Hai campagne attive, un sito online, magari qualche funnel... ma i lead non arrivano (o sono quelli sbagliati)? Con due sessioni strategiche analizziamo insieme tutto il tuo ecosistema digitale per capire cosa funziona, cosa no e cosa migliorare subito. Alla fine avrai un report operativo e un piano d\'azione concreto.',
    features: [
      'In cosa consiste: 2 sessioni strategiche 1:1 da 120 minuti con assessment completo della pipeline, valutazione dei fornitori e disegno di una roadmap di trasformazione.',
      'A chi è rivolto: Aziende consolidate e PMI che vogliono aggiornare il loro sistema di vendita per restare competitive in un mercato in rapido cambiamento.',
      'Cosa ottieni: Report operativo con criticità rilevate, suggerimenti di miglioramento, strumenti consigliati e piano di transizione commerciale personalizzato.',
      'Benefici immediati: Riduci sprechi e inefficienze, migliori la performance del team, imposti un modello di vendita agile e misurabile pronto a crescere.'
    ],
    benefits: [
      'Riduci sprechi e inefficienze nel processo vendite',
      'Migliori significativamente la performance del team',
      'Imposti un modello di vendita agile e misurabile',
      'Ottieni un sistema pronto a crescere e scalare'
    ],
    youtubeUrl: 'https://www.youtube.com/embed/uPhcQHDoux0?si=HS91ksdl8eUVpgOk',
    shopifyProductId: '15458055160190',
    category: 'premium',
    price: '€3.000',
    rating: 5,
    reviewCount: 89,
    availability: 'available',
    duration: '2 sessioni da 120 minuti',
    deliverables: [
      'Assessment completo della pipeline attuale',
      'Report operativo con criticità e opportunità',
      'Roadmap di trasformazione personalizzata',
      'Piano di transizione commerciale dettagliato',
      'Supporto follow-up per 30 giorni'
    ]
  }
];

export const salesServicesData: ExtendedServiceData[] = [
  {
    id: 'direttore-vendite-sessione',
    slug: generateSlug('Direttore Vendite – Sessione Strategica'),
    title: 'Direttore Vendite – Sessione Strategica',
    subtitle: 'La leadership commerciale che guida il tuo team verso risultati concreti.',
    description: 'Hai venditori motivati ma senza una direzione chiara? Con una sessione strategica di 2 ore con un Direttore Vendite a noleggio ottieni subito chiarezza, metodo e un piano operativo che sblocca la pipeline.',
    features: [
      '<strong>In cosa consiste:</strong> 1 call strategica di 2 ore + 1 follow-up a 30 giorni per analizzare pipeline, KPI e costruire un piano operativo chiaro.',
      '<strong>A chi è rivolto:</strong> Imprenditori e aziende senza un responsabile vendite interno o con team confusi/demotivati.',
      '<strong>Cosa ottieni:</strong> Una fotografia reale della situazione commerciale e un piano pratico con attività e priorità.',
      '<strong>Benefici immediati:</strong> Addio improvvisazione: vendite più guidate, pipeline sbloccata e team motivato.'
    ],
    benefits: [
      'Eliminazione dell\'improvvisazione nelle vendite',
      'Pipeline sbloccata e più efficiente',
      'Team vendite motivato e guidato',
      'Piano operativo chiaro e actionable'
    ],
    youtubeUrl: 'https://www.youtube.com/embed/uPhcQHDoux0?si=TzGArSKPaTTz4hEe',
    shopifyProductId: '15458055160190',
    category: 'basic',
    price: '€1.600',
    rating: 5,
    reviewCount: 52,
    availability: 'available',
    duration: '2 ore + follow-up',
    deliverables: [
      'Analisi completa della pipeline attuale',
      'Piano operativo con attività e priorità',
      'Report KPI personalizzato',
      'Sessione di follow-up dopo 30 giorni'
    ]
  },
  {
    id: 'design-strategico-sistema-vendita',
    slug: generateSlug('Design Strategico del Sistema di Vendita'),
    title: 'Design Strategico del Sistema di Vendita',
    subtitle: 'Dal caos a un sistema di vendita replicabile e scalabile.',
    description: 'Hai contatti ma non clienti? Invii preventivi ma non ricevi risposte? In 3 ore di consulenza intensiva disegniamo insieme il tuo sistema di vendita completo: lead generation, gestione contatti e chiusura trattative.',
    features: [
      '<strong>In cosa consiste:</strong> Analisi delle fonti di lead, gestione contatti e pipeline per costruire un flusso ideale di conversione.',
      '<strong>A chi è rivolto:</strong> PMI, freelance e startup che hanno contatti ma non riescono a trasformarli in clienti.',
      '<strong>Cosa ottieni:</strong> Un sistema di vendita su misura, replicabile e scalabile con un piano operativo chiaro.',
      '<strong>Benefici immediati:</strong> Stop al disordine: più controllo, più conversioni, più clienti reali.'
    ],
    benefits: [
      'Sistema di vendita replicabile e scalabile',
      'Maggiore controllo sui processi commerciali',
      'Aumento significativo delle conversioni',
      'Trasformazione dei contatti in clienti paganti'
    ],
    youtubeUrl: 'https://www.youtube.com/embed/uPhcQHDoux0?si=TzGArSKPaTTz4hEe',
    shopifyProductId: '15458055160190',
    category: 'basic',
    price: '€1.400',
    rating: 5,
    reviewCount: 38,
    availability: 'available',
    duration: '3 ore',
    deliverables: [
      'Sistema di vendita completo e personalizzato',
      'Flusso di conversione ottimizzato',
      'Piano operativo per l\'implementazione',
      'Template e strumenti per la gestione contatti'
    ]
  },
  {
    id: 'audit-strategico-pitch-commerciale',
    slug: generateSlug('Audit Strategico del Pitch Commerciale — Versione Ridotta'),
    title: 'Audit Strategico del Pitch Commerciale — Versione Ridotta',
    subtitle: 'La consulenza che rende più persuasivo il tuo team.',
    description: 'Cosa raccontano i tuoi venditori e come lo raccontano? Con una sessione pratica e personalizzata analizziamo il pitch commerciale del tuo team e lo rendiamo più chiaro, persuasivo e orientato alla chiusura.',
    features: [
      '<strong>In cosa consiste:</strong> Revisione delle chiamate, creazione script personalizzato e feedback sul pitch.',
      '<strong>A chi è rivolto:</strong> Imprenditori, manager e aziende con team di vendita attivi o in crescita.',
      '<strong>Cosa ottieni:</strong> Venditori più efficaci, sicuri e con messaggi coerenti.',
      '<strong>Benefici immediati:</strong> Pitch che convertono di più e meno opportunità sprecate.'
    ],
    benefits: [
      'Venditori più efficaci e sicuri',
      'Messaggi commerciali coerenti e persuasivi',
      'Pitch con tassi di conversione più alti',
      'Riduzione significativa delle opportunità sprecate'
    ],
    youtubeUrl: 'https://www.youtube.com/embed/uPhcQHDoux0?si=TzGArSKPaTTz4hEe',
    shopifyProductId: '15458055160190',
    category: 'basic',
    price: '€800',
    rating: 5,
    reviewCount: 29,
    availability: 'available',
    duration: '90 minuti',
    deliverables: [
      'Audit completo del pitch attuale',
      'Script commerciale personalizzato',
      'Feedback dettagliato per ogni venditore',
      'Template per future presentazioni'
    ]
  }
];

export const marketingServicesData: ExtendedServiceData[] = [
  {
    id: 'direttore-marketing-sessione',
    slug: generateSlug('Direttore Marketing – Sessione Strategica'),
    title: 'Direttore Marketing – Sessione Strategica',
    subtitle: 'La consulenza strategica che trasforma i tuoi canali digitali in una macchina di lead qualificati.',
    description: 'Hai campagne attive, un sito online, magari qualche funnel..., ma i lead non arrivano (o sono quelli sbagliati)? Con due sessioni strategiche analizziamo insieme tutto il tuo ecosistema digitale per capire cosa funziona, cosa no e cosa migliorare subito. Alla fine avrai un report operativo e un piano d\'azione concreto.',
    features: [
      '<strong>In cosa consiste:</strong> 2 sessioni strategiche 1:1 (1 ora + 1 ora follow-up a 7 giorni) con analisi completa dei tuoi asset digitali (sito, funnel, campagne, email, tool di automazione).',
      '<strong>A chi è rivolto:</strong> Imprenditori, PMI, freelance e agenzie che investono in marketing ma non hanno una strategia chiara o non vedono risultati concreti.',
      '<strong>Cosa ottieni:</strong> Report operativo con criticità, suggerimenti, tool consigliati e un piano di lead generation migliorato e misurabile.',
      '<strong>Benefici immediati:</strong> Capisci cosa funziona e cosa no, eviti sprechi di tempo e budget, ottieni un piano pratico cucito su misura e migliori subito la tua strategia di acquisizione.'
    ],
    benefits: [
      'Identificazione precisa di cosa funziona e cosa no',
      'Eliminazione di sprechi di tempo e budget',
      'Piano di lead generation misurato e ottimizzato',
      'Strategia di acquisizione migliorata e personalizzata'
    ],
    youtubeUrl: 'https://www.youtube.com/embed/uPhcQHDoux0?si=AkujdTksF3U8sK1X',
    shopifyProductId: '15458055160190',
    category: 'popular',
    price: '€1.300',
    rating: 5,
    reviewCount: 74,
    availability: 'available',
    duration: '2 sessioni (1h + 1h follow-up)',
    deliverables: [
      'Analisi completa degli asset digitali',
      'Report operativo con criticità e opportunità',
      'Piano di lead generation personalizzato',
      'Lista tool consigliati per l\'automazione',
      'Strategia di acquisizione ottimizzata'
    ]
  },
  {
    id: 'comunicazione-avatar-ai',
    slug: generateSlug('Comunicazione con Avatar AI — Consulenza Strategica'),
    title: 'Comunicazione con Avatar AI — Consulenza Strategica',
    subtitle: 'Dai voce e volto digitale al tuo brand con la guida di un Direttore Marketing a Noleggio.',
    description: 'Vuoi rendere la tua comunicazione più efficace, scalabile e moderna? Con la nostra consulenza ti aiutiamo a integrare avatar AI e strumenti innovativi nei tuoi contenuti aziendali, così da migliorare la percezione del brand e rafforzare il rapporto con clienti e prospect.',
    features: [
      '<strong>In cosa consiste:</strong> call di consulenza strategica + piano operativo che spiega tutto quello che c\'è da sapere su come strutturare il tuo gemello in intelligenza artificiale, come usare le varie piattaforme ed effettuare il primo setup del tuo avatar. (Nota: i video in alta risoluzione non sono forniti).',
      '<strong>A chi è rivolto:</strong> Imprese, PMI e professionisti che vogliono distinguersi con contenuti innovativi e rendere la comunicazione aziendale più efficace e scalabile.',
      '<strong>Cosa ottieni:</strong> Linee guida complete, esempi concreti di utilizzo (presentazioni, onboarding, customer care, video istituzionali) e il supporto strategico per scegliere le piattaforme più adatte.',
      '<strong>Benefici immediati:</strong> Risparmi tempo e costi di produzione, migliori la percezione del brand e ottieni contenuti sempre coerenti e professionali.'
    ],
    benefits: [
      'Risparmio significativo su tempo e costi di produzione',
      'Miglioramento della percezione del brand',
      'Contenuti sempre coerenti e professionali',
      'Comunicazione aziendale più efficace e scalabile'
    ],
    youtubeUrl: 'https://www.youtube.com/embed/uPhcQHDoux0?si=AkujdTksF3U8sK1X',
    shopifyProductId: '15458055160190',
    category: 'basic',
    price: '€1.000',
    rating: 5,
    reviewCount: 31,
    availability: 'available',
    duration: '90 minuti',
    deliverables: [
      'Linee guida complete per l\'avatar AI',
      'Piano operativo per il setup iniziale',
      'Esempi concreti di utilizzo per diversi scenari',
      'Supporto strategico per la scelta delle piattaforme',
      'Template per presentazioni e onboarding'
    ]
  },
  {
    id: 'consulenza-monetizzazione-youtube',
    slug: generateSlug('Consulenza Avanzata per Monetizzazione YouTube'),
    title: 'Consulenza Avanzata per Monetizzazione YouTube',
    subtitle: 'Da creator che monetizza a brand che scala.',
    description: 'Vuoi portare il tuo canale YouTube alla monetizzazione ma non sai come fare il salto? In qualità di creator già monetizzante, ti metto a disposizione il metodo che ho testato e validato in un anno di crescita reale, per aiutarti a costruire un canale solido, con contenuti strategici e un percorso chiaro verso la monetizzazione.',
    features: [
      '<strong>In cosa consiste:</strong> 1 call strategica di 2 ore + report operativo con analisi del canale, ottimizzazione dei contenuti e roadmap pratica per raggiungere i requisiti di monetizzazione.',
      '<strong>A chi è rivolto:</strong> Un metodo già validato, indicazioni concrete su contenuti, SEO, automazioni e format per accelerare il percorso verso la monetizzazione.',
      '<strong>Cosa ottieni:</strong> Un metodo già validato, indicazioni concrete su contenuti, SEO, automazioni e format per accelerare il percorso verso la monetizzazione.',
      '<strong>Benefici immediati:</strong> Capisci cosa manca al tuo canale per monetizzare, ottieni una strategia testata e applicabile subito e riduci drasticamente tempi ed errori di percorso.'
    ],
    benefits: [
      'Identificazione precisa di cosa manca per la monetizzazione',
      'Strategia testata e immediatamente applicabile',
      'Riduzione drastica di tempi ed errori di percorso',
      'Metodo validato da un creator già monetizzante'
    ],
    youtubeUrl: 'https://www.youtube.com/embed/uPhcQHDoux0?si=AkujdTksF3U8sK1X',
    shopifyProductId: '15458055160190',
    category: 'basic',
    price: '€500',
    rating: 5,
    reviewCount: 26,
    availability: 'limited',
    duration: '2 ore',
    deliverables: [
      'Analisi completa del canale attuale',
      'Report operativo con ottimizzazioni',
      'Roadmap pratica verso la monetizzazione',
      'Strategia SEO per YouTube personalizzata',
      'Template per contenuti ad alto engagement'
    ]
  }
];

// Helper function to find service by slug
export const findServiceBySlug = (slug: string, serviceType: 'consultation' | 'sales' | 'marketing'): ExtendedServiceData | undefined => {
  const servicesMap = {
    consultation: consultationServicesData,
    sales: salesServicesData,
    marketing: marketingServicesData
  };

  return servicesMap[serviceType].find(service => service.slug === slug);
};

// Helper function to get related services
export const getRelatedServices = (currentServiceId: string, serviceType: 'consultation' | 'sales' | 'marketing', limit: number = 2): ExtendedServiceData[] => {
  const servicesMap = {
    consultation: consultationServicesData,
    sales: salesServicesData,
    marketing: marketingServicesData
  };

  return servicesMap[serviceType]
    .filter(service => service.id !== currentServiceId)
    .slice(0, limit);
};