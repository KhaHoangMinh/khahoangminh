import React from 'react';
import { type LucideIcon } from 'lucide-react';
import { BenefitCard } from '@/components/molecules';

interface Benefit {
    icon?: LucideIcon;
    title: string;
    description: string;
}

interface BenefitsSectionProps {
    title: string;
    highlight: string;
    subtitle: string;
    benefits: Benefit[];
}

export function BenefitsSection({ title, highlight, subtitle, benefits }: BenefitsSectionProps) {
    return (
        <section className="section-frame-half surface-canvas">
            <div className="container-khm">
                <div className="text-center mb-6 sm:mb-8">
                    <div className="w-12 h-1 bg-gradient-to-r from-orange-600 to-amber-500 rounded-full mx-auto mb-2.5" />
                    <h2 className="heading-section mb-2">
                        {title}{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500 dark:from-orange-400 dark:to-amber-400">
                            {highlight}
                        </span>
                    </h2>
                    <p className="text-lead max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
                    {benefits.map((benefit, index) => (
                        <BenefitCard 
                            key={index}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
