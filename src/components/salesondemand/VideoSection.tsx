
import { CheckCircle, Play } from "lucide-react";

interface VideoSectionProps {
  isDark: boolean;
}

const VideoSection = ({ isDark }: VideoSectionProps) => {
  return (
    <section className={`py-32 px-0 transition-all duration-500 relative overflow-hidden ${
      isDark ? 'bg-gradient-to-br from-slate-900 via-black to-slate-900' : 'bg-gradient-to-br from-gray-50 via-white to-gray-50'
    }`}>
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        {/* Film strip pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="flex flex-col h-full">
            {[...Array(20)].map((_, i) => (
              <div key={i} className={`flex-1 border-b ${isDark ? 'border-white' : 'border-black'} relative`}>
                <div className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 ${isDark ? 'bg-white' : 'bg-black'} rounded-full`} />
                <div className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 ${isDark ? 'bg-white' : 'bg-black'} rounded-full`} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Spotlight effects */}
        <div className={`absolute top-20 left-1/4 w-96 h-96 ${isDark ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20' : 'bg-gradient-to-br from-blue-400/30 to-purple-400/30'} rounded-full blur-3xl animate-pulse`} />
        <div className={`absolute bottom-20 right-1/4 w-80 h-80 ${isDark ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20' : 'bg-gradient-to-br from-purple-400/30 to-pink-400/30'} rounded-full blur-3xl animate-pulse`} style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center px-8 py-4 rounded-full text-lg font-bold mb-8 backdrop-blur-xl shadow-2xl ${
            isDark ? 'bg-pink-500/20 text-pink-300 border border-pink-500/30' : 'bg-pink-100 text-pink-700 border border-pink-200'
          } transition-all duration-300 hover:scale-105`}>
            <Play className="w-6 h-6 mr-3 animate-pulse" />
            Approfondimenti degli Esperti di Marco Ferrario
          </div>
          <h2 className={`text-6xl lg:text-8xl font-black mb-8 leading-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Vedilo in <span className={`bg-gradient-to-r ${isDark ? 'from-pink-400 to-purple-400' : 'from-pink-600 to-purple-600'} bg-clip-text text-transparent`}>Azione</span>
          </h2>
          <p className={`text-2xl lg:text-3xl ${isDark ? 'text-gray-300' : 'text-gray-700'} max-w-4xl mx-auto mb-12`}>
            Guarda Marco Ferrario spiegare la metodologia <span className={`font-bold ${isDark ? 'text-pink-400' : 'text-pink-600'}`}>Sales On Demand</span> che sta trasformando le aziende in tutto il mondo.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Video Player - Enhanced */}
            <div className="lg:col-span-3">
              <div className={`relative p-4 rounded-3xl ${
                isDark ? 'bg-gradient-to-br from-slate-800/90 to-slate-700/90 border border-slate-600/50' : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200/50'
              } backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 group`}>
                
                {/* Play button overlay for aesthetics */}
                <div className="relative">
                  <div className="aspect-video rounded-2xl overflow-hidden shadow-xl group-hover:scale-105 transition-transform duration-500">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/1RYOQhiJcmk"
                      title="Marco Ferrario - Sales On Demand"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-2xl"
                    />
                  </div>
                  
                  {/* Decorative elements */}
                  <div className={`absolute -bottom-4 -right-4 w-20 h-20 ${isDark ? 'bg-pink-500/20' : 'bg-pink-400/30'} rounded-full blur-2xl group-hover:blur-xl transition-all duration-500`} />
                  <div className={`absolute -top-4 -left-4 w-16 h-16 ${isDark ? 'bg-purple-500/20' : 'bg-purple-400/30'} rounded-full blur-2xl group-hover:blur-xl transition-all duration-500`} />
                </div>
              </div>
            </div>
            
            {/* Video Details & Additional Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className={`p-8 rounded-2xl ${
                isDark ? 'bg-slate-800/50 border border-slate-700' : 'bg-white border border-gray-200'
              } shadow-lg`}>
                <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Cosa Imparerai:
                </h3>
                <ul className="space-y-3">
                  {[
                    'Il processo Sales On Demand in 4 fasi',
                    'Come scalare senza assumere internamente',
                    'Casi di studio reali e risultati',
                    'Calcoli e proiezioni del ROI'
                  ].map((item, index) => (
                    <li key={index} className={`flex items-start space-x-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      <CheckCircle className={`w-6 h-6 ${isDark ? 'text-pink-400' : 'text-pink-600'} mt-0.5 flex-shrink-0`} />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className={`p-8 rounded-2xl ${
                isDark ? 'bg-gradient-to-br from-pink-900/30 to-purple-900/30 border border-pink-500/30' : 'bg-gradient-to-br from-pink-50 to-purple-50 border border-pink-200/50'
              } backdrop-blur-sm`}>
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-16 h-16 rounded-full ${isDark ? 'bg-gradient-to-br from-pink-500 to-purple-500' : 'bg-gradient-to-br from-pink-600 to-purple-600'} flex items-center justify-center text-white text-2xl font-bold`}>
                    MF
                  </div>
                  <div>
                    <h4 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      Marco Ferrario
                    </h4>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Esperto di Vendite e Autore
                    </p>
                  </div>
                </div>
                <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  "Oltre 15 anni di esperienza nell'aiutare le aziende a trasformare i loro processi di vendita con metodologie comprovate e scalabili."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
