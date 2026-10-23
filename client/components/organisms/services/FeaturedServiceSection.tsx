import React from 'react';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/atoms';
import { createPageUrl } from '@/lib';
import Image from 'next/image';

interface FeaturedServiceSectionProps {
    badge: string;
    title: string;
    highlight: string;
    description: string;
    features: string[];
    buttonText: string;
    image: string;
}

export function FeaturedServiceSection({
    badge,
    title,
    highlight,
    description,
    features,
    buttonText,
    image,
}: FeaturedServiceSectionProps) {
    return (
        <section className="section-frame-half surface-band-alt">
            <div className="container-khm">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                    <div className="lg:col-span-7">
                        <span className="badge-khm mb-3">
                            {badge}
                        </span>
                        <h2 className="heading-section mb-4">
                            {title}{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500 dark:from-orange-400 dark:to-amber-300">
                                {highlight}
                            </span>
                        </h2>
                        <p className="text-body mb-6">
                            {description}
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-7">
                            {Array.isArray(features) && features.map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-slate-700 dark:text-slate-200">
                                    <span className="w-6 h-6 bg-orange-500/15 dark:bg-orange-500/20 text-orange-600 dark:text-orange-300 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                                        <Check className="w-3.5 h-3.5" />
                                    </span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Link href={createPageUrl('contact')}>
                            <Button
                                size="lg"
                                className="h-12 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-orange-600 text-white font-semibold px-7 rounded-xl shadow-md shadow-orange-600/20 transition-all hover:-translate-y-0.5"
                            >
                                {buttonText}
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </div>
                    <div className="lg:col-span-5">
                        <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 dark:border-slate-800 aspect-[4/3]">
                            <Image
                                src={image}
                                alt={title}
                                fill
                                sizes="(max-width: 1024px) 100vw, 42vw"
                                loading="lazy"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
