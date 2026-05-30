import React from 'react';
import { Card, CardContent } from '@/components/atoms';

export function ProcessStepCard({ step, title, description }) {
    return (
        <Card className="border-0 shadow-lg text-center group hover:shadow-xl transition-shadow bg-white dark:bg-slate-900">
            <CardContent className="p-6">
                <div className="text-5xl font-bold text-orange-600 mb-4 group-hover:scale-110 transition-transform">
                    {step}
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-800 dark:text-white">{title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{description}</p>
            </CardContent>
        </Card>
    );
}