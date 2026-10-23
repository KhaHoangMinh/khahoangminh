"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, Button } from '@/components/atoms';
import { useLanguage } from '@/services';
import { createPageUrl } from '@/lib';

export interface NewsArticle {
    title: string;
    date: string;
    image: string;
    excerpt: string;
    content?: string;
}

interface NewsModalProps {
    article: NewsArticle | null;
    isOpen: boolean;
    onClose: () => void;
}

export function NewsModal({ article, isOpen, onClose }: NewsModalProps) {
    const { t } = useLanguage();

    if (!article) return null;

    return (
        <Dialog open={isOpen} onOpenChange={(open) => { if (!open) onClose(); }}>
            <DialogContent className="max-w-3xl p-0 overflow-hidden rounded-2xl bg-white dark:bg-[#0B0F17] border border-slate-200/80 dark:border-slate-800">
                <DialogHeader className="sr-only">
                    <DialogTitle>{article.title}</DialogTitle>
                </DialogHeader>

                {/* Article Header Image */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
                    <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 768px"
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                    
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                        <span className="flex items-center gap-1.5 bg-orange-600 px-3 py-1 rounded-full font-semibold shadow-md">
                            <Calendar className="w-3.5 h-3.5" />
                            {article.date}
                        </span>
                        <span className="flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-xs px-3 py-1 rounded-full text-slate-200">
                            <User className="w-3.5 h-3.5 text-orange-400" />
                            {t('newsModal.author')}
                        </span>
                    </div>
                </div>

                {/* Article Content Body */}
                <div className="p-6 sm:p-8 space-y-4 max-h-[60vh] overflow-y-auto">
                    <h2 className="heading-card !text-xl sm:!text-2xl text-slate-900 dark:text-slate-50 leading-snug">
                        {article.title}
                    </h2>

                    <div className="text-body space-y-3 leading-relaxed">
                        <p className="font-semibold text-slate-800 dark:text-slate-100 text-base border-l-4 border-orange-500 pl-3">
                            {article.excerpt}
                        </p>
                        <p>
                            {article.content || (
                                <>
                                    Kha Hoàng Minh tự hào là một trong những đơn vị nhập khẩu và phân phối trực tiếp các dòng sản phẩm thép không gỉ (Inox) SUS 304, SUS 316, SUS 201, SUS 430 hàng đầu tại Việt Nam. Toàn bộ sản phẩm đều có đầy đủ chứng chỉ chất lượng (CO/CQ) từ các nhà sản xuất quốc tế danh tiếng như POSCO, Hyundai Steel, Nippon Steel.
                                </>
                            )}
                        </p>
                        <p>
                            Với hệ thống kho bãi rộng lớn tại Bình Tân (TP.HCM) và xưởng gia công quy mô tại Dĩ An (Bình Dương), chúng tôi sẵn sàng đáp ứng nhanh chóng các đơn hàng cuộn, tấm, ống công nghiệp, phụ kiện đường ống và dịch vụ cắt CNC Plasma, cắt Laser fiber công suất cao theo yêu cầu kỹ thuật khắt khe.
                        </p>
                    </div>

                    {/* Bottom Action Section */}
                    <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                        <Link
                            href={`${createPageUrl('contact')}?product=${encodeURIComponent(`Tư vấn bài viết: ${article.title}`)}`}
                            onClick={onClose}
                            className="w-full sm:w-auto"
                        >
                            <Button className="w-full sm:w-auto rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-semibold">
                                {t('newsModal.contactForDetails')}
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>

                        <Button
                            variant="outline"
                            onClick={onClose}
                            className="w-full sm:w-auto rounded-xl border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200"
                        >
                            {t('newsModal.close')}
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
