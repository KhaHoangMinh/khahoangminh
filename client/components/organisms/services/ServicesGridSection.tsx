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
        <section className="section-frame-half surface-canvas">
            <div className="container-khm">
                <div className="text-center mb-6 sm:mb-8">
                    <div className="w-12 h-1 bg-gradient-to-r from-orange-600 to-amber-500 rounded-full mx-auto mb-2.5" />
                    <h2 className="heading-section mb-2">
                        {title}
                    </h2>
                    <p className="text-lead max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
