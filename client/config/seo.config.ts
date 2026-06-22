import type { Metadata } from "next";

export const defaultSEO: Metadata = {
    title: {
        default: "Kha Hoàng Minh | Inox Tấm, Cuộn, Ống Công Nghiệp",
        template: "%s | Kha Hoàng Minh",
    },
    description: "Công ty TNHH MTV Kha Hoàng Minh chuyên nhập khẩu và phân phối thép không gỉ (Inox) Tấm, Cuộn, Ống, Phụ kiện phục vụ ngành công nghiệp và dân dụng.",
    openGraph: {
        type: 'website',
        locale: 'vi_VN',
        url: 'http://khahoangminh.com.vn',
        siteName: 'Kha Hoang Minh',
        images: [
            {
                url: 'http://khahoangminh.com.vn/img/logo/logo.png',
                width: 800,
                height: 600,
                alt: 'Kha Hoang Minh Logo',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@khahoangminh',
        creator: '@khahoangminh',
    },
};