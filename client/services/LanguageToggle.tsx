"use client";

import React from 'react';
import { useLanguage } from '@/services';
import { Button } from '@/components/atoms';

export default function LanguageToggle() {
    const { language, toggleLanguage } = useLanguage();

    return (
        <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            className="font-semibold backdrop-blur-md bg-white/50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-white/10 hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:text-orange-600 dark:hover:text-orange-400 hover:scale-105 hover:shadow-lg transition-all duration-300"
        >
            {language === 'vi' ? '🇬🇧 EN' : '🇻🇳 VI'}
        </Button>
    );
}