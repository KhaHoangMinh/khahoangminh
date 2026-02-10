import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Scissors, Ruler, Truck, Headphones, FileCheck, Award, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';

export default function Services() {
    const services = [
        {
            icon: Scissors,
            title: 'Gia công cắt CNC Plasma',
            description: 'Cắt theo bản vẽ kỹ thuật với độ chính xác cao, máy móc hiện đại',
            features: ['Cắt CNC Plasma chính xác', 'Theo bản vẽ kỹ thuật', 'Tốc độ nhanh', 'Giá cạnh tranh']
        },
        {
            icon: Ruler,
            title: 'Cắt theo yêu cầu',
            description: 'Cắt inox tấm, cuộn theo kích thước yêu cầu của khách hàng',
            features: ['Cắt đúng kích thước', 'Bề mặt phẳng đẹp', 'Giao hàng nhanh', 'Cam kết chất lượng']
        },
        {
            icon: Truck,
            title: 'Giao hàng toàn quốc',
            description: 'Vận chuyển và giao hàng tận nơi trên toàn quốc',
            features: ['Giao hàng nhanh chóng', 'Đóng gói cẩn thận', 'Theo dõi đơn hàng', 'Bảo hiểm hàng hóa']
        },
        {
            icon: Headphones,
            title: 'Tư vấn kỹ thuật',
            description: 'Đội ngũ kỹ sư giàu kinh nghiệm tư vấn giải pháp tối ưu',
            features: ['Tư vấn chuyên nghiệp', 'Giải pháp tối ưu', 'Hỗ trợ 24/7', 'Nhiệt tình, tận tâm']
        },
        {
            icon: FileCheck,
            title: 'Kiểm tra chất lượng',
            description: 'Kiểm tra chất lượng nghiêm ngặt trước khi giao hàng',
            features: ['Tiêu chuẩn quốc tế', 'Kiểm tra kỹ lưỡng', 'Chứng nhận CO, CQ', 'Cam kết chất lượng']
        },
        {
            icon: Award,
            title: 'Bảo hành - Hỗ trợ',
            description: 'Chế độ bảo hành và hỗ trợ sau bán hàng chu đáo',
            features: ['Bảo hành sản phẩm', 'Đổi trả linh hoạt', 'Hỗ trợ kỹ thuật', 'Chăm sóc khách hàng']
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
                            Dịch vụ <span className="text-orange-500">Gia công</span>
                        </h1>
                        <p className="text-xl text-slate-300">
                            Cung cấp dịch vụ gia công inox chuyên nghiệp, chất lượng cao
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-white dark:bg-slate-950">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
                            Dịch vụ của chúng tôi
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Đa dạng dịch vụ từ gia công, tư vấn đến vận chuyển và hỗ trợ
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                                <CardContent className="p-8">
                                    <div className="w-16 h-16 mb-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <service.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white">{service.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-2">
                                        {service.features.map((feature, fIndex) => (
                                            <li key={fIndex} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                                                <span className="w-1.5 h-1.5 bg-orange-600 rounded-full"></span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CNC Plasma Section */}
            <section className="py-20 bg-slate-50 dark:bg-slate-900">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-block bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-500 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                                Dịch vụ nổi bật
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800 dark:text-white">
                                Gia công cắt <span className="text-orange-600">CNC Plasma</span>
                            </h2>
                            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                                Với máy CNC Plasma hiện đại, chúng tôi cung cấp dịch vụ cắt inox chính xác theo bản vẽ kỹ thuật. Đáp ứng mọi yêu cầu từ đơn giản đến phức tạp.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                                    <span className="w-6 h-6 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                                    <span>Cắt theo bản vẽ CAD/DXF</span>
                                </li>
                                <li className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                                    <span className="w-6 h-6 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                                    <span>Độ chính xác cao, bề mặt cắt đẹp</span>
                                </li>
                                <li className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                                    <span className="w-6 h-6 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                                    <span>Tốc độ nhanh, hiệu quả cao</span>
                                </li>
                                <li className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                                    <span className="w-6 h-6 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                                    <span>Giá cả cạnh tranh</span>
                                </li>
                            </ul>
                            <Link to={createPageUrl('Contact')}>
                                <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                                    Yêu cầu báo giá
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                        </div>
                        <div>
                            <img
                                src="http://khahoangminh.com.vn/upload/sanpham/Sa%CC%89n%20pha%CC%82%CC%89m%20gia%20co%CC%82ng%20ca%CC%86%CC%81t%20CNC%20PLASMA%205.jpg"
                                alt="CNC Plasma"
                                className="rounded-2xl shadow-2xl w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-white dark:bg-slate-950">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
                            Quy trình làm việc
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Quy trình chuyên nghiệp, minh bạch từ tư vấn đến giao hàng
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { step: '01', title: 'Tiếp nhận yêu cầu', desc: 'Lắng nghe và ghi nhận nhu cầu của khách hàng' },
                            { step: '02', title: 'Tư vấn & Báo giá', desc: 'Tư vấn giải pháp và báo giá chi tiết' },
                            { step: '03', title: 'Gia công sản xuất', desc: 'Tiến hành gia công theo yêu cầu' },
                            { step: '04', title: 'Kiểm tra & Giao hàng', desc: 'Kiểm tra chất lượng và giao hàng' }
                        ].map((item, index) => (
                            <Card key={index} className="border-0 shadow-lg text-center group hover:shadow-xl transition-shadow">
                                <CardContent className="p-6">
                                    <div className="text-5xl font-bold text-orange-600 mb-4 group-hover:scale-110 transition-transform">
                                        {item.step}
                                    </div>
                                    <h3 className="text-lg font-bold mb-2 text-slate-800 dark:text-white">{item.title}</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Cần dịch vụ gia công inox chuyên nghiệp?
                    </h2>
                    <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                        Liên hệ ngay với chúng tôi để được tư vấn và báo giá chi tiết
                    </p>
                    <Link to={createPageUrl('Contact')}>
                        <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8">
                            Liên hệ ngay
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}