"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type LanguageContextType = {
    language: string;
    toggleLanguage: () => void;
    t: <T = any>(path: string) => T;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations: Record<string, any> = {
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
            addressText: 'Số 93/16 Đường Nguyễn Thị Tú, KP. 3, Phường Bình Hưng Hòa B, Quận Bình Tân, TP. Hồ Chí Minh',
            receiptNumber: 'MST: 0314059766 (Cấp ngày 12/10/2016)',
            copyright: 'Bảo lưu mọi quyền',
            followUs: 'KẾT NỐI VỚI CHÚNG TÔI',
            protection: 'Chính sách bảo vệ dữ liệu cá nhân',
            privacy: 'Chính sách quyền riêng tư',
            terms: 'Điều khoản dịch vụ',
        },

        events: {
            specialEventTag: 'Sự Kiện Đặc Biệt',
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
            continueToSite: 'Tiếp tục vào trang web',
        },

        /* --- 4. PAGES --- */
        homePage: {
            trustedBy: 'Đối tác & Khách hàng tiêu biểu',
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
            hero: {
                title: 'Về Chúng Tôi',
                subtitle: 'Kha Hoàng Minh',
                description: 'Đối tác tin cậy trong lĩnh vực cung cấp thép không gỉ tại Việt Nam'
            },
            info: {
                established: 'Thành lập năm 2016',
                fullName: 'Công Ty TNHH Một Thành Viên',
                intro1: 'được thành lập từ năm 2016 với ngành nghề kinh doanh chính là xuất nhập khẩu trực tiếp thép không gỉ (Inox).',
                intro2: 'Chúng tôi tự hào là đối tác chiến lược của nhiều nhà máy sản xuất thép không gỉ lớn trên thế giới, cam kết mang đến cho khách hàng những sản phẩm chất lượng tốt nhất với giá cả cạnh tranh.',
                motto: '"Uy tín là hàng đầu, Chất lượng là mãi mãi"',
                mottoDesc: 'Đây là kim chỉ nam cho mọi hoạt động kinh doanh của chúng tôi.',
                thankYou: 'Xin trân trọng cảm ơn Quý khách hàng đã tin tưởng và đồng hành cùng Kha Hoàng Minh!'
            },
            values: {
                title: 'Giá Trị Cốt Lõi',
                description: 'Những nguyên tắc định hình văn hóa và cách thức làm việc của chúng tôi',
                items: {
                    reputation: 'Uy Tín Hàng Đầu',
                    reputationDesc: 'Luôn giữ đúng cam kết với khách hàng và đối tác',
                    quality: 'Chất Lượng Bền Vững',
                    qualityDesc: 'Sản phẩm đạt chuẩn quốc tế, nguồn gốc rõ ràng',
                    team: 'Đội Ngũ Chuyên Nghiệp',
                    teamDesc: 'Am hiểu kỹ thuật, tận tâm hỗ trợ',
                    facilities: 'Cơ Sở Vật Chất',
                    facilitiesDesc: 'Kho bãi hiện đại, trữ lượng hàng hóa lớn'
                }
            },
            scope: {
                title: 'Lĩnh Vực Hoạt Động',
                products: {
                    title: 'Sản phẩm chủ đạo',
                    list: [
                        'Inox Cuộn (Coils) - 304, 316, 430, 201',
                        'Inox Tấm (Sheets) - 2B, BA, HL, No.1',
                        'Inox Ống (Pipes) - Ống công nghiệp & trang trí',
                        'Phụ kiện Inox (Fittings) - Co, tê, mặt bích, van'
                    ]
                },
                services: {
                    title: 'Dịch vụ gia công',
                    list: [
                        'Xả băng, cắt tấm theo kích thước yêu cầu',
                        'Gia công đánh bóng bề mặt (Hairline, Mirror)',
                        'Gia công chấn, dập hình thép không gỉ',
                        'Vận chuyển và giao hàng tận nơi'
                    ]
                }
            },
            cta: {
                title: 'Trở Thành Đối Tác Của Chúng Tôi',
                description: 'Kha Hoàng Minh luôn chào đón cơ hội hợp tác với các đại lý, nhà thầu và doanh nghiệp trên toàn quốc.',
            }
        },
        productsPage: {
            title: 'Sản Phẩm',
            hero: {
                title: 'Sản phẩm',
                highlight: 'Inox',
                subtitle: 'Cung cấp đầy đủ các loại inox tấm, cuộn, ống với mẫu mã đa dạng'
            },
            tabDescStart: 'Công ty Inox Kha Hoàng Minh chuyên mua bán và cung cấp các sản phẩm',
            tabDescEnd: 'chất lượng cao, giá cạnh tranh.',
            buttonQuote: 'Yêu cầu báo giá',
            searchPlaceholder: 'Tìm kiếm sản phẩm...',
            noResultsTitle: 'Không tìm thấy sản phẩm',
            noResultsDesc: 'Rất tiếc, không có sản phẩm nào phù hợp với từ khóa của bạn.',
            clearSearch: 'Xóa tìm kiếm',
            contact: {
                title: 'Liên hệ để được tư vấn và báo giá',
                subtitle: 'Đội ngũ chuyên gia của chúng tôi sẵn sàng hỗ trợ bạn',
                buttonText: 'Liên hệ ngay'
            },
            categoriesData: [
                {
                    id: 'cuon',
                    name: 'INOX CUỘN',
                    image: 'http://khahoangminh.com.vn/upload/sanpham/cu%E1%BB%99n%20inox.jpg',
                    products: [
                        { name: 'CUỘN INOX 304 BỀ MẶT 2B', image: 'http://khahoangminh.com.vn/upload/sanpham/cu%E1%BB%99n%20inox.jpg', description: 'Khổ từ 35mm đến 1548mm, độ dày từ 0.3mm đến 20mm+' },
                        { name: 'CUỘN INOX 304 BỀ MẶT NO1', image: 'http://khahoangminh.com.vn/upload/sanpham/cuon-inox-316.jpg', description: 'Bề mặt đa dạng No.1/1D / 2D/2B/ BA / No.3 / No.4 / HL' },
                        { name: 'CUỘN INOX 430 BỀ MẶT BA', image: 'http://khahoangminh.com.vn/upload/sanpham/cuon-inox-430-ba_738.jpg', description: 'Độ dài từ 1 – 6m+, chất lượng cao' }
                    ]
                },
                {
                    id: 'tam',
                    name: 'INOX TẤM',
                    image: 'http://khahoangminh.com.vn/upload/sanpham/t%E1%BA%A5m%20inox%202b.jpg',
                    products: [
                        { name: 'TẤM INOX 304', image: 'http://khahoangminh.com.vn/upload/sanpham/t%E1%BA%A5m%20inox%202b.jpg', description: 'Tấm inox 304 chất lượng cao, đa dạng kích thước' },
                        { name: 'TẤM INOX 316', image: 'http://khahoangminh.com.vn/upload/sanpham/t%E1%BA%A5m%20inox%202b.jpg', description: 'Chống ăn mòn tốt, phù hợp môi trường khắc nghiệt' },
                        { name: 'TẤM INOX 201', image: 'http://khahoangminh.com.vn/upload/sanpham/t%E1%BA%A5m%20inox%202b.jpg', description: 'Giá cả hợp lý, chất lượng ổn định' }
                    ]
                },
                {
                    id: 'ong',
                    name: 'ỐNG INOX',
                    image: 'http://khahoangminh.com.vn/upload/sanpham/O%CC%82%CC%81NG%20INOX.jpg',
                    products: [
                        { name: 'ỐNG INOX CÔNG NGHIỆP', image: 'http://khahoangminh.com.vn/upload/sanpham/O%CC%82%CC%81NG%20INOX.jpg', description: 'Ống inox 304, 316 đường kính đa dạng' },
                        { name: 'ỐNG INOX TRANG TRÍ', image: 'http://khahoangminh.com.vn/upload/sanpham/o%CC%82%CC%81ng%20trang%20tri%CC%81%20inox.jpg', description: 'Bề mặt đẹp, độ bóng cao' },
                        { name: 'HỘP VUÔNG INOX', image: 'http://khahoangminh.com.vn/upload/sanpham/ho%CC%A3%CC%82p%20vuo%CC%82ng%20inox.jpg', description: 'Hộp vuông inox các kích thước' }
                    ]
                },
                {
                    id: 'phukien',
                    name: 'PHỤ KIỆN INOX',
                    image: 'http://khahoangminh.com.vn/upload/sanpham/phu%CC%A3%20kie%CC%A3%CC%82n%20inox%20kha%20hoang%20minh.jpg',
                    products: [
                        { name: 'PHỤ KIỆN ĐƯỜNG ỐNG', image: 'http://khahoangminh.com.vn/upload/sanpham/phu%CC%A3%20kie%CC%A3%CC%82n%20inox%20kha%20hoang%20minh.jpg', description: 'Khuỷu, tê, nối, van inox' },
                        { name: 'LÁP ĐẶC INOX', image: 'http://khahoangminh.com.vn/upload/sanpham/LA%CC%81P%20%C4%90A%CC%A3%CC%86C%20INOX.jpg', description: 'Láp đặc inox các loại' },
                        { name: 'THANH VÊ, LA INOX', image: 'http://khahoangminh.com.vn/upload/sanpham/thanh%20ve%CC%82%20inox.jpg', description: 'Thanh vê, la inox chất lượng cao' }
                    ]
                },
                {
                    id: 'giacong',
                    name: 'SẢN PHẨM GIA CÔNG',
                    image: 'http://khahoangminh.com.vn/upload/sanpham/Sa%CC%89n%20pha%CC%82%CC%89m%20gia%20co%CC%82ng%20ca%CC%86%CC%81t%20CNC%20PLASMA%205.jpg',
                    products: [
                        { name: 'GIA CÔNG CẮT CNC PLASMA', image: 'http://khahoangminh.com.vn/upload/sanpham/Sa%CC%89n%20pha%CC%82%CC%89m%20gia%20co%CC%82ng%20ca%CC%86%CC%81t%20CNC%20PLASMA%205.jpg', description: 'Cắt CNC theo bản vẽ, độ chính xác cao' }
                    ]
                }
            ]
        },
        servicesPage: {
            title: 'Dịch Vụ Gia Công',
            hero: {
                title: 'Dịch vụ',
                highlight: 'Gia công',
                subtitle: 'Cung cấp dịch vụ gia công inox chuyên nghiệp, chất lượng cao'
            },
            servicesList: {
                title: 'Dịch vụ của chúng tôi',
                subtitle: 'Đa dạng dịch vụ từ gia công, tư vấn đến vận chuyển và hỗ trợ',
                items: [
                    {
                        title: 'Gia công cắt CNC Plasma',
                        description: 'Cắt theo bản vẽ kỹ thuật với độ chính xác cao, máy móc hiện đại',
                        features: ['Cắt CNC Plasma chính xác', 'Theo bản vẽ kỹ thuật', 'Tốc độ nhanh', 'Giá cạnh tranh']
                    },
                    {
                        title: 'Cắt theo yêu cầu',
                        description: 'Cắt inox tấm, cuộn theo kích thước yêu cầu của khách hàng',
                        features: ['Cắt đúng kích thước', 'Bề mặt phẳng đẹp', 'Giao hàng nhanh', 'Cam kết chất lượng']
                    },
                    {
                        title: 'Giao hàng toàn quốc',
                        description: 'Vận chuyển và giao hàng tận nơi trên toàn quốc',
                        features: ['Giao hàng nhanh chóng', 'Đóng gói cẩn thận', 'Theo dõi đơn hàng', 'Bảo hiểm hàng hóa']
                    },
                    {
                        title: 'Tư vấn kỹ thuật',
                        description: 'Đội ngũ kỹ sư giàu kinh nghiệm tư vấn giải pháp tối ưu',
                        features: ['Tư vấn chuyên nghiệp', 'Giải pháp tối ưu', 'Hỗ trợ 24/7', 'Nhiệt tình, tận tâm']
                    },
                    {
                        title: 'Kiểm tra chất lượng',
                        description: 'Kiểm tra chất lượng nghiêm ngặt trước khi giao hàng',
                        features: ['Tiêu chuẩn quốc tế', 'Kiểm tra kỹ lưỡng', 'Chứng nhận CO, CQ', 'Cam kết chất lượng']
                    },
                    {
                        title: 'Bảo hành - Hỗ trợ',
                        description: 'Chế độ bảo hành và hỗ trợ sau bán hàng chu đáo',
                        features: ['Bảo hành sản phẩm', 'Đổi trả linh hoạt', 'Hỗ trợ kỹ thuật', 'Chăm sóc khách hàng']
                    }
                ]
            },
            featured: {
                badge: 'Dịch vụ nổi bật',
                title: 'Gia công cắt',
                highlight: 'CNC Plasma',
                description: 'Với máy CNC Plasma hiện đại, chúng tôi cung cấp dịch vụ cắt inox chính xác theo bản vẽ kỹ thuật. Đáp ứng mọi yêu cầu từ đơn giản đến phức tạp.',
                features: [
                    'Cắt theo bản vẽ CAD/DXF',
                    'Độ chính xác cao, bề mặt cắt đẹp',
                    'Tốc độ nhanh, hiệu quả cao',
                    'Giá cả cạnh tranh'
                ],
                buttonText: 'Yêu cầu báo giá'
            },
            process: {
                title: 'Quy trình làm việc',
                subtitle: 'Quy trình chuyên nghiệp, minh bạch từ tư vấn đến giao hàng',
                steps: [
                    { step: '01', title: 'Tiếp nhận yêu cầu', desc: 'Lắng nghe và ghi nhận nhu cầu của khách hàng' },
                    { step: '02', title: 'Tư vấn & Báo giá', desc: 'Tư vấn giải pháp và báo giá chi tiết' },
                    { step: '03', title: 'Gia công sản xuất', desc: 'Tiến hành gia công theo yêu cầu' },
                    { step: '04', title: 'Kiểm tra & Giao hàng', desc: 'Kiểm tra chất lượng và giao hàng' }
                ]
            },
            cta: {
                title: 'Cần dịch vụ gia công inox chuyên nghiệp?',
                subtitle: 'Liên hệ ngay với chúng tôi để được tư vấn và báo giá chi tiết',
                buttonText: 'Liên hệ ngay'
            }
        },
        projectsPage: {
            title: 'Dự Án Tiêu Biểu',
            hero: {
                title: 'Dự án',
                highlight: 'Tiêu biểu',
                subtitle: 'Những dự án tiêu biểu của Kha Hoàng Minh'
            },
            projectsSection: {
                title: 'Các dự án đã thực hiện',
                subtitle: 'Với Kha Hoàng Minh phục vụ khách hàng tận tình, chu đáo luôn là những tiêu chí hàng đầu',
                list: [
                    {
                        title: 'Sản phẩm gia công cắt CNC PLASMA',
                        image: 'http://khahoangminh.com.vn/upload/news/Sa%CC%89n%20pha%CC%82%CC%89m%20gia%20co%CC%82ng%20ca%CC%86%CC%81t%20CNC%20PLASMA%205.jpg',
                        description: 'Gia công cắt CNC Plasma cho các chi tiết inox theo bản vẽ kỹ thuật'
                    },
                    {
                        title: 'Bồn công nghiệp CH007',
                        image: 'http://khahoangminh.com.vn/upload/news/dde8a7540501e05fb910.jpg',
                        description: 'Sản xuất bồn công nghiệp inox 304 với dung tích lớn'
                    },
                    {
                        title: 'Bồn inox 304',
                        image: 'http://khahoangminh.com.vn/upload/news/e5897e13dc4639186057.jpg',
                        description: 'Bồn chứa inox 304 chất lượng cao cho công nghiệp thực phẩm'
                    }
                ],
                viewDetails: 'Xem chi tiết'
            },
            imagesSection: {
                title: 'Hình ảnh',
                highlight: 'Công ty',
                subtitle: 'Hệ thống cơ sở vật chất và đội ngũ nhân viên chuyên nghiệp',
                list: [
                    {
                        title: 'Kho bãi rộng rãi',
                        image: 'http://khahoangminh.com.vn/upload/news/co%CC%82ng%20ty%20inox%20kha%20hoa%CC%80ng%20minh%201.jpg'
                    },
                    {
                        title: 'Trang thiết bị hiện đại',
                        image: 'http://khahoangminh.com.vn/upload/news/co%CC%82ng%20ty%20inox%20kha%20hoa%CC%80ng%20minh%203.jpg'
                    },
                    {
                        title: 'Quy trình sản xuất',
                        image: 'http://khahoangminh.com.vn/upload/news/co%CC%82ng%20ty%20inox%20kha%20hoa%CC%80ng%20minh%204.jpg'
                    },
                    {
                        title: 'Đội ngũ nhân viên',
                        image: 'http://khahoangminh.com.vn/upload/news/co%CC%82ng%20ty%20inox%20kha%20hoa%CC%80ng%20minh%202.jpg'
                    }
                ]
            },
            capabilitiesSection: {
                title: 'Năng lực thực hiện',
                completedProjects: {
                    title: 'Dự án đã thực hiện',
                    list: [
                        'Cung cấp inox cho các dự án xây dựng lớn',
                        'Gia công chi tiết inox theo bản vẽ',
                        'Sản xuất bồn chứa công nghiệp',
                        'Cung cấp ống và phụ kiện cho hệ thống đường ống'
                    ]
                },
                typicalClients: {
                    title: 'Khách hàng tiêu biểu',
                    list: [
                        'Các nhà thầu xây dựng lớn',
                        'Nhà máy sản xuất thực phẩm',
                        'Doanh nghiệp sản xuất công nghiệp',
                        'Đơn vị thi công cơ điện'
                    ]
                }
            },
            cta: {
                title: 'Bạn có dự án cần tư vấn?',
                subtitle: 'Hãy để chúng tôi đồng hành cùng bạn trong dự án của mình',
                buttonText: 'Liên hệ tư vấn'
            }
        },
        videosPage: {
            title: 'Thư Viện Video',
            hero: {
                title: 'Video',
                highlight: 'Giới Thiệu',
                subtitle: 'Tìm hiểu thêm về sản phẩm và dịch vụ của chúng tôi qua video'
            },
            content: {
                title: 'Video đang được cập nhật',
                description: 'Chúng tôi đang chuẩn bị các video giới thiệu về sản phẩm, dịch vụ và quy trình sản xuất. Vui lòng quay lại sau hoặc liên hệ trực tiếp để biết thêm chi tiết.',
                hotline: 'Hotline',
                facebook: 'Ghé thăm Facebook',
                contact: 'Liên hệ tư vấn'
            }
        },
        careersPage: {
            title: 'Tuyển Dụng',
            hero: {
                title: 'Tuyển dụng &',
                highlight: 'Cơ hội nghề nghiệp',
                subtitle: 'Gia nhập đội ngũ Kha Hoàng Minh - Nơi bạn phát triển sự nghiệp'
            },
            benefits: {
                title: 'Tại sao làm việc tại',
                highlight: 'Kha Hoàng Minh?',
                subtitle: 'Chúng tôi không chỉ tìm kiếm nhân viên, mà tìm kiếm những đối tác đồng hành lâu dài',
                items: {
                    growth: 'Cơ hội phát triển',
                    growthDesc: 'Môi trường làm việc năng động, nhiều cơ hội thăng tiến',
                    welfare: 'Chế độ đãi ngộ',
                    welfareDesc: 'Lương thưởng cạnh tranh, đầy đủ chế độ BHXH, BHYT',
                    colleagues: 'Đồng nghiệp thân thiện',
                    colleaguesDesc: 'Văn hóa doanh nghiệp tích cực, đồng đội hỗ trợ nhiệt tình',
                    training: 'Đào tạo & Phát triển',
                    trainingDesc: 'Được đào tạo kỹ năng chuyên môn và phát triển nghề nghiệp'
                }
            },
            openings: {
                title: 'Vị trí đang tuyển',
                emptyTitle: 'Hiện chúng tôi đang cập nhật các vị trí tuyển dụng',
                emptyDesc: 'Nếu bạn quan tâm đến cơ hội làm việc tại Kha Hoàng Minh, vui lòng gửi CV của bạn về email hoặc liên hệ trực tiếp với chúng tôi. Chúng tôi luôn chào đón những ứng viên tài năng và nhiệt huyết.',
                sendCv: 'Gửi CV ngay',
                contact: 'Liên hệ tư vấn'
            },
            culture: {
                title: 'Văn hóa',
                highlight: 'Doanh nghiệp',
                description: 'Tại Kha Hoàng Minh, chúng tôi xây dựng một môi trường làm việc chuyên nghiệp, thân thiện, nơi mọi người có thể phát huy tối đa năng lực của mình.',
                list: [
                    'Tôn trọng và tin tưởng lẫn nhau',
                    'Làm việc theo tinh thần đội nhóm',
                    'Khuyến khích sáng tạo và đổi mới',
                    'Cam kết phát triển bền vững'
                ]
            }
        },
        newsPage: {
            title: 'Tin Tức & Sự Kiện',
            hero: {
                title: 'Tin tức &',
                highlight: 'Sự kiện',
                subtitle: 'Cập nhật những tin tức mới nhất từ Kha Hoàng Minh'
            },
            list: [
                {
                    title: 'Kha Hoàng Minh mở rộng kho bãi tại TP.HCM',
                    date: '15/01/2025',
                    image: 'http://khahoangminh.com.vn/upload/news/co%CC%82ng%20ty%20inox%20kha%20hoa%CC%80ng%20minh%201.jpg',
                    excerpt: 'Nhằm đáp ứng nhu cầu ngày càng tăng của khách hàng, Kha Hoàng Minh đã mở rộng kho bãi với diện tích gấp đôi.'
                },
                {
                    title: 'Ra mắt dịch vụ gia công CNC Plasma',
                    date: '10/01/2025',
                    image: 'http://khahoangminh.com.vn/upload/news/Sa%CC%89n%20pha%CC%82%CC%89m%20gia%20co%CC%82ng%20ca%CC%86%CC%81t%20CNC%20PLASMA%205.jpg',
                    excerpt: 'Đầu tư máy móc hiện đại, Kha Hoàng Minh cung cấp dịch vụ cắt CNC Plasma chính xác cao.'
                },
                {
                    title: 'Đối tác cung cấp inox cho dự án lớn',
                    date: '05/01/2025',
                    image: 'http://khahoangminh.com.vn/upload/news/co%CC%82ng%20ty%20inox%20kha%20hoa%CC%80ng%20minh%203.jpg',
                    excerpt: 'Kha Hoàng Minh vinh dự được chọn là nhà cung cấp inox cho một trong những dự án xây dựng lớn nhất khu vực.'
                }
            ],
            readMore: 'Đọc thêm',
            footer: {
                text: 'Các tin tức khác đang được cập nhật. Vui lòng quay lại sau hoặc theo dõi chúng tôi trên',
                linkText: 'Facebook'
            }
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
            errors: {
                nameRequired: 'Tên phải có ít nhất 2 ký tự.',
                phoneInvalid: 'Số điện thoại không hợp lệ.',
                emailInvalid: 'Vui lòng nhập địa chỉ email hợp lệ.',
                messageRequired: 'Nội dung phải có ít nhất 10 ký tự.'
            },
            button: 'Gửi yêu cầu',
            sending: 'Đang gửi...',
            sendError: 'Không thể gửi tin nhắn. Vui lòng thử lại sau hoặc liên hệ trực tiếp qua hotline.',
            successMessage: 'Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.',
            infoTitle: 'Thông tin liên hệ',
            infoAddress: 'Địa chỉ',
            infoPhone: 'Điện thoại',
            infoEmail: 'Email',
            infoHours: 'Giờ làm việc',
            workingHoursText1: 'Thứ 2 - Thứ 6: 8:00 - 17:00',
            workingHoursText2:'Thứ 7: 8:00 - 12:00',
            supportTitle: 'Hỗ trợ khách hàng',
            socialLabel: 'Mạng xã hội',
            socialConnect: 'Kết nối với chúng tôi',
            directSupportLabel: 'Hỗ trợ',
            directSupportTitle: 'Liên Hệ Trực Tiếp',
            directSupportSubtitle: 'Gửi yêu cầu trực tiếp'
        },
        pageNotFound: {
            badge: 'Lỗi 404 • Không Tìm Thấy Trang',
            subtitle: 'Không tìm thấy trang',
            descStart: 'Chúng tôi không thể tìm thấy trang',
            descEnd: 'Đường dẫn có thể đã bị thay đổi, xóa hoặc tạm thời không khả dụng.',
            backButton: 'Quay lại',
            homeButton: 'Về trang chủ',
            quoteButton: 'Liên hệ báo giá',
            hotlineText: 'Hotline hỗ trợ',
            quickLinksTitle: 'Danh mục truy cập nhanh',
            links: {
                home: 'Quay về trang chính',
                products: 'Inox & Thép không gỉ',
                services: 'Gia công CNC & Laser',
                projects: 'Dự án đã thực hiện',
                about: 'Năng lực doanh nghiệp',
                careers: 'Cơ hội nghề nghiệp',
                contact: 'Yêu cầu báo giá nhanh'
            }
        },
        protectionPage: {
            hero: {
                badge: "Tuân Thủ Doanh Nghiệp",
                title1: "Chính Sách Bảo Vệ",
                title2: "Dữ Liệu Cá Nhân",
                desc: "Khuôn khổ toàn diện của chúng tôi nhằm đảm bảo an ninh, tính bảo mật và tính toàn vẹn của tất cả dữ liệu cá nhân được giao phó cho Kha Hoàng Minh."
            },
            principles: {
                p1: { title: "Hợp Pháp & Công Bằng", desc: "Chúng tôi xử lý dữ liệu cá nhân một cách hợp pháp, công bằng và minh bạch." },
                p2: { title: "Giới Hạn Mục Đích", desc: "Dữ liệu được thu thập cho các mục đích cụ thể, rõ ràng và hợp pháp." },
                p3: { title: "Toàn Vẹn & Bảo Mật", desc: "Chúng tôi đảm bảo an toàn thích hợp cho dữ liệu cá nhân." }
            },
            preamble: {
                title: "Tuyên Bố Cam Kết",
                text: "<strong>Kha Hoàng Minh</strong> cam kết tuân thủ tất cả các luật và quy định hiện hành về bảo vệ dữ liệu. Chúng tôi nhận thức rằng bảo vệ Dữ Liệu Cá Nhân là một trách nhiệm cơ bản. Chính sách này phác thảo các biện pháp kỹ thuật và tổ chức mà chúng tôi đã thực hiện để đảm bảo mức độ bảo mật cao nhất cho khách hàng, nhân viên và đối tác."
            },
            sections: {
                s1: {
                    title: "1. Phạm Vi Áp Dụng",
                    text: "Chính sách này áp dụng cho tất cả Dữ Liệu Cá Nhân do Kha Hoàng Minh xử lý dưới định dạng vật lý hoặc điện tử. Nó áp dụng cho tất cả nhân viên, nhà thầu và các nhà cung cấp dịch vụ bên thứ ba hành động thay mặt chúng tôi."
                },
                s2: {
                    title: "2. Tiêu Chuẩn Xử Lý Dữ Liệu",
                    text: "Chúng tôi tuân thủ các tiêu chuẩn nghiêm ngặt khi xử lý dữ liệu:",
                    items: [
                        "Dữ liệu chỉ được thu thập cho các mục đích kinh doanh cụ thể.",
                        "Độ chính xác của dữ liệu được duy trì thông qua các bản cập nhật thường xuyên.",
                        "Dữ liệu chỉ được lưu giữ trong thời gian cần thiết cho mục đích đó.",
                        "Các biện pháp kỹ thuật (Mã hóa, Tường lửa) là tiêu chuẩn."
                    ]
                },
                s3: {
                    title: "3. Chuyển Giao Cho Bên Thứ Ba",
                    text: "Chúng tôi không chuyển giao Dữ Liệu Cá Nhân cho bên thứ ba trừ khi cần thiết để thực hiện dịch vụ hoặc tuân thủ pháp luật. Tất cả các bên thứ ba đều được kiểm tra về việc tuân thủ bảo vệ dữ liệu của chính họ."
                }
            },
            breach: {
                title: "Giao Thức Xử Lý Vi Phạm",
                text: "Trong trường hợp không mong muốn xảy ra vi phạm dữ liệu, Kha Hoàng Minh đã thành lập một đội phản ứng nhanh để ngăn chặn vi phạm, đánh giá tác động và thông báo cho các cá nhân bị ảnh hưởng cũng như các cơ quan có thẩm quyền trong vòng 72 giờ, theo luật định hiện hành."
            },
            contact: {
                title: "Nhân Viên Bảo Vệ Dữ Liệu",
                desc: "Mọi thắc mắc liên quan đến dữ liệu cá nhân của bạn hoặc để thực hiện các quyền của mình, vui lòng liên hệ với bộ phận phụ trách của chúng tôi",
                office: "Văn Phòng Kha Hoàng Minh",
                address: "Số 93/16 Đường Nguyễn Thị Tú, KP. 3, P. Bình Hưng Hòa B, Q. Bình Tân, TP. HCM",
                department: "Phòng Bảo Mật",
                button: "Yêu Cầu Truy Cập Dữ Liệu"
            },
            related: {
                title: "Tài Liệu Liên Quan",
                privacy: "Chính Sách Quyền Riêng Tư",
                terms: "Điều Khoản Dịch Vụ"
            }
        },
        privacyPolicyPage: {
            hero: {
                badge: "Tài Liệu Pháp Lý",
                title1: "Chính Sách",
                title2: "Quyền Riêng Tư",
                updated: "Cập nhật lần cuối: Tháng 2 năm 2026"
            },
            toc: {
                title: "Mục Lục",
                intro: "1. Giới Thiệu",
                collection: "2. Thông Tin Thu Thập",
                usage: "3. Cách Sử Dụng Thông Tin",
                cookies: "4. Cookie & Theo Dõi",
                sharing: "5. Chia Sẻ Dữ Liệu",
                security: "6. Bảo Mật Dữ Liệu",
                rights: "7. Quyền Của Bạn",
                contact: "8. Liên Hệ",
            },
            intro: {
                title: "Giới Thiệu",
                text1: "Chào mừng bạn đến với Chính sách Quyền riêng tư của <strong>Kha Hoàng Minh</strong>. Chúng tôi tôn trọng quyền riêng tư của bạn và cam kết bảo vệ dữ liệu cá nhân của bạn. Chính sách này sẽ thông báo cho bạn về cách chúng tôi xử lý dữ liệu cá nhân khi bạn truy cập trang web của chúng tôi, quyền riêng tư của bạn và cách luật pháp bảo vệ bạn.",
                text2: "Chính sách này áp dụng cho tất cả khách truy cập, người dùng và những người khác truy cập hoặc sử dụng Dịch vụ của chúng tôi."
            },
            collection: {
                title: "Thông Tin Chúng Tôi Thu Thập",
                personalTitle: "Dữ Liệu Cá Nhân",
                personalText: "Trong khi sử dụng Dịch vụ của chúng tôi, chúng tôi có thể yêu cầu bạn cung cấp cho chúng tôi một số thông tin nhận dạng cá nhân nhất định, bao gồm nhưng không giới hạn ở:",
                personalList: ['Địa chỉ Email', 'Họ và tên', 'Số điện thoại', 'Địa chỉ doanh nghiệp'],
                usageTitle: "Dữ Liệu Sử Dụng",
                usageText: "Chúng tôi cũng có thể thu thập thông tin về cách Dịch vụ được truy cập và sử dụng. Dữ liệu Sử dụng này có thể bao gồm các thông tin như địa chỉ Giao thức Internet (ví dụ: địa chỉ IP), loại trình duyệt, phiên bản trình duyệt, các trang trong Dịch vụ của chúng tôi mà bạn truy cập, thời gian và ngày bạn truy cập, thời gian dành cho các trang đó, số nhận dạng thiết bị duy nhất và các dữ liệu chẩn đoán khác."
            },
            usage: {
                title: "Cách Chúng Tôi Sử Dụng Thông Tin",
                text: "Kha Hoàng Minh sử dụng dữ liệu được thu thập cho các mục đích khác nhau:",
                list: [
                    'Để cung cấp và duy trì Dịch vụ',
                    'Để thông báo cho bạn về các thay đổi đối với Dịch vụ của chúng tôi',
                    'Để cung cấp chăm sóc và hỗ trợ khách hàng',
                    'Để cung cấp phân tích hoặc thông tin có giá trị để chúng tôi có thể cải thiện Dịch vụ',
                    'Để giám sát việc sử dụng Dịch vụ',
                    'Để phát hiện, ngăn chặn và giải quyết các vấn đề kỹ thuật'
                ]
            },
            cookies: {
                title: "Cookie & Theo Dõi",
                text1: "Chúng tôi sử dụng cookie và các công nghệ theo dõi tương tự để theo dõi hoạt động trên Dịch vụ của chúng tôi và lưu giữ một số thông tin nhất định. Cookie là các tệp chứa một lượng nhỏ dữ liệu có thể bao gồm mã định danh ẩn danh duy nhất.",
                text2: "Bạn có thể hướng dẫn trình duyệt của mình từ chối tất cả cookie hoặc cho biết khi nào cookie đang được gửi. Tuy nhiên, nếu bạn không chấp nhận cookie, bạn có thể không sử dụng được một số phần trong Dịch vụ của chúng tôi."
            },
            sharing: {
                title: "Chia Sẻ Dữ Liệu",
                text: "Chúng tôi không bán, trao đổi hoặc chuyển giao cho các bên thứ ba Thông tin Nhận dạng Cá nhân của bạn trừ khi chúng tôi cung cấp cho người dùng thông báo trước. Điều này không bao gồm các đối tác lưu trữ trang web và các bên khác hỗ trợ chúng tôi vận hành trang web, tiến hành kinh doanh hoặc phục vụ người dùng của chúng tôi, miễn là các bên đó đồng ý giữ bí mật thông tin này."
            },
            security: {
                title: "Bảo Mật Dữ Liệu",
                text: "Bảo mật dữ liệu của bạn rất quan trọng đối với chúng tôi, nhưng hãy nhớ rằng không có phương thức truyền tải qua Internet hoặc phương thức lưu trữ điện tử nào an toàn 100%. Mặc dù chúng tôi cố gắng sử dụng các phương tiện được chấp nhận về mặt thương mại để bảo vệ Dữ liệu Cá nhân của bạn, nhưng chúng tôi không thể đảm bảo an ninh tuyệt đối.",
                sslTitle: "Mã Hóa SSL",
                sslDesc: "Truyền dữ liệu được bảo mật",
                storageTitle: "Lưu Trữ An Toàn",
                storageDesc: "Cơ sở hạ tầng cơ sở dữ liệu được bảo vệ"
            },
            rights: {
                title: "Quyền Của Bạn",
                text: "Bạn có quyền yêu cầu truy cập vào dữ liệu cá nhân của mình, yêu cầu sửa đổi và yêu cầu xóa dữ liệu cá nhân của mình.",
                button: "Gửi Yêu Cầu Dữ Liệu"
            },
            contact: {
                title: "Liên Hệ",
                text: "Nếu bạn có bất kỳ câu hỏi nào về Chính sách Quyền riêng tư này, vui lòng liên hệ với chúng tôi:",
                linkText: "Truy cập Trang Liên Hệ"
            }
        },
        termsOfServicePage: {
            hero: {
                badge: "Tài Liệu Pháp Lý",
                title1: "Điều Khoản",
                title2: "Dịch Vụ",
                updated: "Ngày có hiệu lực: Tháng 2 năm 2026"
            },
            toc: {
                title: "Mục Lục",
                acceptance: "1. Chấp nhận Điều khoản",
                changes: "2. Thay đổi Điều khoản",
                usage: "3. Hành vi Người dùng",
                products: "4. Thông tin Sản phẩm",
                ip: "5. Sở hữu Trí tuệ",
                liability: "6. Giới hạn Trách nhiệm",
                law: "7. Luật Điều chỉnh",
                termination: "8. Chấm dứt"
            },
            acceptance: {
                title: "Chấp nhận Điều khoản",
                text: "Bằng việc truy cập và sử dụng trang web của <strong>Công ty TNHH Kha Hoàng Minh</strong>, bạn chấp nhận và đồng ý tuân ràng buộc bởi các điều khoản và quy định của thỏa thuận này. Ngoài ra, khi sử dụng các dịch vụ cụ thể này, bạn sẽ phải tuân thủ mọi nguyên tắc hoặc quy tắc được đăng tải áp dụng cho các dịch vụ đó.",
                note: "Nếu bạn không đồng ý tuân thủ những điều trên, vui lòng không sử dụng dịch vụ này."
            },
            changes: {
                title: "Thay đổi Điều khoản",
                text: "Chúng tôi có quyền cập nhật hoặc sửa đổi các Điều khoản Dịch vụ này bất kỳ lúc nào mà không cần thông báo trước. Việc bạn tiếp tục sử dụng Trang web sau mọi thay đổi cho thấy bạn đồng ý tuân ràng buộc bởi các Điều khoản Dịch vụ mới. Chúng tôi khuyến khích bạn xem xét các Điều khoản này định kỳ."
            },
            usage: {
                title: "Hành vi Người dùng",
                text: "Bạn đồng ý chỉ sử dụng Trang web cho các mục đích hợp pháp. Bạn bị cấm đăng hoặc truyền đến hoặc từ Trang web này bất kỳ:",
                list: [
                    "Tài liệu bất hợp pháp, đe dọa hoặc phỉ báng",
                    "Tài liệu có thể cấu thành tội phạm",
                    "Virus, phần mềm độc hại hoặc mã độc",
                    "Thư rác, thư dây chuyền hoặc email không mong muốn",
                    "Cố gắng vi phạm bảo mật trang web",
                    "Công cụ khai thác hoặc thu thập dữ liệu"
                ]
            },
            products: {
                title: "Thông tin Sản phẩm",
                text1: "Chúng tôi cố gắng cung cấp thông tin chính xác nhất có thể về mô tả sản phẩm, thông số kỹ thuật (mác thép, kích thước) và giá cả. Tuy nhiên, chúng tôi không đảm bảo rằng mô tả sản phẩm hoặc nội dung khác của trang web này là chính xác, đầy đủ, đáng tin cậy, cập nhật hoặc không có lỗi.",
                text2: "Các thông số kỹ thuật cho các sản phẩm thép (304, 316, v.v.) chỉ được cung cấp để tham khảo. Đối với các ứng dụng kỹ thuật quan trọng, vui lòng tham khảo trực tiếp với đội ngũ kỹ thuật của chúng tôi."
            },
            ip: {
                title: "Sở hữu Trí tuệ",
                text: "Trang web và nội dung, tính năng và chức năng ban đầu của nó thuộc sở hữu của Công ty TNHH Kha Hoàng Minh và được bảo vệ bởi bản quyền quốc tế, nhãn hiệu, bằng sáng chế, bí mật thương mại và các luật về sở hữu trí tuệ hoặc quyền sở hữu khác."
            },
            liability: {
                title: "Giới hạn Trách nhiệm",
                disclaimer: "Tuyên bố từ chối trách nhiệm \"Nguyên trạng\" và \"Tùy theo khả năng cung cấp\"",
                text: "Trong mọi trường hợp, Kha Hoàng Minh, cũng như các giám đốc, nhân viên, đối tác, đại lý, nhà cung cấp hoặc chi nhánh của công ty, sẽ không chịu trách nhiệm đối với bất kỳ thiệt hại gián tiếp, ngẫu nhiên, đặc biệt, hậu quả hoặc trừng phạt nào, bao gồm nhưng không giới hạn ở việc mất lợi nhuận, dữ liệu, sử dụng, thiện chí hoặc các tổn thất vô hình khác, do việc bạn truy cập hoặc sử dụng hoặc không thể truy cập hoặc sử dụng Dịch vụ."
            },
            law: {
                title: "Luật Điều chỉnh",
                text: "Các Điều khoản này sẽ được điều chỉnh và hiểu theo luật pháp của <strong>Việt Nam</strong>, không tính đến các điều khoản xung đột pháp luật của nó. Việc chúng tôi không thực thi bất kỳ quyền hoặc điều khoản nào của các Điều khoản này sẽ không được coi là từ bỏ những quyền đó."
            },
            termination: {
                title: "Chấm dứt",
                text: "Chúng tôi có thể chấm dứt hoặc đình chỉ quyền truy cập vào Dịch vụ của chúng tôi ngay lập tức, không cần thông báo hoặc chịu trách nhiệm pháp lý trước, vì bất kỳ lý do gì, bao gồm nhưng không giới hạn nếu bạn vi phạm Điều khoản."
            },
            contact: {
                title: "Có câu hỏi về các Điều khoản này?",
                desc: "Đội ngũ pháp lý của chúng tôi sẵn sàng giải đáp.",
                button: "Liên Hệ Chúng Tôi"
            }
        }
    },

    en: {
        /* --- 1. HEADER & NAVIGATION --- */
        nav: {
            home: 'HOME',
            about: 'ABOUT',
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
            addressText: '93/16 Nguyen Thi Tu Street, Quarter 3, Binh Hung Hoa B Ward, Binh Tan District, Ho Chi Minh City, Vietnam',
            receiptNumber: 'Tax Code: 0314059766 (Issued on Oct 12th, 2016)',
            copyright: 'All rights reserved',
            followUs: 'FOLLOW US',
            protection: 'Personal data protection',
            privacy: 'Privacy policy',
            terms: 'Terms of service',
        },

        events: {
            specialEventTag: 'Special Event',
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
            continueToSite: 'Continue to Site',
        },

        /* --- 4. PAGES --- */
        homePage: {
            trustedBy: 'Trusted by Top-Tier Partners & Clients',
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
            hero: {
                title: 'About Us',
                subtitle: 'Kha Hoang Minh',
                description: 'Reliable partner in the field of stainless steel supply in Vietnam'
            },
            info: {
                established: 'Established in 2016',
                fullName: 'Kha Hoang Minh Co., Ltd',
                intro1: 'was established in 2016 with the main business line of direct import and export of stainless steel.',
                intro2: 'We are proud to be a strategic partner of many large stainless steel manufacturers in the world, committed to bringing customers the best quality products at competitive prices.',
                motto: '"Prestige is first, Quality is forever"',
                mottoDesc: 'This is the guideline for all our business activities.',
                thankYou: 'We sincerely thank our customers for trusting and accompanying Kha Hoang Minh!'
            },
            values: {
                title: 'Core Values',
                description: 'The principles that shape our culture and the way we work',
                items: {
                    reputation: 'Top Reputation',
                    reputationDesc: 'Always keep commitments with customers and partners',
                    quality: 'Sustainable Quality',
                    qualityDesc: 'Products meet international standards, clear origin',
                    team: 'Professional Team',
                    teamDesc: 'Technically savvy, dedicated support',
                    facilities: 'Facilities',
                    facilitiesDesc: 'Modern warehouses, large inventory reserves'
                }
            },
            scope: {
                title: 'Business Scope',
                products: {
                    title: 'Main Products',
                    list: [
                        'Stainless Steel Coils - 304, 316, 430, 201',
                        'Stainless Steel Sheets - 2B, BA, HL, No.1',
                        'Stainless Steel Pipes - Industrial & Decorative',
                        'Stainless Steel Fittings - Elbows, tees, flanges, valves'
                    ]
                },
                services: {
                    title: 'Processing Services',
                    list: [
                        'Slitting and cutting sheets to required sizes',
                        'Surface polishing (Hairline, Mirror)',
                        'Bending and stamping stainless steel shapes',
                        'Transportation and door-to-door delivery'
                    ]
                }
            },
            cta: {
                title: 'Become Our Partner',
                description: 'Kha Hoang Minh always welcomes opportunities to cooperate with agents, contractors and enterprises nationwide.',
            }
        },
        productsPage: {
            title: 'Our Products',
            hero: {
                title: 'Stainless Steel',
                highlight: 'Products',
                subtitle: 'Providing a full range of stainless steel sheets, coils, and pipes with diverse designs'
            },
            tabDescStart: 'Kha Hoang Minh Stainless Steel Company specializes in trading and supplying high-quality, competitively priced',
            tabDescEnd: 'products.',
            buttonQuote: 'Request Quote',
            searchPlaceholder: 'Search products...',
            noResultsTitle: 'No products found',
            noResultsDesc: 'Sorry, no products match your search keywords.',
            clearSearch: 'Clear search',
            contact: {
                title: 'Contact for Consultation and Quote',
                subtitle: 'Our team of experts is ready to support you',
                buttonText: 'Contact Now'
            },
            categoriesData: [
                {
                    id: 'cuon',
                    name: 'STAINLESS STEEL COILS',
                    image: 'http://khahoangminh.com.vn/upload/sanpham/cu%E1%BB%99n%20inox.jpg',
                    products: [
                        { name: '304 STAINLESS STEEL COIL 2B SURFACE', image: 'http://khahoangminh.com.vn/upload/sanpham/cu%E1%BB%99n%20inox.jpg', description: 'Width from 35mm to 1548mm, thickness from 0.3mm to 20mm+' },
                        { name: '304 STAINLESS STEEL COIL NO1 SURFACE', image: 'http://khahoangminh.com.vn/upload/sanpham/cuon-inox-316.jpg', description: 'Diverse surfaces No.1/1D / 2D/2B/ BA / No.3 / No.4 / HL' },
                        { name: '430 STAINLESS STEEL COIL BA SURFACE', image: 'http://khahoangminh.com.vn/upload/sanpham/cuon-inox-430-ba_738.jpg', description: 'Length from 1 – 6m+, high quality' }
                    ]
                },
                {
                    id: 'tam',
                    name: 'STAINLESS STEEL SHEETS',
                    image: 'http://khahoangminh.com.vn/upload/sanpham/t%E1%BA%A5m%20inox%202b.jpg',
                    products: [
                        { name: '304 STAINLESS STEEL SHEET', image: 'http://khahoangminh.com.vn/upload/sanpham/t%E1%BA%A5m%20inox%202b.jpg', description: 'High quality 304 stainless steel sheet, various sizes' },
                        { name: '316 STAINLESS STEEL SHEET', image: 'http://khahoangminh.com.vn/upload/sanpham/t%E1%BA%A5m%20inox%202b.jpg', description: 'Good corrosion resistance, suitable for harsh environments' },
                        { name: '201 STAINLESS STEEL SHEET', image: 'http://khahoangminh.com.vn/upload/sanpham/t%E1%BA%A5m%20inox%202b.jpg', description: 'Reasonable price, stable quality' }
                    ]
                },
                {
                    id: 'ong',
                    name: 'STAINLESS STEEL PIPES',
                    image: 'http://khahoangminh.com.vn/upload/sanpham/O%CC%82%CC%81NG%20INOX.jpg',
                    products: [
                        { name: 'INDUSTRIAL STAINLESS STEEL PIPE', image: 'http://khahoangminh.com.vn/upload/sanpham/O%CC%82%CC%81NG%20INOX.jpg', description: '304, 316 stainless steel pipes with various diameters' },
                        { name: 'DECORATIVE STAINLESS STEEL PIPE', image: 'http://khahoangminh.com.vn/upload/sanpham/o%CC%82%CC%81ng%20trang%20tri%CC%81%20inox.jpg', description: 'Beautiful surface, high gloss' },
                        { name: 'STAINLESS STEEL SQUARE TUBE', image: 'http://khahoangminh.com.vn/upload/sanpham/ho%CC%A3%CC%82p%20vuo%CC%82ng%20inox.jpg', description: 'Stainless steel square tubes in all sizes' }
                    ]
                },
                {
                    id: 'phukien',
                    name: 'STAINLESS STEEL ACCESSORIES',
                    image: 'http://khahoangminh.com.vn/upload/sanpham/phu%CC%A3%20kie%CC%A3%CC%82n%20inox%20kha%20hoang%20minh.jpg',
                    products: [
                        { name: 'PIPE FITTINGS', image: 'http://khahoangminh.com.vn/upload/sanpham/phu%CC%A3%20kie%CC%A3%CC%82n%20inox%20kha%20hoang%20minh.jpg', description: 'Stainless steel elbows, tees, couplings, valves' },
                        { name: 'STAINLESS STEEL SOLID ROUND BAR', image: 'http://khahoangminh.com.vn/upload/sanpham/LA%CC%81P%20%C4%90A%CC%A3%CC%86C%20INOX.jpg', description: 'Various types of stainless steel solid round bars' },
                        { name: 'STAINLESS STEEL ANGLE & FLAT BAR', image: 'http://khahoangminh.com.vn/upload/sanpham/thanh%20ve%CC%82%20inox.jpg', description: 'High-quality stainless steel angle and flat bars' }
                    ]
                },
                {
                    id: 'giacong',
                    name: 'FABRICATED PRODUCTS',
                    image: 'http://khahoangminh.com.vn/upload/sanpham/Sa%CC%89n%20pha%CC%82%CC%89m%20gia%20co%CC%82ng%20ca%CC%86%CC%81t%20CNC%20PLASMA%205.jpg',
                    products: [
                        { name: 'CNC PLASMA CUTTING', image: 'http://khahoangminh.com.vn/upload/sanpham/Sa%CC%89n%20pha%CC%82%CC%89m%20gia%20co%CC%82ng%20ca%CC%86%CC%81t%20CNC%20PLASMA%205.jpg', description: 'CNC cutting according to drawings, high precision' }
                    ]
                }
            ]
        },
        servicesPage: {
            title: 'Processing Services',
            hero: {
                title: 'Processing',
                highlight: 'Services',
                subtitle: 'Providing professional, high-quality stainless steel processing services'
            },
            servicesList: {
                title: 'Our Services',
                subtitle: 'Diverse services from processing, consulting to transportation and support',
                items: [
                    {
                        title: 'CNC Plasma Cutting',
                        description: 'Cutting according to technical drawings with high precision and modern machinery',
                        features: ['Precise CNC Plasma cutting', 'According to technical drawings', 'Fast speed', 'Competitive price']
                    },
                    {
                        title: 'Custom Cutting',
                        description: 'Cutting stainless steel sheets and coils according to customer required size',
                        features: ['Accurate sizing', 'Beautiful flat surface', 'Fast delivery', 'Quality commitment']
                    },
                    {
                        title: 'Nationwide Delivery',
                        description: 'Nationwide transportation and door-to-door delivery',
                        features: ['Fast delivery', 'Careful packaging', 'Order tracking', 'Goods insurance']
                    },
                    {
                        title: 'Technical Consulting',
                        description: 'Experienced engineering team consulting optimal solutions',
                        features: ['Professional consulting', 'Optimal solutions', '24/7 Support', 'Enthusiastic, dedicated']
                    },
                    {
                        title: 'Quality Control',
                        description: 'Strict quality inspection before delivery',
                        features: ['International standards', 'Thorough inspection', 'CO, CQ certification', 'Quality commitment']
                    },
                    {
                        title: 'Warranty - Support',
                        description: 'Thoughtful warranty and after-sales support',
                        features: ['Product warranty', 'Flexible return', 'Technical support', 'Customer care']
                    }
                ]
            },
            featured: {
                badge: 'Featured Service',
                title: 'Cutting Processing',
                highlight: 'CNC Plasma',
                description: 'With modern CNC Plasma machines, we provide accurate stainless steel cutting services according to technical drawings. Meeting all requirements from simple to complex.',
                features: [
                    'Cutting according to CAD/DXF drawings',
                    'High accuracy, beautiful cutting surface',
                    'Fast speed, high efficiency',
                    'Competitive price'
                ],
                buttonText: 'Request a Quote'
            },
            process: {
                title: 'Working Process',
                subtitle: 'Professional, transparent process from consultation to delivery',
                steps: [
                    { step: '01', title: 'Receive Request', desc: 'Listen and record customer needs' },
                    { step: '02', title: 'Consulting & Quoting', desc: 'Consult solutions and provide detailed quotes' },
                    { step: '03', title: 'Manufacturing', desc: 'Process according to requirements' },
                    { step: '04', title: 'Inspect & Deliver', desc: 'Quality inspection and delivery' }
                ]
            },
            cta: {
                title: 'Need professional stainless steel processing services?',
                subtitle: 'Contact us now for detailed advice and quotes',
                buttonText: 'Contact Now'
            }
        },
        projectsPage: {
            title: 'Featured Projects',
            hero: {
                title: 'Featured',
                highlight: 'Projects',
                subtitle: 'Typical projects of Kha Hoang Minh'
            },
            projectsSection: {
                title: 'Completed Projects',
                subtitle: 'With Kha Hoang Minh, serving customers dedicatedly and thoughtfully is always the top criterion',
                list: [
                    {
                        title: 'CNC PLASMA Cutting Products',
                        image: 'http://khahoangminh.com.vn/upload/news/Sa%CC%89n%20pha%CC%82%CC%89m%20gia%20co%CC%82ng%20ca%CC%86%CC%81t%20CNC%20PLASMA%205.jpg',
                        description: 'CNC Plasma cutting for stainless steel parts according to technical drawings'
                    },
                    {
                        title: 'Industrial Tank CH007',
                        image: 'http://khahoangminh.com.vn/upload/news/dde8a7540501e05fb910.jpg',
                        description: 'Manufacturing 304 stainless steel industrial tanks with large capacity'
                    },
                    {
                        title: '304 Stainless Steel Tank',
                        image: 'http://khahoangminh.com.vn/upload/news/e5897e13dc4639186057.jpg',
                        description: 'High-quality 304 stainless steel storage tank for the food industry'
                    }
                ],
                viewDetails: 'View Details'
            },
            imagesSection: {
                title: 'Company',
                highlight: 'Images',
                subtitle: 'Facilities system and professional staff',
                list: [
                    {
                        title: 'Spacious Warehouse',
                        image: 'http://khahoangminh.com.vn/upload/news/co%CC%82ng%20ty%20inox%20kha%20hoa%CC%80ng%20minh%201.jpg'
                    },
                    {
                        title: 'Modern Equipment',
                        image: 'http://khahoangminh.com.vn/upload/news/co%CC%82ng%20ty%20inox%20kha%20hoa%CC%80ng%20minh%203.jpg'
                    },
                    {
                        title: 'Production Process',
                        image: 'http://khahoangminh.com.vn/upload/news/co%CC%82ng%20ty%20inox%20kha%20hoa%CC%80ng%20minh%204.jpg'
                    },
                    {
                        title: 'Our Staff',
                        image: 'http://khahoangminh.com.vn/upload/news/co%CC%82ng%20ty%20inox%20kha%20hoa%CC%80ng%20minh%202.jpg'
                    }
                ]
            },
            capabilitiesSection: {
                title: 'Execution Capability',
                completedProjects: {
                    title: 'Implemented Projects',
                    list: [
                        'Supplying stainless steel for major construction projects',
                        'Machining stainless steel parts according to drawings',
                        'Manufacturing industrial storage tanks',
                        'Supplying pipes and fittings for piping systems'
                    ]
                },
                typicalClients: {
                    title: 'Typical Clients',
                    list: [
                        'Major construction contractors',
                        'Food manufacturing plants',
                        'Industrial manufacturing enterprises',
                        'M&E contractors'
                    ]
                }
            },
            cta: {
                title: 'Do you have a project that needs consulting?',
                subtitle: 'Let us accompany you in your project',
                buttonText: 'Contact for Consultation'
            }
        },
        videosPage: {
            title: 'Video Library',
            hero: {
                title: 'Video',
                highlight: 'Introduction',
                subtitle: 'Learn more about our products and services through videos'
            },
            content: {
                title: 'Videos are being updated',
                description: 'We are preparing introduction videos about products, services and production processes. Please come back later or contact us directly for more details.',
                hotline: 'Hotline',
                facebook: 'Visit Facebook',
                contact: 'Contact for advice'
            }
        },
        careersPage: {
            title: 'Career Opportunities',
            hero: {
                title: 'Recruitment &',
                highlight: 'Career Opportunities',
                subtitle: 'Join Kha Hoang Minh team - Where you develop your career'
            },
            benefits: {
                title: 'Why work at',
                highlight: 'Kha Hoang Minh?',
                subtitle: 'We are not just looking for employees, but looking for long-term partners',
                items: {
                    growth: 'Development Opportunities',
                    growthDesc: 'Dynamic working environment, many promotion opportunities',
                    welfare: 'Welfare Regime',
                    welfareDesc: 'Competitive salary and bonus, full social insurance and health insurance benefits',
                    colleagues: 'Friendly Colleagues',
                    colleaguesDesc: 'Positive corporate culture, enthusiastic team support',
                    training: 'Training & Development',
                    trainingDesc: 'Professional skills training and career development'
                }
            },
            openings: {
                title: 'Open Positions',
                emptyTitle: 'We are currently updating job openings',
                emptyDesc: 'If you are interested in working opportunities at Kha Hoang Minh, please send your CV to our email or contact us directly. We always welcome talented and enthusiastic candidates.',
                sendCv: 'Send CV Now',
                contact: 'Contact for Advice'
            },
            culture: {
                title: 'Corporate',
                highlight: 'Culture',
                description: 'At Kha Hoang Minh, we build a professional and friendly working environment where everyone can maximize their capabilities.',
                list: [
                    'Respect and trust each other',
                    'Work in team spirit',
                    'Encourage creativity and innovation',
                    'Commitment to sustainable development'
                ]
            }
        },
        newsPage: {
            title: 'News & Events',
            hero: {
                title: 'News &',
                highlight: 'Events',
                subtitle: 'Update the latest news from Kha Hoang Minh'
            },
            list: [
                {
                    title: 'Kha Hoang Minh expands warehouse in HCMC',
                    date: '15/01/2025',
                    image: 'http://khahoangminh.com.vn/upload/news/co%CC%82ng%20ty%20inox%20kha%20hoa%CC%80ng%20minh%201.jpg',
                    excerpt: 'To meet the increasing demand of customers, Kha Hoang Minh has expanded the warehouse with double the area.'
                },
                {
                    title: 'Launching CNC Plasma processing service',
                    date: '10/01/2025',
                    image: 'http://khahoangminh.com.vn/upload/news/Sa%CC%89n%20pha%CC%82%CC%89m%20gia%20co%CC%82ng%20ca%CC%86%CC%81t%20CNC%20PLASMA%205.jpg',
                    excerpt: 'Investing in modern machinery, Kha Hoang Minh provides high-precision CNC Plasma cutting services.'
                },
                {
                    title: 'Stainless steel supplier for major projects',
                    date: '05/01/2025',
                    image: 'http://khahoangminh.com.vn/upload/news/co%CC%82ng%20ty%20inox%20kha%20hoa%CC%80ng%20minh%203.jpg',
                    excerpt: 'Kha Hoang Minh is honored to be selected as the stainless steel supplier for one of the largest construction projects in the region.'
                }
            ],
            readMore: 'Read More',
            footer: {
                text: 'Other news is being updated. Please come back later or follow us on',
                linkText: 'Facebook'
            }
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
            errors: {
                nameRequired: 'Name must be at least 2 characters.',
                phoneInvalid: 'Invalid phone number format.',
                emailInvalid: 'Please enter a valid email address.',
                messageRequired: 'Message must be at least 10 characters.'
            },
            button: 'Send Request',
            sending: 'Sending...',
            sendError: 'Failed to send message. Please try again later or contact us directly via hotline.',
            successMessage: 'Thank you for contacting us! We will respond as soon as possible.',
            infoTitle: 'Contact Information',
            infoAddress: 'Address',
            infoPhone: 'Phone',
            infoEmail: 'Email',
            infoHours: 'Working Hours',
            workingHoursText1: 'Mon - Fri: 8:00 - 17:00',
            workingHoursText2: 'Sat: 8:00 - 12:00',
            supportTitle: 'Customer Support',
            socialLabel: 'Social Media',
            socialConnect: 'Connect with us on Facebook',
            directSupportLabel: 'Support',
            directSupportTitle: 'Direct Inquiry',
            directSupportSubtitle: 'Send a direct request'
        },
        pageNotFound: {
            badge: '404 Error • Page Not Found',
            subtitle: 'Page Not Found',
            descStart: 'We could not find the requested page',
            descEnd: 'The link may be outdated, moved, or temporarily unavailable.',
            backButton: 'Go Back',
            homeButton: 'Return Home',
            quoteButton: 'Request a Quote',
            hotlineText: 'Support Hotline',
            quickLinksTitle: 'Quick Navigation',
            links: {
                home: 'Return to main page',
                products: 'Stainless Steel Catalog',
                services: 'CNC & Laser Fabrication',
                projects: 'Featured Projects',
                about: 'Company Credentials',
                careers: 'Career Opportunities',
                contact: 'Fast RFQ Inquiry'
            }
        },
        protectionPage: {
            hero: {
                badge: "Corporate Compliance",
                title1: "Personal Data",
                title2: "Protection Policy",
                desc: "Our comprehensive framework for ensuring the security, confidentiality, and integrity of all personal data entrusted to Kha Hoang Minh."
            },
            principles: {
                p1: { title: "Lawfulness & Fairness", desc: "We process personal data lawfully, fairly and in a transparent manner." },
                p2: { title: "Purpose Limitation", desc: "Data is collected for specified, explicit and legitimate purposes." },
                p3: { title: "Integrity & Confidentiality", desc: "We ensure appropriate security of the personal data." }
            },
            preamble: {
                title: "Statement of Commitment",
                text: "<strong>Kha Hoang Minh</strong> is committed to complying with all applicable data protection laws and regulations. We recognize that Personal Data protection is a fundamental responsibility. This policy outlines the technical and organizational measures we have implemented to ensure the highest level of security for our clients, employees, and partners."
            },
            sections: {
                s1: {
                    title: "1. Scope of Application",
                    text: "This policy applies to all Personal Data processed by Kha Hoang Minh in physical or electronic format. It applies to all employees, contractors, and third-party service providers acting on our behalf."
                },
                s2: {
                    title: "2. Data Processing Standards",
                    text: "We adhere to strict standards when processing data:",
                    items: [
                        "Data is only collected for specific business purposes.",
                        "Data accuracy is maintained through regular updates.",
                        "Data is retained only as long as necessary for the purpose.",
                        "Technical measures (Encryption, Firewalls) are standard."
                    ]
                },
                s3: {
                    title: "3. Third-Party Transfer",
                    text: "We do not transfer Personal Data to third parties unless required for service fulfillment or legal compliance. All third parties are vetted for their own data protection compliance."
                }
            },
            breach: {
                title: "Data Breach Protocol",
                text: "In the unlikely event of a data breach, Kha Hoang Minh has established a rapid response team to contain the breach, assess the impact, and notify affected individuals and relevant authorities within 72 hours, in accordance with applicable laws."
            },
            contact: {
                title: "Data Protection Officer",
                desc: "For inquiries regarding your personal data or to exercise your rights, please contact our DPO",
                office: "Kha Hoang Minh Office",
                address: "93/16 Nguyen Thi Tu Street, Quarter 3, Binh Hung Hoa B Ward, Binh Tan District, HCMC",
                department: "Privacy Department",
                button: "Request Data Access"
            },
            related: {
                title: "Related Documents",
                privacy: "Privacy Policy",
                terms: "Terms of Service"
            }
        },
        privacyPolicyPage: {
            hero: {
                badge: "Legal Documentation",
                title1: "Privacy",
                title2: "Policy",
                updated: "Last updated: February 2026"
            },
            toc: {
                title: "Table of Contents",
                intro: "1. Introduction",
                collection: "2. Information We Collect",
                usage: "3. How We Use Information",
                cookies: "4. Cookies & Tracking",
                sharing: "5. Data Sharing",
                security: "6. Data Security",
                rights: "7. Your Rights",
                contact: "8. Contact Us",
            },
            intro: {
                title: "Introduction",
                text1: "Welcome to <strong>Kha Hoang Minh's</strong> Privacy Policy. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.",
                text2: "This policy applies to all visitors, users, and others who access or use our Service."
            },
            collection: {
                title: "Information We Collect",
                personalTitle: "Personal Data",
                personalText: "While using our Service, we may ask you to provide us with certain personally identifiable information, including but not limited to:",
                personalList: ['Email address', 'First name and last name', 'Phone number', 'Business address'],
                usageTitle: "Usage Data",
                usageText: "We may also collect information how the Service is accessed and used. This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data."
            },
            usage: {
                title: "How We Use Information",
                text: "Kha Hoang Minh uses the collected data for various purposes:",
                list: [
                    'To provide and maintain the Service',
                    'To notify you about changes to our Service',
                    'To provide customer care and support',
                    'To provide analysis or valuable information so that we can improve the Service',
                    'To monitor the usage of the Service',
                    'To detect, prevent and address technical issues'
                ]
            },
            cookies: {
                title: "Cookies & Tracking",
                text1: "We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier.",
                text2: "You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service."
            },
            sharing: {
                title: "Data Sharing",
                text: "We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential."
            },
            security: {
                title: "Data Security",
                text: "The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.",
                sslTitle: "SSL Encryption",
                sslDesc: "Secured data transmission",
                storageTitle: "Secure Storage",
                storageDesc: "Protected database infrastructure"
            },
            rights: {
                title: "Your Rights",
                text: "You have the right to request access to your personal data, to ask for the correction of your personal data, and to ask for the deletion of your personal data.",
                button: "Submit a Data Request"
            },
            contact: {
                title: "Contact Us",
                text: "If you have any questions about this Privacy Policy, please contact us:",
                linkText: "Visit our Contact Page"
            }
        },
        termsOfServicePage: {
            hero: {
                badge: "Legal Documentation",
                title1: "Terms of",
                title2: "Service",
                updated: "Effective Date: February 2026"
            },
            toc: {
                title: "Table of Contents",
                acceptance: "1. Acceptance of Terms",
                changes: "2. Changes to Terms",
                usage: "3. User Conduct",
                products: "4. Product Information",
                ip: "5. Intellectual Property",
                liability: "6. Limitation of Liability",
                law: "7. Governing Law",
                termination: "8. Termination"
            },
            acceptance: {
                title: "Acceptance of Terms",
                text: "By accessing and using the website of <strong>Kha Hoang Minh Co., Ltd</strong>, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.",
                note: "If you do not agree to abide by the above, please do not use this service."
            },
            changes: {
                title: "Changes to Terms",
                text: "We reserve the right to update or modify these Terms of Service at any time without prior notice. Your continued use of the Site following any changes indicates your agreement to be bound by the new Terms of Service. We encourage you to review these Terms periodically."
            },
            usage: {
                title: "User Conduct",
                text: "You agree to use the Site only for lawful purposes. You are prohibited from posting or transmitting to or from this Site any:",
                list: [
                    "Unlawful, threatening, or libelous material",
                    "Material that could constitute a criminal offense",
                    "Viruses, malware, or harmful code",
                    "Spam, chain letters, or unsolicited email",
                    "Attempts to breach site security",
                    "Data mining or scraping tools"
                ]
            },
            products: {
                title: "Product Information",
                text1: "We strive to be as accurate as possible with product descriptions, technical specifications (steel grades, dimensions), and pricing. However, we do not warrant that product descriptions or other content of this site is accurate, complete, reliable, current, or error-free.",
                text2: "Technical specifications for steel products (304, 316, etc.) are provided for reference only. For critical engineering applications, please consult directly with our technical team."
            },
            ip: {
                title: "Intellectual Property",
                text: "The Site and its original content, features, and functionality are owned by Kha Hoang Minh Co., Ltd and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws."
            },
            liability: {
                title: "Limitation of Liability",
                disclaimer: "\"As Is\" and \"As Available\" Disclaimer",
                text: "In no event shall Kha Hoang Minh, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service."
            },
            law: {
                title: "Governing Law",
                text: "These Terms shall be governed and construed in accordance with the laws of <strong>Vietnam</strong>, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights."
            },
            termination: {
                title: "Termination",
                text: "We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms."
            },
            contact: {
                title: "Have questions about these Terms?",
                desc: "Our legal team is available to provide clarification.",
                button: "Contact Us"
            }
        }
    }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);
    const [language, setLanguage] = useState('vi');

    useEffect(() => {
        const saved = localStorage.getItem('app_language'); 
        if (saved) setLanguage(saved);
        setMounted(true);
    }, []);

    const toggleLanguage = () => {
        setLanguage(prev => {
            const newLang = prev === 'vi' ? 'en' : 'vi';
            // Save the new selection immediately
            localStorage.setItem('app_language', newLang);
            return newLang;
        });
    };

    const t = (path: string) => {
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

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error("useLanguage must be used within LanguageProvider");
    return context;
};