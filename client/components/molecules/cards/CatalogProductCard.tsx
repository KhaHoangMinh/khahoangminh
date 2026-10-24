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
        <Card className="h-full flex flex-col group overflow-hidden card-khm relative">
            {/* Metallic Sheen Glide */}
            <div className="sheen-overlay" />

            <div className="relative h-56 sm:h-60 overflow-hidden bg-slate-900">
                <Image
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                
                {/* Blueprint Corners on Hover */}
                <div className="blueprint-corner-tl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="blueprint-corner-tr opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                    <h3 className="text-lg sm:text-xl font-bold text-white leading-snug group-hover:text-orange-400 transition-colors">
                        {product.name}
                    </h3>
                </div>
            </div>
            <CardContent className="p-5 sm:p-6 bg-slate-50/60 dark:bg-[#182234] flex flex-col flex-grow justify-between gap-4 relative z-10">
                <p className="text-body line-clamp-2">{product.description}</p>
                <Link href={`${createPageUrl("contact")}?product=${encodeURIComponent(product.name)}`} className="block mt-auto">
                    <Button className="w-full h-11 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-semibold shadow-sm group-hover:shadow-md transition-all active:scale-[0.98]">
                        {buttonText}
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </Link>
            </CardContent>
        </Card>
    );
}
