"use client";

import { motion, useReducedMotion } from "framer-motion";

export function InfoSection() {
    const reduce = useReducedMotion();

    const reveal = {
        initial: reduce ? false : { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-12% 0px" },
        transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const },
    };

    return (
        <section id="info" className="relative overflow-hidden bg-ls-green py-(--space-section)">
            <div className="mx-auto max-w-3xl px-5 text-center sm:px-6">
                <motion.div {...reveal} className="mb-6 flex items-center justify-center gap-4">
                    <span className="ls-rule" aria-hidden="true" />
                    <span className="ls-label">Chi sono</span>
                    <span className="ls-rule" aria-hidden="true" />
                </motion.div>

                <motion.h2 {...reveal} className="mb-10">
                    Dai profumi di casa, in Puglia, fino al tuo tavolo
                </motion.h2>

                <motion.p {...reveal} className="prose-measure mx-auto mb-5 text-ls-ivory">
                    Mi chiamo Luca, ho 23 anni e la mia passione per la cucina è nata tra i
                    profumi della casa di mia madre, in Puglia. Quell&apos;amore per i sapori
                    autentici mi ha spinto a lasciare le mie radici per studiare in Svizzera,
                    dove ho perfezionato la tecnica e maturato esperienze fondamentali in
                    prestigiosi ristoranti stellati.
                </motion.p>

                <motion.p {...reveal} className="prose-measure mx-auto text-ls-ivory-dim">
                    Oggi, come tuo <strong>private chef a domicilio in Ticino e Lombardia</strong>,
                    porto quell&apos;eccellenza direttamente nella tua sala da pranzo. Non
                    cucino solo piatti: creo un&apos;esperienza su misura per te e i tuoi
                    ospiti, curando ogni dettaglio, dalla selezione degli ingredienti alla
                    presentazione finale, fino al riordino della cucina.
                </motion.p>

                {/* Momento-firma */}
                <motion.figure {...reveal} className="mx-auto mt-14 max-w-2xl">
                    <blockquote className="ls-display text-[clamp(1.5rem,1.1rem+2vw,2.4rem)] italic leading-snug text-ls-ivory">
                        La cucina è un atto d&apos;amore e precisione. Il mio obiettivo? Farti
                        viaggiare attraverso il palato restando comodamente seduto al tuo
                        tavolo.
                    </blockquote>
                    <figcaption className="ls-script mt-5 text-5xl">Luca</figcaption>
                </motion.figure>
            </div>
        </section>
    );
}
