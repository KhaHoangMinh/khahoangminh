import { lazy } from 'react';
import __Layout from './Layout.jsx';

// Use lazy() for page imports
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Products = lazy(() => import('./pages/Products'));
const Services = lazy(() => import('./pages/Services'));
const Projects = lazy(() => import('./pages/Projects'));
const Videos = lazy(() => import('./pages/Videos'));
const Careers = lazy(() => import('./pages/Careers'));
const News = lazy(() => import('./pages/News'));
const Contact = lazy(() => import('./pages/Contact'));

export const PAGES = {
    "Home": Home,
    "About": About,
    "Products": Products,
    "Services": Services,
    "Projects": Projects,
    "Videos": Videos,
    "Careers": Careers,
    "News": News,
    "Contact": Contact,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};