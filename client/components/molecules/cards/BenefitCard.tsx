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
        <Card className="h-full card-khm group bg-orange-50/20">
            <CardContent className="p-6 text-center flex flex-col items-center h-full">
                <div className="w-14 h-14 mb-4 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-md shadow-orange-500/20 group-hover:scale-110 transition-transform">
                    {Icon && <Icon className="w-7 h-7 text-white" />}
                </div>
                <h3 className="heading-card mb-2">{title}</h3>
                <p className="text-body">{description}</p>
            </CardContent>
        </Card>
    );
}
