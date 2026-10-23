"use client";

import React from 'react';
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
                backgroundImage="http://khahoangminh.com.vn/upload/hinhanh/ddd_1366x540.jpg"
            />
            <ContactWorkspaceSection />
        </div>
    );
}
