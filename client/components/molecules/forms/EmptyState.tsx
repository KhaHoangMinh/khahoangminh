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
        <div className="text-center py-20 bg-slate-50 dark:bg-[#111827]/70 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700/80">
            <Search className="h-12 w-12 text-orange-500/80 mx-auto mb-4 animate-pulse" />
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2">
                {title}
            </h3>
            <p className="text-slate-600 dark:text-slate-200 text-sm max-w-md mx-auto">
                {description}
            </p>
            <Button
                variant="outline"
                className="mt-6 border-orange-300 dark:border-orange-500/40 text-orange-600 dark:text-orange-300 hover:bg-orange-50 dark:hover:bg-orange-500/15 transition-colors font-medium rounded-xl"
                onClick={onClear}
            >
                {clearText}
            </Button>
        </div>
    );
}