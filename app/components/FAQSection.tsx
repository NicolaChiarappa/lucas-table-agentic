"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FaqItem {
    question: string;
    answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
    {
        question: "Quanto costa un private chef a domicilio?",
        answer: "I menu degustazione di Lucas Table partono da CHF 100 a persona per il menu vegetariano, CHF 150 per il menu di carne e CHF 190 per il menu di pesce. Il prezzo include 6 portate (dall'amuse-bouche al dessert), il servizio completo e il riordino della cucina. Le bevande sono escluse. Per eventi su misura, il prezzo viene concordato in base al numero di ospiti e alle richieste specifiche.",
    },
    {
        question: "Come funziona il servizio di private chef?",
        answer: "Luca si occupa di tutto: dalla spesa degli ingredienti freschi alla preparazione di ogni portata nella tua cucina, fino al servizio al tavolo e al riordino completo. L'ospite non deve pensare a nulla se non godersi la serata con i propri invitati.",
    },
    {
        question: "In quali zone offrite il servizio?",
        answer: "Il servizio è attivo in tutto il Canton Ticino (Lugano, Locarno, Bellinzona, Mendrisio, Ascona) e in Lombardia (Milano, Como, Varese, Monza, Lecco). Per località particolari, contattaci per verificare la disponibilità.",
    },
    {
        question: "Quanti ospiti si possono invitare?",
        answer: "Dipende dall'esperienza scelta: «Cin Cin» è riservata a 2 ospiti, «Il sesto senso» accoglie da 2 a 8 ospiti, e «Su misura» può essere organizzata per gruppi fino a 20 persone.",
    },
    {
        question: "Come si prenota una serata?",
        answer: "Puoi prenotare direttamente dal sito compilando il modulo di richiesta, oppure contattando Luca via WhatsApp (+41 76 242 17 54), email (lucastablee@gmail.com) o telefono. Luca ti risponde personalmente per costruire insieme la serata perfetta.",
    },
    {
        question: "Ci sono opzioni per vegetariani o persone con allergie?",
        answer: "Sì. Oltre al menu vegetariano dedicato (CHF 100 a persona), ogni menu può essere adattato in base ad allergie, intolleranze o preferenze alimentari. Basta comunicarlo al momento della prenotazione.",
    },
    {
        question: "Quali occasioni sono adatte per un private chef?",
        answer: "Il servizio è perfetto per cene romantiche, anniversari, compleanni, cene tra amici, eventi aziendali intimi e qualsiasi occasione speciale. Ogni serata viene personalizzata in base all'evento.",
    },
];

function FaqAccordionItem({ item, isOpen, onToggle }: { item: FaqItem; isOpen: boolean; onToggle: () => void }) {
    const reduce = useReducedMotion();

    return (
        <div className="border-b border-ls-line last:border-b-0">
            <button
                type="button"
                onClick={onToggle}
                aria-expanded={isOpen}
                className="group flex w-full items-center justify-between gap-4 py-6 text-left transition-colors duration-200"
            >
                <span className="text-[1.05rem] font-medium leading-snug text-ls-ivory group-hover:text-ls-gold transition-colors duration-200">
                    {item.question}
                </span>
                <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${isOpen
                            ? "border-ls-gold bg-ls-gold/15 text-ls-gold rotate-180"
                            : "border-ls-line text-ls-ivory/50 group-hover:border-ls-gold/50 group-hover:text-ls-gold"
                        }`}
                >
                    <ChevronDown className="h-4 w-4" />
                </span>
            </button>

            <motion.div
                initial={false}
                animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                }}
                transition={
                    reduce
                        ? { duration: 0 }
                        : { duration: 0.35, ease: [0.22, 1, 0.36, 1] }
                }
                className="overflow-hidden"
            >
                <p className="pb-6 pr-12 text-[0.95rem] leading-relaxed text-ls-ivory-dim">
                    {item.answer}
                </p>
            </motion.div>
        </div>
    );
}

export function FAQSection() {
    const reduce = useReducedMotion();
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const reveal = {
        initial: reduce ? false : { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-12% 0px" },
        transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const },
    };

    /* JSON-LD FAQPage — la leva GEO più potente per le citazioni LLM */
    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": FAQ_ITEMS.map((item) => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer,
            },
        })),
    };

    return (
        <section id="faq" className="relative overflow-hidden bg-ls-green py-(--space-section)">
            {/* FAQPage JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />

            <div className="mx-auto max-w-3xl px-5 sm:px-6">
                <motion.header {...reveal} className="mb-[clamp(2.5rem,1.5rem+4vw,4rem)] text-center">
                    <div className="mb-5 flex items-center justify-center gap-4">
                        <span className="ls-rule" aria-hidden="true" />
                        <span className="ls-label">Domande frequenti</span>
                        <span className="ls-rule" aria-hidden="true" />
                    </div>
                    <h2>Tutto quello che serve sapere</h2>
                    <p className="prose-measure mx-auto mt-4 text-ls-ivory">
                        Le risposte alle domande più comuni sul servizio di private chef a domicilio.
                    </p>
                </motion.header>

                <motion.div
                    {...reveal}
                    className="rounded-[3px] border border-ls-line bg-ls-ivory/[0.02] px-6 sm:px-8"
                >
                    {FAQ_ITEMS.map((item, i) => (
                        <FaqAccordionItem
                            key={i}
                            item={item}
                            isOpen={openIndex === i}
                            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                        />
                    ))}
                </motion.div>

                <motion.p {...reveal} className="mt-10 text-center text-ls-ivory-dim">
                    Hai altre domande?{" "}
                    <a
                        href="#contact"
                        className="text-ls-gold underline decoration-ls-gold/40 underline-offset-4 transition-colors hover:decoration-ls-gold"
                    >
                        Scrivimi direttamente
                    </a>
                </motion.p>
            </div>
        </section>
    );
}
