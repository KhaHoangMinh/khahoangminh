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
        <div className="lg:w-3/4 space-y-8">
            <LegalSectionCard id="intro" sectionNumber="1" title={t('privacyPolicyPage.intro.title')}>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t('privacyPolicyPage.intro.text1') }} />
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{t('privacyPolicyPage.intro.text2')}</p>
            </LegalSectionCard>

            <LegalSectionCard id="collection" sectionNumber="2" title={t('privacyPolicyPage.collection.title')}>
                <div className="space-y-6">
                    <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800">
                        <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-3">{t('privacyPolicyPage.collection.personalTitle')}</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-4">{t('privacyPolicyPage.collection.personalText')}</p>
                        <ul className="grid md:grid-cols-2 gap-3">
                            {Array.isArray(personalListData) && personalListData.map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800">
                        <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-3">{t('privacyPolicyPage.collection.usageTitle')}</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{t('privacyPolicyPage.collection.usageText')}</p>
                    </div>
                </div>
            </LegalSectionCard>

            <LegalSectionCard id="usage" sectionNumber="3" title={t('privacyPolicyPage.usage.title')}>
                <p className="text-slate-600 dark:text-slate-400 mb-4">{t('privacyPolicyPage.usage.text')}</p>
                <ul className="space-y-3">
                    {Array.isArray(usageListData) && usageListData.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                            <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                            {item}
                        </li>
                    ))}
                </ul>
            </LegalSectionCard>

            <LegalSectionCard id="cookies" sectionNumber="4" title={t('privacyPolicyPage.cookies.title')}>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">{t('privacyPolicyPage.cookies.text1')}</p>
                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <p className="text-sm text-slate-700 dark:text-slate-300">{t('privacyPolicyPage.cookies.text2')}</p>
                </div>
            </LegalSectionCard>

            <LegalSectionCard id="sharing" sectionNumber="5" title={t('privacyPolicyPage.sharing.title')}>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{t('privacyPolicyPage.sharing.text')}</p>
            </LegalSectionCard>

            <LegalSectionCard id="security" sectionNumber="6" title={t('privacyPolicyPage.security.title')}>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">{t('privacyPolicyPage.security.text')}</p>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800">
                        <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center text-orange-600">
                            <Lock className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-800 dark:text-white">{t('privacyPolicyPage.security.sslTitle')}</h4>
                            <p className="text-xs text-slate-500">{t('privacyPolicyPage.security.sslDesc')}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600">
                            <Server className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-800 dark:text-white">{t('privacyPolicyPage.security.storageTitle')}</h4>
                            <p className="text-xs text-slate-500">{t('privacyPolicyPage.security.storageDesc')}</p>
                        </div>
                    </div>
                </div>
            </LegalSectionCard>

            <LegalSectionCard id="rights" sectionNumber="7" title={t('privacyPolicyPage.rights.title')}>
                <p className="text-slate-600 dark:text-slate-300 mb-6">{t('privacyPolicyPage.rights.text')}</p>
                <Link href={createPageUrl('contact')}>
                    <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all">
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