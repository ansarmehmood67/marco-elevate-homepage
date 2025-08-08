import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrivacyPolicy = () => {
  const pageTitle = "Privacy Policy | Marco";
  const description =
    "Informativa Privacy GDPR: dati raccolti, finalità, basi giuridiche, tempi di conservazione e diritti dell’utente.";
  const canonical = typeof window !== "undefined" ? `${window.location.origin}/privacy-policy` : "/privacy-policy";
  const updated = new Date().toISOString().split("T")[0];

  useEffect(() => {
    document.title = pageTitle;
    const metaDesc = document.querySelector('meta[name="description"]') || document.createElement("meta");
    metaDesc.setAttribute("name", "description");
    metaDesc.setAttribute("content", description);
    document.head.appendChild(metaDesc);

    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonical);

    const ld: Record<string, any> = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Privacy Policy",
      inLanguage: "it-IT",
      dateModified: updated,
      url: canonical,
      description,
    };

    let jsonLd = document.getElementById("ld-privacy") as HTMLScriptElement | null;
    if (!jsonLd) {
      jsonLd = document.createElement("script") as HTMLScriptElement;
      jsonLd.id = "ld-privacy";
      jsonLd.type = "application/ld+json";
      document.head.appendChild(jsonLd);
    }
    jsonLd.textContent = JSON.stringify(ld);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <header className="relative overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-40">
          <div className="floating-light w-80 h-80 -top-10 -left-10" />
          <div className="floating-light w-96 h-96 bottom-0 right-0" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
          <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">Legale</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Privacy Policy</h1>
          <p className="mt-4 text-white/80 max-w-3xl mx-auto">
            Come trattiamo i tuoi dati personali nel rispetto del Regolamento (UE) 2016/679 (GDPR).
          </p>
          <p className="mt-2 text-white/60 text-sm">Ultimo aggiornamento: {updated}</p>
        </div>
      </header>

      <main className="relative z-10">
        <section className="max-w-5xl mx-auto px-6 py-12 space-y-8">
          <Card className="glass-card animate-fade-in">
            <CardHeader>
              <CardTitle>1. Titolare del trattamento</CardTitle>
            </CardHeader>
            <CardContent className="text-white/80 space-y-2">
              <p>
                Il Titolare del trattamento è Marco ("noi"), con sede a Milano, Italia. Per ogni richiesta relativa alla
                privacy puoi scrivere a <a className="text-primary underline" href="mailto:info@marco.it">info@marco.it</a>.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card animate-fade-in">
            <CardHeader>
              <CardTitle>2. Dati personali trattati</CardTitle>
            </CardHeader>
            <CardContent className="text-white/80">
              <ul className="list-disc pl-6 space-y-2">
                <li>Dati identificativi e di contatto (nome, email, telefono).</li>
                <li>Dati di navigazione e utilizzo del sito (cookie tecnici e, previo consenso, analitici/marketing).</li>
                <li>Contenuti inviati tramite form (messaggi, preferenze, richieste commerciali).</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="glass-card animate-fade-in">
            <CardHeader>
              <CardTitle>3. Finalità e basi giuridiche</CardTitle>
            </CardHeader>
            <CardContent className="text-white/80 space-y-3">
              <p>
                Trattiamo i tuoi dati per: (a) rispondere alle richieste inviate dai form; (b) erogare servizi richiesti;
                (c) inviare comunicazioni promozionali solo con il tuo consenso; (d) migliorare il sito e le performance;
                (e) adempiere a obblighi legali.
              </p>
              <p>Le basi giuridiche sono l’esecuzione di misure precontrattuali/contratto, il consenso e il legittimo interesse.</p>
            </CardContent>
          </Card>

          <Card className="glass-card animate-fade-in">
            <CardHeader>
              <CardTitle>4. Conservazione dei dati</CardTitle>
            </CardHeader>
            <CardContent className="text-white/80">
              <p>
                Conserveremo i dati per il tempo strettamente necessario alle finalità indicate e, ove applicabile,
                secondo i termini previsti dalla legge. I dati trattati con consenso per finalità marketing
                saranno conservati fino a revoca.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card animate-fade-in">
            <CardHeader>
              <CardTitle>5. Destinatari e trasferimenti</CardTitle>
            </CardHeader>
            <CardContent className="text-white/80 space-y-3">
              <p>
                I dati possono essere comunicati a fornitori che ci supportano (es. hosting, CRM, email marketing) nominati
                Responsabili ai sensi dell’art. 28 GDPR. Non trasferiamo dati al di fuori dello SEE salvo adeguate garanzie.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card animate-fade-in">
            <CardHeader>
              <CardTitle>6. Diritti dell’interessato</CardTitle>
            </CardHeader>
            <CardContent className="text-white/80">
              <ul className="list-disc pl-6 space-y-2">
                <li>Accesso, rettifica, cancellazione, limitazione e portabilità dei dati.</li>
                <li>Opposizione al trattamento basato su legittimo interesse.</li>
                <li>Revoca del consenso in qualsiasi momento senza pregiudicare la liceità del trattamento.</li>
                <li>Reclamo all’Autorità Garante per la protezione dei dati personali.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="glass-card animate-fade-in">
            <CardHeader>
              <CardTitle>7. Cookie</CardTitle>
            </CardHeader>
            <CardContent className="text-white/80">
              <p>
                Utilizziamo cookie tecnici necessari al funzionamento del sito e, previo consenso, cookie analitici e di
                profilazione. Maggiori dettagli nella <a className="text-primary underline" href="/cookie-policy">Cookie Policy</a>.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
