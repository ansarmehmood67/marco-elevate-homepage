
import { BarChart, TrendingUp, Users, Target } from "lucide-react";

interface PerformanceSectionProps {
  isDark: boolean;
}

const PerformanceSection = ({ isDark }: PerformanceSectionProps) => {
  return (
    <section className={`py-32 px-0 relative overflow-hidden transition-all duration-500 ${
      isDark ? 'bg-gradient-to-br from-black via-slate-900 to-black' : 'bg-gradient-to-br from-white via-gray-50 to-white'
    }`}>
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0">
        {/* Animated data visualization background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: isDark ? '#10B981' : '#059669', stopOpacity: 0.8}} />
                <stop offset="50%" style={{stopColor: isDark ? '#3B82F6' : '#2563EB', stopOpacity: 0.6}} />
                <stop offset="100%" style={{stopColor: isDark ? '#8B5CF6' : '#7C3AED', stopOpacity: 0.4}} />
              </linearGradient>
            </defs>
            
            {/* Animated chart lines */}
            <path d="M50,700 Q300,300 600,200 T1150,100" fill="none" stroke="url(#chartGradient)" strokeWidth="3" className="animate-pulse" />
            <path d="M50,750 Q400,400 800,250 T1150,150" fill="none" stroke="url(#chartGradient)" strokeWidth="2" className="animate-pulse" style={{animationDelay: '1s'}} />
            
            {/* Animated data points */}
            {[...Array(8)].map((_, i) => (
              <circle 
                key={i}
                cx={50 + i * 150} 
                cy={700 - i * 80} 
                r="4" 
                fill={isDark ? '#10B981' : '#059669'} 
                className="animate-pulse"
                style={{animationDelay: `${i * 0.3}s`}}
              />
            ))}
          </svg>
        </div>
        
        {/* Floating statistical elements */}
        <div className={`absolute top-20 left-20 w-64 h-64 ${isDark ? 'bg-gradient-to-br from-green-500/20 to-emerald-500/20' : 'bg-gradient-to-br from-green-400/30 to-emerald-400/30'} rounded-full blur-3xl animate-pulse`} />
        <div className={`absolute bottom-20 right-20 w-80 h-80 ${isDark ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20' : 'bg-gradient-to-br from-blue-400/30 to-purple-400/30'} rounded-full blur-3xl animate-pulse`} style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="w-full px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        
        {/* Enhanced Statistics Display */}
        <div className="grid md:grid-cols-3 gap-12 mb-20 max-w-6xl mx-auto">
          {[
            { value: '+30%', label: 'Revenue increase', color: 'green', icon: TrendingUp },
            { value: '+25%', label: 'Closing rate improvement', color: 'blue', icon: Target },
            { value: '+20%', label: 'Team productivity boost', color: 'purple', icon: Users }
          ].map((stat, index) => (
            <div key={index} className="group relative">
              {/* Background card */}
              <div className={`p-12 rounded-3xl ${
                isDark 
                  ? 'bg-gradient-to-br from-slate-800/90 via-slate-700/90 to-slate-800/90 border border-slate-600/50' 
                  : 'bg-gradient-to-br from-white via-gray-50 to-white border border-gray-200/50'
              } backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-110 relative overflow-hidden`}>
                
                {/* Animated background particles */}
                <div className="absolute inset-0 opacity-20">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-1 h-1 ${
                        stat.color === 'green' ? (isDark ? 'bg-green-400' : 'bg-green-600') :
                        stat.color === 'blue' ? (isDark ? 'bg-blue-400' : 'bg-blue-600') :
                        (isDark ? 'bg-purple-400' : 'bg-purple-600')
                      } rounded-full animate-pulse`}
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${15 + i * 20}%`,
                        animationDelay: `${i * 0.3}s`
                      }}
                    />
                  ))}
                </div>
                
                {/* Icon */}
                <div className={`w-20 h-20 mx-auto mb-8 rounded-2xl flex items-center justify-center ${
                  stat.color === 'green' ? (isDark ? 'bg-green-500/20 border border-green-500/30' : 'bg-green-100 border border-green-200') :
                  stat.color === 'blue' ? (isDark ? 'bg-blue-500/20 border border-blue-500/30' : 'bg-blue-100 border border-blue-200') :
                  (isDark ? 'bg-purple-500/20 border border-purple-500/30' : 'bg-purple-100 border border-purple-200')
                } group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`w-10 h-10 ${
                    stat.color === 'green' ? (isDark ? 'text-green-400' : 'text-green-600') :
                    stat.color === 'blue' ? (isDark ? 'text-blue-400' : 'text-blue-600') :
                    (isDark ? 'text-purple-400' : 'text-purple-600')
                  } group-hover:rotate-12 transition-transform duration-300`} />
                </div>
                
                {/* Value */}
                <div className={`text-6xl lg:text-7xl font-black mb-6 ${
                  stat.color === 'green' ? (isDark ? 'text-green-400' : 'text-green-600') :
                  stat.color === 'blue' ? (isDark ? 'text-blue-400' : 'text-blue-600') :
                  (isDark ? 'text-purple-400' : 'text-purple-600')
                } group-hover:scale-110 transition-transform duration-300`}>
                  {stat.value}
                </div>
                
                {/* Label */}
                <div className={`text-xl lg:text-2xl font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {stat.label}
                </div>
                
                {/* Progress bar animation */}
                <div className="mt-8 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full animate-pulse ${
                    stat.color === 'green' ? 'bg-gradient-to-r from-green-400 to-emerald-500' :
                    stat.color === 'blue' ? 'bg-gradient-to-r from-blue-400 to-cyan-500' :
                    'bg-gradient-to-r from-purple-400 to-pink-500'
                  }`} style={{ width: '85%', animationDelay: `${index * 0.5}s` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Enhanced ROI Quote */}
        <div className={`max-w-5xl mx-auto p-12 rounded-3xl ${
          isDark ? 'bg-gradient-to-br from-blue-900/50 via-purple-900/50 to-pink-900/50 border border-white/10' : 'bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 border border-blue-200/50'
        } backdrop-blur-xl shadow-2xl relative overflow-hidden`}>
          
          {/* Quote icon */}
          <div className={`w-16 h-16 mx-auto mb-8 rounded-full ${
            isDark ? 'bg-gradient-to-br from-yellow-400 to-orange-400' : 'bg-gradient-to-br from-yellow-500 to-orange-500'
          } flex items-center justify-center text-3xl font-black ${isDark ? 'text-black' : 'text-white'}`}>
            "
          </div>
          
          <p className={`text-3xl lg:text-4xl font-black leading-relaxed ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Ogni <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'}`}>€1</span> investito in un Direttore Vendite On-Demand può generare{' '}
            <span className={`bg-gradient-to-r ${isDark ? 'from-green-400 to-emerald-400' : 'from-green-600 to-emerald-600'} bg-clip-text text-transparent`}>
              €5–10
            </span>{' '}
            di fatturato.
          </p>
          
          {/* Floating elements */}
          <div className={`absolute -top-4 -right-4 w-24 h-24 ${isDark ? 'bg-yellow-400/20' : 'bg-yellow-500/30'} rounded-full blur-2xl animate-pulse`} />
          <div className={`absolute -bottom-4 -left-4 w-20 h-20 ${isDark ? 'bg-green-400/20' : 'bg-green-500/30'} rounded-full blur-2xl animate-pulse`} style={{ animationDelay: '1s' }} />
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;
