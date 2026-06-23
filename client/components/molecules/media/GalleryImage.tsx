import Image from 'next/image';
import React from 'react';

export interface GalleryItem {
    image: string;
    title: string;
}

export function GalleryImage({ item }: { item: GalleryItem }) {
    return (
        <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square">
            <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={800}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                <h3 className="text-white font-bold text-lg">{item.title}</h3>
            </div>
        </div>
    );
}