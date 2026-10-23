import React from 'react';
import { CheckCircle2, type LucideIcon } from 'lucide-react';

interface FeatureCardProps {
    icon?: LucideIcon;
    description: string;
}

export function FeatureCard({ icon: Icon = CheckCircle2, description }: FeatureCardProps) {
    return (
        <div className="h-full flex items-start gap-3.5 p-5 card-khm rounded-xl">
            <div className="w-8 h-8 rounded-lg bg-orange-500/15 dark:bg-orange-500/20 flex items-center justify-center shrink-0 mt-0.5">
                <Icon className="w-5 h-5 text-orange-600 dark:text-orange-300" />
            </div>
            <p className="text-body font-medium !text-slate-800 dark:!text-slate-100">{description}</p>
        </div>
    );
}
