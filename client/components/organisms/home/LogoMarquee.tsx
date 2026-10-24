"use client";

import { useLanguage } from '@/services';
import { getAssetPath } from '@/lib';
import Image from 'next/image';

type AspectCategory = 'square' | 'standard' | 'wide' | 'ultrawide';

interface PartnerItem {
    name: string;
    logo: string;
    sectorVi: string;
    sectorEn: string;
    aspect: AspectCategory;
}

const ROW_1_PARTNERS: PartnerItem[] = [
    { name: "POSCO", logo: "/img/partners/posco.png", sectorVi: "THÉP", sectorEn: "STEEL MILL", aspect: "ultrawide" },
    { name: "HYUNDAI STEEL", logo: "/img/partners/hyundai_steel.png", sectorVi: "THÉP", sectorEn: "STEEL MILL", aspect: "ultrawide" },
    { name: "COTECCONS", logo: "/img/partners/coteccons.png", sectorVi: "XÂY DỰNG", sectorEn: "CONSTRUCTION", aspect: "ultrawide" },
    { name: "PETROVIETNAM", logo: "/img/partners/petrovietnam.png", sectorVi: "DẦU KHÍ", sectorEn: "OIL & GAS", aspect: "square" },
    { name: "VIETSOVPETRO", logo: "/img/partners/vietsovpetro.png", sectorVi: "DẦU KHÍ", sectorEn: "OIL & GAS", aspect: "standard" },
    { name: "REE CORP", logo: "/img/partners/ree.png", sectorVi: "CƠ ĐIỆN", sectorEn: "M&E", aspect: "standard" },
    { name: "VINGROUP", logo: "/img/partners/vingroup.png", sectorVi: "ĐA NGÀNH", sectorEn: "CONGLOMERATE", aspect: "standard" },
    { name: "SƠN HÀ", logo: "/img/partners/sonha.png", sectorVi: "CÔNG NGHIỆP", sectorEn: "INDUSTRIAL", aspect: "standard" },
    { name: "TETRA PAK", logo: "/img/partners/tetra_pak.png", sectorVi: "BAO BÌ", sectorEn: "PACKAGING", aspect: "ultrawide" },
    { name: "IMEXPHARM", logo: "/img/partners/imexpharm.png", sectorVi: "DƯỢC PHẨM", sectorEn: "PHARMA", aspect: "standard" },
    { name: "MASAN", logo: "/img/partners/masan.png", sectorVi: "SẢN XUẤT", sectorEn: "MANUFACTURING", aspect: "wide" },
    { name: "VINAMILK", logo: "/img/partners/vinamilk.png", sectorVi: "THỰC PHẨM", sectorEn: "DAIRY & F&B", aspect: "wide" },
];

const ROW_2_PARTNERS: PartnerItem[] = [
    { name: "HEINEKEN", logo: "/img/partners/heineken.webp", sectorVi: "ĐỒ UỐNG", sectorEn: "BEVERAGE", aspect: "ultrawide" },
    { name: "COCA-COLA", logo: "/img/partners/coca_cola.png", sectorVi: "ĐỒ UỐNG", sectorEn: "BEVERAGE", aspect: "wide" },
    { name: "NESTLÉ", logo: "/img/partners/nestle.png", sectorVi: "THỰC PHẨM", sectorEn: "F&B", aspect: "square" },
    { name: "SUNTORY PEPSICO", logo: "/img/partners/suntory_pepsico.png", sectorVi: "ĐỒ UỐNG", sectorEn: "BEVERAGE", aspect: "standard" },
    { name: "SABECO", logo: "/img/partners/sabeco.webp", sectorVi: "ĐỒ UỐNG", sectorEn: "BEVERAGE", aspect: "square" },
    { name: "AJINOMOTO", logo: "/img/partners/ajinomoto.webp", sectorVi: "THỰC PHẨM", sectorEn: "FOOD TECH", aspect: "standard" },
    { name: "VĨNH HẢO", logo: "/img/partners/vinhhao.png", sectorVi: "ĐỒ UỐNG", sectorEn: "MINERAL WATER", aspect: "standard" },
    { name: "BEL GROUP", logo: "/img/partners/bel.png", sectorVi: "THỰC PHẨM", sectorEn: "DAIRY", aspect: "square" },
    { name: "HUDA", logo: "/img/partners/huda.png", sectorVi: "ĐỒ UỐNG", sectorEn: "BREWERY", aspect: "standard" },
    { name: "SANEST", logo: "/img/partners/sanest.png", sectorVi: "THỰC PHẨM", sectorEn: "NUTRITION", aspect: "square" },
    { name: "SABMILLER", logo: "/img/partners/sab_miller.png", sectorVi: "ĐỒ UỐNG", sectorEn: "BREWERY", aspect: "standard" },
    { name: "VEDAN", logo: "/img/partners/vedan.png", sectorVi: "CHẾ BIẾN", sectorEn: "BIOTECH & FOOD", aspect: "ultrawide" },
];

