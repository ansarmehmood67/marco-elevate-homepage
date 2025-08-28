import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useCinematicSequence, ANIMATION_PRESETS } from "@/hooks/useCinematicAnimation";

const HeroSection = () => {
  const { ref, visibleItems, getAnimationClasses } = useCinematicSequence(ANIMATION_PRESETS.heroSequence);

  return (
    <section className="pt-24 sm:pt-28 lg:pt-24 pb-8 px-0 bg-black relative overflow-hidden">
      {/* Clean background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-black to-gray-900/40" />
      
      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        {/* NOTE: let height be auto on mobile; only enforce min-h on lg */}
        <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-black/40 backdrop-blur-md lg:min-h-[80vh]">
          {/* Background Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          >
            <source
              src="https://res.cloudinary.com/dufcnrcfe/video/upload/v1755354320/outsourcing_salesforce_3_nvc1rd.mp4"
              type="video/mp4"
            />
          </video>

          {/* Clean overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/75" />

          {/* Content */}
          <div
            ref={ref}
            className="relative lg:absolute lg:inset-0 flex flex-col justify-center lg:justify-end p-4 sm:p-6 lg:p-12 pt-6 sm:pt-10 lg:pt-24 pb-10 sm:pb-12 lg:pb-12 z-20"
          >
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 sm:gap-6 lg:gap-8">
              {/* Left copy */}
              <div className="flex-1 max-w-5xl">
                {/* Clean heading */}
                <div className={getAnimationClasses(0, ANIMATION_PRESETS.heroSequence[0])}>
                  <h1 className="text-6xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white mb-8 sm:mb-10 text-center lg:text-left">
                    Il tuo reparto vendite e marketing{" "}
                    <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                      on-demand
                    </span>
                  </h1>
                </div>
                
                {/* Subheading */}
                <div className={getAnimationClasses(1, ANIMATION_PRESETS.heroSequence[1])}>
                  <div className="text-2xl sm:text-3xl lg:text-4xl text-white/95 font-semibold mb-6 text-center lg:text-left">
                    cresci senza pensieri
                  </div>
                </div>

                {/* Description */}
                <div className={getAnimationClasses(2, ANIMATION_PRESETS.heroSequence[2])}>
                  <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed mb-6 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
                    Un'unica squadra dedicata che prende in mano i tuoi{" "}
                    <span className="text-primary font-medium">funnel B2B</span>,
                    ottimizza performance e libera il tuo tempo.
                  </p>
                </div>

                {/* CTA */}
                <div className={`mb-8 sm:mb-0 flex justify-center lg:justify-start ${getAnimationClasses(3, ANIMATION_PRESETS.heroSequence[3])}`}>
                  <Button size="lg" className="bg-white text-black hover:bg-white/90 font-semibold">
                    Prenota consulenza
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>

              {/* Right video */}
              <div className="w-full lg:w-80 lg:flex-shrink-0 mt-8 lg:mt-0">
                <div className="relative">
                  <div className="w-full h-48 rounded-xl overflow-hidden shadow-lg border border-white/20">
                    <iframe
                      src="https://www.youtube.com/embed/ZocHP6N9Aig"
                      title="Demo Video"
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="mt-2 text-center">
                    <span className="inline-flex items-center px-3 py-1 bg-primary/90 text-white text-xs font-medium rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-white mr-2" />
                      Sales on Demand in 30'
                    </span>
                  </div>
                </div>
              </div>
              {/* /Right video */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;