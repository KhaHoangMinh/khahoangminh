"use client";

import React from 'react';
import { useLanguage } from "@/services";
import { 
    PageHero, 
    ProjectsListSection, 
    ImageGallerySection, 
    CapabilitiesSection, 
    SimpleCtaSection 
} from '@/components/organisms';

export default function Projects() {
    const { t } = useLanguage();

    const projects = t('projectsPage.projectsSection.list') as any[];
    const companyImages = t('projectsPage.imagesSection.list') as any[];
    const completedProjectsList = t('projectsPage.capabilitiesSection.completedProjects.list') as string[];
    const typicalClientsList = t('projectsPage.capabilitiesSection.typicalClients.list') as string[];

    return (
        <div className="min-h-screen bg-white dark:bg-[#0B0F17]">
            <PageHero 
                title={t('projectsPage.hero.title')}
                highlight={t('projectsPage.hero.highlight')}
                description={t('projectsPage.hero.subtitle')}
                backgroundImage="http://khahoangminh.com.vn/upload/hinhanh/ddd_1366x540.jpg"
            />

            <ProjectsListSection 
                title={t('projectsPage.projectsSection.title')}
                subtitle={t('projectsPage.projectsSection.subtitle')}
                projects={projects}
                viewDetailsText={t('projectsPage.projectsSection.viewDetails')}
            />

            <ImageGallerySection 
                title={t('projectsPage.imagesSection.title')}
                highlight={t('projectsPage.imagesSection.highlight')}
                subtitle={t('projectsPage.imagesSection.subtitle')}
                images={companyImages}
            />

            <CapabilitiesSection 
                title={t('projectsPage.capabilitiesSection.title')}
                completedTitle={t('projectsPage.capabilitiesSection.completedProjects.title')}
                completedList={completedProjectsList}
                clientsTitle={t('projectsPage.capabilitiesSection.typicalClients.title')}
                clientsList={typicalClientsList}
            />

            <SimpleCtaSection 
                title={t('projectsPage.cta.title')}
                description={t('projectsPage.cta.subtitle')}
                buttonText={t('projectsPage.cta.buttonText')}
                buttonLink="contact"
            />
        </div>
    );
}