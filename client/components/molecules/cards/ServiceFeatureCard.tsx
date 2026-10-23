import React from 'react';
import { type LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/atoms';

interface ServiceFeatureCardProps {
    icon?: LucideIcon;
    title: string;
    description: string;
    features: string[];
}

export function ServiceFeatureCard({ icon: Icon, title, description, features }: ServiceFeatureCardProps) {
    return (
        <Card className="h-full group card-khm overflow-hidden bg-orange-50/20 dark:bg-[#182234]">
            <CardContent className="p-6 sm:p-7 flex flex-col h-full">
                <div className="w-14 h-14 mb-5 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-md shadow-orange-500/20 group-hover:scale-110 transition-transform">
                    {Icon && <Icon className="w-7 h-7 text-white" />}
                </div>
                <h3 className="heading-card mb-2.5">{title}</h3>
                <p className="text-body mb-5">
                    {description}
                </p>
                <ul className="space-y-2 mt-auto pt-4 border-t border-slate-200/70 dark:border-slate-700/80">
                    {Array.isArray(features) && features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-200">
                            <span className="w-1.5 h-1.5 bg-orange-600 dark:bg-orange-400 rounded-full shrink-0" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}
