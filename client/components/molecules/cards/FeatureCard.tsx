import React from 'react';
import { CheckCircle2, type LucideIcon } from 'lucide-react';

interface FeatureCardProps {
    icon?: LucideIcon;
    description: string;
}

export function FeatureCard({ icon: Icon, description }: FeatureCardProps) {
    return (
        <div className="flex items-start gap-3 p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <CheckCircle2 className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
            <p className="text-slate-700 dark:text-slate-300">{description}</p>
        </div>
    );
}