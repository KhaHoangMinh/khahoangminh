
export function CultureListItem({ text }: { text: string }) {
    return (
        <li className="flex items-start gap-3 text-slate-700 dark:text-slate-200">
            <span className="w-6 h-6 bg-orange-500/15 dark:bg-orange-500/20 text-orange-600 dark:text-orange-300 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                ✓
            </span>
            <span>{text}</span>
        </li>
    );
}
