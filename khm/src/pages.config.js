import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Videos from './pages/Videos';
import Careers from './pages/Careers';
import News from './pages/News';
import Contact from './pages/Contact';
import __Layout from './Layout.jsx';


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