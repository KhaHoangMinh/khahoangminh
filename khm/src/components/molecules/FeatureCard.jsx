import React from 'react';
import { Card, CardContent } from '@/components/atoms';

export function FeatureCard({ icon: Icon, title, description, className = "" }) {
    return (
        <Card className={`border border-slate-200/50 dark:border-white/10 shadow-xl backdrop-blur-md bg-white/70 dark:bg-slate-900/50 hover:shadow-2xl transition-all duration-300 group ${className}`}>
            <CardContent className="p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                        {Icon && <Icon className="w-8 h-8 text-white" />}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white">{title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{description}</p>
                </div>
            </CardContent>
        </Card>
    );
}