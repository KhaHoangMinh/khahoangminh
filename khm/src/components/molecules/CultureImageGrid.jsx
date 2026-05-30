import React from 'react';

export function CultureImageGrid() {
    return (
        <div className="grid grid-cols-2 gap-4">
            <img
                src="http://khahoangminh.com.vn/upload/news/co%CC%82ng%20ty%20inox%20kha%20hoa%CC%80ng%20minh%201.jpg"
                alt="Team"
                loading="lazy"
                className="rounded-lg shadow-lg w-full h-48 object-cover"
            />
            <img
                src="http://khahoangminh.com.vn/upload/news/co%CC%82ng%20ty%20inox%20kha%20hoa%CC%80ng%20minh%203.jpg"
                alt="Workplace"
                loading="lazy"
                className="rounded-lg shadow-lg w-full h-48 object-cover mt-8"
            />
            <img
                src="http://khahoangminh.com.vn/upload/news/co%CC%82ng%20ty%20inox%20kha%20hoa%CC%80ng%20minh%204.jpg"
                alt="Office"
                loading="lazy"
                className="rounded-lg shadow-lg w-full h-48 object-cover -mt-8"
            />
            <img
                src="http://khahoangminh.com.vn/upload/news/co%CC%82ng%20ty%20inox%20kha%20hoa%CC%80ng%20minh%202.jpg"
                alt="Facility"
                loading="lazy"
                className="rounded-lg shadow-lg w-full h-48 object-cover"
            />
        </div>
    );
}