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
        <Card className="h-full group card-khm overflow-hidden bg-orange-50/20 dark:bg-[#182234] relative">
            {/* Metallic Sheen Glide */}
            <div className="sheen-overlay" />

            {/* Blueprint Corner Accents on Hover */}
            <div className="blueprint-corner-tl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="blueprint-corner-br opacity-0 group-hover:opacity-100 transition-opacity" />

            <CardContent className="p-6 sm:p-7 flex flex-col h-full relative z-10">
                <div className="w-14 h-14 mb-5 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform border border-orange-400/30">
                    {Icon && <Icon className="w-7 h-7 text-white" />}
                </div>
                <h3 className="heading-card mb-2.5 group-hover:text-orange-600 dark:group-hover:text-orange-300 transition-colors">{title}</h3>
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
