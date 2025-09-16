import { Badge } from "@/components/ui/badge";
import { Target, TrendingUp } from "lucide-react";

const SalesMarketingTeamSection = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-slate-900">
      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Centered Header Section */}
          <div className="text-center mb-16">
            <Badge className="glass-card px-8 py-4 text-lg font-bold mb-8 bg-white/5 text-white border border-white/20 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              Reparto commerciale marketing
            </Badge>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tight text-white mb-6">
              Team vendite e marketing
              <span className="block bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                in outsourcing
              </span>
            </h2>
          </div>
          
          {/* Left-Right Layout: Image | Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Background Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-square">
              <img
                src="https://res.cloudinary.com/dc1zzgsjw/image/upload/v1757550554/Untitled_design_91_jm8mo9.png"
                alt="Sales Marketing Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
            
            {/* Right Column - Content */}
            <div className="space-y-8">
              {/* Sales Force Section */}
              <div className="glass-card p-8 rounded-2xl bg-white/8 border border-white/20 backdrop-blur-xl hover:bg-white/15 transition-all duration-500 hover:scale-[1.02] hover:shadow-glow group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary/20 border border-primary/30">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-black text-white">
                    Forza commerciale
                    <span className="block text-primary">che chiude</span>
                  </h3>
                </div>
                
                <p className="text-white/90 leading-relaxed">
                  Il reparto interno definisce <span className="font-semibold text-white">playbook, pipeline e forecast</span>; 
                  la nostra rete in outsourcing vendite si integra nel tuo funnel per generare 
                  <span className="font-semibold text-primary"> opportunità e chiusure</span>, 
                  con controllo qualità continuo.
                </p>
                
                <div className="w-full h-px bg-gradient-to-r from-primary/50 via-primary to-primary/50 mt-6 group-hover:from-primary group-hover:to-primary transition-all duration-500"></div>
              </div>

              {/* Marketing Team Section */}
              <div className="glass-card p-8 rounded-2xl bg-white/8 border border-white/20 backdrop-blur-xl hover:bg-white/15 transition-all duration-500 hover:scale-[1.02] hover:shadow-glow group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary-glow/20 border border-primary-glow/30">
                    <TrendingUp className="w-6 h-6 text-primary-glow" />
                  </div>
                  <h3 className="text-2xl font-black text-white">
                    Team Marketing
                    <span className="block text-primary-glow">strategico</span>
                  </h3>
                </div>
                
                <p className="text-white/90 leading-relaxed">
                  <span className="font-semibold text-white">Domanda qualificata, non vanity metrics.</span>
                  {" "}Performance marketing, contenuti, CRM & nurturing, tracciamento end-to-end e dashboard. 
                  Le nostre unità di outsourcing marketing scalano 
                  <span className="font-semibold text-primary-glow"> esecuzione e produzione</span> 
                  {" "}mantenendo il focus sul ROAS.
                </p>
                
                <div className="w-full h-px bg-gradient-to-r from-primary-glow/50 via-primary-glow to-primary-glow/50 mt-6 group-hover:from-primary-glow group-hover:to-primary-glow transition-all duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesMarketingTeamSection;