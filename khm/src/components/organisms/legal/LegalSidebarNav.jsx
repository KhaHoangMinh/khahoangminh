import React from 'react';
import { LegalSidebarItem } from '@/components/molecules';

export function LegalSidebarNav({ title, titleIcon: TitleIcon, items, activeSection, onScrollTo }) {
    return (
        <div className="lg:w-1/4">
            <div className="sticky top-24 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-xl shadow-lg p-4 border border-slate-200/50 dark:border-slate-700/50 transition-all">
                <h3 className="font-bold text-slate-800 dark:text-white mb-4 px-2 flex items-center gap-2">
                    {TitleIcon && <TitleIcon className="w-5 h-5 text-orange-500" />}
                    {title}
                </h3>
                <nav className="space-y-1">
                    {items.map((item) => (
                        <LegalSidebarItem
                            key={item.id}
                            id={item.id}
                            label={item.label}
                            icon={item.icon}
                            isActive={activeSection === item.id}
                            onClick={onScrollTo}
                        />
                    ))}
                </nav>
            </div>
        </div>
    );
}