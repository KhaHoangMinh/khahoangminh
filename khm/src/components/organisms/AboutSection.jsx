import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/atoms';
import { createPageUrl } from '@/utils';
import { useLanguage } from '@/services/LanguageProvider';

export function AboutSection({ intro, name, desc1, desc2, quote }) {
    const { t } = useLanguage();

    return (
        <section className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-900">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-800 dark:text-white leading-tight">
                            {intro}<br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
                                {name}
                            </span>
                        </h2>
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">{desc1}</p>
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">{desc2}</p>
                        <div className="backdrop-blur-md bg-orange-50 dark:bg-orange-900/10 border-l-4 border-orange-600 p-6 rounded-r-xl shadow-sm">
                            <p className="text-slate-800 dark:text-slate-200 font-semibold italic">"{quote}"</p>
                        </div>
                        <Link to={createPageUrl('about')}>
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20 mt-4 transition-all hover:-translate-y-0.5">
                                {t('common.viewMore')}
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                    <div className="relative group perspective">
                        <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-blue-600 rounded-3xl transform rotate-3 scale-105 opacity-20 group-hover:rotate-6 transition-transform duration-500" />
                        <img
                            src="http://khahoangminh.com.vn/upload/hinhanh/979d4c471bd530505eb18b1892246371-9428_579x400.jpg"
                            alt={name}
                            loading="lazy"
                            className="relative rounded-3xl shadow-2xl w-full object-cover transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-[-1deg]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}