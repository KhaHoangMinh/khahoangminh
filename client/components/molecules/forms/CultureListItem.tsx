import React from 'react';

export function CultureListItem({ text }: { text: string }) {
    return (
        <li className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
            <span className="w-6 h-6 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                ✓
            </span>
            <span>{text}</span>
        </li>
    );
}