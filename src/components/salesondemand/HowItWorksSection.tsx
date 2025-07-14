
import { CheckCircle, Target, Users, BarChart, TrendingUp } from "lucide-react";

// Updated to match home page style

const HowItWorksSection = ({ isDark }: HowItWorksSectionProps) => {
  const phases = [
    {
      number: "01",
      title: "Analisi & Strategia Personalizzata",
      description: "Analizziamo il tuo mercato, il flusso attuale e gli obiettivi per costruire un piano di crescita personalizzato.",
      benefit: "Piano strategico allineato agli obiettivi aziendali",
      icon: Target
    },
    {
      number: "02", 
      title: "Implementazione & Coordinamento",
      description: "Gestiamo il team, generiamo lead ed eseguiamo campagne di vendita.",
      benefit: "Processo ottimizzato e team sincronizzato",
      icon: Users
    },
    {
      number: "03",
      title: "Monitoraggio & Ottimizzazione", 
      description: "Tracciamo le metriche chiave per migliorare i tassi di chiusura e garantire il ROI.",
      benefit: "Risultati tangibili e monitoraggio delle prestazioni",
      icon: BarChart
    },
    {
      number: "04",
      title: "Scalabilità",
      description: "Una volta che funziona, scaliamo. Costruiamo vendite prevedibili a lungo termine.",
      benefit: "Crescita sostenibile e flessibilità",
      icon: TrendingUp
    }
  ];

  return (
    <section className={`py-32 px-0 transition-all duration-500 relative overflow-hidden ${
      isDark ? 'bg-gradient-to-br from-black via-slate-900 to-black' : 'bg-gradient-to-br from-white via-gray-50 to-white'
    }`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Dynamic grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 gap-4 h-full">
            {[...Array(48)].map((_, i) => (
              <div
                key={i}
                className={`${isDark ? 'bg-blue-500' : 'bg-blue-600'} rounded-full opacity-20 animate-pulse`}
                style={{
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: `${2 + Math.random()}s`
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Flowing gradients */}
        <div className={`absolute top-20 left-1/4 w-96 h-96 ${isDark ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20' : 'bg-gradient-to-br from-blue-400/30 to-purple-400/30'} rounded-full blur-3xl animate-pulse`} />
        <div className={`absolute bottom-20 right-1/4 w-80 h-80 ${isDark ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20' : 'bg-gradient-to-br from-purple-400/30 to-pink-400/30'} rounded-full blur-3xl animate-pulse`} style={{ animationDelay: '3s' }} />
      </div>
      
      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <div className={`inline-flex items-center px-8 py-4 rounded-full text-lg font-bold mb-8 backdrop-blur-xl shadow-2xl ${
            isDark ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' : 'bg-purple-100 text-purple-700 border border-purple-200'
          } transition-all duration-300 hover:scale-105`}>
            <Target className="w-6 h-6 mr-3 animate-spin" style={{ animationDuration: '3s' }} />
            Our Proven 4-Phase Process
          </div>
          <h2 className={`text-6xl lg:text-8xl font-black mb-12 leading-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            How It <span className={`bg-gradient-to-r ${isDark ? 'from-blue-400 to-purple-400' : 'from-blue-600 to-purple-600'} bg-clip-text text-transparent`}>Works</span>
          </h2>
          <p className={`text-2xl lg:text-3xl ${isDark ? 'text-gray-300' : 'text-gray-700'} max-w-4xl mx-auto`}>
            A systematic approach that delivers <span className={`font-bold ${isDark ? 'text-green-400' : 'text-green-600'}`}>guaranteed results</span>
          </p>
        </div>
        
        {/* Revolutionary Timeline Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`group relative ${isEven ? 'lg:mr-8' : 'lg:ml-8 lg:mt-16'}`}>
                  {/* Phase Number Badge */}
                  <div className={`absolute -top-6 ${isEven ? '-left-6' : '-right-6'} w-16 h-16 rounded-full ${
                    isDark ? 'bg-gradient-to-br from-blue-500 to-purple-500' : 'bg-gradient-to-br from-blue-600 to-purple-600'
                  } flex items-center justify-center text-white font-black text-xl shadow-2xl group-hover:scale-110 transition-transform duration-300 z-10`}>
                    {phase.number}
                  </div>
                  
                  {/* Main Card */}
                  <div className={`relative p-10 rounded-3xl ${
                    isDark 
                      ? 'bg-gradient-to-br from-slate-800/90 via-slate-700/90 to-slate-800/90 border border-slate-600/50' 
                      : 'bg-gradient-to-br from-white via-gray-50 to-white border border-gray-200/50'
                  } backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105 group-hover:rotate-1 overflow-hidden`}>
                    
                    {/* Animated background particles */}
                    <div className="absolute inset-0 opacity-20">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className={`absolute w-2 h-2 ${isDark ? 'bg-blue-400' : 'bg-blue-600'} rounded-full animate-pulse`}
                          style={{
                            left: `${10 + i * 12}%`,
                            top: `${10 + i * 15}%`,
                            animationDelay: `${i * 0.3}s`
                          }}
                        />
                      ))}
                    </div>
                    
                    {/* Icon Section */}
                    <div className="flex items-start space-x-8 relative z-10">
                      <div className={`flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center ${
                        isDark ? 'bg-gradient-to-br from-blue-600 to-purple-600' : 'bg-gradient-to-br from-blue-100 to-purple-100'
                      } group-hover:rotate-12 transition-transform duration-500 shadow-lg`}>
                        <Icon className={`w-10 h-10 ${isDark ? 'text-white' : 'text-blue-600'} group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className={`text-3xl lg:text-4xl font-black mb-6 ${isDark ? 'text-white' : 'text-slate-900'} group-hover:text-blue-500 transition-colors duration-300`}>
                          {phase.title}
                        </h3>
                        <p className={`text-xl lg:text-2xl mb-8 ${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                          {phase.description}
                        </p>
                        
                        {/* Benefit Badge */}
                        <div className={`inline-flex items-center space-x-3 px-6 py-4 rounded-2xl ${
                          isDark ? 'bg-green-500/20 border border-green-500/30' : 'bg-green-100 border border-green-200'
                        } group-hover:scale-105 transition-transform duration-300`}>
                          <CheckCircle className={`w-6 h-6 ${isDark ? 'text-green-400' : 'text-green-600'} animate-pulse`} />
                          <span className={`font-bold text-lg ${isDark ? 'text-green-300' : 'text-green-700'}`}>
                            {phase.benefit}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className={`absolute -bottom-4 -right-4 w-20 h-20 ${isDark ? 'bg-blue-500/10' : 'bg-blue-400/20'} rounded-full blur-2xl group-hover:blur-xl transition-all duration-500`} />
                    <div className={`absolute -top-4 -left-4 w-16 h-16 ${isDark ? 'bg-purple-500/10' : 'bg-purple-400/20'} rounded-full blur-2xl group-hover:blur-xl transition-all duration-500`} />
                  </div>
                  
                  {/* Connection Line */}
                  {index < phases.length - 1 && (
                    <div className={`hidden lg:block absolute ${isEven ? 'right-0 top-1/2' : 'left-0 top-1/2'} w-16 h-1 ${
                      isDark ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-gradient-to-r from-blue-600 to-purple-600'
                    } ${isEven ? 'translate-x-full' : '-translate-x-full'} -translate-y-1/2 animate-pulse`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
