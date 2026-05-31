import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/atoms';
import { createPageUrl } from '@/utils';

export function FeaturedServiceSection({ badge, title, highlight, description, features, buttonText, image }) {
    return (
        <section className="py-20 bg-slate-50 dark:bg-slate-900">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-block bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-500 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                            {badge}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800 dark:text-white">
                            {title} <span className="text-orange-600">{highlight}</span>
                        </h2>
                        <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                            {description}
                        </p>
                        <ul className="space-y-3 mb-8">
                            {Array.isArray(features) && features.map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                                    <span className="w-6 h-6 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Link to={createPageUrl('contact')}>
                            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white shadow-lg transition-transform hover:scale-105">
                                {buttonText}
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </div>
                    <div>
                        <img
                            src={image}
                            alt={title}
                            loading="lazy"
                            className="rounded-2xl shadow-2xl w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}