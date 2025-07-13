import { Button } from "@/components/ui/button";

const CTAImageSection = () => {
  return (
    <section className="py-40 relative overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://res.cloudinary.com/dufcnrcfe/video/upload/v1752417034/a14ff2cd-e917-4480-9942-acd5b5e88d41.mp4_3_mpbqz7.mp4" type="video/mp4" />
      </video>
      
      {/* Subtle Overlay - keeping video visible */}
      <div className="absolute inset-0 bg-black/30 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#55ACEE]/20 to-[#2E8BC0]/20 z-10" />
      
      <div className="max-w-6xl mx-auto px-6 text-center relative z-20">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg">
            Trasforma il tuo business con soluzioni{" "}
            <span className="text-[#87CEEB]">su misura</span>
          </h2>
          
          <p className="text-xl text-white/90 leading-relaxed drop-shadow-md">
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