"use client";

import Link from 'next/link';
import { ShieldCheck, Lock, Users, AlertCircle, FileKey, Scale, Building, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, Button } from '@/components/atoms';
import { useLanguage } from '@/services';
import { createPageUrl } from '@/lib';
import { PrincipleCard } from '@/components/molecules';

export function ProtectionContent() {
    const { t } = useLanguage();

    const principles = [
        { icon: Scale, title: t('protectionPage.principles.p1.title'), desc: t('protectionPage.principles.p1.desc') },
        { icon: FileKey, title: t('protectionPage.principles.p2.title'), desc: t('protectionPage.principles.p2.desc') },
        { icon: ShieldCheck, title: t('protectionPage.principles.p3.title'), desc: t('protectionPage.principles.p3.desc') }
    ];
    
    const standardsList = t('protectionPage.sections.s2.items') as string[] || [];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Left Column: Main Content */}
            <div className="lg:col-span-8 space-y-8">
                <div>
                    <h2 className="heading-section mb-4">
                        {t('protectionPage.preamble.title')}
                    </h2>
                    <p className="text-body" dangerouslySetInnerHTML={{ __html: t('protectionPage.preamble.text') }} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {principles.map((item, index) => (
                        <PrincipleCard key={index} icon={item.icon} title={item.title} desc={item.desc} />
                    ))}
                </div>

                <div className="space-y-6 card-khm p-6 sm:p-8 rounded-2xl">
                    <div className="border-l-4 border-orange-500 pl-5 py-1">
                        <h3 className="heading-card mb-2">{t('protectionPage.sections.s1.title')}</h3>
                        <p className="text-body">{t('protectionPage.sections.s1.text')}</p>
                    </div>

                    <div className="border-l-4 border-amber-500 pl-5 py-1">
                        <h3 className="heading-card mb-2">{t('protectionPage.sections.s2.title')}</h3>
                        <p className="text-body mb-4">{t('protectionPage.sections.s2.text')}</p>
                        <ul className="space-y-2.5">
                            {Array.isArray(standardsList) && standardsList.map((li, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-[#111827] border border-slate-200/60 dark:border-slate-700/80 p-3 rounded-xl">
                                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full shrink-0" />
                                    <span className="text-sm">{li}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="border-l-4 border-orange-500 pl-5 py-1">
                        <h3 className="heading-card mb-2">{t('protectionPage.sections.s3.title')}</h3>
                        <p className="text-body">{t('protectionPage.sections.s3.text')}</p>
                    </div>
                </div>

                <Card className="bg-red-50/80 dark:bg-red-950/30 border border-red-200/80 dark:border-red-800/60 rounded-2xl shadow-xs">
                    <CardContent className="p-6 flex items-start gap-4">
                        <AlertCircle className="w-7 h-7 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                        <div>
                            <h4 className="font-bold text-red-900 dark:text-red-200 text-base sm:text-lg mb-1.5">{t('protectionPage.breach.title')}</h4>
                            <p className="text-red-800 dark:text-red-200/90 text-sm leading-relaxed">{t('protectionPage.breach.text')}</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Right Column: Sidebar */}
            <div className="lg:col-span-4 space-y-6">
                <Card className="shadow-lg border border-orange-200/80 dark:border-slate-700/80 bg-gradient-to-br from-orange-50 via-white to-amber-50/70 dark:from-[#182234] dark:via-[#141D2D] dark:to-[#111827] text-slate-900 dark:text-slate-50 rounded-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-500/10 dark:from-orange-500/20 via-transparent to-transparent pointer-events-none" />
                    <CardHeader className="relative z-10 pb-2">
                        <CardTitle className="flex items-center gap-2.5 text-lg font-bold text-slate-900 dark:text-slate-50">
                            <Users className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                            {t('protectionPage.contact.title')}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 relative z-10">
                        <p className="text-slate-600 dark:text-slate-200 text-sm leading-relaxed">{t('protectionPage.contact.desc')}</p>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 p-4 bg-white/90 dark:bg-[#0B0F17]/90 rounded-xl border border-orange-200/60 dark:border-slate-700/80">
                                <Building className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
                                <div className="text-sm">
                                    <div className="font-semibold text-slate-900 dark:text-slate-50">{t('protectionPage.contact.office')}</div>
                                    <div className="text-slate-600 dark:text-slate-200">{t('protectionPage.contact.address')}</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-white/90 dark:bg-[#0B0F17]/90 rounded-xl border border-orange-200/60 dark:border-slate-700/80">
                                <Lock className="w-5 h-5 text-orange-600 dark:text-orange-400 shrink-0" />
                                <div className="text-sm">
                                    <div className="font-semibold text-slate-900 dark:text-slate-50">{t('protectionPage.contact.department')}</div>
                                    <a href="mailto:privacy@khahoangminh.com.vn" className="text-orange-600 dark:text-orange-300 hover:underline transition-colors font-medium">
                                        privacy@khahoangminh.com.vn
                                    </a>
                                </div>
                            </div>
                        </div>
                        <Link href={createPageUrl('contact')} className="block pt-2">
                            <Button className="w-full h-11 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-orange-600 text-white font-semibold transition-all shadow-md shadow-orange-600/20">
                                {t('protectionPage.contact.button')}
                            </Button>
                        </Link>
                    </CardContent>
                </Card>

                <div className="card-khm p-6 rounded-2xl">
                    <h4 className="heading-card !text-base mb-4">{t('protectionPage.related.title')}</h4>
                    <nav className="space-y-2">
                        <Link href={createPageUrl('privacy')} className="flex items-center justify-between text-slate-700 dark:text-slate-200 hover:text-orange-600 dark:hover:text-orange-300 group p-2.5 rounded-xl hover:bg-orange-50/70 dark:hover:bg-[#1E293B] transition-all">
                            <span className="text-sm font-medium">{t('protectionPage.related.privacy')}</span>
                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                        <div className="h-px bg-slate-200 dark:bg-slate-700/80" />
                        <Link href={createPageUrl('terms')} className="flex items-center justify-between text-slate-700 dark:text-slate-200 hover:text-orange-600 dark:hover:text-orange-300 group p-2.5 rounded-xl hover:bg-orange-50/70 dark:hover:bg-[#1E293B] transition-all">
                            <span className="text-sm font-medium">{t('protectionPage.related.terms')}</span>
                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    );
}
