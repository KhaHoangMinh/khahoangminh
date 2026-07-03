"use client";

import React from 'react';
import { useLanguage } from '@/services';
import Image from 'next/image';

const PARTNERS = [
    // { name: "POSCO", logo: "/img/partners/posco.png" },
    // { name: "HYUNDAI STEEL", logo: "/img/partners/hyundai_steel.png" },
    { name: "COTECCONS", logo: "/img/partners/coteccons.png" }, //
    // { name: "VINGROUP", logo: "/img/partners/vingroup.png" },
    { name: "VINAMILK", logo: "/img/partners/vinamilk.png" }, //
    { name: "PETROVIETNAM", logo: "/img/partners/petrovietnam.png" }, //
    // { name: "SONHA", logo: "/img/partners/sonha.png" },
    { name: "HEINEKEN", logo: "/img/partners/heineken.webp" }, //
    { name: "IMEXPHARM", logo: "/img/partners/imexpharm.png" }, //
    { name: "REE", logo: "/img/partners/ree.png" }, //
    { name: "TETRA PAK", logo: "/img/partners/tetra_pak.png" }, //
    { name: "NESTLE", logo: "/img/partners/nestle.png" }, //
    { name: "COCA-COLA", logo: "/img/partners/coca_cola.png" }, //
    { name: "VINH HAO", logo: "/img/partners/vinhhao.png" }, //
    { name: "BEL", logo: "/img/partners/bel.png" }, //
    { name: "HUDA", logo: "/img/partners/huda.png" }, //
    { name: "SANEST", logo: "/img/partners/sanest.png" }, //
    { name: "SUNTORY PEPSICO", logo: "/img/partners/suntory_pepsico.png" }, //
    { name: "AJINOMOTO", logo: "/img/partners/ajinomoto.webp" }, //
    { name: "VIETSOVPETRO", logo: "/img/partners/vietsovpetro.png" }, //
    { name: "SAB MILLER", logo: "/img/partners/sab_miller.png" }, //
    { name: "VEDAN", logo: "/img/partners/vedan.png" }, //
    { name: "MASAN", logo: "/img/partners/masan.png" }, //
    { name: "SABECO", logo: "/img/partners/sabeco.webp" } //

];

export function LogoMarquee() {
    const { t } = useLanguage();

    return (
        <section className="py-10 border-b border-slate-200 dark:border-slate-800/50 bg-white dark:bg-slate-950 overflow-hidden relative flex flex-col justify-center">
            
            <div className="container mx-auto px-4 mb-8 text-center relative z-20">
                <p className="text-sm font-bold tracking-[0.2em] text-slate-400 dark:text-slate-500 uppercase">
                    {t('homePage.trustedBy') || 'Đối tác & Khách hàng tiêu biểu'}
                </p>
            </div>

            {/* Left/Right Fade Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-white dark:from-slate-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-white dark:from-slate-950 to-transparent z-10 pointer-events-none" />

            {/* Marquee Track container */}
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused] transition-all">
                
                {/* Render the list TWICE to create the seamless infinite loop illusion */}
                {[1, 2].map((set) => (
                    <div key={set} className="flex gap-12 md:gap-20 px-6 md:px-10 items-center justify-center">
                        {PARTNERS.map((partner, index) => (
                            <div 
                                key={`${set}-${index}`} 
                                // Bounding box for logos to keep them uniform
                                className="group flex items-center justify-center w-32 md:w-44 h-16 md:h-20 transition-all duration-300 opacity-60 hover:opacity-100 hover:scale-105 cursor-default"
                            >
                                <Image 
                                    src={partner.logo} 
                                    alt={`${partner.name} logo`} 
                                    width={300}
                                    height={100}
                                    className="max-w-full max-h-full w-auto h-auto object-contain filter grayscale contrast-125 opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" 
                                    onError={(e) => {
                                        e.currentTarget.onerror = null;
                                        e.currentTarget.style.display = 'none';
                                        if (e.currentTarget.nextElementSibling) {
                                            (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'block';
                                        }
                                    }}
                                />
                                {/* Fallback Text (Hidden by default, shown via the onError handler above) */}
                                <span className="hidden text-xl md:text-2xl font-black text-slate-800 dark:text-slate-200 tracking-tighter whitespace-nowrap">
                                    {partner.name}
                                </span>
                            </div>
                        ))}
                    </div>
                ))}
                
            </div>
        </section>
    );
}