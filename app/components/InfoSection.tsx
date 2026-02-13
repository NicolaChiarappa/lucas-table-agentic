"use client";
import Image from "next/image";
import lucaFace from "@/public/assets/Subject_1.png";
import lucaFace2 from "@/public/assets/luca_face_2.webp";

export function InfoSection() {
    return (
        <section className='relative py-12 bg-[#0d3b2e] overflow-hidden  my-16' id="info">


            <div
                className='absolute inset-0 bg-cover bg-center max-md:hidden'
                style={{
                    backgroundImage: `url('${lucaFace2.src}')`,
                }}
            />


            {/* Overlay */}
            <div className='absolute inset-0 bg-gradient-to-b from-[#0d3b2e]/100 via-[#0d3b2e]/30 to-[#0d3b2e]/100 max-md:hidden' />

            <div className='relative z-10 max-w-4xl mx-auto px-4 text-center space-y-12'>
                <h2 className='text-white relative z-10'>Chi sono</h2>

                <div className="volto-background bg-cover">
                    <Image src={lucaFace} alt="Luca" className="md:hidden" />

                    <div className='absolute inset-0 bg-gradient-to-b from-[#0d3b2e]/100 via-[#0d3b2e]/60 to-[#0d3b2e]/100 md:hidden' />
                </div>

                <div className='relative space-y-8 text-gray-200 z-10'>
                    <p className='md:text-sm leading-relaxed text-justify'>
                        Mi chiamo Luca, ho 23 anni e la mia passione per la cucina è nata tra i profumi della casa di mia madre, in Puglia. Quell&apos;amore per i sapori autentici mi ha spinto a lasciare le mie radici per studiare in Svizzera, dove ho perfezionato la tecnica e maturato esperienze fondamentali in prestigiosi ristoranti stellati.
                    </p>

                    <p className='md:text-2xl leading-relaxed'>
                        Oggi porto quell&apos;eccellenza direttamente nella tua sala da pranzo. Non cucino solo piatti, ma creo un&apos;esperienza su misura per te e i tuoi ospiti, curando ogni dettaglio: dalla selezione degli ingredienti alla presentazione finale, fino al riordino della cucina.
                    </p>

                    <blockquote className='text-white text-4xl md:text-6xl font-[allison] leading-tight clear-both'>
                        &quot;La cucina è un atto d’amore e precisione. <br /> Il mio obiettivo? <br /> Farti viaggiare attraverso il palato restando comodamente seduto al tuo tavolo.&quot;
                    </blockquote>

                </div>
            </div>
        </section>
    );
}
