import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const PhotoCTASection = () => {
  return (
    <section className="py-40 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(/lovable-uploads/981ed56a-ba22-44a8-91a6-e6a1961bc0ae.png)` }}
      />
      
      {/* Enhanced Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#2E8BC0]/30 via-transparent to-[#87CEEB]/20 z-10" />
      
      <div className="max-w-6xl mx-auto px-6 text-center relative z-20">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-2xl">
            Cerchi venditori?{" "}
            <span className="text-[#87CEEB]">AFFITTALI!</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/95 leading-relaxed drop-shadow-xl font-medium">
            Risparmia tempo e denaro sulle assunzioni. Ottieni esperti pronti all'uso dai nostri team di vendita esternalizzati.
          </p>
          
          <div className="pt-4">
            <div className="relative inline-block group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] rounded-full blur opacity-60 group-hover:opacity-100 transition-all duration-500"></div>
              <Button 
                size="xl" 
                className="relative bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] hover:from-[#87CEEB] hover:to-[#2E8BC0] text-white font-bold px-12 py-6 rounded-full text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center gap-3">
                  Contattaci ora
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoCTASection;