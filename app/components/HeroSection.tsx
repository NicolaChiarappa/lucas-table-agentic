"use client";
import heroImage from "@/public/assets/hero-chef.webp";

export function HeroSection() {
    return (<section className='relative min-h-screen flex items-center justify-center overflow-hidden'>

        {/* Background Image */}
        <div
            className='absolute inset-0 bg-cover bg-[center_35%]'
            style={{
                backgroundImage: `url('${heroImage.src}')`,
            }}
        />
        {/* Overlay with gradient to next section */}
        <div className='absolute inset-0 bg-gradient-to-b from-[#0d3b2e]/100 via-[#0d3b2e]/40 to-[#0d3b2e]/100' />

        <div className='relative z-10 text-center text-white px-8 py-12 max-w-4xl mt-36'>
            {/* <ChefHat className='w-20 h-20 mx-auto mb-6' /> */}
            <h1 className='text-5xl md:text-7xl mb-6 '>
                Il lusso di essere ospiti a casa propria
            </h1>
            <p className='md:text-2xl mb-8'>
                Mentre io trasformo la tua cucina in un ristorante d’eccellenza, tu
                riscopri il piacere di dedicarti ai tuoi ospiti.
            </p>
            <a
                href="#proposals"
                className='inline-block bg-white text-[#0d3b2e] px-8 py-4 rounded-full text-lg hover:bg-gray-100 transition-colors'
            >
                Scopri le proposte
            </a>
        </div>
    </section >
    );
}
