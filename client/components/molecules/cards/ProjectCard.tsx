import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/atoms';
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
        <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-slate-900">
            <div className="relative overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
            <CardContent className="p-6 bg-slate-50 dark:bg-slate-900">
                <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>
                <div className="flex items-center gap-2 text-orange-600 font-medium group-hover:gap-3 transition-all cursor-pointer">
                    <span>{viewDetailsText}</span>
                    <ArrowRight className="w-4 h-4" />
                </div>
            </CardContent>
        </Card>
    );
}