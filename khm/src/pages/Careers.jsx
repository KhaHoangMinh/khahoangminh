import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Users, TrendingUp, Heart, Award, ArrowRight, Mail } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';

export default function Careers() {
    const benefits = [
        {
            icon: TrendingUp,
            title: 'Cơ hội phát triển',
            description: 'Môi trường làm việc năng động, nhiều cơ hội thăng tiến'
        },
        {
            icon: Heart,
            title: 'Chế độ đãi ngộ',
            description: 'Lương thưởng cạnh tranh, đầy đủ chế độ BHXH, BHYT'
        },
        {
            icon: Users,
            title: 'Đồng nghiệp thân thiện',
            description: 'Văn hóa doanh nghiệp tích cực, đồng đội hỗ trợ nhiệt tình'
        },
        {
            icon: Award,
            title: 'Đào tạo & Phát triển',
            description: 'Được đào tạo kỹ năng chuyên môn và phát triển nghề nghiệp'
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
                            Tuyển dụng & <span className="text-orange-500">Cơ hội nghề nghiệp</span>
                        </h1>
                        <p className="text-xl text-slate-300">
                            Gia nhập đội ngũ Kha Hoàng Minh - Nơi bạn phát triển sự nghiệp
                        </p>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-white dark:bg-slate-950">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
                            Tại sao làm việc tại <span className="text-orange-600">Kha Hoàng Minh?</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Chúng tôi không chỉ tìm kiếm nhân viên, mà tìm kiếm những đối tác đồng hành lâu dài
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit, index) => (
                            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                                <CardContent className="p-8 text-center">
                                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <benefit.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white">{benefit.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-400">{benefit.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Current Openings */}
            <section className="py-20 bg-slate-50 dark:bg-slate-900">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
                                Vị trí đang tuyển
                            </h2>
                        </div>

                        <Card className="border-0 shadow-2xl">
                            <CardContent className="p-12 text-center">
                                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                                    <Users className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">
                                    Hiện chúng tôi đang cập nhật các vị trí tuyển dụng
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                                    Nếu bạn quan tâm đến cơ hội làm việc tại Kha Hoàng Minh, vui lòng gửi CV của bạn về email
                                    hoặc liên hệ trực tiếp với chúng tôi. Chúng tôi luôn chào đón những ứng viên tài năng và nhiệt huyết.
                                </p>
                                <div className="flex flex-wrap gap-4 justify-center">
                                    <a href="mailto:info@khahoangminh.com.vn">
                                        <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                                            <Mail className="mr-2 w-5 h-5" />
                                            Gửi CV ngay
                                        </Button>
                                    </a>
                                    <Link to={createPageUrl('Contact')}>
                                        <Button size="lg" variant="outline">
                                            Liên hệ tư vấn
                                            <ArrowRight className="ml-2 w-5 h-5" />
                                        </Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Company Culture */}
            <section className="py-20 bg-white dark:bg-slate-950">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800 dark:text-white">
                                Văn hóa <span className="text-orange-600">Doanh nghiệp</span>
                            </h2>
                            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                                Tại Kha Hoàng Minh, chúng tôi xây dựng một môi trường làm việc chuyên nghiệp, thân thiện,
                                nơi mọi người có thể phát huy tối đa năng lực của mình.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'Tôn trọng và tin tưởng lẫn nhau',
                                    'Làm việc theo tinh thần đội nhóm',
                                    'Khuyến khích sáng tạo và đổi mới',
                                    'Cam kết phát triển bền vững'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                                        <span className="w-6 h-6 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <img
                                src="http://khahoangminh.com.vn/upload/news/co%CC%82ng%20ty%20inox%20kha%20hoa%CC%80ng%20minh%201.jpg"
                                alt="Team"
                                className="rounded-lg shadow-lg w-full h-48 object-cover"
                            />
                            <img
                                src="http://khahoangminh.com.vn/upload/news/co%CC%82ng%20ty%20inox%20kha%20hoa%CC%80ng%20minh%203.jpg"
                                alt="Workplace"
                                className="rounded-lg shadow-lg w-full h-48 object-cover mt-8"
                            />
                            <img
                                src="http://khahoangminh.com.vn/upload/news/co%CC%82ng%20ty%20inox%20kha%20hoa%CC%80ng%20minh%204.jpg"
                                alt="Office"
                                className="rounded-lg shadow-lg w-full h-48 object-cover -mt-8"
                            />
                            <img
                                src="http://khahoangminh.com.vn/upload/news/co%CC%82ng%20ty%20inox%20kha%20hoa%CC%80ng%20minh%202.jpg"
                                alt="Facility"
                                className="rounded-lg shadow-lg w-full h-48 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}