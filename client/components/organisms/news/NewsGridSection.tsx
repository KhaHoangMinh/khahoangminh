"use client";

import { useState } from 'react';
import { NewsCard, ComingSoonCard, NewsModal } from '@/components/molecules';

interface NewsItem {
    image: string;
    title: string;
    date: string;
    excerpt: string;
    content?: string;
}

interface NewsGridSectionProps {
    newsItems: NewsItem[];
    readMoreText: string;
    footerText: string;
    footerLinkText: string;
}

export function NewsGridSection({ newsItems, readMoreText, footerText, footerLinkText }: NewsGridSectionProps) {
    const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);

    return (
        <section className="section-frame-full surface-canvas">
            <div className="container-khm">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array.isArray(newsItems) && newsItems.map((news, index) => (
                        <NewsCard 
                            key={index} 
                            news={news} 
                            readMoreText={readMoreText} 
                            onClick={() => setSelectedArticle(news)}
                        />
                    ))}
                </div>

                <ComingSoonCard 
                    text={footerText}
                    linkText={footerLinkText}
                />

                <NewsModal
                    article={selectedArticle}
                    isOpen={!!selectedArticle}
                    onClose={() => setSelectedArticle(null)}
                />
            </div>
        </section>
    );
}
