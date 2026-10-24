import { CheckCircle2, type LucideIcon } from 'lucide-react';

interface FeatureCardProps {
    icon?: LucideIcon;
    description: string;
}

export function FeatureCard({ icon: Icon = CheckCircle2, description }: FeatureCardProps) {
    return (
        <div className="group h-full flex items-start gap-3.5 p-5 card-khm rounded-xl relative overflow-hidden">
            {/* Metallic Sheen Glide */}
            <div className="sheen-overlay" />
            
            {/* Blueprint Corners on Hover */}
            <div className="blueprint-corner-tl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="blueprint-corner-br opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="w-8 h-8 rounded-lg bg-orange-500/15 dark:bg-orange-500/20 border border-orange-500/25 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform z-10">
                <Icon className="w-5 h-5 text-orange-600 dark:text-orange-300" />
            </div>
            <p className="text-body font-medium !text-slate-800 dark:!text-slate-100 z-10">{description}</p>
        </div>
    );
}
