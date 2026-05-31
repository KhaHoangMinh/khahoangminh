import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { FeatureCard } from '@/components/molecules';

export function FeaturesSection({ title, features }) {
    return (
        <section className="py-24 relative bg-slate-50 dark:bg-slate-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-800 dark:text-white">
                        {title}
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <FeatureCard 
                            key={index}
                            icon={CheckCircle2}
                            title={`Tiêu chuẩn ${index + 1}`}
                            description={feature}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}