"use client";

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, ReceiptText } from 'lucide-react';
import { FaFacebook } from 'react-icons/fa';
import { createPageUrl, getAssetPath } from '@/lib';
import { useLanguage } from '@/services';
import { mainNavigation, legalNavigation, type SpecialEvent } from '@/config';
import Image from 'next/image';

interface FooterProps {
    activeEvent?: SpecialEvent | null;
}

export function Footer({ activeEvent }: FooterProps) {
    const { t } = useLanguage();
    const currentLogo = getAssetPath(activeEvent?.theme?.logo || "/img/logo/logo.png");

    return (
        <footer className="bg-[#070A10] text-slate-200 pt-14 pb-8 border-t border-slate-800/90 relative overflow-hidden">
            {/* Subtle top brand accent glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-orange-500/70 to-transparent" />

            <div className="container-khm relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-12">
                    {/* Column 1: Company Info */}
                    <div className="space-y-5">
                        <div className="flex items-center gap-3">
                            <Image 
                                src={currentLogo} 
                                className="w-12 h-12 object-contain transition-transform duration-300" 
                                height={48}
                                width={48}
                                alt="Kha Hoàng Minh Logo"
                                onError={(e) => {
                                    const target = e.currentTarget;
                                    target.onerror = null;
                                    target.src = getAssetPath("/img/logo/logo.png");
                                }}
                            />
                            <div>
                                <span className="font-extrabold text-lg tracking-tight text-white block leading-none">
                                    {t('common.companyShortName')}
                                </span>
                                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-400 mt-1 block">
                                    {t('header.subtitle')}
                                </span>
                            </div>
                        </div>
                        <p className="text-slate-300 dark:text-slate-200 text-sm leading-relaxed">
                            {t('footer.description')}
                        </p>
                        <div className="flex gap-3">
                            <a
                                href="https://www.facebook.com/profile.php?id=100054573575093"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:bg-orange-600 hover:border-orange-500 hover:text-white transition-all duration-200"
                            >
                                <FaFacebook className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <nav aria-label="Footer Quick Links">
                        <h3 className="text-sm font-bold uppercase tracking-wider mb-5 text-white">
                            {t('footer.quickLinks')}
                        </h3>
                        <ul className="space-y-2.5">
                            {mainNavigation.slice(0, 6).map((item) => (
                                <li key={item.pageKey}>
                                    <Link
                                        href={createPageUrl(item.pageKey)}
                                        className="text-slate-300 hover:text-orange-400 transition-colors text-sm flex items-center gap-2.5 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500/70 group-hover:bg-orange-400 group-hover:scale-125 transition-all" />
                                        <span>{t(item.translationKey)}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Column 3: Contact Info */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider mb-5 text-white">
                            {t('footer.contactUs')}
                        </h3>
                        <ul className="space-y-3.5 text-sm">
                            <li className="flex items-start gap-3">
                                <Phone className="w-4 h-4 text-orange-500 shrink-0 mt-1" />
                                <div className="space-y-1">
                                    <a href="tel:+84979866162" className="text-slate-300 hover:text-orange-400 transition-colors block">
                                        0979.866.162 (Ms. Uyên)
                                    </a>
                                    <a href="tel:+84976888999" className="text-slate-300 hover:text-orange-400 transition-colors block">
                                        0976.888.999 (Ms. Hải)
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                                <a href="mailto:info@khahoangminh.com.vn" className="text-slate-300 hover:text-orange-400 transition-colors break-all">
                                    info@khahoangminh.com.vn
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <ReceiptText className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                                <span className="text-slate-300 dark:text-slate-200">{t('footer.receiptNumber')}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Address & Map */}
                    <div className="flex flex-col">
                        <h3 className="text-sm font-bold uppercase tracking-wider mb-5 text-orange-400">
                            {t('footer.addressTitle')}
                        </h3>
                        <div className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed mb-3">
                            <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-1" />
                            <p>{t('footer.addressText')}</p>
                        </div>
                        <div className="w-full h-40 rounded-xl overflow-hidden border border-slate-800 bg-slate-900 relative">
                            <iframe
                                src="https://maps.google.com/maps?q=10.813049,106.597400&hl=vi&z=15&output=embed"
                                className="w-full h-full border-0"
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Kha Hoang Minh Location"
                            />
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800/80 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-slate-300 dark:text-slate-200">
                        <p className="text-center md:text-left">
                            &copy; 2016 - {new Date().getFullYear()} {t('footer.companyName')}. All rights reserved.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <Image
                                src={getAssetPath("/img/bo-cong-thuong.png")}
                                alt="Đã thông báo Bộ Công Thương"
                                width={105}
                                height={40}
                                className="h-9 w-auto object-contain"
                                style={{ width: 'auto', height: 'auto' }}
                            />
                            <div className="flex flex-wrap items-center justify-center gap-2.5">
                                {legalNavigation.map((item, index) => (
                                    <React.Fragment key={item.pageKey}>
                                        <Link
                                            href={createPageUrl(item.pageKey)}
                                            className="hover:text-orange-400 transition-colors"
                                        >
                                            {t(item.translationKey)}
                                        </Link>
                                        {index < legalNavigation.length - 1 && (
                                            <span className="text-slate-700">|</span>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
