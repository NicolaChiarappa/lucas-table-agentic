"use client";
import { ChefHat, Utensils, Calendar, Star } from "lucide-react";
import proposteImage from "@/public/assets/proposte.webp";
import { FeatureCard } from "./FeatureCard";

export function ProposalsSection() {
    return (
        <section className='relative min-h-screen flex items-center overflow-hidden' id="proposals">
            <div
                className='absolute inset-0 bg-cover bg-center'
                style={{
                    backgroundImage: `url('${proposteImage.src}')`,
                    backgroundSize: "cover",
                }}
            />
            <div className='absolute inset-0 bg-gradient-to-b from-[#0d3b2e]/100 via-[#0d3b2e]/40 to-[#0d3b2e]/100' />

            <div className='relative z-10 max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center'>
                <div className='text-white'>
                    <h2 className='text-5xl mb-6'>Esperienze proposte</h2>
                    <h3 className='text-3xl mb-2'>Il sesto senso</h3>
                    <span className="block font-semibold italic text-gray-300 mb-6 tracking-wide">
                        Numero ospiti consigliato: 2-8
                    </span>

                    <p className='text-2xl mb-6 text-gray-200'>
                        Il lusso della semplicità condivisa: un’atmosfera intima, pensata
                        per massimo otto ospiti, dove la qualità degli ingredienti
                        incontra la gioia della buona compagnia. Ogni dettaglio è un gesto
                        d’attenzione dedicato a voi, ogni piatto un’emozione da assaporare
                        insieme. Perché i momenti più belli sono quelli vissuti intorno a
                        una tavola che profuma di casa, ma con l&apos;eleganza di un&apos;esperienza
                        d&apos;eccellenza.
                    </p>
                    <h3 className='text-3xl mb-2'>Cin Cin</h3>
                    <span className="block font-semibold italic text-gray-300 mb-6 tracking-wide">
                        Numero ospiti consigliato: 2
                    </span>
                    <p className='text-2xl mb-6 text-gray-200'>
                        Immagina una serata dove tutto ruota intorno a voi. Abbiamo scelto
                        di dedicarci solo a due ospiti per garantire un’attenzione
                        assoluta e portate che sono veri capolavori di tecnica e sapore. È
                        molto più di una cena: è un percorso riservato nell&apos;alta cucina,
                        dove ogni sfumatura è pensata per incantare.
                    </p>
                </div>
                <div className='grid grid-cols-2 gap-6'>
                    <FeatureCard
                        icon={Star}
                        title="15 cene"
                        description="Diverse cene preparate con successo"
                        className="bg-white/10 backdrop-blur-xs"
                        iconColor="text-yellow-400"
                    />
                    <FeatureCard
                        icon={Utensils}
                        title="Creatività"
                        description="Menu di ogni genere e piatti estetici"
                        className="bg-white/10 backdrop-blur-xs"
                    />
                    <FeatureCard
                        icon={ChefHat}
                        title="Su misura"
                        description="Menu personalizzati"
                    />
                    <FeatureCard
                        icon={Calendar}
                        title="Flessibilità"
                        description="Scelta della data flessibile"
                    />
                </div>
            </div>
        </section>
    );
}
