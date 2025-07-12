import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-[#0A2E4F]">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="space-y-8">
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-bold text-white text-center">
              Pronto a far crescere il tuo business?
            </h2>
            
            <p className="text-white text-center max-w-2xl mx-auto">
              Parla con Marco e scopri cosa può fare il suo team.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#55ACEE] to-[#87CEEB] hover:from-[#2E8BC0] hover:to-[#55ACEE] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Prenota una consulenza gratuita
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-[#0A2E4F] font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
            >
              Contattaci
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;