import React from 'react';
import { useLanguage } from "@/services/LanguageProvider.jsx";
import { 
    PageHero, 
    ContactFormSection, 
    ContactInfoSection, 
    LocationMap 
} from '@/components/organisms';

export default function Contact() {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <PageHero 
                title={t('contactPage.heroTitle')}
                highlight={t('contactPage.heroSubtitle')}
                description={t('contactPage.heroDesc')}
                backgroundImage="http://khahoangminh.com.vn/upload/hinhanh/ddd_1366x540.jpg"
            />

            <section className="flex-grow container mx-auto px-4 py-12 md:py-20">
                <div className="grid lg:grid-cols-12 gap-8 h-full">
                    {/* Column 1: Contact Form (Left) */}
                    <div className="lg:col-span-4">
                        <ContactFormSection />
                    </div>

                    {/* Column 2: Info & Support (Center) */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        <ContactInfoSection />
                    </div>

                    {/* Column 3: Map (Right) */}
                    <div className="lg:col-span-4 h-[400px] lg:h-auto">
                        <LocationMap />
                    </div>
                </div>
            </section>
        </div>
    );
}