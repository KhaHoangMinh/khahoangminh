import React from 'react';
import { NewsCard, ComingSoonCard } from '@/components/molecules';

export function NewsGridSection({ newsItems, readMoreText, footerText, footerLinkText }) {
    return (
        <section className="py-20 bg-white dark:bg-slate-950">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            </div>
        </section>
    );
}