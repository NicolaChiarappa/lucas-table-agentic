"use client";

import { motion, useReducedMotion } from "framer-motion";

const REGIONS = [
    {
        name: "Canton Ticino",
        flag: "🇨🇭",
        cities: ["Lugano", "Locarno", "Bellinzona", "Mendrisio", "Ascona"],
    },
    {
        name: "Lombardia",
        flag: "🇮🇹",
        cities: ["Milano", "Como", "Varese", "Monza", "Lecco"],
    },
];

export function ServedAreasSection() {
    const reduce = useReducedMotion();

    const reveal = (delay = 0) => ({
        initial: reduce ? false : { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-12% 0px" },
        transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] as const },
    });

    return (
        <section id="areas" className="relative overflow-hidden bg-ls-green-deep py-(--space-section)">
            <div className="mx-auto max-w-4xl px-5 sm:px-6">
                {/* Intestazione */}
                <motion.header {...reveal()} className="mx-auto mb-[clamp(2.5rem,1.5rem+4vw,4.5rem)] max-w-2xl text-center">
                    <div className="mb-5 flex items-center justify-center gap-4">
                        <span className="ls-rule" aria-hidden="true" />
                        <span className="ls-label">Dove porto la mia cucina</span>
                        <span className="ls-rule" aria-hidden="true" />
                    </div>
                    <h2>Due territori, un unico standard</h2>
                    <p className="prose-measure mx-auto mt-4 text-ls-ivory">
                        Come <strong className="font-medium text-ls-ivory">private chef a domicilio</strong>,
                        porto l&apos;eccellenza della ristorazione direttamente nella vostra sala da pranzo
                        in tutto il <strong className="font-medium text-ls-ivory">Ticino</strong> e
                        in <strong className="font-medium text-ls-ivory">Lombardia</strong>.
                    </p>
                </motion.header>

                {/* Griglia regioni */}
                <div className="grid gap-6 sm:grid-cols-2">
                    {REGIONS.map((region, i) => (
                        <motion.article
                            key={region.name}
                            {...reveal(i * 0.1)}
                            className="group relative rounded-[3px] border border-ls-line p-8 transition-colors duration-300 hover:border-ls-gold/40 sm:p-10"
                        >
                            {/* Accento dorato al bordo superiore */}
                            <span
                                aria-hidden="true"
                                className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-ls-gold/40 to-transparent transition-opacity duration-300 group-hover:opacity-100 opacity-0"
                            />

                            <div className="mb-6 flex items-center gap-3">
                                <span className="text-2xl" aria-hidden="true">{region.flag}</span>
                                <h3 className="ls-display text-xl text-ls-gold">{region.name}</h3>
                            </div>

                            <ul className="space-y-2.5">
                                {region.cities.map((city) => (
                                    <li key={city} className="flex items-center gap-3 text-[0.95rem] text-ls-ivory-dim">
                                        <span className="h-1 w-1 shrink-0 rounded-full bg-ls-gold/60" aria-hidden="true" />
                                        {city}
                                    </li>
                                ))}
                            </ul>

                            <p className="mt-6 text-[0.82rem] text-ls-ivory/40">
                                e zone limitrofe
                            </p>
                        </motion.article>
                    ))}
                </div>

                {/* CTA */}
                <motion.p {...reveal(0.15)} className="mt-10 text-center text-ls-ivory-dim">
                    Non trovi la tua zona?{" "}
                    <a
                        href="#contact"
                        className="text-ls-gold underline decoration-ls-gold/40 underline-offset-4 transition-colors hover:decoration-ls-gold"
                    >
                        Contattami per verificare la disponibilità
                    </a>
                </motion.p>
            </div>
        </section>
    );
}
