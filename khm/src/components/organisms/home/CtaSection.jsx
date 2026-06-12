import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { Button } from '@/components/atoms';
import { createPageUrl } from '@/utils';
import { useLanguage } from '@/services/LanguageProvider';

export function CtaSection({ title, description }) {
    const { t } = useLanguage();
    
    return (
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('http://khahoangminh.com.vn/upload/hinhanh/ddd_1366x540.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
            <div className="container mx-auto px-4 text-center relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
                <p className="text-xl mb-8 text-blue-100">{description}</p>
                <div className="flex flex-wrap gap-4 justify-center">
                    <Link to={createPageUrl('contact')}>
                        <Button size="lg" variant="outline" className="bg-orange-600 hover:bg-orange-700 border-none text-white px-8 hover:scale-105">
                            <Mail className="mr-2 w-5 h-5" />
                            {t('common.sendRequest')}
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}