import type { Metadata, Viewport } from "next";
import { Inter, Lora } from "next/font/google";
import { Providers } from "./providers";
import { ContextMenuBlocker } from "@/components/ContextMenuBlocker";
import { ClientLayoutWrapper } from "./ClientLayoutWrapper";
import "./globals.css";

// Optimize Google Fonts with Vietnamese + Latin support
const inter = Inter({
    subsets: ["latin", "vietnamese"],
    display: "swap",
    variable: "--font-inter",
});

const lora = Lora({
    subsets: ["latin", "vietnamese"],
    display: "swap",
    variable: "--font-lora",
});

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#ffffff" },
        { media: "(prefers-color-scheme: dark)", color: "#0B0F17" },
    ],
};

// Replaces <title> and <link rel="icon">
export const metadata: Metadata = {
    title: "Kha Hoàng Minh | Nhà Cung Cấp Inox Hàng Đầu Việt Nam",
    description: "Chuyên nhập khẩu và phân phối thép không gỉ (Inox) Tấm, Cuộn, Ống, Phụ kiện công nghiệp và dân dụng chất lượng cao.",
    icons: {
        icon: "/img/logo/logo.png",
    },
};

const themeInitScript = `
(function() {
    try {
        var saved = localStorage.getItem('theme');
        var isDark = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.classList.toggle('dark', isDark);
    } catch (e) {}
})();
`;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="vi" suppressHydrationWarning>
            <head>
                <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
            </head>
            {/* Inject font variables into the body */}
            <body className={`${inter.variable} ${lora.variable} antialiased font-sans`} suppressHydrationWarning>
                <Providers>
                    <ContextMenuBlocker />
                    <ClientLayoutWrapper>
                        {children}
                    </ClientLayoutWrapper>
                </Providers>
            </body>
        </html>
    );
}
