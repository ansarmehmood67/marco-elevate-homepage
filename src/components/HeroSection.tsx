
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-20 pb-2 px-0 bg-black relative overflow-hidden">
      {/* Premium background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-black to-gray-900/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(var(--primary)/0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--sky-blue-500)/0.08),transparent_50%)]" />
      
      {/* Animated grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] animate-pulse" />
      
      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative min-h-[85vh] rounded-3xl overflow-hidden border border-gray-800/30 shadow-2xl bg-black/50 backdrop-blur-sm">
          {/* Background Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="https://res.cloudinary.com/dufcnrcfe/video/upload/v1755354320/outsourcing_salesforce_3_nvc1rd.mp4"
              type="video/mp4"
            />
          </video>
          
          {/* Multi-layered overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/70 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />
          
          {/* Premium floating elements */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full filter blur-3xl animate-pulse transition-all duration-[3000ms] bg-gradient-to-r from-primary/15 to-sky-blue-400/10" />
          <div className="absolute bottom-1/3 right-1/5 w-48 h-48 rounded-full filter blur-3xl animate-pulse delay-1000 transition-all duration-[4000ms] bg-gradient-to-l from-sky-blue-500/12 to-primary/8" />
          <div className="absolute top-1/2 left-1/6 w-24 h-24 rounded-full filter blur-2xl animate-pulse delay-2000 transition-all duration-[2500ms] bg-gradient-to-br from-premium-blue-400/10 to-transparent" />
          
          {/* Subtle edge glow */}
          <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_100px_rgba(56,189,248,0.05),inset_0_0_200px_rgba(14,165,233,0.03)]" />
          
          {/* Content positioned at bottom left */}
          <div className="absolute bottom-12 left-12 max-w-2xl z-20">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-primary/25 to-sky-blue-500/20 text-primary border border-primary/40 rounded-full text-sm font-medium backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  <span>Claim</span>
                </span>
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8 text-white drop-shadow-2xl bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent animate-fade-in">
              <span className="block mb-2">Esternalizza vendite</span>
              <span className="block bg-gradient-to-r from-primary to-sky-blue-400 bg-clip-text text-transparent">e marketing:</span>
              <span className="block">cresci senza pensieri</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-100/95 mb-8 font-light leading-relaxed max-w-2xl backdrop-blur-sm bg-black/10 rounded-lg px-4 py-3 border border-white/5">
              Un'unica squadra dedicata che prende in mano i tuoi funnel B2B, ottimizza performance e libera il tuo tempo.
            </p>
            
            <div className="relative">
              <Button className="group font-semibold px-10 py-5 text-lg rounded-full shadow-2xl hover:shadow-[0_0_40px_rgba(56,189,248,0.3)] transition-all duration-500 transform hover:scale-105 bg-gradient-to-r from-white to-gray-100 text-black hover:from-primary hover:to-sky-blue-500 hover:text-white border-2 border-white/40 hover:border-primary/50 backdrop-blur-sm">
                <span className="flex items-center space-x-3">
                  <span className="relative">
                    Inizia ora
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></div>
                  </span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-all duration-300" />
                </span>
              </Button>
              {/* Button glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-sky-blue-500/20 filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
          </div>

          {/* YouTube Video Player - Bottom Right */}
          <div className="absolute bottom-12 right-12 z-20 group">
            <div className="relative">
              <div className="w-80 h-48 rounded-xl overflow-hidden shadow-2xl border-2 border-white/30 backdrop-blur-md bg-black/20 group-hover:shadow-[0_0_30px_rgba(56,189,248,0.2)] transition-all duration-500 group-hover:scale-105">
                <iframe
                  src="https://www.youtube.com/embed/ZocHP6N9Aig"
                  title="Demo Video"
                  className="w-full h-full rounded-xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              {/* Video player premium border effect */}
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary/30 via-sky-blue-500/30 to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 filter blur-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
