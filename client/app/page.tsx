"use client";

import { PremiumHero, LogoMarquee , AboutSection, ProductsSection, FeaturesSection, CtaSection } from '@/components/organisms';
import { useLanguage } from '@/services';

export default function Home() {
    const { t } = useLanguage();
    const categories: any[] = t('productsPage.categoriesData') as any[];

    // Dynamically map the categories to get their IDs for the links
    const defaultImages = [
        'http://khahoangminh.com.vn/upload/sanpham/cu%E1%BB%99n%20inox.jpg',
        'http://khahoangminh.com.vn/upload/sanpham/t%E1%BA%A5m%20inox%202b.jpg',
        'http://khahoangminh.com.vn/upload/sanpham/O%CC%82%CC%81NG%20INOX.jpg',
        'http://khahoangminh.com.vn/upload/sanpham/phu%CC%A3%20kie%CC%A3%CC%82n%20inox%20kha%20hoang%20minh.jpg'
    ];

    const products = Array.isArray(categories)
        ? categories.slice(0, 4).map((cat, index) => ({
            id: cat.id,
            name: cat.name,
            image: defaultImages[index] || defaultImages[0],
            page: 'products'
        }))
        : [];

    const features = t('homePage.features.list') as string[] || [];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <PremiumHero 
                title={t('homePage.hero.title')}
                subtitle={t('homePage.hero.subtitle')}
                description={t('homePage.hero.description')}
                badgeText={t('homePage.hero.tagline')}
                backgroundImage="http://khahoangminh.com.vn/upload/hinhanh/ddd_1366x540.jpg"
            />

            {/* Logo Marquee */}
            <LogoMarquee />

            {/* About Section */}
            <AboutSection 
                intro={t('homePage.about.intro')}
                name={t('homePage.about.name')}
                desc1={t('homePage.about.desc1')}
                desc2={t('homePage.about.desc2')}
                quote={t('homePage.about.quote')}
            />

            {/* Products Section */}
            <ProductsSection 
                title={t('homePage.products.title')}
                description={t('homePage.products.description')}
                products={products}
            />

            {/* Features Section */}
            <FeaturesSection 
                title={t('homePage.features.title')}
                features={features}
            />

            {/* CTA Section */}
            <CtaSection 
                title={t('homePage.cta.title')}
                description={t('homePage.cta.description')}
            />
        </div>
    );
}