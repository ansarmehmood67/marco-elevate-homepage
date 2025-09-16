import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MessageCircle, Calendar, Video, Clock } from "lucide-react";

const ContactMethodsSection = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Consulenza Telefonica",
      description: "Chiamata diretta con Marco per discutere le tue esigenze di vendita",
      features: ["Risposta immediata", "Consulenza gratuita 15 min", "Disponibile 9-19"],
      action: "Chiama Ora",
      highlight: "Più Popolare"
    },
    {
      icon: Video,
      title: "Video Consulenza",
      description: "Meeting online personalizzato per analizzare la tua situazione",
      features: ["Screen sharing", "Registrazione disponibile", "60 minuti dedicati"],
      action: "Prenota Chiamata"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Business",
      description: "Chat diretta per domande rapide e aggiornamenti in tempo reale",
      features: ["Risposta entro 10 min", "Condivisione documenti", "24/7 disponibile"],
      action: "Apri WhatsApp"
    },
    {
      icon: Mail,
      title: "Email Dettagliata",
      description: "Per richieste complesse che richiedono analisi approfondita",
      features: ["Analisi dettagliata", "Proposta personalizzata", "Risposta entro 2h"],
      action: "Scrivi Email"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#2E8BC0]/10 to-[#87CEEB]/10 rounded-full border border-[#2E8BC0]/20 backdrop-blur-sm mb-6">
            <Phone className="w-4 h-4 text-[#2E8BC0]" />
            <span className="text-[#2E8BC0] font-semibold text-sm">Metodi di contatto</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            Scegli Come Contattarci
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ogni metodo è progettato per offrirti il massimo valore e la risposta più rapida possibile
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactMethods.map((method, index) => (
            <Card key={index} className="border shadow-lg relative overflow-hidden group hover:scale-105 transition-all duration-300">
              {method.highlight && (
                <div className="absolute top-4 right-4 bg-primary text-white text-xs px-3 py-1 rounded-full font-semibold">
                  {method.highlight}
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <method.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">{method.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="text-center space-y-6">
                <p className="text-slate-600">{method.description}</p>
                
                <div className="space-y-3">
                  {method.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm text-slate-600">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/80 hover:to-primary/60 transition-all duration-300"
                  size="lg"
                >
                  {method.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Response Time Guarantee */}
        <div className="mt-16 text-center">
          <Card className="border shadow-lg max-w-2xl mx-auto">
            <CardContent className="p-8">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Garanzia di Risposta</h3>
              <p className="text-slate-600 mb-6">
                Ci impegniamo a rispondere entro 30 minuti durante l'orario lavorativo 
                e entro 2 ore negli altri momenti
              </p>
              <div className="flex justify-center items-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">30min</div>
                  <div className="text-sm text-slate-600">Orario Lavorativo</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">2h</div>
                  <div className="text-sm text-slate-600">Fuori Orario</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactMethodsSection;