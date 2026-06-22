import React from 'react';
import { CultureListItem, CultureImageGrid } from '@/components/molecules';

interface CultureSectionProps {
    title: string;
    highlight: string;
    description: string;
    cultureList: string[];
}

export function CultureSection({ title, highlight, description, cultureList }: CultureSectionProps) {
    return (
        <section className="py-20 bg-white dark:bg-slate-950">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800 dark:text-white">
                            {title} <span className="text-orange-600">{highlight}</span>
                        </h2>
                        <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                            {description}
                        </p>
                        <ul className="space-y-4">
                            {Array.isArray(cultureList) && cultureList.map((item, index) => (
                                <CultureListItem key={index} text={item} />
                            ))}
                        </ul>
                    </div>
                    
                    <CultureImageGrid />
                    
                </div>
            </div>
        </section>
    );
}