import { Badge } from "@/components/ui/badge";

const SalesMarketingTeamSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img
          src="https://res.cloudinary.com/dc1zzgsjw/image/upload/v1757550554/Untitled_design_91_jm8mo9.png"
          alt="Sales Marketing Team Background"
          className="w-full h-full object-cover"
        />
        {/* Minimal overlay for better image visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-8 py-4 rounded-full text-lg font-bold mb-8 transition-all duration-300 hover:scale-105 shadow-xl bg-white/10 text-white border border-white/30 backdrop-blur-sm">
              Reparto commerciale marketing
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-black leading-[0.85] tracking-tight text-white mb-8 drop-shadow-2xl">
              Team vendite e marketing
              <span className="block bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                in outsourcing
              </span>
            </h2>
          </div>
          
          {/* Content Grid - No background cards, direct text with shadows */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 text-left">
            {/* Sales Force Section */}
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-black text-white drop-shadow-lg">
                <span className="text-primary drop-shadow-xl">Forza commerciale che chiude.</span>
              </h3>
              <p className="text-white text-xl lg:text-2xl leading-relaxed font-medium drop-shadow-lg">
                Il reparto interno definisce playbook, pipeline e forecast; la nostra rete in outsourcing vendite si integra nel tuo funnel per generare opportunità e chiusure, con controllo qualità continuo.
              </p>
            </div>

            {/* Marketing Team Section */}
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-black text-white drop-shadow-lg">
                <span className="text-primary drop-shadow-xl">Team Marketing</span>
              </h3>
              <p className="text-white text-xl lg:text-2xl leading-relaxed font-medium drop-shadow-lg">
                <span className="font-black text-white drop-shadow-lg">Domanda qualificata, non vanity metrics.</span> Performance marketing, contenuti, CRM & nurturing, tracciamento end-to-end e dashboard. Le nostre unità di outsourcing marketing scalano esecuzione e produzione mantenendo il focus sul ROAS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesMarketingTeamSection;