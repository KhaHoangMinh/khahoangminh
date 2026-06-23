"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail, Bell, Sparkles } from 'lucide-react';
import { FaFacebook } from 'react-icons/fa';
import { createPageUrl } from '@/lib';
import { useLanguage, ThemeToggle, LanguageToggle } from '@/services';
import { mainNavigation, type SpecialEvent } from '@/config';
import Image from 'next/image';

interface HeaderProps {
    currentPageName?: string;
    activeEvent?: SpecialEvent | null;
    onOpenSpecialEvent?: () => void;
}

export function Header({ currentPageName, activeEvent, onOpenSpecialEvent }: HeaderProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { t, language } = useLanguage();

    // Determine which logo to show
    const currentLogo = activeEvent?.theme?.logo || "/img/logo/logo.png";
    
    const currentLang = language === 'en' ? 'en' : 'vi';
    const eventQuote = activeEvent?.translations?.[currentLang]?.quote;
    const eventTitle = activeEvent?.translations?.[currentLang]?.title;

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            {/* Top Bar */}
            <div className="bg-slate-900 text-slate-200 py-2 text-xs hidden lg:block">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    {/* Left: Welcome Message */}
                    <p className="flex items-center gap-2 shrink-0">
                        <span className="bg-orange-600 text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">KHM</span>
                        <img src="/img/vietnamFlag.png" alt="VN Flag" className="h-6"/>
                        {t('header.welcomeMessage')}
                    </p>

                    {/* Middle: Scrolling Event Quote */}
                    {eventQuote && (
                        <div 
                            className="flex-1 mx-8 relative h-6 overflow-hidden flex items-center"
                            style={{ 
                                maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                                WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' 
                            }}
                        >
                            <div className="flex min-w-max animate-marquee-ltr" aria-hidden="false">
                                {[0, 1].map((i) => (
                                    <span key={i} className="flex items-center gap-3 pr-16">
                                        <Sparkles
                                            className="w-3 h-3 shrink-0"
                                            style={{ color: activeEvent?.theme?.accentHex || '#fb923c' }}
                                        />
                                        <span
                                            className={`font-serif text-[13px] tracking-wide font-medium whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r ${activeEvent?.theme?.titleGradient || 'from-orange-300 to-amber-400'}`}
                                        >
                                            {eventQuote}
                                        </span>
                                        <Sparkles
                                            className="w-3 h-3 shrink-0"
                                            style={{ color: activeEvent?.theme?.accentHex || '#fb923c' }}
                                        />
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Right: Contact Info */}
                    <div className="flex items-center gap-6">
                        <a href="tel:+84979866162" className="flex items-center gap-2 hover:text-white transition-colors">
                            <Phone className="w-3 h-3" />
                            <span>+84 979 866 162 | +84 976 888 999</span>
                        </a>
                        <a href="mailto:info@khahoangminh.com.vn" className="flex items-center gap-2 hover:text-white transition-colors">
                            <Mail className="w-3 h-3" />
                            <span>info@khahoangminh.com.vn</span>
                        </a>
                        <div className="flex items-center gap-3 border-l border-slate-700 pl-6">
                            <a href="https://www.facebook.com/profile.php?id=100054573575093" target="_blank" rel="noreferrer" className="hover:text-orange-500 transition-colors">
                                <FaFacebook className="w-3 h-3" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="container mx-auto px-4 h-16 sm:h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
                    <Image
                        src={currentLogo}
                        height={48}
                        width={48}
                        className="w-12 h-12 sm:w-12 sm:h-12 transition-all duration-500"
                        alt='logo'
                        onError={(e) => {
                            const target = e.currentTarget;
                            target.onerror = null;
                            target.src = "/img/logo/logo.png";
                        }}
                    />
                    <div className="flex flex-col justify-center">
                        <span className="font-bold text-lg sm:text-xl leading-none text-slate-900 dark:text-white group-hover:text-orange-600 transition-colors">
                            {t('common.companyShortName')}
                        </span>
                        <span className="text-[9px] sm:text-[10px] font-medium text-slate-500 tracking-widest uppercase mt-1 leading-tight">
                            {t('header.subtitle')}
                        </span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden xl:flex items-center gap-1 2xl:gap-2">
                    {mainNavigation.map((item) => (
                        <Link
                            key={item.pageKey}
                            href={createPageUrl(item.pageKey)}
                            className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${currentPageName === item.pageKey
                                ? 'bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400'
                                : 'text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                            }`}
                        >
                            {t(item.translationKey)}
                        </Link>
                    ))}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden xl:flex items-center gap-2 pl-4 border-l border-slate-200 dark:border-slate-800">
                    {activeEvent && (
                        <button 
                            onClick={onOpenSpecialEvent}
                            className="relative p-2 mr-1 text-slate-600 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-500/10 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500/50 group"
                            title={eventTitle || "Special Event"}
                            aria-label="View notifications"
                        >
                            <Bell className="w-5 h-5 transition-transform group-hover:scale-110" />
                            <span className="absolute top-1.5 right-1.5 flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500 border border-white dark:border-slate-900"></span>
                            </span>
                        </button>
                    )}
                    <LanguageToggle />
                    <ThemeToggle />
                </div>

                {/* Mobile/Tablet Menu Button */}
                <div className="flex items-center gap-2 sm:gap-4 xl:hidden">
                    <ThemeToggle />

                    <button
                        className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile/Tablet Menu Overlay */}
            {mobileMenuOpen && (
                <div className="xl:hidden absolute top-full left-0 w-full border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-xl animate-accordion-down max-h-[calc(100vh-4rem)] sm:max-h-[calc(100vh-5rem)] overflow-y-auto">
                    <div className="container mx-auto px-4 py-4 flex flex-col gap-2">

                        {mainNavigation.map((item) => (
                            <Link
                                key={item.pageKey}
                                href={createPageUrl(item.pageKey)}
                                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${currentPageName === item.pageKey
                                    ? 'bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400'
                                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                                }`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {t(item.translationKey)}
                            </Link>
                        ))}

                        <div className="h-px bg-slate-200 dark:bg-slate-800 my-2" />

                        <div className="flex items-center justify-between px-4 py-2">
                            <span className="text-sm text-slate-500">{t('header.settings')}</span>
                            <div className="flex items-center gap-3">
                                <LanguageToggle />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}