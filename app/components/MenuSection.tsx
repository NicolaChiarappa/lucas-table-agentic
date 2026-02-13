"use client";
import { useState } from 'react';
import { menus } from '@/data/menu';
import { motion, AnimatePresence } from 'framer-motion';
import proposteImage from "@/public/assets/menu_image.webp";

export function MenuSection() {
    const [activeTab, setActiveTab] = useState(menus[0].id);

    const activeMenu = menus.find(m => m.id === activeTab);

    return (
        <section className='relative py-24 bg-[#0d3b2e] overflow-hidden' id="menu">
            {/* Background Image */}
            <div
                className='absolute inset-0 bg-cover bg-center'
                style={{
                    backgroundImage: `url('${proposteImage.src}')`,
                }}
            />
            {/* Overlay */}
            <div className='absolute inset-0 bg-gradient-to-b from-[#0d3b2e]/100 via-[#0d3b2e]/40 to-[#0d3b2e]/100' />

            <div className='relative z-10 max-w-4xl mx-auto px-4'>
                <h2 className='text-5xl text-white text-center mb-16'>I Menu</h2>

                {/* Tab Selector */}
                <div className='flex justify-center mb-16 gap-4 md:gap-12 flex-wrap'>
                    {menus.map((menu) => (
                        <button
                            key={menu.id}
                            onClick={() => setActiveTab(menu.id)}
                            className={`text-xl md:text-2xl pb-2 transition-all duration-300 relative ${activeTab === menu.id
                                ? 'text-white font-medium'
                                : 'text-gray-400 hover:text-gray-200'
                                }`}
                        >
                            {menu.title}
                            {activeTab === menu.id && (
                                <motion.div
                                    layoutId="underline"
                                    className="absolute left-0 right-0 bottom-0 h-px bg-white"
                                />
                            )}
                        </button>
                    ))}
                    <a
                        href="#contact"
                        className='text-xl md:text-2xl pb-2 transition-all duration-300 relative text-gray-400 hover:text-gray-200'
                    >
                        Personalizza
                    </a>

                </div>

                {/* Menu Content */}
                <div className='min-h-[600px]'>
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className='space-y-6'
                        >
                            {activeMenu?.items.map((item, index) => (
                                <div key={index} className='text-center'>
                                    <h3 className='text-xl font-bold italic mb-2 font-sans'>
                                        {item.course}
                                    </h3>
                                    <p className='max-w-2xl mx-auto'>
                                        {item.dish}
                                    </p>

                                </div>
                            ))}
                            <div className='text-center mb-8 mt-12'>
                                <p className='text-2xl text-white/90 font-serif italic'>
                                    Prezzo p.p. CHF {activeMenu?.price} *bevande escluse
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
