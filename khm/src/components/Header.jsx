import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, Facebook } from 'lucide-react';
import { createPageUrl } from '@/utils';
import { useLanguage } from '@/services/LanguageProvider';
import ThemeToggle from '@/services/ThemeToggle';
import LanguageToggle from '@/services/LanguageToggle';

export default function Header({ currentPageName }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { t } = useLanguage();

    const navItems = [
        { name: t('nav.home'), page: 'Home' },
        { name: t('nav.about'), page: 'About' },
        { name: t('nav.products'), page: 'Products' },
        { name: t('nav.services'), page: 'Services' },
        { name: t('nav.projects'), page: 'Projects' },
        { name: t('nav.videos'), page: 'Videos' },
        { name: t('nav.careers'), page: 'Careers' },
        { name: t('nav.news'), page: 'News' },
        { name: t('nav.contact'), page: 'Contact' },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            {/* Top Bar */}
            <div className="bg-slate-900 text-slate-200 py-2 text-xs hidden lg:block">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <p className="flex items-center gap-2">
                        <span className="bg-orange-600 text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">New</span>
                        {t('header.welcomeMessage')}
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                            <Phone className="w-3 h-3" />
                            <span>+84 979 866 162 | +84 976 888 999</span>
                        </a>
                        <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                            <Mail className="w-3 h-3" />
                            <span>info@khahoangminh.com.vn</span>
                        </a>
                        <div className="flex items-center gap-3 border-l border-slate-700 pl-6">
                            <a href="https://www.facebook.com/profile.php?id=100054573575093" target="_blank" className="hover:text-orange-500 transition-colors">
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
                    <img src="/img/logo.png" className="w-8 h-8 sm:w-10 sm:h-10" alt='logo'/>
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
                <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.page}
                            to={createPageUrl(item.page)}
                            className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${currentPageName === item.page
                                ? 'bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400'
                                : 'text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                            }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden lg:flex items-center gap-2 pl-4 border-l border-slate-200 dark:border-slate-800">
                    <LanguageToggle />
                    <ThemeToggle />
                </div>

                {/* Mobile/Tablet Menu Button */}
                <div className="flex p-2 gap-4 lg:hidden">
                    <div className="w-6 h-6">
                        <ThemeToggle />
                    </div>

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
                <div className="lg:hidden absolute top-full left-0 w-full border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-xl animate-accordion-down max-h-[calc(100vh-5rem)] overflow-y-auto">
                    <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
                        {/* Contact Info for Mobile (since Top Bar is hidden) */}
                        <div className="mb-4 pb-4 border-b border-slate-100 dark:border-slate-800 flex flex-col gap-3 text-sm text-slate-500 dark:text-slate-400">
                            <a href="#" className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-orange-500" />
                                <span>+84 976 888 999 | +84 979 866 162</span>
                            </a>
                        </div>

                        {navItems.map((item) => (
                            <Link
                                key={item.page}
                                to={createPageUrl(item.page)}
                                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${currentPageName === item.page
                                    ? 'bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400'
                                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                                }`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
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