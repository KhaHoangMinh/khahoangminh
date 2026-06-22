import React from 'react';
import { Card, CardContent } from '@/components/atoms';

interface ScopeCardProps {
    title: string;
    items: string[];
    colorTheme?: "orange" | "blue";
}

export function ScopeCard({ title, items, colorTheme = "orange" }: ScopeCardProps) {
    const isOrange = colorTheme === "orange";
    const borderClass = isOrange ? "border-orange-600" : "border-blue-600";
    const bulletClass = isOrange ? "bg-orange-600" : "bg-blue-600";

    return (
        <Card className={`border-l-4 ${borderClass} shadow-lg bg-white dark:bg-slate-900 border-t-0 border-r-0 border-b-0 rounded-l-none`}>
            <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white">{title}</h3>
                <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                    {Array.isArray(items) && items.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                            <span className={`w-2 h-2 ${bulletClass} rounded-full mt-2 flex-shrink-0`}></span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}