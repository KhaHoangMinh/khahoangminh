import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight, CheckCircle2, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/services/LanguageProvider.jsx';

export default function Home() {
    const { t } = useLanguage();

    const products = [
        { name: t('productsPage.categories.coil'), image: 'http://khahoangminh.com.vn/upload/sanpham/cu%E1%BB%99n%20inox.jpg', page: 'Products' },
        { name: t('productsPage.categories.sheet'), image: 'http://khahoangminh.com.vn/upload/sanpham/t%E1%BA%A5m%20inox%202b.jpg', page: 'Products' },
        { name: t('productsPage.categories.pipe'), image: 'http://khahoangminh.com.vn/upload/sanpham/O%CC%82%CC%81NG%20INOX.jpg', page: 'Products' },
        { name: t('productsPage.categories.accessories'), image: 'http://khahoangminh.com.vn/upload/sanpham/phu%CC%A3%20kie%CC%A3%CC%82n%20inox%20kha%20hoang%20minh.jpg', page: 'Products' },
    ];

    const features = t('homePage.features.list');

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('http://khahoangminh.com.vn/upload/hinhanh/ddd_1366x540.jpg')] bg-cover bg-center opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-transparent"></div>

                <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-block bg-orange-500/20 border border-orange-500 text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            {t('homePage.hero.tagline')}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight whitespace-pre-line">
                            {t('homePage.hero.title')}<br/>
                            <span className="text-orange-500">{t('homePage.hero.subtitle')}</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                            {t('homePage.hero.description')}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to={createPageUrl('Contact')}>
                                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8">
                                    {t('common.contactNow')}
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                            <Link to={createPageUrl('Products')}>
                                <Button size="lg" variant="outline" className="border-white text-black dark:text-white hover:bg-white dark:hover:text-black  hover:text-blue-900">
                                    {t('common.viewProducts')}
                                </Button>
                            </Link>
                        </div>
                        <div className="mt-8 flex flex-wrap gap-6">
                            <a href="#" className="flex items-center gap-2 text-lg hover:text-orange-400 transition-colors">
                                <Phone className="w-5 h-5" />
                                <span className="font-semibold">0976.888.999</span>
                            </a>
                            <a href="#" className="flex items-center gap-2 text-lg hover:text-orange-400 transition-colors">
                                <Phone className="w-5 h-5" />
                                <span className="font-semibold">0979.866.162</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-slate-950 to-transparent"></div>
            </section>

            {/* About Section */}
            <section className="py-20 bg-slate-50 dark:bg-slate-900">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800 dark:text-white">
                                {t('homePage.about.intro')}<br/>
                                <span className="text-orange-600">{t('homePage.about.name')}</span>
                            </h2>
                            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                                {t('homePage.about.desc1')}
                            </p>
                            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                                {t('homePage.about.desc2')}
                            </p>
                            <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-600 p-4 mb-6">
                                <p className="text-slate-800 dark:text-slate-200 font-semibold italic">
                                    {t('homePage.about.quote')}
                                </p>
                            </div>
                            <Link to={createPageUrl('About')}>
                                <Button className="bg-blue-600 hover:bg-blue-700">
                                    {t('common.viewMore')}
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </Link>
                        </div>
                        <div>
                            <img
                                src="http://khahoangminh.com.vn/upload/hinhanh/979d4c471bd530505eb18b1892246371-9428_579x400.jpg"
                                alt="Kha Hoàng Minh"
                                className="rounded-2xl shadow-2xl w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className="py-20 bg-white dark:bg-slate-950">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
                            {t('homePage.products.title')}
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            {t('homePage.products.description')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {products.map((product, index) => (
                            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-slate-50 dark:bg-slate-900">
                                <div className="relative overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                </div>
                                <CardContent className="p-6">
                                    <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-3">{product.name}</h3>
                                    <Link to={createPageUrl(product.page)}>
                                        <Button variant="outline" className="w-full group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600 transition-colors">
                                            {t('common.viewAll')}
                                            <ArrowRight className="ml-2 w-4 h-4" />
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-slate-50 dark:bg-slate-900">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
                            {t('homePage.features.title')}
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-3 p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <CheckCircle2 className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                                <p className="text-slate-700 dark:text-slate-300">{feature}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        {t('homePage.cta.title')}
                    </h2>
                    <p className="text-xl mb-8 text-blue-100">
                        {t('homePage.cta.description')}
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link to={createPageUrl('Contact')}>
                            <Button size="lg" variant="outline" className="bg-orange-600 hover:bg-orange-700 text-white px-8">
                                <Mail className="mr-2 w-5 h-5" />
                                {t('common.sendRequest')}
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}