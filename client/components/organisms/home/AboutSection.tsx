"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/atoms';
import { createPageUrl, getAssetPath } from '@/lib';
import { useLanguage } from '@/services';
import Image from 'next/image';

interface AboutSectionProps {
    intro: string;
    name: string;
    desc1: string;
    desc2: string;
    quote: string;
}

export function AboutSection({ intro, name, desc1, desc2, quote }: AboutSectionProps) {
    const { t } = useLanguage();

    return (
        <section className="section-frame-half relative overflow-hidden surface-band-alt">
            <div className="container-khm">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    <div className="lg:col-span-7 space-y-4">
                        <div>
                            <span className="badge-khm mb-3">
                                {intro}
                            </span>
                            <h2 className="heading-section">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500 dark:from-orange-400 dark:to-amber-300">
                                    {name}
                                </span>
                            </h2>
                        </div>
                        <p className="text-body leading-relaxed">{desc1}</p>
                        <p className="text-body leading-relaxed">{desc2}</p>
                        
                        {/* Quote Box */}
                        <div className="backdrop-blur-md bg-orange-500/10 dark:bg-[#182234]/95 border border-orange-500/20 dark:border-slate-700/80 border-l-4 border-l-orange-600 dark:border-l-orange-400 p-4 sm:p-5 rounded-r-xl shadow-xs">
                            <p className="text-slate-900 dark:text-slate-100 font-serif font-semibold italic text-base sm:text-lg">
                                {quote}
                            </p>
                        </div>

                        <div className="pt-2">
                            <Link href={createPageUrl('about')}>
                                <Button
                                    size="lg"
                                    className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 rounded-xl shadow-md shadow-orange-600/20 transition-all hover:-translate-y-0.5"
                                >
                                    {t('common.viewMore')}
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="lg:col-span-5 relative">
                        {/* Blueprint Corner Accents */}
                        <div className="blueprint-corner-tl -top-2 -left-2 z-20" />
                        <div className="blueprint-corner-tr -top-2 -right-2 z-20" />
                        <div className="blueprint-corner-bl -bottom-2 -left-2 z-20" />
                        <div className="blueprint-corner-br -bottom-2 -right-2 z-20" />

                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 dark:border-slate-800 aspect-[4/3] group">
                            <Image
                                src={getAssetPath("/img/assets/home/khm-01.jpg")}
                                alt={name}
                                fill
                                sizes="(max-width: 1024px) 100vw, 42vw"
                                loading="lazy"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
