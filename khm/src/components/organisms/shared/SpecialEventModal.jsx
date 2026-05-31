import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X, Sparkles, CalendarDays } from 'lucide-react';
import { useLanguage } from '@/services';

export function SpecialEventModal({ event, isOpen, onClose }) {
    const { t, language } = useLanguage();

    if (!event) return null;

    const currentLang = language === 'en' ? 'en' : 'vi';
    const content = event.translations[currentLang];

    // Get current Solar Date for the dynamic typographic display
    const today = new Date();
    const dateNum = today.getDate();
    const monthName = currentLang === 'en' 
        ? today.toLocaleString('en-US', { month: 'long' }) 
        : `Tháng ${today.getMonth() + 1}`;

    return (
        <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <Dialog.Portal>
                {/* Deep overlay for maximum focus */}
                <Dialog.Overlay className="fixed inset-0 z-[100] bg-slate-950/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 duration-500" />
                
                <Dialog.Content className="fixed left-1/2 top-1/2 z-[101] w-full max-w-[90vw] md:max-w-4xl -translate-x-1/2 -translate-y-1/2 outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 duration-500">
                    
                    {/* The Split-Layout Architecture */}
                    <div className="relative flex flex-col md:flex-row overflow-hidden rounded-[2.5rem] bg-white dark:bg-slate-900 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] ring-1 ring-slate-200 dark:ring-slate-800">
                        
                        {/* --- LEFT PANE: Visual & Typographic Impact --- */}
                        <div className={`relative flex flex-col justify-between p-8 md:p-12 md:w-2/5 bg-gradient-to-br ${event.theme.gradient} overflow-hidden`}>
                            {/* Decorative Background Elements */}
                            <div className="absolute -left-12 -top-12 h-40 w-40 rounded-full bg-white/20 blur-3xl mix-blend-overlay" />
                            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-black/20 blur-3xl mix-blend-overlay" />
                            
                            {/* Watermark Date (Massive background number) */}
                            <div className="absolute -right-4 top-1/2 -translate-y-1/2 text-[15rem] font-black leading-none text-white/10 select-none pointer-events-none">
                                {dateNum}
                            </div>

                            {/* Top Section: Icon */}
                            <div className="relative z-10">
                                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 shadow-xl">
                                    <Sparkles className={`h-8 w-8 ${event.theme.iconColor} drop-shadow-md`} />
                                </div>
                            </div>

                            {/* Bottom Section: Solar Date Display */}
                            <div className="relative z-10 mt-12 md:mt-0 text-white">
                                <span className="block text-sm font-bold tracking-[0.2em] text-white/80 uppercase mb-1">
                                    {monthName}
                                </span>
                                <span className="block text-6xl md:text-7xl font-black tracking-tighter leading-none drop-shadow-lg">
                                    {dateNum}
                                </span>
                            </div>
                        </div>

                        {/* --- RIGHT PANE: Clean Editorial Content --- */}
                        <div className="relative flex flex-col justify-center p-8 md:p-14 md:w-3/5 bg-slate-50 dark:bg-slate-950">
                            
                            {/* Close Button (Absolute Top Right) */}
                            <Dialog.Close asChild>
                                <button className="absolute right-6 top-6 rounded-full p-2.5 text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all duration-300 outline-none focus:ring-2 focus:ring-slate-400 group">
                                    <X className="h-5 w-5 group-hover:rotate-90 transition-transform duration-300" />
                                </button>
                            </Dialog.Close>

                            {/* Badge */}
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-slate-200/50 dark:bg-slate-800/50 px-4 py-1.5 text-xs font-bold tracking-widest text-slate-600 dark:text-slate-400 uppercase w-max">
                                <CalendarDays className="w-4 h-4" />
                                {t('events.specialEventTag')}
                            </div>

                            {/* Title & Quote */}
                            <Dialog.Title className="text-3xl md:text-[2.5rem] font-black tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6">
                                {content.title}
                            </Dialog.Title>
                            
                            <Dialog.Description className="text-lg md:text-xl font-medium leading-relaxed text-slate-600 dark:text-slate-400 max-w-lg">
                                "{content.quote}"
                            </Dialog.Description>

                            {/* Action Area */}
                            <div className="mt-12">
                                <button 
                                    onClick={onClose}
                                    className={`group relative overflow-hidden rounded-2xl bg-gradient-to-r ${event.theme.gradient} px-8 py-4 text-sm md:text-base font-bold text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] outline-none shadow-[0_10px_40px_-10px_rgba(0,0,0,0.4)]`}
                                >
                                    {/* Shimmer Effect */}
                                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-shimmer" />
                                    <span className="relative flex items-center justify-center gap-2">
                                        {t('common.continueToSite')}
                                    </span>
                                </button>
                            </div>
                        </div>
                        
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}