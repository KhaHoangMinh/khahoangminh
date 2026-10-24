"use client";

import { useState } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/atoms';
import { SearchBar, CatalogProductCard, EmptyState } from '@/components/molecules';

export interface CatalogProduct {
    name: string;
    description: string;
    image: string;
}

interface Category {
    id: string;
    name: string;
    products: CatalogProduct[];
}

interface ProductCatalogTexts {
    searchPlaceholder: string;
    tabDescStart: string;
    tabDescEnd: string;
    buttonQuote: string;
    noResultsTitle: string;
    noResultsDesc: string;
    clearSearch: string;
}

interface ProductCatalogSectionProps {
    categories: Category[];
    texts: ProductCatalogTexts;
}

export function ProductCatalogSection({ categories, texts }: ProductCatalogSectionProps) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const [searchQuery, setSearchQuery] = useState('');

    const defaultTab = Array.isArray(categories) && categories.length > 0 ? categories[0].id : "cuon";
    const activeTab = searchParams.get('tab') || defaultTab;

    const handleTabChange = (value: string) => {
        const current = new URLSearchParams(Array.from(searchParams.entries()));
        current.set("tab", value);
        const search = current.toString();
        const query = search ? `?${search}` : "";
        router.push(`${pathname}${query}`, { scroll: false });
        setSearchQuery('');
    };

    return (
        <section className="section-frame-full surface-canvas">
            <div className="container-khm">
                <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
                    <div className="flex flex-col lg:flex-row justify-between items-stretch lg:items-center mb-8 gap-4">
                        <TabsList className="flex flex-wrap justify-start gap-1.5 h-auto bg-slate-100 dark:bg-[#182234] p-1.5 rounded-2xl border border-slate-200/80 dark:border-slate-700/80">
                            {Array.isArray(categories) && categories.map((category) => (
                                <TabsTrigger
                                    key={category.id}
                                    value={category.id}
                                    className="data-[state=active]:bg-orange-600 data-[state=active]:text-white data-[state=active]:shadow-sm text-xs sm:text-sm font-semibold py-2.5 px-4 rounded-xl transition-all whitespace-nowrap text-center flex-1 sm:flex-initial text-slate-700 dark:text-slate-200 hover:text-orange-600 dark:hover:text-orange-300"
                                >
                                    {category.name}
                                </TabsTrigger>
                            ))}
                        </TabsList>

                        <SearchBar 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onClear={() => setSearchQuery('')}
                            placeholder={texts.searchPlaceholder}
                        />
                    </div>

                    {Array.isArray(categories) && categories.map((category) => {
                        const filteredProducts = Array.isArray(category.products)
                            ? category.products.filter(product =>
                                product.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                product.description?.toLowerCase().includes(searchQuery.toLowerCase())
                            )
                            : [];

                        return (
                            <TabsContent key={category.id} value={category.id} className="mt-0 animate-in fade-in slide-in-from-bottom-2 duration-300">
                                <div className="mb-8 pb-4 border-b border-slate-200/80 dark:border-slate-800">
                                    <h2 className="heading-section mb-2">{category.name}</h2>
                                    <p className="text-body">
                                        {texts.tabDescStart} <span className="lowercase font-medium text-orange-600 dark:text-orange-400">{category.name}</span> {texts.tabDescEnd}
                                    </p>
                                </div>

                                {filteredProducts.length > 0 ? (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {filteredProducts.map((product, index) => (
                                            <CatalogProductCard 
                                                key={index} 
                                                product={product} 
                                                buttonText={texts.buttonQuote} 
                                            />
                                        ))}
                                    </div>
                                ) : (
                                    <EmptyState 
                                        title={texts.noResultsTitle}
                                        description={texts.noResultsDesc}
                                        clearText={texts.clearSearch}
                                        onClear={() => setSearchQuery('')}
                                    />
                                )}
                            </TabsContent>
                        );
                    })}
                </Tabs>
            </div>
        </section>
    );
}
