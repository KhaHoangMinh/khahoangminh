import React from 'react';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import { FaFacebook } from 'react-icons/fa';
import { createPageUrl } from '@/lib';

interface SocialContactButtonGroupProps {
    facebookText: string;
    contactText: string;
}

export function SocialContactButtonGroup({ facebookText, contactText }: SocialContactButtonGroupProps) {
    return (
        <div className="flex flex-wrap gap-4 justify-center">
            <a
                href="https://www.facebook.com/profile.php?id=100054573575093"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 shadow-lg shadow-blue-600/20 hover:-translate-y-0.5"
            >
                <FaFacebook className="w-5 h-5" />
                {facebookText}
            </a>

            <Link
                href={createPageUrl('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium transition-all duration-300 shadow-lg shadow-orange-600/20 hover:-translate-y-0.5"
            >
                <Mail className="w-5 h-5" />
                {contactText}
            </Link>
        </div>
    );
}