import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Facebook } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.');
        setFormData({ name: '', phone: '', email: '', message: '' });
    };

    const contactInfo = [
        {
            icon: MapPin,
            title: 'Địa chỉ',
            content: '93/16 Đường Nguyễn Thị Tú, Phường Bình Hưng Hoà, Quận Bình Tân, TP. Hồ Chí Minh'
        },
        {
            icon: Phone,
            title: 'Điện thoại',
            content: (
                <>
                    <a href="tel:0976888999" className="block hover:text-orange-600 transition-colors">0976.888.999 (Ms. Hải)</a>
                    <a href="tel:0979866162" className="block hover:text-orange-600 transition-colors">0979.866.162 (Ms. Uyên)</a>
                </>
            )
        },
        {
            icon: Mail,
            title: 'Email',
            content: <a href="mailto:info@khahoangminh.com.vn" className="hover:text-orange-600 transition-colors">info@khahoangminh.com.vn</a>
        },
        {
            icon: Clock,
            title: 'Giờ làm việc',
            content: 'Thứ 2 - Thứ 7: 7:00 - 17:00'
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
                            Liên hệ <span className="text-orange-500">với chúng tôi</span>
                        </h1>
                        <p className="text-xl text-slate-300">
                            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-white dark:bg-slate-950">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Form */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-slate-800 dark:text-white">
                                Gửi yêu cầu cho chúng tôi
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-8">
                                Vui lòng điền thông tin vào form dưới đây, chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        Họ và tên *
                                    </label>
                                    <Input
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="Nguyễn Văn A"
                                        className="w-full"
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                            Số điện thoại *
                                        </label>
                                        <Input
                                            required
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            placeholder="0912 345 678"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                            Email
                                        </label>
                                        <Input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="email@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        Nội dung yêu cầu *
                                    </label>
                                    <Textarea
                                        required
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        placeholder="Vui lòng mô tả chi tiết yêu cầu của bạn..."
                                        rows={6}
                                        className="w-full"
                                    />
                                </div>

                                <Button type="submit" size="lg" className="w-full bg-orange-600 hover:bg-orange-700">
                                    <Send className="mr-2 w-5 h-5" />
                                    Gửi yêu cầu
                                </Button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-slate-800 dark:text-white">
                                Thông tin liên hệ
                            </h2>

                            <div className="space-y-6 mb-8">
                                {contactInfo.map((info, index) => (
                                    <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                                        <CardContent className="p-6">
                                            <div className="flex gap-4">
                                                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                                    <info.icon className="w-6 h-6 text-white" />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-slate-800 dark:text-white mb-2">{info.title}</h3>
                                                    <div className="text-slate-600 dark:text-slate-400">{info.content}</div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                            {/* Social Links */}
                            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950 text-white">
                                <CardContent className="p-6">
                                    <h3 className="font-bold mb-4 text-lg">Theo dõi chúng tôi</h3>
                                    <div className="flex gap-4">
                                        <a
                                            href="https://www.facebook.com/inoxkhahoangminh"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                                        >
                                            <Facebook className="w-5 h-5" />
                                            <span>Facebook</span>
                                        </a>
                                        <a
                                            href="http://zalo.me/0976888999"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                                        >
                                            <Phone className="w-5 h-5" />
                                            <span>Zalo</span>
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Map */}
                            <Card className="mt-6 border-0 shadow-lg overflow-hidden">
                                <CardContent className="p-0">
                                    <div className="aspect-video bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                                        <div className="text-center p-6">
                                            <MapPin className="w-12 h-12 mx-auto mb-3 text-slate-400" />
                                            <p className="text-slate-600 dark:text-slate-400">
                                                Bản đồ Google Maps sẽ được tích hợp tại đây
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Support Section */}
            <section className="py-16 bg-slate-50 dark:bg-slate-900">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-slate-800 dark:text-white">
                            Hỗ trợ khách hàng
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Card className="border-0 shadow-lg">
                                <CardContent className="p-6 text-center">
                                    <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                                        <img src="http://khahoangminh.com.vn/upload/hinhanh/iconht-8002_38x40.png" alt="Support" className="w-10 h-10" />
                                    </div>
                                    <h3 className="font-bold text-lg mb-2 text-slate-800 dark:text-white">Ms Minh Hải</h3>
                                    <a href="tel:0976888999" className="text-orange-600 dark:text-orange-500 font-semibold text-xl block mb-3">
                                        0976.888.999
                                    </a>
                                    <div className="flex gap-2 justify-center">
                                        <a href="https://www.facebook.com/inoxkhahoangminh" target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                                            <Facebook className="w-5 h-5 text-white" />
                                        </a>
                                        <a href="http://zalo.me/0976888999" target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors text-white text-sm font-semibold">
                                            Zalo
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-0 shadow-lg">
                                <CardContent className="p-6 text-center">
                                    <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                                        <img src="http://khahoangminh.com.vn/upload/hinhanh/iconht8002-6744_38x40.png" alt="Support" className="w-10 h-10" />
                                    </div>
                                    <h3 className="font-bold text-lg mb-2 text-slate-800 dark:text-white">Ms Phụng Uyên</h3>
                                    <a href="tel:0979866162" className="text-blue-600 dark:text-blue-500 font-semibold text-xl block mb-3">
                                        0979.866.162
                                    </a>
                                    <div className="flex gap-2 justify-center">
                                        <a href="https://www.facebook.com/inoxkhahoangminh" target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                                            <Facebook className="w-5 h-5 text-white" />
                                        </a>
                                        <a href="http://zalo.me/0979866162" target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors text-white text-sm font-semibold">
                                            Zalo
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}