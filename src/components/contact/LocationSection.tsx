import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, Calendar, Car, Train } from "lucide-react";

const LocationSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
            Dove Trovarci
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-sky-blue-400 bg-clip-text text-transparent">
              La Nostra Sede
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Incontri di persona, meeting online o chiamate telefoniche. Scegli la modalità che preferisci.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Location Info */}
          <div className="space-y-8">
            <Card className="border shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900 flex items-center">
                  <MapPin className="h-6 w-6 mr-3 text-primary" />
                  Sede Principale
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-slate-900 font-semibold mb-2">Indirizzo</h4>
                    <p className="text-slate-600">
                      Via Giuseppe Mazzini, 15<br />
                      20123 Milano (MI)<br />
                      Italia
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-slate-900 font-semibold mb-2 flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-primary" />
                        Telefono
                      </h4>
                      <p className="text-slate-600">+39 347 123 4567</p>
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-semibold mb-2 flex items-center">
                        <Mail className="h-4 w-4 mr-2 text-primary" />
                        Email
                      </h4>
                      <p className="text-slate-600">marco@salesexpert.it</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card className="border shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-slate-900 flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-primary" />
                  Orari di Ufficio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Lunedì - Venerdì</span>
                    <span className="text-slate-900 font-semibold">9:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Sabato</span>
                    <span className="text-slate-900 font-semibold">9:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Domenica</span>
                    <span className="text-slate-500">Chiuso</span>
                  </div>
                  <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
                    <p className="text-sm text-primary">
                      💡 Disponibili per emergenze anche fuori orario
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Transport Info */}
            <Card className="border shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-slate-900">Come Raggiungerci</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Train className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="text-slate-900 font-semibold">Metro</h4>
                    <p className="text-slate-600">Fermata Duomo (M1-M3) - 3 min a piedi</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Car className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="text-slate-900 font-semibold">Parcheggio</h4>
                    <p className="text-slate-600">Garage San Babila - 200m dall'ufficio</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Meeting Options */}
          <div className="space-y-8">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center">
                  <Calendar className="h-6 w-6 mr-3 text-primary" />
                  Modalità di Incontro
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                
                {/* In-Person Meeting */}
                <div className="p-6 border border-slate-200 rounded-lg bg-slate-50">
                  <h4 className="text-slate-900 font-semibold text-lg mb-3">
                    🏢 Incontro in Ufficio
                  </h4>
                  <p className="text-slate-600 mb-4">
                    Vieni a trovarci nella nostra sede milanese per una consulenza faccia a faccia
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600 mb-4">
                    <li>• Ambiente professionale e riservato</li>
                    <li>• Analisi documenti in tempo reale</li>
                    <li>• Caffè e refreshment inclusi</li>
                    <li>• Parcheggio convenzionato disponibile</li>
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-primary to-sky-blue-400">
                    Prenota Incontro in Sede
                  </Button>
                </div>

                {/* Video Call */}
                <div className="p-6 border border-slate-200 rounded-lg bg-slate-50">
                  <h4 className="text-slate-900 font-semibold text-lg mb-3">
                    💻 Video Chiamata
                  </h4>
                  <p className="text-slate-600 mb-4">
                    Meeting online tramite Google Meet, Zoom o Microsoft Teams
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600 mb-4">
                    <li>• Condivisione schermo per presentazioni</li>
                    <li>• Registrazione disponibile su richiesta</li>
                    <li>• Nessun limite geografico</li>
                    <li>• Flessibilità di orario</li>
                  </ul>
                  <Button variant="outline" className="w-full border-slate-300 text-slate-900 hover:bg-slate-100">
                    Prenota Video Call
                  </Button>
                </div>

                {/* Phone Call */}
                <div className="p-6 border border-slate-200 rounded-lg bg-slate-50">
                  <h4 className="text-slate-900 font-semibold text-lg mb-3">
                    📞 Chiamata Telefonica
                  </h4>
                  <p className="text-slate-600 mb-4">
                    Consulenza telefonica per discussioni rapide e concrete
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600 mb-4">
                    <li>• Perfetta per prime consulenze</li>
                    <li>• Risposta immediata ai tuoi dubbi</li>
                    <li>• Senza vincoli di tecnologia</li>
                    <li>• Follow-up via email incluso</li>
                  </ul>
                  <Button variant="outline" className="w-full border-slate-300 text-slate-900 hover:bg-slate-100">
                    Richiedi Chiamata
                  </Button>
                </div>

              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="border border-red-200 shadow-lg">
              <CardContent className="p-6 text-center">
                <h4 className="text-slate-900 font-semibold text-lg mb-3">
                  🚨 Contatto di Emergenza
                </h4>
                <p className="text-slate-600 mb-4">
                  Per situazioni urgenti che richiedono intervento immediato
                </p>
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  Emergenza Sales: +39 333 444 5555
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;