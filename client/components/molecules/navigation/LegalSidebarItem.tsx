import React from 'react';
import { ChevronRight, type LucideIcon } from 'lucide-react';

interface LegalSidebarItemProps {
    id: string;
    label: string;
    icon?: LucideIcon;
    isActive: boolean;
    onClick: (id: string) => void;
}

export function LegalSidebarItem({ id, label, icon: Icon, isActive, onClick }: LegalSidebarItemProps) {
    return (
        <button
            onClick={() => onClick(id)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-all ${
                isActive
                    ? 'bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400 border-l-4 border-orange-500'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 border-l-4 border-transparent'
            }`}
        >
            {Icon && <Icon className="w-4 h-4" />}
            <span className="text-left flex-grow">{label}</span>
            {isActive && <ChevronRight className="w-4 h-4 ml-auto" />}
        </button>
    );
}