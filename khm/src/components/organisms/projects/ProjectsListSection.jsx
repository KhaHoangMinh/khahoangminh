import React from 'react';
import { ProjectCard } from '@/components/molecules';

export function ProjectsListSection({ title, subtitle, projects, viewDetailsText }) {
    return (
        <section className="py-20 bg-white dark:bg-slate-950">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
                        {title}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {Array.isArray(projects) && projects.map((project, index) => (
                        <ProjectCard 
                            key={index} 
                            project={project} 
                            viewDetailsText={viewDetailsText} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}