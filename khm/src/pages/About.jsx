import React from 'react';
import { Award, Target, Users, Building2 } from 'lucide-react';
import { useLanguage } from '@/services/LanguageProvider.jsx';
import { 
    PageHero, 
    CompanyInfoSection, 
    CoreValuesSection, 
    BusinessScopeSection, 
    SimpleCtaSection 
} from '@/components/organisms';

export default function About() {
    const { t } = useLanguage();

    const values = [
        {
            icon: Award,
            title: t('aboutPage.values.items.reputation'),
            description: t('aboutPage.values.items.reputationDesc')
        },
        {
            icon: Target,
            title: t('aboutPage.values.items.quality'),
            description: t('aboutPage.values.items.qualityDesc')
        },
        {
            icon: Users,
            title: t('aboutPage.values.items.team'),
            description: t('aboutPage.values.items.teamDesc')
        },
        {
            icon: Building2,
            title: t('aboutPage.values.items.facilities'),
            description: t('aboutPage.values.items.facilitiesDesc')
        }
    ];

    const productList = t('aboutPage.scope.products.list');
    const serviceList = t('aboutPage.scope.services.list');

    return (
        <div className="min-h-screen">
            <PageHero 
                title={t('aboutPage.hero.title')}
                highlight={t('aboutPage.hero.subtitle')}
                description={t('aboutPage.hero.description')}
                backgroundImage="http://khahoangminh.com.vn/upload/hinhanh/ddd_1366x540.jpg"
            />
            
            <CompanyInfoSection 
                established={t('aboutPage.info.established')}
                fullName={t('aboutPage.info.fullName')}
                subtitle={t('aboutPage.hero.subtitle')}
                intro1={t('aboutPage.info.intro1')}
                intro2={t('aboutPage.info.intro2')}
                motto={t('aboutPage.info.motto')}
                mottoDesc={t('aboutPage.info.mottoDesc')}
                thankYou={t('aboutPage.info.thankYou')}
            />

            <CoreValuesSection 
                title={t('aboutPage.values.title')}
                description={t('aboutPage.values.description')}
                values={values}
            />

            <BusinessScopeSection 
                title={t('aboutPage.scope.title')}
                productsTitle={t('aboutPage.scope.products.title')}
                productsList={productList}
                servicesTitle={t('aboutPage.scope.services.title')}
                servicesList={serviceList}
            />

            <SimpleCtaSection 
                title={t('aboutPage.cta.title')}
                description={t('aboutPage.cta.description')}
                buttonText={t('common.contactNow')}
                buttonLink="contact"
            />
        </div>
    );
}