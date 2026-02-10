import React from 'react';
import { ThemeProvider } from '@/services/ThemeProvider.jsx';
import { LanguageProvider } from '@/services/LanguageProvider.jsx';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function LayoutContent({ children, currentPageName }) {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors flex flex-col">
            <style>{`
        :root {
          --radius: 0.5rem;
        }
      `}</style>

            {/* Header */}
            <Header currentPageName={currentPageName} />

            {/* Main Content */}
            <main className="flex-grow pt-8 pb-16">
                {children}
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default function Layout({ children, currentPageName }) {
    return (
        <ThemeProvider>
            <LanguageProvider>
                <LayoutContent currentPageName={currentPageName}>
                    {children}
                </LayoutContent>
            </LanguageProvider>
        </ThemeProvider>
    );
}