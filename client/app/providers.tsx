"use client";

import React from "react";
import { ThemeProvider, LanguageProvider } from "@/services";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider>
            <LanguageProvider>
                {children}
            </LanguageProvider>
        </ThemeProvider>
    );
}