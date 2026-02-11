import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {createPageUrl} from "@/utils/index.js";
import {Link} from "react-router-dom";

export default function Products() {
    const categories = [
        {
            id: 'cuon',
            name: 'INOX CUỘN',
            image: 'http://khahoangminh.com.vn/upload/sanpham/cu%E1%BB%99n%20inox.jpg',
            products: [
                {
                    name: 'CUỘN INOX 304 BỀ MẶT 2B',
                    image: 'http://khahoangminh.com.vn/upload/sanpham/cu%E1%BB%99n%20inox.jpg',
                    description: 'Khổ từ 35mm đến 1548mm, độ dày từ 0.3mm đến 20mm+'
                },
                {
                    name: 'CUỘN INOX 304 BỀ MẶT NO1',
                    image: 'http://khahoangminh.com.vn/upload/sanpham/cuon-inox-316.jpg',
                    description: 'Bề mặt đa dạng No.1/1D / 2D/2B/ BA / No.3 / No.4 / HL'
                },
                {
                    name: 'CUỘN INOX 430 BỀ MẶT BA',
                    image: 'http://khahoangminh.com.vn/upload/sanpham/cuon-inox-430-ba_738.jpg',
                    description: 'Độ dài từ 1 – 6m+, chất lượng cao'
                }
            ]
        },
        {
            id: 'tam',
            name: 'INOX TẤM',
            image: 'http://khahoangminh.com.vn/upload/sanpham/t%E1%BA%A5m%20inox%202b.jpg',
            products: [
                {
                    name: 'TẤM INOX 304',
                    image: 'http://khahoangminh.com.vn/upload/sanpham/t%E1%BA%A5m%20inox%202b.jpg',
                    description: 'Tấm inox 304 chất lượng cao, đa dạng kích thước'
                },
                {
                    name: 'TẤM INOX 316',
                    image: 'http://khahoangminh.com.vn/upload/sanpham/t%E1%BA%A5m%20inox%202b.jpg',
                    description: 'Chống ăn mòn tốt, phù hợp môi trường khắc nghiệt'
                },
                {
                    name: 'TẤM INOX 201',
                    image: 'http://khahoangminh.com.vn/upload/sanpham/t%E1%BA%A5m%20inox%202b.jpg',
                    description: 'Giá cả hợp lý, chất lượng ổn định'
                }
            ]
        },
        {
            id: 'ong',
            name: 'ỐNG INOX',
            image: 'http://khahoangminh.com.vn/upload/sanpham/O%CC%82%CC%81NG%20INOX.jpg',
            products: [
                {
                    name: 'ỐNG INOX CÔNG NGHIỆP',
                    image: 'http://khahoangminh.com.vn/upload/sanpham/O%CC%82%CC%81NG%20INOX.jpg',
                    description: 'Ống inox 304, 316 đường kính đa dạng'
                },
                {
                    name: 'ỐNG INOX TRANG TRÍ',
                    image: 'http://khahoangminh.com.vn/upload/sanpham/o%CC%82%CC%81ng%20trang%20tri%CC%81%20inox.jpg',
                    description: 'Bề mặt đẹp, độ bóng cao'
                },
                {
                    name: 'HỘP VUÔNG INOX',
                    image: 'http://khahoangminh.com.vn/upload/sanpham/ho%CC%A3%CC%82p%20vuo%CC%82ng%20inox.jpg',
                    description: 'Hộp vuông inox các kích thước'
                }
            ]
        },
        {
            id: 'phukien',
            name: 'PHỤ KIỆN INOX',
            image: 'http://khahoangminh.com.vn/upload/sanpham/phu%CC%A3%20kie%CC%A3%CC%82n%20inox%20kha%20hoang%20minh.jpg',
            products: [
                {
                    name: 'PHỤ KIỆN ĐƯỜNG ỐNG',
                    image: 'http://khahoangminh.com.vn/upload/sanpham/phu%CC%A3%20kie%CC%A3%CC%82n%20inox%20kha%20hoang%20minh.jpg',
                    description: 'Khuỷu, tê, nối, van inox'
                },
                {
                    name: 'LÁP ĐẶC INOX',
                    image: 'http://khahoangminh.com.vn/upload/sanpham/LA%CC%81P%20%C4%90A%CC%A3%CC%86C%20INOX.jpg',
                    description: 'Láp đặc inox các loại'
                },
                {
                    name: 'THANH VÊ, LA INOX',
                    image: 'http://khahoangminh.com.vn/upload/sanpham/thanh%20ve%CC%82%20inox.jpg',
                    description: 'Thanh vê, la inox chất lượng cao'
                }
            ]
        },
        {
            id: 'giacong',
            name: 'SẢN PHẨM GIA CÔNG',
            image: 'http://khahoangminh.com.vn/upload/sanpham/Sa%CC%89n%20pha%CC%82%CC%89m%20gia%20co%CC%82ng%20ca%CC%86%CC%81t%20CNC%20PLASMA%205.jpg',
            products: [
                {
                    name: 'GIA CÔNG CẮT CNC PLASMA',
                    image: 'http://khahoangminh.com.vn/upload/sanpham/Sa%CC%89n%20pha%CC%82%CC%89m%20gia%20co%CC%82ng%20ca%CC%86%CC%81t%20CNC%20PLASMA%205.jpg',
                    description: 'Cắt CNC theo bản vẽ, độ chính xác cao'
                }
            ]
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
                            Sản phẩm <span className="text-orange-500">Inox</span>
                        </h1>
                        <p className="text-xl text-slate-300">
                            Cung cấp đầy đủ các loại inox tấm, cuộn, ống với mẫu mã đa dạng
                        </p>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className="py-20 bg-white dark:bg-slate-950">
                <div className="container mx-auto px-4">
                    <Tabs defaultValue="cuon" className="w-full">
                        <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 h-auto bg-slate-100 dark:bg-slate-900 p-2 rounded-xl mb-12">
                            {categories.map((category) => (
                                <TabsTrigger
                                    key={category.id}
                                    value={category.id}
                                    className="data-[state=active]:bg-orange-600 data-[state=active]:text-white text-sm md:text-base py-3"
                                >
                                    {category.name}
                                </TabsTrigger>
                            ))}
                        </TabsList>

                        {categories.map((category) => (
                            <TabsContent key={category.id} value={category.id} className="mt-0">
                                <div className="mb-8">
                                    <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">{category.name}</h2>
                                    <p className="text-slate-600 dark:text-slate-400">
                                        Công ty Inox Kha Hoàng Minh chuyên mua bán và cung cấp các sản phẩm {category.name.toLowerCase()} chất lượng cao, giá cạnh tranh.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {category.products.map((product, index) => (
                                        <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0">
                                            <div className="relative overflow-hidden">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                                    <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                                                </div>
                                            </div>
                                            <CardContent className="p-6 bg-slate-50 dark:bg-slate-900">
                                                <p className="text-slate-600 dark:text-slate-400 mb-4">{product.description}</p>
                                                <Button className="w-full bg-orange-600 hover:bg-orange-700 group-hover:shadow-lg transition-all">
                                                    Yêu cầu báo giá
                                                    <ArrowRight className="ml-2 w-4 h-4" />
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 bg-slate-50 dark:bg-slate-900">
                <div className="container mx-auto px-4">
                    <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950 text-white">
                        <CardContent className="p-8 md:p-12">
                            <div className="text-center max-w-3xl mx-auto">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                    Liên hệ để được tư vấn và báo giá
                                </h3>
                                <p className="text-blue-100 mb-8">
                                    Đội ngũ chuyên gia của chúng tôi sẵn sàng hỗ trợ bạn 24/7
                                </p>
                                <div className="flex flex-wrap gap-4 justify-center">
                                    <Link to={createPageUrl('Contact')}>
                                        <Button size="lg" variant="outline" className="border-white text-black dark:text-white hover:bg-white dark:hover:text-black hover:text-blue-900">
                                            <Phone className="mr-2 w-5 h-5" />
                                            Liên hệ ngay
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
}