import React from 'react';
import { Card, CardContent } from '@/components/atoms';

export function ContactInfoCard({ icon: Icon, title, content, bgClass, iconColorClass }) {
    return (
        <Card className="border border-slate-200/50 dark:border-white/10 shadow-lg hover:shadow-xl transition-shadow backdrop-blur-md bg-white/70 dark:bg-slate-900/50">
            <CardContent className="p-4 flex items-start gap-4">
                <div className={`w-12 h-12 ${bgClass} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md`}>
                    {Icon && <Icon className={`w-6 h-6 ${iconColorClass}`} />}
                </div>
                <div>
                    <h3 className="font-bold text-slate-800 dark:text-white text-sm">{title}</h3>
                    <div className="text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                        {content}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}