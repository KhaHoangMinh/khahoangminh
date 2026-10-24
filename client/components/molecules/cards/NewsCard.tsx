import { Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/atoms';
import Image from 'next/image';

interface NewsData {
    image: string;
    title: string;
    date: string;
    excerpt: string;
}

interface NewsCardProps {
    news: NewsData;
    readMoreText: string;
    onClick?: () => void;
}

export function NewsCard({ news, readMoreText, onClick }: NewsCardProps) {
    return (
        <Card 
            onClick={onClick}
            role={onClick ? "button" : undefined}
            tabIndex={onClick ? 0 : undefined}
            onKeyDown={(e) => {
                if (onClick && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault();
                    onClick();
                }
            }}
            className="h-full flex flex-col group overflow-hidden card-khm cursor-pointer transition-all duration-300 hover:-translate-y-1"
        >
            <div className="relative h-52 sm:h-56 overflow-hidden">
                <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3.5 right-3.5 bg-gradient-to-r from-orange-600 to-amber-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-md">
                    <Calendar className="w-3 h-3" />
                    {news.date}
                </div>
            </div>
            <CardContent className="p-6 bg-slate-50/60 dark:bg-[#182234] flex flex-col flex-grow justify-between gap-4">
                <div>
                    <h3 className="heading-card mb-2.5 group-hover:text-orange-600 dark:group-hover:text-orange-300 transition-colors">
                        {news.title}
                    </h3>
                    <p className="text-body line-clamp-3">{news.excerpt}</p>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-orange-600 dark:text-orange-300 group-hover:gap-3 transition-all mt-auto">
                    <span>{readMoreText}</span>
                    <ArrowRight className="w-4 h-4" />
                </div>
            </CardContent>
        </Card>
    );
}
