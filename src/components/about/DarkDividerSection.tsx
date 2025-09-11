import { Badge } from "@/components/ui/badge";

const DarkDividerSection = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-black via-slate-900 to-black relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated particles */}
        <div className="absolute top-20 left-1/4 w-3 h-3 bg-primary/40 rounded-full animate-pulse shadow-lg shadow-primary/30"></div>
        <div className="absolute top-32 right-1/3 w-2 h-2 bg-primary-glow/50 rounded-full animate-pulse shadow-md shadow-primary-glow/40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-1/3 w-2.5 h-2.5 bg-primary/30 rounded-full animate-pulse shadow-lg shadow-primary/20" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/4 w-2 h-2 bg-primary-glow/40 rounded-full animate-pulse shadow-md shadow-primary-glow/30" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Enhanced glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/10 via-primary/5 to-transparent rounded-full blur-[100px]"></div>
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-radial from-primary-glow/8 to-transparent rounded-full blur-[60px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-gradient-radial from-primary/6 to-transparent rounded-full blur-[50px]"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative text-center">
        <div className="inline-flex items-center px-8 py-4 rounded-full text-lg font-bold mb-12 transition-all duration-300 hover:scale-105 shadow-xl shadow-primary/20 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 text-white border border-primary/30 backdrop-blur-sm">
          Le persone dietro Sales on Demand
        </div>
        
        <h2 className="text-6xl lg:text-8xl font-black leading-[0.8] tracking-tight text-white mb-12">
          Incontra il
          <span className="block bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent drop-shadow-2xl">
            Management Team
          </span>
        </h2>
        
        <p className="text-2xl lg:text-3xl text-primary font-bold mb-10 drop-shadow-lg">
          Competenze, esperienza e passione al servizio della tua crescita.
        </p>

        <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
          Il nostro team manageriale unisce background differenti in vendite, marketing, tecnologia e customer care, 
          con un obiettivo comune: <span className="text-primary font-semibold">trasformare strategie in risultati concreti</span>. 
          Grazie a un mix di visione strategica ed esecuzione operativa, il management di Sales on Demand guida ogni progetto 
          con metodo, garantendo ai clienti soluzioni innovative, affidabili e orientate alla performance.
        </p>
      </div>
    </section>
  );
};

export default DarkDividerSection;