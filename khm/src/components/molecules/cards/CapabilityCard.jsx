import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/atoms';

export function CapabilityCard({ title, items, colorTheme = "orange" }) {
    const isOrange = colorTheme === "orange";
    const borderClass = isOrange ? "border-orange-600" : "border-blue-600";
    const textClass = isOrange ? "text-orange-600" : "text-blue-600";

    return (
        <Card className={`border-l-4 ${borderClass} shadow-lg bg-white dark:bg-slate-900`}>
            <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">
                    {title}
                </h3>
                <ul className="space-y-4">
                    {Array.isArray(items) && items.map((item, index) => (
                        <li key={index} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                            <CheckCircle2 className={`w-6 h-6 ${textClass} flex-shrink-0 mt-0.5`} />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}