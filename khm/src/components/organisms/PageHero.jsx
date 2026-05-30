import React from 'react';

export function PageHero({ title, highlight, description, backgroundImage }) {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-slate-900 dark:from-blue-950 dark:to-slate-950 text-white py-20">
            {/* Background Image */}
            <img 
                src={backgroundImage} 
                alt="Hero Background" 
                fetchpriority="high"
                className="absolute inset-0 w-full h-full object-cover opacity-10"
            />
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        {title} <span className="text-orange-500">{highlight}</span>
                    </h1>
                    <p className="text-xl text-slate-300">
                        {description}
                    </p>
                </div>
            </div>
        </section>
    );
}