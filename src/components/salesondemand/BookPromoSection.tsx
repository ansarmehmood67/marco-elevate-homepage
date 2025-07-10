
import { Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BookPromoSectionProps {
  isDark: boolean;
}

const BookPromoSection = ({ isDark }: BookPromoSectionProps) => {
  return (
    <section className={`py-32 px-0 transition-all duration-500 relative overflow-hidden ${
      isDark ? 'bg-gradient-to-br from-black via-amber-900/20 to-black' : 'bg-gradient-to-br from-white via-amber-50/50 to-white'
    }`}>
      {/* Library-inspired Background */}
      <div className="absolute inset-0">
        {/* Bookshelf pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 gap-2 h-full">
            {[...Array(60)].map((_, i) => (
              <div
                key={i}
                className={`${isDark ? 'bg-amber-400' : 'bg-amber-600'} rounded-t-sm opacity-30`}
                style={{
                  height: `${Math.random() * 60 + 40}%`,
                  marginTop: `${Math.random() * 40}%`
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Warm reading light effects */}
        <div className={`absolute top-20 right-20 w-80 h-80 ${isDark ? 'bg-gradient-to-br from-amber-500/20 to-yellow-500/20' : 'bg-gradient-to-br from-amber-400/30 to-yellow-400/30'} rounded-full blur-3xl animate-pulse`} />
        <div className={`absolute bottom-20 left-20 w-72 h-72 ${isDark ? 'bg-gradient-to-br from-orange-500/20 to-red-500/20' : 'bg-gradient-to-br from-orange-400/30 to-red-400/30'} rounded-full blur-3xl animate-pulse`} style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center px-8 py-4 rounded-full text-lg font-bold mb-8 backdrop-blur-xl shadow-2xl ${
            isDark ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : 'bg-amber-100 text-amber-700 border border-amber-200'
          } transition-all duration-300 hover:scale-105`}>
            <Star className="w-6 h-6 mr-3 animate-pulse" />
            Biblioteca di Conoscenze Esclusive
          </div>
          <h2 className={`text-6xl lg:text-8xl font-black mb-8 leading-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Vuoi andare <br />
            <span className={`bg-gradient-to-r ${isDark ? 'from-amber-400 to-orange-400' : 'from-amber-600 to-orange-600'} bg-clip-text text-transparent`}>più a fondo?</span>
          </h2>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content Side */}
            <div className="space-y-8">
              <p className={`text-3xl lg:text-4xl leading-relaxed font-light ${
                isDark ? 'text-gray-300' : 'text-slate-700'
              } mb-8`}>
                Scarica la guida completa di Marco Ferrario{' '}
                <span className={`font-bold bg-gradient-to-r ${isDark ? 'from-amber-400 to-orange-400' : 'from-amber-600 to-orange-600'} bg-clip-text text-transparent`}>
                  "Sales as a Service"
                </span>{' '}
                per padroneggiare l'arte di creare processi di vendita efficaci e ripetibili.
              </p>
              
              {/* Book features */}
              <div className="space-y-6">
                <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'} mb-6`}>
                  Cosa C'è Dentro:
                </h3>
                {[
                  { title: 'Framework Vendite Completo', desc: 'Metodologia passo-passo per costruire sistemi di vendita scalabili' },
                  { title: 'Casi di Studio Reali', desc: 'Analisi dettagliata di trasformazioni di successo' },
                  { title: 'Toolkit di Implementazione', desc: 'Template, checklist e risorse per uso immediato' },
                  { title: 'Calcoli ROI', desc: 'Modelli finanziari per prevedere e misurare il successo' }
                ].map((feature, index) => (
                  <div key={index} className={`flex items-start space-x-4 p-6 rounded-2xl ${
                    isDark ? 'bg-slate-800/50 border border-slate-700' : 'bg-white border border-gray-200'
                  } shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                    <div className={`w-12 h-12 rounded-full ${isDark ? 'bg-amber-500/20 text-amber-400' : 'bg-amber-100 text-amber-600'} flex items-center justify-center font-bold text-lg flex-shrink-0`}>
                      {index + 1}
                    </div>
                    <div>
                      <h4 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {feature.title}
                      </h4>
                      <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button className={`group px-12 py-6 text-xl rounded-2xl font-bold transition-all duration-500 hover:scale-105 ${
                isDark 
                  ? 'bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 hover:from-amber-700 hover:via-orange-700 hover:to-red-700 text-white' 
                  : 'bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 hover:from-amber-700 hover:via-orange-700 hover:to-red-700 text-white'
              } shadow-2xl hover:shadow-3xl relative overflow-hidden`}>
                <span className="relative z-10 flex items-center space-x-3">
                  <span>Scarica la Tua Copia Gratuita</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              </Button>
            </div>
            
            {/* Book Display Side */}
            <div className="relative">
              {/* 3D Book Display */}
              <div className="relative mx-auto perspective-1000" style={{ width: '320px', height: '480px' }}>
                {/* Book cover */}
                <div className={`relative w-80 h-96 mx-auto rounded-2xl shadow-2xl ${
                  isDark ? 'bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900' : 'bg-gradient-to-br from-slate-200 via-white to-gray-100'
                } group hover:scale-105 transition-all duration-500 overflow-hidden border-4 ${isDark ? 'border-amber-400/30' : 'border-amber-600/30'}`}>
                  
                  {/* Book content mockup */}
                  <div className="p-8 h-full flex flex-col justify-between">
                    <div>
                      <div className={`text-lg font-bold mb-4 ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>
                        MARCO FERRARIO
                      </div>
                      <h3 className={`text-3xl font-black mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        Sales as a<br />Service
                      </h3>
                      <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                        The Ultimate Guide to Building Scalable Sales Systems That Drive Consistent Growth
                      </p>
                    </div>
                    
                    <div className="flex justify-center">
                      <div className={`w-20 h-20 rounded-full ${isDark ? 'bg-amber-500/20 border border-amber-500/30' : 'bg-amber-100 border border-amber-200'} flex items-center justify-center`}>
                        <Star className={`w-10 h-10 ${isDark ? 'text-amber-400' : 'text-amber-600'}`} />
                      </div>
                    </div>
                  </div>
                  
                  {/* Shiny effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Book spine effect */}
                <div className={`absolute right-0 top-4 w-6 h-80 ${
                  isDark ? 'bg-gradient-to-b from-slate-700 to-slate-900' : 'bg-gradient-to-b from-gray-300 to-gray-500'
                } rounded-r-lg transform rotate-y-90 origin-left shadow-lg`} />
              </div>
              
              {/* Floating elements */}
              <div className={`absolute -top-8 -right-8 px-4 py-2 rounded-2xl text-lg font-bold ${
                isDark ? 'bg-gradient-to-r from-green-400 to-emerald-400 text-black' : 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
              } shadow-2xl transform rotate-12 animate-pulse`}>
                FREE! 📚
              </div>
              
              <div className={`absolute -bottom-4 -left-4 w-24 h-24 ${isDark ? 'bg-amber-500/20' : 'bg-amber-400/30'} rounded-full blur-2xl animate-pulse`} />
              <div className={`absolute top-1/2 -right-8 w-16 h-16 ${isDark ? 'bg-orange-500/20' : 'bg-orange-400/30'} rounded-full blur-lg animate-pulse`} style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookPromoSection;
