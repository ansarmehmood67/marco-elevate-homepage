import React from "react";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SEOHead from "@/components/SEO/SEOHead";
import { seoPages } from "@/utils/seoData";

const CookiePolicy = () => {
  const pageTitle = "Cookie Policy | Marco";
  const description =
    "Informativa sui cookie: cosa sono, quali utilizziamo, finalità e come gestire le preferenze direttamente dal browser.";
  const canonical = typeof window !== "undefined" ? `${window.location.origin}/cookie-policy` : "/cookie-policy";
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
      name: "Cookie Policy",
      inLanguage: "it-IT",
      dateModified: updated,
      url: canonical,
      description,
    };

    let jsonLd = document.getElementById("ld-cookie") as HTMLScriptElement | null;
    if (!jsonLd) {
      jsonLd = document.createElement("script") as HTMLScriptElement;
      jsonLd.id = "ld-cookie";
      jsonLd.type = "application/ld+json";
      document.head.appendChild(jsonLd);
    }
    jsonLd.textContent = JSON.stringify(ld);
  }, []);

  return (
    <>
      <SEOHead data={seoPages.cookiePolicy} />
      <div className="min-h-screen bg-background">
        <Navigation />

      <header className="relative overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-40">
          <div className="floating-light w-80 h-80 -top-10 -left-10" />
          <div className="floating-light w-96 h-96 bottom-0 right-0" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
          <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">Legale</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Cookie Policy</h1>
          <p className="mt-4 text-white/80 max-w-3xl mx-auto">
            Informazioni sui cookie utilizzati dal sito e su come puoi gestirli.
          </p>
          <p className="mt-2 text-white/60 text-sm">Ultimo aggiornamento: {updated}</p>
        </div>
      </header>

      <main className="relative z-10">
        <section className="max-w-5xl mx-auto px-6 py-12 space-y-8">
          <Card className="glass-card animate-fade-in">
            <CardHeader>
              <CardTitle>1. Cosa sono i cookie</CardTitle>
            </CardHeader>
            <CardContent className="text-white/80">
              I cookie sono piccoli file di testo che i siti inviano al tuo dispositivo per memorizzare informazioni e
              migliorare l’esperienza di navigazione.
            </CardContent>
          </Card>

          <Card className="glass-card animate-fade-in">
            <CardHeader>
              <CardTitle>2. Tipologie di cookie utilizzati</CardTitle>
            </CardHeader>
            <CardContent className="text-white/80 space-y-2">
              <ul className="list-disc pl-6 space-y-2">
                <li><span className="font-semibold">Tecnici</span>: necessari al funzionamento del sito (es. sessione, preferenze).</li>
                <li><span className="font-semibold">Analitici</span>: ci aiutano a capire come viene utilizzato il sito (in forma aggregata).</li>
                <li><span className="font-semibold">Profilazione/Marketing</span>: utilizzati per mostrarti contenuti pertinenti (solo previo consenso).</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="glass-card animate-fade-in">
            <CardHeader>
              <CardTitle>3. Gestione delle preferenze</CardTitle>
            </CardHeader>
            <CardContent className="text-white/80 space-y-2">
              <p>
                Puoi gestire o disattivare i cookie dalle impostazioni del tuo browser. Di seguito alcuni link utili:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><a className="text-primary underline" href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noreferrer">Chrome</a></li>
                <li><a className="text-primary underline" href="https://support.mozilla.org/it/kb/Eliminare%20i%20cookie" target="_blank" rel="noreferrer">Firefox</a></li>
                <li><a className="text-primary underline" href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noreferrer">Safari</a></li>
                <li><a className="text-primary underline" href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noreferrer">Edge</a></li>
              </ul>
            </CardContent>
          </Card>

          <Card className="glass-card animate-fade-in">
            <CardHeader>
              <CardTitle>4. Aggiornamenti</CardTitle>
            </CardHeader>
            <CardContent className="text-white/80">
              Potremmo aggiornare questa Cookie Policy per riflettere modifiche normative o tecniche. Ti invitiamo a
              consultarla periodicamente.
            </CardContent>
          </Card>
        </section>
      </main>

        <Footer />
      </div>
    </>
  );
};

export default CookiePolicy;
