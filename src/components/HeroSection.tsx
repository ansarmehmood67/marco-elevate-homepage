
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-20 pb-2 px-0 bg-black relative overflow-hidden">
      {/* Advanced background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-black to-gray-900/40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,hsl(var(--primary)/0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--sky-blue-500)/0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_90%,hsl(var(--premium-blue-400)/0.08),transparent_70%)]" />
      
      {/* Dynamic animated grid with particles */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px] opacity-30 animate-[fade-in_2s_ease-out]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.02)_1px,transparent_1px)] bg-[size:120px_120px] opacity-20 animate-pulse" />
      
      {/* Floating particle system */}
      <div className="absolute top-1/4 left-1/6 w-2 h-2 rounded-full bg-primary/60 animate-[scale-in_3s_ease-out_infinite]" />
      <div className="absolute top-1/3 right-1/4 w-1 h-1 rounded-full bg-sky-blue-400/70 animate-[fade-in_2s_ease-out_infinite_1s]" />
      <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 rounded-full bg-premium-blue-400/50 animate-[scale-in_4s_ease-out_infinite_2s]" />
      <div className="absolute top-1/2 right-1/6 w-1 h-1 rounded-full bg-primary/80 animate-[fade-in_3s_ease-out_infinite_0.5s]" />
      
      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative min-h-[85vh] rounded-3xl overflow-hidden border border-gradient-to-r from-gray-800/40 via-primary/20 to-gray-800/40 shadow-2xl bg-black/40 backdrop-blur-md">
          {/* Background Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          >
            <source
              src="https://res.cloudinary.com/dufcnrcfe/video/upload/v1755354320/outsourcing_salesforce_3_nvc1rd.mp4"
              type="video/mp4"
            />
          </video>
          
          {/* Advanced multi-layered overlay system */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20" />
          
          {/* Premium floating elements with enhanced effects */}
          <div className="absolute top-1/5 left-1/4 w-40 h-40 rounded-full filter blur-3xl animate-[pulse_4s_ease-in-out_infinite] bg-gradient-to-r from-primary/20 to-sky-blue-400/15 opacity-70" />
          <div className="absolute bottom-1/4 right-1/5 w-56 h-56 rounded-full filter blur-3xl animate-[pulse_5s_ease-in-out_infinite_1s] bg-gradient-to-l from-sky-blue-500/18 to-primary/12 opacity-60" />
          <div className="absolute top-1/2 left-1/8 w-32 h-32 rounded-full filter blur-2xl animate-[pulse_3s_ease-in-out_infinite_2s] bg-gradient-to-br from-premium-blue-400/15 to-primary/8 opacity-80" />
          <div className="absolute bottom-1/3 left-1/2 w-24 h-24 rounded-full filter blur-2xl animate-[pulse_3.5s_ease-in-out_infinite_1.5s] bg-gradient-to-tr from-sky-blue-400/12 to-transparent opacity-70" />
          
          {/* Advanced edge glow and border effects */}
          <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_120px_rgba(56,189,248,0.08),inset_0_0_200px_rgba(14,165,233,0.04)]" />
          <div className="absolute inset-0 rounded-3xl border border-gradient-to-r from-primary/30 via-sky-blue-500/20 to-primary/30 opacity-50" />
          
          {/* Premium content section with enhanced typography */}
          <div className="absolute bottom-12 left-12 max-w-2xl z-20">
            {/* Premium badge with enhanced effects */}
            <div className="mb-8">
              <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary/30 via-sky-blue-500/25 to-primary/30 text-white border border-primary/50 rounded-full text-sm font-semibold backdrop-blur-xl shadow-2xl hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all duration-500 hover:scale-110 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-sky-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Star className="w-4 h-4 mr-2 text-primary animate-[pulse_2s_ease-in-out_infinite] relative z-10" />
                <span className="relative z-10 tracking-wider">CLAIM</span>
                <Sparkles className="w-4 h-4 ml-2 text-sky-blue-400 animate-[pulse_2s_ease-in-out_infinite_0.5s] relative z-10" />
              </span>
            </div>
            
            {/* Enhanced typography with advanced gradient effects */}
            <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] mb-10 relative">
              <span className="block mb-3 text-white drop-shadow-2xl font-light tracking-tight">
                Esternalizza
              </span>
              <span className="block mb-3 bg-gradient-to-r from-primary via-sky-blue-400 to-premium-blue-400 bg-clip-text text-transparent font-black tracking-tight animate-[fade-in_1s_ease-out_0.5s_both]">
                vendite e marketing:
              </span>
              <span className="block text-white drop-shadow-2xl font-light tracking-tight">
                cresci
                <span className="bg-gradient-to-r from-primary to-sky-blue-400 bg-clip-text text-transparent font-black ml-4">
                  senza pensieri
                </span>
              </span>
              
              {/* Text glow effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-sky-blue-400/20 to-primary/20 filter blur-2xl opacity-30 animate-pulse"></div>
            </h1>
            
            {/* Premium subtitle with glass morphism */}
            <div className="relative mb-10">
              <p className="text-xl lg:text-2xl text-white/95 font-light leading-relaxed tracking-wide backdrop-blur-xl bg-gradient-to-r from-black/30 via-black/20 to-black/30 rounded-2xl px-6 py-4 border border-white/10 shadow-2xl">
                Un'unica squadra dedicata che prende in mano i tuoi
                <span className="text-primary font-medium"> funnel B2B</span>, ottimizza performance e libera il tuo tempo.
              </p>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-sky-blue-500/20 to-primary/20 rounded-2xl filter blur-lg opacity-50"></div>
            </div>
            
            {/* Enhanced CTA button with premium effects */}
            <div className="relative group">
              <Button className="relative font-bold px-12 py-6 text-xl rounded-full shadow-2xl hover:shadow-[0_0_50px_rgba(56,189,248,0.4)] transition-all duration-700 transform hover:scale-110 bg-gradient-to-r from-white via-gray-50 to-white text-black hover:from-primary hover:via-sky-blue-500 hover:to-primary hover:text-white border-2 border-white/60 hover:border-primary/70 backdrop-blur-xl overflow-hidden group">
                {/* Button background animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-sky-blue-500/0 to-primary/0 group-hover:from-primary/20 group-hover:via-sky-blue-500/20 group-hover:to-primary/20 transition-all duration-700"></div>
                
                <span className="flex items-center space-x-4 relative z-10">
                  <span className="relative tracking-wide">
                    Inizia ora
                    <div className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-primary to-sky-blue-400 group-hover:w-full transition-all duration-500"></div>
                  </span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-all duration-500 group-hover:text-white" />
                </span>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 -top-2 bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </Button>
              
              {/* Enhanced button glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 via-sky-blue-500/30 to-primary/30 filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 animate-pulse"></div>
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary/20 via-sky-blue-500/20 to-primary/20 filter blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-700 -z-20"></div>
            </div>
          </div>

          {/* Premium Video Player - Bottom Right */}
          <div className="absolute bottom-12 right-12 z-20 group">
            <div className="relative">
              {/* Video container with enhanced glass morphism */}
              <div className="w-80 h-48 rounded-2xl overflow-hidden shadow-2xl border border-white/40 backdrop-blur-xl bg-gradient-to-br from-black/30 via-black/20 to-black/30 group-hover:shadow-[0_0_40px_rgba(56,189,248,0.3)] transition-all duration-700 group-hover:scale-110 relative">
                <iframe
                  src="https://www.youtube.com/embed/ZocHP6N9Aig"
                  title="Demo Video"
                  className="w-full h-full rounded-2xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                
                {/* Premium overlay effects */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-sky-blue-500/5 pointer-events-none"></div>
              </div>
              
              {/* Enhanced premium border effects */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-primary/40 via-sky-blue-500/40 to-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 filter blur-md"></div>
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary/20 via-sky-blue-500/20 to-primary/20 opacity-0 group-hover:opacity-70 transition-opacity duration-700 -z-20 filter blur-xl animate-pulse"></div>
              
              {/* Video label with premium styling */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="inline-flex items-center px-4 py-1.5 bg-gradient-to-r from-primary/80 via-sky-blue-500/80 to-primary/80 text-white text-xs font-bold rounded-full backdrop-blur-xl border border-white/30 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-white mr-2 animate-pulse"></span>
                  DEMO LIVE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
