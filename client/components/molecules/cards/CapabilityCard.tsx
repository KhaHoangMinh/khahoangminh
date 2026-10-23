import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/atoms';

interface CapabilityCardProps {
    title: string;
    items: string[];
    colorTheme?: "orange" | "amber" | "blue";
}

export function CapabilityCard({ title, items, colorTheme = "orange" }: CapabilityCardProps) {
    const isPrimary = colorTheme === "orange";
    const borderClass = isPrimary ? "border-l-orange-600 dark:border-l-orange-500" : "border-l-amber-500 dark:border-l-amber-400";
    const textClass = isPrimary ? "text-orange-600 dark:text-orange-400" : "text-amber-500 dark:text-amber-400";

    return (
        <Card className={`h-full card-khm border-l-4 ${borderClass} bg-orange-50/25`}>
            <CardContent className="p-6 sm:p-7">
                <h3 className="heading-card mb-4 pb-3 border-b border-slate-200/70 dark:border-slate-700/80">
                    {title}
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                    {Array.isArray(items) && items.map((item, index) => (
                        <li key={index} className="flex items-start gap-2.5 text-body">
                            <CheckCircle2 className={`w-4 h-4 ${textClass} shrink-0 mt-1`} />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}
