export const SITE_NAME = 'KhaHoangMinh'; 

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'; 
export const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID; 
export const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

export const BREAKPOINTS = {
    mobile: '640px', 
    tablet: '768px', 
    desktop: '1024px', 
    wide: '1280px', 
};

export const ANIMATION_DURATION = {
    fast: 150,
    normal: 300, 
    slow: 500,
};