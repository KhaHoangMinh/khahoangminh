import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/services/ThemeProvider.jsx';
import { Button } from '@/components/atoms';

export default function ThemeToggle() {
    const { toggleTheme } = useTheme();

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="relative w-10 h-10 rounded-xl backdrop-blur-md bg-white/50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-white/10 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105 hover:shadow-lg transition-all duration-300 overflow-hidden"
        >
            <Moon className="absolute h-5 w-5 transition-all dark:scale-0 scale-100 dark:rotate-90 rotate-0 text-slate-700" />
            <Sun className="absolute h-5 w-5 transition-all dark:scale-100 scale-0 dark:rotate-0 -rotate-90 text-orange-400" />
        </Button>
    );
}