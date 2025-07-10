
import { Shield } from "lucide-react";

interface WhyChooseSectionProps {
  isDark: boolean;
}

const WhyChooseSection = ({ isDark }: WhyChooseSectionProps) => {
  const whyCards = [
    {
      title: "Converti il costo in servizio",
      description: "Cancella in qualsiasi momento, alte prestazioni garantite"
    },
    {
      title: "Sistema tutto-in-uno",
      description: "Generazione lead + chiusura con esperti"
    },
    {
      title: "Replicabile e scalabile",
      description: "Costruito per crescere con te"
    }
  ];

  return (
    <section className={`py-32 px-0 transition-all duration-500 relative overflow-hidden ${
      isDark ? 'bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900' : 'bg-gradient-to-br from-gray-50 via-blue-50/50 to-gray-50'
    }`}>
      {/* Sophisticated Background */}
      <div className="absolute inset-0">
        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <pattern id="hexagons" x="0" y="0" width="50" height="43.4" patternUnits="userSpaceOnUse">
                <polygon points="25,0 50,14.43 50,28.87 25,43.3 0,28.87 0,14.43" fill={isDark ? 'white' : 'black'} fillOpacity="0.1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)" />
          </svg>
        </div>
        
        {/* Animated gradient orbs */}
        <div className={`absolute top-32 right-20 w-72 h-72 ${isDark ? 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20' : 'bg-gradient-to-br from-blue-400/30 to-cyan-400/30'} rounded-full blur-3xl animate-pulse`} />
        <div className={`absolute bottom-32 left-20 w-64 h-64 ${isDark ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20' : 'bg-gradient-to-br from-purple-400/30 to-pink-400/30'} rounded-full blur-3xl animate-pulse`} style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className={`inline-flex items-center px-8 py-4 rounded-full text-lg font-bold mb-8 backdrop-blur-xl shadow-2xl ${
            isDark ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'bg-cyan-100 text-cyan-700 border border-cyan-200'
          } transition-all duration-300 hover:scale-105`}>
            <Shield className="w-6 h-6 mr-3 animate-pulse" />
            Unmatched Advantages
          </div>
          <h2 className={`text-6xl lg:text-8xl font-black mb-12 leading-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Why Choose <br />
            <span className={`bg-gradient-to-r ${isDark ? 'from-cyan-400 via-blue-400 to-purple-400' : 'from-cyan-600 via-blue-600 to-purple-600'} bg-clip-text text-transparent`}>
              Sales On Demand
            </span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {whyCards.map((card, index) => (
            <div key={index} className="group relative">
              {/* Floating number badge */}
              <div className={`absolute -top-6 -left-6 w-16 h-16 rounded-full ${
                isDark ? 'bg-gradient-to-br from-cyan-500 to-blue-500' : 'bg-gradient-to-br from-cyan-600 to-blue-600'
              } flex items-center justify-center text-white font-black text-xl shadow-2xl group-hover:scale-110 transition-transform duration-300 z-10`}>
                {index + 1}
              </div>
              
              {/* Main card with premium styling */}
              <div className={`relative p-12 rounded-3xl ${
                isDark 
                  ? 'bg-gradient-to-br from-slate-800/90 via-blue-900/30 to-slate-800/90 border border-slate-600/50' 
                  : 'bg-gradient-to-br from-white via-blue-50/50 to-white border border-gray-200/50'
              } backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105 group-hover:-rotate-1 text-center overflow-hidden`}>
                
                {/* Animated particles background */}
                <div className="absolute inset-0 opacity-30">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-1 h-1 ${isDark ? 'bg-cyan-400' : 'bg-blue-600'} rounded-full animate-pulse`}
                      style={{
                        left: `${15 + i * 15}%`,
                        top: `${20 + i * 20}%`,
                        animationDelay: `${i * 0.4}s`
                      }}
                    />
                  ))}
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className={`text-3xl lg:text-4xl font-black mb-8 ${isDark ? 'text-white' : 'text-slate-900'} group-hover:text-blue-500 transition-colors duration-300`}>
                    {card.title}
                  </h3>
                  <p className={`text-xl lg:text-2xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {card.description}
                  </p>
                  
                  {/* Decorative line */}
                  <div className={`w-20 h-1 ${isDark ? 'bg-gradient-to-r from-cyan-400 to-blue-400' : 'bg-gradient-to-r from-cyan-600 to-blue-600'} mx-auto mt-8 rounded-full group-hover:w-32 transition-all duration-500`} />
                </div>
                
                {/* Floating decorative elements */}
                <div className={`absolute -bottom-4 -right-4 w-24 h-24 ${isDark ? 'bg-cyan-500/10' : 'bg-blue-400/20'} rounded-full blur-2xl group-hover:blur-xl transition-all duration-500`} />
                <div className={`absolute -top-4 -left-4 w-20 h-20 ${isDark ? 'bg-blue-500/10' : 'bg-cyan-400/20'} rounded-full blur-2xl group-hover:blur-xl transition-all duration-500`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
