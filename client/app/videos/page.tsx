"use client";

import React from 'react';
import { useLanguage } from "@/services";
import { PageHero, VideoPlaceholderSection } from '@/components/organisms';

export default function Videos() {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <PageHero 
                title={t('videosPage.hero.title')}
                highlight={t('videosPage.hero.highlight')}
                description={t('videosPage.hero.subtitle')}
                backgroundImage="http://khahoangminh.com.vn/upload/hinhanh/ddd_1366x540.jpg"
            />

            <VideoPlaceholderSection 
                title={t('videosPage.content.title')}
                description={t('videosPage.content.description')}
                facebookText={t('videosPage.content.facebook')}
                contactText={t('videosPage.content.contact')}
            />
        </div>
    );
}