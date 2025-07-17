import { Button } from "@/components/ui/button";

const CTAImageSection = () => {
  return (
    <section className="py-40 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(/lovable-uploads/13f46ac7-4c9f-4d36-97bf-eba678643498.png)` }}
      />
      
      {/* Enhanced Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#2E8BC0]/30 via-transparent to-[#55ACEE]/20 z-10" />
      
      <div className="max-w-6xl mx-auto px-6 text-center relative z-20">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6" 
              style={{ 
                textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)' 
              }}>
            Trasforma il tuo business con{" "}
            <span className="text-[#87CEEB] bg-gradient-to-r from-[#87CEEB] to-[#55ACEE] bg-clip-text text-transparent">Sales On Demand</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white leading-relaxed font-medium max-w-2xl mx-auto" 
             style={{ 
               textShadow: '1px 1px 6px rgba(0,0,0,0.9), 0 0 15px rgba(0,0,0,0.7)' 
             }}>
            Scopri come il nostro servizio Sales On Demand può rivoluzionare 
            il tuo approccio alle vendite e accelerare la crescita del tuo business.
          </p>
          
          <Button className="bg-gradient-to-r from-[#55ACEE] to-[#87CEEB] hover:from-[#2E8BC0] hover:to-[#55ACEE] text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Inizia Subito
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTAImageSection;