import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, Button } from '@/components/atoms';
import { createPageUrl } from '@/utils';
import { useLanguage } from '@/services/LanguageProvider';

export function ProductCard({ product }) {
    const { t } = useLanguage();

    return (
        <Card className="group overflow-hidden border border-slate-200/50 dark:border-white/10 backdrop-blur-md bg-white/70 dark:bg-slate-900/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="relative overflow-hidden aspect-[4/3]">
                <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
            </div>
            <CardContent className="p-6 relative">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 line-clamp-1 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                    {product.name}
                </h3>
                <Link to={`${createPageUrl(product.page)}?tab=${product.id}`}>
                    <Button variant="outline" className="w-full border-slate-300 dark:border-slate-700 group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600 transition-all shadow-sm">
                        {t('common.viewAll')}
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </Link>
            </CardContent>
        </Card>
    );
}