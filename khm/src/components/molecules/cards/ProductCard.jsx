import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, Button } from '@/components/atoms';
import { createPageUrl } from '@/utils';
import { useLanguage } from '@/services/LanguageProvider';

export function ProductCard({ key, product }) {
    const { t } = useLanguage();

    return (
        <Card key={key} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-slate-50 dark:bg-slate-900">
            <div className="relative overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <CardContent className="p-6">
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-3">{product.name}</h3>
                <Link to={`${createPageUrl(product.page)}?tab=${product.id}`}>
                    <Button variant="outline" className="w-full group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600 transition-colors">
                        {t('common.viewAll')}
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </Link>
            </CardContent>
        </Card>
    );
}