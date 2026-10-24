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
        <div className="flex flex-col sm:flex-row flex-wrap gap-3.5 justify-center">
            <a
                href="https://www.facebook.com/profile.php?id=100054573575093"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 h-12 px-7 bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white border border-slate-700/80 rounded-xl font-semibold text-sm transition-all duration-200 shadow-md hover:-translate-y-0.5"
            >
                <FaFacebook className="w-4 h-4 text-orange-400" />
                {facebookText}
            </a>

            <Link
                href={createPageUrl('contact')}
                className="inline-flex items-center justify-center gap-2.5 h-12 px-7 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-orange-600 text-white rounded-xl font-semibold text-sm transition-all duration-200 shadow-md shadow-orange-600/25 hover:-translate-y-0.5"
            >
                <Mail className="w-4 h-4" />
                {contactText}
            </Link>
        </div>
    );
}
