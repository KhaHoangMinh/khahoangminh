import React from 'react';
import { GalleryImage, type GalleryItem } from '@/components/molecules';

interface ImageGallerySectionProps {
    title: string;
    highlight: string;
    subtitle: string;
    images: GalleryItem[];
}

export function ImageGallerySection({ title, highlight, subtitle, images }: ImageGallerySectionProps) {
    return (
        <section className="py-20 bg-slate-50 dark:bg-slate-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
                        {title} <span className="text-orange-600">{highlight}</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {Array.isArray(images) && images.map((item, index) => (
                        <GalleryImage key={index} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}