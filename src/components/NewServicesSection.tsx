import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NewServicesSection = () => {
  return (
    <section className="relative bg-black overflow-hidden">
      <div className="container mx-auto px-6 py-24 relative z-10">
        {/* Header Section - Left Aligned */}
        <div className="text-left mb-20 max-w-4xl pl-6">
          <div className="text-sm uppercase tracking-[0.3em] text-primary font-bold mb-4">
            AUTOMAZIONE STRATEGICA
          </div>
          <h2 className="text-5xl lg:text-7xl font-black leading-[0.85] mb-8">
            <span className="text-white">I NOSTRI</span>
            <br />
            <span className="text-primary">SERVIZI</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed font-light">
            Esternalizza vendite e marketing, ricevi consulenza strategica e automatizza con l'AI
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Sales on Demand Card - Brand Color */}
          <div className="group bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 h-[580px] flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] relative overflow-hidden shadow-xl">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-white rounded-full" />
              </div>
              
              <h3 className="text-3xl font-black mb-4 leading-tight text-white">
                Sales on Demand
              </h3>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Esternalizza vendite e marketing con un servizio completo chiavi in mano.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="bg-white/10 backdrop-blur-sm text-sm font-bold uppercase tracking-wide rounded-xl px-4 py-3 border border-white/20">
                  <span className="text-white">● OUTSOURCING DELLE VENDITE E DEL MARKETING</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm text-sm font-bold uppercase tracking-wide rounded-xl px-4 py-3 border border-white/20">
                  <span className="text-white">● LEAD GENERATION E NURTURING</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm text-sm font-bold uppercase tracking-wide rounded-xl px-4 py-3 border border-white/20">
                  <span className="text-white">● TELEMARKETING E FOLLOW-UP AUTOMATICI</span>
                </div>
              </div>
            </div>
            
            <Button asChild className="w-full bg-white text-black hover:bg-white/90 py-4 rounded-xl text-base font-black uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] shadow-lg">
              <Link to="/sales-on-demand">SCOPRI DI PIÙ</Link>
            </Button>
          </div>

          {/* Consulenza Strategica Card - Dark Gray */}
          <div className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 h-[580px] flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] relative overflow-hidden shadow-xl">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-white rounded-full" />
              </div>
              
              <h3 className="text-3xl font-black mb-4 leading-tight text-white">
                Consulenza<br />
                Strategica
              </h3>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Processi di management per vendite e marketing 100% personalizzati.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="bg-white/10 backdrop-blur-sm text-sm font-bold uppercase tracking-wide rounded-xl px-4 py-3 border border-white/20">
                  <span className="text-white">● DIRETTORE VENDITE ON DEMAND</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm text-sm font-bold uppercase tracking-wide rounded-xl px-4 py-3 border border-white/20">
                  <span className="text-white">● DIRETTORE MARKETING ON DEMAND</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm text-sm font-bold uppercase tracking-wide rounded-xl px-4 py-3 border border-white/20">
                  <span className="text-white">● STRATEGIA PERSONALIZZATA IN 30 GIORNI</span>
                </div>
              </div>
            </div>
            
            <Button asChild className="w-full bg-white text-black hover:bg-white/90 py-4 rounded-xl text-base font-black uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] shadow-lg">
              <Link to="/consulenza-strategica">SCOPRI DI PIÙ</Link>
            </Button>
          </div>

          {/* Automazioni AI Card - Green */}
          <div className="group bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl p-8 h-[580px] flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] relative overflow-hidden shadow-xl">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-white rounded-full" />
              </div>
              
              <h3 className="text-3xl font-black mb-4 leading-tight text-white">
                Automazioni AI
              </h3>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Intelligenza artificiale al servizio delle tue comunicazioni.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="bg-white/10 backdrop-blur-sm text-sm font-bold uppercase tracking-wide rounded-xl px-4 py-3 border border-white/20">
                  <span className="text-white">● CHATBOT AI PER SITI E MESSAGGISTICA</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm text-sm font-bold uppercase tracking-wide rounded-xl px-4 py-3 border border-white/20">
                  <span className="text-white">● INSTANT AVATAR PER VIDEO PERSONALIZZATI</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm text-sm font-bold uppercase tracking-wide rounded-xl px-4 py-3 border border-white/20">
                  <span className="text-white">● AUTOMAZIONI MARKETING CON IA</span>
                </div>
              </div>
            </div>
            
            <Button asChild className="w-full bg-white text-black hover:bg-white/90 py-4 rounded-xl text-base font-black uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] shadow-lg">
              <Link to="/ai">SCOPRI DI PIÙ</Link>
            </Button>
          </div>
        </div>

        {/* Bottom Section - CTA on White Card */}
        <div className="text-center mt-24">
          <div className="bg-white rounded-3xl p-12 max-w-4xl mx-auto shadow-xl">
            <p className="text-3xl lg:text-4xl text-black font-light mb-3 leading-tight">
              Tutto in outsourcing, tutto su misura.
            </p>
            <p className="text-3xl lg:text-4xl text-primary font-bold mb-12 leading-tight">
              Zero sprechi, solo risultati.
            </p>
            
            <Button className="bg-primary hover:bg-primary/90 text-white px-16 py-6 rounded-full text-xl font-black uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-lg">
              Scopri di più
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewServicesSection;