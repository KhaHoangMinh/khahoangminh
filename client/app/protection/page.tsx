"use client";

import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/services';
import { LegalPageHero, ProtectionContent } from '@/components/organisms';

export default function PersonalDataProtection() {
    const { t } = useLanguage();

    return (
        <div className="min-h-dvh bg-white dark:bg-[#0B0F17]">
            <LegalPageHero 
                badgeText={t('protectionPage.hero.badge')}
                badgeIcon={ShieldCheck}
                title1={t('protectionPage.hero.title1')}
                title2={t('protectionPage.hero.title2')}
                description={t('protectionPage.hero.desc')}
                backgroundImage="http://khahoangminh.com.vn/upload/hinhanh/ddd_1366x540.jpg"
            />

            <div className="container-khm py-10 sm:py-14">
                <ProtectionContent />
            </div>
        </div>
    );
}
