import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';
import { Card, CardContent, Button } from '@/components/atoms';
import { createPageUrl } from '@/lib';

interface ContactBannerSectionProps {
    title: string;
    subtitle: string;
    buttonText: string;
}

export function ContactBannerSection({ title, subtitle, buttonText }: ContactBannerSectionProps) {
    return (
        <section className="py-8 sm:py-10 surface-band-alt border-t border-orange-100/80 dark:border-slate-800/90">
            <div className="container-khm">
                <Card className="border border-orange-500/30 dark:border-orange-500/40 shadow-xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 dark:from-[#26130A] dark:via-[#161F30] dark:to-[#0F172A] text-white overflow-hidden relative rounded-2xl">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/15 dark:from-orange-500/28 via-transparent to-transparent pointer-events-none" />
                    <CardContent className="p-6 sm:p-8 lg:p-10 relative z-10">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 text-center lg:text-left">
                            <div className="max-w-2xl">
                                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
                                    {title}
                                </h2>
                                <p className="text-sm sm:text-base text-orange-50 dark:text-slate-200 leading-relaxed">
                                    {subtitle}
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3.5 justify-center lg:justify-end shrink-0">
                                <Link href={createPageUrl('contact')}>
                                    <Button
                                        size="lg"
                                        className="h-12 bg-white text-orange-600 hover:bg-orange-50 dark:bg-gradient-to-r dark:from-orange-600 dark:to-amber-500 dark:hover:from-orange-500 dark:hover:to-amber-400 dark:text-white font-bold px-7 rounded-xl shadow-lg shadow-black/15 dark:shadow-orange-600/30 transition-all hover:-translate-y-0.5"
                                    >
                                        {buttonText}
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </Link>
                                <a href="tel:+84976888999">
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="h-12 border-white/40 bg-white/10 text-white hover:bg-white/20 dark:border-slate-600 dark:bg-[#182234]/90 dark:hover:border-orange-400 px-6 rounded-xl font-semibold backdrop-blur-sm transition-all hover:-translate-y-0.5"
                                    >
                                        <Phone className="mr-2 w-4 h-4" />
                                        0976.888.999
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
