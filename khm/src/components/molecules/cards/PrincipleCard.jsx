import React from 'react';
import { Card, CardContent } from '@/components/atoms';

export function PrincipleCard({ icon: Icon, title, desc }) {
    return (
        <Card className="bg-white/70 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200/50 dark:border-white/10 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-600 shadow-sm">
                    {Icon && <Icon className="w-6 h-6" />}
                </div>
                <h3 className="font-bold text-slate-800 dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{desc}</p>
            </CardContent>
        </Card>
    );
}