const OPTICAL_SIZE_CLASSES: Record<AspectCategory, string> = {
    square: "w-[68px] h-[36px] sm:w-[76px] sm:h-[38px]",
    standard: "w-[92px] h-[32px] sm:w-[102px] sm:h-[34px]",
    wide: "w-[108px] h-[27px] sm:w-[118px] sm:h-[29px]",
    ultrawide: "w-[120px] h-[22px] sm:w-[130px] sm:h-[24px]",
};

function PartnerPod({ partner, isVi }: { partner: PartnerItem; isVi: boolean }) {
    return (
        <div
            className="group relative flex flex-col w-40 sm:w-44 rounded-xl overflow-hidden bg-white dark:bg-[#182234] border border-slate-200/85 dark:border-slate-700/85 hover:border-orange-500/60 dark:hover:border-orange-400/70 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 shrink-0"
        >
            {/* Studio-Lit Platinum Optical Stage (guarantees 100% contrast for dark/multi-color logos in both modes) */}
            <div className="relative h-14 sm:h-16 w-full flex items-center justify-center bg-slate-50/85 dark:bg-[#F1F5F9] group-hover:bg-white dark:group-hover:bg-white px-3 transition-colors duration-300">
                <div className={`relative ${OPTICAL_SIZE_CLASSES[partner.aspect]} transition-transform duration-300 group-hover:scale-105`}>
                    <Image
                        src={getAssetPath(partner.logo)}
                        alt={`${partner.name} logo`}
                        fill
                        sizes="150px"
                        className="object-contain"
                    />
                </div>
            </div>

            {/* Industrial Spec Caption Bar */}
            <div className="px-2.5 py-1.5 flex items-center justify-between gap-1.5 bg-white dark:bg-[#182234] border-t border-slate-200/80 dark:border-slate-700/80">
                <span className="text-[10px] font-bold text-slate-800 dark:text-slate-100 tracking-tight truncate">
                    {partner.name}
                </span>
                <span className="text-[9px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-orange-500/10 dark:bg-orange-500/20 text-orange-700 dark:text-orange-300 shrink-0">
                    {isVi ? partner.sectorVi : partner.sectorEn}
                </span>
            </div>
        </div>
    );
}

export function LogoMarquee() {
    const { t, language } = useLanguage();
    const isVi = language !== 'en';

    return (
        <section className="py-5 sm:py-7 border-b border-slate-200/80 dark:border-slate-800/90 bg-white dark:bg-[#0B0F17] overflow-hidden relative flex flex-col justify-center">
            {/* Architectural Spec Header */}
            <div className="container-khm mb-4 sm:mb-5 relative z-20">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pb-3 border-b border-slate-200/70 dark:border-slate-800/80">
                    <div className="flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-orange-600 dark:bg-orange-400" />
                        <p className="text-xs font-extrabold tracking-[0.18em] text-slate-800 dark:text-slate-100 uppercase">
                            {t('homePage.trustedBy') || 'Đối tác & Khách hàng tiêu biểu'}
                        </p>
                    </div>
                    <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-orange-500/10 dark:bg-orange-500/15 border border-orange-500/25 dark:border-orange-400/35 text-orange-700 dark:text-orange-300">
                        {isVi ? '24+ Tập Đoàn & Nhà Thầu Công Nghiệp' : '24+ Industrial & Enterprise Partners'}
                    </span>
                </div>
            </div>

            {/* Left/Right Edge Fade Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-white dark:from-[#0B0F17] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-white dark:from-[#0B0F17] to-transparent z-10 pointer-events-none" />

            {/* Dual-Track Counter-Flowing Marquee */}
            <div className="space-y-3 sm:space-y-3.5">
                {/* Track 1: Left-scrolling */}
                <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                    {[1, 2].map((set) => (
                        <div key={`row1-${set}`} className="flex gap-3 sm:gap-4 px-1.5 sm:px-2 items-center">
                            {ROW_1_PARTNERS.map((partner, index) => (
                                <PartnerPod key={`r1-${set}-${index}`} partner={partner} isVi={isVi} />
                            ))}
                        </div>
                    ))}
                </div>

                {/* Track 2: Right-scrolling */}
                <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused]">
                    {[1, 2].map((set) => (
                        <div key={`row2-${set}`} className="flex gap-3 sm:gap-4 px-1.5 sm:px-2 items-center">
                            {ROW_2_PARTNERS.map((partner, index) => (
                                <PartnerPod key={`r2-${set}-${index}`} partner={partner} isVi={isVi} />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
