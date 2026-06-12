import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/atoms';
import { createPageUrl } from '@/utils';
import { useLanguage } from '@/services/LanguageProvider';

export function ActionButtonGroup() {
    const { t } = useLanguage();

    return (
        <>
            <div className="flex flex-wrap gap-4">
                <Link to={createPageUrl('contact')}>
                    <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8">
                        {t('common.contactNow')}
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </Link>
                <Link to={createPageUrl('products')}>
                    <Button size="lg" variant="outline" className="border-white text-black dark:text-white hover:bg-white dark:hover:text-black  hover:text-blue-900">
                        {t('common.viewProducts')}
                    </Button>
                </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-6">
                <a href="#" className="flex items-center gap-2 text-lg hover:text-orange-400 transition-colors">
                    <Phone className="w-5 h-5" />
                    <span className="font-semibold">0976.888.999</span>
                </a>
                <a href="#" className="flex items-center gap-2 text-lg hover:text-orange-400 transition-colors">
                    <Phone className="w-5 h-5" />
                    <span className="font-semibold">0979.866.162</span>
                </a>
            </div>
        </>
    );
}