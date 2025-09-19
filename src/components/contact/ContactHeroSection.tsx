import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, MessageCircle, ArrowRight, Star } from "lucide-react";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const ContactHeroSection = () => {
  const { ref, visibleItems } = useStaggeredAnimation(6, 200);

  return (
    <section ref={ref} className="pt-32 sm:pt-36 lg:pt-28 pb-16 px-0 bg-black relative overflow-hidden min-h-screen">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="relative min-h-[85vh] lg:min-h-[90vh] rounded-3xl overflow-hidden border border-gray-800/30 shadow-2xl bg-black">
          {/* Background Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="https://res.cloudinary.com/dsergeqc9/video/upload/v1758129844/salesondemand_hero_mze6vo.mp4"
              type="video/mp4"
            />
          </video>
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/80" />
          
          {/* Bottom gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 to-transparent" />
          
          {/* Content - zoom-safe layout */}
          <div className="relative lg:absolute lg:inset-0 flex flex-col justify-center lg:justify-center p-4 sm:p-6 lg:p-12 z-20">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-8">
            {/* Content Section */}
            <div className="flex-1">
              <div className={`mb-6 flex items-center space-x-2 justify-center lg:justify-start ${
                visibleItems[0] 
                  ? "animate-swipe-in-left" 
                  : "opacity-0"
              }`}>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-white/90 font-medium text-sm lg:text-base">Rispondiamo entro 30 minuti</span>
              </div>
              
              <h1 className={`text-hero-title font-black leading-constrained-tight tracking-tight text-white mb-4 lg:mb-6 drop-shadow-2xl ${
                visibleItems[1] 
                  ? "animate-swipe-in-left" 
                  : "opacity-0"
              }`}>
                Contattaci
              </h1>
              <div className={`text-hero-subtitle text-white/95 font-bold tracking-wide mb-6 lg:mb-8 leading-constrained-normal ${
                visibleItems[2] 
                  ? "animate-swipe-in-left" 
                  : "opacity-0"
              }`}>
                iniziamo insieme
              </div>
              
              <p className={`text-hero-body text-gray-100 mb-6 lg:mb-8 font-light leading-constrained-relaxed ${
                visibleItems[3] 
                  ? "animate-fade-in-bottom" 
                  : "opacity-0"
              }`}>
                Il tuo successo nel sales è la nostra <span className="font-semibold text-blue-200">priorità assoluta</span>.
              </p>
              
              <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start ${
                visibleItems[4] 
                  ? "animate-scale-in" 
                  : "opacity-0"
              }`}>
                <Button className="group font-semibold px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 text-base sm:text-lg lg:text-xl rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white text-blue-900 hover:bg-blue-50 border-2 border-white/30">
                  <span className="flex items-center space-x-2">
                    <span>Parla con Marco ora</span>
                    <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </div>
            </div>

            {/* Contact Cards Section */}
            <div className={`w-full lg:w-auto flex-shrink-0 transform-gpu will-change-[transform,opacity] ${
              visibleItems[5] 
                ? "animate-swipe-in-right" 
                : "opacity-0"
            }`}>
              <div className="grid grid-cols-2 gap-4 lg:gap-5 w-full lg:w-[420px] xl:w-[480px]">
                <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:scale-105 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                  <CardContent className="p-5 lg:p-7 xl:p-8 text-center">
                    <Phone className="h-7 w-7 lg:h-9 lg:w-9 text-white mx-auto mb-3 lg:mb-4" />
                    <h3 className="text-white font-semibold mb-2 lg:mb-3 text-base lg:text-lg">Chiamaci</h3>
                    <p className="text-white/70 text-sm lg:text-base">+39 02 8295 9857</p>
                  </CardContent>
                </Card>
                
                {/* Email (wrap long address) */}
    <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:scale-105 hover:bg-white/20 transition-all duration-300 cursor-pointer">
      <CardContent className="p-5 lg:p-7 xl:p-8 text-center">
        <Mail className="h-7 w-7 lg:h-9 lg:w-9 text-white mx-auto mb-3 lg:mb-4" />
        <h3 className="text-white font-semibold mb-2 lg:mb-3 text-base lg:text-lg">Email</h3>
        <a
          href="mailto:info@salesondemand.it"
          className="text-white/70 text-sm lg:text-base leading-snug"
        >
          info@salesondemand.it
        </a>
      </CardContent>
    </Card>
                
                <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:scale-105 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                  <CardContent className="p-5 lg:p-7 xl:p-8 text-center">
                    <MessageCircle className="h-7 w-7 lg:h-9 lg:w-9 text-white mx-auto mb-3 lg:mb-4" />
                    <h3 className="text-white font-semibold mb-2 lg:mb-3 text-base lg:text-lg">WhatsApp</h3>
                    <p className="text-white/70 text-sm lg:text-base">Chat immediata</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:scale-105 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                  <CardContent className="p-5 lg:p-7 xl:p-8 text-center">
                    <MapPin className="h-7 w-7 lg:h-9 lg:w-9 text-white mx-auto mb-3 lg:mb-4" />
                    <h3 className="text-white font-semibold mb-2 lg:mb-3 text-base lg:text-lg">Ufficio</h3>
                    <p className="text-white/70 text-sm lg:text-base leading-tight">Via Monte di Pietà, 21<br/>20121 Milano MI</p>
                  </CardContent>
                </Card>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHeroSection;