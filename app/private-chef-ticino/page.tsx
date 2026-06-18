import type { Metadata } from "next";
import { AvailabilityBadge } from "../components/AvailabilityBadge";
import { SiteHeader } from "../components/SiteHeader";
import { HeroSection } from "../components/HeroSection";
import { InfoSection } from "../components/InfoSection";
import { ProposalsSection } from "../components/ProposalsSection";
import { MenuSection } from "../components/MenuSection";
import { ReviewsSection } from "../components/ReviewsSection";
import { BookingSection } from "../components/BookingSection";
import { Footer } from "../components/Footer";
import { ServedAreasSection } from "../components/ServedAreasSection";
import { FAQSection } from "../components/FAQSection";

export const metadata: Metadata = {
  title: "Private Chef a Domicilio in Ticino | Lugano, Locarno, Bellinzona — Lucas Table",
  description: "Luca Chiarappa, private chef a domicilio nel Canton Ticino. Menu degustazione di 6 portate da CHF 100 a persona per cene esclusive a Lugano, Locarno, Bellinzona, Ascona e Mendrisio.",
  keywords: "private chef ticino, private chef lugano, private chef locarno, private chef bellinzona, cuoco a domicilio ticino, cena privata lugano, chef privato lugano, private dining ticino, private chef svizzera, chef a domicilio lugano, cena romantica ticino, private chef ascona, chef privato ticino prezzi, menu degustazione lugano",
  alternates: {
    canonical: "https://lucastable.ch/private-chef-ticino",
  },
  openGraph: {
    title: "Private Chef a Domicilio in Ticino | Lugano, Locarno, Bellinzona — Lucas Table",
    description: "Menu degustazione di 6 portate da CHF 100. Luca Chiarappa porta il fine dining direttamente nella tua casa in tutto il Canton Ticino.",
    url: "https://lucastable.ch/private-chef-ticino",
    type: "website",
    locale: "it_CH",
  },
};

