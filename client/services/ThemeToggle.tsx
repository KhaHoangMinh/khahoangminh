"use client";

import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/services';
import { Button } from '@/components/atoms';

export default function ThemeToggle() {
    const { toggleTheme } = useTheme();

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="relative w-10 h-10 rounded-xl backdrop-blur-md bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 hover:bg-orange-50 dark:hover:bg-orange-500/10 hover:border-orange-500/30 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-200 overflow-hidden"
        >
            <Moon className="absolute h-4 w-4 transition-all dark:scale-0 scale-100 dark:rotate-90 rotate-0 text-slate-700" />
            <Sun className="absolute h-4 w-4 transition-all dark:scale-100 scale-0 dark:rotate-0 -rotate-90 text-orange-400" />
        </Button>
    );
}
