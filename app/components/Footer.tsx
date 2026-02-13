"use client";
import { Mail, Phone, Instagram } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#0b2d24] text-white py-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

                {/* Contatti */}
                <div className="space-y-6">
                    <h3 className="text-2xl   text-[#c5a059]">Contatti</h3>
                    <div className="space-y-4">
                        <a href="mailto:lucastablee@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                            <Mail className="w-5 h-5" />
                            <span>lucastablee@gmail.com</span>
                        </a>
                        <a href="tel:+41762421754" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                            <Phone className="w-5 h-5" />
                            <span>+41 76 242 17 54</span>
                        </a>
                    </div>
                </div>

                {/* Mappa del Sito */}
                <div className="space-y-6">
                    <h3 className="text-2xl   text-[#c5a059]">Esplora</h3>
                    <ul className="space-y-3">
                        <li><a href="#info" className="text-gray-300 hover:text-white transition-colors">Chi sono</a></li>
                        <li><a href="#proposals" className="text-gray-300 hover:text-white transition-colors">Proposte</a></li>
                        <li><a href="#menu" className="text-gray-300 hover:text-white transition-colors">Menu</a></li>
                        <li><a href="#reviews" className="text-gray-300 hover:text-white transition-colors">Recensioni</a></li>
                        <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contatti</a></li>
                    </ul>
                </div>

                {/* Social */}
                <div className="space-y-6">
                    <h3 className="text-2xl   text-[#c5a059]">Social</h3>
                    <div className="flex gap-4">
                        <a
                            href="https://www.instagram.com/lucas.tables?igsh=MTVrYnFzZnlvbDV5MQ%3D%3D&utm_source=qr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
                            aria-label="Instagram"
                        >
                            <Instagram className="w-6 h-6" />
                        </a>
                        <a
                            href="https://www.tiktok.com/@lucas_tables?_r=1&_t=ZN-93mKa9tEQJq"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
                            aria-label="TikTok"
                        >
                            {/* TikTok Icon SVG since it might not be in the current lucide-react version or just to be safe */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-6 h-6"
                            >
                                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                            </svg>
                        </a>
                    </div>
                </div>

            </div>

            <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
                <p>&copy; {new Date().getFullYear()} Lucas Table. Tutti i diritti riservati.</p>
            </div>
        </footer>
    );
}
