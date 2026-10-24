import { Ban } from 'lucide-react';
import { LegalSectionCard, ContactDarkCard } from '@/components/molecules';

interface TermsContentProps {
    t: (key: string) => string;
    usageList: string[];
}

export function TermsContent({ t, usageList }: TermsContentProps) {
    return (
        <div className="lg:w-3/4 space-y-6">
            <LegalSectionCard id="acceptance" sectionNumber="1" title={t('termsOfServicePage.acceptance.title')}>
                <p className="text-body mb-4" dangerouslySetInnerHTML={{ __html: t('termsOfServicePage.acceptance.text') }} />
                <div className="bg-amber-50/80 dark:bg-amber-950/20 p-4 rounded-xl border border-amber-200/80 dark:border-amber-900/50">
                    <p className="text-sm text-amber-900 dark:text-amber-300 font-medium">{t('termsOfServicePage.acceptance.note')}</p>
                </div>
            </LegalSectionCard>

            <LegalSectionCard id="changes" sectionNumber="2" title={t('termsOfServicePage.changes.title')}>
                <p className="text-body">{t('termsOfServicePage.changes.text')}</p>
            </LegalSectionCard>

            <LegalSectionCard id="usage" sectionNumber="3" title={t('termsOfServicePage.usage.title')}>
                <p className="text-body mb-4">{t('termsOfServicePage.usage.text')}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {Array.isArray(usageList) && usageList.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-[#111827] p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-700/80">
                            <Ban className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                            <span className="text-sm leading-relaxed">{item}</span>
                        </li>
                    ))}
                </ul>
            </LegalSectionCard>

            <LegalSectionCard id="products" sectionNumber="4" title={t('termsOfServicePage.products.title')}>
                <p className="text-body mb-4">{t('termsOfServicePage.products.text1')}</p>
                <p className="text-body">{t('termsOfServicePage.products.text2')}</p>
            </LegalSectionCard>

            <LegalSectionCard id="ip" sectionNumber="5" title={t('termsOfServicePage.ip.title')}>
                <p className="text-body">{t('termsOfServicePage.ip.text')}</p>
            </LegalSectionCard>

            <LegalSectionCard id="liability" sectionNumber="6" title={t('termsOfServicePage.liability.title')}>
                <div className="bg-orange-50 dark:bg-orange-950/20 border-l-4 border-orange-500 p-4 mb-4 rounded-r-xl">
                    <p className="text-slate-800 dark:text-slate-200 text-sm font-medium leading-relaxed">{t('termsOfServicePage.liability.disclaimer')}</p>
                </div>
                <p className="text-body">{t('termsOfServicePage.liability.text')}</p>
            </LegalSectionCard>

            <LegalSectionCard id="law" sectionNumber="7" title={t('termsOfServicePage.law.title')}>
                <p className="text-body" dangerouslySetInnerHTML={{ __html: t('termsOfServicePage.law.text') }} />
            </LegalSectionCard>

            <LegalSectionCard id="termination" sectionNumber="8" title={t('termsOfServicePage.termination.title')}>
                <p className="text-body">{t('termsOfServicePage.termination.text')}</p>
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
