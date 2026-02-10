import React from 'react';
import { useLanguage } from './LanguageProvider.jsx';
import { Button } from 'ui/button.jsx';

export default function LanguageToggle() {
    const { language, toggleLanguage } = useLanguage();

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="font-semibold hover:bg-primary/10 transition-all"
        >
            {language === 'vi' ? '🇬🇧 EN' : '🇻🇳 VI'}
        </Button>
    );
}