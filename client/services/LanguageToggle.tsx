"use client";

import { useLanguage } from '@/services';
import { Button } from '@/components/atoms';

export default function LanguageToggle() {
    const { language, toggleLanguage } = useLanguage();

    return (
        <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            aria-label="Toggle language"
            className="h-10 px-3.5 rounded-xl text-xs font-semibold tracking-wide backdrop-blur-md bg-slate-100/80 dark:bg-[#182234]/90 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-100 hover:bg-orange-50 dark:hover:bg-orange-500/15 hover:border-orange-500/30 hover:text-orange-600 dark:hover:text-orange-300 transition-all duration-200"
        >
            {language === 'vi' ? 'EN' : 'VI'}
        </Button>
    );
}
