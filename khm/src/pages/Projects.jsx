import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, Button } from '@/components/atoms';
import { useLanguage } from "@/services/LanguageProvider.jsx";

export default function Projects() {
    const { t } = useLanguage();

    const projects = t('projectsPage.projectsSection.list');
    const companyImages = t('projectsPage.imagesSection.list');
    const completedProjectsList = t('projectsPage.capabilitiesSection.completedProjects.list');
    const typicalClientsList = t('projectsPage.capabilitiesSection.typicalClients.list');

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-900 to-slate-900 dark:from-blue-950 dark:to-slate-950 text-white py-20">
                <div className="absolute inset-0 bg-[url('http://khahoangminh.com.vn/upload/hinhanh/ddd_1366x540.jpg')] bg-cover bg-center opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            {t('projectsPage.hero.title')} <span className="text-orange-500">{t('projectsPage.hero.highlight')}</span>
                        </h1>
                        <p className="text-xl text-slate-300">
                            {t('projectsPage.hero.subtitle')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="py-20 bg-white dark:bg-slate-950">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
                            {t('projectsPage.projectsSection.title')}
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            {t('projectsPage.projectsSection.subtitle')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                                <div className="relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                </div>
                                <CardContent className="p-6 bg-slate-50 dark:bg-slate-900">
                                    <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white">{project.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>
                                    <div className="flex items-center gap-2 text-orange-600 font-medium group-hover:gap-3 transition-all">
                                        <span>{t('projectsPage.projectsSection.viewDetails')}</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Company Images Section */}
            <section className="py-20 bg-slate-50 dark:bg-slate-900">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
                            {t('projectsPage.imagesSection.title')} <span className="text-orange-600">{t('projectsPage.imagesSection.highlight')}</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            {t('projectsPage.imagesSection.subtitle')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {companyImages.map((item, index) => (
                            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                                    <h3 className="text-white font-bold text-lg">{item.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Capabilities Section */}
            <section className="py-20 bg-white dark:bg-slate-950">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
                                {t('projectsPage.capabilitiesSection.title')}
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <Card className="border-l-4 border-orange-600 shadow-lg">
                                <CardContent className="p-8">
                                    <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">
                                        {t('projectsPage.capabilitiesSection.completedProjects.title')}
                                    </h3>
                                    <ul className="space-y-4">
                                        {Array.isArray(completedProjectsList) && completedProjectsList.map((item, index) => (
                                            <li key={index} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                                                <CheckCircle2 className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="border-l-4 border-blue-600 shadow-lg">
                                <CardContent className="p-8">
                                    <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">
                                        {t('projectsPage.capabilitiesSection.typicalClients.title')}
                                    </h3>
                                    <ul className="space-y-4">
                                        {Array.isArray(typicalClientsList) && typicalClientsList.map((item, index) => (
                                            <li key={index} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                                                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        {t('projectsPage.cta.title')}
                    </h2>
                    <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                        {t('projectsPage.cta.subtitle')}
                    </p>
                    <Link to={createPageUrl('Contact')}>
                        <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8">
                            {t('projectsPage.cta.buttonText')}
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}