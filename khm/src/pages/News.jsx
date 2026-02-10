import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

export default function News() {
    const newsItems = [
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
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-900 to-slate-900 dark:from-blue-950 dark:to-slate-950 text-white py-20">
                <div className="absolute inset-0 bg-[url('http://khahoangminh.com.vn/upload/hinhanh/ddd_1366x540.jpg')] bg-cover bg-center opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Tin tức & <span className="text-orange-500">Sự kiện</span>
                        </h1>
                        <p className="text-xl text-slate-300">
                            Cập nhật những tin tức mới nhất từ Kha Hoàng Minh
                        </p>
                    </div>
                </div>
            </section>

            {/* News Section */}
            <section className="py-20 bg-white dark:bg-slate-950">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {newsItems.map((news, index) => (
                                <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={news.image}
                                            alt={news.title}
                                            className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            {news.date}
                                        </div>
                                    </div>
                                    <CardContent className="p-6 bg-slate-50 dark:bg-slate-900">
                                        <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-500 transition-colors">
                                            {news.title}
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">{news.excerpt}</p>
                                        <div className="flex items-center gap-2 text-orange-600 font-medium group-hover:gap-3 transition-all">
                                            <span>Đọc thêm</span>
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* Coming Soon Message */}
                        <Card className="mt-12 border-0 shadow-lg">
                            <CardContent className="p-8 text-center">
                                <p className="text-slate-600 dark:text-slate-400 text-lg">
                                    Các tin tức khác đang được cập nhật. Vui lòng quay lại sau hoặc theo dõi chúng tôi trên
                                    <a href="https://www.facebook.com/inoxkhahoangminh" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-500 font-semibold ml-1 hover:underline">
                                        Facebook
                                    </a>
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}