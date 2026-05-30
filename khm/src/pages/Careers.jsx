import React from 'react';
import { useLanguage } from "@/services/LanguageProvider";
import { TrendingUp, Heart, Users, Award } from 'lucide-react';
import { 
    PageHero, 
    BenefitsSection, 
    OpeningsSection, 
    CultureSection 
} from '@/components/organisms';

export default function Careers() {
    const { t } = useLanguage();

    const benefits = [
        {
            icon: TrendingUp,
            title: t('careersPage.benefits.items.growth'),
            description: t('careersPage.benefits.items.growthDesc')
        },
        {
            icon: Heart,
            title: t('careersPage.benefits.items.welfare'),
            description: t('careersPage.benefits.items.welfareDesc')
        },
        {
            icon: Users,
            title: t('careersPage.benefits.items.colleagues'),
            description: t('careersPage.benefits.items.colleaguesDesc')
        },
        {
            icon: Award,
            title: t('careersPage.benefits.items.training'),
            description: t('careersPage.benefits.items.trainingDesc')
        }
    ];

    const cultureList = t('careersPage.culture.list');

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <PageHero 
                title={t('careersPage.hero.title')}
                highlight={t('careersPage.hero.highlight')}
                description={t('careersPage.hero.subtitle')}
                backgroundImage="http://khahoangminh.com.vn/upload/hinhanh/ddd_1366x540.jpg"
            />

            <BenefitsSection 
                title={t('careersPage.benefits.title')}
                highlight={t('careersPage.benefits.highlight')}
                subtitle={t('careersPage.benefits.subtitle')}
                benefits={benefits}
            />

            <OpeningsSection 
                title={t('careersPage.openings.title')}
                emptyTitle={t('careersPage.openings.emptyTitle')}
                emptyDesc={t('careersPage.openings.emptyDesc')}
                sendCvText={t('careersPage.openings.sendCv')}
                contactText={t('careersPage.openings.contact')}
            />

            <CultureSection 
                title={t('careersPage.culture.title')}
                highlight={t('careersPage.culture.highlight')}
                description={t('careersPage.culture.description')}
                cultureList={cultureList}
            />
        </div>
    );
}