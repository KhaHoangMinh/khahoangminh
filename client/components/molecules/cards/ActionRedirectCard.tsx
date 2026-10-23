import React from 'react';
import Link from 'next/link';

interface ActionRedirectCardProps {
    label: string;
    title: string;
    subtitle: string;
    icon?: React.ElementType;
    link: string;
    isExternal?: boolean;
    colorTheme?: "orange" | "amber" | "blue";
}

export function ActionRedirectCard({ label, title, subtitle, icon: Icon, link, isExternal, colorTheme = "orange" }: ActionRedirectCardProps) {
    const isOrange = colorTheme === "orange";
    const wrapperClasses = isOrange 
        ? "from-orange-50/90 to-amber-50/50 dark:from-[#26160C] dark:to-[#182234] border-orange-200/80 dark:border-orange-500/40 hover:border-orange-500 dark:hover:border-orange-400"
        : "from-slate-50 to-orange-50/40 dark:from-[#1E293B] dark:to-[#182234] border-slate-200/80 dark:border-slate-700 hover:border-amber-500 dark:hover:border-amber-400";
    
    const pulseClasses = isOrange ? "bg-orange-400" : "bg-amber-400";
    const iconBgClasses = isOrange ? "from-orange-500 to-orange-600" : "from-amber-500 to-orange-500";
    const labelClasses = isOrange ? "text-orange-600 dark:text-orange-300" : "text-amber-600 dark:text-amber-300";
    const hoverTextClasses = isOrange ? "group-hover:text-orange-600 dark:group-hover:text-orange-300" : "group-hover:text-amber-600 dark:group-hover:text-amber-300";

    const content = (
        <div className="flex items-center gap-4 relative z-10">
            <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
                <div className={`absolute inset-0 rounded-full opacity-20 blur-sm animate-pulse ${pulseClasses}`} />
                <div className={`relative w-full h-full rounded-xl bg-gradient-to-tr flex items-center justify-center shadow-md ${iconBgClasses}`}>
                    {Icon && <Icon className="w-5 h-5 text-white" />}
                </div>
            </div>
            <div>
                <div className={`text-[11px] font-bold uppercase tracking-wider mb-0.5 ${labelClasses}`}>
                    {label}
                </div>
                <div className={`font-bold text-slate-900 dark:text-slate-50 text-base sm:text-lg leading-tight transition-colors ${hoverTextClasses}`}>
                    {title}
                </div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-200 font-medium mt-0.5">
                    {subtitle}
                </div>
            </div>
        </div>
    );

    const cardClasses = `group relative overflow-hidden rounded-xl bg-gradient-to-r p-4 border transition-all duration-200 hover:-translate-y-0.5 shadow-xs hover:shadow-md ${wrapperClasses}`;

    if (isExternal) {
        return (
            <a href={link} target="_blank" rel="noopener noreferrer" className={cardClasses}>
                {content}
            </a>
        );
    }

    return (
        <Link href={link} className={cardClasses}>
            {content}
        </Link>
    );
}
