import React from 'react';
import { Card, CardContent } from '@/components/atoms';

interface ComingSoonCardProps {
    text: string;
    linkText: string;
}

export function ComingSoonCard({ text, linkText }: ComingSoonCardProps) {
    return (
        <Card className="mt-12 border border-slate-200/50 dark:border-white/10 shadow-lg backdrop-blur-md bg-white/70 dark:bg-slate-900/50 transition-all duration-300">
            <CardContent className="p-8 text-center">
                <p className="text-slate-600 dark:text-slate-400 text-lg">
                    {text}
                    <a 
                        href="https://www.facebook.com/inoxkhahoangminh" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-600 dark:text-blue-500 font-semibold ml-1 hover:underline hover:text-orange-600 dark:hover:text-orange-500 transition-colors"
                    >
                        {linkText}
                    </a>
                </p>
            </CardContent>
        </Card>
    );
}