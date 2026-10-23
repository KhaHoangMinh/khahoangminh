"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Play, Clock, Sparkles, ArrowRight, X } from 'lucide-react';
import { Card, CardContent, Button, Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/atoms';
import { useLanguage } from '@/services';
import { createPageUrl } from '@/lib';

export interface VideoItem {
    id: string;
    title: string;
    category: string;
    duration: string;
    thumbnail: string;
    description: string;
    videoUrl: string;
}

interface VideoShowcaseSectionProps {
    title: string;
    description: string;
    facebookText: string;
    contactText: string;
}

export function VideoShowcaseSection({
    title,
    description,
    contactText,
}: VideoShowcaseSectionProps) {
    const { t } = useLanguage();
    const [activeCategory, setActiveCategory] = useState<string>('all');
    const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

    const videoItems = (t('videosPage.items') as VideoItem[]) || [];

    const categories = [
        { key: 'all', label: t('videosPage.categories.all') || 'Tất cả' },
        { key: 'machining', label: t('videosPage.categories.machining') || 'Gia công CNC & Laser' },
        { key: 'warehouse', label: t('videosPage.categories.warehouse') || 'Kho xưởng & Dây chuyền' },
    ];

    const filteredVideos = activeCategory === 'all'
        ? videoItems
        : videoItems.filter(v => v.category === activeCategory);

    return (
        <section className="section-frame-full surface-canvas">
            <div className="container-khm space-y-10">
                {/* Intro Section Banner */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200/80 dark:border-slate-800">
                    <div className="max-w-2xl space-y-2">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-500/30">
                            <Sparkles className="w-3.5 h-3.5" />
                            {title}
                        </div>
                        <h2 className="heading-section text-slate-900 dark:text-slate-50">
                            {title}
                        </h2>
                        <p className="text-body">
                            {description}
                        </p>
                    </div>

                    {/* Category Filter Pills */}
                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat.key}
                                onClick={() => setActiveCategory(cat.key)}
                                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                                    activeCategory === cat.key
                                        ? 'bg-orange-600 text-white shadow-md'
                                        : 'bg-slate-100 dark:bg-[#182234] text-slate-700 dark:text-slate-200 hover:text-orange-600 dark:hover:text-orange-400 border border-slate-200/80 dark:border-slate-700/80'
                                }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Video Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {filteredVideos.map((video) => (
                        <Card
                            key={video.id}
                            onClick={() => setSelectedVideo(video)}
                            className="group h-full flex flex-col card-khm overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Video Thumbnail Stage with Play Button */}
                            <div className="relative h-52 sm:h-60 overflow-hidden bg-slate-950">
                                <Image
                                    src={video.thumbnail}
                                    alt={video.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    loading="lazy"
                                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                                {/* Duration Badge */}
                                <div className="absolute top-3.5 right-3.5 bg-slate-900/80 backdrop-blur-xs text-white px-2.5 py-1 rounded-md text-xs font-medium flex items-center gap-1 border border-white/10">
                                    <Clock className="w-3 h-3 text-orange-400" />
                                    {video.duration}
                                </div>

                                {/* Animated Centered Play Button */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-orange-600/90 text-white flex items-center justify-center shadow-xl shadow-orange-600/40 group-hover:scale-110 group-hover:bg-orange-500 transition-all duration-300">
                                        <Play className="w-7 h-7 ml-1 fill-white" />
                                    </div>
                                </div>
                            </div>

                            {/* Card Details */}
                            <CardContent className="p-5 sm:p-6 bg-slate-50/60 dark:bg-[#182234] flex flex-col flex-grow justify-between gap-4">
                                <div className="space-y-2">
                                    <h3 className="heading-card text-base sm:text-lg group-hover:text-orange-600 dark:group-hover:text-orange-300 transition-colors line-clamp-2">
                                        {video.title}
                                    </h3>
                                    <p className="text-body text-xs sm:text-sm line-clamp-3">
                                        {video.description}
                                    </p>
                                </div>

                                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-orange-600 dark:text-orange-400 group-hover:gap-3 transition-all pt-2 border-t border-slate-200/80 dark:border-slate-700/80 mt-auto">
                                    <span>{t('videosPage.modal.watchVideo')}</span>
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Bottom Factory Support Callout */}
                <div className="surface-band-alt border border-orange-200/80 dark:border-slate-700/80 p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
                    <div className="space-y-1 max-w-2xl">
                        <h3 className="heading-card text-lg sm:text-xl text-slate-900 dark:text-slate-50">
                            {t('videosPage.content.title')}
                        </h3>
                        <p className="text-body text-xs sm:text-sm">
                            {t('videosPage.content.description')}
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                        <Link href={createPageUrl('contact')} className="w-full sm:w-auto">
                            <Button className="w-full sm:w-auto rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-semibold">
                                {contactText}
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Interactive Video Player Dialog */}
                <Dialog open={!!selectedVideo} onOpenChange={(open) => { if (!open) setSelectedVideo(null); }}>
                    <DialogContent 
                        showCloseButton={false}
                        className="max-w-4xl p-0 overflow-hidden rounded-2xl bg-white dark:bg-[#0B0F17] border border-slate-200/90 dark:border-slate-800 text-slate-900 dark:text-slate-50 shadow-2xl"
                    >
                        <DialogHeader className="p-4 sm:p-5 border-b border-slate-200/90 dark:border-slate-800 bg-slate-50/90 dark:bg-[#111827] flex flex-row items-center justify-between">
                            <DialogTitle className="text-base sm:text-lg font-bold text-slate-900 dark:text-white line-clamp-1 pr-4">
                                {selectedVideo?.title}
                            </DialogTitle>
                            <button
                                onClick={() => setSelectedVideo(null)}
                                aria-label={t('videosPage.modal.close')}
                                className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center justify-center transition-colors shrink-0"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </DialogHeader>

                        {/* Video Player Box */}
                        <div className="relative aspect-video w-full bg-black">
                            {selectedVideo && (
                                <iframe
                                    src={`${selectedVideo.videoUrl}?autoplay=1`}
                                    title={selectedVideo.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full border-0"
                                />
                            )}
                        </div>

                        {/* Video Dialog Footer Action */}
                        <div className="p-4 sm:p-5 bg-slate-50/90 dark:bg-[#111827] border-t border-slate-200/90 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-2">
                                {selectedVideo?.description}
                            </p>
                            <Link
                                href={`${createPageUrl('contact')}?product=${encodeURIComponent(`Gia công theo video: ${selectedVideo?.title}`)}`}
                                onClick={() => setSelectedVideo(null)}
                                className="w-full sm:w-auto shrink-0"
                            >
                                <Button className="w-full sm:w-auto rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-semibold">
                                    {t('videosPage.modal.consultNow')}
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </Link>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </section>
    );
}
