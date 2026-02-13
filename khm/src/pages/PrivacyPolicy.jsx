import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import {
    Shield, Lock, Eye, FileText, Cookie,
    Mail, Server, Globe, ChevronRight, CheckCircle2
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/services/LanguageProvider.jsx';

export default function PrivacyPolicy() {
    const { t } = useLanguage();
    const [activeSection, setActiveSection] = useState('intro');

    // Handle scroll spy for sidebar navigation
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['intro', 'collection', 'usage', 'cookies', 'sharing', 'security', 'rights', 'contact'];
            const scrollPosition = window.scrollY + 150;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && element.offsetTop <= scrollPosition) {
                    setActiveSection(section);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    };

    const sidebarItems = [
        { id: 'intro', label: t('privacyPolicyPage.toc.intro'), icon: FileText },
        { id: 'collection', label: t('privacyPolicyPage.toc.collection'), icon: Eye },
        { id: 'usage', label: t('privacyPolicyPage.toc.usage'), icon: Server },
        { id: 'cookies', label: t('privacyPolicyPage.toc.cookies'), icon: Cookie },
        { id: 'sharing', label: t('privacyPolicyPage.toc.sharing'), icon: Globe },
        { id: 'security', label: t('privacyPolicyPage.toc.security'), icon: Lock },
        { id: 'rights', label: t('privacyPolicyPage.toc.rights'), icon: Shield },
        { id: 'contact', label: t('privacyPolicyPage.toc.contact'), icon: Mail },
    ];

    const personalListData = t('privacyPolicyPage.collection.personalList') || [];
    const usageListData = t('privacyPolicyPage.usage.list') || [];

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-900 to-slate-900 dark:from-blue-950 dark:to-slate-950 text-white py-16">
                <div className="absolute inset-0 bg-[url('http://khahoangminh.com.vn/upload/hinhanh/ddd_1366x540.jpg')] bg-cover bg-center opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-block bg-orange-500/20 border border-orange-500 text-orange-400 px-4 py-1 rounded-full text-xs font-semibold mb-4 uppercase tracking-wider">
                            {t('privacyPolicyPage.hero.badge')}
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">
                            {t('privacyPolicyPage.hero.title1')} <span className="text-orange-500">{t('privacyPolicyPage.hero.title2')}</span>
                        </h1>
                        <p className="text-lg text-slate-300">
                            {t('privacyPolicyPage.hero.updated')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Sidebar Navigation (Sticky) */}
                    <div className="lg:w-1/4">
                        <div className="sticky top-24 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4 border border-slate-100 dark:border-slate-700">
                            <h3 className="font-bold text-slate-800 dark:text-white mb-4 px-2">{t('privacyPolicyPage.toc.title')}</h3>
                            <nav className="space-y-1">
                                {sidebarItems.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-all ${
                                            activeSection === item.id
                                                ? 'bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400'
                                                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700'
                                        }`}
                                    >
                                        <item.icon className="w-4 h-4" />
                                        {item.label}
                                        {activeSection === item.id && <ChevronRight className="w-4 h-4 ml-auto" />}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Policy Content */}
                    <div className="lg:w-3/4 space-y-8">

                        {/* 1. Introduction */}
                        <section id="intro" className="scroll-mt-28">
                            <Card className="border-0 shadow-sm">
                                <CardContent className="p-8">
                                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                                        <span className="text-orange-600">1.</span> {t('privacyPolicyPage.intro.title')}
                                    </h2>
                                    <p
                                        className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4"
                                        dangerouslySetInnerHTML={{ __html: t('privacyPolicyPage.intro.text1') }}
                                    />
                                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                        {t('privacyPolicyPage.intro.text2')}
                                    </p>
                                </CardContent>
                            </Card>
                        </section>

                        {/* 2. Information We Collect */}
                        <section id="collection" className="scroll-mt-28">
                            <Card className="border-0 shadow-sm">
                                <CardContent className="p-8">
                                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
                                        <span className="text-orange-600">2.</span> {t('privacyPolicyPage.collection.title')}
                                    </h2>

                                    <div className="space-y-6">
                                        <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl">
                                            <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-3">{t('privacyPolicyPage.collection.personalTitle')}</h3>
                                            <p className="text-slate-600 dark:text-slate-400 mb-3">
                                                {t('privacyPolicyPage.collection.personalText')}
                                            </p>
                                            <ul className="grid md:grid-cols-2 gap-2">
                                                {Array.isArray(personalListData) && personalListData.map((item, i) => (
                                                    <li key={i} className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm">
                                                        <CheckCircle2 className="w-4 h-4 text-green-500" /> {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl">
                                            <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-3">{t('privacyPolicyPage.collection.usageTitle')}</h3>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                                {t('privacyPolicyPage.collection.usageText')}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </section>

                        {/* 3. How We Use Information */}
                        <section id="usage" className="scroll-mt-28">
                            <Card className="border-0 shadow-sm">
                                <CardContent className="p-8">
                                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                                        <span className="text-orange-600">3.</span> {t('privacyPolicyPage.usage.title')}
                                    </h2>
                                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                                        {t('privacyPolicyPage.usage.text')}
                                    </p>
                                    <ul className="space-y-3">
                                        {Array.isArray(usageListData) && usageListData.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                                                <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </section>

                        {/* 4. Cookies */}
                        <section id="cookies" className="scroll-mt-28">
                            <Card className="border-0 shadow-sm">
                                <CardContent className="p-8">
                                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                                        <span className="text-orange-600">4.</span> {t('privacyPolicyPage.cookies.title')}
                                    </h2>
                                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                                        {t('privacyPolicyPage.cookies.text1')}
                                    </p>
                                    <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4">
                                        <p className="text-sm text-slate-700 dark:text-slate-300">
                                            {t('privacyPolicyPage.cookies.text2')}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </section>

                        {/* 5. Sharing */}
                        <section id="sharing" className="scroll-mt-28">
                            <Card className="border-0 shadow-sm">
                                <CardContent className="p-8">
                                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                                        <span className="text-orange-600">5.</span> {t('privacyPolicyPage.sharing.title')}
                                    </h2>
                                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                        {t('privacyPolicyPage.sharing.text')}
                                    </p>
                                </CardContent>
                            </Card>
                        </section>

                        {/* 6. Security */}
                        <section id="security" className="scroll-mt-28">
                            <Card className="border-0 shadow-sm">
                                <CardContent className="p-8">
                                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                                        <span className="text-orange-600">6.</span> {t('privacyPolicyPage.security.title')}
                                    </h2>
                                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                                        {t('privacyPolicyPage.security.text')}
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                                        <div className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                                            <Lock className="w-8 h-8 text-orange-600" />
                                            <div>
                                                <h4 className="font-bold text-slate-800 dark:text-white">{t('privacyPolicyPage.security.sslTitle')}</h4>
                                                <p className="text-xs text-slate-500">{t('privacyPolicyPage.security.sslDesc')}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                                            <Server className="w-8 h-8 text-orange-600" />
                                            <div>
                                                <h4 className="font-bold text-slate-800 dark:text-white">{t('privacyPolicyPage.security.storageTitle')}</h4>
                                                <p className="text-xs text-slate-500">P{t('privacyPolicyPage.security.storageDesc')}</p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </section>

                        {/* 7. Your Rights */}
                        <section id="rights" className="scroll-mt-28">
                            <Card className="border-0 shadow-sm">
                                <CardContent className="p-8">
                                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                                        <span className="text-orange-600">7.</span> {t('privacyPolicyPage.rights.title')}
                                    </h2>
                                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                                        {t('privacyPolicyPage.rights.text')}
                                    </p>
                                    <Link to={createPageUrl('contact')}>
                                        <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                                            {t('privacyPolicyPage.rights.button')}
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        </section>

                        {/* 8. Contact */}
                        <section id="contact" className="scroll-mt-28">
                            <Card className="border-0 shadow-lg bg-slate-900 text-white">
                                <CardContent className="p-8">
                                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                        <span className="text-orange-500">8.</span> {t('privacyPolicyPage.contact.title')}
                                    </h2>
                                    <p className="text-slate-300 mb-6">
                                        {t('privacyPolicyPage.contact.text')}
                                    </p>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3">
                                            <Mail className="w-5 h-5 text-orange-500" />
                                            <a href="#" className="hover:text-orange-400">info@khahoangminh.com.vn</a>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Globe className="w-5 h-5 text-orange-500" />
                                            <Link to={createPageUrl('contact')} className="hover:text-orange-400">
                                                {t('privacyPolicyPage.contact.linkText')}
                                            </Link>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    );
}