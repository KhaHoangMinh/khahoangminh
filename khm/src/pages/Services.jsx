import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Scissors, Ruler, Truck, Headphones, FileCheck, Award, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {useLanguage } from "@/services/LanguageProvider.jsx";

export default function Services() {
    const { t } = useLanguage();

    // Map the icons that correspond to each service item.
    const serviceIcons = [Scissors, Ruler, Truck, Headphones, FileCheck, Award];
    const servicesListItems = t('servicesPage.servicesList.items');

    // Fetch remaining sections
    const featuredFeatures = t('servicesPage.featured.features');
    const processSteps = t('servicesPage.process.steps');

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-900 to-slate-900 dark:from-blue-950 dark:to-slate-950 text-white py-20">
                <div className="absolute inset-0 bg-[url('http://khahoangminh.com.vn/upload/hinhanh/ddd_1366x540.jpg')] bg-cover bg-center opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            {t('servicesPage.hero.title')} <span className="text-orange-500">{t('servicesPage.hero.highlight')}</span>
                        </h1>
                        <p className="text-xl text-slate-300">
                            {t('servicesPage.hero.subtitle')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-white dark:bg-slate-950">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
                            {t('servicesPage.servicesList.title')}
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            {t('servicesPage.servicesList.subtitle')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Array.isArray(servicesListItems) && servicesListItems.map((service, index) => {
                            const Icon = serviceIcons[index];
                            return (
                                <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                                    <CardContent className="p-8">
                                        <div className="w-16 h-16 mb-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                            {Icon && <Icon className="w-8 h-8 text-white" />}
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white">{service.title}</h3>
                                        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                            {service.description}
                                        </p>
                                        <ul className="space-y-2">
                                            {Array.isArray(service.features) && service.features.map((feature, fIndex) => (
                                                <li key={fIndex} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                                                    <span className="w-1.5 h-1.5 bg-orange-600 rounded-full"></span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CNC Plasma Section */}
            <section className="py-20 bg-slate-50 dark:bg-slate-900">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-block bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-500 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                                {t('servicesPage.featured.badge')}
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800 dark:text-white">
                                {t('servicesPage.featured.title')} <span className="text-orange-600">{t('servicesPage.featured.highlight')}</span>
                            </h2>
                            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                                {t('servicesPage.featured.description')}
                            </p>
                            <ul className="space-y-3 mb-8">
                                {Array.isArray(featuredFeatures) && featuredFeatures.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                                        <span className="w-6 h-6 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link to={createPageUrl('Contact')}>
                                <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                                    {t('servicesPage.featured.buttonText')}
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                        </div>
                        <div>
                            <img
                                src="http://khahoangminh.com.vn/upload/sanpham/Sa%CC%89n%20pha%CC%82%CC%89m%20gia%20co%CC%82ng%20ca%CC%86%CC%81t%20CNC%20PLASMA%205.jpg"
                                alt="CNC Plasma"
                                className="rounded-2xl shadow-2xl w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-white dark:bg-slate-950">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
                            {t('servicesPage.process.title')}
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            {t('servicesPage.process.subtitle')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {Array.isArray(processSteps) && processSteps.map((item, index) => (
                            <Card key={index} className="border-0 shadow-lg text-center group hover:shadow-xl transition-shadow">
                                <CardContent className="p-6">
                                    <div className="text-5xl font-bold text-orange-600 mb-4 group-hover:scale-110 transition-transform">
                                        {item.step}
                                    </div>
                                    <h3 className="text-lg font-bold mb-2 text-slate-800 dark:text-white">{item.title}</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        {t('servicesPage.cta.title')}
                    </h2>
                    <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                        {t('servicesPage.cta.subtitle')}
                    </p>
                    <Link to={createPageUrl('Contact')}>
                        <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8">
                            {t('servicesPage.cta.buttonText')}
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}