import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import FinalCTASection from "@/components/FinalCTASection";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Target } from "lucide-react";

const OutsourcingMarketing = () => {
  const brandLogos = [
    "/lovable-uploads/c015aef0-9ac6-47d5-8f1b-ea8aff14dd08.png",
    "/lovable-uploads/655e08e7-f709-41c5-9b01-f624d4dea2ce.png",
    "/lovable-uploads/fe2c67ca-9c86-4598-b7ce-05d1ef35dbbf.png",
    "/lovable-uploads/871bbc8b-f67d-4537-a7a2-574d06a9e919.png",
    "/lovable-uploads/d4a117b0-a098-4850-9d53-82ee30cbdb21.png",
    "/lovable-uploads/5a8470d1-8aa8-4ee0-a0c5-efbe23f61c0b.png",
    "/lovable-uploads/57e4bdda-6fe0-4184-b948-1e51ef3229c1.png",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-2 px-0 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="relative min-h-[85vh] rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 border border-blue-200/30 shadow-2xl">
            {/* Video Background */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="https://res.cloudinary.com/dufcnrcfe/video/upload/v1752359130/a14ff2cd-e917-4480-9942-acd5b5e88d41.mp4_2_iuvhrj.mp4" type="video/mp4" />
            </video>
            
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/50 to-blue-900/80" />
            
            {/* Bottom gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-900/90 via-blue-800/60 to-transparent" />
            
            {/* Content positioned at bottom left */}
            <div className="absolute bottom-12 left-12 max-w-2xl">
              <div className="mb-6 flex items-center space-x-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm">
                  <TrendingUp className="w-4 h-4 text-white" />
                  <span className="text-white font-medium text-sm">Outsourcing Marketing</span>
                </div>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8 text-white drop-shadow-2xl">
                Marketing Strategico
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-100 mb-8 font-light leading-relaxed max-w-2xl">
                Strategie di marketing complete per <span className="font-semibold text-blue-200">generare lead qualificati</span> e aumentare conversioni.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="group font-semibold px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white text-blue-900 hover:bg-blue-50 border-2 border-white/30">
                  <span className="flex items-center space-x-2">
                    <span>Pianifica strategia</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* White Intro Section */}
      <section className="bg-white py-20 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              📈 Marketing in Outsourcing:{" "}
              <span className="bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] bg-clip-text text-transparent">
                Crescita senza limiti
              </span>
            </h2>

            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Affidare le attività di marketing a un team esterno ti consente di accedere a competenze avanzate, strategie mirate e risultati misurabili, senza i costi di un reparto interno. Noi siamo il tuo reparto marketing a prestazioni.
            </p>

            <div className="flex justify-center">
              <Button className="group font-semibold px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-slate-900 text-white hover:bg-slate-800">
                <span className="flex items-center space-x-2">
                  <span>Scopri di più</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Dark CTA Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#2E8BC0]/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-[#87CEEB]/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
              <span className="text-[#87CEEB] font-medium text-sm">La nostra visione</span>
            </div>

            <blockquote className="space-y-6">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Marketing che{" "}
                <span className="bg-gradient-to-r from-[#87CEEB] to-[#2E8BC0] bg-clip-text text-transparent">
                  produce ROI
                </span>
              </h3>

              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Campagne mirate, automation intelligente e strategie data-driven per massimizzare il ritorno sull'investimento
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-start mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Benefits
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] rounded-full"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-xl shadow-premium hover:shadow-glow transition-all duration-300 hover:scale-[1.02] bg-white">
              <div className="mb-6">
                <Target className="w-12 h-12 text-[#2E8BC0] mb-4" />
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Campagne Mirate</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Strategie su misura per raggiungere il tuo pubblico ideale.
              </p>
            </div>

            <div className="glass-card p-8 rounded-xl shadow-premium hover:shadow-glow transition-all duration-300 hover:scale-[1.02] bg-white">
              <div className="mb-6">
                <TrendingUp className="w-12 h-12 text-[#2E8BC0] mb-4" />
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Marketing Automation</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Automazioni intelligenti per aumentare l'efficienza.
              </p>
            </div>

            <div className="glass-card p-8 rounded-xl shadow-premium hover:shadow-glow transition-all duration-300 hover:scale-[1.02] bg-white">
              <div className="mb-6">
                <Users className="w-12 h-12 text-[#2E8BC0] mb-4" />
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">ROI Ottimizzato</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Ogni azione è pensata per massimizzare il ritorno sull'investimento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full Background CTA Section */}
      <section 
        className="py-20 relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dufcnrcfe/image/upload/v1752430999/a14ff2cd-e917-4480-9942-acd5b5e88d41.mp4_5_fg4olu.png')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/90"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              📢 Affida il tuo marketing a chi lavora per risultati
            </h2>

            <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
              Risparmia tempo e risorse: affidati a un team di esperti focalizzato sulla crescita. Con noi, ogni euro investito porta valore.
            </p>

            <div className="flex justify-center">
              <Button className="group font-semibold px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white text-slate-900 hover:bg-slate-100">
                <span className="flex items-center space-x-2">
                  <span>🔗 Parla con un consulente</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                🔍 I vantaggi dell'esternalizzazione marketing
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] rounded-full mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-xl border border-slate-200 hover:border-[#2E8BC0]/30 transition-colors">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Flessibilità operativa</h3>
                <p className="text-slate-600">Adatta le risorse alle tue esigenze specifiche senza vincoli a lungo termine.</p>
              </div>

              <div className="p-6 rounded-xl border border-slate-200 hover:border-[#2E8BC0]/30 transition-colors">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Accesso a competenze specialistiche</h3>
                <p className="text-slate-600">Team di esperti con know-how avanzato in tutte le aree del marketing digitale.</p>
              </div>

              <div className="p-6 rounded-xl border border-slate-200 hover:border-[#2E8BC0]/30 transition-colors">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Scalabilità immediata</h3>
                <p className="text-slate-600">Aumenta o riduci le attività in base alle necessità del business.</p>
              </div>

              <div className="p-6 rounded-xl border border-slate-200 hover:border-[#2E8BC0]/30 transition-colors">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Costi chiari e prevedibili</h3>
                <p className="text-slate-600">Budget definiti senza sorprese, solo risultati misurabili.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customers Section */}
      <div className="bg-gradient-to-br from-slate-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2E8BC0]/10 rounded-full border border-[#2E8BC0]/20 mb-6">
              <Users className="w-4 h-4 text-[#2E8BC0]" />
              <span className="text-[#2E8BC0] font-medium text-sm">I nostri clienti</span>
            </div>
            <h4 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Scelti ogni giorno da più di{" "}
              <span className="text-[#2E8BC0]">500 clienti</span>
            </h4>
            <div className="w-24 h-1 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] rounded-full mx-auto"></div>
          </div>
          
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-50 via-white to-slate-50 p-8 border border-slate-200/50">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
            
            <div className="flex animate-[slide_30s_linear_infinite] items-center gap-16">
              {brandLogos.concat(brandLogos).map((logo, index) => (
                <div key={index} className="flex-shrink-0 group">
                  <div className="p-4 rounded-xl bg-white shadow-sm border border-slate-100 group-hover:shadow-md group-hover:border-[#2E8BC0]/20 transition-all duration-300">
                    <img 
                      src={logo} 
                      alt={`Brand ${index + 1}`}
                      className="h-12 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <style>{`
          @keyframes slide {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>
      </div>

      <AboutSection />
      <LeadMagnetSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default OutsourcingMarketing;