
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
          <div className="absolute top-1/5 left-1/4 w-40 h-40 rounded-full filter blur-3xl bg-gradient-to-r from-primary/20 to-primary-glow/15 opacity-70" />
          <div className="absolute bottom-1/4 right-1/5 w-56 h-56 rounded-full filter blur-3xl bg-gradient-to-l from-primary-glow/18 to-primary/12 opacity-60" />
          <div className="absolute top-1/2 left-1/8 w-32 h-32 rounded-full filter blur-2xl bg-gradient-to-br from-primary/15 to-primary-glow/8 opacity-80" />
          <div className="absolute bottom-1/3 left-1/2 w-24 h-24 rounded-full filter blur-2xl bg-gradient-to-tr from-primary-glow/12 to-transparent opacity-70" />
          
          {/* Advanced edge glow and border effects */}
          <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_120px_rgba(56,189,248,0.08),inset_0_0_200px_rgba(14,165,233,0.04)]" />
          <div className="absolute inset-0 rounded-3xl border border-gradient-to-r from-primary/30 via-sky-blue-500/20 to-primary/30 opacity-50" />
          
          {/* Mobile-friendly flex layout */}
          <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 lg:p-12 z-20">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-8">
              {/* Premium content section with enhanced typography */}
              <div className="flex-1 max-w-2xl">
                {/* Subtle premium badge */}
                <div className="mb-6 lg:mb-8">
                  <span className="inline-flex items-center px-3 py-1.5 bg-primary/10 text-white/80 border border-primary/20 rounded-full text-xs font-medium backdrop-blur-xl shadow-sm hover:bg-primary/15 transition-all duration-300 relative">
                    <Star className="w-3 h-3 mr-1.5 text-primary/70" />
                    <span className="tracking-wide">CLAIM</span>
                    <Sparkles className="w-3 h-3 ml-1.5 text-primary-glow/70" />
                  </span>
                </div>
                
                {/* Enhanced typography with consistent design system - Mobile responsive */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold leading-[1.1] mb-6 lg:mb-10 relative">
                  <span className="block mb-2 lg:mb-3 text-white drop-shadow-2xl tracking-tight">
                    Esternalizza
                  </span>
                  <span className="block mb-2 lg:mb-3 text-primary font-bold tracking-tight">
                    vendite e marketing:
                  </span>
                  <span className="block text-white drop-shadow-2xl tracking-tight">
                    cresci
                    <span className="text-primary-glow font-bold ml-2 lg:ml-4">
                      senza pensieri
                    </span>
                  </span>
                  
                  {/* Text glow effects */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary-glow/20 to-primary/20 filter blur-2xl opacity-30"></div>
                </h1>
                
                {/* Premium subtitle with glass morphism - Mobile responsive */}
                <div className="relative mb-6 lg:mb-10">
                  <p className="text-lg sm:text-xl lg:text-2xl text-white/95 leading-relaxed backdrop-blur-xl bg-gradient-to-r from-black/30 via-black/20 to-black/30 rounded-2xl px-4 lg:px-6 py-3 lg:py-4 border border-white/10 shadow-2xl">
                    Un'unica squadra dedicata che prende in mano i tuoi
                    <span className="text-primary font-medium"> funnel B2B</span>, ottimizza performance e libera il tuo tempo.
                  </p>
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary-glow/20 to-primary/20 rounded-2xl filter blur-lg opacity-50"></div>
                </div>
                
                {/* Enhanced CTA button with premium effects - Mobile responsive */}
                <div className="relative group">
                  <Button className="relative font-bold px-8 lg:px-12 py-4 lg:py-6 text-lg lg:text-xl rounded-full shadow-2xl hover:shadow-[0_0_50px_hsl(var(--primary-glow)/0.4)] transition-all duration-700 transform hover:scale-110 bg-gradient-to-r from-white via-gray-50 to-white text-black hover:from-primary hover:via-primary-glow hover:to-primary hover:text-white border-2 border-white/60 hover:border-primary/70 backdrop-blur-xl overflow-hidden group">
                    {/* Button background animation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary-glow/0 to-primary/0 group-hover:from-primary/20 group-hover:via-primary-glow/20 group-hover:to-primary/20 transition-all duration-700"></div>
                    
                    <span className="flex items-center space-x-3 lg:space-x-4 relative z-10">
                      <span className="relative">
                        Inizia ora
                        <div className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-primary to-primary-glow group-hover:w-full transition-all duration-500"></div>
                      </span>
                      <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 group-hover:translate-x-3 transition-all duration-500 group-hover:text-white" />
                    </span>
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 -top-2 bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  </Button>
                  
                  {/* Enhanced button glow */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 via-primary-glow/30 to-primary/30 filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary/20 via-primary-glow/20 to-primary/20 filter blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-700 -z-20"></div>
                </div>
              </div>

              {/* Premium Video Player - Responsive positioning */}
              <div className="w-full sm:w-80 lg:w-80 h-48 lg:flex-shrink-0 group">
                <div className="relative">
                  {/* Video container with enhanced glass morphism */}
                  <div className="w-full h-48 rounded-2xl overflow-hidden shadow-2xl border border-white/40 backdrop-blur-xl bg-gradient-to-br from-black/30 via-black/20 to-black/30 group-hover:shadow-[0_0_40px_rgba(56,189,248,0.3)] transition-all duration-700 group-hover:scale-110 relative">
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
                  <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-primary/40 via-primary-glow/40 to-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 filter blur-md"></div>
                  <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary/20 via-primary-glow/20 to-primary/20 opacity-0 group-hover:opacity-70 transition-opacity duration-700 -z-20 filter blur-xl"></div>
                  
                  {/* Video label with premium styling */}
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center px-4 py-1.5 bg-gradient-to-r from-primary/80 via-primary-glow/80 to-primary/80 text-white text-xs font-bold rounded-full backdrop-blur-xl border border-white/30 shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-white mr-2"></span>
                      DEMO LIVE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
