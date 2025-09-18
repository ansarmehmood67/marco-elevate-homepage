import ConsistentHeading from "@/components/shared/ConsistentHeading";
import { Database, Users } from "lucide-react";

const ProspectGenerationSectionNew = () => {
  const services = [
    {
      title: "Database avanzato, per risultati precisi",
      description: "Database avanzato con segmentazione intelligente dei prospect.",
      features: [
        "Segmentazione demografica precisa",
        "Analisi dei comportamenti d'acquisto", 
        "Verifica e aggiornamento dei contatti",
        "Profilazione avanzata per target efficaci"
      ],
      backgroundImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758220155/Advanced_database_for_precise_results_qgif3z.png"
    },
    {
      title: "Il meglio del B2B per la tua crescita",
      description: "Strumento premium per identificare prospect qualificati nel B2B.",
      features: [
        "Lead discovery mirata",
        "Filtri intelligenti per settori e ruoli",
        "Arricchimento dei dati di contatto",
        "Tecniche di social selling efficaci"
      ],
      backgroundImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758220153/The_best_of_B2B_for_your_growth_rwyqnc.png"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-primary-glow/10 rounded-full blur-2xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="mb-16 px-4 relative">
          <ConsistentHeading
            badge="Generazione Prospect"
            title="Contatti qualificati"
            highlightedText="per far crescere il tuo business"
            subtitle="Trasformiamo i dati in opportunità concrete: identifichiamo e raccogliamo contatti realmente interessati ai tuoi servizi. Usiamo strumenti avanzati come LinkedIn Sales Navigator per garantirti lead mirati e in target."
            theme="dark"
          />
        </div>

        {/* Premium Feature Cards with Background Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 hover:scale-[1.02] hover:shadow-glow">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${service.backgroundImage})` }}
                />
                
                {/* Enhanced Blue/Black Mixed Overlay for Better Text Visibility */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-primary/40 to-black/70"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/60"></div>
                <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/30 to-black/50"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/8"></div>
                
                {/* Premium floating light effects */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-white/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative h-full flex flex-col p-8 z-10">
                  {/* Premium Icon at Top */}
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                      {index === 0 ? (
                        <Database className="w-8 h-8 text-white" />
                      ) : (
                        <Users className="w-8 h-8 text-white" />
                      )}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 space-y-6 text-white">
                    {/* Bold White Heading */}
                    <h3 className="text-3xl lg:text-4xl font-black leading-tight group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
                      {service.title}
                    </h3>
                    
                    {/* White Description */}
                    <p className="text-white/95 leading-relaxed text-lg font-medium mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      {service.description}
                    </p>
                    
                    {/* White Bullet Points */}
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-white text-base drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                          <div className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0 shadow-sm"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProspectGenerationSectionNew;