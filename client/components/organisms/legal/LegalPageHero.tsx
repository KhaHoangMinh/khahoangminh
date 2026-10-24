import { type LucideIcon } from 'lucide-react';
import Image from 'next/image';

interface LegalPageHeroProps {
    badgeText?: string;
    badgeIcon?: LucideIcon;
    title1: string;
    title2?: string;
    description?: string;
    backgroundImage?: string;
    gradientClass?: string;
}

export function LegalPageHero({
    badgeText,
    badgeIcon: BadgeIcon,
    title1,
    title2,
    description,
    backgroundImage,
}: LegalPageHeroProps) {
    return (
        <section className="section-hero-compact relative overflow-hidden bg-orange-50/70 dark:bg-[#0B0F17] text-slate-900 dark:text-slate-50 border-b border-orange-200/70 dark:border-slate-800/90 transition-colors">
            {backgroundImage && (
                <Image 
                    src={backgroundImage} 
                    alt={title1 || "Background"} 
                    priority
                    fill
                    sizes="100vw"
                    className="absolute inset-0 w-full h-full object-cover opacity-10 dark:opacity-22"
                />
            )}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/95 via-white/90 to-amber-50/90 dark:from-[#0B0F17]/95 dark:via-[#111827]/88 dark:to-[#182234]/82" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/15 dark:from-orange-500/24 via-transparent to-transparent pointer-events-none" />

            <div className="container-khm relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-8">
                    <div className="max-w-2xl">
                        {badgeText && (
                            <div className="badge-khm mb-3">
                                {BadgeIcon && <BadgeIcon className="w-3.5 h-3.5" />}
                                <span>{badgeText}</span>
                            </div>
                        )}
                        <h1 className="heading-hero text-slate-900 dark:text-slate-50">
                            {title1}{' '}
                            {title2 && (
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 dark:from-orange-400 dark:via-amber-300 dark:to-orange-400">
                                    {title2}
                                </span>
                            )}
                        </h1>
                    </div>
                    {description && (
                        <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 max-w-xl leading-relaxed lg:pb-1 border-l-2 border-orange-500/60 dark:border-orange-400/70 pl-4">
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}
