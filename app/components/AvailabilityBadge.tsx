"use client";
import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function AvailabilityBadge() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="fixed bottom-6 right-6 z-40 flex flex-col gap-1.5 bg-[#0a2e24]/90 backdrop-blur-md px-5 py-4 rounded-2xl border border-white/10 text-white shadow-2xl"
                >
                    <button
                        onClick={() => setIsVisible(false)}
                        className="absolute -top-2 -left-2 bg-white text-[#0a2e24] rounded-full p-1 hover:bg-gray-200 transition-colors shadow-md"
                        aria-label="Close"
                    >
                        <X size={14} />
                    </button>

                    <span className="text-xs font-medium text-white/70">Disponibile in</span>
                    <div className="flex items-center gap-3">
                        <span className="text-2xl leading-none">🇨🇭</span>
                        <div className="flex flex-col">

                            <span className="text-sm font-bold">Svizzera</span>
                        </div>
                    </div>

                    <div className="w-full h-px bg-white/10 my-0.5" />

                    <div className="flex items-center gap-3">
                        <span className="text-2xl leading-none">🇮🇹</span>
                        <div className="flex flex-col">

                            <span className="text-sm font-bold">Nord Italia</span>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
