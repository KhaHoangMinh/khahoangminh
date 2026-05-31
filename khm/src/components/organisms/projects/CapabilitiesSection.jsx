import React from 'react';
import { CapabilityCard } from '@/components/molecules';

export function CapabilitiesSection({ title, completedTitle, completedList, clientsTitle, clientsList }) {
    return (
        <section className="py-20 bg-white dark:bg-slate-950">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
                            {title}
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <CapabilityCard 
                            title={completedTitle}
                            items={completedList}
                            colorTheme="orange"
                        />
                        <CapabilityCard 
                            title={clientsTitle}
                            items={clientsList}
                            colorTheme="blue"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}