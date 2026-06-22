import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, Button } from '@/components/atoms';
import { createPageUrl } from '@/lib';
import Image from 'next/image';

interface ProductData {
    name: string;
    description: string;
    image: string;
}

interface CatalogProductCardProps {
    product: ProductData;
    buttonText: string;
}

export function CatalogProductCard({ product, buttonText }: CatalogProductCardProps) {
    return (
        <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-white dark:bg-slate-900">
            <div className="relative overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                </div>
            </div>
            <CardContent className="p-6 bg-slate-50 dark:bg-slate-900">
                <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">{product.description}</p>
                <Link href={createPageUrl("contact")} className="block">
                    <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white group-hover:shadow-lg transition-all">
                        {buttonText}
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </Link>
            </CardContent>
        </Card>
    );
}