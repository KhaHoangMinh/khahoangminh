import Image from 'next/image';
import React from 'react';

export function CultureImageGrid() {
    return (
        <div className="grid grid-cols-2 gap-4">
            <Image
                src="http://khahoangminh.com.vn/upload/news/co%CC%82ng%20ty%20inox%20kha%20hoa%CC%80ng%20minh%201.jpg"
                alt="Team"
                width={600}
                height={400}
                loading="lazy"
                className="rounded-lg shadow-lg w-full h-48 object-cover"
            />
            <Image
                src="http://khahoangminh.com.vn/upload/news/co%CC%82ng%20ty%20inox%20kha%20hoa%CC%80ng%20minh%203.jpg"
                alt="Workplace"
                width={600}
                height={400}
                loading="lazy"
                className="rounded-lg shadow-lg w-full h-48 object-cover mt-8"
            />
            <Image
                src="http://khahoangminh.com.vn/upload/news/co%CC%82ng%20ty%20inox%20kha%20hoa%CC%80ng%20minh%204.jpg"
                alt="Office"
                width={600}
                height={400}
                loading="lazy"
                className="rounded-lg shadow-lg w-full h-48 object-cover -mt-8"
            />
            <Image
                src="http://khahoangminh.com.vn/upload/news/co%CC%82ng%20ty%20inox%20kha%20hoa%CC%80ng%20minh%202.jpg"
                alt="Facility"
                width={600}
                height={400}
                loading="lazy"
                className="rounded-lg shadow-lg w-full h-48 object-cover"
            />
        </div>
    );
}