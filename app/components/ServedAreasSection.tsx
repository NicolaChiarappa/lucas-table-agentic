"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MapPin } from "lucide-react";

const REGIONS = [
    {
        name: "Canton Ticino",
        cities: ["Lugano", "Locarno", "Bellinzona", "Mendrisio", "Ascona"],
    },
    {
        name: "Lombardia",
        cities: ["Milano", "Como", "Varese", "Monza", "Lecco"],
    },
];

export function ServedAreasSection() {
    const reduce = useReducedMotion();

    const reveal = {
        initial: reduce ? false : { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-12% 0px" },
        transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const },
    };

    return (
        <section id="areas" className="relative overflow-hidden bg-ls-green-deep py-[clamp(4rem,3rem+6vw,6rem)] border-t border-ls-line">
            <div className="mx-auto max-w-4xl px-5 sm:px-6">
                <motion.div {...reveal} className="mb-8 text-center">
                    <div className="mb-4 flex items-center justify-center gap-4">
                        <span className="ls-rule" aria-hidden="true" />
                        <span className="ls-label flex items-center gap-2">
                            <MapPin className="h-3.5 w-3.5" />
                            Zone Servite
                        </span>
                        <span className="ls-rule" aria-hidden="true" />
                    </div>
                    <h2 className="mb-6 text-[clamp(1.8rem,1.4rem+2vw,2.5rem)]">Dove porto la mia cucina</h2>
                    <p className="prose-measure mx-auto text-ls-ivory-dim">
                        Come <strong className="text-ls-ivory font-medium">private chef a domicilio</strong>, porto l'eccellenza della
                        ristorazione stellata direttamente nella vostra sala da pranzo in tutto il
                        <strong className="text-ls-ivory font-medium"> Ticino</strong> e in <strong className="text-ls-ivory font-medium">Lombardia</strong>.
                    </p>
                </motion.div>

                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:gap-12">
                    {REGIONS.map((region, i) => (
                        <motion.div
                            key={region.name}
                            initial={reduce ? false : { opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-12% 0px" }}
                            transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                            className="rounded-xl border border-ls-line bg-ls-green/30 p-8 text-center backdrop-blur-sm transition-colors hover:border-ls-gold/40"
                        >
                            <h3 className="ls-display mb-4 text-2xl text-ls-gold">{region.name}</h3>
                            <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[0.95rem] text-ls-ivory-dim">
                                {region.cities.map((city, j) => (
                                    <li key={city} className="flex items-center gap-4">
                                        <span>{city}</span>
                                        {j < region.cities.length - 1 && (
                                            <span className="h-1 w-1 rounded-full bg-ls-gold/50" aria-hidden="true" />
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
