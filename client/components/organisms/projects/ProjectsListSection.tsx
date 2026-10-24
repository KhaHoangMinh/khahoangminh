import { ProjectCard } from '@/components/molecules';

interface Project {
    title: string;
    description: string;
    image: string;
}

interface ProjectsListSectionProps {
    title: string;
    subtitle: string;
    projects: Project[];
    viewDetailsText: string;
}

export function ProjectsListSection({ title, subtitle, projects, viewDetailsText }: ProjectsListSectionProps) {
    return (
        <section className="section-frame-half surface-canvas">
            <div className="container-khm">
                <div className="text-center mb-6 sm:mb-8">
                    <div className="w-12 h-1 bg-gradient-to-r from-orange-600 to-amber-500 rounded-full mx-auto mb-2.5" />
                    <h2 className="heading-section mb-2">
                        {title}
                    </h2>
                    <p className="text-lead max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
