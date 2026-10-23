"use client";

import React from 'react';
import { ActionButtonGroup } from '@/components/molecules';
import { ShieldCheck, Layers, Cpu, Truck } from 'lucide-react';
import { useLanguage } from '@/services';
import Image from 'next/image';

interface PremiumHeroProps {
    title: string;
    subtitle: string;
    description: string;
    badgeText: string;
    backgroundImage: string;
}

export function PremiumHero({ title, subtitle, description, badgeText, backgroundImage }: PremiumHeroProps) {
    const { language } = useLanguage();
    const isVi = language !== 'en';

    const highlights = [
        {
            icon: Layers,
            badge: "SUS 304 • 316 • 201 • 430",
            title: isVi ? "Đa Dạng Chủng Loại" : "Full Grade Selection",
            desc: isVi ? "Tấm, cuộn, ống, hộp, la, vê và phụ kiện inox công nghiệp & dân dụng." : "Sheets, coils, pipes, bars, angles & industrial stainless steel fittings."
        },
        {
            icon: Cpu,
            badge: "CNC LASER • PLASMA",
            title: isVi ? "Gia Công Chính Xác" : "Precision Processing",
            desc: isVi ? "Cắt chấn CNC, đột dập, hàn hoàn thiện theo bản vẽ kỹ thuật." : "High-precision CNC cutting, bending, and custom fabrication."
        },
        {
            icon: ShieldCheck,
            badge: "100% CO / CQ",
            title: isVi ? "Nguồn Gốc Chính Ngạch" : "Certified Origin",
            desc: isVi ? "Nhập khẩu trực tiếp từ các tập đoàn thép không gỉ hàng đầu thế giới." : "Directly imported with full mill test certificates and quality assurance."
        },
        {
            icon: Truck,
            badge: "24/7 LOGISTICS",
            title: isVi ? "Giao Hàng Toàn Quốc" : "Nationwide Delivery",
            desc: isVi ? "Kho bãi quy mô lớn tại TP.HCM, đáp ứng nhanh mọi tiến độ công trình." : "Large-scale warehouse in HCMC ensuring rapid project fulfillment."
        }
    ];

    return (
        <section className="relative py-10 sm:py-12 lg:py-14 flex flex-col justify-center bg-orange-50/50 dark:bg-[#0B0F17] text-slate-900 dark:text-slate-50 overflow-hidden border-b border-orange-200/60 dark:border-slate-800/90 transition-colors">
            {/* Background Image */}
            <Image 
                src={backgroundImage} 
                alt={title || "Kha Hoàng Minh Inox"} 
                priority
                fill
                sizes="100vw"
                className="absolute inset-0 w-full h-full object-cover opacity-12 dark:opacity-25"
            />
            {/* KHM Industrial Steel Overlays + Subtle Blueprint CAD Grid */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-50/95 via-white/90 to-amber-50/85 dark:from-[#0B0F17]/95 dark:via-[#111827]/88 dark:to-[#182234]/80" />
            <div className="absolute inset-0 blueprint-grid pointer-events-none opacity-40 dark:opacity-50" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-orange-500/15 via-amber-500/5 to-transparent dark:from-orange-500/22 dark:via-amber-500/8 dark:to-transparent pointer-events-none" />
            
            <div className="container-khm relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                    {/* Left Column: Hero Value Proposition & CTAs */}
                    <div className="lg:col-span-7">
                        <div className="inline-flex items-center gap-2 bg-orange-500/15 dark:bg-orange-500/20 border border-orange-500/35 dark:border-orange-400/50 text-orange-700 dark:text-orange-300 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-orange-600 dark:bg-orange-400 animate-pulse" />
                            <span>{badgeText}</span>
                        </div>

                        <h1 className="heading-display text-slate-900 dark:text-slate-50 mb-4 whitespace-pre-line">
                            {title}
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 dark:from-orange-400 dark:via-amber-300 dark:to-orange-400">
                                {subtitle}
                            </span>
                        </h1>

                        <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 mb-6 leading-relaxed max-w-2xl">
                            {description}
                        </p>

                        <ActionButtonGroup />
                    </div>

                    {/* Right Column: 2x2 Industrial Highlights Bento Grid */}
                    <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                        {highlights.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={idx}
                                    className="group p-4 sm:p-5 rounded-2xl bg-white/95 dark:bg-[#182234]/95 backdrop-blur-md border border-orange-200/70 dark:border-slate-700/85 dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] hover:border-orange-500/60 dark:hover:border-orange-400/65 shadow-md shadow-orange-950/5 dark:shadow-black/40 transition-all duration-300 hover:-translate-y-0.5 flex flex-col justify-between relative overflow-hidden"
                                >
                                    {/* Metallic Sheen Glide */}
                                    <div className="sheen-overlay" />
                                    
                                    {/* Subtle Corner Brackets on Hover */}
                                    <div className="blueprint-corner-tl opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="blueprint-corner-br opacity-0 group-hover:opacity-100 transition-opacity" />

                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between gap-2 mb-3">
                                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-600 to-amber-500 flex items-center justify-center text-white shadow-sm shadow-orange-500/25 group-hover:scale-105 transition-transform">
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-orange-500/10 dark:bg-orange-500/20 text-orange-700 dark:text-orange-300 border border-orange-500/25 dark:border-orange-400/35">
                                                {item.badge}
                                            </span>
                                        </div>

                                        <h2 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-50 mb-1 group-hover:text-orange-600 dark:group-hover:text-orange-300 transition-colors">
                                            {item.title}
                                        </h2>

                                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-200 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