function TicinoContentSection() {
  const localFaqItems = [
    {
      question: "Quanto costa un private chef a Lugano o in Ticino?",
      answer: "I menu Lucas Table partono da CHF 100 a persona per il menu vegetariano, CHF 150 per il menu di carne e CHF 190 per il menu di pesce. Il prezzo comprende spesa degli ingredienti, preparazione di 6 portate, servizio al tavolo e riordino completo della cucina. Non ci sono costi aggiuntivi nascosti.",
    },
    {
      question: "Il servizio di private chef copre tutta la Svizzera italiana?",
      answer: "Sì. Lucas Table opera in tutto il Canton Ticino: Lugano e il Luganese, Locarno e il Locarnese, Ascona, Bellinzona e la Valle di Blenio, Mendrisio e il Mendrisiotto. Per zone periferiche o di confine, contatta Luca per verificare la disponibilità.",
    },
    {
      question: "Come si prenota un private chef a Lugano o in Ticino?",
      answer: "Compila il modulo di prenotazione su lucastable.ch oppure contatta Luca direttamente via WhatsApp (+41 76 242 17 54) o email (lucastablee@gmail.com). Luca risponde personalmente entro 24 ore per costruire insieme la serata perfetta.",
    },
  ];

  const localFaqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": localFaqItems.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <section className="relative overflow-hidden bg-ls-green-deep py-(--space-section)">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localFaqJsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <div className="mb-5 flex items-center justify-center gap-4">
          <span className="ls-rule" aria-hidden="true" />
          <span className="ls-label">Il servizio in Ticino</span>
          <span className="ls-rule" aria-hidden="true" />
        </div>

        <h2 className="mb-8 text-center">
          Private Chef nel Canton Ticino:{" "}
          <em className="ls-display italic text-ls-gold">l&apos;esperienza Lucas Table</em>
        </h2>

        <p className="prose-measure mx-auto mb-10 text-center text-ls-ivory">
          Il Canton Ticino è un territorio unico: la precisione e la qualità di vita svizzera si
          fondono con il calore e la tradizione gastronomica italiana. Per chi abita o trascorre le
          vacanze in questa regione e cerca un&apos;esperienza culinaria d&apos;eccellenza tra le
          mura di casa, <strong className="font-medium text-ls-ivory">Lucas Table</strong> è la risposta naturale.
        </p>

        <div className="space-y-10">
          <div>
            <h3 className="mb-3 text-ls-gold">Private Chef a Lugano</h3>
            <p className="text-[0.95rem] leading-relaxed text-ls-ivory-dim">
              Lugano è il cuore finanziario e culturale del Ticino, con una clientela cosmopolita
              e un&apos;aspirazione all&apos;eccellenza che si riflette in ogni aspetto della vita
              quotidiana. Una cena privata a Lugano con Luca Chiarappa significa portare in tavola
              gli stessi standard dei migliori ristoranti del lungolago, in un contesto intimo e
              personale. Dalla villa sul Ceresio all&apos;appartamento in centro, il servizio si
              adatta a ogni spazio e ogni occasione.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-ls-gold">Private Chef a Locarno e Ascona</h3>
            <p className="text-[0.95rem] leading-relaxed text-ls-ivory-dim">
              Il Locarnese, con le sue ville sul Lago Maggiore e la tradizione culturale del
              Festival del Film, attrae ogni anno ospiti internazionali che richiedono il massimo.
              Una cena privata tra le palme di Ascona o in una dimora storica di Locarno è
              l&apos;esperienza perfetta per chi non vuole rinunciare all&apos;alta cucina nella
              quiete della propria casa. Luca porta ingredienti freschi selezionati e un menu
              degustazione di sei portate che rispecchia la bellezza di questo territorio.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-ls-gold">Private Chef a Bellinzona e nel Mendrisiotto</h3>
            <p className="text-[0.95rem] leading-relaxed text-ls-ivory-dim">
              Dal capoluogo cantonale fino al confine con la Lombardia, Lucas Table copre
              l&apos;intero territorio ticinese. Bellinzona, con il suo fascino medievale e
              l&apos;atmosfera autentica, e il Mendrisiotto, porta d&apos;ingresso dell&apos;Italia,
              sono zone servite regolarmente per cene private, compleanni, anniversari ed eventi
              aziendali esclusivi.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-ls-gold">Perché scegliere un private chef in Ticino?</h3>
            <p className="text-[0.95rem] leading-relaxed text-ls-ivory-dim">
              Il Ticino offre uno stile di vita che premia la qualità sull&apos;ostentazione.
              Un private chef a domicilio si inserisce perfettamente in questa filosofia: nessun
              ristorante affollato, nessun viaggio, nessun conto da dividere. Solo tu, i tuoi
              ospiti e un menu degustazione di sei portate preparato con ingredienti freschi
              selezionati, presentato e servito direttamente nella tua cucina. Luca si occupa
              di tutto — dalla spesa al riordino — così puoi goderti la serata senza pensare
              a nulla.
            </p>
          </div>
        </div>

        {/* Location FAQ */}
        <div className="mt-14 rounded-[3px] border border-ls-line bg-ls-ivory/[0.02] px-6 py-8 sm:px-8">
          <h3 className="mb-6 text-center text-ls-ivory">Domande frequenti sul servizio in Ticino</h3>
          <div className="space-y-6">
            {localFaqItems.map((item) => (
              <div key={item.question} className="border-b border-ls-line pb-6 last:border-b-0 last:pb-0">
                <p className="mb-2 font-medium text-ls-ivory">{item.question}</p>
                <p className="text-[0.92rem] leading-relaxed text-ls-ivory-dim">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cross-link */}
        <p className="mt-10 text-center text-ls-ivory-dim">
          Cerchi il servizio in Italia?{" "}
          <a
            href="/private-chef-lombardia"
            className="text-ls-gold underline decoration-ls-gold/40 underline-offset-4 transition-colors hover:decoration-ls-gold"
          >
            Scopri il private chef in Lombardia
          </a>
        </p>
      </div>
    </section>
  );
}

export default function PrivateChefTicino() {
  const localJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://lucastable.ch/#business",
    "name": "Lucas Table — Private Chef a Domicilio in Ticino",
    "url": "https://lucastable.ch/private-chef-ticino",
    "description": "Luca Chiarappa, private chef a domicilio nel Canton Ticino. Menu degustazione di 6 portate da CHF 100 a persona per cene esclusive a Lugano, Locarno, Bellinzona, Ascona e Mendrisio.",
    "telephone": "+41762421754",
    "email": "lucastablee@gmail.com",
    "priceRange": "CHF 100–190",
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Canton Ticino",
      "containedInPlace": { "@type": "Country", "name": "Svizzera" },
      "containsPlace": [
        { "@type": "City", "name": "Lugano" },
        { "@type": "City", "name": "Locarno" },
        { "@type": "City", "name": "Bellinzona" },
        { "@type": "City", "name": "Mendrisio" },
        { "@type": "City", "name": "Ascona" }
      ]
    },
    "serviceType": "Private Chef a domicilio"
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://lucastable.ch"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Private Chef Ticino",
        "item": "https://lucastable.ch/private-chef-ticino"
      }
    ]
  };

  return (
    <div id="top" className="public-site relative min-h-screen bg-ls-green">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <SiteHeader />
      <AvailabilityBadge />
      <main>
        <HeroSection
          title="Private Chef a Domicilio"
          titleHighlight="in Ticino"
          description="Il lusso di una cena esclusiva nel comfort di casa tua. Dal Luganese al Locarnese, porto l'eccellenza della ristorazione direttamente nella tua sala da pranzo. Tu pensa solo a goderti la serata."
        />
        <TicinoContentSection />
        <InfoSection />
        <ProposalsSection />
        <MenuSection />
        <ReviewsSection />
        <ServedAreasSection />
        <FAQSection />
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
}
