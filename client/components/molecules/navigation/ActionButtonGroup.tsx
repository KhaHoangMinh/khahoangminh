"use client";

import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/atoms';
import { createPageUrl } from '@/lib';
import { useLanguage } from '@/services';

export function ActionButtonGroup() {
    const { t } = useLanguage();

    return (
        <div>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3.5 sm:gap-4">
                <Link href={createPageUrl('contact')} className="w-full sm:w-auto">
                    <Button
                        size="lg"
                        className="w-full sm:w-auto h-12 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-orange-600 text-white font-semibold px-7 rounded-xl shadow-lg shadow-orange-600/25 transition-all hover:-translate-y-0.5"
                    >
                        {t('common.contactNow')}
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </Link>
                <Link href={createPageUrl('products')} className="w-full sm:w-auto">
                    <Button
                        size="lg"
                        variant="outline"
                        className="w-full sm:w-auto h-12 border-slate-300 dark:border-white/25 bg-white/85 dark:bg-white/10 text-slate-800 dark:text-white hover:bg-orange-50 hover:border-orange-500 hover:text-orange-600 dark:hover:bg-white dark:hover:text-slate-900 backdrop-blur-sm px-7 rounded-xl font-semibold transition-all hover:-translate-y-0.5"
                    >
                        {t('common.viewProducts')}
                    </Button>
                </Link>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-200/80 dark:border-white/10 flex flex-wrap items-center gap-4 sm:gap-6">
                <a
                    href="tel:+84976888999"
                    className="inline-flex items-center gap-2.5 text-sm sm:text-base text-slate-700 dark:text-slate-200 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                >
                    <span className="w-8 h-8 rounded-lg bg-orange-500/15 dark:bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-600 dark:text-orange-400">
                        <Phone className="w-4 h-4" />
                    </span>
                    <span className="font-semibold tracking-wide">0976.888.999</span>
                </a>
                <a
                    href="tel:+84979866162"
                    className="inline-flex items-center gap-2.5 text-sm sm:text-base text-slate-700 dark:text-slate-200 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                >
                    <span className="w-8 h-8 rounded-lg bg-orange-500/15 dark:bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-600 dark:text-orange-400">
                        <Phone className="w-4 h-4" />
                    </span>
                    <span className="font-semibold tracking-wide">0979.866.162</span>
                </a>
            </div>
        </div>
    );
}
