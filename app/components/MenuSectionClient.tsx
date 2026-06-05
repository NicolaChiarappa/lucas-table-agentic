"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface MenuItem {
    id: string;
    course: string;
    dish: string;
}

interface MenuCategory {
    id: string;
    title: string;
    price: number;
    items: MenuItem[];
}

export function MenuSectionClient({ menus }: { menus: MenuCategory[] }) {
    const reduce = useReducedMotion();
    const [activeTab, setActiveTab] = useState(menus[0]?.id);
    const activeMenu = menus.find((m) => m.id === activeTab) ?? menus[0];

    return (
        <section id="menu" className="relative bg-ls-green py-(--space-section)">
            <div className="mx-auto max-w-3xl px-5 sm:px-6">
                <header className="mb-[clamp(2.5rem,1.5rem+4vw,4rem)] text-center">
                    <div className="mb-5 flex items-center justify-center gap-4">
                        <span className="ls-rule" aria-hidden="true" />
                        <span className="ls-label">Alla carta</span>
                        <span className="ls-rule" aria-hidden="true" />
                    </div>
                    <h2>I menù</h2>
                    <p className="prose-measure mx-auto mt-4 text-ls-ivory">
                        Percorsi pensati e poi cuciti su di voi. Questi sono i punti di partenza.
                    </p>
                </header>

                {menus.length === 0 ? (
                    <div className="text-center">
                        <p className="text-ls-ivory-dim">
                            La carta è in preparazione. Scrivetemi: la costruiamo insieme, intorno
                            a ciò che amate.
                        </p>
                        <a
                            href="#contact"
                            className="mt-6 inline-flex items-center gap-2 text-ls-gold transition-colors hover:text-ls-gold-bright"
                        >
                            Parliamone
                        </a>
                    </div>
                ) : (
                    <>
                        {/* Selettore portate — sticky sotto l'header finché il menu è visibile */}
                        <div className="sticky top-(--header-h) z-30 -mx-5 mb-12 border-b border-ls-line bg-ls-green px-5 py-4 sm:-mx-6 sm:px-6">
                            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
                                {menus.map((menu) => {
                                    const active = activeMenu?.id === menu.id;
                                    return (
                                        <button
                                            key={menu.id}
                                            onClick={() => setActiveTab(menu.id)}
                                            className={`relative pb-2 text-[1.05rem] tracking-wide transition-colors duration-300 ${
                                                active ? "text-ls-gold" : "text-ls-ivory/55 hover:text-ls-ivory"
                                            }`}
                                        >
                                            {menu.title}
                                            {active && (
                                                <motion.span
                                                    layoutId="menu-underline"
                                                    className="absolute inset-x-0 bottom-0 h-px bg-ls-gold"
                                                />
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* La carta */}
                        <div className="relative rounded-[3px] border border-ls-line px-6 py-10 sm:px-12 sm:py-14">
                            {/* angoli dorati */}
                            <Corner className="left-3 top-3" />
                            <Corner className="right-3 top-3 rotate-90" />
                            <Corner className="bottom-3 left-3 -rotate-90" />
                            <Corner className="bottom-3 right-3 rotate-180" />

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeMenu?.id}
                                    initial={reduce ? false : { opacity: 0, y: 14 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
                                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <ul className="space-y-8">
                                        {activeMenu?.items.map((item) => (
                                            <li key={item.id} className="text-center">
                                                <div className="ls-label mb-2">{item.course}</div>
                                                <p className="ls-display m-0 text-[clamp(1.2rem,1rem+0.9vw,1.6rem)] italic leading-snug text-ls-ivory">
                                                    {item.dish}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>

                                    {activeMenu && (
                                        <div className="mt-12 flex flex-col items-center gap-1 border-t border-ls-line pt-8">
                                            <span className="ls-label">A persona</span>
                                            <span className="ls-display text-2xl text-ls-ivory">
                                                CHF {activeMenu.price}
                                            </span>
                                            <span className="text-[0.82rem] text-ls-ivory/50">
                                                bevande escluse
                                            </span>
                                        </div>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Su misura */}
                        <p className="mt-10 text-center text-ls-ivory-dim">
                            Nessuno di questi vi rappresenta?{" "}
                            <a
                                href="#contact"
                                className="text-ls-gold underline decoration-ls-gold/40 underline-offset-4 transition-colors hover:decoration-ls-gold"
                            >
                                Disegniamone uno su misura
                            </a>
                        </p>
                    </>
                )}
            </div>
        </section>
    );
}

function Corner({ className = "" }: { className?: string }) {
    return (
        <span
            aria-hidden="true"
            className={`absolute h-4 w-4 border-l border-t border-ls-gold/45 ${className}`}
        />
    );
}
