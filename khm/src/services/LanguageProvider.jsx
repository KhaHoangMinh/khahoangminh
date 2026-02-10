import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const translations = {
    vi: {
        // Navigation
        home: 'TRANG CHỦ',
        about: 'GIỚI THIỆU',
        products: 'SẢN PHẨM',
        services: 'DỊCH VỤ GIA CÔNG',
        projects: 'DỰ ÁN',
        videos: 'VIDEO',
        careers: 'TUYỂN DỤNG',
        news: 'TIN TỨC',
        contact: 'LIÊN HỆ',

        // Common
        viewAll: 'Xem tất cả',
        contactNow: 'Liên hệ ngay',
        requestQuote: 'Yêu cầu báo giá',
        readMore: 'Đọc thêm',
        viewDetails: 'Xem chi tiết',
        sendRequest: 'Gửi yêu cầu',

        // Footer
        companyInfo: 'CÔNG TY TNHH MTV KHA HOÀNG MINH',
        companyDesc: 'Chuyên cung cấp inox tấm, cuộn, ống với đầy đủ mẫu mã và kích cỡ, đáp ứng mọi nhu cầu của Quý Khách Hàng.',
        contactTitle: 'LIÊN HỆ',
        addressTitle: 'ĐỊA CHỈ',
        addressText: '93/16 Đường Nguyễn Thị Tú, Phường Bình Hưng Hoà, Quận Bình Tân, TP. Hồ Chí Minh',
        quickLinks: 'LIÊN KẾT',
        followUs: 'THEO DÕI CHÚNG TÔI',
        allRightsReserved: 'All rights reserved.',

        // Home page
        heroTitle: 'CHUYÊN NHẬP KHẨU VÀ\nPHÂN PHỐI TRÊN TOÀN QUỐC',
        heroSubtitle: 'TẤM - CUỘN - INOX',
        heroDesc: 'Công ty TNHH MTV Kha Hoàng Minh chuyên cung cấp inox tấm, cuộn, ống với đầy đủ mẫu mã và kích cỡ',
        viewProducts: 'Xem sản phẩm',
        aboutIntro: 'Giới thiệu',
        aboutKHM: 'Kha Hoàng Minh',
        productCategories: 'Danh mục Sản phẩm',
        whyChooseUs: 'Tại sao chọn Kha Hoàng Minh?',
        needConsulting: 'Cần tư vấn về sản phẩm Inox?',
        consultDesc: 'Liên hệ ngay với chúng tôi để được hỗ trợ và báo giá tốt nhất',

        // About page
        aboutUs: 'Giới thiệu về',
        trustedPartner: 'Đối tác tin cậy trong lĩnh vực cung cấp thép không gỉ tại Việt Nam',
        establishedYear: 'Thành lập năm 2016',
        companyFullName: 'CÔNG TY TNHH MỘT THÀNH VIÊN',
        companyIntro1: 'được thành lập từ năm 2016 với ngành nghề kinh doanh chính là xuất nhập khẩu trực tiếp thép không gỉ (Inox) tấm, cuộn, ống công nghiệp và phụ kiện đường ống.',
        companyIntro2: 'Trải qua gần 9 năm xây dựng và phát triển, Kha Hoàng Minh đã khẳng định được uy tín, thương hiệu trên thị trường trong nước và quốc tế, là nhà cung cấp, là đối tác tin cậy hàng đầu của các Nhà thầu, các Doanh nghiệp trong nước cũng như nước ngoài ở cả hai lĩnh vực cung cấp thép không gỉ và ống thép carbon, Inox tấm, cuộn.',
        companyMotto: '"Uy tín là hàng đầu, Chất lượng là mãi mãi"',
        companyMottoDesc: 'Chúng tôi mong muốn mang đến các giải pháp toàn diện cùng khách hàng đi tới thành công.',
        thankYouMessage: 'Chân thành cảm ơn và mong muốn được hợp tác với Quý vị!',
        learnMore: 'Xem thêm',
        coreValues: 'Giá trị cốt lõi',
        coreValuesDesc: 'Những giá trị mà chúng tôi luôn hướng tới trong suốt quá trình phát triển',
        businessScope: 'Lĩnh vực kinh doanh',
        mainProducts: 'Sản phẩm chính',
        product1: 'Inox tấm 304, 316, 201, 430',
        product2: 'Inox cuộn các loại bề mặt',
        product3: 'Ống inox công nghiệp',
        product4: 'Phụ kiện đường ống inox',
        service1: 'Gia công cắt theo yêu cầu',
        service2: 'Tư vấn kỹ thuật chuyên nghiệp',
        service3: 'Giao hàng toàn quốc',
        service4: 'Hỗ trợ sau bán hàng',
        becomePartner: 'Trở thành đối tác của chúng tôi',
        partnerDesc: 'Hãy để Kha Hoàng Minh đồng hành cùng doanh nghiệp của bạn',

        // Products page
        stainlessSteel: 'Sản phẩm Inox',
        productsDesc: 'Cung cấp đầy đủ các loại inox tấm, cuộn, ống với mẫu mã đa dạng',
        consultQuote: 'Liên hệ để được tư vấn và báo giá',
        consultTeam: 'Đội ngũ chuyên gia của chúng tôi sẵn sàng hỗ trợ bạn 24/7',

        // Services page
        metalFabServices: 'Dịch vụ Gia công Kim loại',
        servicesIntro: 'Cung cấp dịch vụ gia công kim loại chuyên nghiệp với công nghệ hiện đại',
        ourWorkflow: 'Quy trình làm việc của chúng tôi',

        // Projects page
        ourProjects: 'Dự án của chúng tôi',
        projectsDesc: 'Những dự án tiêu biểu mà chúng tôi đã thực hiện',
        completedProjects: 'Dự án đã thực hiện',
        keyClients: 'Khách hàng tiêu biểu',
        companyCapabilities: 'Năng lực công ty',

        // Videos page
        introVideos: 'Video Giới thiệu',
        videosDesc: 'Tìm hiểu thêm về sản phẩm và dịch vụ của chúng tôi qua video',
        videosUpdating: 'Video đang được cập nhật',
        contactForDetails: 'Vui lòng liên hệ hotline để biết thêm chi tiết',

        // Careers page
        careerOpportunities: 'Cơ hội nghề nghiệp',
        joinOurTeam: 'Gia nhập đội ngũ Kha Hoàng Minh',
        benefits: 'Phúc lợi',
        currentOpenings: 'Vị trí tuyển dụng',
        companyCulture: 'Văn hóa công ty',

        // News page
        newsEvents: 'Tin tức & Sự kiện',
        latestNews: 'Tin tức mới nhất từ Kha Hoàng Minh',
        comingSoon: 'Nội dung đang được cập nhật',
        followFacebook: 'Theo dõi trang Facebook của chúng tôi để cập nhật tin tức mới nhất',

        // Contact page
        contactUs: 'Liên hệ với chúng tôi',
        contactDesc: 'Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn',
        sendYourRequest: 'Gửi yêu cầu cho chúng tôi',
        fillFormDesc: 'Vui lòng điền thông tin vào form dưới đây, chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.',
        fullName: 'Họ và tên',
        phoneNumber: 'Số điện thoại',
        email: 'Email',
        requestContent: 'Nội dung yêu cầu',
        contactInfo: 'Thông tin liên hệ',
        workingHours: 'Giờ làm việc',
        customerSupport: 'Hỗ trợ khách hàng',
        address: 'Địa chỉ',
        phone: 'Điện thoại',

        // Core values
        topReputation: 'Uy tín hàng đầu',
        topReputationDesc: 'Cam kết về chất lượng sản phẩm và dịch vụ, xây dựng niềm tin với khách hàng',
        qualityForever: 'Chất lượng mãi mãi',
        qualityForeverDesc: 'Sản phẩm đạt tiêu chuẩn quốc tế, nhập khẩu từ các nhà sản xuất uy tín',
        professionalTeam: 'Đội ngũ chuyên nghiệp',
        professionalTeamDesc: 'Đội ngũ nhân viên giàu kinh nghiệm, tận tâm phục vụ khách hàng',
        facilities: 'Cơ sở vật chất',
        facilitiesDesc: 'Kho bãi rộng rãi, trang thiết bị hiện đại, sẵn sàng phục vụ',
        service: 'Dịch vụ',

        // Product categories
        inoxCoil: 'INOX CUỘN',
        inoxSheet: 'INOX TẤM',
        inoxPipe: 'ỐNG INOX',
        inoxAccessories: 'PHỤ KIỆN INOX',
        fabricatedProducts: 'SẢN PHẨM GIA CÔNG',
    },
    en: {
        // Navigation
        home: 'HOME',
        about: 'ABOUT',
        products: 'PRODUCTS',
        services: 'SERVICES',
        projects: 'PROJECTS',
        videos: 'VIDEOS',
        careers: 'CAREERS',
        news: 'NEWS',
        contact: 'CONTACT',

        // Common
        viewAll: 'View All',
        contactNow: 'Contact Now',
        requestQuote: 'Request Quote',
        readMore: 'Read More',
        viewDetails: 'View Details',
        sendRequest: 'Send Request',

        // Footer
        companyInfo: 'KHA HOANG MINH CO., LTD',
        companyDesc: 'Specializing in supplying stainless steel sheets, coils, and pipes with a full range of models and sizes to meet all customer needs.',
        contactTitle: 'CONTACT',
        addressTitle: 'ADDRESS',
        addressText: '93/16 Nguyen Thi Tu Street, Binh Hung Hoa Ward, Binh Tan District, Ho Chi Minh City',
        quickLinks: 'QUICK LINKS',
        followUs: 'FOLLOW US',
        allRightsReserved: 'All rights reserved.',

        // Home page
        heroTitle: 'IMPORT AND DISTRIBUTION\nNATIONWIDE',
        heroSubtitle: 'SHEET - COIL - STAINLESS STEEL',
        heroDesc: 'Kha Hoang Minh Co., Ltd specializes in supplying stainless steel sheets, coils, and pipes in various models and sizes',
        viewProducts: 'View Products',
        aboutIntro: 'About',
        aboutKHM: 'Kha Hoang Minh',
        productCategories: 'Product Categories',
        whyChooseUs: 'Why Choose Kha Hoang Minh?',
        needConsulting: 'Need Consulting About Stainless Steel Products?',
        consultDesc: 'Contact us now for support and best quotation',

        // About page
        aboutUs: 'About',
        trustedPartner: 'Trusted partner in stainless steel supply in Vietnam',
        establishedYear: 'Established in 2016',
        companyFullName: 'KHA HOANG MINH CO., LTD',
        companyIntro1: 'was established in 2016 with the main business of directly importing and exporting stainless steel (Inox) sheets, coils, industrial pipes and pipe fittings.',
        companyIntro2: 'Over nearly 9 years of building and development, Kha Hoang Minh has affirmed its reputation and brand in the domestic and international markets, being a leading reliable supplier and partner of contractors and enterprises both domestically and abroad in both fields of stainless steel supply and carbon steel pipes, stainless steel sheets and coils.',
        companyMotto: '"Reputation First, Quality Forever"',
        companyMottoDesc: 'We desire to bring comprehensive solutions to accompany customers to success.',
        thankYouMessage: 'Thank you sincerely and look forward to cooperating with you!',
        learnMore: 'Learn More',
        coreValues: 'Core Values',
        coreValuesDesc: 'Values we always pursue throughout our development',
        businessScope: 'Business Scope',
        mainProducts: 'Main Products',
        product1: 'Stainless steel sheets 304, 316, 201, 430',
        product2: 'Stainless steel coils with various surfaces',
        product3: 'Industrial stainless steel pipes',
        product4: 'Stainless steel pipe fittings',
        service1: 'Custom cutting processing',
        service2: 'Professional technical consulting',
        service3: 'Nationwide delivery',
        service4: 'After-sales support',
        becomePartner: 'Become Our Partner',
        partnerDesc: 'Let Kha Hoang Minh accompany your business',

        // Products page
        stainlessSteel: 'Stainless Steel Products',
        productsDesc: 'Full range of stainless steel sheets, coils, and pipes with diverse models',
        consultQuote: 'Contact for consultation and quotation',
        consultTeam: 'Our expert team is ready to support you 24/7',

        // Services page
        metalFabServices: 'Metal Fabrication Services',
        servicesIntro: 'Providing professional metal fabrication services with modern technology',
        ourWorkflow: 'Our Workflow',

        // Projects page
        ourProjects: 'Our Projects',
        projectsDesc: 'Notable projects we have completed',
        completedProjects: 'Completed Projects',
        keyClients: 'Key Clients',
        companyCapabilities: 'Company Capabilities',

        // Videos page
        introVideos: 'Introduction Videos',
        videosDesc: 'Learn more about our products and services through videos',
        videosUpdating: 'Videos are being updated',
        contactForDetails: 'Please contact our hotline for more details',

        // Careers page
        careerOpportunities: 'Career Opportunities',
        joinOurTeam: 'Join Kha Hoang Minh Team',
        benefits: 'Benefits',
        currentOpenings: 'Current Openings',
        companyCulture: 'Company Culture',

        // News page
        newsEvents: 'News & Events',
        latestNews: 'Latest news from Kha Hoang Minh',
        comingSoon: 'Content is being updated',
        followFacebook: 'Follow our Facebook page for latest updates',

        // Contact page
        contactUs: 'Contact Us',
        contactDesc: 'We are always ready to listen and support you',
        sendYourRequest: 'Send Your Request',
        fillFormDesc: 'Please fill in the information below, we will contact you as soon as possible.',
        fullName: 'Full Name',
        phoneNumber: 'Phone Number',
        email: 'Email',
        requestContent: 'Request Content',
        contactInfo: 'Contact Information',
        workingHours: 'Working Hours',
        customerSupport: 'Customer Support',
        address: 'Address',
        phone: 'Phone',

        // Core values
        topReputation: 'Top Reputation',
        topReputationDesc: 'Commitment to product and service quality, building trust with customers',
        qualityForever: 'Quality Forever',
        qualityForeverDesc: 'Products meeting international standards, imported from reputable manufacturers',
        professionalTeam: 'Professional Team',
        professionalTeamDesc: 'Experienced staff, dedicated to serving customers',
        facilities: 'Facilities',
        facilitiesDesc: 'Spacious warehouses, modern equipment, ready to serve',
        service: 'Services',

        // Product categories
        inoxCoil: 'STAINLESS STEEL COIL',
        inoxSheet: 'STAINLESS STEEL SHEET',
        inoxPipe: 'STAINLESS STEEL PIPE',
        inoxAccessories: 'STAINLESS STEEL ACCESSORIES',
        fabricatedProducts: 'FABRICATED PRODUCTS',
    }
};

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('vi');

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'vi' ? 'en' : 'vi');
    };

    const t = (key) => translations[language][key] || key;

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export const useLanguage = () => useContext(LanguageContext);