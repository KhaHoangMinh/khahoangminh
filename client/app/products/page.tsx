"use client";

import { Suspense } from 'react';
import { useLanguage } from '@/services';
import { 
    PageHero, 
    ProductCatalogSection, 
    ContactBannerSection 
} from '@/components/organisms';

export default function Products() {
    const { t } = useLanguage();
    const categories = t('productsPage.categoriesData') as any[];

    // Grouping all catalog-specific localized strings
    const catalogTexts = {
        searchPlaceholder: t('productsPage.searchPlaceholder') || "Tìm kiếm sản phẩm...",
        tabDescStart: t('productsPage.tabDescStart'),
        tabDescEnd: t('productsPage.tabDescEnd'),
        buttonQuote: t('productsPage.buttonQuote'),
        noResultsTitle: t('productsPage.noResultsTitle'),
        noResultsDesc: t('productsPage.noResultsDesc'),
        clearSearch: t('productsPage.clearSearch'),
    };

    return (
        <div className="min-h-dvh bg-white dark:bg-[#0B0F17]">
            <PageHero 
                title={t('productsPage.hero.title')}
                highlight={t('productsPage.hero.highlight')}
                description={t('productsPage.hero.subtitle')}
                backgroundImage="/img/assets/home/khm-01.jpg"
            />

            <Suspense fallback={<div className="section-frame-full container-khm animate-pulse" />}>
                <ProductCatalogSection 
                    categories={categories} 
                    texts={catalogTexts} 
                />
            </Suspense>

            <ContactBannerSection 
                title={t('productsPage.contact.title')}
                subtitle={t('productsPage.contact.subtitle')}
                buttonText={t('productsPage.contact.buttonText')}
            />
        </div>
    );
}
