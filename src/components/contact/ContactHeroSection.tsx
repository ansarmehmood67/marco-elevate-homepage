import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const ContactHeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80')"
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-sky-blue-600/20" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-white via-sky-blue-200 to-primary bg-clip-text text-transparent">
              Contattaci
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Rispondiamo entro 30 minuti. Il tuo successo nel sales è la nostra priorità assoluta.
          </p>
          
          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12 max-w-5xl mx-auto">
            <Card className="glass-card border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer">
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Chiamaci</h3>
                <p className="text-white/70 text-sm">+39 347 123 4567</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer">
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-white/70 text-sm">marco@salesexpert.it</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer">
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">WhatsApp</h3>
                <p className="text-white/70 text-sm">Chat immediata</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer">
              <CardContent className="p-6 text-center">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Ufficio</h3>
                <p className="text-white/70 text-sm">Milano, Italia</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="pt-8">
            <Button size="xl" className="glass-button">
              Parla con Marco Ora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHeroSection;