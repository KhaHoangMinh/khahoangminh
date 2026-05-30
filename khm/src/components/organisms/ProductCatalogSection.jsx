import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/atoms';
import { SearchBar, CatalogProductCard, EmptyState } from '@/components/molecules';

export function ProductCatalogSection({ categories, texts }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState('');

    const defaultTab = Array.isArray(categories) && categories.length > 0 ? categories[0].id : "cuon";
    const activeTab = searchParams.get('tab') || defaultTab;

    const handleTabChange = (value) => {
        setSearchParams({ tab: value });
        setSearchQuery('');
    };

    return (
        <section className="py-20 bg-white dark:bg-slate-950">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-6 lg:gap-12">
                    <SearchBar 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onClear={() => setSearchQuery('')}
                        placeholder={texts.searchPlaceholder}
                    />
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
                                        {texts.tabDescStart} <span className="lowercase">{category.name}</span> {texts.tabDescEnd}
                                    </p>
                                </div>

                                {filteredProducts.length > 0 ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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