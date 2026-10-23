"use client";

import React, { useState, useEffect } from 'react';
import { Phone, Calculator, ArrowUp, MessageSquare, X, ChevronUp, Sparkles } from 'lucide-react';
import { useLanguage } from '@/services';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/atoms';
import { InoxWeightCalculator } from '@/components/molecules/calculator/InoxWeightCalculator';

export function FloatingSpeedDial() {
    const { t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [isCalcOpen, setIsCalcOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 320) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {/* Persistent Speed Dial Container */}
            <aside aria-label="Quick contact and tools" className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5 select-none print:hidden">
                {/* Back to Top Floating Button */}
                {showScrollTop && (
                    <button
                        onClick={scrollToTop}
                        aria-label={t('speedDial.scrollTopTooltip')}
                        title={t('speedDial.scrollTopTooltip')}
                        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-slate-800/90 dark:bg-[#182234] text-white hover:bg-orange-600 dark:hover:bg-orange-600 border border-slate-700/80 shadow-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 active:scale-95 group"
                    >
                        <ArrowUp className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
                    </button>
                )}

                {/* Expanded Speed Dial Action Items */}
                <div
                    className={`flex flex-col items-end gap-2.5 transition-all duration-300 origin-bottom ${
                        isOpen ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' : 'opacity-0 scale-95 translate-y-4 pointer-events-none h-0 overflow-hidden'
                    }`}
                >
                    {/* Hotline 2 - Ms. Minh Hải */}
                    <a
                        href="tel:0976888999"
                        className="flex items-center gap-3 bg-white dark:bg-[#182234] border border-slate-200 dark:border-slate-700 rounded-full pl-4 pr-1.5 py-1.5 shadow-xl hover:border-orange-500 transition-all duration-200 hover:-translate-y-0.5 group"
                    >
                        <span className="text-xs font-semibold text-slate-800 dark:text-slate-100 whitespace-nowrap">
                            {t('speedDial.callHai')}
                        </span>
                        <div className="w-9 h-9 rounded-full bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-colors">
                            <Phone className="w-4 h-4" />
                        </div>
                    </a>

                    {/* Hotline 1 - Ms. Phụng Uyên */}
                    <a
                        href="tel:0979866162"
                        className="flex items-center gap-3 bg-white dark:bg-[#182234] border border-slate-200 dark:border-slate-700 rounded-full pl-4 pr-1.5 py-1.5 shadow-xl hover:border-orange-500 transition-all duration-200 hover:-translate-y-0.5 group"
                    >
                        <span className="text-xs font-semibold text-slate-800 dark:text-slate-100 whitespace-nowrap">
                            {t('speedDial.callUyen')}
                        </span>
                        <div className="w-9 h-9 rounded-full bg-orange-600 text-white flex items-center justify-center shadow-md shadow-orange-600/30">
                            <Phone className="w-4 h-4" />
                        </div>
                    </a>

                    {/* Quick Calculator Modal Trigger */}
                    <button
                        onClick={() => {
                            setIsCalcOpen(true);
                            setIsOpen(false);
                        }}
                        className="flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full pl-4 pr-1.5 py-1.5 shadow-xl hover:shadow-orange-600/25 transition-all duration-200 hover:-translate-y-0.5 group"
                    >
                        <span className="text-xs font-bold whitespace-nowrap flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5" />
                            {t('speedDial.calcTooltip')}
                        </span>
                        <div className="w-9 h-9 rounded-full bg-white/20 text-white flex items-center justify-center backdrop-blur-xs">
                            <Calculator className="w-4 h-4" />
                        </div>
                    </button>
                </div>

                {/* Primary Multi-Action Dial Trigger Button */}
                <div className="flex items-center gap-2">
                    {/* Direct Zalo Quick Button with Pulse Halo */}
                    <a
                        href="https://zalo.me/0979866162"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Chat Zalo 0979.866.162"
                        title={t('speedDial.zaloTooltip')}
                        className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0068FF] text-white flex items-center justify-center shadow-xl shadow-blue-600/30 hover:scale-105 active:scale-95 transition-all duration-300"
                    >
                        <span className="absolute -inset-1 rounded-full bg-[#0068FF]/35 animate-ping pointer-events-none" />
                        <span className="font-extrabold text-sm sm:text-base tracking-tighter">Zalo</span>
                    </a>

                    {/* Main Dial Expand/Collapse Toggle */}
                    <button
                        onClick={() => setIsOpen(prev => !prev)}
                        aria-label={isOpen ? t('speedDial.menuClose') : t('speedDial.menuOpen')}
                        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white shadow-xl transition-all duration-300 active:scale-95 ${
                            isOpen
                                ? 'bg-slate-800 dark:bg-[#182234] border border-slate-600 rotate-90'
                                : 'bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500 hover:shadow-orange-600/40 hover:scale-105'
                        }`}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
                    </button>
                </div>
            </aside>

            {/* Inox Weight Calculator Modal Dialog */}
            <Dialog open={isCalcOpen} onOpenChange={setIsCalcOpen}>
                <DialogContent 
                    showCloseButton={false}
                    className="max-w-2xl w-[95vw] sm:w-full p-0 overflow-hidden rounded-2xl sm:rounded-3xl bg-white dark:bg-[#0B0F17] border border-slate-200/90 dark:border-slate-800 shadow-2xl"
                >
                    <DialogHeader className="sr-only">
                        <DialogTitle>{t('calculator.title')}</DialogTitle>
                    </DialogHeader>
                    <div className="p-4 sm:p-5 max-h-[85vh] overflow-y-auto">
                        <InoxWeightCalculator onCloseModal={() => setIsCalcOpen(false)} />
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}
