import React from 'react';
import { type LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/atoms';

interface PrincipleCardProps {
    icon?: LucideIcon;
    title: string;
    desc: string;
}

export function PrincipleCard({ icon: Icon, title, desc }: PrincipleCardProps) {
    return (
        <Card className="card-khm backdrop-blur-md">
            <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-orange-500/15 dark:bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-600 dark:text-orange-300 shadow-xs">
                    {Icon && <Icon className="w-6 h-6" />}
                </div>
                <h3 className="font-bold text-slate-900 dark:text-slate-50 mb-2">{title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-200">{desc}</p>
            </CardContent>
        </Card>
    );
}
