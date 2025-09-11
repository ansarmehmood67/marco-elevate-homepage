import { Badge } from "@/components/ui/badge";

const TeamMembersSection = () => {
  const teamMembers = [
    {
      name: "Emanuele Cappelletti",
      role: "Direttore Vendite",
      department: "Management Team",
      photo: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1757548352/Untitled_design_82.remini-enhanced_m0usjs.jpg",
      description: "Con oltre 15 anni di esperienza nel mondo commerciale e del marketing, Emanuele Edoardo Cappelletti ha costruito la sua carriera collaborando con brand di rilievo sia nazionali che internazionali. Dopo una solida formazione in Marketing presso l'Università Cattolica del Sacro Cuore, ha sviluppato competenze avanzate in gestione vendite, sviluppo reti commerciali, strategie di marketing e comunicazione.",
      quote: "Trasformare le relazioni in risultati concreti è la mia missione quotidiana.",
      specializations: ["Gestione Vendite", "Customer Care", "Marketing Strategy", "Business Development"]
    },
    {
      name: "Eleonora Moccagatta",
      role: "Responsabile Operativo Call Center",
      department: "Operations Team",
      photo: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1757548322/Untitled_design_85_r8r25z.png",
      description: "Con una consolidata esperienza nella gestione di team commerciali e customer care, rappresenta il punto di riferimento operativo per l'organizzazione e il coordinamento delle attività interne. Specializzata in onboarding del personale, coordina quotidianamente le attività del team vendite interne, supervisionando flussi di lavoro e qualità delle interazioni.",
      quote: "L'eccellenza operativa nasce dalla cura di ogni singolo dettaglio.",
      specializations: ["Team Management", "Quality Control", "Performance Analytics", "Training & Onboarding"]
    },
    {
      name: "Cristian Maresca",
      role: "Corporate Developer & Performance Analyst",
      department: "Analytics Team",
      photo: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1757548329/Untitled_design_84_dqoyja.png",
      description: "Con una formazione in Economia e Management Internazionale e una solida esperienza nella gestione e analisi dei dati, Cristian ha sviluppato un profilo che unisce competenze tecniche, visione strategica e apertura multiculturale. Specializzato nell'elaborazione di report avanzati e nella gestione di processi amministrativi complessi.",
      quote: "I dati raccontano storie che guidano le decisioni di domani.",
      specializations: ["Data Analytics", "Power BI", "International Management", "Process Optimization"]
    },
    {
      name: "Andrea Falzin",
      role: "ADS Specialist",
      department: "Digital Marketing",
      photo: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1757549792/Untitled_design_90_rxhgjk.png",
      description: "Con una solida esperienza come ADS Specialist, Andrea è specializzato nella gestione e ottimizzazione di campagne pubblicitarie online, con l'obiettivo di massimizzare il ROI e generare risultati concreti per le aziende. La sua expertise copre le principali piattaforme di advertising, da Google Ads a Facebook Ads.",
      quote: "Ogni euro investito deve generare crescita misurabile e sostenibile.",
      specializations: ["Google Ads", "Facebook Ads", "ROI Optimization", "Campaign Management"]
    },
    {
      name: "Ansar Mehmood",
      role: "Software Engineer Full-Stack",
      department: "Development Team",
      photo: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1757548509/Untitled_design_89_tavqck.png",
      description: "Con una laurea in Information Technology e una specializzazione come Software Engineer full-stack, Ansar è un giovane talento appassionato di tecnologie digitali e innovazione. Si occupa dello sviluppo di applicazioni full-stack, soluzioni digitali basate su intelligenza artificiale e automazione dei processi aziendali.",
      quote: "L'innovazione tecnologica è il motore della crescita aziendale moderna.",
      specializations: ["Full-Stack Development", "AI Solutions", "Process Automation", "Digital Innovation"]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-black via-slate-900 to-black">
      {teamMembers.map((member, index) => (
        <section key={index} className="relative py-20 overflow-hidden">
          {/* Background effects for each section */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[80px]"></div>
            <div className="absolute top-20 right-20 w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-primary-glow/40 rounded-full animate-pulse" style={{ animationDelay: `${index * 0.5}s` }}></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image Section - Left */}
              <div className="relative order-2 lg:order-1">
                <div className="relative w-full max-w-md mx-auto">
                  {/* Glow effects around image */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary-glow/10 to-primary/20 rounded-3xl blur-2xl"></div>
                  <div className="absolute -inset-2 bg-gradient-to-br from-primary/30 to-primary-glow/30 rounded-2xl blur-xl"></div>
                  
                  {/* Main image container */}
                  <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-2 rounded-2xl border border-primary/20">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-[400px] object-cover rounded-xl shadow-2xl"
                    />
                  </div>
                  
                  {/* Professional badge overlay */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary/90 text-white border-primary px-6 py-2 text-sm font-semibold shadow-lg">
                      {member.department}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Content Section - Right */}
              <div className="order-1 lg:order-2 space-y-8">
                {/* Header */}
                <div>
                  <h3 className="text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
                    {member.name}
                  </h3>
                  <div className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent text-xl lg:text-2xl font-bold uppercase tracking-wide">
                    {member.role}
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/90 text-lg leading-relaxed">
                  {member.description}
                </p>

                {/* Quote Section */}
                <div className="bg-gradient-to-r from-primary/10 to-primary-glow/10 border-l-4 border-primary p-6 rounded-r-xl backdrop-blur-sm">
                  <blockquote className="text-white/95 text-xl italic font-medium">
                    "{member.quote}"
                  </blockquote>
                </div>

                {/* Specializations Cards */}
                <div className="grid grid-cols-2 gap-4">
                  {member.specializations.map((spec, specIndex) => (
                    <div key={specIndex} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 hover:border-primary/30">
                      <div className="text-white font-semibold text-sm">
                        {spec}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Separator line (except for last item) */}
          {index < teamMembers.length - 1 && (
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
          )}
        </section>
      ))}
    </div>
  );
};

export default TeamMembersSection;