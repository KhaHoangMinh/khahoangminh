import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge"; 

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createPageUrl(pageName?: string) {
    if (!pageName || pageName === 'home' || pageName === '/') return '/';
    const cleanPath = pageName.replace(/^\/+/, '').replace(/ /g, '-');
    return `/${cleanPath}`;
}

export function getAssetPath(src?: string): string {
    if (!src) return '';
    if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:')) {
        return src;
    }
    const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || '').trim();
    const cleanSrc = src.startsWith('/') ? src : `/${src}`;
    if (basePath && (cleanSrc === basePath || cleanSrc.startsWith(`${basePath}/`))) {
        return cleanSrc;
    }
    return `${basePath}${cleanSrc}`;
}