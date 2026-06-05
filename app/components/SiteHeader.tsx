"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Logo } from "./Logo";

const NAV_ITEMS = [
    { label: "Chi sono", href: "#info" },
    { label: "Le esperienze", href: "#proposals" },
    { label: "I menù", href: "#menu" },
    { label: "Le voci", href: "#reviews" },
    { label: "Prenota", href: "#contact" },
];

const WHATSAPP = "https://wa.me/41762421754";
const EMAIL = "mailto:lucastablee@gmail.com";

export function SiteHeader() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const reduce = useReducedMotion();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 48);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    const goTo = (href: string) => {
        setOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
    };

    return (
        <>
            <header
                className="fixed inset-x-0 top-0 z-40 border-b transition-[background-color,backdrop-filter,border-color] duration-500"
                style={{
                    backgroundColor: scrolled ? "rgba(7, 33, 26, 0.78)" : "rgba(7, 33, 26, 0)",
                    backdropFilter: scrolled ? "blur(14px)" : "none",
                    WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
                    borderColor: scrolled ? "var(--ls-line)" : "transparent",
                }}
            >
                <div className="mx-auto grid h-(--header-h) max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-4 sm:px-6">
                    {/* Sinistra: apertura menu */}
                    <div className="justify-self-start">
                        <button
                            type="button"
                            onClick={() => setOpen(true)}
                            className="group flex items-center gap-2.5 text-ls-ivory transition-colors hover:text-ls-gold"
                            aria-label="Apri il menù di navigazione"
                            aria-expanded={open}
                        >
                            <span className="relative flex h-3.5 w-6 flex-col justify-between lg:h-4 lg:w-7">
                                <span className="h-px w-full bg-current transition-transform duration-300 group-hover:translate-y-px" />
                                <span className="h-px w-4 bg-current transition-all duration-300 group-hover:w-full lg:w-5" />
                                <span className="h-px w-full bg-current transition-transform duration-300 group-hover:-translate-y-px" />
                            </span>
                            <span className="hidden text-[0.72rem] font-medium uppercase tracking-[0.2em] sm:inline lg:text-[0.85rem]">
                                Menù
                            </span>
                        </button>
                    </div>

                    {/* Centro: logo */}
                    <a
                        href="#top"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
                        }}
                        className="justify-self-center overflow-visible"
                        aria-label="Lucas Table, torna in cima"
                    >
                        <Logo className="h-[clamp(2.4rem,1.4rem+4vw,5.2rem)] w-auto text-ls-ivory" />
                    </a>

                    {/* Destra: azione sempre disponibile */}
                    <div className="justify-self-end">
                        <button
                            type="button"
                            onClick={() => goTo("#contact")}
                            className="rounded-full border border-ls-gold/55 px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-ls-gold transition-colors duration-300 hover:bg-ls-gold hover:text-ls-green-night sm:px-5 lg:px-7 lg:py-2.5 lg:text-[0.85rem]"
                        >
                            Prenota
                        </button>
                    </div>
                </div>
            </header>

            {/* Overlay di navigazione a tutto schermo */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        key="nav-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: reduce ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="public-site fixed inset-0 z-50 flex flex-col"
                        style={{ backgroundColor: "rgba(7, 33, 26, 0.97)", backdropFilter: "blur(8px)" }}
                        role="dialog"
                        aria-modal="true"
                        aria-label="Navigazione"
                    >
                        <div className="mx-auto flex h-(--header-h) w-full max-w-7xl items-center justify-between px-4 sm:px-6">
                            <span className="ls-label">Lucas Table</span>
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="flex items-center gap-2.5 text-ls-ivory transition-colors hover:text-ls-gold"
                                aria-label="Chiudi il menù"
                            >
                                <span className="hidden text-[0.72rem] font-medium uppercase tracking-[0.2em] sm:inline">
                                    Chiudi
                                </span>
                                <span className="relative h-4 w-4">
                                    <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 rotate-45 bg-current" />
                                    <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 -rotate-45 bg-current" />
                                </span>
                            </button>
                        </div>

                        <nav className="flex flex-1 flex-col justify-center px-6 sm:px-10">
                            <ul className="mx-auto w-full max-w-3xl">
                                {NAV_ITEMS.map((item, i) => (
                                    <motion.li
                                        key={item.href}
                                        initial={reduce ? false : { opacity: 0, y: 24 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: reduce ? 0 : 0.12 + i * 0.06,
                                            duration: 0.5,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                        className="border-b border-ls-line"
                                    >
                                        <a
                                            href={item.href}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                goTo(item.href);
                                            }}
                                            className="group flex items-baseline gap-5 py-[clamp(0.7rem,0.4rem+1.2vw,1.3rem)]"
                                        >
                                            <span className="ls-label w-8 shrink-0 opacity-50 transition-opacity group-hover:opacity-100">
                                                {String(i + 1).padStart(2, "0")}
                                            </span>
                                            <span className="ls-display text-[clamp(2rem,1.4rem+3.2vw,3.6rem)] leading-[1.05] text-ls-ivory transition-colors duration-300 group-hover:text-ls-gold">
                                                {item.label}
                                            </span>
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </nav>

                        <div className="mx-auto flex w-full max-w-3xl flex-wrap items-center justify-between gap-4 px-6 pb-[clamp(1.5rem,1rem+2vw,2.5rem)] sm:px-10">
                            <p className="m-0 text-ls-ivory/60" style={{ fontSize: "var(--step--1)" }}>
                                Disponibile in Svizzera e Nord Italia
                            </p>
                            <div className="flex items-center gap-6">
                                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="ls-label transition-colors hover:text-ls-gold-bright">
                                    WhatsApp
                                </a>
                                <a href={EMAIL} className="ls-label transition-colors hover:text-ls-gold-bright">
                                    Email
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
