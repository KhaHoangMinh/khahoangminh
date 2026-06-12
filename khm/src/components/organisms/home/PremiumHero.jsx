import React from 'react';
import { ActionButtonGroup } from '@/components/molecules';

export function PremiumHero({ title, subtitle, description, badgeText, backgroundImage }) {
    return (
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950 text-white overflow-hidden">
            {/* Background Image */}
            <img 
                src={backgroundImage} 
                alt="Background" 
                fetchpriority="high"
                className="absolute inset-1 w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-transparent" />
            
            <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-block bg-orange-500/20 border border-orange-500 text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <span className="w-2 h-2 rounded-full bg-orange-500 mr-2 animate-pulse" />
                            {badgeText}
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight whitespace-pre-line">
                        {title}<br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 filter drop-shadow-lg">
                            {subtitle}
                        </span>
                    </h1>
                    <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                        {description}
                    </p>
                    <ActionButtonGroup />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-slate-950 to-transparent"></div>
        </section>
    );
}