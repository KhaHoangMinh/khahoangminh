"use client";

import React from 'react';
import { useLanguage } from "@/services";
import { PageHero, VideoShowcaseSection } from '@/components/organisms';

export default function Videos() {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen bg-white dark:bg-[#0B0F17]">
            <PageHero 
                title={t('videosPage.hero.title')}
                highlight={t('videosPage.hero.highlight')}
                description={t('videosPage.hero.subtitle')}
                backgroundImage="/img/assets/home/khm-01.jpg"
            />

            <VideoShowcaseSection 
                title={t('videosPage.content.title')}
                description={t('videosPage.content.description')}
                facebookText={t('videosPage.content.facebook')}
                contactText={t('videosPage.content.contact')}
            />
        </div>
    );
}