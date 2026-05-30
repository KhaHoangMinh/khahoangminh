import React from 'react';
import { Ban } from 'lucide-react';
import { LegalSectionCard, ContactDarkCard } from '@/components/molecules';

export function TermsContent({ t, usageList }) {
    return (
        <div className="lg:w-3/4 space-y-8">
            <LegalSectionCard id="acceptance" sectionNumber="1" title={t('termsOfServicePage.acceptance.title')}>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t('termsOfServicePage.acceptance.text') }} />
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-900">
                    <p className="text-sm text-blue-800 dark:text-blue-300 font-medium">{t('termsOfServicePage.acceptance.note')}</p>
                </div>
            </LegalSectionCard>

            <LegalSectionCard id="changes" sectionNumber="2" title={t('termsOfServicePage.changes.title')}>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{t('termsOfServicePage.changes.text')}</p>
            </LegalSectionCard>

            <LegalSectionCard id="usage" sectionNumber="3" title={t('termsOfServicePage.usage.title')}>
                <p className="text-slate-600 dark:text-slate-300 mb-4">{t('termsOfServicePage.usage.text')}</p>
                <ul className="grid md:grid-cols-2 gap-4">
                    {Array.isArray(usageList) && usageList.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
                            <Ban className="w-5 h-5 text-red-500 flex-shrink-0" />
                            <span className="text-sm">{item}</span>
                        </li>
                    ))}
                </ul>
            </LegalSectionCard>

            <LegalSectionCard id="products" sectionNumber="4" title={t('termsOfServicePage.products.title')}>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">{t('termsOfServicePage.products.text1')}</p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{t('termsOfServicePage.products.text2')}</p>
            </LegalSectionCard>

            <LegalSectionCard id="ip" sectionNumber="5" title={t('termsOfServicePage.ip.title')}>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{t('termsOfServicePage.ip.text')}</p>
            </LegalSectionCard>

            <LegalSectionCard id="liability" sectionNumber="6" title={t('termsOfServicePage.liability.title')}>
                <div className="bg-orange-50 dark:bg-orange-900/10 border-l-4 border-orange-500 p-4 mb-4 rounded-r-lg">
                    <p className="text-slate-700 dark:text-slate-300 text-sm font-medium">{t('termsOfServicePage.liability.disclaimer')}</p>
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{t('termsOfServicePage.liability.text')}</p>
            </LegalSectionCard>

            <LegalSectionCard id="law" sectionNumber="7" title={t('termsOfServicePage.law.title')}>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('termsOfServicePage.law.text') }} />
            </LegalSectionCard>

            <LegalSectionCard id="termination" sectionNumber="8" title={t('termsOfServicePage.termination.title')}>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{t('termsOfServicePage.termination.text')}</p>
            </LegalSectionCard>

            <div id="contact" className="scroll-mt-28">
                <ContactDarkCard 
                    title={t('termsOfServicePage.contact.title')}
                    desc={t('termsOfServicePage.contact.desc')}
                    buttonText={t('termsOfServicePage.contact.button')}
                />
            </div>
        </div>
    );
}