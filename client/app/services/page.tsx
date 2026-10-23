"use client";

import React from 'react';
import { Scissors, Ruler, Truck, Headphones, FileCheck, Award } from 'lucide-react';
import { useLanguage } from '@/services';
import { 
    PageHero, 
    ServicesGridSection, 
    FeaturedServiceSection, 
    ProcessSection,
    SimpleCtaSection 
} from '@/components/organisms';

export default function Services() {
    const { t } = useLanguage();

    // Map the icons that correspond to each service item.
    const serviceIcons = [Scissors, Ruler, Truck, Headphones, FileCheck, Award];
    const servicesListItems = t('servicesPage.servicesList.items') as any[];

    const featuredFeatures = t('servicesPage.featured.features') as string[];
    const processSteps = t('servicesPage.process.steps') as any[];

    return (
        <div className="min-h-screen bg-white dark:bg-[#0B0F17]">
            <PageHero 
                title={t('servicesPage.hero.title')}
                highlight={t('servicesPage.hero.highlight')}
                description={t('servicesPage.hero.subtitle')}
                backgroundImage="/img/assets/home/hero-bg.jpg"
            />

            <ServicesGridSection 
                title={t('servicesPage.servicesList.title')}
                subtitle={t('servicesPage.servicesList.subtitle')}
                services={servicesListItems}
                icons={serviceIcons}
            />

            <FeaturedServiceSection 
                badge={t('servicesPage.featured.badge')}
                title={t('servicesPage.featured.title')}
                highlight={t('servicesPage.featured.highlight')}
                description={t('servicesPage.featured.description')}
                features={featuredFeatures}
                buttonText={t('servicesPage.featured.buttonText')}
                image="http://khahoangminh.com.vn/upload/sanpham/Sa%CC%89n%20pha%CC%82%CC%89m%20gia%20co%CC%82ng%20ca%CC%86%CC%81t%20CNC%20PLASMA%205.jpg"
            />

            <ProcessSection 
                title={t('servicesPage.process.title')}
                subtitle={t('servicesPage.process.subtitle')}
                steps={processSteps}
            />

            <SimpleCtaSection 
                title={t('servicesPage.cta.title')}
                description={t('servicesPage.cta.subtitle')}
                buttonText={t('servicesPage.cta.buttonText')}
                buttonLink="contact"
            />
        </div>
    );
}