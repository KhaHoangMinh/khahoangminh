import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://khahoangminh.com.vn';
    const lastModified = new Date();

    const routes: Array<{ path: string; priority: number; changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' }> = [
        { path: '', priority: 1.0, changeFrequency: 'weekly' },
        { path: '/products', priority: 0.9, changeFrequency: 'weekly' },
        { path: '/services', priority: 0.9, changeFrequency: 'weekly' },
        { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
        { path: '/projects', priority: 0.8, changeFrequency: 'monthly' },
        { path: '/videos', priority: 0.8, changeFrequency: 'monthly' },
        { path: '/news', priority: 0.7, changeFrequency: 'weekly' },
        { path: '/careers', priority: 0.6, changeFrequency: 'monthly' },
        { path: '/contact', priority: 0.8, changeFrequency: 'monthly' },
        { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
        { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
        { path: '/protection', priority: 0.3, changeFrequency: 'yearly' },
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route.path}`,
        lastModified,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }));
}
