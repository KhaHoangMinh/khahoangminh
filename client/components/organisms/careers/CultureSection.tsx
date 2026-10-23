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
        <section className="section-frame-half surface-canvas">
            <div className="container-khm">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    <div className="lg:col-span-6">
                        <div className="w-12 h-1 bg-gradient-to-r from-orange-600 to-amber-500 rounded-full mb-4" />
                        <h2 className="heading-section mb-4">
                            {title}{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500 dark:from-orange-400 dark:to-amber-400">
                                {highlight}
                            </span>
                        </h2>
                        <p className="text-body mb-6">
                            {description}
                        </p>
                        <ul className="space-y-3.5">
                            {Array.isArray(cultureList) && cultureList.map((item, index) => (
                                <CultureListItem key={index} text={item} />
                            ))}
                        </ul>
                    </div>
                    
                    <div className="lg:col-span-6">
                        <CultureImageGrid />
                    </div>
                </div>
            </div>
        </section>
    );
}
