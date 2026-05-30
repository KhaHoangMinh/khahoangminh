import { lazy } from 'react';
import __Layout from '@/Layout.jsx';

const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Products = lazy(() => import('@/pages/Products'));
const Services = lazy(() => import('@/pages/Services'));
const Projects = lazy(() => import('@/pages/Projects'));
const Videos = lazy(() => import('@/pages/Videos'));
const Careers = lazy(() => import('@/pages/Careers'));
const News = lazy(() => import('@/pages/News'));
const Contact = lazy(() => import('@/pages/Contact'));

const PersonalDataProtection = lazy(() => import('@/pages/PersonalDataProtection'));
const PrivacyPolicy = lazy(() => import('@/pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('@/pages/TermsOfService'));

export const PAGES = {
    "home": Home,
    "about": About,
    "products": Products,
    "services": Services,
    "projects": Projects,
    "videos": Videos,
    "careers": Careers,
    "news": News,
    "contact": Contact,

    "protection": PersonalDataProtection,
    "privacy": PrivacyPolicy,
    "terms": TermsOfService,
}

export const pagesConfig = {
    mainPage: "home",
    Pages: PAGES,
    Layout: __Layout,
};