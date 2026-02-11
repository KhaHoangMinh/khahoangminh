import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider.jsx';
import { Button } from 'ui/button.jsx';

export default function ThemeToggle() {
    const { toggleTheme } = useTheme();

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="relative w-9 h-9 rounded-lg hover:bg-primary/10 transition-all"
        >
            <Moon className="absolute h-5 w-5 transition-all dark:scale-0 scale-100 dark:rotate-90 rotate-0" />
            <Sun className="absolute h-5 w-5 transition-all dark:scale-100 scale-0 dark:rotate-0 -rotate-90" />
        </Button>
    );
}