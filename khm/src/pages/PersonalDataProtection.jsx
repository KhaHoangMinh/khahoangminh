import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ShieldCheck, Lock, Users, AlertCircle, FileKey, Scale, Building, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, Button } from '@/components/atoms';
import { useLanguage } from '@/services/LanguageProvider';

export default function PersonalDataProtection() {
    const { t } = useLanguage();

    const principles = [
        {
            icon: Scale,
            title: t('protectionPage.principles.p1.title'),
            desc: t('protectionPage.principles.p1.desc')
        },
        {
            icon: FileKey,
            title: t('protectionPage.principles.p2.title'),
            desc: t('protectionPage.principles.p2.desc')
        },
        {
            icon: ShieldCheck,
            title: t('protectionPage.principles.p3.title'),
            desc: t('protectionPage.principles.p3.desc')
        }
    ];
    const standardsList = t('protectionPage.sections.s2.items') || [];

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-2 text-orange-400 font-semibold mb-4">
                            <ShieldCheck className="w-6 h-6" />
                            <span>{t('protectionPage.hero.badge')}</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            {t('protectionPage.hero.title1')} <br/>
                            <span className="text-orange-500">{t('protectionPage.hero.title2')}</span>
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                            {t('protectionPage.hero.desc')}
                        </p>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-12 gap-12">

                    {/* Left Column: Main Content */}
                    <div className="lg:col-span-8 space-y-12">

                        {/* Preamble */}
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">
                                {t('protectionPage.preamble.title')}
                            </h2>
                            <p
                                className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: t('protectionPage.preamble.text') }}
                            />
                        </div>

                        {/* Core Principles Grid */}
                        <div className="grid md:grid-cols-3 gap-6">
                            {principles.map((item, index) => (
                                <Card key={index} className="bg-slate-50 dark:bg-slate-900 border-none shadow-md">
                                    <CardContent className="p-6 text-center">
                                        <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-600 shadow-sm">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="font-bold text-slate-800 dark:text-white mb-2">{item.title}</h3>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* Detailed Sections */}
                        <div className="space-y-8">
                            <div className="border-l-4 border-orange-500 pl-6 py-2">
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                                    {t('protectionPage.sections.s1.title')}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400">
                                    {t('protectionPage.sections.s1.text')}
                                </p>
                            </div>

                            <div className="border-l-4 border-blue-500 pl-6 py-2">
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                                    {t('protectionPage.sections.s2.title')}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-4">
                                    {t('protectionPage.sections.s2.text')}
                                </p>
                                <ul className="space-y-2">
                                    {Array.isArray(standardsList) && standardsList.map((li, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                                            {li}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="border-l-4 border-orange-500 pl-6 py-2">
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                                    {t('protectionPage.sections.s3.title')}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400">
                                    {t('protectionPage.sections.s3.text')}
                                </p>
                            </div>
                        </div>

                        {/* Breach Notification Info */}
                        <Card className="bg-red-50 dark:bg-red-900/10 border-red-100 dark:border-red-900/30">
                            <CardContent className="p-6 flex items-start gap-4">
                                <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-red-900 dark:text-red-400 text-lg mb-2">
                                        {t('protectionPage.breach.title')}
                                    </h4>
                                    <p className="text-red-800 dark:text-red-300 text-sm leading-relaxed">
                                        {t('protectionPage.breach.text')}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column: Contact & Quick Links */}
                    <div className="lg:col-span-4 space-y-6">
                        <Card className="shadow-xl border-0 bg-slate-900 text-white">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                        <Users className="w-5 h-5 text-orange-500" />
                                        {t('protectionPage.contact.title')}
                                    </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-slate-400 text-sm">
                                    {t('protectionPage.contact.desc')}
                                </p>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3 p-3 bg-slate-800 rounded-lg">
                                        <Building className="w-5 h-5 text-blue-400" />
                                        <div className="text-sm">
                                            <div className="font-semibold text-white">{t('protectionPage.contact.office')}</div>
                                            <div className="text-slate-400">{t('protectionPage.contact.address')}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 bg-slate-800 rounded-lg">
                                        <Lock className="w-5 h-5 text-blue-400" />
                                        <div className="text-sm">
                                            <div className="font-semibold text-white">{t('protectionPage.contact.department')}</div>
                                            <a href="#" className="text-orange-400 hover:underline">privacy@khahoangminh.com.vn</a>
                                        </div>
                                    </div>
                                </div>
                                <Button className="w-full bg-orange-600 hover:bg-orange-700 mt-4">
                                    {t('protectionPage.contact.button')}
                                </Button>
                            </CardContent>
                        </Card>

                        <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                            <h4 className="font-bold text-slate-800 dark:text-white mb-4">
                                {t('protectionPage.related.title')}
                            </h4>
                            <nav className="space-y-3">
                                <Link to={createPageUrl('privacy')} className="flex items-center justify-between text-slate-600 dark:text-slate-300 hover:text-orange-600 group">
                                    <span className="text-sm">{t('protectionPage.related.privacy')}</span>
                                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                                <div className="h-px bg-slate-200 dark:bg-slate-700"></div>
                                <Link to={createPageUrl('terms')} className="flex items-center justify-between text-slate-600 dark:text-slate-300 hover:text-orange-600 group">
                                    <span className="text-sm">{t('protectionPage.related.terms')}</span>
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