"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone } from 'lucide-react';
import { Button } from '@/components/atoms';
import { createPageUrl } from '@/lib';
import { useLanguage } from '@/services';

interface CtaSectionProps {
    title: string;
    description: string;
}

export function CtaSection({ title, description }: CtaSectionProps) {
    const { t } = useLanguage();
    
    return (
        <section className="py-8 sm:py-10 surface-cta-industrial">
            <Image
                src="http://khahoangminh.com.vn/upload/hinhanh/ddd_1366x540.jpg"
                alt=""
                fill
                sizes="100vw"
                loading="lazy"
                className="object-cover opacity-15 dark:opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/95 via-orange-500/90 to-amber-500/90 dark:from-[#26130A]/95 dark:via-[#161F30]/92 dark:to-[#0F172A]/95" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/15 dark:from-orange-500/28 via-transparent to-transparent pointer-events-none" />

            <div className="container-khm relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 text-center lg:text-left">
                    <div className="max-w-2xl">
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">{title}</h2>
                        <p className="text-sm sm:text-base text-orange-50 dark:text-slate-200 leading-relaxed">
                            {description}
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3.5 justify-center lg:justify-end shrink-0">
                        <Link href={createPageUrl('contact')}>
                            <Button
                                size="lg"
                                className="h-12 bg-white text-orange-600 hover:bg-orange-50 dark:bg-gradient-to-r dark:from-orange-600 dark:to-amber-500 dark:hover:from-orange-500 dark:hover:to-amber-400 dark:text-white border-none font-bold px-7 rounded-xl shadow-lg shadow-black/15 dark:shadow-orange-600/30 transition-all hover:-translate-y-0.5"
                            >
                                <Mail className="mr-2 w-5 h-5" />
                                {t('common.sendRequest')}
                            </Button>
                        </Link>
                        <a href="tel:+84976888999">
                            <Button
                                size="lg"
                                variant="outline"
                                className="h-12 border-white/40 bg-white/10 text-white hover:bg-white/20 dark:border-slate-600 dark:bg-[#182234]/90 dark:hover:border-orange-400 px-6 rounded-xl font-semibold backdrop-blur-sm transition-all hover:-translate-y-0.5"
                            >
                                <Phone className="mr-2 w-4 h-4" />
                                0976.888.999
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
