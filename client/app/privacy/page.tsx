"use client";

import { useState, useEffect, useMemo } from 'react';
import { FileText, Eye, Server, Cookie, Globe, Lock, ShieldCheck, Mail } from 'lucide-react';
import { useLanguage } from '@/services';
import { LegalPageHero, LegalSidebarNav, PrivacyContent } from '@/components/organisms';

const SECTION_IDS = ['intro', 'collection', 'usage', 'cookies', 'sharing', 'security', 'rights', 'contact'];

export default function PrivacyPolicy() {
    const { t } = useLanguage();
    const [activeSection, setActiveSection] = useState('intro');

    const sidebarItems = useMemo(() => [
        { id: 'intro', label: t('privacyPolicyPage.toc.intro'), icon: FileText },
        { id: 'collection', label: t('privacyPolicyPage.toc.collection'), icon: Eye },
        { id: 'usage', label: t('privacyPolicyPage.toc.usage'), icon: Server },
        { id: 'cookies', label: t('privacyPolicyPage.toc.cookies'), icon: Cookie },
        { id: 'sharing', label: t('privacyPolicyPage.toc.sharing'), icon: Globe },
        { id: 'security', label: t('privacyPolicyPage.toc.security'), icon: Lock },
        { id: 'rights', label: t('privacyPolicyPage.toc.rights'), icon: ShieldCheck },
        { id: 'contact', label: t('privacyPolicyPage.toc.contact'), icon: Mail },
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
                badgeText={t('privacyPolicyPage.hero.badge')}
                title1={t('privacyPolicyPage.hero.title1')}
                title2={t('privacyPolicyPage.hero.title2')}
                description={t('privacyPolicyPage.hero.updated')}
                backgroundImage="/img/assets/home/hero-bg.jpg"
            />

            <div className="container-khm py-10 sm:py-14">
                <div className="flex flex-col lg:flex-row gap-8">
                    <LegalSidebarNav 
                        title={t('privacyPolicyPage.toc.title')}
                        items={sidebarItems}
                        activeSection={activeSection}
                        onScrollTo={scrollToSection}
                    />

                    <PrivacyContent 
                        t={t} 
                        personalListData={t('privacyPolicyPage.collection.personalList') as unknown as string[]} 
                        usageListData={t('privacyPolicyPage.usage.list') as unknown as string[]} 
                    />
                </div>
            </div>
        </div>
    );
}
