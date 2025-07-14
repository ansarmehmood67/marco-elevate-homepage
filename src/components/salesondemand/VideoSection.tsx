import { CheckCircle, Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-32 px-6 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-primary-glow/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-8 py-4 rounded-full text-lg font-bold mb-8 bg-pink-100 text-pink-700 border border-pink-200 transition-all duration-300 hover:scale-105 shadow-lg">
            <Play className="w-6 h-6 mr-3 animate-pulse" />
            Approfondimenti degli Esperti di Marco Ferrario
          </div>
          <h2 className="text-5xl lg:text-7xl font-black leading-[0.85] tracking-tight text-slate-900 mb-8">
            Vedilo in{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Azione
            </span>
          </h2>
          <p className="text-xl lg:text-2xl leading-relaxed text-slate-600 max-w-3xl mx-auto mb-12">
            Guarda Marco Ferrario spiegare la metodologia <span className="font-bold text-pink-600">Sales On Demand</span> che sta trasformando le aziende in tutto il mondo.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Video Player - Enhanced */}
            <div className="lg:col-span-3">
              <div className="relative p-4 rounded-3xl bg-white/80 backdrop-blur-xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 group">
                
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
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-pink-400/30 rounded-full blur-2xl group-hover:blur-xl transition-all duration-500" />
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-purple-400/30 rounded-full blur-2xl group-hover:blur-xl transition-all duration-500" />
                </div>
              </div>
            </div>
            
            {/* Video Details & Additional Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-slate-900">
                  Cosa Imparerai:
                </h3>
                <ul className="space-y-3">
                  {[
                    'Il processo Sales On Demand in 4 fasi',
                    'Come scalare senza assumere internamente',
                    'Casi di studio reali e risultati',
                    'Calcoli e proiezioni del ROI'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3 text-gray-700">
                      <CheckCircle className="w-6 h-6 text-pink-600 mt-0.5 flex-shrink-0" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50 border border-pink-200/50 backdrop-blur-sm">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-600 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                    MF
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900">
                      Marco Ferrario
                    </h4>
                    <p className="text-gray-700">
                      Esperto di Vendite e Autore
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700">
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