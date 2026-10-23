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
        <Card className="h-full flex flex-col group overflow-hidden card-khm">
            <div className="relative h-56 sm:h-60 overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">{product.name}</h3>
                </div>
            </div>
            <CardContent className="p-5 sm:p-6 bg-slate-50/60 dark:bg-[#182234] flex flex-col flex-grow justify-between gap-4">
                <p className="text-body line-clamp-2">{product.description}</p>
                <Link href={createPageUrl("contact")} className="block mt-auto">
                    <Button className="w-full h-11 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-semibold shadow-sm group-hover:shadow-md transition-all">
                        {buttonText}
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </Link>
            </CardContent>
        </Card>
    );
}
