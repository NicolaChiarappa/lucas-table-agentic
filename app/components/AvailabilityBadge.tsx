"use client";
import { useState } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export function AvailabilityBadge() {
    const [isVisible, setIsVisible] = useState(true);
    const reduce = useReducedMotion();

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.aside
                    initial={reduce ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 16 }}
                    transition={{ delay: reduce ? 0 : 1.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed bottom-5 left-5 z-30"
                    aria-label="Zone servite"
                >
                    <div className="relative flex items-center gap-3 rounded-full border border-ls-gold/30 bg-ls-green-night/85 py-2 pl-4 pr-5 backdrop-blur-md">
                        <button
                            onClick={() => setIsVisible(false)}
                            className="absolute -right-2 -top-2 grid h-5 w-5 place-items-center rounded-full bg-ls-gold text-ls-green-night transition-colors hover:bg-ls-gold-bright"
                            aria-label="Nascondi"
                        >
                            <X size={11} strokeWidth={2.5} />
                        </button>

                        <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ls-gold opacity-60" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-ls-gold" />
                        </span>

                        <div className="leading-tight">
                            <div
                                className="text-ls-gold"
                                style={{ fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase" }}
                            >
                                Disponibile in
                            </div>
                            <div className="text-[0.82rem] font-medium text-ls-ivory">
                                Svizzera · Nord Italia
                            </div>
                        </div>
                    </div>
                </motion.aside>
            )}
        </AnimatePresence>
    );
}
