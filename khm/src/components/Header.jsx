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
        { name: t('home'), page: 'Home' },
        { name: t('about'), page: 'About' },
        { name: t('products'), page: 'Products' },
        { name: t('services'), page: 'Services' },
        { name: t('projects'), page: 'Projects' },
        { name: t('videos'), page: 'Videos' },
        { name: t('careers'), page: 'Careers' },
        { name: t('news'), page: 'News' },
        { name: t('contact'), page: 'Contact' },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            {/* Top Bar */}
            <div className="bg-slate-900 text-slate-200 py-2 text-xs hidden md:block">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <p className="flex items-center gap-2">
                        <span className="bg-orange-600 text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">New</span>
                        {t('welcomeMessage')}
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                            <Phone className="w-3 h-3" />
                            <span>+84 976 888 999 | +84 979 866 162</span>
                        </a>
                        <a href="mailto:info@khahoangminh.com" className="flex items-center gap-2 hover:text-white transition-colors">
                            <Mail className="w-3 h-3" />
                            <span>info@khahoangminh.com</span>
                        </a>
                        <div className="flex items-center gap-3 border-l border-slate-700 pl-6">
                            <a href="#" className="hover:text-orange-500 transition-colors"><Facebook className="w-3 h-3" /></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-orange-500/25 transition-all duration-300">
                        K
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white leading-none">KHA HOANG MINH</span>
                        <span className="text-[10px] font-medium text-slate-500 tracking-widest uppercase mt-1">Tấm - Cuộn - Inox</span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.page}
                            to={createPageUrl(item.page)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${currentPageName === item.page
                                ? 'bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400'
                                : 'text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                            }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-2 pl-4 border-l border-slate-200 dark:border-slate-800">
                    <LanguageToggle />
                    <ThemeToggle />
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 absolute w-full left-0 shadow-xl animate-accordion-down">
                    <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
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
                            <span className="text-sm text-slate-500">{t('settings')}</span>
                            <div className="flex items-center gap-3">
                                <LanguageToggle />
                                <ThemeToggle />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}