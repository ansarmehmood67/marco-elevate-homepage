
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-20 pb-2 px-0 transition-all duration-500 bg-black">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div
          className="relative min-h-[85vh] rounded-3xl overflow-hidden transition-all duration-500 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900"
          style={{
            backgroundImage: `url('/lovable-uploads/911930fd-818f-4633-a9f4-f2abce87bc72.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60 transition-all duration-500" />

          {/* Bottom gradient overlay to avoid sharp cut */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500" />

          {/* Subtle animated elements */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full filter blur-3xl animate-pulse transition-colors duration-500 bg-white/5" />
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full filter blur-3xl animate-pulse delay-1000 transition-colors duration-500 bg-blue-400/10" />

          {/* Content positioned at bottom left */}
          <div className="absolute bottom-12 left-12 max-w-2xl">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8 text-white drop-shadow-2xl">
              Porta vendite e
              <br />
              comunicazione
              <br />
              al livello successivo
            </h1>

            <Button className="font-semibold px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white text-blue-900 hover:bg-gray-100 hover:shadow-white/30 border-2 border-white/20">
              inizia adesso
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
