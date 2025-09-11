import { Badge } from "@/components/ui/badge";

const OfficeSection = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-black via-slate-900 to-black">
      {/* Advanced background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Multi-layered gradient backgrounds */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-gradient-radial from-primary/10 via-primary-glow/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-conic from-primary/8 via-primary-glow/4 to-primary/8 rounded-full blur-2xl opacity-60"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-primary-glow/6 to-primary/6 rounded-full blur-xl"></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 right-20 w-3 h-3 bg-primary-glow/50 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-32 w-1.5 h-1.5 bg-primary/50 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-32 w-2.5 h-2.5 bg-primary-glow/40 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
        
        {/* Geometric shapes for depth */}
        <div className="absolute top-16 right-16 w-16 h-16 border border-primary/20 rounded-lg rotate-45 animate-pulse opacity-30"></div>
        <div className="absolute bottom-24 left-16 w-12 h-12 border border-primary-glow/25 rounded-full animate-pulse opacity-40" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
        {/* Premium badge with enhanced styling */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="relative inline-block group">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 to-primary-glow/30 rounded-2xl blur-lg group-hover:blur-xl group-hover:scale-110 transition-all duration-500"></div>
            <Badge className="relative bg-gradient-to-r from-primary/20 via-primary-glow/15 to-primary/20 text-primary-glow border-primary/40 backdrop-blur-xl px-8 py-4 text-lg font-bold shadow-xl shadow-primary/20">
              I nostri uffici
            </Badge>
          </div>
        </div>
        
        {/* Enhanced heading with premium typography */}
        <div className="text-center mb-16 space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-6xl lg:text-8xl font-black leading-[0.85] tracking-tight text-white mb-8 group hover:scale-105 transition-transform duration-700">
            Dove strategia ed esecuzione
            <span className="block bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent mt-4">
              lavorano fianco a fianco
            </span>
          </h2>
          
          {/* Decorative line under heading */}
          <div className="flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-primary via-primary-glow to-primary rounded-full shadow-lg shadow-primary/50"></div>
          </div>
        </div>
        
        {/* Enhanced subtitle */}
        <div className="text-center mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-3xl lg:text-4xl text-primary-glow font-bold mb-8 tracking-wide">
            Vendite, Marketing e AI sotto un'unica regia: la nostra.
          </p>
        </div>

        {/* Enhanced description with premium styling */}
        <div className="text-center mb-20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-primary-glow/5 to-primary/10 rounded-3xl blur-xl"></div>
            <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-12 shadow-2xl">
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed font-light tracking-wide">
                Nel nostro HQ coordiniamo il lavoro. Un metodo unico, processi chiari, KPI e SLA che trasformano piani in risultati misurabili.
              </p>
            </div>
          </div>
        </div>

        {/* Premium visual elements grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          {[
            { title: "Strategia", icon: "🎯", description: "Pianificazione metodica e obiettivi chiari" },
            { title: "Esecuzione", icon: "⚡", description: "Implementazione rapida e precisa" },
            { title: "Risultati", icon: "📈", description: "Performance misurabili e verificabili" }
          ].map((item, index) => (
            <div key={index} className="group relative" style={{ animationDelay: `${1 + index * 0.2}s` }}>
              {/* Glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Card */}
              <div className="relative backdrop-blur-xl bg-white/8 border border-white/15 rounded-2xl p-8 text-center hover:bg-white/12 transition-all duration-300 hover:border-primary/40 group-hover:scale-105 hover:shadow-xl hover:shadow-primary/20">
                {/* Icon */}
                <div className="text-6xl mb-6 filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-glow transition-colors duration-300">
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="text-white/80 text-lg leading-relaxed">
                  {item.description}
                </p>
                
                {/* Accent line */}
                <div className="mt-6 w-16 h-1 bg-gradient-to-r from-primary to-primary-glow rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom accent with animated elements */}
        <div className="mt-24 text-center animate-fade-in" style={{ animationDelay: '1.4s' }}>
          <div className="flex justify-center items-center space-x-8">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"></div>
            <div className="w-4 h-4 bg-gradient-to-br from-primary to-primary-glow rounded-full shadow-lg shadow-primary/50 animate-pulse"></div>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary-glow/60 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeSection;