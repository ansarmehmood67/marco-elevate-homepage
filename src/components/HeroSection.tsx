
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-2 px-0 bg-black">
      <div className="container mx-auto">
        <div 
          className="relative min-h-[85vh] rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900"
          style={{ 
            backgroundImage: `url('/lovable-uploads/25280549-6553-430d-9dff-5462347e4238.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60" />
          
          {/* Subtle animated elements like Tony Robbins */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-blue-400/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
          
          {/* Content positioned at bottom left - exactly like Tony Robbins */}
          <div className="absolute bottom-12 left-12 max-w-2xl">
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-8">
              Porta vendite e
            </h1>
            
            <Button className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              inizia adesso
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
