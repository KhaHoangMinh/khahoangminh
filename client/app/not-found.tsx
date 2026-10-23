"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Home, Search, Package, Info, Briefcase, Phone, Construction, PhoneCall, Users } from 'lucide-react';
import { useLanguage, ThemeToggle, LanguageToggle } from '@/services';
import { createPageUrl } from "@/lib";

export default function PageNotFound() {
    const pathname = usePathname();
    const { t } = useLanguage();
    const pageName = pathname ? pathname.replace(/^\//, '') : '';

    const quickLinks = [
        { name: t('nav.products'), path: 'products', icon: Package, desc: t('pageNotFound.links.products') },
        { name: t('nav.services'), path: 'services', icon: Construction, desc: t('pageNotFound.links.services') },
        { name: t('nav.projects'), path: 'projects', icon: Briefcase, desc: t('pageNotFound.links.projects') },
        { name: t('nav.about'), path: 'about', icon: Info, desc: t('pageNotFound.links.about') },
        { name: t('nav.careers'), path: 'careers', icon: Users, desc: t('pageNotFound.links.careers') },
        { name: t('nav.contact'), path: 'contact', icon: PhoneCall, desc: t('pageNotFound.links.contact') },
    ];

    return (
        <div className="min-h-dvh bg-white dark:bg-[#0B0F17] flex flex-col justify-between relative overflow-hidden selection:bg-orange-500 selection:text-white">
            {/* Background Ambient Glow Decoration */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-amber-500/10 blur-[100px]" />
                <div className="absolute -bottom-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-orange-600/10 blur-[100px]" />
            </div>

            {/* 1. Standalone Minimal Branded Top Bar */}
            <header className="border-b border-slate-200/70 dark:border-slate-800/90 bg-white/95 dark:bg-[#0B0F17]/95 backdrop-blur-sm sticky top-0 z-30">
                <div className="container-khm h-16 sm:h-20 flex items-center justify-between gap-4">
                    {/* Brand Logo & Name */}
                    <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0" aria-label="Kha Hoàng Minh Home">
                        <Image
                            src="/img/logo/logo.png"
                            height={44}
                            width={44}
                            priority
                            className="w-9 h-9 sm:w-11 sm:h-11 object-contain transition-transform duration-300 group-hover:scale-105"
                            alt="Kha Hoàng Minh Logo"
                        />
                        <div className="flex flex-col justify-center">
                            <span className="font-extrabold text-base sm:text-lg xl:text-xl tracking-tight leading-none text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                                {t('common.companyShortName')}
                            </span>
                            <span className="text-[9px] sm:text-[10px] font-semibold text-orange-600 dark:text-orange-400 tracking-[0.18em] uppercase mt-1 leading-tight">
                                {t('header.subtitle')}
                            </span>
                        </div>
                    </Link>

                    {/* Right Utility Controls */}
                    <div className="flex items-center gap-3 sm:gap-4 shrink-0">
                        {/* Theme and Language Controls */}
                        <LanguageToggle />
                        <ThemeToggle />
                    </div>
                </div>
            </header>

            {/* 2. Focused Main Recovery Canvas */}
            <main className="my-auto py-8 sm:py-12 lg:py-14 flex items-center relative z-10">
                <div className="container-khm w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        {/* Left Column: 404 Industrial Proposition */}
                        <div className="lg:col-span-5 text-center lg:text-left space-y-6">
                            {/* Eyebrow Status Badge */}
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-500/10 text-orange-700 dark:text-orange-300 border border-orange-500/30">
                                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                                {t('pageNotFound.badge')}
                            </div>

                            {/* 404 Heading */}
                            <div className="space-y-2">
                                <h1 className="text-7xl sm:text-8xl lg:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 dark:from-orange-400 dark:via-amber-300 dark:to-orange-400 leading-none tracking-tight">
                                    404
                                </h1>
                                <div className="h-1.5 w-20 bg-gradient-to-r from-orange-600 to-amber-500 rounded-full mx-auto lg:mx-0" />
                            </div>

                            {/* Explanatory Context */}
                            <div className="space-y-3">
                                <h2 className="heading-section text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-50">
                                    {t('pageNotFound.subtitle')}
                                </h2>
                                <p className="text-body text-slate-700 dark:text-slate-200 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                                    {t('pageNotFound.descStart')}{' '}
                                    <span className="font-mono text-orange-600 dark:text-orange-400 bg-orange-500/10 dark:bg-orange-500/20 px-2 py-0.5 rounded text-xs border border-orange-500/25 break-all inline-block my-1">
                                        &quot;/{pageName || '...'}&quot;
                                    </span>
                                    .{' '}{t('pageNotFound.descEnd')}
                                </p>
                            </div>

                            {/* Dual CTA Recovery Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start pt-2">
                                <Link
                                    href="/"
                                    className="inline-flex items-center justify-center h-12 px-7 text-sm font-bold text-white bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 rounded-xl hover:from-orange-700 hover:to-orange-600 transition-all shadow-lg shadow-orange-500/25 active:scale-[0.98]"
                                >
                                    <Home className="w-4 h-4 mr-2" />
                                    {t('pageNotFound.homeButton')}
                                </Link>

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center h-12 px-7 text-sm font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-[#182234] border border-slate-200/80 dark:border-slate-700 rounded-xl hover:border-orange-500/60 hover:text-orange-600 dark:hover:text-orange-400 transition-all active:scale-[0.98]"
                                >
                                    <PhoneCall className="w-4 h-4 mr-2 text-orange-600 dark:text-orange-400" />
                                    {t('pageNotFound.quoteButton')}
                                </Link>
                            </div>
                        </div>

                        {/* Right Column: High-Density Quick Navigation Cards */}
                        <div className="lg:col-span-7 w-full">
                            <div className="card-khm rounded-2xl p-6 sm:p-7 shadow-xl">
                                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200/70 dark:border-slate-700/80">
                                    <h3 className="text-xs font-bold text-slate-800 dark:text-slate-100 uppercase tracking-wider flex items-center gap-2">
                                        <Search className="w-4 h-4 text-orange-500" />
                                        {t('pageNotFound.quickLinksTitle')}
                                    </h3>
                                    <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                                        KHM Inox & CNC Portal
                                    </span>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                                    {quickLinks.map((link) => (
                                        <Link
                                            key={link.path}
                                            href={createPageUrl(link.path)}
                                            className="group flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 dark:bg-[#111827] border border-slate-200/70 dark:border-slate-700/80 hover:border-orange-500/60 hover:shadow-md transition-all duration-200"
                                        >
                                            <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#182234] text-slate-700 dark:text-slate-200 flex items-center justify-center shrink-0 group-hover:bg-orange-500/15 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors border border-slate-200/70 dark:border-slate-700">
                                                <link.icon className="w-5 h-5" />
                                            </div>
                                            <div className="min-w-0">
                                                <div className="text-sm font-bold text-slate-900 dark:text-slate-50 group-hover:text-orange-600 dark:group-hover:text-orange-300 transition-colors">
                                                    {link.name}
                                                </div>
                                                <div className="text-xs text-slate-600 dark:text-slate-200 mt-0.5 leading-snug">
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
            </main>

            {/* 3. Subtle Quiet Copyright Bar */}
            <footer className="border-t border-slate-200/70 dark:border-slate-800/90 py-4 bg-slate-50/50 dark:bg-[#070A10]/60 relative z-10">
                <div className="container-khm flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600 dark:text-slate-300 text-center sm:text-left">
                    <div>
                        © {new Date().getFullYear()} {t('footer.companyName')} • SUS 304, 316, 201, 430 & CNC Fabrication
                    </div>
                    <div className="flex items-center gap-4">
                        <a href="tel:+84979866162" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors font-medium">
                            +84 979 866 162 (Ms. Uyên)
                        </a>
                        <span>•</span>
                        <a href="tel:+84976888999" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors font-medium">
                            +84 976 888 999 (Ms. Hải)
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
