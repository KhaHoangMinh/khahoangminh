import type { Metadata, Viewport } from "next";
import { Inter, Lora } from "next/font/google";
import { Providers } from "./providers";
import { ContextMenuBlocker } from "@/components/ContextMenuBlocker";
import { ClientLayoutWrapper } from "./ClientLayoutWrapper";
import { getAssetPath } from "@/lib";
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://khahoangminh.com.vn';

// Enhanced metadata for B2B industrial SEO
export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: "Kha Hoàng Minh | Nhà Cung Cấp Inox Hàng Đầu Việt Nam",
        template: "%s | Kha Hoàng Minh",
    },
    description: "Công Ty TNHH Một Thành Viên Kha Hoàng Minh (MST: 0314059766) chuyên nhập khẩu và phân phối thép không gỉ (Inox) SUS 304, 316, 201, 430 Tấm, Cuộn, Ống công nghiệp và gia công CNC Plasma, cắt Laser fiber công suất cao.",
    keywords: [
        "Inox 304", "Inox 316", "Inox 201", "Inox 430",
        "thép không gỉ", "cuộn inox", "tấm inox", "ống inox công nghiệp",
        "gia công CNC plasma", "cắt laser fiber", "chấn gấp inox",
        "xả băng cuộn inox", "Kha Hoàng Minh", "Inox Bình Tân", "Inox Dĩ An Bình Dương"
    ],
    authors: [{ name: "Kha Hoàng Minh Co., Ltd" }],
    creator: "Kha Hoàng Minh",
    publisher: "Kha Hoàng Minh",
    formatDetection: {
        email: true,
        address: true,
        telephone: true,
    },
    icons: {
        icon: getAssetPath("/img/logo/logo.png"),
        shortcut: getAssetPath("/img/logo/logo.png"),
        apple: getAssetPath("/img/logo/logo.png"),
    },
    openGraph: {
        type: "website",
        locale: "vi_VN",
        url: siteUrl,
        siteName: "Kha Hoàng Minh - Thép Không Gỉ & Gia Công CNC",
        title: "Kha Hoàng Minh | Nhà Cung Cấp Inox Hàng Đầu Việt Nam",
        description: "Chuyên nhập khẩu và phân phối trực tiếp Inox Tấm, Cuộn, Ống, Phụ kiện tiêu chuẩn ASTM A240, JIS G4303 và gia công cơ khí chính xác CNC.",
        images: [
            {
                url: `${siteUrl}/img/assets/home/khm-01.jpg`,
                width: 1200,
                height: 630,
                alt: "Kho xưởng và dây chuyền gia công inox Kha Hoàng Minh",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Kha Hoàng Minh | Nhà Cung Cấp Inox Hàng Đầu Việt Nam",
        description: "Nhập khẩu phân phối thép không gỉ SUS 304, 316, 201, 430 và dịch vụ cắt CNC Plasma, Laser Fiber.",
        images: [`${siteUrl}/img/assets/home/khm-01.jpg`],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "Công Ty TNHH Một Thành Viên Kha Hoàng Minh",
    "alternateName": "Kha Hoang Minh Co., Ltd",
    "legalName": "CÔNG TY TNHH MỘT THÀNH VIÊN KHA HOÀNG MINH",
    "url": siteUrl,
    "logo": `${siteUrl}/img/logo/logo.png`,
    "taxID": "0314059766",
    "foundingDate": "2016-10-12",
    "founder": {
        "@type": "Person",
        "name": "Bà Ngô Thị Phụng Uyên",
        "jobTitle": "Giám đốc"
    },
    "email": "info@khahoangminh.com.vn",
    "telephone": "+84-979-866-162",
    "address": [
        {
            "@type": "PostalAddress",
            "name": "Trụ sở chính & Văn phòng",
            "streetAddress": "Số 93/16 Đường Nguyễn Thị Tú, KP. 3, Phường Bình Hưng Hòa B",
            "addressLocality": "Quận Bình Tân",
            "addressRegion": "TP. Hồ Chí Minh",
            "addressCountry": "VN"
        },
        {
            "@type": "PostalAddress",
            "name": "Nhà máy & Kho xưởng Dĩ An",
            "streetAddress": "Ấp Chiêu Liêu, Đường ĐT 743, Phường Tân Đông Hiệp",
            "addressLocality": "Thành phố Dĩ An",
            "addressRegion": "Bình Dương",
            "addressCountry": "VN"
        }
    ],
    "contactPoint": [
        {
            "@type": "ContactPoint",
            "telephone": "+84-979-866-162",
            "contactType": "sales",
            "areaServed": "VN",
            "availableLanguage": ["Vietnamese", "English"]
        },
        {
            "@type": "ContactPoint",
            "telephone": "+84-976-888-999",
            "contactType": "customer service",
            "areaServed": "VN"
        }
    ]
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
        <html lang="vi" suppressHydrationWarning data-scroll-behavior="smooth">
            <head>
                <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
                />
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
