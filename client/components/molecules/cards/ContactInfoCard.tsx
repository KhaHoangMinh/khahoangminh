import React from 'react';
import { type LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/atoms';

interface ContactInfoCardProps {
    icon?: LucideIcon;
    title: string;
    content: React.ReactNode;
    bgClass: string;
    iconColorClass: string;
}

export function ContactInfoCard({ icon: Icon, title, content, bgClass, iconColorClass }: ContactInfoCardProps) {
    return (
        <Card className="card-khm rounded-xl">
            <CardContent className="p-4 flex items-start gap-4">
                <div className={`w-11 h-11 ${bgClass} rounded-xl flex items-center justify-center shrink-0 shadow-sm`}>
                    {Icon && <Icon className={`w-5 h-5 ${iconColorClass}`} />}
                </div>
                <div>
                    <h3 className="font-bold text-slate-900 dark:text-slate-50 text-sm">{title}</h3>
                    <div className="text-sm text-slate-600 dark:text-slate-200 mt-0.5 leading-relaxed">
                        {content}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
