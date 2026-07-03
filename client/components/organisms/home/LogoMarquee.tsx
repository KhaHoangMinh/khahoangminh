"use client";

import React from 'react';
import { useLanguage } from '@/services';
import Image from 'next/image';

const PARTNERS = [
    // { name: "POSCO", logo: "/img/partners/posco.pngm" },
    // { name: "HYUNDAI STEEL", logo: "/img/partners/hyundai_steel.pngm" },
    { name: "COTECCONS", logo: "/img/partners/coteccons.pngm" }, //
    // { name: "VINGROUP", logo: "/img/partners/vingroup.pngm" },
    { name: "VINAMILK", logo: "/img/partners/vinamilk.pngm" }, //
    { name: "PETROVIETNAM", logo: "/img/partners/petrovietnam.pngm" }, //
    // { name: "SONHA", logo: "/img/partners/sonha.pngm" },
    { name: "HEINEKEN", logo: "/img/partners/heineken.webpm" }, //
    { name: "IMEXPHARM", logo: "/img/partners/imexpharm.pngm" }, //
    { name: "REE", logo: "/img/partners/ree.pngm" }, //
    { name: "TETRA PAK", logo: "/img/partners/tetra_pak.pngm" }, //
    { name: "NESTLE", logo: "/img/partners/nestle.pngm" }, //
    { name: "COCA-COLA", logo: "/img/partners/coca_cola.pngm" }, //
    { name: "VINH HAO", logo: "/img/partners/vinhhao.pngm" }, //
    { name: "BEL", logo: "/img/partners/bel.pngm" }, //
    { name: "HUDA", logo: "/img/partners/huda.pngm" }, //
    { name: "SANEST", logo: "/img/partners/sanest.pngm" }, //
    { name: "SUNTORY PEPSICO", logo: "/img/partners/suntory_pepsico.pngm" }, //
    { name: "AJINOMOTO", logo: "/img/partners/ajinomoto.webpm" }, //
    { name: "VIETSOVPETRO", logo: "/img/partners/vietsovpetro.pngm" }, //
    { name: "SAB MILLER", logo: "/img/partners/sab_miller.pngm" }, //
    { name: "VEDAN", logo: "/img/partners/vedan.pngm" }, //
    { name: "MASAN", logo: "/img/partners/masan.pngm" }, //
    { name: "SABECO", logo: "/img/partners/sabeco.webpm" } //

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
                                    className="w-full h-full object-contain filter drop-shadow-sm" 
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