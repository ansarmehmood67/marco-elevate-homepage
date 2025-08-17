import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Target, Brain, TrendingUp, Check } from "lucide-react";

const NewServicesSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#2E8BC0]/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-[#87CEEB]/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-green-500/10 to-transparent rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center mb-24">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#2E8BC0]/10 to-[#87CEEB]/10 rounded-full border border-[#2E8BC0]/20 backdrop-blur-sm mb-8">
            <Sparkles className="w-4 h-4 text-[#2E8BC0]" />
            <span className="text-[#2E8BC0] font-semibold text-sm uppercase tracking-wide">Soluzioni per la tua crescita</span>
          </div>

          <h2 className="text-5xl lg:text-7xl font-black leading-[0.9] mb-8">
            <span className="text-white">I NOSTRI</span>
            <br />
            <span className="bg-gradient-to-r from-[#2E8BC0] via-[#87CEEB] to-[#2E8BC0] bg-clip-text text-transparent">
              SERVIZI
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            Trasformiamo il tuo business con soluzioni complete di{" "}
            <span className="text-[#2E8BC0] font-semibold">outsourcing strategico</span> e{" "}
            <span className="text-[#87CEEB] font-semibold">automazione AI</span>
          </p>
        </div>

        {/* Enhanced Services Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-24">
          {/* Sales on Demand Card - Enhanced */}
          <div className="group relative bg-gradient-to-br from-[#2E8BC0] via-[#2E8BC0]/90 to-[#87CEEB] rounded-3xl p-8 h-[620px] flex flex-col justify-between transition-all duration-500 hover:scale-[1.05] hover:rotate-1 overflow-hidden shadow-2xl hover:shadow-[#2E8BC0]/20">
            {/* Floating Elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-10 left-4 w-16 h-16 bg-white/5 rounded-full blur-xl animate-pulse delay-1000"></div>
            
            <div className="relative z-10">
              {/* Enhanced Icon */}
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/30 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-black mb-4 leading-tight text-white">
                Sales on Demand
              </h3>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Esternalizza vendite e marketing con un servizio completo chiavi in mano
              </p>
              
              <div className="space-y-3 mb-8">
                {['Outsourcing vendite & marketing', 'Lead generation e nurturing', 'Telemarketing automatizzato'].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20 hover:bg-white/20 transition-colors duration-300">
                    <Check className="w-4 h-4 text-white flex-shrink-0" />
                    <span className="text-white text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Button asChild className="w-full bg-white text-[#2E8BC0] hover:bg-white/90 py-4 rounded-xl text-base font-black uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] shadow-lg group-hover:shadow-xl">
              <Link to="/sales-on-demand" className="flex items-center justify-center gap-2">
                SCOPRI DI PIÙ
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>

          {/* Consulenza Strategica Card - Enhanced */}
          <div className="group relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-3xl p-8 h-[620px] flex flex-col justify-between transition-all duration-500 hover:scale-[1.05] hover:rotate-1 overflow-hidden shadow-2xl hover:shadow-slate-500/20">
            {/* Floating Elements */}
            <div className="absolute top-6 right-6 w-24 h-24 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl animate-pulse delay-500"></div>
            <div className="absolute bottom-8 left-6 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-xl animate-pulse delay-1500"></div>
            
            <div className="relative z-10">
              {/* Enhanced Icon */}
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/30 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-black mb-4 leading-tight text-white">
                Consulenza<br />
                Strategica
              </h3>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Processi di management per vendite e marketing 100% personalizzati
              </p>
              
              <div className="space-y-3 mb-8">
                {['Direttore vendite on demand', 'Direttore marketing on demand', 'Strategia personalizzata'].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20 hover:bg-white/20 transition-colors duration-300">
                    <Check className="w-4 h-4 text-white flex-shrink-0" />
                    <span className="text-white text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Button asChild className="w-full bg-white text-slate-800 hover:bg-white/90 py-4 rounded-xl text-base font-black uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] shadow-lg group-hover:shadow-xl">
              <Link to="/consulenza-strategica" className="flex items-center justify-center gap-2">
                SCOPRI DI PIÙ
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>

          {/* Automazioni AI Card - Enhanced */}
          <div className="group relative bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 rounded-3xl p-8 h-[620px] flex flex-col justify-between transition-all duration-500 hover:scale-[1.05] hover:rotate-1 overflow-hidden shadow-2xl hover:shadow-emerald-500/20">
            {/* Floating Elements */}
            <div className="absolute top-8 right-8 w-28 h-28 bg-white/10 rounded-full blur-xl animate-pulse delay-700"></div>
            <div className="absolute bottom-12 left-8 w-18 h-18 bg-white/5 rounded-full blur-xl animate-pulse delay-2000"></div>
            
            <div className="relative z-10">
              {/* Enhanced Icon */}
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/30 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-black mb-4 leading-tight text-white">
                Automazioni AI
              </h3>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Intelligenza artificiale al servizio delle tue comunicazioni
              </p>
              
              <div className="space-y-3 mb-8">
                {['Chatbot AI avanzati', 'Instant Avatar video', 'Marketing automation'].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20 hover:bg-white/20 transition-colors duration-300">
                    <Check className="w-4 h-4 text-white flex-shrink-0" />
                    <span className="text-white text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Button asChild className="w-full bg-white text-emerald-600 hover:bg-white/90 py-4 rounded-xl text-base font-black uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] shadow-lg group-hover:shadow-xl">
              <Link to="/ai" className="flex items-center justify-center gap-2">
                SCOPRI DI PIÙ
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Enhanced Bottom Section - Premium CTA */}
        <div className="text-center">
          <div className="relative bg-gradient-to-br from-white via-slate-50 to-white rounded-3xl p-12 lg:p-16 max-w-5xl mx-auto shadow-2xl border border-slate-200/50 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-[#2E8BC0] via-transparent to-transparent"></div>
              <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,_var(--tw-gradient-stops))] from-[#87CEEB] via-transparent to-transparent"></div>
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2E8BC0]/10 rounded-full border border-[#2E8BC0]/20 mb-8">
                <Sparkles className="w-4 h-4 text-[#2E8BC0]" />
                <span className="text-[#2E8BC0] font-medium text-sm">La nostra promessa</span>
              </div>

              <h3 className="text-3xl lg:text-5xl text-slate-900 font-light mb-4 leading-tight">
                Tutto in outsourcing,{" "}
                <span className="font-black bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] bg-clip-text text-transparent">
                  tutto su misura
                </span>
              </h3>
              
              <p className="text-2xl lg:text-3xl text-slate-600 font-medium mb-12 leading-tight">
                Zero sprechi, solo{" "}
                <span className="text-[#2E8BC0] font-bold">risultati misurabili</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button className="bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] hover:from-[#87CEEB] hover:to-[#2E8BC0] text-white px-12 py-6 rounded-full text-lg font-black uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  <span className="flex items-center gap-3">
                    Inizia Ora
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </Button>
                
                <Button variant="outline" className="border-2 border-[#2E8BC0] text-[#2E8BC0] hover:bg-[#2E8BC0]/10 px-12 py-6 rounded-full text-lg font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105">
                  Consulenza Gratuita
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-[#2E8BC0] rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-2 h-2 bg-[#87CEEB] rounded-full opacity-40 animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-20 w-4 h-4 bg-emerald-500 rounded-full opacity-20 animate-pulse delay-2000"></div>
    </section>
  );
};

export default NewServicesSection;