"use client";

import React from 'react';
import { useLanguage } from "@/services";
import { 
    PageHero, 
    NewsGridSection 
} from '@/components/organisms';

export default function News() {
    const { t } = useLanguage();
    const newsItems = t('newsPage.list') as any[];

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <PageHero 
                title={t('newsPage.hero.title')}
                highlight={t('newsPage.hero.highlight')}
                description={t('newsPage.hero.subtitle')}
                backgroundImage="http://khahoangminh.com.vn/upload/hinhanh/ddd_1366x540.jpg"
            />

            <NewsGridSection 
                newsItems={newsItems}
                readMoreText={t('newsPage.readMore')}
                footerText={t('newsPage.footer.text')}
                footerLinkText={t('newsPage.footer.linkText')}
            />
        </div>
    );
}