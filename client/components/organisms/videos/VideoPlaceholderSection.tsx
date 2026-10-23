import React from 'react';
import { Play } from 'lucide-react';
import { Card, CardContent } from '@/components/atoms';
import { SocialContactButtonGroup } from '@/components/molecules';

interface VideoPlaceholderSectionProps {
    title: string;
    description: string;
    facebookText: string;
    contactText: string;
}

export function VideoPlaceholderSection({
    title,
    description,
    facebookText,
    contactText,
}: VideoPlaceholderSectionProps) {
    return (
        <section className="section-frame-half surface-canvas">
            <div className="container-khm">
                <Card className="border border-orange-200/80 dark:border-slate-700/80 shadow-lg bg-gradient-to-br from-orange-50/60 via-white to-amber-50/40 dark:from-[#182234] dark:via-[#141D2D] dark:to-[#111827] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] rounded-2xl overflow-hidden transition-all duration-300">
                    <CardContent className="p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
                        <div className="flex flex-col sm:flex-row items-center sm:items-start lg:items-center gap-5 max-w-2xl">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/25">
                                <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1" />
                            </div>
                            <div className="text-center sm:text-left">
                                <h2 className="heading-section !text-xl sm:!text-2xl mb-2">
                                    {title}
                                </h2>
                                <p className="text-body">
                                    {description}
                                </p>
                            </div>
                        </div>
                        
                        <div className="shrink-0 w-full sm:w-auto">
                            <SocialContactButtonGroup 
                                facebookText={facebookText}
                                contactText={contactText}
                            />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
