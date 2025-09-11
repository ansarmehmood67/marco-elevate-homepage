import { Badge } from "@/components/ui/badge";

const SalesMarketingTeamSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img
          src="https://res.cloudinary.com/dc1zzgsjw/image/upload/v1757550554/Untitled_design_91_jm8mo9.png"
          alt="Sales Marketing Team Background"
          className="w-full h-full object-cover"
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <Badge className="bg-white/10 text-white border-white/20 mb-8 px-6 py-3 text-base backdrop-blur-sm">
            Reparto commerciale marketing
          </Badge>
          
          <h2 className="text-5xl lg:text-6xl font-black leading-[0.85] tracking-tight text-white mb-12">
            Team vendite e marketing
            <span className="block bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              in outsourcing
            </span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left">
            {/* Sales Force Section */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                <span className="text-primary font-black">Forza commerciale che chiude.</span>
              </h3>
              <p className="text-white/90 leading-relaxed text-lg">
                Il reparto interno definisce playbook, pipeline e forecast; la nostra rete in outsourcing vendite si integra nel tuo funnel per generare opportunità e chiusure, con controllo qualità continuo.
              </p>
            </div>

            {/* Marketing Team Section */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                <span className="text-primary font-black">Team Marketing</span>
              </h3>
              <p className="text-white/90 leading-relaxed text-lg">
                <span className="font-bold text-white">Domanda qualificata, non vanity metrics.</span> Performance marketing, contenuti, CRM & nurturing, tracciamento end-to-end e dashboard. Le nostre unità di outsourcing marketing scalano esecuzione e produzione mantenendo il focus sul ROAS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesMarketingTeamSection;