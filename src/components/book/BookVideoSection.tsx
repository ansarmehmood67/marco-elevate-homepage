import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const BookVideoSection = () => {
  return (
    <div className="relative py-20 overflow-hidden">
      {/* Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-800"></div>
      
      {/* Subtle overlay pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
            <span className="text-primary-glow font-medium text-sm">Il metodo</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
            Sales as a Service: 
            <br />
            <span className="bg-gradient-to-r from-primary-glow to-primary bg-clip-text text-transparent">
              il metodo che cambia le regole del gioco
            </span>
          </h2>

          {/* YouTube Video Embed */}
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/psBUsiqlblY?si=Fz0kEuoK7uo9KYhP"
                title="Sales as a Service: il metodo che cambia le regole del gioco"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>

          <div className="pt-6">
            <Button 
              className="bg-white/10 text-white hover:bg-white/20 font-semibold px-10 py-4 rounded-full transition-all duration-300 border border-white/20 hover:border-white/30 backdrop-blur-sm" 
              size="lg"
              onClick={() => window.location.href = "#contact"}
            >
              <span className="flex items-center gap-2">
                Scarica il libro
                <ArrowRight className="w-4 h-4" />
              </span>
            </Button>

            <div className="mt-4">
              <p className="text-sm text-slate-400">
                Download immediato • Nessun costo nascosto • Contenuto di valore garantito
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookVideoSection;