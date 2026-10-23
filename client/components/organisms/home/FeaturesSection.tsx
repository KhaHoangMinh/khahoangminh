import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { FeatureCard } from '@/components/molecules';

interface FeaturesSectionProps {
    title: string;
    features: string[];
}

export function FeaturesSection({ title, features }: FeaturesSectionProps) {
    return (
        <section className="section-frame-half relative surface-band-alt">
            <div className="container-khm">
                <div className="text-center mb-6 sm:mb-8">
                    <div className="w-12 h-1 bg-gradient-to-r from-orange-600 to-amber-500 rounded-full mx-auto mb-2.5" />
                    <h2 className="heading-section">
                        {title}
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                    {features.map((feature, index) => (
                        <FeatureCard 
                            key={index}
                            icon={CheckCircle2}
                            description={feature}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
