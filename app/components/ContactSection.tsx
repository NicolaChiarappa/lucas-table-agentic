"use client";
import { Mail, Phone, MessageCircle } from "lucide-react";
import plateImage from "@/public/assets/plate.webp";

export function ContactSection() {
    return (
        <section className='relative min-h-screen flex items-center overflow-hidden mt-20' id="contact">
            <div
                className='absolute inset-0 bg-cover bg-center'
                style={{
                    backgroundImage: `url('${plateImage.src}')`,
                }}
            />
            <div className='absolute inset-0 bg-gradient-to-b from-[#0d3b2e]/100 via-[#0d3b2e]/80 to-[#0d3b2e]/100' />

            <div className='relative z-10 max-w-4xl mx-auto px-4 py-20 text-center'>
                <h2 className='text-5xl text-white mb-8'>
                    Prenota la tua esperienza
                </h2>
                <p className='text-xl text-gray-200 mb-12'>
                    Creiamo insieme un percorso culinario indimenticabile.
                </p>

                <div className="max-w-sm mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 aspect-square flex flex-col items-center justify-center gap-6 shadow-2xl">
                    <a
                        href="mailto:lucastablee@gmail.com"
                        className="flex items-center gap-4 text-white hover:text-yellow-200 transition-colors w-full p-3 rounded-lg hover:bg-white/5"
                    >
                        <div className="p-3 bg-white/10 rounded-full">
                            <Mail className="w-6 h-6" />
                        </div>
                        <span className="text-lg">lucastablee@gmail.com</span>
                    </a>

                    <a
                        href="https://wa.me/+41762421754?text=Ciao%20Luca%2C%20vorrei%20maggiori%20informazioni%20riguardo%20al%20servizio%20di%20private%20chef"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 text-white hover:text-green-400 transition-colors w-full p-3 rounded-lg hover:bg-white/5"
                    >
                        <div className="p-3 bg-white/10 rounded-full">
                            <MessageCircle className="w-6 h-6" />
                        </div>
                        <span className="text-lg">Chat su WhatsApp</span>
                    </a>

                    <a
                        href="tel:+41762421754"
                        className="flex items-center gap-4 text-white hover:text-yellow-200 transition-colors w-full p-3 rounded-lg hover:bg-white/5"
                    >
                        <div className="p-3 bg-white/10 rounded-full">
                            <Phone className="w-6 h-6" />
                        </div>
                        <span className="text-lg">+41 76 242 17 54</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
