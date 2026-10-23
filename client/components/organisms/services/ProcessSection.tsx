"use client";

import React, { useState, useRef } from 'react';
import { ProcessStepCard } from '@/components/molecules';

interface ProcessStep {
    step: string | number;
    title: string;
    desc: string;
}

interface ProcessSectionProps {
    title: string;
    subtitle: string;
    steps: ProcessStep[];
}

export function ProcessSection({ title, subtitle, steps }: ProcessSectionProps) {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const sectionRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const chevronPattern = `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20 L40 40 L20 60' stroke='black' stroke-width='4' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M45 20 L65 40 L45 60' stroke='black' stroke-width='4' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`;

    return (
        <section 
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            className="section-frame-half relative bg-white dark:bg-[#0B0F17] overflow-hidden group"
        >
            <style>{`
                @keyframes slide-chevrons {
                    0% { -webkit-mask-position: 0 0; mask-position: 0 0; }
                    100% { -webkit-mask-position: 80px 0; mask-position: 80px 0; }
                }
                .animate-slide-chevrons {
                    animation: slide-chevrons 3s linear infinite;
                }
            `}</style>

            <div 
                className="absolute inset-0 z-0 bg-slate-200 dark:bg-slate-800/70 opacity-50 dark:opacity-35 pointer-events-none animate-slide-chevrons"
                style={{
                    maskImage: chevronPattern,
                    WebkitMaskImage: chevronPattern,
                    maskSize: '80px 80px',
                    WebkitMaskSize: '80px 80px',
                }}
            />
            
            <div 
                className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    maskImage: `radial-gradient(circle 350px at ${mousePos.x}px ${mousePos.y}px, black 10%, transparent 80%)`,
                    WebkitMaskImage: `radial-gradient(circle 350px at ${mousePos.x}px ${mousePos.y}px, black 10%, transparent 80%)`
                }}
            >
                <div 
                    className="absolute inset-0 bg-orange-500 animate-slide-chevrons"
                    style={{
                        maskImage: chevronPattern,
                        WebkitMaskImage: chevronPattern,
                        maskSize: '80px 80px',
                        WebkitMaskSize: '80px 80px',
                    }}
                />
            </div>

            <div className="absolute inset-0 pointer-events-none z-0 bg-gradient-to-b from-white via-transparent to-white dark:from-[#0B0F17] dark:via-transparent dark:to-[#0B0F17]" />
            <div className="absolute inset-0 pointer-events-none z-0 bg-gradient-to-r from-white via-transparent to-white dark:from-[#0B0F17] dark:via-transparent dark:to-[#0B0F17] opacity-80" />
           
            <div className="relative z-10 container-khm">
                <div className="text-center mb-6 sm:mb-8 relative">
                    <div className="w-12 h-1 bg-gradient-to-r from-orange-600 to-amber-500 rounded-full mx-auto mb-2.5" />
                    <h2 className="heading-section mb-2">
                        {title}
                    </h2>
                    <p className="text-lead max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 relative">
                    {Array.isArray(steps) && steps.map((item, index) => (
                        <ProcessStepCard 
                            key={index}
                            step={item.step}
                            title={item.title}
                            description={item.desc}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
