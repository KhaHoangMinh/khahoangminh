import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/atoms';

export function NewsCard({ news, readMoreText }) {
    return (
        <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white dark:bg-slate-900">
            <div className="relative overflow-hidden">
                <img
                    src={news.image}
                    alt={news.title}
                    loading="lazy"
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-md">
                    <Calendar className="w-3 h-3" />
                    {news.date}
                </div>
            </div>
            <CardContent className="p-6 bg-slate-50 dark:bg-slate-900">
                <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-500 transition-colors">
                    {news.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">{news.excerpt}</p>
                <div className="flex items-center gap-2 text-orange-600 font-medium group-hover:gap-3 transition-all">
                    <span>{readMoreText}</span>
                    <ArrowRight className="w-4 h-4" />
                </div>
            </CardContent>
        </Card>
    );
}