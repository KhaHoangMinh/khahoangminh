import React from 'react';
import { Card, CardContent } from '@/components/atoms';

interface LegalSectionCardProps {
    id: string;
    sectionNumber?: string;
    title: string;
    children: React.ReactNode;
}

export function LegalSectionCard({ id, sectionNumber, title, children }: LegalSectionCardProps) {
    return (
        <section id={id} className="scroll-mt-28">
            <Card className="card-khm rounded-2xl">
                <CardContent className="p-6 sm:p-8">
                    <h2 className="heading-card !text-xl sm:!text-2xl mb-4 flex items-center gap-2">
                        {sectionNumber && <span className="text-orange-600 dark:text-orange-400">{sectionNumber}.</span>}
                        <span>{title}</span>
                    </h2>
                    {children}
                </CardContent>
            </Card>
        </section>
    );
}
