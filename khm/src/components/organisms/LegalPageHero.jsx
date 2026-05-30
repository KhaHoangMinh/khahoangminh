import React from 'react';

export function LegalPageHero({ badgeText, badgeIcon: BadgeIcon, title1, title2, description, backgroundImage, gradientClass }) {
    const defaultGradient = "bg-gradient-to-br from-blue-900 to-slate-900 dark:from-blue-950 dark:to-slate-950";
    const appliedGradient = gradientClass || defaultGradient;

    return (
        <section className={`relative overflow-hidden ${appliedGradient} text-white py-16 md:py-20`}>
            {backgroundImage && (
                <img 
                    src={backgroundImage} 
                    alt="Background" 
                    fetchpriority="high"
                    className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay"
                />
            )}
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {badgeText && (
                        <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/50 text-orange-400 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 uppercase tracking-wider backdrop-blur-sm">
                            {BadgeIcon && <BadgeIcon className="w-4 h-4" />}
                            <span>{badgeText}</span>
                        </div>
                    )}
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        {title1} <span className="text-orange-500">{title2}</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </section>
    );
}