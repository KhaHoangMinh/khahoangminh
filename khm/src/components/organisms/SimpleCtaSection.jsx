import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/atoms';
import { createPageUrl } from '@/utils';

export function SimpleCtaSection({ title, description, buttonText, buttonLink }) {
    return (
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950 text-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    {title}
                </h2>
                <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                    {description}
                </p>
                <Link to={createPageUrl(buttonLink)}>
                    <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 transition-transform hover:scale-105 shadow-lg">
                        {buttonText}
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </Link>
            </div>
        </section>
    );
}