import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const translations = {
    vi: {
        /* --- 1. HEADER & NAVIGATION --- */
        nav: {
            home: 'TRANG CHỦ',
            about: 'GIỚI THIỆU',
            products: 'SẢN PHẨM',
            services: 'DỊCH VỤ',
            projects: 'DỰ ÁN',
            videos: 'VIDEO',
            careers: 'TUYỂN DỤNG',
            news: 'TIN TỨC',
            contact: 'LIÊN HỆ',
        },
        header: {
            welcomeMessage: 'Chào mừng quý khách đến với Kha Hoàng Minh',
            subtitle: 'Tấm - Cuộn - Inox',
            settings: 'Cài đặt',
        },

        /* --- 2. FOOTER --- */
        footer: {
            companyName: 'Công Ty TNHH Một Thành Viên Kha Hoàng Minh',
            description: 'Chuyên cung cấp inox tấm, cuộn, ống với đầy đủ mẫu mã và kích cỡ, đáp ứng mọi nhu cầu của Quý Khách Hàng.',
            quickLinks: 'LIÊN KẾT NHANH',
            contactUs: 'THÔNG TIN LIÊN HỆ',
            addressTitle: 'ĐỊA CHỈ TRỤ SỞ',
            addressText: '93/16 Đường Nguyễn Thị Tú, Phường Bình Hưng Hoà, Quận Bình Tân, TP. Hồ Chí Minh',
            receiptNumber: 'MST: 0314059766 (Cấp ngày 12/10/2016)',
            copyright: 'Bảo lưu mọi quyền',
            followUs: 'KẾT NỐI VỚI CHÚNG TÔI',
            protection: 'Chính sách bảo vệ dữ liệu cá nhân',
            privacy: 'Chính sách quyền riêng tư',

        },

        /* --- 3. COMMON --- */
        common: {
            companyShortName: 'KHA HOÀNG MINH',
            viewAll: 'Xem tất cả',
            contactNow: 'Liên hệ ngay',
            viewProducts: 'Xem sản phẩm',
            viewMore: 'Xem thêm',
            requestQuote: 'Yêu cầu báo giá',
            readMore: 'Đọc thêm',
            viewDetails: 'Xem chi tiết',
            sendRequest: 'Gửi yêu cầu',
        },

        /* --- 4. PAGES --- */
        homePage: {
            hero: {
                tagline: 'Uy tín - Chất lượng - Giá tốt',
                title: 'NHÀ CUNG CẤP INOX',
                subtitle: 'HÀNG ĐẦU VIỆT NAM',
                description: 'Chuyên nhập khẩu và phân phối thép không gỉ (Inox) Tấm, Cuộn, Ống, Phụ kiện... phục vụ ngành công nghiệp và dân dụng với chất lượng cao và giá cả cạnh tranh nhất.',
            },
            about: {
                intro: 'Về Chúng Tôi',
                name: 'Kha Hoàng Minh',
                desc1: 'Công ty TNHH Một Thành Viên Kha Hoàng Minh được thành lập từ năm 2016 với ngành nghề kinh doanh chính là xuất nhập khẩu trực tiếp thép không gỉ (Inox) tấm, cuộn, ống công nghiệp và phụ kiện đường ống.',
                desc2: `Trải qua ${new Date().getFullYear() - 2016} năm xây dựng và phát triển, Kha Hoàng Minh đã khẳng định được uy tín, thương hiệu trên thị trường trong nước và quốc tế, là nhà cung cấp, là đối tác tin cậy hàng đầu của các Nhà thầu, các Doanh nghiệp.`,
                quote: '"Uy tín là hàng đầu, Chất lượng là mãi mãi"',
            },
            products: {
                title: 'Danh Mục Sản Phẩm',
                description: 'Cung cấp đầy đủ các loại inox với mẫu mã, kích cỡ đa dạng, đáp ứng mọi yêu cầu khắt khe nhất.',
            },
            features: {
                title: 'Tại Sao Chọn Chúng Tôi?',
                list: [
                    'Chất lượng sản phẩm đảm bảo theo tiêu chuẩn quốc tế',
                    'Giá cạnh tranh, ưu đãi cho đơn hàng lớn',
                    'Giao hàng nhanh chóng trên toàn quốc',
                    'Đội ngũ tư vấn chuyên nghiệp, nhiệt tình',
                    'Dịch vụ gia công theo yêu cầu',
                    'Bảo hành, hỗ trợ sau bán hàng tận tâm'
                ]
            },
            cta: {
                title: 'Bạn Cần Tư Vấn & Báo Giá?',
                description: 'Đội ngũ nhân viên của chúng tôi luôn sẵn sàng hỗ trợ bạn. Hãy liên hệ ngay để nhận được mức giá ưu đãi nhất.',
            },
            reputation: 'Uy Tín Hàng Đầu',
            reputationDesc: 'Cam kết chất lượng sản phẩm và dịch vụ, tạo dựng niềm tin vững chắc',
            quality: 'Chất Lượng Bền Vững',
            qualityDesc: 'Sản phẩm đạt chuẩn quốc tế, nhập khẩu từ các nhà sản xuất uy tín',
            team: 'Đội Ngũ Chuyên Nghiệp',
            teamDesc: 'Nhân viên giàu kinh nghiệm, tận tâm phục vụ khách hàng',
            facilities: 'Cơ Sở Vật Chất',
            facilitiesDesc: 'Kho bãi rộng lớn, trang thiết bị hiện đại, sẵn sàng đáp ứng mọi đơn hàng',
        },
        aboutPage: {
            title: 'Về Chúng Tôi',
        },
        productsPage: {
            title: 'Sản Phẩm',
            categories: {
                coil: 'CUỘN INOX',
                sheet: 'TẤM INOX',
                pipe: 'ỐNG INOX',
                accessories: 'PHỤ KIỆN INOX',
                fabricated: 'Sản phẩm gia công',
            }
        },
        servicesPage: {
            title: 'Dịch Vụ Gia Công',
        },
        projectsPage: {
            title: 'Dự Án Tiêu Biểu',
        },
        videosPage: {
            title: 'Thư Viện Video',
        },
        careersPage: {
            title: 'Tuyển Dụng',
        },
        newsPage: {
            title: 'Tin Tức & Sự Kiện',
        },
        contactPage: {
            heroTitle: 'Liên Hệ',
            heroSubtitle: 'Với Chúng Tôi',
            heroDesc: 'Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn',
            formTitle: 'Gửi yêu cầu cho chúng tôi',
            formDesc: 'Vui lòng điền thông tin vào form dưới đây, chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.',
            labels: {
                name: 'Họ và tên',
                phone: 'Số điện thoại',
                email: 'Email',
                message: 'Nội dung yêu cầu'
            },
            placeholders: {
                name: 'Nguyễn Văn A',
                phone: '0999 999 999',
                email: 'email@example.com',
                message: 'Vui lòng mô tả chi tiết yêu cầu của bạn...'
            },
            button: 'Gửi yêu cầu',
            successMessage: 'Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.',
            infoTitle: 'Thông tin liên hệ',
            infoAddress: 'Địa chỉ',
            infoPhone: 'Điện thoại',
            infoEmail: 'Email',
            infoHours: 'Giờ làm việc',
            workingHoursText1: 'Thứ 2 - Thứ 6: 8:00 - 17:00',
            workingHoursText2:'Thứ 7: 8:00 - 12:00',
            supportTitle: 'Hỗ trợ khách hàng'
        },
        pageNotFound: {
            subtitle: 'Không tìm thấy trang',
            descStart: 'Chúng tôi không thể tìm thấy trang',
            descEnd: 'nhưng đừng lo, bạn vẫn có thể tìm thấy lối ra.',
            backButton: 'Quay lại',
            homeButton: 'Về trang chủ',
            quickLinksTitle: 'Có thể bạn đang tìm kiếm',
            links: {
                home: 'Quay về trang chính',
                products: 'Khám phá danh mục',
                services: 'Lĩnh vực hoạt động',
                projects: 'Dự án tiêu biểu',
                about: 'Về chúng tôi',
                contact: 'Kết nối ngay'
            }
        }
    },

    en: {
        /* --- 1. HEADER & NAVIGATION --- */
        nav: {
            home: 'HOME',
            about: 'ABOUT US',
            products: 'PRODUCTS',
            services: 'SERVICES',
            projects: 'PROJECTS',
            videos: 'VIDEOS',
            careers: 'CAREERS',
            news: 'NEWS',
            contact: 'CONTACT',
        },
        header: {
            welcomeMessage: 'Welcome to Kha Hoang Minh Corporation',
            subtitle: 'Stainless Steel Sheets - Coils',
            settings: 'Settings',
        },

        /* --- 2. FOOTER --- */
        footer: {
            companyName: 'KHA HOANG MINH CO., LTD',
            description: 'Specializing in providing stainless steel sheets, coils, and pipes with a full range of designs and sizes to meet all customer needs.',
            quickLinks: 'QUICK LINKS',
            contactUs: 'CONTACT US',
            addressTitle: 'HEADQUARTERS',
            addressText: '93/16 Nguyen Thi Tu Street, Binh Hung Hoa Ward, Binh Tan District, HCMC',
            receiptNumber: 'Tax Code: 0314059766 (Issued on Oct 12th, 2016)',
            copyright: 'All rights reserved',
            followUs: 'FOLLOW US',
            protection: 'Personal data protection',
            privacy: 'Privacy policy',
        },

        /* --- 3. COMMON --- */
        common: {
            companyShortName: 'KHA HOANG MINH',
            viewAll: 'View All',
            contactNow: 'Contact Now',
            viewProducts: 'View Products',
            viewMore: 'View More',
            requestQuote: 'Request Quote',
            readMore: 'Read More',
            viewDetails: 'View Details',
            sendRequest: 'Send Request',
        },

        /* --- 4. PAGES --- */
        homePage: {
            hero: {
                tagline: 'Prestige - Quality - Good Price',
                title: 'LEADING STAINLESS STEEL',
                subtitle: 'SUPPLIER IN VIETNAM',
                description: 'Specializing in importing and distributing stainless steel Sheets, Coils, Pipes, Accessories... serving industrial and civil sectors with high quality and competitive prices.',
            },
            about: {
                intro: 'About Us',
                name: 'Kha Hoang Minh',
                desc1: 'Kha Hoang Minh Company Limited was established in 2016 with the main business of direct import and export of stainless steel sheets, coils, industrial pipes, and pipe fittings.',
                desc2: `With  ${new Date().getFullYear() - 2016} years of construction and development, Kha Hoang Minh has affirmed its reputation and brand in the domestic and international market, being a leading reliable supplier and partner for Contractors and Enterprises.`,
                quote: '"Prestige is first, Quality is forever"',
            },
            products: {
                title: 'Product Categories',
                description: 'Providing a full range of stainless steel with diverse designs and sizes, meeting the most stringent requirements.',
            },
            features: {
                title: 'Why Choose Us?',
                list: [
                    'Product quality guaranteed to international standards',
                    'Competitive prices, special offers for bulk orders',
                    'Fast nationwide delivery',
                    'Professional and dedicated consulting team',
                    'Custom processing services',
                    'Comprehensive warranty and after-sales support'
                ]
            },
            cta: {
                title: 'Need Consultation & Quote?',
                description: 'Our staff is always ready to support you. Contact us now to receive the best offers.',
            },
            reputation: 'Top Reputation',
            reputationDesc: 'Commitment to product and service quality, building trust with customers',
            quality: 'Sustainable Quality',
            qualityDesc: 'Products meeting international standards, imported from reputable manufacturers',
            team: 'Professional Team',
            teamDesc: 'Experienced staff, dedicated to serving customers',
            facilities: 'Facilities',
            facilitiesDesc: 'Spacious warehouses, modern equipment, ready to serve',
        },
        aboutPage: {
            title: 'About Us',
        },
        productsPage: {
            title: 'Our Products',
            categories: {
                coil: 'STAINLESS STEEL COIL',
                sheet: 'STAINLESS STEEL SHEET',
                pipe: 'STAINLESS STEEL PIPE',
                accessories: 'STAINLESS STEEL ACCESSORIES',
                fabricated: 'Fabricated Products',
            }
        },
        servicesPage: {
            title: 'Processing Services',
        },
        projectsPage: {
            title: 'Featured Projects',
        },
        videosPage: {
            title: 'Video Library',
        },
        careersPage: {
            title: 'Career Opportunities',
        },
        newsPage: {
            title: 'News & Events',
        },
        contactPage: {
            heroTitle: 'Contact',
            heroSubtitle: 'With Us',
            heroDesc: 'We are always ready to listen and support you',
            formTitle: 'Send Us a Request',
            formDesc: 'Please fill out the form below, we will contact you as soon as possible.',
            labels: {
                name: 'Full Name',
                phone: 'Phone Number',
                email: 'Email',
                message: 'Your Request'
            },
            placeholders: {
                name: 'ABC',
                phone: '+84 999 999 999',
                email: 'email@example.com',
                message: 'Please describe your request in detail...'
            },
            button: 'Send Request',
            successMessage: 'Thank you for contacting us! We will respond as soon as possible.',
            infoTitle: 'Contact Information',
            infoAddress: 'Address',
            infoPhone: 'Phone',
            infoEmail: 'Email',
            infoHours: 'Working Hours',
            workingHoursText1: 'Mon - Fri: 8:00 - 17:00',
            workingHoursText2: 'Sat: 8:00 - 12:00',
            supportTitle: 'Customer Support'
        },
        pageNotFound: {
            subtitle: 'Page Not Found',
            descStart: 'We looked everywhere for',
            descEnd: 'but it seems to have slipped through the cracks.',
            backButton: 'Go Back',
            homeButton: 'Return Home',
            quickLinksTitle: 'You might be looking for',
            links: {
                home: 'Return to main page',
                products: 'Explore our catalog',
                services: 'What we do',
                projects: 'Our featured work',
                about: 'Who we are',
                contact: 'Get in touch'
            }
        }
    }
};

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(() => {
        const saved = localStorage.getItem('app_language');
        return saved || 'vi';
    });

    const toggleLanguage = () => {
        setLanguage(prev => {
            const newLang = prev === 'vi' ? 'en' : 'vi';
            // 2. Save the new selection immediately
            localStorage.setItem('app_language', newLang);
            return newLang;
        });
    };

    const t = (path) => {
        const keys = path.split('.');
        let current = translations[language];

        for (const key of keys) {
            if (!current || current[key] === undefined) {
                return path;
            }
            current = current[key];
        }
        return current;
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export const useLanguage = () => useContext(LanguageContext);