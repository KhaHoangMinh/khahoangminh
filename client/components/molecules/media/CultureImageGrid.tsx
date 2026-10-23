import Image from 'next/image';
import React from 'react';

export function CultureImageGrid() {
    const images = [
        { src: "http://khahoangminh.com.vn/upload/news/co%CC%82ng%20ty%20inox%20kha%20hoa%CC%80ng%20minh%201.jpg", alt: "Team", offset: "" },
        { src: "http://khahoangminh.com.vn/upload/news/co%CC%82ng%20ty%20inox%20kha%20hoa%CC%80ng%20minh%203.jpg", alt: "Workplace", offset: "sm:mt-6" },
        { src: "http://khahoangminh.com.vn/upload/news/co%CC%82ng%20ty%20inox%20kha%20hoa%CC%80ng%20minh%204.jpg", alt: "Office", offset: "sm:-mt-6" },
        { src: "http://khahoangminh.com.vn/upload/news/co%CC%82ng%20ty%20inox%20kha%20hoa%CC%80ng%20minh%202.jpg", alt: "Facility", offset: "" },
    ];

    return (
        <div className="grid grid-cols-2 gap-3.5 sm:gap-4">
            {images.map((img, idx) => (
                <div
                    key={idx}
                    className={`relative rounded-xl overflow-hidden shadow-md border border-slate-200/80 dark:border-slate-800 h-36 sm:h-44 ${img.offset}`}
                >
                    <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        loading="lazy"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                </div>
            ))}
        </div>
    );
}
