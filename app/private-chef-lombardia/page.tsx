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
  title: "Private Chef a Domicilio in Lombardia | Milano, Como, Varese — Lucas Table",
  description: "Luca Chiarappa, private chef a domicilio in Lombardia. Menu degustazione di 6 portate per cene private ed eventi esclusivi a Milano, Como, Varese, Monza e Lecco.",
  keywords: "private chef lombardia, private chef milano, private chef como, private chef lago di como, cuoco a domicilio milano, cena privata milano, chef privato milano, private dining milano, chef a domicilio como, cena romantica lombardia, private chef varese, private chef brianza, private chef monza, menu degustazione milano, fine dining a domicilio lombardia",
  alternates: {
    canonical: "https://lucastable.ch/private-chef-lombardia",
  },
  openGraph: {
    title: "Private Chef a Domicilio in Lombardia | Milano, Como, Varese — Lucas Table",
    description: "Menu degustazione di 6 portate per cene private ed eventi esclusivi a Milano, Como e in tutta la Lombardia. Luca Chiarappa porta il fine dining a casa tua.",
    url: "https://lucastable.ch/private-chef-lombardia",
    type: "website",
    locale: "it_IT",
  },
};

function LombardiaContentSection() {
  const localFaqItems = [
    {
      question: "Quanto costa un private chef a Milano o in Lombardia?",
      answer: "I menu Lucas Table partono da CHF 100 a persona per il menu vegetariano, CHF 150 per il menu di carne e CHF 190 per il menu di pesce (equivalenti in euro al cambio corrente). Il prezzo include la spesa degli ingredienti, la preparazione di 6 portate, il servizio al tavolo e il riordino completo della cucina.",
    },
    {
      question: "Il servizio di private chef copre tutta la Lombardia?",
      answer: "Lucas Table opera regolarmente a Milano e hinterland, Como e il Lago di Como, Varese, Monza, Brianza e Lecco. Per zone più distanti o fuori provincia, contatta Luca per verificare la disponibilità e concordare eventuali costi di trasferta.",
    },
    {
      question: "È possibile organizzare eventi aziendali privati in Lombardia?",
      answer: "Sì. Oltre alle cene romantiche e ai dinner party tra amici, Lucas Table è disponibile per eventi aziendali informali, team dinner esclusivi e occasioni di rappresentanza. Il menu «Su misura» è pensato esattamente per queste situazioni: da 2 fino a 20 ospiti, con menu e allestimento concordati in anticipo.",
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
          <span className="ls-label">Il servizio in Lombardia</span>
          <span className="ls-rule" aria-hidden="true" />
        </div>

        <h2 className="mb-8 text-center">
          Private Chef a Domicilio in Lombardia:{" "}
          <em className="ls-display italic text-ls-gold">l&apos;esperienza Lucas Table</em>
        </h2>

        <p className="prose-measure mx-auto mb-10 text-center text-ls-ivory">
          La Lombardia è la regione più dinamica d&apos;Italia, con Milano come capitale mondiale
          del design, della moda e dell&apos;alta cucina. Eppure, il vero lusso si è spostato
          all&apos;interno delle mura di casa:{" "}
          <strong className="font-medium text-ls-ivory">Lucas Table</strong> porta
          l&apos;esperienza dei ristoranti stellati direttamente nella tua sala da pranzo, con un
          servizio completo che non lascia nulla al caso.
        </p>

        <div className="space-y-10">
          <div>
            <h3 className="mb-3 text-ls-gold">Private Chef a Milano</h3>
            <p className="text-[0.95rem] leading-relaxed text-ls-ivory-dim">
              A Milano, dove le cene di lavoro e gli eventi sociali sono parte integrante della
              vita professionale e privata, avere un private chef a disposizione è diventato uno
              status symbol di nuova generazione. Luca Chiarappa lavora in appartamenti, loft e
              ville dei quartieri più esclusivi della città — da Brera ai Navigli, da Porta Venezia
              a CityLife — portando in tavola la qualità della grande ristorazione in un contesto
              intimo e personale.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-ls-gold">Private Chef sul Lago di Como</h3>
            <p className="text-[0.95rem] leading-relaxed text-ls-ivory-dim">
              Il Lago di Como è da sempre sinonimo di eleganza internazionale e ospitalità di
              lusso. Ville storiche, ospiti stranieri e scorci mozzafiato fanno del Comasco il
              palcoscenico ideale per una cena privata indimenticabile. Lucas Table opera
              regolarmente nell&apos;area comasca, servendo residenti e ospiti delle ville sul
              lago con menu personalizzati su richiesta e ingredienti selezionati dai migliori
              mercati locali.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-ls-gold">Private Chef a Varese, Monza e Brianza</h3>
            <p className="text-[0.95rem] leading-relaxed text-ls-ivory-dim">
              Varese, Monza e la Brianza sono territori a forte vocazione residenziale, con un
              tessuto sociale attento alla qualità e al lifestyle. Le ville e le residenze di
              queste zone sono l&apos;ambiente perfetto per una serata privata con un menu
              degustazione. Luca raggiunge queste aree con regolarità e offre lo stesso standard
              qualitativo garantito in tutta la Lombardia.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-ls-gold">Perché scegliere un private chef in Lombardia?</h3>
            <p className="text-[0.95rem] leading-relaxed text-ls-ivory-dim">
              In una regione dove l&apos;offerta ristorativa è tra le più ricche d&apos;Italia,
              scegliere un private chef a domicilio è una scelta di qualità e autenticità insieme.
              Non servono prenotazioni con settimane di anticipo, non bisogna spostarsi, e
              l&apos;esperienza è completamente personalizzata: dal menu alle intolleranze
              alimentari, dall&apos;orario di servizio all&apos;allestimento del tavolo. Luca si
              occupa di tutto — dalla spesa al riordino della cucina — così puoi goderti la
              serata senza pensare a nulla.
            </p>
          </div>
        </div>

        {/* Location FAQ */}
        <div className="mt-14 rounded-[3px] border border-ls-line bg-ls-ivory/[0.02] px-6 py-8 sm:px-8">
          <h3 className="mb-6 text-center text-ls-ivory">Domande frequenti sul servizio in Lombardia</h3>
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
          Cerchi il servizio in Svizzera?{" "}
          <a
            href="/private-chef-ticino"
            className="text-ls-gold underline decoration-ls-gold/40 underline-offset-4 transition-colors hover:decoration-ls-gold"
          >
            Scopri il private chef in Ticino
          </a>
        </p>
      </div>
    </section>
  );
}

export default function PrivateChefLombardia() {
  const localJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://lucastable.ch/#business",
    "name": "Lucas Table — Private Chef a Domicilio in Lombardia",
    "url": "https://lucastable.ch/private-chef-lombardia",
    "description": "Luca Chiarappa, private chef a domicilio in Lombardia. Menu degustazione di 6 portate per cene private ed eventi esclusivi a Milano, Como, Varese, Monza e Lecco.",
    "telephone": "+41762421754",
    "email": "lucastablee@gmail.com",
    "priceRange": "CHF 100–190",
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Lombardia",
      "containedInPlace": { "@type": "Country", "name": "Italia" },
      "containsPlace": [
        { "@type": "City", "name": "Milano" },
        { "@type": "City", "name": "Como" },
        { "@type": "City", "name": "Varese" },
        { "@type": "City", "name": "Monza" },
        { "@type": "City", "name": "Lecco" }
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
        "name": "Private Chef Lombardia",
        "item": "https://lucastable.ch/private-chef-lombardia"
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
          titleHighlight="in Lombardia"
          description="Un ristorante stellato al tuo tavolo. Da Milano al Lago di Como, curo ogni dettaglio della tua cena privata. Goditi un percorso di alta cucina senza pensare a nulla."
        />
        <LombardiaContentSection />
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
