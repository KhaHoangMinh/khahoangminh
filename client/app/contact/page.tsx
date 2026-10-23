"use client";

import React from 'react';
import { useLanguage } from "@/services";
import { 
    PageHero, 
    ContactFormSection, 
    ContactInfoSection, 
    LocationMap 
} from '@/components/organisms';

export default function Contact() {
    const { t } = useLanguage();

    return (
        <div className="min-h-dvh bg-slate-50 dark:bg-[#0B0F17]">
            <PageHero 
                title={t('contactPage.heroTitle')}
                highlight={t('contactPage.heroSubtitle')}
                description={t('contactPage.heroDesc')}
                backgroundImage="http://khahoangminh.com.vn/upload/hinhanh/ddd_1366x540.jpg"
            />

            <section className="section-frame-full">
                <div className="container-khm">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-6 lg:gap-8 items-stretch">
                        {/* Column 1: Contact Form */}
                        <div className="md:col-span-1 xl:col-span-5">
                            <ContactFormSection />
                        </div>

                        {/* Column 2: Info & Support */}
                        <div className="md:col-span-1 xl:col-span-4 flex flex-col gap-5">
                            <ContactInfoSection />
                        </div>

                        {/* Column 3: Map (Full width on Tablet/Laptop, 3 cols on XL Desktop) */}
                        <div className="md:col-span-2 xl:col-span-3 min-h-[360px] xl:min-h-full">
                            <LocationMap />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
