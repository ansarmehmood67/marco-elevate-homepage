import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TermsOfService = () => {
  const pageTitle = "Termini di Servizio | Marco";
  const description =
    "Condizioni d’uso del sito e dei servizi: responsabilità, proprietà intellettuale, limitazioni e contatti di supporto.";
  const canonical = typeof window !== "undefined" ? `${window.location.origin}/termini-di-servizio` : "/termini-di-servizio";
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
      name: "Termini di Servizio",
      inLanguage: "it-IT",
      dateModified: updated,
      url: canonical,
      description,
    };

    let jsonLd = document.getElementById("ld-terms") as HTMLScriptElement | null;
    if (!jsonLd) {
      jsonLd = document.createElement("script") as HTMLScriptElement;
      jsonLd.id = "ld-terms";
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
          <h1 className="text-4xl md:text-5xl font-bold text-white">Termini di Servizio</h1>
          <p className="mt-4 text-white/80 max-w-3xl mx-auto">
            Le condizioni che regolano l’uso del sito e dei servizi offerti.
          </p>
          <p className="mt-2 text-white/60 text-sm">Ultimo aggiornamento: {updated}</p>
        </div>
      </header>

      <main className="relative z-10">
        <section className="max-w-5xl mx-auto px-6 py-12 space-y-8">
          <Card className="glass-card animate-fade-in">
            <CardHeader>
              <CardTitle>1. Accettazione dei Termini</CardTitle>
            </CardHeader>
            <CardContent className="text-white/80">
              Utilizzando questo sito accetti i presenti Termini e qualsiasi condizione specifica dei servizi acquistati.
              Se non accetti, ti invitiamo a non usare il sito.
            </CardContent>
          </Card>

          <Card className="glass-card animate-fade-in">
            <CardHeader>
              <CardTitle>2. Uso del sito</CardTitle>
            </CardHeader>
            <CardContent className="text-white/80 space-y-2">
              <ul className="list-disc pl-6 space-y-2">
                <li>Non sono consentite attività illecite, diffamatorie o che possano danneggiare terzi.</li>
                <li>È vietato interferire con la sicurezza o l’integrità del sito.</li>
                <li>Le informazioni fornite devono essere accurate e aggiornate.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="glass-card animate-fade-in">
            <CardHeader>
              <CardTitle>3. Proprietà intellettuale</CardTitle>
            </CardHeader>
            <CardContent className="text-white/80">
              I contenuti del sito (testi, marchi, grafiche) sono di proprietà del rispettivo titolare e protetti dalle
              leggi sul diritto d’autore. È vietata la riproduzione non autorizzata.
            </CardContent>
          </Card>

          <Card className="glass-card animate-fade-in">
            <CardHeader>
              <CardTitle>4. Limitazione di responsabilità</CardTitle>
            </CardHeader>
            <CardContent className="text-white/80">
              Il sito è fornito "così com’è". Non garantiamo l’assenza di errori o interruzioni. Nei limiti consentiti
              dalla legge, non siamo responsabili per danni indiretti o consequenziali derivanti dall’uso del sito.
            </CardContent>
          </Card>

          <Card className="glass-card animate-fade-in">
            <CardHeader>
              <CardTitle>5. Servizi e pagamenti</CardTitle>
            </CardHeader>
            <CardContent className="text-white/80">
              I servizi, quando acquistati, sono erogati secondo le condizioni pattuite nel relativo accordo commerciale.
              Eventuali prezzi, promozioni o descrizioni possono variare senza preavviso.
            </CardContent>
          </Card>

          <Card className="glass-card animate-fade-in">
            <CardHeader>
              <CardTitle>6. Legge applicabile e foro competente</CardTitle>
            </CardHeader>
            <CardContent className="text-white/80">
              I presenti Termini sono regolati dalla legge italiana. Per ogni controversia è competente il Foro di Milano,
              salvo diversa previsione inderogabile di legge.
            </CardContent>
          </Card>

          <Card className="glass-card animate-fade-in">
            <CardHeader>
              <CardTitle>7. Contatti</CardTitle>
            </CardHeader>
            <CardContent className="text-white/80">
              Per informazioni o segnalazioni scrivi a <a className="text-primary underline" href="mailto:info@marco.it">info@marco.it</a>.
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
