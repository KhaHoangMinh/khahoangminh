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