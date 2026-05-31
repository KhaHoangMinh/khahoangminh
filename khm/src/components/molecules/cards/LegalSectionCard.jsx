import React from 'react';
import { Card, CardContent } from '@/components/atoms';

export function LegalSectionCard({ id, sectionNumber, title, children }) {
    return (
        <section id={id} className="scroll-mt-28">
            <Card className="border border-slate-200/50 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow backdrop-blur-md bg-white/80 dark:bg-slate-900/80">
                <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
                        {sectionNumber && <span className="text-orange-600">{sectionNumber}.</span>}
                        {title}
                    </h2>
                    {children}
                </CardContent>
            </Card>
        </section>
    );
}