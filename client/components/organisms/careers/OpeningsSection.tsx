import React from 'react';
import Link from 'next/link';
import { Users, Mail, ArrowRight } from 'lucide-react';
import { Card, CardContent, Button } from '@/components/atoms';
import { createPageUrl } from '@/lib';

interface OpeningsSectionProps {
    title: string;
    emptyTitle: string;
    emptyDesc: string;
    sendCvText: string;
    contactText: string;
}

export function OpeningsSection({ title, emptyTitle, emptyDesc, sendCvText, contactText }: OpeningsSectionProps) {
    return (
        <section className="py-20 bg-slate-50 dark:bg-slate-900">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
                            {title}
                        </h2>
                    </div>

                    <Card className="border-0 shadow-2xl bg-white dark:bg-slate-950">
                        <CardContent className="p-12 text-center">
                            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                                <Users className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">
                                {emptyTitle}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                                {emptyDesc}
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <a href="mailto:info@khahoangminh.com.vn">
                                    <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white shadow-lg transition-transform hover:scale-105">
                                        <Mail className="mr-2 w-5 h-5" />
                                        {sendCvText}
                                    </Button>
                                </a>
                                <Link href={createPageUrl('contact')}>
                                    <Button size="lg" variant="outline" className="border-slate-300 dark:border-slate-700 transition-transform hover:scale-105">
                                        {contactText}
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}