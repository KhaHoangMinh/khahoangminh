import Image from 'next/image';
import React from 'react';

interface PageHeroProps {
    title: string;
    highlight?: string;
    description?: string;
    backgroundImage: string;
}

export function PageHero({ title, highlight, description, backgroundImage }: PageHeroProps) {
    return (
        <section className="section-hero-compact relative overflow-hidden bg-orange-50/70 dark:bg-[#0B0F17] text-slate-900 dark:text-slate-50 border-b border-orange-200/70 dark:border-slate-800/90 transition-colors">
            {/* Background Image */}
            <Image 
                src={backgroundImage} 
                alt={title || "Hero Background"} 
                priority
                fill
                sizes="100vw"
                className="absolute inset-0 w-full h-full object-cover opacity-10 dark:opacity-22"
            />
            {/* KHM Brand Gradient & Radial Glow (Warm Industrial Daylight in Light Mode, Brushed Gunmetal in Dark Mode) */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/95 via-white/90 to-amber-50/90 dark:from-[#0B0F17]/95 dark:via-[#111827]/88 dark:to-[#182234]/82" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/15 dark:from-orange-500/24 via-transparent to-transparent pointer-events-none" />

            <div className="container-khm relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-8">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 mb-2.5">
                            <span className="w-8 h-1 bg-gradient-to-r from-orange-600 to-amber-500 rounded-full" />
                            <span className="text-xs font-bold uppercase tracking-widest text-orange-600 dark:text-orange-300">
                                INOX KHA HOÀNG MINH
                            </span>
                        </div>
                        <h1 className="heading-hero text-slate-900 dark:text-slate-50">
                            {title}{' '}
                            {highlight && (
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 dark:from-orange-400 dark:via-amber-300 dark:to-orange-400">
                                    {highlight}
                                </span>
                            )}
                        </h1>
                    </div>
                    {description && (
                        <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed max-w-xl lg:pb-1 border-l-2 border-orange-500/60 dark:border-orange-400/70 pl-4">
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}
