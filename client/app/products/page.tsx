"use client";

import React from 'react';
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
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <PageHero 
                title={t('productsPage.hero.title')}
                highlight={t('productsPage.hero.highlight')}
                description={t('productsPage.hero.subtitle')}
                backgroundImage="http://khahoangminh.com.vn/upload/hinhanh/ddd_1366x540.jpg"
            />

            <ProductCatalogSection 
                categories={categories} 
                texts={catalogTexts} 
            />

            <ContactBannerSection 
                title={t('productsPage.contact.title')}
                subtitle={t('productsPage.contact.subtitle')}
                buttonText={t('productsPage.contact.buttonText')}
            />
        </div>
    );
}