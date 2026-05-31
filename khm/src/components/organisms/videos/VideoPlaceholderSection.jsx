import React from 'react';
import { Play } from 'lucide-react';
import { Card, CardContent } from '@/components/atoms';
import { SocialContactButtonGroup } from '@/components/molecules';

export function VideoPlaceholderSection({ title, description, facebookText, contactText }) {
    return (
        <section className="py-20 bg-white dark:bg-slate-950">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <Card className="border border-slate-200/50 dark:border-white/10 shadow-2xl backdrop-blur-md bg-white/80 dark:bg-slate-900/80 overflow-hidden transition-all duration-300 hover:shadow-orange-500/5">
                        <CardContent className="p-12 text-center">
                            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                                {/* Added ml-2 to optically center the play icon */}
                                <Play className="w-12 h-12 text-white ml-2" />
                            </div>
                            
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-800 dark:text-white">
                                {title}
                            </h2>
                            
                            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                                {description}
                            </p>
                            
                            <SocialContactButtonGroup 
                                facebookText={facebookText}
                                contactText={contactText}
                            />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}