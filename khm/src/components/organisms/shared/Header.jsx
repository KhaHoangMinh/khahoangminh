import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, Facebook, Sparkles } from 'lucide-react';
import { createPageUrl } from '@/utils';
import { useLanguage, ThemeToggle, LanguageToggle } from '@/services';
import { mainNavigation } from '@/config';

export function Header({ currentPageName, activeEvent, onOpenSpecialEvent }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { t } = useLanguage();

    // Determine which logo to show
    const currentLogo = activeEvent?.theme?.logo || "/img/logo/logo.png";

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            {/* Top Bar */}
            <div className="bg-slate-900 text-slate-200 py-2 text-xs hidden lg:block">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <p className="flex items-center gap-2">
                        <span className="bg-orange-600 text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">KHM</span>
                        <img src="/img/vietnamFlag.png" alt="VN Flag" className="h-6"/>
                        {t('header.welcomeMessage')}
                    </p>
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
                                <Facebook className="w-3 h-3" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="container mx-auto px-4 h-16 sm:h-20 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
                    <img 
                        src={currentLogo} 
                        className="w-12 h-12 sm:w-12 sm:h-12 transition-all duration-500" 
                        alt='logo'
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/img/logo/logo.png";
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
                            to={createPageUrl(item.pageKey)}
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
                            className="p-2 mr-2 rounded-full bg-gradient-to-r from-orange-500/10 to-red-500/10 text-orange-600 hover:scale-110 transition-transform"
                            title={t(`${activeEvent.translationKey}.title`)}
                        >
                            <Sparkles className="w-5 h-5 animate-pulse" />
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
                        {/* Contact Info for Mobile */}
                        <div className="mb-4 pb-4 border-b border-slate-100 dark:border-slate-800 flex flex-col gap-3 text-sm text-slate-500 dark:text-slate-400">
                            <a href="tel:+84976888999" className="flex items-center gap-3 hover:text-orange-600 transition-colors">
                                <Phone className="w-4 h-4 text-orange-500" />
                                <span>+84 976 888 999 | +84 979 866 162</span>
                            </a>
                        </div>

                        {mainNavigation.map((item) => (
                            <Link
                                key={item.pageKey}
                                to={createPageUrl(item.pageKey)}
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