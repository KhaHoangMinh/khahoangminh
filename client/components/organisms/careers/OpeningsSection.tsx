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
        <section className="section-frame-half surface-band-alt">
            <div className="container-khm">
                <div className="text-center mb-6 sm:mb-8">
                    <div className="w-12 h-1 bg-gradient-to-r from-orange-600 to-amber-500 rounded-full mx-auto mb-2.5" />
                    <h2 className="heading-section">
                        {title}
                    </h2>
                </div>

                <Card className="card-khm rounded-2xl">
                    <CardContent className="p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
                        <div className="flex flex-col sm:flex-row items-center sm:items-start lg:items-center gap-5 max-w-2xl">
                            <div className="w-16 h-16 shrink-0 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-md shadow-orange-500/25">
                                <Users className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-center sm:text-left">
                                <h3 className="heading-card !text-xl sm:!text-2xl mb-1.5">
                                    {emptyTitle}
                                </h3>
                                <p className="text-body">
                                    {emptyDesc}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row flex-wrap gap-3.5 justify-center lg:justify-end shrink-0 w-full sm:w-auto">
                            <a href="mailto:info@khahoangminh.com.vn" className="w-full sm:w-auto">
                                <Button
                                    size="lg"
                                    className="w-full sm:w-auto h-12 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-orange-600 text-white font-semibold px-6 rounded-xl shadow-md shadow-orange-600/20 transition-all hover:-translate-y-0.5"
                                >
                                    <Mail className="mr-2 w-5 h-5" />
                                    {sendCvText}
                                </Button>
                            </a>
                            <Link href={createPageUrl('contact')} className="w-full sm:w-auto">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="w-full sm:w-auto h-12 rounded-xl border-slate-300 dark:border-slate-600 hover:border-orange-500 hover:text-orange-600 dark:hover:text-orange-400 font-semibold px-6 transition-all hover:-translate-y-0.5"
                                >
                                    {contactText}
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
