import React from 'react';
import { Play } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

export default function Videos() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-900 to-slate-900 dark:from-blue-950 dark:to-slate-950 text-white py-20">
                <div className="absolute inset-0 bg-[url('http://khahoangminh.com.vn/upload/hinhanh/ddd_1366x540.jpg')] bg-cover bg-center opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Video <span className="text-orange-500">Giới thiệu</span>
                        </h1>
                        <p className="text-xl text-slate-300">
                            Tìm hiểu thêm về sản phẩm và dịch vụ của chúng tôi qua video
                        </p>
                    </div>
                </div>
            </section>

            {/* Videos Section */}
            <section className="py-20 bg-white dark:bg-slate-950">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <Card className="border-0 shadow-2xl overflow-hidden">
                            <CardContent className="p-12 text-center">
                                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                                    <Play className="w-12 h-12 text-white" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-800 dark:text-white">
                                    Video đang được cập nhật
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
                                    Chúng tôi đang chuẩn bị các video giới thiệu về sản phẩm, dịch vụ và quy trình sản xuất.
                                    Vui lòng quay lại sau hoặc liên hệ trực tiếp để biết thêm chi tiết.
                                </p>
                                <div className="flex flex-wrap gap-4 justify-center">
                                    <a href="tel:0976888999" className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium transition-colors">
                                        Hotline: 0976.888.999
                                    </a>
                                    <a href="tel:0979866162" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                                        Hotline: 0979.866.162
                                    </a>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}