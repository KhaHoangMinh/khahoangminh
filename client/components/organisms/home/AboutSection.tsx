"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/atoms';
import { createPageUrl } from '@/lib';
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
        <section className="py-20 relative overflow-hidden bg-slate-50 dark:bg-slate-900">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-3xl font-bold mb-6 text-slate-800 dark:text-white leading-tight">
                            {intro}<br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
                                {name}
                            </span>
                        </h2>
                        <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">{desc1}</p>
                        <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">{desc2}</p>
                        <div className="backdrop-blur-md bg-orange-50 dark:bg-orange-900/10 border-l-4 border-orange-600 p-6 rounded-r-xl shadow-sm">
                            <p className="text-slate-800 dark:text-slate-200 font-semibold italic">{quote}</p>
                        </div>
                        <Link href={createPageUrl('about')}>
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20 mt-4 transition-all hover:-translate-y-0.5">
                                {t('common.viewMore')}
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                    <div className="relative group perspective">
                        <Image
                            src="/img/assets/home/khm-01.jpg"
                            alt={name}
                            width={800}
                            height={800}
                            loading="eager"
                            className="relative rounded-3xl shadow-2xl w-full object-cover transform transition-transform duration-500"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}