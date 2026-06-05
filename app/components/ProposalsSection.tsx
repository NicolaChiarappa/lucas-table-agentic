"use client";

import Image, { type StaticImageData } from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import sestoSensoImg from "@/public/assets/proposte.webp";
import cinCinImg from "@/public/assets/plate.webp";
import suMisuraImg from "@/public/assets/proposte_1.webp";

type Experience = {
    id: string;
    name: string;
    guests: string;
    body: string;
    image: StaticImageData;
    alt: string;
};

const EXPERIENCES: Experience[] = [
    {
        id: "sesto-senso",
        name: "Il sesto senso",
        guests: "Da 2 a 8 ospiti",
        body:
            "Il lusso della semplicità condivisa: un'atmosfera intima, pensata per massimo otto ospiti, dove la qualità degli ingredienti incontra la gioia della buona compagnia. Ogni dettaglio è un gesto d'attenzione dedicato a voi, ogni piatto un'emozione da assaporare insieme. Perché i momenti più belli sono quelli vissuti intorno a una tavola che profuma di casa, ma con l'eleganza di un'esperienza d'eccellenza.",
        image: sestoSensoImg,
        alt: "Cena privata a domicilio in Ticino: tavola conviviale elegante apparecchiata per ospiti",
    },
    {
        id: "cin-cin",
        name: "Cin Cin",
        guests: "Riservata a 2 ospiti",
        body:
            "Immagina una serata dove tutto ruota intorno a voi. Abbiamo scelto di dedicarci solo a due ospiti per garantire un'attenzione assoluta e portate che sono veri capolavori di tecnica e sapore. È molto più di una cena: è un percorso riservato nell'alta cucina, dove ogni sfumatura è pensata per incantare.",
        image: cinCinImg,
        alt: "Portata impiattata con cura da private chef per cena romantica a due a Milano",
    },
    {
        id: "su-misura",
        name: "Su misura",
        guests: "Disegnata su di voi",
        body:
            "Una serata costruita interamente intorno a voi: menu personalizzati per ogni genere di occasione e di palato, dai sapori che amate fino all'estetica di ogni piatto. Ne immaginiamo insieme i dettagli, perché diventi esattamente la sera che avete in mente.",
        image: suMisuraImg,
        alt: "Menu su misura private chef Lugano: dettaglio di un piatto creativo e composizione su misura",
    },
];

const PROOF = [
    { title: "15 cene", desc: "preparate con successo, in case e ville" },
    { title: "Creatività", desc: "menu di ogni genere e piatti estetici" },
    { title: "Flessibilità", desc: "scelta della data sempre su misura" },
];

export function ProposalsSection() {
    const reduce = useReducedMotion();

    const reveal = (delay = 0) => ({
        initial: reduce ? false : { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-12% 0px" } as const,
        transition: { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] as const },
    });

    return (
        <section
            id="proposals"
            className="relative overflow-hidden bg-ls-green-deep py-(--space-section)"
        >
            <div className="mx-auto max-w-6xl px-5 sm:px-6">
                {/* Intestazione */}
                <header className="mx-auto mb-[clamp(3.5rem,2rem+6vw,6rem)] max-w-2xl text-center">
                    <motion.div {...reveal()} className="mb-5 flex items-center justify-center gap-4">
                        <span className="ls-rule" aria-hidden="true" />
                        <span className="ls-label">Le esperienze</span>
                        <span className="ls-rule" aria-hidden="true" />
                    </motion.div>
                    <motion.h2 {...reveal(0.05)}>Tre modi di essere ospiti</motion.h2>
                    <motion.p {...reveal(0.1)} className="prose-measure mx-auto mt-5 text-ls-ivory">
                        Ogni serata nasce da un&apos;idea diversa di convivialità. Scegliete quella
                        che vi somiglia: il resto lo costruiamo insieme.
                    </motion.p>
                </header>

                {/* Esperienze alternate */}
                <div className="space-y-[clamp(4rem,2.5rem+6vw,7rem)]">
                    {EXPERIENCES.map((exp, i) => {
                        const flipped = i % 2 === 1;
                        return (
                            <article
                                key={exp.id}
                                className="grid items-center gap-x-12 gap-y-7 lg:grid-cols-2"
                            >
                                {/* Immagine */}
                                <motion.div
                                    {...reveal()}
                                    className={`relative ${flipped ? "lg:order-2" : ""}`}
                                >
                                    <div className="relative aspect-4/3 overflow-hidden rounded-[2px]">
                                        <Image
                                            src={exp.image}
                                            alt={exp.alt}
                                            fill
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                            className="object-cover"
                                        />
                                        <div
                                            aria-hidden="true"
                                            className="absolute inset-0"
                                            style={{
                                                background:
                                                    "linear-gradient(180deg, transparent 55%, rgba(10,46,36,0.55) 100%)",
                                            }}
                                        />
                                    </div>
                                </motion.div>

                                {/* Testo */}
                                <motion.div {...reveal(0.08)} className={flipped ? "lg:order-1" : ""}>
                                    <span className="ls-label">{exp.guests}</span>
                                    <h3 className="mb-5 mt-3">{exp.name}</h3>
                                    <p className="prose-measure mb-7 text-ls-ivory-dim">{exp.body}</p>
                                    <a
                                        href="#contact"
                                        className="group inline-flex items-center gap-2 text-[0.95rem] text-ls-gold transition-colors hover:text-ls-gold-bright"
                                    >
                                        Richiedi questa esperienza
                                        <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                                            <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </motion.div>
                            </article>
                        );
                    })}
                </div>

                {/* Credenziali (ex card) come riga sobria */}
                <motion.ul
                    {...reveal()}
                    className="mt-[clamp(4rem,2.5rem+6vw,7rem)] grid gap-px overflow-hidden rounded-[2px] border border-ls-line sm:grid-cols-3"
                >
                    {PROOF.map((p) => (
                        <li key={p.title} className="bg-ls-green/40 px-7 py-8">
                            <div className="ls-display text-2xl text-ls-gold">{p.title}</div>
                            <div className="mt-1.5 text-[0.95rem] leading-snug text-ls-ivory-dim">
                                {p.desc}
                            </div>
                        </li>
                    ))}
                </motion.ul>
            </div>
        </section>
    );
}
