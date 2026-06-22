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
        <section className="py-20 bg-white dark:bg-slate-950">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
                        {title} <span className="text-orange-600">{highlight}</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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