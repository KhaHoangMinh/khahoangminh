import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Lora } from "next/font/google";
import { Providers } from "./providers";
import { ContextMenuBlocker } from "@/components/ContextMenuBlocker";
import { ClientLayoutWrapper } from "./ClientLayoutWrapper";
import "./globals.css";

// Optimize Google Fonts
const inter = Inter({ 
    subsets: ["latin"], 
    variable: "--font-inter" 
});

const lora = Lora({ 
    subsets: ["latin"], 
    variable: "--font-lora" 
});

// Replaces <title> and <link rel="icon">
export const metadata: Metadata = {
    title: "Kha Hoang Minh",
    description: "Company website.",
    icons: {
        icon: "/img/logo/logo.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                {/* Leaflet CSS */}
                <link 
                rel="stylesheet" 
                href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" 
                integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" 
                crossOrigin=""
                />
            </head>
            {/* Inject font variables into the body */}
            <body className={`${inter.variable} ${lora.variable} antialiased font-sans`}>
                <Providers>
                    <ContextMenuBlocker />
                    <ClientLayoutWrapper>
                        {children}
                    </ClientLayoutWrapper>
                </Providers>

                {/* Next.js optimized Script component for Leaflet JS */}
                <Script 
                src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
                integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
                crossOrigin=""
                strategy="beforeInteractive" 
                />
            </body>
        </html>
    );
}