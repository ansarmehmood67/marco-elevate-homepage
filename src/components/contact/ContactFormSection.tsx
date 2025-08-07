import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { ChevronRight, ChevronLeft, CheckCircle } from "lucide-react";

const ContactFormSection = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    contactReason: "",
    name: "",
    email: "",
    company: "",
    phone: "",
    companySize: "",
    currentChallenges: "",
    projectBudget: "",
    timeline: "",
    preferredContactTime: "",
    additionalNotes: ""
  });

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="contactReason" className="text-white text-lg mb-4 block">
                Qual è il motivo principale del tuo contatto?
              </Label>
              <Select onValueChange={(value) => setFormData({...formData, contactReason: value})}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Seleziona il motivo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sales-team">Potenziare il team di vendita</SelectItem>
                  <SelectItem value="sales-process">Ottimizzare il processo di vendita</SelectItem>
                  <SelectItem value="lead-generation">Migliorare la lead generation</SelectItem>
                  <SelectItem value="crm-setup">Implementare/ottimizzare CRM</SelectItem>
                  <SelectItem value="sales-training">Formazione commerciale</SelectItem>
                  <SelectItem value="consultation">Consulenza strategica</SelectItem>
                  <SelectItem value="other">Altro</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name" className="text-white">Nome e Cognome</Label>
                <Input 
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  placeholder="Il tuo nome completo"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-white">Email</Label>
                <Input 
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  placeholder="la-tua-email@esempio.com"
                />
              </div>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="company" className="text-white">Nome Azienda</Label>
                <Input 
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  placeholder="La tua azienda"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-white">Telefono</Label>
                <Input 
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  placeholder="+39 xxx xxx xxxx"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="companySize" className="text-white text-lg mb-4 block">
                Dimensione dell'azienda
              </Label>
              <Select onValueChange={(value) => setFormData({...formData, companySize: value})}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Seleziona la dimensione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-10">1-10 dipendenti</SelectItem>
                  <SelectItem value="11-50">11-50 dipendenti</SelectItem>
                  <SelectItem value="51-200">51-200 dipendenti</SelectItem>
                  <SelectItem value="201-1000">201-1000 dipendenti</SelectItem>
                  <SelectItem value="1000+">1000+ dipendenti</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="currentChallenges" className="text-white text-lg mb-4 block">
                Quali sono le tue sfide principali nel sales?
              </Label>
              <Textarea 
                id="currentChallenges"
                value={formData.currentChallenges}
                onChange={(e) => setFormData({...formData, currentChallenges: e.target.value})}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-[120px]"
                placeholder="Descrivi le principali difficoltà che stai affrontando..."
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="projectBudget" className="text-white">Budget del Progetto</Label>
                <Select onValueChange={(value) => setFormData({...formData, projectBudget: value})}>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Seleziona il budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-5k">Sotto 5.000€</SelectItem>
                    <SelectItem value="5k-15k">5.000€ - 15.000€</SelectItem>
                    <SelectItem value="15k-50k">15.000€ - 50.000€</SelectItem>
                    <SelectItem value="50k-100k">50.000€ - 100.000€</SelectItem>
                    <SelectItem value="over-100k">Oltre 100.000€</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="timeline" className="text-white">Timeline del Progetto</Label>
                <Select onValueChange={(value) => setFormData({...formData, timeline: value})}>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Quando iniziare" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asap">Il prima possibile</SelectItem>
                    <SelectItem value="1-month">Entro 1 mese</SelectItem>
                    <SelectItem value="3-months">Entro 3 mesi</SelectItem>
                    <SelectItem value="6-months">Entro 6 mesi</SelectItem>
                    <SelectItem value="planning">Sto solo pianificando</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="preferredContactTime" className="text-white text-lg mb-4 block">
                Quando preferisci essere contattato?
              </Label>
              <Select onValueChange={(value) => setFormData({...formData, preferredContactTime: value})}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Seleziona l'orario preferito" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">Mattina (9:00-12:00)</SelectItem>
                  <SelectItem value="afternoon">Pomeriggio (14:00-17:00)</SelectItem>
                  <SelectItem value="evening">Sera (17:00-19:00)</SelectItem>
                  <SelectItem value="anytime">Qualsiasi momento</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="additionalNotes" className="text-white">Note Aggiuntive</Label>
              <Textarea 
                id="additionalNotes"
                value={formData.additionalNotes}
                onChange={(e) => setFormData({...formData, additionalNotes: e.target.value})}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-[120px]"
                placeholder="Qualcosa di specifico che vorresti discutere..."
              />
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <section className="py-24 bg-black">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-sky-blue-400 bg-clip-text text-transparent">
              Racconta il Tuo Progetto
            </span>
          </h2>
          <p className="text-xl text-white/80">
            Aiutaci a capire le tue esigenze per offrirti la soluzione più adatta
          </p>
        </div>

        <Card className="glass-card max-w-3xl mx-auto">
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <CardTitle className="text-2xl text-white">
                Step {currentStep} di {totalSteps}
              </CardTitle>
              <span className="text-primary font-semibold">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="w-full" />
          </CardHeader>
          
          <CardContent className="space-y-8">
            {renderStep()}
            
            <div className="flex justify-between pt-6">
              <Button 
                variant="outline" 
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className="border-white/20 text-white hover:bg-white/10"
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Indietro
              </Button>
              
              {currentStep === totalSteps ? (
                <Button 
                  onClick={handleSubmit}
                  size="lg"
                  className="bg-gradient-to-r from-primary to-sky-blue-400 hover:from-primary/80 hover:to-sky-blue-400/80"
                >
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Invia Richiesta
                </Button>
              ) : (
                <Button 
                  onClick={handleNext}
                  size="lg"
                  className="bg-gradient-to-r from-primary to-sky-blue-400 hover:from-primary/80 hover:to-sky-blue-400/80"
                >
                  Avanti
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactFormSection;