export interface NavigationItem {
    translationKey: string;
    pageKey: string;
    href: string;
}

export const mainNavigation = [
    { translationKey: 'nav.home', pageKey: '', href: '/' },
    { translationKey: 'nav.about', pageKey: 'about', href: '/about' },
    { translationKey: 'nav.products', pageKey: 'products', href: '/products' },
    { translationKey: 'nav.services', pageKey: 'services', href: '/services' },
    { translationKey: 'nav.projects', pageKey: 'projects', href: '/projects' },
    { translationKey: 'nav.videos', pageKey: 'videos', href: '/videos' },
    { translationKey: 'nav.careers', pageKey: 'careers', href: '/careers' },
    { translationKey: 'nav.news', pageKey: 'news', href: '/news' },
    { translationKey: 'nav.contact', pageKey: 'contact', href: '/contact' },
];

export const legalNavigation = [
    { translationKey: 'footer.protection', pageKey: 'protection', href: '/protection' },
    { translationKey: 'footer.privacy', pageKey: 'privacy', href: '/privacy' },
    { translationKey: 'footer.terms', pageKey: 'terms', href: '/terms' },
];

export const KNOWN_ROUTES = new Set([
    '/',
    '/about',
    '/products',
    '/services',
    '/projects',
    '/videos',
    '/careers',
    '/news',
    '/contact',
    '/protection',
    '/privacy',
    '/terms',
]);

export function isKnownRoute(pathname: string | null | undefined): boolean {
    if (!pathname) return false;
    const normalized = pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
    return KNOWN_ROUTES.has(normalized);
}