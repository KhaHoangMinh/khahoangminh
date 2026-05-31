import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { Card, CardContent, Button } from '@/components/atoms';
import { createPageUrl } from '@/utils';

export function ContactBannerSection({ title, subtitle, buttonText }) {
    return (
        <section className="py-16 bg-slate-50 dark:bg-slate-900">
            <div className="container mx-auto px-4">
                <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950 text-white overflow-hidden relative">
                    <CardContent className="p-8 md:p-12 relative z-10">
                        <div className="text-center max-w-3xl mx-auto">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                {title}
                            </h3>
                            <p className="text-blue-100 mb-8">
                                {subtitle}
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <Link to={createPageUrl('contact')}>
                                    <Button size="lg" variant="outline" className="border-white text-black dark:text-white hover:bg-white dark:hover:text-black hover:text-blue-900 transition-all hover:scale-105">
                                        <Phone className="mr-2 w-5 h-5" />
                                        {buttonText}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}