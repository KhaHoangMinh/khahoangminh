import React from 'react';
import { Card, CardContent } from '@/components/atoms';

interface ScopeCardProps {
    title: string;
    items: string[];
    colorTheme?: "orange" | "amber" | "blue";
}

export function ScopeCard({ title, items, colorTheme = "orange" }: ScopeCardProps) {
    const isPrimary = colorTheme === "orange";
    const borderClass = isPrimary ? "border-l-orange-600 dark:border-l-orange-500" : "border-l-amber-500 dark:border-l-amber-400";
    const bulletClass = isPrimary ? "bg-orange-600 dark:bg-orange-500" : "bg-amber-500 dark:bg-amber-400";

    return (
        <Card className={`h-full card-khm border-l-4 ${borderClass} bg-orange-50/25`}>
            <CardContent className="p-6 sm:p-7">
                <h3 className="heading-card mb-4 pb-3 border-b border-slate-200/70 dark:border-slate-700/80">{title}</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 text-body">
                    {Array.isArray(items) && items.map((item, index) => (
                        <li key={index} className="flex items-start gap-2.5">
                            <span className={`w-2 h-2 ${bulletClass} rounded-full mt-2 shrink-0`} />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}
