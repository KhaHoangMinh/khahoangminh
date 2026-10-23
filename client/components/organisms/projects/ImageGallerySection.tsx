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
        <section className="section-frame-half surface-band-alt">
            <div className="container-khm">
                <div className="text-center mb-6 sm:mb-8">
                    <div className="w-12 h-1 bg-gradient-to-r from-orange-600 to-amber-500 rounded-full mx-auto mb-2.5" />
                    <h2 className="heading-section mb-2">
                        {title}{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500 dark:from-orange-400 dark:to-amber-400">
                            {highlight}
                        </span>
                    </h2>
                    <p className="text-lead max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
                    {Array.isArray(images) && images.map((item, index) => (
                        <GalleryImage key={index} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
