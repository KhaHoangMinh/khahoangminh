"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Search, Package, Info, Briefcase, Phone, Construction } from 'lucide-react';
import { useLanguage } from '@/services';
import { createPageUrl } from "@/lib";

export default function PageNotFound() {
    const pathname = usePathname();
    const { t } = useLanguage();
    const pageName = pathname.substring(1);

    const quickLinks = [
        { name: t('nav.home'), path: 'home', icon: Home, desc: t('pageNotFound.links.home') },
        { name: t('nav.products'), path: 'products', icon: Package, desc: t('pageNotFound.links.products') },
        { name: t('nav.services'), path: 'services', icon: Construction, desc: t('pageNotFound.links.services') },
        { name: t('nav.projects'), path: 'projects', icon: Briefcase, desc: t('pageNotFound.links.projects') },
        { name: t('nav.about'), path: 'about', icon: Info, desc: t('pageNotFound.links.about') },
        { name: t('nav.contact'), path: 'contact', icon: Phone, desc: t('pageNotFound.links.contact') },
    ];

    return (
        <div className="section-frame-full bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-amber-500/10 blur-[100px]" />
                <div className="absolute -bottom-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-orange-600/10 blur-[100px]" />
            </div>

            <div className="container-khm relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
                    {/* Left Column: 404 Message */}
                    <div className="text-center lg:text-left space-y-6">
                        <div className="space-y-2">
                            <h1 className="text-7xl sm:text-8xl lg:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 leading-none">
                                404
                            </h1>
                            <div className="h-1.5 w-20 bg-gradient-to-r from-orange-600 to-amber-500 rounded-full mx-auto lg:mx-0" />
                        </div>

                        <div className="space-y-3">
                            <h2 className="heading-section">
                                {t('pageNotFound.subtitle')}
                            </h2>
                            <p className="text-body max-w-md mx-auto lg:mx-0">
                                {t('pageNotFound.descStart')}{' '}
                                <span className="font-mono text-orange-600 dark:text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded">
                                    &quot;/{pageName}&quot;
                                </span>
                                , <br className="hidden md:block" /> {t('pageNotFound.descEnd')}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                href="/"
                                className="inline-flex items-center justify-center h-12 px-7 text-sm font-semibold text-white bg-gradient-to-r from-orange-600 to-amber-500 rounded-xl hover:from-orange-700 hover:to-orange-600 transition-all shadow-lg shadow-orange-500/25"
                            >
                                <Home className="w-4 h-4 mr-2" />
                                {t('pageNotFound.homeButton')}
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Helpful Links Grid */}
                    <div className="w-full">
                        <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
                            <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-5 flex items-center gap-2">
                                <Search className="w-4 h-4 text-orange-500" />
                                {t('pageNotFound.quickLinksTitle')}
                            </h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                                {quickLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={createPageUrl(link.path)}
                                        className="group flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/50 hover:border-orange-500/40 hover:shadow-md transition-all duration-200"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center shrink-0 group-hover:bg-orange-500/15 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors border border-slate-200/60 dark:border-slate-700">
                                            <link.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
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
