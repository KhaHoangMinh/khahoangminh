import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';

export default function Projects() {
    const projects = [
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
    ];

    const companyImages = [
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
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-900 to-slate-900 dark:from-blue-950 dark:to-slate-950 text-white py-20">
                <div className="absolute inset-0 bg-[url('http://khahoangminh.com.vn/upload/hinhanh/ddd_1366x540.jpg')] bg-cover bg-center opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Dự án <span className="text-orange-500">Tiêu biểu</span>
                        </h1>
                        <p className="text-xl text-slate-300">
                            Những dự án tiêu biểu của Kha Hoàng Minh
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="py-20 bg-white dark:bg-slate-950">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
                            Các dự án đã thực hiện
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Với Kha Hoàng Minh phục vụ khách hàng tận tình, chu đáo luôn là những tiêu chí hàng đầu
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                                <div className="relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                </div>
                                <CardContent className="p-6 bg-slate-50 dark:bg-slate-900">
                                    <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white">{project.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>
                                    <div className="flex items-center gap-2 text-orange-600 font-medium group-hover:gap-3 transition-all">
                                        <span>Xem chi tiết</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Company Images Section */}
            <section className="py-20 bg-slate-50 dark:bg-slate-900">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
                            Hình ảnh <span className="text-orange-600">Công ty</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Hệ thống cơ sở vật chất và đội ngũ nhân viên chuyên nghiệp
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {companyImages.map((item, index) => (
                            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                                    <h3 className="text-white font-bold text-lg">{item.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Capabilities Section */}
            <section className="py-20 bg-white dark:bg-slate-950">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
                                Năng lực thực hiện
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <Card className="border-l-4 border-orange-600 shadow-lg">
                                <CardContent className="p-8">
                                    <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">Dự án đã thực hiện</h3>
                                    <ul className="space-y-4">
                                        {[
                                            'Cung cấp inox cho các dự án xây dựng lớn',
                                            'Gia công chi tiết inox theo bản vẽ',
                                            'Sản xuất bồn chứa công nghiệp',
                                            'Cung cấp ống và phụ kiện cho hệ thống đường ống'
                                        ].map((item, index) => (
                                            <li key={index} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                                                <CheckCircle2 className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="border-l-4 border-blue-600 shadow-lg">
                                <CardContent className="p-8">
                                    <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">Khách hàng tiêu biểu</h3>
                                    <ul className="space-y-4">
                                        {[
                                            'Các nhà thầu xây dựng lớn',
                                            'Nhà máy sản xuất thực phẩm',
                                            'Doanh nghiệp sản xuất công nghiệp',
                                            'Đơn vị thi công cơ điện'
                                        ].map((item, index) => (
                                            <li key={index} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                                                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Bạn có dự án cần tư vấn?
                    </h2>
                    <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                        Hãy để chúng tôi đồng hành cùng bạn trong dự án của mình
                    </p>
                    <Link to={createPageUrl('Contact')}>
                        <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8">
                            Liên hệ tư vấn
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}