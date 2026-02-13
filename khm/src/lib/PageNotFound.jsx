import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Home, Search, Package, Info, Briefcase, Phone, Construction } from 'lucide-react';
import { useLanguage } from '@/services/LanguageProvider';
import {createPageUrl} from "@/utils/index.js";

export default function PageNotFound() {
    const location = useLocation();
    const { t } = useLanguage();
    const pageName = location.pathname.substring(1);

    const quickLinks = [
        { name: t('nav.home'), path: 'home', icon: Home, desc: t('pageNotFound.links.home') },
        { name: t('nav.products'), path: 'products', icon: Package, desc: t('pageNotFound.links.products') },
        { name: t('nav.services'), path: 'services', icon: Construction, desc: t('pageNotFound.links.services') },
        { name: t('nav.projects'), path: 'projects', icon: Briefcase, desc: t('pageNotFound.links.projects') },
        { name: t('nav.about'), path: 'about', icon: Info, desc: t('pageNotFound.links.about') },
        { name: t('nav.contact'), path: 'contact', icon: Phone, desc: t('pageNotFound.links.contact') },
    ];

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans text-slate-800 dark:text-slate-200">

            {/* Background Decoration */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-blue-500/10 blur-[100px] animate-pulse"></div>
                <div className="absolute -bottom-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-orange-500/10 blur-[100px] animate-pulse delay-700"></div>
                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            </div>

            <div className="relative z-10 max-w-5xl w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: 404 Message */}
                    <div className="text-center lg:text-left space-y-8">
                        <div className="space-y-2">
                            <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-600 dark:from-blue-400 dark:to-orange-400 leading-tight">
                                404
                            </h1>
                            <div className="h-2 w-24 bg-orange-500 rounded-full mx-auto lg:mx-0"></div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                                {t('pageNotFound.subtitle')}
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-md mx-auto lg:mx-0 leading-relaxed">
                                {t('pageNotFound.descStart')} <span className="font-mono text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30 px-2 py-0.5 rounded">"/{pageName}"</span>,
                                <br className="hidden md:block"/> {t('pageNotFound.descEnd')}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                to="/"
                                className="flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-orange-600 to-orange-500 rounded-xl hover:from-orange-700 hover:to-orange-600 transition-all shadow-lg shadow-orange-500/30"
                            >
                                <Home className="w-4 h-4 mr-2" />
                                {t('pageNotFound.homeButton')}
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Helpful Links Grid */}
                    <div className="w-full">
                        <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-white/20 dark:border-slate-800 rounded-3xl p-8 shadow-2xl">
                            <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-6 flex items-center gap-2">
                                <Search className="w-4 h-4" />
                                {t('pageNotFound.quickLinksTitle')}
                            </h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {quickLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={createPageUrl(link.path)}
                                        className="group flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 hover:border-orange-200 dark:hover:border-orange-900/50 hover:shadow-lg transition-all duration-300"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center group-hover:bg-orange-100 group-hover:text-orange-600 dark:group-hover:bg-orange-900/30 dark:group-hover:text-orange-400 transition-colors">
                                            <link.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                                                {link.name}
                                            </div>
                                            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                                                {link.desc}
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}