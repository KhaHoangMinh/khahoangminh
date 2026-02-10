import { pagesConfig } from './pages.config'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import {Suspense} from "react";
import ScrollToTop from "hooks/scollToTop.js";

const { Pages, Layout, mainPage } = pagesConfig;
const mainPageKey = mainPage ?? Object.keys(Pages)[0];
const MainPage = mainPageKey ? Pages[mainPageKey] : <></>;

const LoadingFallback = () => (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
    </div>
);

const LayoutWrapper = ({ children, currentPageName }) => Layout ?
    <Layout currentPageName={currentPageName}>{children}</Layout>
    : <>{children}</>;

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Suspense fallback={<LoadingFallback />}>
                <Routes>
                    <Route path="/" element={
                        <LayoutWrapper currentPageName={mainPageKey}>
                            <MainPage />
                        </LayoutWrapper>
                    } />
                    {Object.entries(Pages).map(([path, Page]) => (
                        <Route
                            key={path}
                            path={`/${path}`}
                            element={
                                <LayoutWrapper currentPageName={path}>
                                    <Page />
                                </LayoutWrapper>
                            }
                        />
                    ))}
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default App
