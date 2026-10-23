import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/atoms';
import { createPageUrl } from '@/lib';
import Image from 'next/image';

interface ProjectData {
    title: string;
    description: string;
    image: string;
}

interface ProjectCardProps {
    project: ProjectData;
    viewDetailsText: string;
}

export function ProjectCard({ project, viewDetailsText }: ProjectCardProps) {
    return (
        <Card className="h-full flex flex-col group overflow-hidden card-khm">
            <div className="relative h-56 sm:h-60 overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />
            </div>
            <CardContent className="p-6 bg-slate-50/60 dark:bg-[#182234] flex flex-col flex-grow justify-between gap-4">
                <div>
                    <h3 className="heading-card mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-300 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-body">{project.description}</p>
                </div>
                <Link
                    href={createPageUrl('contact')}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 dark:text-orange-300 group-hover:gap-3 transition-all mt-auto"
                >
                    <span>{viewDetailsText}</span>
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </CardContent>
        </Card>
    );
}
