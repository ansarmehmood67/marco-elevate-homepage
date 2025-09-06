import { Users } from "lucide-react";

const CustomersSection = () => {
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
    <div className="bg-gradient-to-br from-slate-50 to-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2E8BC0]/10 rounded-full border border-[#2E8BC0]/20 mb-6">
            <Users className="w-4 h-4 text-[#2E8BC0]" />
            <span className="text-[#2E8BC0] font-medium text-sm">I nostri clienti</span>
          </div>
          <h4 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Scelti ogni giorno da più di{" "}
            <span className="text-[#2E8BC0]">500 clienti</span>
          </h4>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] rounded-full mx-auto"></div>
        </div>
        
        {/* Enhanced Logo Slider */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-50 via-white to-slate-50 p-8 border border-slate-200/50">
          {/* Fade effects */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          {/* Sliding logos */}
          <div className="flex animate-[slide_30s_linear_infinite] items-center gap-16">
            {/* First set */}
            {brandLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 group">
                <div className="p-4 rounded-xl bg-white shadow-sm border border-slate-100 group-hover:shadow-md group-hover:border-[#2E8BC0]/20 transition-all duration-300">
                  <img 
                    src={logo} 
                    alt={`Brand ${index + 1}`}
                    className="h-12 object-contain opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {brandLogos.map((logo, index) => (
              <div key={`dup-${index}`} className="flex-shrink-0 group">
                <div className="p-4 rounded-xl bg-white shadow-sm border border-slate-100 group-hover:shadow-md group-hover:border-[#2E8BC0]/20 transition-all duration-300">
                  <img 
                    src={logo} 
                    alt={`Brand ${index + 1}`}
                    className="h-12 object-contain opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default CustomersSection;