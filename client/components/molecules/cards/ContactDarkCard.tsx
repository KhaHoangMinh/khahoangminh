import Link from 'next/link';
import { Mail, type LucideIcon } from 'lucide-react';
import { Card, CardContent, Button } from '@/components/atoms';
import { createPageUrl } from '@/lib';

interface ContactDarkCardProps {
    title: string;
    desc: string;
    buttonText: string;
    icon?: LucideIcon;
}

export function ContactDarkCard({ title, desc, buttonText, icon: Icon = Mail }: ContactDarkCardProps) {
    return (
        <Card className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 dark:from-[#26130A] dark:via-[#161F30] dark:to-[#0F172A] text-white border border-orange-500/30 dark:border-orange-500/40 shadow-lg rounded-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/15 dark:from-orange-500/28 via-transparent to-transparent pointer-events-none" />
            <CardContent className="p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
                <div>
                    <h3 className="heading-card !text-white mb-1.5">{title}</h3>
                    <p className="text-orange-50 dark:text-slate-200 text-sm sm:text-base">{desc}</p>
                </div>
                <Link href={createPageUrl('contact')} className="shrink-0">
                    <Button
                        size="lg"
                        className="h-11 bg-white text-orange-600 hover:bg-orange-50 dark:bg-gradient-to-r dark:from-orange-600 dark:to-amber-500 dark:hover:from-orange-500 dark:hover:to-amber-400 dark:text-white font-bold rounded-xl shadow-md shadow-black/15 dark:shadow-orange-600/25 transition-all hover:-translate-y-0.5"
                    >
                        <Icon className="mr-2 w-4 h-4" />
                        {buttonText}
                    </Button>
                </Link>
            </CardContent>
        </Card>
    );
}
