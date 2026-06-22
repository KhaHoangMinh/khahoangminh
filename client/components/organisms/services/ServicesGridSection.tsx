import React from 'react';
import { type LucideIcon } from 'lucide-react';
import { ServiceFeatureCard } from '@/components/molecules';

interface ServiceData {
    title: string;
    description: string;
    features: string[];
}

interface ServicesGridSectionProps {
    title: string;
    subtitle: string;
    services: ServiceData[];
    icons: LucideIcon[];
}

export function ServicesGridSection({ title, subtitle, services, icons }: ServicesGridSectionProps) {
    return (
        <section className="py-20 bg-white dark:bg-slate-950">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
                        {title}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Array.isArray(services) && services.map((service, index) => (
                        <ServiceFeatureCard 
                            key={index}
                            icon={icons[index]}
                            title={service.title}
                            description={service.description}
                            features={service.features}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}