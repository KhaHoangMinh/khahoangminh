import React from 'react';
import { type LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/atoms';

interface BenefitCardProps {
    icon?: LucideIcon;
    title: string;
    description: string;
}

export function BenefitCard({ icon: Icon, title, description }: BenefitCardProps) {
    return (
        <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group bg-white dark:bg-slate-900">
            <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    {Icon && <Icon className="w-8 h-8 text-white" />}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white">{title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{description}</p>
            </CardContent>
        </Card>
    );
}