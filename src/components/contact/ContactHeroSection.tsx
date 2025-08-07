import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, MessageCircle, ArrowRight, Star } from "lucide-react";

const ContactHeroSection = () => {
  return (
    <section className="pt-20 pb-2 px-0 bg-black">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="relative min-h-[85vh] rounded-3xl overflow-hidden border border-gray-800/30 shadow-2xl bg-black">
          {/* Background Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="https://res.cloudinary.com/dufcnrcfe/video/upload/v1752757859/salesondemand_2_c3el1b.mp4"
              type="video/mp4"
            />
          </video>
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/80" />
          
          {/* Bottom gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 to-transparent" />
          
          {/* Content positioned at bottom left */}
          <div className="absolute bottom-12 left-12 max-w-2xl z-20">
            <div className="mb-6 flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-white/90 font-medium">Rispondiamo entro 30 minuti</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8 text-white drop-shadow-2xl">
              Contattaci
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-100 mb-8 font-light leading-relaxed max-w-2xl">
              Il tuo successo nel sales è la nostra <span className="font-semibold text-blue-200">priorità assoluta</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="group font-semibold px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white text-blue-900 hover:bg-blue-50 border-2 border-white/30">
                <span className="flex items-center space-x-2">
                  <span>Parla con Marco ora</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </div>
          </div>

          {/* Contact Cards - Bottom Right */}
          <div className="absolute bottom-12 right-12 z-20">
            <div className="grid grid-cols-2 gap-4 w-80">
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:scale-105 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Phone className="h-8 w-8 text-white mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Chiamaci</h3>
                  <p className="text-white/70 text-sm">+39 347 123 4567</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:scale-105 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 text-white mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-white/70 text-sm">marco@salesexpert.it</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:scale-105 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <MessageCircle className="h-8 w-8 text-white mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">WhatsApp</h3>
                  <p className="text-white/70 text-sm">Chat immediata</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:scale-105 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <MapPin className="h-8 w-8 text-white mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Ufficio</h3>
                  <p className="text-white/70 text-sm">Milano, Italia</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHeroSection;