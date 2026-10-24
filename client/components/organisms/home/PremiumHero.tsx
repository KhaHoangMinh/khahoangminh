"use client";

import { ActionButtonGroup } from '@/components/molecules';
import Image from 'next/image';

interface PremiumHeroProps {
    title: string;
    subtitle: string;
    description: string;
    badgeText: string;
    backgroundImage: string;
}

export function PremiumHero({ title, subtitle, description, badgeText, backgroundImage }: PremiumHeroProps) {
    return (
        <section className="relative py-12 sm:py-16 lg:py-20 flex flex-col justify-center bg-orange-50/50 dark:bg-[#0B0F17] text-slate-900 dark:text-slate-50 overflow-hidden border-b border-orange-200/60 dark:border-slate-800/90 transition-colors">
            {/* Background Image */}
            <Image 
                src={backgroundImage} 
                alt={title || "Kha Hoàng Minh Inox"} 
                priority
                fill
                sizes="100vw"
                className="absolute inset-0 w-full h-full object-cover opacity-12 dark:opacity-25"
            />
            {/* KHM Industrial Steel Overlays + Subtle Blueprint CAD Grid */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-50/95 via-white/90 to-amber-50/85 dark:from-[#0B0F17]/95 dark:via-[#111827]/88 dark:to-[#182234]/80" />
            <div className="absolute inset-0 blueprint-grid pointer-events-none opacity-40 dark:opacity-50" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-orange-500/15 via-amber-500/5 to-transparent dark:from-orange-500/22 dark:via-amber-500/8 dark:to-transparent pointer-events-none" />
            
            <div className="container-khm relative z-10">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 bg-orange-500/15 dark:bg-orange-500/20 border border-orange-500/35 dark:border-orange-400/50 text-orange-700 dark:text-orange-300 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider mb-5 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-orange-600 dark:bg-orange-400 animate-pulse" />
                        <span>{badgeText}</span>
                    </div>

                    <h1 className="heading-display text-slate-900 dark:text-slate-50 mb-5 whitespace-pre-line">
                        {title}
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 dark:from-orange-400 dark:via-amber-300 dark:to-orange-400">
                            {subtitle}
                        </span>
                    </h1>

                    <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 mb-8 leading-relaxed max-w-2xl">
                        {description}
                    </p>

                    <ActionButtonGroup />
                </div>
            </div>
        </section>
    );
}
