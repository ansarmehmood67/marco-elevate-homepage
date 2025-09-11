import { Card, CardContent } from "@/components/ui/card";

const TeamMembersSection = () => {
  const teamMembers = [
    {
      name: "Emanuele Cappelletti",
      role: "Direttore Vendite",
      photo: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1757548352/Untitled_design_82.remini-enhanced_m0usjs.jpg",
      description: "Con oltre 15 anni di esperienza nel mondo commerciale e del marketing, Emanuele Edoardo Cappelletti ha costruito la sua carriera collaborando con brand di rilievo sia nazionali che internazionali. Dopo una solida formazione in Marketing presso l'Università Cattolica del Sacro Cuore, ha sviluppato competenze avanzate in: • Gestione vendite e distribuzione • Sviluppo reti commerciali e customer care • Strategie di marketing e comunicazione • Promozione e posizionamento prodotti Dal 2018 è parte di Sales on Demand, dove supporta aziende di diversi settori nella crescita del proprio business, grazie a un approccio sempre orientato ai risultati e alla costruzione di relazioni durature. Appassionato di dinamiche di mercato e processi di vendita, Emanuele unisce visione strategica e attitudine pratica, diventando un punto di riferimento per i clienti che cercano professionalità, affidabilità e concretezza."
    },
    {
      name: "Eleonora Moccagatta",
      role: "Responsabile operativo call center",
      photo: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1757548322/Untitled_design_85_r8r25z.png",
      description: "Con una consolidata esperienza nella gestione di team commerciali e customer care, rappresenta il punto di riferimento operativo per l'organizzazione e il coordinamento delle attività interne. Specializzata in onboarding del personale, si occupa di formare e integrare rapidamente i nuovi membri del reparto, garantendo processi chiari e un ambiente di lavoro produttivo. Coordina quotidianamente le attività del team vendite interne, supervisionando flussi di lavoro, qualità delle interazioni e rispetto delle procedure. La sua missione è trasformare piani e dati in azioni concrete: monitora costantemente metriche di performance e KPI, intervenendo con precisione per ottimizzare i risultati e mantenere alti gli standard aziendali. Grazie a una combinazione di leadership, capacità analitica e attenzione al dettaglio, si assicura ogni giorno che ogni interazione con i clienti si traduca in efficienza, affidabilità e crescita misurabile."
    },
    {
      name: "Cristian Maresca",
      role: "CORPORATE DEVELOPER & PERFORMANCE ANALYST",
      photo: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1757548329/Untitled_design_84_dqoyja.png",
      description: "Con una formazione in Economia e Management Internazionale e una solida esperienza nella gestione e analisi dei dati, Cristian Maresca ha sviluppato un profilo che unisce competenze tecniche, visione strategica e apertura multiculturale. Specializzato nell'elaborazione di report avanzati e nella gestione di processi amministrativi complessi, utilizza con padronanza strumenti come Excel (avanzato, con Power Query e Power Pivot) e Power BI, trasformando i dati in insight concreti a supporto delle decisioni aziendali. Preciso, organizzato e orientato al problem solving, mette le sue capacità analitiche al servizio dell'ottimizzazione dei processi e della crescita aziendale. Poliglotta in italiano, inglese e russo, ha maturato esperienze internazionali in Corea del Sud, Kazakistan, Georgia e Romania, arricchendo il proprio background con una forte sensibilità interculturale. Il suo contributo non si limita alla pratica aziendale: ha infatti partecipato alla redazione di pubblicazioni scientifiche su riviste accademiche di rilievo, consolidando ulteriormente la sua autorevolezza professionale."
    },
    {
      name: "Andrea Falzin",
      role: "ADS Specialist",
      photo: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1757549792/Untitled_design_90_rxhgjk.png",
      description: "Con una solida esperienza come ADS Specialist, Andrea Falzin è specializzato nella gestione e ottimizzazione di campagne pubblicitarie online, con l'obiettivo di massimizzare il ROI e generare risultati concreti per le aziende. La sua expertise copre le principali piattaforme di advertising, da Google Ads a Facebook Ads, fino ad altre reti digitali, sfruttando al massimo le potenzialità di ciascun canale. Grazie a una profonda conoscenza delle dinamiche del marketing digitale, Andrea cura ogni fase della campagna: dalla segmentazione del pubblico alla definizione del budget, dalla creazione di annunci performanti all'analisi dei dati per misurare e migliorare costantemente le performance. Attento ai dettagli e orientato ai numeri, unisce competenze analitiche e creatività strategica per sviluppare annunci capaci di generare conversioni, traffico qualificato e reale coinvolgimento del target. Con il suo approccio metodico e orientato ai risultati, Andrea rappresenta una risorsa chiave per trasformare gli investimenti pubblicitari in crescita tangibile e misurabile."
    },
    {
      name: "Ansar Mehmood",
      role: "Software Engineer specializzato in sviluppo full-stack, soluzioni digitali basate su intelligenza artificiale e automazione dei processi aziendali.",
      photo: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1757548509/Untitled_design_89_tavqck.png",
      description: "Con una laurea in Information Technology e una specializzazione come Software Engineer full-stack, Ansar Mehmood è un giovane talento appassionato di tecnologie digitali e innovazione. In Sales on Demand si occupa dello sviluppo di applicazioni full-stack, di soluzioni digitali basate su intelligenza artificiale e di strumenti per l'automazione dei processi aziendali, contribuendo a trasformare le idee in prodotti concreti che generano valore per i clienti. La sua attività non si limita all'esecuzione tecnica: Ansar è costantemente alla ricerca di nuove tecnologie e metodologie, con l'obiettivo di portare innovazione continua e migliorare l'efficienza delle soluzioni implementate. Preciso, creativo e orientato al risultato, rappresenta una risorsa fondamentale per costruire sistemi digitali moderni e scalabili."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {teamMembers.map((member, index) => (
            <Card key={index} className="glass-card group hover:shadow-glow transition-all duration-500 hover:scale-[1.02] border border-slate-200/50 hover:border-primary/20 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Image */}
                  <div className="flex-shrink-0">
                    <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto sm:mx-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="relative w-full h-full object-cover rounded-xl border-2 border-white/50 group-hover:border-primary/30 transition-all duration-300 shadow-lg"
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-4">
                      {member.role}
                    </p>
                    <p className="text-slate-700 leading-relaxed text-sm group-hover:text-slate-800 transition-colors duration-300">
                      {member.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembersSection;