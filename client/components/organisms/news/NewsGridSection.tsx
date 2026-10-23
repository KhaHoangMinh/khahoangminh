import React from 'react';
import { NewsCard, ComingSoonCard } from '@/components/molecules';

interface NewsItem {
    image: string;
    title: string;
    date: string;
    excerpt: string;
}

interface NewsGridSectionProps {
    newsItems: NewsItem[];
    readMoreText: string;
    footerText: string;
    footerLinkText: string;
}

export function NewsGridSection({ newsItems, readMoreText, footerText, footerLinkText }: NewsGridSectionProps) {
    return (
        <section className="section-frame-full surface-canvas">
            <div className="container-khm">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array.isArray(newsItems) && newsItems.map((news, index) => (
                        <NewsCard 
                            key={index} 
                            news={news} 
                            readMoreText={readMoreText} 
                        />
                    ))}
                </div>

                <ComingSoonCard 
                    text={footerText}
                    linkText={footerLinkText}
                />
            </div>
        </section>
    );
}
