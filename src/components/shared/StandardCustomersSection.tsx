import { useEffect, useState } from "react";
import { Users } from "lucide-react";

/** Detect mobile (touch or <768px) */
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () =>
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
};

const StandardCustomersSection = () => {
  const isMobile = useIsMobile();
  
  // Animation duration: slower for better logo visibility
  const duration = isMobile ? 24 : 30;
  const brandLogos = [
    "/lovable-uploads/c015aef0-9ac6-47d5-8f1b-ea8aff14dd08.png", // TUTELAIMPRESA
    "/lovable-uploads/655e08e7-f709-41c5-9b01-f624d4dea2ce.png", // karon
    "/lovable-uploads/fe2c67ca-9c86-4598-b7ce-05d1ef35dbbf.png", // VORSICHER
    "/lovable-uploads/871bbc8b-f67d-4537-a7a2-574d06a9e919.png", // inplace
    "/lovable-uploads/d4a117b0-a098-4850-9d53-82ee30cbdb21.png", // edilgo
    "/lovable-uploads/5a8470d1-8aa8-4ee0-a0c5-efbe23f61c0b.png", // easycassa
    "/lovable-uploads/57e4bdda-6fe0-4184-b948-1e51ef3229c1.png", // CROWN
    "/lovable-uploads/logoskyroom.png", // LOGOSKYROOM
    "/lovable-uploads/squiseat.png", // SQUISEAT
    "/lovable-uploads/golee.png", // GOLEE
    "/lovable-uploads/time_vision.png", // TIME VISION
    "/lovable-uploads/eurooffice.png", // EUROOFFICE
    "/lovable-uploads/ralf.png", // RALF
    "/lovable-uploads/badvisior.png", // BADVISIOR
    "/lovable-uploads/moneytec.png", // MONEYTEC
  ];

  return (
    <div className="py-20 lg:py-32 bg-gradient-to-br from-gray-100 via-slate-100 to-gray-50 relative overflow-hidden">
      {/* Elegant Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23334155' fill-opacity='0.02'%3E%3Cpath d='m0 0h60v60h-60z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Premium Neutral Gradients */}
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-gradient-to-br from-slate-200/40 via-gray-100/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-gradient-to-tl from-slate-300/30 via-gray-200/15 to-transparent rounded-full blur-3xl"></div>
        
        {/* Clean Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-white/40"></div>
      </div>
      
      {/* Minimal Floating Elements */}
      <div className="absolute top-40 left-32 w-32 h-32 bg-gradient-to-br from-slate-200/20 to-gray-100/10 rounded-full blur-2xl opacity-60"></div>
      <div className="absolute bottom-40 right-40 w-24 h-24 bg-gradient-to-br from-gray-200/25 to-slate-100/15 rounded-full blur-xl opacity-50"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Clean Header Section */}
        <div className="text-center max-w-5xl mx-auto mb-20">
          <div className="inline-block mb-8 group">
            <span className="text-sm font-semibold tracking-[0.25em] uppercase px-8 py-4 rounded-full bg-white/80 text-slate-700 border border-slate-200/60 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-400 group-hover:scale-105">
              <Users className="w-4 h-4 inline-block mr-3 text-slate-600" />
              Clienti di Fiducia
            </span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-black leading-[0.9] tracking-tight text-slate-800 mb-8 group">
            <span className="inline-block transform transition-transform duration-500">
              Scelti ogni giorno da{" "}
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent inline-block transform transition-transform duration-500 hover:scale-105">
              500+ Aziende
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl leading-relaxed text-slate-600 max-w-4xl mx-auto font-light">
            Dalle startup alle grandi aziende, ci fidano per la loro crescita. Ogni progetto è una partnership di successo.
          </p>
          
          {/* Elegant separator */}
          <div className="mt-6 flex justify-center">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
          </div>
        </div>
        
        {/* Clean Logo Container */}
        <div className="relative overflow-hidden rounded-2xl bg-white/70 p-8 border border-slate-200/50 backdrop-blur-sm shadow-xl">
          {/* Clean fade effects */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>
          
          {/* Sliding logos */}
          <div 
            className="flex items-center gap-16 w-max"
            style={
              {
                // @ts-ignore CSS custom prop
                "--dur": `${duration}s`,
                animation: `marquee var(--dur) linear infinite`,
              } as React.CSSProperties
            }
          >
            {/* First set */}
            {brandLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 group">
                <div className="p-4 rounded-xl bg-white shadow-lg border border-white/20 group-hover:shadow-xl group-hover:border-primary/50 transition-all duration-300 backdrop-blur-sm">
                   <img 
                     src={logo} 
                     alt={`Business Partner ${index + 1} Logo`}
                     width={80}
                     height={48}
                     loading="lazy"
                     className="h-12 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                   />
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {brandLogos.map((logo, index) => (
              <div key={`dup-${index}`} className="flex-shrink-0 group">
                <div className="p-4 rounded-xl bg-white shadow-lg border border-white/20 group-hover:shadow-xl group-hover:border-primary/50 transition-all duration-300 backdrop-blur-sm">
                   <img 
                     src={logo} 
                     alt={`Business Partner ${index + 1} Logo`}
                     width={80}
                     height={48}
                     loading="lazy"
                     className="h-12 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                   />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Geometric shapes */}
      <div className="absolute top-1/3 right-1/5 w-2 h-32 bg-gradient-to-b from-primary/30 to-transparent transform rotate-45 animate-pulse delay-500"></div>
      <div className="absolute bottom-1/4 left-1/6 w-1 h-24 bg-gradient-to-t from-primary-glow/40 to-transparent animate-pulse delay-1500"></div>
      
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="marquee"] { animation: none !important; }
        }
      `}</style>
    </div>
  );
};

export default StandardCustomersSection;