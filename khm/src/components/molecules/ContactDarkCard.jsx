import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { Card, CardContent, Button } from '@/components/atoms';
import { createPageUrl } from '@/utils';

export function ContactDarkCard({ title, desc, buttonText, icon: Icon = Mail }) {
    return (
        <Card className="bg-slate-900 text-white border border-slate-800 shadow-xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-blue-500/10 opacity-50" />
            <CardContent className="p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                <div>
                    <h3 className="text-xl font-bold mb-2">{title}</h3>
                    <p className="text-slate-400 text-sm">{desc}</p>
                </div>
                <Link to={createPageUrl('contact')}>
                    <Button size="lg" className="bg-orange-600 hover:bg-orange-700 shadow-lg shadow-orange-600/20 transition-transform hover:scale-105">
                        <Icon className="mr-2 w-4 h-4" />
                        {buttonText}
                    </Button>
                </Link>
            </CardContent>
        </Card>
    );
}