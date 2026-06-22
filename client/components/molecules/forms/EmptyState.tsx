import React from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/atoms';

interface EmptyStateProps {
    title: string;
    description: string;
    clearText: string;
    onClear: () => void;
}

export function EmptyState({ title, description, clearText, onClear }: EmptyStateProps) {
    return (
        <div className="text-center py-20 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800">
            <Search className="h-12 w-12 text-slate-300 dark:text-slate-600 mx-auto mb-4 animate-pulse" />
            <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-300 mb-2">
                {title}
            </h3>
            <p className="text-slate-500 dark:text-slate-400">
                {description}
            </p>
            <Button
                variant="outline"
                className="mt-6 border-orange-200 text-orange-600 hover:bg-orange-50 dark:border-orange-900/50 dark:hover:bg-orange-900/20 transition-colors"
                onClick={onClear}
            >
                {clearText}
            </Button>
        </div>
    );
}