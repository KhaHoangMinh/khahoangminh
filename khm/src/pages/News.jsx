import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from "@/services/LanguageProvider";

export default function News() {
    const { t } = useLanguage();
    const newsItems = t('newsPage.list')

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-900 to-slate-900 dark:from-blue-950 dark:to-slate-950 text-white py-20">
                <div className="absolute inset-0 bg-[url('http://khahoangminh.com.vn/upload/hinhanh/ddd_1366x540.jpg')] bg-cover bg-center opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            {t('newsPage.hero.title')} <span className="text-orange-500">{t('newsPage.hero.highlight')}</span>
                        </h1>
                        <p className="text-xl text-slate-300">
                            {t('newsPage.hero.subtitle')}
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
                                            <span>{t('newsPage.readMore')}</span>
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
                                    {t('newsPage.footer.text')}
                                    <a href="https://www.facebook.com/inoxkhahoangminh" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-500 font-semibold ml-1 hover:underline">
                                        {t('newsPage.footer.linkText')}
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