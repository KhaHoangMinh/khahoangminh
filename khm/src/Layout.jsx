import React, { useEffect } from 'react';
import { MainLayout } from '@/components/templates/index';

export default function Layout({ children, currentPageName }) {

    // Global hook to prevent right-clicking on images
    useEffect(() => {
        const handleContextMenu = (e) => {
            if (e.target && e.target.tagName === 'IMG') {
                e.preventDefault();
            }
        };

        // Attach the listener to the whole document
        document.addEventListener('contextmenu', handleContextMenu);

        // Cleanup the listener
        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
        };
    }, []);

    return (
        <MainLayout currentPageName={currentPageName}>          
            {children}
        </MainLayout>
    );
}