
import { CheckCircle, Rocket, Zap, Shield } from "lucide-react";

interface ProblemSolutionSectionProps {
  isDark: boolean;
}

const ProblemSolutionSection = ({ isDark }: ProblemSolutionSectionProps) => {
  return (
    <section className={`py-32 px-0 transition-all duration-500 relative overflow-hidden ${
      isDark ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
    }`}>
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 ${isDark ? 'bg-blue-400' : 'bg-blue-600'} rounded-full animate-pulse`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        {/* Geometric background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, ${isDark ? 'white' : 'black'} 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        {/* Moving gradient orbs */}
        <div className={`absolute top-20 right-20 w-64 h-64 ${isDark ? 'bg-blue-500/10' : 'bg-blue-400/20'} rounded-full blur-3xl animate-pulse`} />
        <div className={`absolute bottom-20 left-20 w-80 h-80 ${isDark ? 'bg-purple-500/10' : 'bg-purple-400/20'} rounded-full blur-3xl animate-pulse`} style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className={`inline-flex items-center px-8 py-4 rounded-full text-lg font-bold mb-8 backdrop-blur-xl shadow-2xl ${
            isDark ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' : 'bg-blue-100 text-blue-700 border border-blue-200'
          } transition-all duration-300 hover:scale-105`}>
            <Rocket className="w-6 h-6 mr-3 animate-bounce" />
            La Soluzione Che Stavi Cercando
          </div>
          <h2 className={`text-6xl lg:text-8xl font-black mb-16 leading-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          } animate-fade-in`}>
            Perché continuare ad <span className={`${isDark ? 'text-blue-400 drop-shadow-lg' : 'text-blue-600'} italic bg-gradient-to-r ${isDark ? 'from-blue-400 to-cyan-400' : 'from-blue-600 to-cyan-600'} bg-clip-text text-transparent`}>assumere</span><br />
            quando puoi <span className={`${isDark ? 'text-purple-400 drop-shadow-lg' : 'text-purple-600'} italic bg-gradient-to-r ${isDark ? 'from-purple-400 to-pink-400' : 'from-purple-600 to-pink-600'} bg-clip-text text-transparent`}>noleggiare</span><br />
            i migliori talenti di vendita?
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="relative">
              <p className={`text-3xl lg:text-4xl leading-relaxed font-light ${
                isDark ? 'text-gray-300' : 'text-slate-700'
              } mb-8`}>
                Libera il tuo tempo e <span className={`font-bold ${isDark ? 'text-green-400' : 'text-green-600'} bg-gradient-to-r ${isDark ? 'from-green-400 to-emerald-400' : 'from-green-600 to-emerald-600'} bg-clip-text text-transparent`}>aumenta le tue vendite</span> noleggiando venditori esperti, già formati e pronti a lavorare per te.
              </p>
              <div className={`absolute -left-4 top-0 w-1 h-full ${isDark ? 'bg-blue-400' : 'bg-blue-600'} rounded-full animate-pulse`} />
            </div>
            
            <p className={`text-2xl leading-relaxed ${
              isDark ? 'text-gray-400' : 'text-slate-600'
            }`}>
              Dimentica lo stress del reclutamento e attiva la tua forza vendite <span className={`font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>istantaneamente</span>.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-12">
              <div className={`group p-8 rounded-3xl ${
                isDark ? 'bg-gradient-to-br from-slate-800/80 to-slate-700/80 border border-slate-600' : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200'
              } shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 backdrop-blur-sm`}>
                <div className={`text-5xl font-black mb-4 ${isDark ? 'text-green-400' : 'text-green-600'} group-hover:scale-110 transition-transform duration-300`}>
                  0
                </div>
                <div className={`text-2xl font-bold mb-2 ${isDark ? 'text-green-300' : 'text-green-700'}`}>
                  Giorni
                </div>
                <div className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Tempo di Setup
                </div>
              </div>
              <div className={`group p-8 rounded-3xl ${
                isDark ? 'bg-gradient-to-br from-slate-800/80 to-slate-700/80 border border-slate-600' : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200'
              } shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 backdrop-blur-sm`}>
                <div className={`text-5xl font-black mb-4 ${isDark ? 'text-blue-400' : 'text-blue-600'} group-hover:scale-110 transition-transform duration-300`}>
                  100<span className="text-2xl">%</span>
                </div>
                <div className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Pronto all'Uso
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* 3D Comparison Card */}
            <div className={`group p-10 rounded-3xl ${
              isDark ? 'bg-gradient-to-br from-slate-800/90 via-blue-900/50 to-purple-900/50 border border-white/20' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50 border border-blue-200/50'
            } backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105 relative overflow-hidden`}>
              
              {/* Animated background particles */}
              <div className="absolute inset-0 opacity-30">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className={`absolute w-1 h-1 ${isDark ? 'bg-white' : 'bg-blue-400'} rounded-full animate-pulse`}
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${10 + i * 20}%`,
                      animationDelay: `${i * 0.5}s`
                    }}
                  />
                ))}
              </div>
              
              <div className="space-y-8 relative z-10">
                <div className="flex items-start space-x-6">
                  <div className={`p-4 rounded-2xl ${isDark ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-red-100 text-red-600 border border-red-200'} animate-bounce`} style={{ animationDuration: '2s' }}>
                    <span className="text-3xl">❌</span>
                  </div>
                  <div className="flex-1">
                    <h4 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>Assunzione Tradizionale</h4>
                    <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Mesi di reclutamento, costi di formazione, risultati incerti
                    </p>
                    <div className="flex space-x-2 mt-4">
                      <span className={`px-3 py-1 rounded-full text-sm ${isDark ? 'bg-red-500/20 text-red-300' : 'bg-red-100 text-red-600'}`}>
                        Lento
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm ${isDark ? 'bg-red-500/20 text-red-300' : 'bg-red-100 text-red-600'}`}>
                        Costoso
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm ${isDark ? 'bg-red-500/20 text-red-300' : 'bg-red-100 text-red-600'}`}>
                        Rischioso
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className={`border-l-4 border-dashed ${isDark ? 'border-gray-500' : 'border-gray-400'} ml-8 h-12 animate-pulse`} />
                
                <div className="flex items-start space-x-6">
                  <div className={`p-4 rounded-2xl ${isDark ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-green-100 text-green-600 border border-green-200'} animate-bounce`} style={{ animationDuration: '2s', animationDelay: '0.5s' }}>
                    <span className="text-3xl">✅</span>
                  </div>
                  <div className="flex-1">
                    <h4 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>Sales On Demand</h4>
                    <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Attivazione istantanea, risultati comprovati, soluzione scalabile
                    </p>
                    <div className="flex space-x-2 mt-4">
                      <span className={`px-3 py-1 rounded-full text-sm ${isDark ? 'bg-green-500/20 text-green-300' : 'bg-green-100 text-green-600'}`}>
                        Istantaneo
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm ${isDark ? 'bg-green-500/20 text-green-300' : 'bg-green-100 text-green-600'}`}>
                        Conveniente
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm ${isDark ? 'bg-green-500/20 text-green-300' : 'bg-green-100 text-green-600'}`}>
                        Provato
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Floating Badge */}
            <div className={`absolute -top-6 -right-6 px-6 py-3 rounded-2xl text-lg font-black ${
              isDark ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-black' : 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white'
            } shadow-2xl transform rotate-12 animate-pulse hover:rotate-6 hover:scale-110 transition-all duration-300`}>
              Smart Choice! 🚀
            </div>
            
            {/* Additional floating elements */}
            <div className={`absolute -bottom-4 -left-4 w-16 h-16 ${isDark ? 'bg-blue-500/20' : 'bg-blue-400/30'} rounded-full blur-xl animate-pulse`} />
            <div className={`absolute top-1/2 -right-8 w-12 h-12 ${isDark ? 'bg-purple-500/20' : 'bg-purple-400/30'} rounded-full blur-lg animate-pulse`} style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
