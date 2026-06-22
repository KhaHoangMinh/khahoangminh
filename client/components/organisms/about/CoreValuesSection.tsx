import React from 'react';
import { type LucideIcon } from 'lucide-react';
import { ValueCard } from '@/components/molecules';

interface CoreValue {
    icon?: LucideIcon;
    title: string;
    description: string;
}

interface CoreValuesSectionProps {
    title: string;
    description: string;
    values: CoreValue[];
}

export function CoreValuesSection({ title, description, values }: CoreValuesSectionProps) {
    return (
        <section className="py-20 bg-slate-50 dark:bg-slate-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
                        {title}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        {description}
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value, index) => (
                        <ValueCard 
                            key={index}
                            icon={value.icon}
                            title={value.title}
                            description={value.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}