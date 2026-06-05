"use client";
import { Mail, Phone, Instagram } from "lucide-react";
import { Logo } from "./Logo";

const EXPLORE = [
    { label: "Chi sono", href: "#info" },
    { label: "Le esperienze", href: "#proposals" },
    { label: "I menù", href: "#menu" },
    { label: "Le voci", href: "#reviews" },
    { label: "Prenota", href: "#contact" },
];

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-ls-line bg-ls-green-night text-ls-ivory">
            {/* Commiato */}
            <div className="mx-auto max-w-6xl px-6 pb-12 pt-[clamp(3.5rem,2.5rem+4vw,5.5rem)] text-center">
                <Logo className="mx-auto h-12 w-auto text-ls-ivory" />
                <p className="prose-measure mx-auto mt-6 text-ls-ivory-dim">
                    Ovunque sia la vostra tavola, porto io il ristorante. Resta solo da
                    scegliere la sera.
                </p>
                <a
                    href="#contact"
                    className="mt-7 inline-flex items-center gap-2 rounded-full border border-ls-gold/55 px-6 py-3 text-[0.8rem] font-medium uppercase tracking-[0.18em] text-ls-gold transition-colors duration-300 hover:bg-ls-gold hover:text-ls-green-night"
                >
                    Prenota la tua serata
                </a>
            </div>

            <div className="mx-auto grid max-w-6xl gap-10 border-t border-ls-line px-6 py-12 sm:grid-cols-3">
                {/* Contatti */}
                <div>
                    <h3 className="ls-label mb-5">Contatti</h3>
                    <div className="space-y-3">
                        <a href="mailto:lucastablee@gmail.com" className="flex items-center gap-3 text-ls-ivory-dim transition-colors hover:text-ls-gold">
                            <Mail className="h-4 w-4 shrink-0 text-ls-gold" />
                            <span className="text-[0.95rem]">lucastablee@gmail.com</span>
                        </a>
                        <a href="tel:+41762421754" className="flex items-center gap-3 text-ls-ivory-dim transition-colors hover:text-ls-gold">
                            <Phone className="h-4 w-4 shrink-0 text-ls-gold" />
                            <span className="text-[0.95rem]">+41 76 242 17 54</span>
                        </a>
                    </div>
                </div>

                {/* Esplora */}
                <div>
                    <h3 className="ls-label mb-5">Esplora</h3>
                    <ul className="space-y-2.5">
                        {EXPLORE.map((item) => (
                            <li key={item.href}>
                                <a href={item.href} className="text-[0.95rem] text-ls-ivory-dim transition-colors hover:text-ls-gold">
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h3 className="ls-label mb-5">Social</h3>
                    <div className="flex gap-3">
                        <a
                            href="https://www.instagram.com/lucas.tables?igsh=MTVrYnFzZnlvbDV5MQ%3D%3D&utm_source=qr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="grid h-11 w-11 place-items-center rounded-full border border-ls-line text-ls-ivory transition-colors duration-300 hover:border-ls-gold hover:text-ls-gold"
                            aria-label="Instagram di Lucas Table"
                        >
                            <Instagram className="h-5 w-5" />
                        </a>
                        <a
                            href="https://www.tiktok.com/@lucas_tables?_r=1&_t=ZN-93mKa9tEQJq"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="grid h-11 w-11 place-items-center rounded-full border border-ls-line text-ls-ivory transition-colors duration-300 hover:border-ls-gold hover:text-ls-gold"
                            aria-label="TikTok di Lucas Table"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                                <path d="M16.5 3a5.5 5.5 0 0 0 4.5 4.8v3.05a8.5 8.5 0 0 1-4.5-1.36v6.26A6.25 6.25 0 1 1 9.4 9.6v3.2a3.05 3.05 0 1 0 2.1 2.9V3h5z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-6xl border-t border-ls-line px-6 py-7 text-center">
                <p className="m-0 text-[0.82rem] text-ls-ivory/45">
                    © {year} Lucas Table. Tutti i diritti riservati.
                </p>
            </div>
        </footer>
    );
}
