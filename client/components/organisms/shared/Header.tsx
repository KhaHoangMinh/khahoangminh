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

    const currentLogo = activeEvent?.theme?.logo || "/img/logo/logo.png";
    
    const currentLang = language === 'en' ? 'en' : 'vi';
    const eventQuote = activeEvent?.translations?.[currentLang]?.quote;
    const eventTitle = activeEvent?.translations?.[currentLang]?.title;

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 dark:border-slate-800/90 bg-white/95 dark:bg-[#0B0F17]/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/85 dark:supports-[backdrop-filter]:bg-[#0B0F17]/90 transition-colors">
            {/* Top Bar — Laptop & Desktop */}
            <div className="bg-orange-50/90 dark:bg-[#111827] border-b border-orange-200/70 dark:border-slate-800/90 text-slate-700 dark:text-slate-200 py-1.5 text-xs hidden lg:block transition-colors">
                <div className="container-khm flex justify-between items-center gap-4">
                    {/* Left: Welcome Message */}
                    <p className="flex items-center gap-2.5 shrink-0 font-medium">
                        <span className="bg-gradient-to-r from-orange-600 to-amber-500 text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider shadow-xs">
                            KHM
                        </span>
                        <Image
                            src="/img/vietnamFlag.png"
                            alt="VN Flag"
                            width={20}
                            height={14}
                            className="h-3.5 w-auto object-contain rounded-[2px]"
                        />
                        <span className="text-slate-700 dark:text-slate-300">{t('header.welcomeMessage')}</span>
                    </p>

                    {/* Middle: Scrolling Event Quote */}
                    {eventQuote && (
                        <div 
                            className="flex-1 mx-4 xl:mx-8 relative h-5 overflow-hidden flex items-center"
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
                                            style={{ color: activeEvent?.theme?.accentHex || '#ea580c' }}
                                        />
                                        <span
                                            className={`font-serif text-xs tracking-wide font-semibold whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r ${activeEvent?.theme?.titleGradient || 'from-orange-600 to-amber-500 dark:from-orange-300 dark:to-amber-400'}`}
                                        >
                                            {eventQuote}
                                        </span>
                                        <Sparkles
                                            className="w-3 h-3 shrink-0"
                                            style={{ color: activeEvent?.theme?.accentHex || '#ea580c' }}
                                        />
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Right: Contact Info */}
                    <div className="flex items-center gap-5 shrink-0">
                        <a href="tel:+84979866162" className="flex items-center gap-1.5 hover:text-orange-600 dark:hover:text-orange-400 transition-colors font-medium">
                            <Phone className="w-3.5 h-3.5 text-orange-600 dark:text-orange-500" />
                            <span>+84 979 866 162 | +84 976 888 999</span>
                        </a>
                        <a href="mailto:info@khahoangminh.com.vn" className="hidden xl:flex items-center gap-1.5 hover:text-orange-600 dark:hover:text-orange-400 transition-colors font-medium">
                            <Mail className="w-3.5 h-3.5 text-orange-600 dark:text-orange-500" />
                            <span>info@khahoangminh.com.vn</span>
                        </a>
                        <div className="flex items-center gap-3 border-l border-orange-200 dark:border-slate-700/80 pl-4">
                            <a
                                href="https://www.facebook.com/profile.php?id=100054573575093"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Facebook"
                                className="text-slate-600 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-500 transition-colors"
                            >
                                <FaFacebook className="w-3.5 h-3.5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="container-khm h-16 sm:h-20 flex items-center justify-between gap-2">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
                    <Image
                        src={currentLogo}
                        height={44}
                        width={44}
                        priority
                        className="w-10 h-10 sm:w-11 sm:h-11 object-contain transition-transform duration-300 group-hover:scale-105"
                        alt="Kha Hoàng Minh Logo"
                        onError={(e) => {
                            const target = e.currentTarget;
                            target.onerror = null;
                            target.src = "/img/logo/logo.png";
                        }}
                    />
                    <div className="flex flex-col justify-center">
                        <span className="font-extrabold text-base sm:text-lg xl:text-xl tracking-tight leading-none text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                            {t('common.companyShortName')}
                        </span>
                        <span className="text-[10px] font-semibold text-orange-600 dark:text-orange-400 tracking-[0.18em] uppercase mt-1 leading-tight">
                            {t('header.subtitle')}
                        </span>
                    </div>
                </Link>

                {/* Laptop & Desktop Menu */}
                <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1" aria-label="Main Navigation">
                    {mainNavigation.map((item) => {
                        const isActive = item.pageKey === '' 
                            ? (currentPageName === '' || currentPageName === 'home') 
                            : (currentPageName === item.pageKey);
                        return (
                            <Link
                                key={item.pageKey}
                                href={createPageUrl(item.pageKey)}
                                className={`px-2.5 xl:px-3.5 py-2 rounded-full text-xs xl:text-sm font-semibold tracking-wide transition-all duration-200 whitespace-nowrap ${
                                    isActive
                                        ? 'bg-orange-600 text-white shadow-sm shadow-orange-600/25'
                                        : 'text-slate-700 dark:text-slate-200 hover:text-orange-600 dark:hover:text-orange-300 hover:bg-orange-50/80 dark:hover:bg-[#182234]'
                                }`}
                            >
                                {t(item.translationKey)}
                            </Link>
                        );
                    })}
                </nav>

                {/* Laptop & Desktop Actions */}
                <div className="hidden lg:flex items-center gap-2 pl-3 xl:pl-4 border-l border-slate-200 dark:border-slate-800 shrink-0">
                    {activeEvent && (
                        <button 
                            onClick={onOpenSpecialEvent}
                            className="relative p-2 text-slate-600 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-500/10 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500/50 group"
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

                {/* Mobile & Tablet Menu Button (<1024px) */}
                <div className="flex items-center gap-2 lg:hidden">
                    {activeEvent && (
                        <button 
                            onClick={onOpenSpecialEvent}
                            className="relative p-2 text-slate-600 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-500/10 rounded-xl transition-all"
                            title={eventTitle || "Special Event"}
                            aria-label="View notifications"
                        >
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-1.5 right-1.5 flex h-2 w-2 rounded-full bg-orange-500" />
                        </button>
                    )}
                    <LanguageToggle />
                    <ThemeToggle />

                    <button
                        className="p-2.5 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={mobileMenuOpen}
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile/Tablet Menu Overlay */}
            {mobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full border-t border-slate-200 dark:border-slate-800 bg-white/98 dark:bg-[#0B0F17]/98 backdrop-blur-xl shadow-2xl animate-accordion-down max-h-[calc(100dvh-4rem)] sm:max-h-[calc(100dvh-5rem)] overflow-y-auto">
                    <div className="container-khm py-4 flex flex-col gap-1.5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                            {mainNavigation.map((item) => {
                                const isActive = item.pageKey === '' 
                                    ? (currentPageName === '' || currentPageName === 'home') 
                                    : (currentPageName === item.pageKey);
                                return (
                                    <Link
                                        key={item.pageKey}
                                        href={createPageUrl(item.pageKey)}
                                        className={`px-4 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                                            isActive
                                                ? 'bg-orange-600 text-white shadow-sm'
                                                : 'text-slate-700 dark:text-slate-200 hover:bg-orange-50 dark:hover:bg-[#182234] hover:text-orange-600 dark:hover:text-orange-300'
                                        }`}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <span>{t(item.translationKey)}</span>
                                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                                    </Link>
                                );
                            })}
                        </div>

                        <div className="h-px bg-slate-200 dark:bg-slate-800 my-2" />

                        <div className="flex flex-wrap items-center justify-between gap-3 px-2 py-1 text-xs text-slate-600 dark:text-slate-200">
                            <a href="tel:+84979866162" className="flex items-center gap-2 font-medium hover:text-orange-600 dark:hover:text-orange-400">
                                <Phone className="w-3.5 h-3.5 text-orange-500" />
                                <span>0979.866.162 | 0976.888.999</span>
                            </a>
                            <a href="mailto:info@khahoangminh.com.vn" className="flex items-center gap-2 font-medium hover:text-orange-600 dark:hover:text-orange-400">
                                <Mail className="w-3.5 h-3.5 text-orange-500" />
                                <span>info@khahoangminh.com.vn</span>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
