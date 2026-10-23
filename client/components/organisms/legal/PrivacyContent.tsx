import React from 'react';
import Link from 'next/link';
import { CheckCircle2, Server, Lock } from 'lucide-react';
import { Button } from '@/components/atoms';
import { ContactDarkCard, LegalSectionCard } from '@/components/molecules';
import { createPageUrl } from '@/lib';

interface PrivacyContentProps {
    t: (key: string) => string;
    personalListData: string[];
    usageListData: string[];
}

export function PrivacyContent({ t, personalListData, usageListData }: PrivacyContentProps) {
    return (
        <div className="lg:w-3/4 space-y-6">
            <LegalSectionCard id="intro" sectionNumber="1" title={t('privacyPolicyPage.intro.title')}>
                <p className="text-body mb-4" dangerouslySetInnerHTML={{ __html: t('privacyPolicyPage.intro.text1') }} />
                <p className="text-body">{t('privacyPolicyPage.intro.text2')}</p>
            </LegalSectionCard>

            <LegalSectionCard id="collection" sectionNumber="2" title={t('privacyPolicyPage.collection.title')}>
                <div className="space-y-5">
                    <div className="bg-slate-50 dark:bg-[#111827] p-5 sm:p-6 rounded-xl border border-slate-200/80 dark:border-slate-700/80">
                        <h3 className="heading-card !text-base sm:!text-lg mb-2.5">{t('privacyPolicyPage.collection.personalTitle')}</h3>
                        <p className="text-body mb-4">{t('privacyPolicyPage.collection.personalText')}</p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {Array.isArray(personalListData) && personalListData.map((item, i) => (
                                <li key={i} className="flex items-center gap-2.5 text-slate-700 dark:text-slate-200 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-orange-600 dark:text-orange-400 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-slate-50 dark:bg-[#111827] p-5 sm:p-6 rounded-xl border border-slate-200/80 dark:border-slate-700/80">
                        <h3 className="heading-card !text-base sm:!text-lg mb-2.5">{t('privacyPolicyPage.collection.usageTitle')}</h3>
                        <p className="text-body">{t('privacyPolicyPage.collection.usageText')}</p>
                    </div>
                </div>
            </LegalSectionCard>

            <LegalSectionCard id="usage" sectionNumber="3" title={t('privacyPolicyPage.usage.title')}>
                <p className="text-body mb-4">{t('privacyPolicyPage.usage.text')}</p>
                <ul className="space-y-2.5">
                    {Array.isArray(usageListData) && usageListData.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-body">
                            <span className="w-1.5 h-1.5 bg-orange-600 dark:bg-orange-400 rounded-full mt-2 shrink-0" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </LegalSectionCard>

            <LegalSectionCard id="cookies" sectionNumber="4" title={t('privacyPolicyPage.cookies.title')}>
                <p className="text-body mb-4">{t('privacyPolicyPage.cookies.text1')}</p>
                <div className="bg-amber-50/80 dark:bg-amber-950/20 border-l-4 border-amber-500 p-4 rounded-r-xl">
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{t('privacyPolicyPage.cookies.text2')}</p>
                </div>
            </LegalSectionCard>

            <LegalSectionCard id="sharing" sectionNumber="5" title={t('privacyPolicyPage.sharing.title')}>
                <p className="text-body">{t('privacyPolicyPage.sharing.text')}</p>
            </LegalSectionCard>

            <LegalSectionCard id="security" sectionNumber="6" title={t('privacyPolicyPage.security.title')}>
                <p className="text-body mb-6">{t('privacyPolicyPage.security.text')}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-[#111827] rounded-xl border border-slate-200/80 dark:border-slate-700/80">
                        <div className="w-12 h-12 bg-orange-500/15 dark:bg-orange-500/20 rounded-xl flex items-center justify-center text-orange-600 dark:text-orange-300 shrink-0">
                            <Lock className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 dark:text-slate-50 text-sm sm:text-base">{t('privacyPolicyPage.security.sslTitle')}</h4>
                            <p className="text-xs text-slate-600 dark:text-slate-200">{t('privacyPolicyPage.security.sslDesc')}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-[#111827] rounded-xl border border-slate-200/80 dark:border-slate-700/80">
                        <div className="w-12 h-12 bg-amber-500/15 dark:bg-amber-500/20 rounded-xl flex items-center justify-center text-amber-600 dark:text-amber-300 shrink-0">
                            <Server className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 dark:text-slate-50 text-sm sm:text-base">{t('privacyPolicyPage.security.storageTitle')}</h4>
                            <p className="text-xs text-slate-600 dark:text-slate-200">{t('privacyPolicyPage.security.storageDesc')}</p>
                        </div>
                    </div>
                </div>
            </LegalSectionCard>

            <LegalSectionCard id="rights" sectionNumber="7" title={t('privacyPolicyPage.rights.title')}>
                <p className="text-body mb-5">{t('privacyPolicyPage.rights.text')}</p>
                <Link href={createPageUrl('contact')}>
                    <Button variant="outline" className="rounded-xl border-orange-600 text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-950/30 font-semibold transition-all">
                        {t('privacyPolicyPage.rights.button')}
                    </Button>
                </Link>
            </LegalSectionCard>

            <div id="contact" className="scroll-mt-28">
                <ContactDarkCard 
                    title={t('privacyPolicyPage.contact.title')}
                    desc={t('privacyPolicyPage.contact.text')}
                    buttonText={t('privacyPolicyPage.contact.linkText')}
                />
            </div>
        </div>
    );
}
