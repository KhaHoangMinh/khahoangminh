import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Facebook, MapPin, Clock } from 'lucide-react';
import { createPageUrl } from '@/utils';
import { useLanguage } from '@/services/LanguageProvider';

export default function Footer() {
    const { t } = useLanguage();

    // Re-defining nav items for the footer links
    const navItems = [
        { name: t('home'), page: 'Home' },
        { name: t('about'), page: 'About' },
        { name: t('products'), page: 'Products' },
        { name: t('services'), page: 'Services' },
        { name: t('projects'), page: 'Projects' },
        { name: t('news'), page: 'News' },
        { name: t('contact'), page: 'Contact' },
    ];

    return (
        <footer className="bg-slate-900 text-slate-200 pt-16 pb-8 border-t border-slate-800">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <div className="lg:col-span-1 gap-3">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                                    K
                                </div>
                                <span className="font-bold text-xl tracking-tight text-white">KHA HOANG MINH</span>
                                <p className="text-xs text-slate-400">Stainless Steel Supplier</p>
                            </div>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            {t('companyDesc')}
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all duration-300">
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">{t('quickLinks')}</h3>
                        <ul className="space-y-3">
                            {navItems.slice(0, 5).map((item) => (
                                <li key={item.page}>
                                    <Link to={createPageUrl(item.page)} className="text-slate-400 hover:text-orange-500 transition-colors text-sm flex items-center gap-2">
                                        <span className="w-1 h-1 rounded-full bg-orange-500" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">{t('contactUs')}</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-slate-400">{t('addressText')}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                                <div>
                                    <span className="text-sm text-slate-400 transition-colors block">0976.888.999 (Ms. Hải)</span>
                                    <span className="text-sm text-slate-400 transition-colors block">0979.866.162 (Ms. Uyên)</span>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                                <span className="text-sm text-slate-400">info@khahoangminh.com</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Clock className="w-5 h-5 text-orange-500 flex-shrink-0" />
                                <span className="text-sm text-slate-400">Mon - Sat: 8:00 - 17:00</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-orange-500">{t('addressTitle')}</h3>
                        <div className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                            <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                            <p>{t('addressText')}</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
                        <p>&copy; 2025 {t('companyInfo')}. {t('allRightsReserved')}</p>
                        <p className="flex items-center gap-2">
                            <span>Made with</span>
                            <span className="text-orange-500">❤</span>
                            <span>in Vietnam</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}