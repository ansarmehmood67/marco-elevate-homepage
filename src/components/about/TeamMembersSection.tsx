import { Badge } from "@/components/ui/badge";

const TeamMembersSection = () => {
  const teamMembers = [
    {
      name: "Emanuele Cappelletti",
      role: "Direttore Vendite",
      department: "Management Team",
      photo: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1757548352/Untitled_design_82.remini-enhanced_m0usjs.jpg",
      description: "Con oltre 15 anni di esperienza nel mondo commerciale e del marketing, Emanuele Edoardo Cappelletti ha costruito la sua carriera collaborando con brand di rilievo sia nazionali che internazionali. Dopo una solida formazione in Marketing presso l'Università Cattolica del Sacro Cuore, ha sviluppato competenze avanzate in gestione vendite, sviluppo reti commerciali, strategie di marketing e comunicazione. La sua expertise si estende dalla creazione di piani commerciali strategici alla gestione di team multidisciplinari, sempre con focus sull'ottimizzazione delle performance e sulla massimizzazione del ROI. Ha guidato con successo numerosi progetti di espansione commerciale, sviluppando metodologie innovative per l'acquisizione clienti e la retention a lungo termine.",
      quote: "Trasformare le relazioni in risultati concreti è la mia missione quotidiana.",
      specializations: ["Gestione Vendite", "Customer Care", "Marketing Strategy", "Business Development"]
    },
    {
      name: "Eleonora Moccagatta",
      role: "Responsabile Operativo Call Center",
      department: "Operations Team",
      photo: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1757548322/Untitled_design_85_r8r25z.png",
      description: "Con una consolidata esperienza nella gestione di team commerciali e customer care, Eleonora rappresenta il punto di riferimento operativo per l'organizzazione e il coordinamento delle attività interne. Specializzata in onboarding del personale e ottimizzazione dei processi, coordina quotidianamente le attività del team vendite interne, supervisionando flussi di lavoro e qualità delle interazioni. La sua capacità di bilanciare efficienza operativa e qualità del servizio ha permesso di implementare sistemi di monitoraggio avanzati e protocolli di training che garantiscono standard elevati in ogni interazione cliente. Gestisce con competenza sia gli aspetti tecnici che quelli umani del customer care, assicurando che ogni membro del team sia formato e motivato a raggiungere gli obiettivi aziendali.",
      quote: "L'eccellenza operativa nasce dalla cura di ogni singolo dettaglio.",
      specializations: ["Team Management", "Quality Control", "Performance Analytics", "Training & Onboarding"]
    },
    {
      name: "Cristian Maresca",
      role: "Corporate Developer & Performance Analyst",
      department: "Analytics Team",
      photo: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1757548329/Untitled_design_84_dqoyja.png",
      description: "Con una formazione in Economia e Management Internazionale e una solida esperienza nella gestione e analisi dei dati, Cristian ha sviluppato un profilo che unisce competenze tecniche, visione strategica e apertura multiculturale. Specializzato nell'elaborazione di report avanzati e nella gestione di processi amministrativi complessi, è il responsabile dell'analisi delle performance aziendali e dello sviluppo di dashboard interattive per il monitoraggio KPI. La sua expertise in Power BI e strumenti di business intelligence permette di trasformare dati grezzi in insight strategici, supportando il management nelle decisioni operative e strategiche. Coordina progetti di ottimizzazione dei processi interni, identificando inefficienze e implementando soluzioni data-driven per migliorare la produttività aziendale.",
      quote: "I dati raccontano storie che guidano le decisioni di domani.",
      specializations: ["Data Analytics", "Power BI", "International Management", "Process Optimization"]
    },
    {
      name: "Andrea Falzin",
      role: "ADS Specialist",
      department: "Digital Marketing",
      photo: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1757549792/Untitled_design_90_rxhgjk.png",
      description: "Con una solida esperienza come ADS Specialist, Andrea è specializzato nella gestione e ottimizzazione di campagne pubblicitarie online, con l'obiettivo di massimizzare il ROI e generare risultati concreti per le aziende. La sua expertise copre le principali piattaforme di advertising, da Google Ads a Facebook Ads, LinkedIn Ads e programmatic advertising. Si occupa dell'ideazione, implementazione e ottimizzazione di strategie pubblicitarie multi-canale, analizzando costantemente metriche di performance per garantire il massimo ritorno sull'investimento. La sua capacità di interpretare dati complessi e trasformarli in strategie vincenti lo rende un elemento chiave per il successo delle campagne digitali dei clienti, sempre con un approccio data-driven e orientato ai risultati.",
      quote: "Ogni euro investito deve generare crescita misurabile e sostenibile.",
      specializations: ["Google Ads", "Facebook Ads", "ROI Optimization", "Campaign Management"]
    },
    {
      name: "Ansar Mehmood",
      role: "Software Engineer Full-Stack",
      department: "Development Team",
      photo: "https://res.cloudinary.com/dufcnrcfe/image/upload/v1757590826/Untitled_design_94_hd3zak.png",
      description: "Con una laurea in Information Technology e una specializzazione come Software Engineer full-stack, Ansar è un giovane talento appassionato di tecnologie digitali e innovazione. Si occupa dello sviluppo di applicazioni full-stack, soluzioni digitali basate su intelligenza artificiale e automazione dei processi aziendali. La sua expertise tecnica spazia dalle tecnologie frontend moderne (React, Vue.js, Angular) ai framework backend più avanzati (Node.js, Python, Java), database relazionali e NoSQL, fino all'implementazione di soluzioni cloud scalabili. Specializzato nell'integrazione di AI e machine learning nelle applicazioni business, sviluppa chatbot intelligenti, sistemi di automazione e dashboard analitiche che ottimizzano i processi operativi e migliorano l'esperienza utente.",
      quote: "L'innovazione tecnologica è il motore della crescita aziendale moderna.",
      specializations: ["Full-Stack Development", "AI Solutions", "Process Automation", "Digital Innovation"]
    }
  ];

  return (
    <div className="relative bg-gradient-to-br from-black via-slate-900 to-black overflow-hidden">
      {/* Global floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-3 h-3 bg-primary/20 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-primary-glow/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 right-10 w-2.5 h-2.5 bg-primary-glow/25 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      {teamMembers.map((member, index) => (
        <section key={index} className="relative py-24 overflow-hidden group">
          {/* Multi-layered background effects */}
          <div className="absolute inset-0">
            {/* Primary glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial from-primary/8 via-primary-glow/4 to-transparent rounded-full blur-3xl group-hover:scale-110 transition-transform duration-1000"></div>
            {/* Secondary accent */}
            <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-conic from-primary/5 via-primary-glow/3 to-primary/5 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>
            {/* Dynamic particles for this section */}
            <div className="absolute top-16 left-16 w-1 h-1 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: `${index * 0.7}s` }}></div>
            <div className="absolute bottom-24 right-24 w-1.5 h-1.5 bg-primary-glow/50 rounded-full animate-pulse" style={{ animationDelay: `${index * 0.9}s` }}></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              {/* Content Section - Left */}
              <div className="order-2 lg:order-1 space-y-10 animate-fade-in" style={{ animationDelay: `${index * 0.3}s` }}>
                {/* Header with enhanced typography */}
                <div className="space-y-6">
                  <h3 className="text-5xl lg:text-7xl font-black text-white leading-none mb-6 tracking-tight group-hover:text-primary-glow/90 transition-colors duration-500">
                    {member.name}
                  </h3>
                  <div className="relative">
                    <div className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent text-xl lg:text-3xl font-bold uppercase tracking-wider leading-relaxed">
                      {member.role}
                    </div>
                    <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-primary to-primary-glow rounded-full"></div>
                  </div>
                </div>

                {/* Enhanced Description */}
                <div className="relative">
                  <p className="text-white/95 text-lg lg:text-xl leading-relaxed font-light tracking-wide">
                    {member.description}
                  </p>
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary/60 via-primary-glow/40 to-transparent rounded-full"></div>
                </div>

                {/* Animated accent element */}
                <div className="flex items-center space-x-4 pt-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="text-primary-glow font-semibold tracking-wide">Team Excellence</div>
                </div>
              </div>

              {/* Enhanced Image Section - Right */}
              <div className="relative order-1 lg:order-2 space-y-10 animate-fade-in" style={{ animationDelay: `${index * 0.5}s` }}>
                {/* Premium image container with 3D effects */}
                <div className="relative w-full max-w-lg mx-auto group/image">
                  {/* Multiple layered glow effects */}
                  <div className="absolute -inset-8 bg-gradient-conic from-primary/30 via-primary-glow/20 to-primary/30 rounded-full blur-3xl opacity-70 group-hover/image:opacity-100 group-hover/image:scale-110 transition-all duration-700"></div>
                  <div className="absolute -inset-6 bg-gradient-radial from-primary/40 via-primary-glow/25 to-transparent rounded-3xl blur-2xl group-hover/image:blur-xl transition-all duration-500"></div>
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary/35 via-primary-glow/25 to-primary/35 rounded-2xl blur-xl group-hover/image:scale-105 transition-transform duration-500"></div>
                  
                  {/* Glass morphism container */}
                  <div className="relative backdrop-blur-xl bg-white/5 p-3 rounded-3xl border border-white/10 shadow-2xl group-hover/image:border-primary/30 transition-all duration-500 hover:shadow-primary/20">
                    {/* Inner gradient border */}
                    <div className="relative bg-gradient-to-br from-slate-800/80 via-slate-700/60 to-slate-900/80 p-1.5 rounded-2xl border border-primary/20 group-hover/image:border-primary/40 transition-all duration-500">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-[450px] object-cover rounded-xl shadow-2xl group-hover/image:scale-[1.02] group-hover/image:shadow-primary/30 transition-all duration-700"
                      />
                    </div>
                    
                    {/* Floating particles around image */}
                    <div className="absolute -top-2 -right-2 w-3 h-3 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
                    <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-primary-glow/70 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                  
                  {/* Enhanced professional badge */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 group-hover/image:translate-y-1 transition-transform duration-300">
                    <Badge className="bg-gradient-to-r from-primary via-primary-glow to-primary text-white border-0 px-8 py-3 text-sm font-bold shadow-2xl shadow-primary/40 backdrop-blur-sm">
                      {member.department}
                    </Badge>
                  </div>
                </div>

                {/* Premium Quote Section */}
                <div className="relative group/quote">
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-2xl blur-lg group-hover/quote:blur-xl group-hover/quote:scale-105 transition-all duration-500"></div>
                  <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-white/10 border border-white/20 p-8 rounded-2xl shadow-xl group-hover/quote:border-primary/40 transition-all duration-500">
                    {/* Quote marks */}
                    <div className="absolute -top-4 -left-2 text-6xl text-primary/60 font-black leading-none">"</div>
                    <div className="absolute -bottom-8 -right-2 text-6xl text-primary-glow/60 font-black leading-none rotate-180">"</div>
                    
                    <blockquote className="text-white/95 text-xl lg:text-2xl italic font-medium leading-relaxed tracking-wide text-center px-4">
                      {member.quote}
                    </blockquote>
                    
                    {/* Decorative line */}
                    <div className="mt-6 flex justify-center">
                      <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-primary-glow rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Premium Specializations Grid */}
                <div className="grid grid-cols-2 gap-5">
                  {member.specializations.map((spec, specIndex) => (
                    <div 
                      key={specIndex} 
                      className="group/spec relative overflow-hidden"
                      style={{ animationDelay: `${specIndex * 0.1}s` }}
                    >
                      {/* Glow effect */}
                      <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-primary-glow/30 rounded-xl blur-md opacity-0 group-hover/spec:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Glass card */}
                      <div className="relative backdrop-blur-md bg-white/8 border border-white/15 rounded-xl p-5 hover:bg-white/12 transition-all duration-300 hover:border-primary/40 group-hover/spec:scale-105 group-hover/spec:shadow-lg group-hover/spec:shadow-primary/20">
                        {/* Icon placeholder */}
                        <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center mb-3 shadow-lg">
                          <div className="w-4 h-4 bg-white/90 rounded-sm"></div>
                        </div>
                        
                        <div className="text-white font-bold text-sm leading-tight tracking-wide">
                          {spec}
                        </div>
                        
                        {/* Skill level indicator */}
                        <div className="mt-3 w-full h-1 bg-white/20 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-primary to-primary-glow rounded-full w-4/5 shadow-sm"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced separator with animated gradient */}
          {index < teamMembers.length - 1 && (
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-glow/30 to-transparent animate-pulse"></div>
            </div>
          )}
        </section>
      ))}
    </div>
  );
};

export default TeamMembersSection;