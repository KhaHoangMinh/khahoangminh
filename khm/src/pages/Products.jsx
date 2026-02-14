import React, {useState} from 'react';
import { ArrowRight, Phone, Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { createPageUrl } from "@/utils/index.js";
import { Link, useSearchParams } from "react-router-dom";
import { useLanguage } from "@/services/LanguageProvider.jsx";

export default function Products() {
    const { t } = useLanguage();
    const categories = t('productsPage.categoriesData');

    // Manage state via URL parameters and local search state
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState('');

    // Determine the active tab: prioritize URL param, fallback to first category
    const defaultTab = Array.isArray(categories) && categories.length > 0 ? categories[0].id : "cuon";
    const activeTab = searchParams.get('tab') || defaultTab;

    // Update URL when user clicks a different tab and clear search
    const handleTabChange = (value) => {
        setSearchParams({ tab: value });
        setSearchQuery('');
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-900 to-slate-900 dark:from-blue-950 dark:to-slate-950 text-white py-20">
                <div className="absolute inset-0 bg-[url('http://khahoangminh.com.vn/upload/hinhanh/ddd_1366x540.jpg')] bg-cover bg-center opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            {t('productsPage.hero.title')} <span className="text-orange-500">{t('productsPage.hero.highlight')}</span>
                        </h1>
                        <p className="text-xl text-slate-300">
                            {t('productsPage.hero.subtitle')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className="py-20 bg-white dark:bg-slate-950">
                <div className="container mx-auto px-4">
                    {/* Search Bar & Tabs Header */}
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-6 lg:gap-12">
                        <div className="w-full lg:w-1/3 relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-slate-400 group-focus-within:text-orange-600 transition-colors" />
                            </div>
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder={t('productsPage.searchPlaceholder') || "Tìm kiếm sản phẩm..."}
                                className="w-full bg-slate-100 dark:bg-slate-900 border border-transparent focus:border-orange-500/50 focus:bg-white dark:focus:bg-slate-950 ring-0 outline-none rounded-2xl py-3.5 pl-11 pr-12 text-slate-800 dark:text-slate-200 placeholder:text-slate-400 shadow-sm hover:shadow-md focus:shadow-lg transition-all duration-300"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-orange-600 transition-colors"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            )}
                        </div>
                    </div>

                    <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
                        <TabsList className="flex flex-wrap justify-center gap-2 h-auto bg-slate-100 dark:bg-slate-900 p-2 rounded-xl mb-12">
                            {Array.isArray(categories) && categories.map((category) => (
                                <TabsTrigger
                                    key={category.id}
                                    value={category.id}
                                    className="data-[state=active]:bg-orange-600 data-[state=active]:text-white text-sm md:text-base py-3 px-4 rounded-lg transition-all whitespace-normal h-auto text-center flex-1 md:flex-auto"
                                >
                                    {category.name}
                                </TabsTrigger>
                            ))}
                        </TabsList>

                        {Array.isArray(categories) && categories.map((category) => {
                            // Filter products based on search query
                            const filteredProducts = Array.isArray(category.products)
                                ? category.products.filter(product =>
                                    product.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                    product.description?.toLowerCase().includes(searchQuery.toLowerCase())
                                )
                                : [];

                            return (
                                <TabsContent key={category.id} value={category.id} className="mt-0 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="mb-8">
                                        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">{category.name}</h2>
                                        <p className="text-slate-600 dark:text-slate-400">
                                            {t('productsPage.tabDescStart')} <span className="lowercase">{category.name}</span> {t('productsPage.tabDescEnd')}
                                        </p>
                                    </div>

                                    {filteredProducts.length > 0 ? (
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                            {filteredProducts.map((product, index) => (
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
                                                        <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">{product.description}</p>
                                                        <Button className="w-full bg-orange-600 hover:bg-orange-700 group-hover:shadow-lg transition-all">
                                                            {t('productsPage.buttonQuote')}
                                                            <ArrowRight className="ml-2 w-4 h-4" />
                                                        </Button>
                                                    </CardContent>
                                                </Card>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="text-center py-20 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800">
                                            <Search className="h-12 w-12 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
                                            <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-300 mb-2">
                                                {t('productsPage.noResultsTitle')}
                                            </h3>
                                            <p className="text-slate-500 dark:text-slate-400">
                                                {t('productsPage.noResultsDesc')}
                                            </p>
                                            <Button
                                                variant="outline"
                                                className="mt-6 border-orange-200 text-orange-600 hover:bg-orange-50 dark:border-orange-900/50 dark:hover:bg-orange-900/20"
                                                onClick={() => setSearchQuery('')}
                                            >
                                                {t('productsPage.clearSearch')}
                                            </Button>
                                        </div>
                                    )}
                                </TabsContent>
                            );
                        })}
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
                                    {t('productsPage.contact.title')}
                                </h3>
                                <p className="text-blue-100 mb-8">
                                    {t('productsPage.contact.subtitle')}
                                </p>
                                <div className="flex flex-wrap gap-4 justify-center">
                                    <Link to={createPageUrl('Contact')}>
                                        <Button size="lg" variant="outline" className="border-white text-black dark:text-white hover:bg-white dark:hover:text-black hover:text-blue-900">
                                            <Phone className="mr-2 w-5 h-5" />
                                            {t('productsPage.contact.buttonText')}
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