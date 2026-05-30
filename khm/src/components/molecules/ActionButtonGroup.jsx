import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/atoms';
import { createPageUrl } from '@/utils';
import { useLanguage } from '@/services/LanguageProvider';

export function ActionButtonGroup({ className = "" }) {
    const { t } = useLanguage();

    return (
        <div className={`flex flex-wrap gap-4 ${className}`}>
            <Link to={createPageUrl('contact')}>
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 shadow-lg shadow-orange-600/20 transition-all hover:scale-105">
                    <Mail className="mr-2 w-5 h-5" />
                    {t('common.contactNow') || "Contact Now"}
                    <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
            </Link>
            <a href="https://www.facebook.com/inoxkhahoangminh" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="backdrop-blur-md bg-white/10 border-white/20 text-slate-800 dark:text-white hover:bg-white/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all hover:scale-105">
                    <Facebook className="mr-2 w-5 h-5" />
                    {t('common.visitFacebook') || "Facebook"}
                </Button>
            </a>
        </div>
    );
}