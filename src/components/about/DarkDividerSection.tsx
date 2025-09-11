import { Badge } from "@/components/ui/badge";

const DarkDividerSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-black via-slate-900/90 to-black relative overflow-hidden">
      {/* Background effects with subtle stars/particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-1/3 w-1 h-1 bg-primary-glow/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-1/3 w-1.5 h-1.5 bg-primary/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/4 w-1 h-1 bg-primary-glow/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative text-center">
        <Badge className="bg-primary/20 text-primary border-primary/30 mb-8 px-6 py-3 text-base">
          Le persone dietro Sales on Demand
        </Badge>
        
        <h2 className="text-5xl lg:text-6xl font-black leading-[0.85] tracking-tight text-white mb-8">
          Incontra il
          <span className="block bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
            Management Team
          </span>
        </h2>
        
        <p className="text-2xl text-primary/90 font-medium mb-8">
          Competenze, esperienza e passione al servizio della tua crescita.
        </p>

        <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
          Il nostro team manageriale unisce background differenti in vendite, marketing, tecnologia e customer care, 
          con un obiettivo comune: trasformare strategie in risultati concreti. Grazie a un mix di visione strategica 
          ed esecuzione operativa, il management di Sales on Demand guida ogni progetto con metodo, garantendo ai 
          clienti soluzioni innovative, affidabili e orientate alla performance.
        </p>
      </div>
    </section>
  );
};

export default DarkDividerSection;