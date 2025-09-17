import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const BookIntroSection = () => {
  const { ref, visibleItems } = useStaggeredAnimation(5, 120);

  return (
    <section className="relative overflow-hidden">
      {/* Intro Section */}
      <div className="bg-white py-24 lg:py-32 relative">
        <div ref={ref} className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center space-y-12">
            {/* Premium Badge */}
            <div
              className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-full border border-primary/20 backdrop-blur-sm transition-all duration-700 ease-out ${
                visibleItems[0] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary font-semibold text-sm">
                sales as a service
              </span>
            </div>

            {/* Headline */}
            <div
              className={`transition-all duration-700 ease-out ${
                visibleItems[1] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h1 className="text-5xl lg:text-7xl font-black leading-[0.8] tracking-tight text-black mb-10">
                Il primo metodo per gestire{" "}
                <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                  la forza vendita come un servizio
                </span>
              </h1>
            </div>

            {/* Subheads */}
            <div
              className={`transition-all duration-700 ease-out ${
                visibleItems[2] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-4xl mx-auto leading-relaxed">
                Costruisci il team commerciale perfetto senza sprechi, costi fissi o rischi. 
                Un framework testato per trasformare vendite e marketing in un processo scalabile e misurabile.
              </p>
            </div>

            <div
              className={`transition-all duration-700 ease-out ${
                visibleItems[3] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className={`text-lg text-primary font-semibold max-w-3xl mx-auto transition-all duration-600 ease-out delay-300 transform ${
                visibleItems[3] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}>
                Organizza la strategia, ottimizza l'esecuzione, conquista nuovi mercati.
              </p>
            </div>

            {/* CTA */}
            <div
              className={`pt-8 transition-all duration-700 ease-out ${
                visibleItems[4] ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              <div className="relative inline-block group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-glow rounded-full blur opacity-60 group-hover:opacity-100 transition-all duration-500"></div>
                <Button
                  size="xl"
                  className="relative bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary text-white font-bold px-12 py-6 rounded-full text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  onClick={() => window.location.href = "#contact"}
                >
                  <span className="flex items-center gap-3">
                    Scarica gratis
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </div>

              <div className={`mt-8 transition-all duration-600 ease-out delay-600 transform ${
                visibleItems[4] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}>
                <p className="text-base lg:text-lg text-primary font-bold tracking-wide">
                  Download immediato • Nessun costo nascosto • Contenuto di valore garantito
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookIntroSection;