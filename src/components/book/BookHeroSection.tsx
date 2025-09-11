import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight } from "lucide-react";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const BookHeroSection = () => {
  const { ref, visibleItems } = useStaggeredAnimation(5, 50);

  return (
    <section className="pt-24 sm:pt-28 lg:pt-24 pb-8 px-0 bg-black relative overflow-hidden">
      {/* Simplified background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-black to-gray-900/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(var(--primary)/0.08),transparent_50%)]" />

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        {/* NOTE: let height be auto on mobile; only enforce min-h on lg */}
        <div className="relative rounded-3xl overflow-hidden border border-gray-800/30 shadow-2xl bg-black/60 backdrop-blur-sm lg:min-h-[80vh]">
          {/* Clean overlays */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/75 via-black/65 to-black/80" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />

          {/* Content */}
          {/* KEY CHANGE: static on mobile, absolute only on lg */}
          <div
            ref={ref}
            className="relative lg:absolute lg:inset-0 flex flex-col justify-center lg:justify-end p-4 sm:p-6 lg:p-12 pt-6 sm:pt-10 lg:pt-24 pb-10 sm:pb-12 lg:pb-12 z-20"
          >
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 sm:gap-6 lg:gap-8">
              {/* Left copy */}
              <div className="flex-1 max-w-5xl">
                 {/* Heading */}
                 <h1
                  className={`text-6xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white mb-8 sm:mb-10 text-center lg:text-left transition-all duration-600 ease-out ${
                    visibleItems[0] 
                      ? "opacity-100 translate-y-0" 
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{
                    transitionDelay: visibleItems[0] ? '0ms' : '0ms'
                  }}
                >
                  <div className={`transition-all duration-600 ease-out ${visibleItems[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <span className="block text-white">Organizza,</span>
                    <span className="block text-white">ottimizza,</span>
                    <span className="block bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent tracking-normal">
                      conquista:
                    </span>
                  </div>
                  
                  <div className={`text-2xl sm:text-5xl lg:text-5xl text-white/95 font-bold tracking-wide mt-4 transition-all duration-550 ease-out delay-240 ${visibleItems[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                     la tua forza vendite in outsourcing
                  </div>
                </h1>


                {/* CTA */}
                <div
                  className={`relative group mb-8 sm:mb-0 transition-all duration-450 ease-out delay-320 transform flex justify-center lg:justify-start ${
                    visibleItems[1] 
                      ? "opacity-100 translate-y-0" 
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{
                    transitionDelay: visibleItems[1] ? '320ms' : '0ms'
                  }}
                >
                  <a href="#contact" className="w-fit">
                    <Button className="relative font-bold px-6 lg:px-10 py-3 lg:py-5 text-base lg:text-lg rounded-full shadow-2xl hover:shadow-[0_0_50px_hsl(var(--primary-glow)/0.4)] transition-all duration-700 transform lg:hover:scale-105 hover:-translate-y-0.5 bg-gradient-to-r from-white via-gray-50 to-white text-black hover:from-primary hover:via-primary-glow hover:to-primary hover:text-white border-2 border-white/60 hover:border-primary/70 backdrop-blur-xl overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary-glow/0 to-primary/0 group-hover:from-primary/20 group-hover:via-primary-glow/20 group-hover:to-primary/20 transition-all duration-700" />
                      <span className="flex items-center space-x-2 lg:space-x-3 relative z-10">
                        <span className="relative">
                          Scarica il libro
                          <div className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-primary to-primary-glow group-hover:w-full transition-all duration-500" />
                        </span>
                        <BookOpen className="w-4 h-4 lg:w-5 lg:h-5 group-hover:rotate-12 transition-all duration-500 group-hover:text-white" />
                      </span>
                      <div className="absolute inset-0 -top-2 bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    </Button>
                  </a>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 via-primary-glow/30 to-primary/30 filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary/20 via-primary-glow/20 to-primary/20 filter blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-700 -z-20" />
                </div>
              </div>

              {/* Right book */}
              <div className={`flex-1 lg:flex-shrink-0 group transition-all duration-600 ease-out delay-400 transform ${
                visibleItems[2] 
                  ? "opacity-100 translate-x-0" 
                  : "opacity-0 translate-x-8"
              }`}
                style={{
                  transitionDelay: visibleItems[2] ? '400ms' : '0ms'
                }}
              >
                <div className="relative">
                  {/* Book container */}
                  <div className="w-full h-64 sm:h-80 lg:h-96 xl:h-[32rem] rounded-2xl overflow-hidden shadow-2xl border border-white/40 backdrop-blur-xl bg-gradient-to-br from-black/30 via-black/20 to-black/30 lg:hover:shadow-[0_0_40px_rgba(56,189,248,0.3)] transition-all duration-700 lg:hover:scale-105 flex items-center justify-center">
                    <img
                      src="/lovable-uploads/7a5a9505-672f-4d4e-b7c5-de56bbe2ebf5.png"
                      alt="Sales as a Service Book"
                      className="h-full w-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                    />
                  </div>

                  {/* Label: mobile=below book, desktop=floating above */}
                  <div
                    className={`
                      static sm:absolute
                      top-auto sm:-top-12
                      left-auto sm:left-1/2
                      translate-x-0 sm:-translate-x-1/2
                      mt-1 sm:mt-0
                      w-full sm:w-auto
                      flex sm:block justify-center
                      z-10
                      transition-all duration-300 ease-out
                      ${visibleItems[2] 
                        ? "opacity-100 translate-y-0" 
                        : "opacity-0 translate-y-4"
                      }
                    `}
                    style={{
                      transitionDelay: visibleItems[2] ? '250ms' : '0ms'
                    }}
                  >
                    <span className="inline-flex items-center px-4 sm:px-6 py-1.5 sm:py-2 bg-gradient-to-r from-primary/90 via-primary-glow/90 to-primary/90 text-white text-xs sm:text-sm font-bold rounded-full backdrop-blur-xl border border-white/40 shadow-xl whitespace-nowrap">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white mr-2 animate-pulse" />
                      Amazon Bestseller
                    </span>
                  </div>
                </div>
              </div>
              {/* /Right book */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookHeroSection;