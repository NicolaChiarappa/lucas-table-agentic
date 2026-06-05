"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import heroImage from "@/public/assets/hero-chef.webp";

interface HeroSectionProps {
    label?: string;
    title?: string;
    titleHighlight?: string;
    description?: string;
}

export function HeroSection({
    label = "Chef privato a domicilio",
    title = "Private Chef a Domicilio",
    titleHighlight = "in Ticino e Lombardia",
    description = "Il lusso di essere ospiti a casa propria. Trasformo la tua cucina in un ristorante d'eccellenza per una sera. Tu pensa solo a goderti la serata."
}: HeroSectionProps) {
    const reduce = useReducedMotion();

    const rise = (delay: number) =>
        reduce
            ? { initial: false as const, animate: { opacity: 1, y: 0 } }
            : {
                initial: { opacity: 0, y: 26 },
                animate: { opacity: 1, y: 0 },
                transition: { delay, duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
            };

    // Per risolvere il problema di LCP (Largest Contentful Paint), 
    // il titolo principale (H1) non deve partire da opacity: 0, 
    // altrimenti Chrome attende il caricamento di React (hydration) per renderlo visibile.
    const riseH1 = (delay: number) =>
        reduce
            ? { initial: false as const, animate: { y: 0 } }
            : {
                initial: { y: 26 },
                animate: { y: 0 },
                transition: { delay, duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
            };

    return (
        <section className="relative flex min-h-svh items-end justify-center overflow-hidden">
            {/* Fotografia: l'unica luce viva */}
            <Image
                src={heroImage}
                alt="Luca, private chef a domicilio, impiatta una portata nella sala da pranzo di una villa in Ticino"
                fill
                priority
                quality={80}
                sizes="100vw"
                className="object-cover object-[center_35%]"
            />

            {/* Atmosfera: vignettatura + raccordo al verde della sezione successiva */}
            <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(120% 90% at 50% 28%, transparent 28%, rgba(7,33,26,0.35) 62%, rgba(7,33,26,0.72) 100%)",
                }}
            />
            <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(to bottom, rgba(7,33,26,0.55) 0%, transparent 22%, transparent 48%, rgba(13,59,46,0.6) 78%, var(--ls-green) 100%)",
                }}
            />

            {/* Contenuto */}
            <div className="relative z-10 mx-auto max-w-4xl px-5 pb-[clamp(4.5rem,3rem+8vw,8rem)] pt-32 text-center">
                <motion.div {...rise(0.15)} className="mb-7 flex items-center justify-center gap-4">
                    <span className="ls-rule" aria-hidden="true" />
                    <span className="ls-label">{label}</span>
                    <span className="ls-rule" aria-hidden="true" />
                </motion.div>

                <motion.h1 {...riseH1(0.28)} className="mx-auto max-w-3xl">
                    {title}{" "}
                    <em className="ls-display italic text-ls-gold">{titleHighlight}</em>
                </motion.h1>

                <motion.p {...rise(0.45)} className="prose-measure mx-auto mt-7 text-ls-ivory">
                    {description}
                </motion.p>

                <motion.div
                    {...rise(0.6)}
                    className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
                >
                    <a
                        href="#contact"
                        className="group inline-flex items-center gap-2.5 rounded-full bg-ls-gold px-8 py-4 text-[0.95rem] font-medium text-ls-green-night transition-colors duration-300 hover:bg-ls-gold-bright"
                    >
                        Prenota la tua serata
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                            <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                    <a
                        href="#proposals"
                        className="text-[0.95rem] text-ls-ivory underline decoration-ls-gold/40 underline-offset-[6px] transition-colors duration-300 hover:decoration-ls-gold"
                    >
                        Scopri le esperienze
                    </a>
                </motion.div>
            </div>

            {/* Indizio di scorrimento */}
            <motion.div
                aria-hidden="true"
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 1 }}
                className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
            >
                <motion.span
                    className="block h-9 w-px bg-linear-to-b from-ls-gold to-transparent"
                    animate={reduce ? undefined : { scaleY: [0.4, 1, 0.4], opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                    style={{ transformOrigin: "top" }}
                />
            </motion.div>
        </section>
    );
}
