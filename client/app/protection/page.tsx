"use client";

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Lock, Users, AlertCircle, FileKey, Scale, Building, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, Button } from '@/components/atoms';
import { useLanguage } from '@/services';
import { createPageUrl } from '@/lib';
import { LegalPageHero } from '@/components/organisms';
import { PrincipleCard } from '@/components/molecules';

export default function PersonalDataProtection() {
    const { t } = useLanguage();

    const principles = [
        { icon: Scale, title: t('protectionPage.principles.p1.title'), desc: t('protectionPage.principles.p1.desc') },
        { icon: FileKey, title: t('protectionPage.principles.p2.title'), desc: t('protectionPage.principles.p2.desc') },
        { icon: ShieldCheck, title: t('protectionPage.principles.p3.title'), desc: t('protectionPage.principles.p3.desc') }
    ];
    
    const standardsList = t('protectionPage.sections.s2.items') as string[] || [];

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <LegalPageHero 
                badgeText={t('protectionPage.hero.badge')}
                badgeIcon={ShieldCheck}
                title1={t('protectionPage.hero.title1')}
                title2={t('protectionPage.hero.title2')}
                description={t('protectionPage.hero.desc')}
                gradientClass="bg-gradient-to-r from-slate-900 to-blue-900" 
            />

            <div className="container mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Left Column: Main Content */}
                    <div className="lg:col-span-8 space-y-12">
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">
                                {t('protectionPage.preamble.title')}
                            </h2>
                            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t('protectionPage.preamble.text') }} />
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {principles.map((item, index) => (
                                <PrincipleCard key={index} icon={item.icon} title={item.title} desc={item.desc} />
                            ))}
                        </div>

                        <div className="space-y-8 bg-white/60 dark:bg-slate-900/50 backdrop-blur-md p-8 rounded-2xl border border-slate-200/50 dark:border-white/5 shadow-sm">
                            <div className="border-l-4 border-orange-500 pl-6 py-2">
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{t('protectionPage.sections.s1.title')}</h3>
                                <p className="text-slate-600 dark:text-slate-400">{t('protectionPage.sections.s1.text')}</p>
                            </div>

                            <div className="border-l-4 border-blue-500 pl-6 py-2">
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">{t('protectionPage.sections.s2.title')}</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-4">{t('protectionPage.sections.s2.text')}</p>
                                <ul className="space-y-3">
                                    {Array.isArray(standardsList) && standardsList.map((li, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg">
                                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                                            <span className="text-sm">{li}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="border-l-4 border-orange-500 pl-6 py-2">
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{t('protectionPage.sections.s3.title')}</h3>
                                <p className="text-slate-600 dark:text-slate-400">{t('protectionPage.sections.s3.text')}</p>
                            </div>
                        </div>

                        <Card className="bg-red-50 dark:bg-red-900/10 border-red-200 dark:border-red-900/50 shadow-md">
                            <CardContent className="p-6 flex items-start gap-4">
                                <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-red-900 dark:text-red-400 text-lg mb-2">{t('protectionPage.breach.title')}</h4>
                                    <p className="text-red-800 dark:text-red-300 text-sm leading-relaxed">{t('protectionPage.breach.text')}</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column: Sidebar */}
                    <div className="lg:col-span-4 space-y-6">
                        <Card className="shadow-xl border border-slate-800 bg-slate-900 text-white relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-blue-500/10" />
                            <CardHeader className="relative z-10">
                                <CardTitle className="flex items-center gap-2">
                                    <Users className="w-5 h-5 text-orange-500" />
                                    {t('protectionPage.contact.title')}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 relative z-10">
                                <p className="text-slate-400 text-sm">{t('protectionPage.contact.desc')}</p>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 p-4 bg-slate-800/80 backdrop-blur-sm rounded-xl border border-slate-700/50">
                                        <Building className="w-6 h-6 text-blue-400" />
                                        <div className="text-sm">
                                            <div className="font-semibold text-white">{t('protectionPage.contact.office')}</div>
                                            <div className="text-slate-400">{t('protectionPage.contact.address')}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 p-4 bg-slate-800/80 backdrop-blur-sm rounded-xl border border-slate-700/50">
                                        <Lock className="w-6 h-6 text-orange-400" />
                                        <div className="text-sm">
                                            <div className="font-semibold text-white">{t('protectionPage.contact.department')}</div>
                                            <a href="mailto:privacy@khahoangminh.com.vn" className="text-orange-400 hover:text-orange-300 transition-colors">privacy@khahoangminh.com.vn</a>
                                        </div>
                                    </div>
                                </div>
                                <Link href={createPageUrl('contact')} className="block mt-4">
                                    <Button className="w-full bg-orange-600 hover:bg-orange-700 transition-all shadow-lg hover:shadow-orange-600/20">
                                        {t('protectionPage.contact.button')}
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>

                        <div className="bg-white/80 dark:bg-slate-900/50 backdrop-blur-md p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800 shadow-lg">
                            <h4 className="font-bold text-slate-800 dark:text-white mb-4">{t('protectionPage.related.title')}</h4>
                            <nav className="space-y-3">
                                <Link href={createPageUrl('privacy')} className="flex items-center justify-between text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 group p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                                    <span className="text-sm font-medium">{t('protectionPage.related.privacy')}</span>
                                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                                <div className="h-px bg-slate-200 dark:bg-slate-800"></div>
                                <Link href={createPageUrl('terms')} className="flex items-center justify-between text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 group p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                                    <span className="text-sm font-medium">{t('protectionPage.related.terms')}</span>
                                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}