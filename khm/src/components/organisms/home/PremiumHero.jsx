import React from 'react';
import { ActionButtonGroup } from '@/components/molecules';

export function PremiumHero({ title, subtitle, description, badgeText, backgroundImage }) {
    return (
        <section className="relative overflow-hidden bg-slate-950 text-white min-h-[80vh] flex items-center">
            {/* Background Image */}
            <img 
                src={backgroundImage} 
                alt="Background" 
                fetchpriority="high"
                className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950" />
            
            <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
                <div className="max-w-3xl transform transition-all duration-700 translate-y-0 opacity-100">
                    {badgeText && (
                        <div className="inline-flex items-center backdrop-blur-md bg-orange-500/10 border border-orange-500/30 text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
                            <span className="w-2 h-2 rounded-full bg-orange-500 mr-2 animate-pulse" />
                            {badgeText}
                        </div>
                    )}
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight whitespace-pre-line">
                        {title}<br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 filter drop-shadow-lg">
                            {subtitle}
                        </span>
                    </h1>
                    <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl backdrop-blur-sm">
                        {description}
                    </p>
                    <ActionButtonGroup />
                </div>
            </div>
        </section>
    );
}