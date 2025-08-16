import { Button } from "@/components/ui/button";

const CTAImageSection = () => {
  return (
    <section className="py-40 relative overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://res.cloudinary.com/dufcnrcfe/video/upload/v1755358420/outsourcing_salesforce_4_bwbbxe.mp4"
          type="video/mp4"
        />
      </video>
      
      {/* Enhanced Overlay system with fade from bottom */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20 z-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 z-10" />
      
      <div className="max-w-6xl mx-auto px-6 text-center relative z-20">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-2xl bg-black/20 backdrop-blur-sm rounded-lg px-6 py-4 mb-6 border border-white/10">
            Trasforma il tuo business con soluzioni{" "}
            <span className="text-[#87CEEB] bg-gradient-to-r from-[#87CEEB] to-[#55ACEE] bg-clip-text text-transparent">su misura</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/95 leading-relaxed drop-shadow-xl font-medium bg-black/30 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/10">
            Scopri come le nostre metodologie innovative possono rivoluzionare 
            il tuo approccio alle vendite e al marketing.
          </p>
          
          <Button className="bg-gradient-to-r from-[#55ACEE] to-[#87CEEB] hover:from-[#2E8BC0] hover:to-[#55ACEE] text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Richiedi una demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTAImageSection;