import React, { useState, useRef } from 'react';
import { ProcessStepCard } from '@/components/molecules';

export function ProcessSection({ title, subtitle, steps }) {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const sectionRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    // The SVG Chevron Pattern (Data URI)
    const chevronPattern = `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20 L40 40 L20 60' stroke='black' stroke-width='4' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M45 20 L65 40 L45 60' stroke='black' stroke-width='4' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`;

    return (
        <section 
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            className="relative py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden group"
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
                className="absolute inset-0 z-0 bg-slate-300 dark:bg-slate-800 opacity-60 dark:opacity-40 pointer-events-none animate-slide-chevrons"
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

            <div className="absolute inset-0 pointer-events-none z-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50 dark:from-slate-950 dark:via-transparent dark:to-slate-950" />
            <div className="absolute inset-0 pointer-events-none z-0 bg-gradient-to-r from-slate-50 via-transparent to-slate-50 dark:from-slate-950 dark:via-transparent dark:to-slate-950 opacity-80" />
           
            <div className="relative z-10 container mx-auto px-4">
                <div className="text-center mb-16 relative">
                    <h2 className="text-3xl md:text-5xl font-black mb-5 text-slate-900 dark:text-white tracking-tight drop-shadow-sm">
                        {title}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg font-medium">
                        {subtitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
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