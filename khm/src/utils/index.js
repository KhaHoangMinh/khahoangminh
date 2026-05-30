export function createPageUrl(pageName) {
    return '/' + pageName.replace(/ /g, '-');
};

export { validateContactForm } from './validation';