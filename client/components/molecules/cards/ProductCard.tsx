import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, Button } from '@/components/atoms';
import { createPageUrl } from '@/lib';
import { useLanguage } from '@/services';
import Image from 'next/image';

export interface ProductSummary {
    id: string;
    name: string;
    image: string;
    page: string;
}

interface ProductCardProps {
    product: ProductSummary;
}

export function ProductCard({ product }: ProductCardProps) {
    const { t } = useLanguage();

    return (
        <Card className="h-full flex flex-col group overflow-hidden card-khm bg-slate-50/70">
            <div className="relative h-48 sm:h-52 overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    loading="lazy"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/15 to-transparent" />
            </div>
            <CardContent className="p-5 flex flex-col flex-grow justify-between gap-4">
                <h3 className="heading-card group-hover:text-orange-600 dark:group-hover:text-orange-300 transition-colors">
                    {product.name}
                </h3>
                <Link href={`${createPageUrl(product.page)}?tab=${product.id}`} className="mt-auto block">
                    <Button
                        variant="outline"
                        className="w-full rounded-xl border-slate-300 dark:border-slate-600 dark:bg-[#111827] text-slate-800 dark:text-slate-100 group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600 dark:group-hover:bg-orange-600 dark:group-hover:text-white dark:group-hover:border-orange-500 font-semibold transition-all"
                    >
                        {t('common.viewAll')}
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </Link>
            </CardContent>
        </Card>
    );
}
