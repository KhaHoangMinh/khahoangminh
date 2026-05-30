import React from 'react';
import { Card, CardContent } from '@/components/atoms';

export function ServiceFeatureCard({ icon: Icon, title, description, features }) {
    return (
        <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white dark:bg-slate-900">
            <CardContent className="p-8">
                <div className="w-16 h-16 mb-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    {Icon && <Icon className="w-8 h-8 text-white" />}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white">{title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    {description}
                </p>
                <ul className="space-y-2">
                    {Array.isArray(features) && features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                            <span className="w-1.5 h-1.5 bg-orange-600 rounded-full flex-shrink-0"></span>
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}