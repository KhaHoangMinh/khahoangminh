import React from 'react';
import { ProductCard } from '@/components/molecules';

export function ProductsSection({ title, description, products }) {
    return (
        <section className="py-20 bg-white/50 dark:bg-slate-950 backdrop-blur-sm border-y border-slate-200/50 dark:border-white/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
                        {title}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        {description}
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}