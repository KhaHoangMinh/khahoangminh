import React from 'react';
import { Link } from 'react-router-dom';

export function ActionRedirectCard({ label, title, subtitle, icon: Icon, link, isExternal, colorTheme }) {
    const isOrange = colorTheme === "orange";
    const wrapperClasses = isOrange 
        ? "from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/10 border-orange-200 dark:border-orange-900/50 hover:border-orange-400"
        : "from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/10 border-blue-200 dark:border-blue-900/50 hover:border-blue-400";
    
    const pulseClasses = isOrange ? "bg-orange-400" : "bg-blue-400";
    const iconBgClasses = isOrange ? "from-orange-500 to-orange-600" : "from-blue-500 to-blue-600";
    const labelClasses = isOrange ? "text-orange-600 dark:text-orange-400" : "text-blue-600 dark:text-blue-400";
    const hoverTextClasses = isOrange ? "group-hover:text-orange-600" : "group-hover:text-blue-600";

    const content = (
        <div className="flex items-center gap-5 relative z-10">
            <div className="relative w-14 h-14 flex items-center justify-center">
                <div className={`absolute inset-0 rounded-full opacity-20 blur-sm animate-pulse ${pulseClasses}`}></div>
                <div className={`relative w-full h-full rounded-full bg-gradient-to-tr flex items-center justify-center shadow-lg ${iconBgClasses}`}>
                    {Icon && <Icon className="w-6 h-6 text-white" />}
                </div>
            </div>
            <div>
                <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${labelClasses}`}>
                    {label}
                </div>
                <div className={`font-bold text-slate-800 dark:text-white text-xl transition-colors ${hoverTextClasses}`}>
                    {title}
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                    {subtitle}
                </div>
            </div>
        </div>
    );

    const cardClasses = `group relative overflow-hidden rounded-xl bg-gradient-to-r p-5 border transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md ${wrapperClasses}`;

    if (isExternal) {
        return (
            <a href={link} target="_blank" rel="noopener noreferrer" className={cardClasses}>
                {content}
            </a>
        );
    }

    return (
        <Link to={link} className={cardClasses}>
            {content}
        </Link>
    );
}