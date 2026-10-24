"use client";

import { Suspense } from 'react';
import { useLanguage } from "@/services";
import { PageHero, ContactWorkspaceSection } from '@/components/organisms';

export default function Contact() {
    const { t } = useLanguage();

    return (
        <div className="min-h-dvh bg-white dark:bg-[#0B0F17]">
            <PageHero 
                title={t('contactPage.heroTitle')}
                highlight={t('contactPage.heroSubtitle')}
                description={t('contactPage.heroDesc')}
                backgroundImage="/img/assets/home/khm-01.jpg"
            />
            <Suspense fallback={<div className="section-frame-full container-khm animate-pulse" />}>
                <ContactWorkspaceSection />
            </Suspense>
        </div>
    );
}
