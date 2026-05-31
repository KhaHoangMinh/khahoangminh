import React from 'react';
import { ScopeCard } from '@/components/molecules';

export function BusinessScopeSection({ title, productsTitle, productsList, servicesTitle, servicesList }) {
    return (
        <section className="py-20 bg-white dark:bg-slate-950">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
                            {title}
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <ScopeCard 
                            title={productsTitle} 
                            items={productsList} 
                            colorTheme="orange" 
                        />
                        <ScopeCard 
                            title={servicesTitle} 
                            items={servicesList} 
                            colorTheme="blue" 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}