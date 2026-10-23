import Image from 'next/image';
import React from 'react';

export interface GalleryItem {
    image: string;
    title: string;
}

export function GalleryImage({ item }: { item: GalleryItem }) {
    return (
        <div className="group relative overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 aspect-[4/3] sm:aspect-square">
            <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                loading="lazy"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent flex items-end p-5">
                <h3 className="text-white font-bold text-base sm:text-lg leading-snug">{item.title}</h3>
            </div>
        </div>
    );
}
