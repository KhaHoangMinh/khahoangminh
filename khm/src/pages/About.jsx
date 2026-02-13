import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Building2, Award, Users, Target, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/services/LanguageProvider.jsx';

export default function About() {
    const { t } = useLanguage();

    const values = [
        {
            icon: Award,
            title: t('aboutPage.values.items.reputation'),
            description: t('aboutPage.values.items.reputationDesc')
        },
        {
            icon: Target,
            title: t('aboutPage.values.items.quality'),
            description: t('aboutPage.values.items.qualityDesc')
        },
        {
            icon: Users,
            title: t('aboutPage.values.items.team'),
            description: t('aboutPage.values.items.teamDesc')
        },
        {
            icon: Building2,
            title: t('aboutPage.values.items.facilities'),
            description: t('aboutPage.values.items.facilitiesDesc')
        }
    ];

    const productList = t('aboutPage.scope.products.list');
    const serviceList = t('aboutPage.scope.services.list');

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-900 to-slate-900 dark:from-blue-950 dark:to-slate-950 text-white py-20">
                <div className="absolute inset-0 bg-[url('http://khahoangminh.com.vn/upload/hinhanh/ddd_1366x540.jpg')] bg-cover bg-center opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            {t('aboutPage.hero.title')} <span className="text-orange-500">{t('aboutPage.hero.subtitle')}</span>
                        </h1>
                        <p className="text-xl text-slate-300">
                            {t('aboutPage.hero.description')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Company Info */}
            <section className="py-20 bg-white dark:bg-slate-950">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="mb-8">
                                <div className="inline-block bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-500 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                                    {t('aboutPage.info.established')}
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800 dark:text-white">
                                    {t('aboutPage.info.fullName')}<br/>
                                    <span className="text-orange-600">{t('aboutPage.hero.subtitle').toUpperCase()}</span>
                                </h2>
                            </div>

                            <div className="space-y-6 text-slate-700 dark:text-slate-300">
                                <p className="leading-relaxed">
                                    <strong className="text-slate-900 dark:text-white">{t('aboutPage.hero.subtitle')}</strong> {t('aboutPage.info.intro1')}
                                </p>

                                <p className="leading-relaxed">
                                    {t('aboutPage.info.intro2')}
                                </p>

                                <div className="bg-gradient-to-r from-orange-50 to-blue-50 dark:from-orange-900/20 dark:to-blue-900/20 border-l-4 border-orange-600 p-6 rounded-r-lg">
                                    <p className="text-slate-800 dark:text-slate-200 font-bold text-lg italic">
                                        {t('aboutPage.info.motto')}
                                    </p>
                                    <p className="text-slate-600 dark:text-slate-400 mt-2">
                                        {t('aboutPage.info.mottoDesc')}
                                    </p>
                                </div>

                                <p className="leading-relaxed font-medium text-slate-900 dark:text-white">
                                    {t('aboutPage.info.thankYou')}
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <img
                                src="http://khahoangminh.com.vn/upload/hinhanh/979d4c471bd530505eb18b1892246371-9428_579x400.jpg"
                                alt="Kha Hoàng Minh"
                                className="rounded-2xl shadow-2xl w-full"
                            />
                            <div className="grid grid-cols-2 gap-4">
                                <img
                                    src="http://khahoangminh.com.vn/upload/news/co%CC%82ng%20ty%20inox%20kha%20hoa%CC%80ng%20minh%201.jpg"
                                    alt="Facility"
                                    className="rounded-lg shadow-lg w-full h-40 object-cover"
                                />
                                <img
                                    src="http://khahoangminh.com.vn/upload/news/co%CC%82ng%20ty%20inox%20kha%20hoa%CC%80ng%20minh%203.jpg"
                                    alt="Warehouse"
                                    className="rounded-lg shadow-lg w-full h-40 object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-slate-50 dark:bg-slate-900">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
                            {t('aboutPage.values.title')}
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            {t('aboutPage.values.description')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                                <CardContent className="p-6 text-center">
                                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <value.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white">{value.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-400">{value.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Business Scope */}
            <section className="py-20 bg-white dark:bg-slate-950">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
                                {t('aboutPage.scope.title')}
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <Card className="border-l-4 border-orange-600 shadow-lg">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white">{t('aboutPage.scope.products.title')}</h3>
                                    <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                                        {Array.isArray(productList) && productList.map((item, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                                <span className="w-2 h-2 bg-orange-600 rounded-full mt-2"></span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="border-l-4 border-blue-600 shadow-lg">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white">{t('aboutPage.scope.services.title')}</h3>
                                    <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                                        {Array.isArray(serviceList) && serviceList.map((item, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        {t('aboutPage.cta.title')}
                    </h2>
                    <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                        {t('aboutPage.cta.description')}
                    </p>
                    <Link to={createPageUrl('contact')}>
                        <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8">
                            {t('common.contactNow')}
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}