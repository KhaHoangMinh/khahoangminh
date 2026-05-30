import {useLocation} from "react-router-dom";
import {useEffect} from "react";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Scroll smoothly to top on route change
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]);

    return null
};

export default ScrollToTop