"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { Scale, FileSignature, RefreshCw, UserRoundXIcon, Package, Brain, AlertTriangle, Landmark, Ban } from 'lucide-react';
import { useLanguage } from '@/services';
import { LegalPageHero, LegalSidebarNav, TermsContent } from '@/components/organisms';

const SECTION_IDS = ['acceptance', 'changes', 'usage', 'products', 'ip', 'liability', 'law', 'termination'];

export default function TermsOfService() {
    const { t } = useLanguage();
    const [activeSection, setActiveSection] = useState('acceptance');

    const sidebarItems = useMemo(() => [
        { id: 'acceptance', label: t('termsOfServicePage.toc.acceptance'), icon: FileSignature },
        { id: 'changes', label: t('termsOfServicePage.toc.changes'), icon: RefreshCw },
        { id: 'usage', label: t('termsOfServicePage.toc.usage'), icon: UserRoundXIcon },
        { id: 'products', label: t('termsOfServicePage.toc.products'), icon: Package },
        { id: 'ip', label: t('termsOfServicePage.toc.ip'), icon: Brain },
        { id: 'liability', label: t('termsOfServicePage.toc.liability'), icon: AlertTriangle },
        { id: 'law', label: t('termsOfServicePage.toc.law'), icon: Landmark },
        { id: 'termination', label: t('termsOfServicePage.toc.termination'), icon: Ban },
    ], [t]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 150;
            for (const section of SECTION_IDS) {
                const element = document.getElementById(section);
                if (element && element.offsetTop <= scrollPosition) {
                    setActiveSection(section);
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({ top: element.offsetTop - 100, behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-dvh bg-slate-50 dark:bg-[#0B0F17]">
            <LegalPageHero 
                badgeText={t('termsOfServicePage.hero.badge')}
                title1={t('termsOfServicePage.hero.title1')}
                title2={t('termsOfServicePage.hero.title2')}
                description={t('termsOfServicePage.hero.updated')}
                backgroundImage="http://khahoangminh.com.vn/upload/hinhanh/ddd_1366x540.jpg"
            />

            <div className="container-khm py-10 sm:py-14">
                <div className="flex flex-col lg:flex-row gap-8">
                    <LegalSidebarNav 
                        title={t('termsOfServicePage.toc.title')}
                        titleIcon={Scale}
                        items={sidebarItems}
                        activeSection={activeSection}
                        onScrollTo={scrollToSection}
                    />

                    <TermsContent 
                        t={t} 
                        usageList={t('termsOfServicePage.usage.list') as string[]} 
                    />
                </div>
            </div>
        </div>
    );
}
